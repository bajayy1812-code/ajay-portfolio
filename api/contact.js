export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Expected POST.' });
  }

  try {
    const { name, email, subject, message, botField } = req.body || {};

    // 1. Spam protection via honeypot field
    if (botField) {
      // Bot filled the hidden honeypot field - silently drop
      return res.status(200).json({ success: true, message: 'Message processed' });
    }

    // 2. Server-side validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'Please provide your full name.' });
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      return res.status(400).json({ error: 'Please provide your email address.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Please enter a message.' });
    }

    if (message.trim().length < 10) {
      return res.status(400).json({ error: 'Message must be at least 10 characters long.' });
    }

    // 3. Check environment configuration
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'bajayy1812@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

    if (!apiKey) {
      console.warn('RESEND_API_KEY is not set in environment variables.');
      return res.status(503).json({
        error: 'Email service is not yet configured. Please set RESEND_API_KEY in your Vercel Project Environment Variables.',
        code: 'MISSING_API_KEY'
      });
    }

    const cleanSubject = subject && subject.trim() 
      ? `New Portfolio Contact – ${subject.trim()}`
      : `New Portfolio Contact from ${name.trim()}`;

    const submissionTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #171114; color: #FFF7F7; border: 1px solid #49333D; border-radius: 12px;">
        <div style="border-bottom: 1px solid #49333D; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #E87991; margin: 0 0 6px 0; font-size: 20px;">New Portfolio Contact Message</h2>
          <p style="color: #B9A6AA; margin: 0; font-size: 13px;">Received via ajay-portfolio.vercel.app on ${submissionTime} IST</p>
        </div>

        <div style="background: #241820; border: 1px solid #49333D; border-radius: 8px; padding: 18px; margin-bottom: 20px;">
          <p style="margin: 0 0 10px 0; font-size: 14px;"><strong>Sender Name:</strong> ${escapeHtml(name.trim())}</p>
          <p style="margin: 0 0 10px 0; font-size: 14px;"><strong>Sender Email:</strong> <a href="mailto:${escapeHtml(email.trim())}" style="color: #E87991;">${escapeHtml(email.trim())}</a></p>
          <p style="margin: 0; font-size: 14px;"><strong>Subject:</strong> ${escapeHtml(subject ? subject.trim() : 'General Inquiry')}</p>
        </div>

        <div style="background: #302029; border: 1px solid #49333D; border-radius: 8px; padding: 18px; margin-bottom: 20px;">
          <h4 style="color: #E87991; margin: 0 0 10px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Message Content:</h4>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #FFF7F7; white-space: pre-wrap;">${escapeHtml(message.trim())}</p>
        </div>

        <div style="border-top: 1px solid #49333D; padding-top: 14px; font-size: 12px; color: #8D7B80; text-align: center;">
          Reply directly to this email to respond to ${escapeHtml(name.trim())} (${escapeHtml(email.trim())}).
        </div>
      </div>
    `;

    // 4. Send via Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [recipientEmail],
        reply_to: email.trim(),
        subject: cleanSubject,
        html: emailHtml,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Resend API Error:', result);
      return res.status(response.status).json({
        error: result.message || 'The email provider could not deliver the message. Please try again.',
        details: result,
      });
    }

    return res.status(200).json({
      success: true,
      messageId: result.id,
      timestamp: submissionTime,
    });
  } catch (error) {
    console.error('Serverless Contact Handler Error:', error);
    return res.status(500).json({
      error: 'An internal server error occurred while sending the message. Please try again later.',
    });
  }
}

function escapeHtml(string) {
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
