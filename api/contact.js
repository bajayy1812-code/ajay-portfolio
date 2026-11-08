import { Resend } from 'resend';

function escapeHtml(string) {
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req, res) {
  // 1. Restrict endpoint to POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method Not Allowed. Expected POST.',
    });
  }

  try {
    const body = req.body || {};
    const fullName = (body.fullName || body.name || '').trim();
    const email = (body.email || '').trim();
    const subject = (body.subject || '').trim();
    const message = (body.message || '').trim();
    const botField = (body.botField || '').trim();

    // 2. Spam protection: Honeypot check
    if (botField) {
      // Silently accept without sending to discourage bots
      return res.status(200).json({ success: true, message: 'Message received' });
    }

    // 3. Server-side validation
    const validationErrors = {};

    if (!fullName) {
      validationErrors.fullName = 'Full Name is required.';
    } else if (fullName.length > 100) {
      validationErrors.fullName = 'Full Name must be 100 characters or fewer.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      validationErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(email)) {
      validationErrors.email = 'Please provide a valid email address.';
    } else if (email.length > 120) {
      validationErrors.email = 'Email address must be 120 characters or fewer.';
    }

    if (!subject) {
      validationErrors.subject = 'Subject is required.';
    } else if (subject.length > 150) {
      validationErrors.subject = 'Subject must be 150 characters or fewer.';
    }

    if (!message) {
      validationErrors.message = 'Message cannot be empty.';
    } else if (message.length < 10) {
      validationErrors.message = 'Message must be at least 10 characters long.';
    } else if (message.length > 5000) {
      validationErrors.message = 'Message must be 5000 characters or fewer.';
    }

    if (Object.keys(validationErrors).length > 0) {
      return res.status(400).json({
        error: 'Validation failed. Please review the highlighted fields.',
        validationErrors,
      });
    }

    // 4. Configuration Check
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || process.env.CONTACT_RECIPIENT_EMAIL || 'bajayy1812@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

    if (!apiKey) {
      console.warn('RESEND_API_KEY is not configured in environment variables.');
      return res.status(503).json({
        error: 'The email delivery service is currently not configured. Please configure RESEND_API_KEY in your Vercel Environment Variables.',
        code: 'MISSING_API_KEY',
      });
    }

    const cleanSubject = `New Portfolio Inquiry - ${subject}`;

    const submissionDate = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    // 5. Professional HTML Email Notification Template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${escapeHtml(cleanSubject)}</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #171114; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #FFF7F7;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #171114; padding: 32px 16px;">
            <tr>
              <td align="center">
                <table role="presentation" width="100%" style="max-width: 600px; background-color: #241820; border: 1px solid #49333D; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.4);" cellspacing="0" cellpadding="0">
                  
                  <!-- Top Accent Bar -->
                  <tr>
                    <td height="4" style="background-color: #E87991;"></td>
                  </tr>

                  <!-- Header -->
                  <tr>
                    <td style="padding: 28px 28px 16px 28px; border-bottom: 1px solid #49333D;">
                      <span style="font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.1em; color: #E87991; font-weight: bold; display: block; margin-bottom: 6px;">
                        New Recruiter Contact Message
                      </span>
                      <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #FFF7F7; line-height: 1.3;">
                        ${escapeHtml(subject)}
                      </h1>
                    </td>
                  </tr>

                  <!-- Recruiter Info Box -->
                  <tr>
                    <td style="padding: 24px 28px 16px 28px;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #302029; border: 1px solid #49333D; border-radius: 8px; padding: 16px;">
                        <tr>
                          <td style="padding-bottom: 10px; font-size: 13px; color: #B9A6AA;">
                            <strong style="color: #FFF7F7;">Recruiter Full Name:</strong> ${escapeHtml(fullName)}
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-bottom: 10px; font-size: 13px; color: #B9A6AA;">
                            <strong style="color: #FFF7F7;">Recruiter Email Address:</strong> 
                            <a href="mailto:${escapeHtml(email)}" style="color: #E87991; text-decoration: none; font-weight: 600;">${escapeHtml(email)}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-bottom: 10px; font-size: 13px; color: #B9A6AA;">
                            <strong style="color: #FFF7F7;">Subject:</strong> ${escapeHtml(subject)}
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size: 12px; color: #B9A6AA;">
                            <strong style="color: #FFF7F7;">Submission Date & Time:</strong> ${submissionDate} IST
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Complete Message Content -->
                  <tr>
                    <td style="padding: 0 28px 24px 28px;">
                      <div style="background-color: #171114; border: 1px solid #49333D; border-radius: 8px; padding: 20px;">
                        <span style="font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.08em; color: #E87991; font-weight: bold; display: block; margin-bottom: 12px;">
                          Complete Message:
                        </span>
                        <div style="font-size: 14px; line-height: 1.65; color: #FFF7F7; white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">${escapeHtml(message)}</div>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer / Reply Action -->
                  <tr>
                    <td style="padding: 18px 28px 24px 28px; border-top: 1px solid #49333D; text-align: center; font-size: 12px; color: #B9A6AA;">
                      <p style="margin: 0 0 10px 0;">
                        Direct Reply-To is configured. Simply hit <strong>Reply</strong> in your mail client to email <a href="mailto:${escapeHtml(email)}" style="color: #E87991;">${escapeHtml(fullName)}</a>.
                      </p>
                      <span style="font-size: 11px; color: #6D5660;">Portfolio Contact Engine · Delivered to ${escapeHtml(recipientEmail)}</span>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    // 6. Send Email using Resend SDK
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      reply_to: email,
      subject: cleanSubject,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend SDK Delivery Error:', error);
      return res.status(400).json({
        error: error.message || 'Unable to deliver message right now. Please try again or contact directly.',
        details: error,
      });
    }

    return res.status(200).json({
      success: true,
      messageId: data?.id,
      timestamp: submissionDate,
    });
  } catch (err) {
    console.error('Unexpected Contact Handler Error:', err);
    return res.status(500).json({
      error: 'An internal server error occurred while sending the message. Please try again or contact directly.',
    });
  }
}
