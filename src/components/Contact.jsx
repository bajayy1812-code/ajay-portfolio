import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Copy, Check, AlertCircle, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  // 1. Initial form state strictly empty without sample values
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    botField: '', // Hidden honeypot field
  });

  // 2. Field-specific validation errors
  const [fieldErrors, setFieldErrors] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('bajayy1812@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific validation error on input
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }));
    }

    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const validateForm = () => {
    const errors = {};
    const trimmedName = formData.fullName.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      errors.fullName = 'Full Name is required.';
    } else if (trimmedName.length > 100) {
      errors.fullName = 'Name must be 100 characters or fewer.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      errors.email = 'Email address is required.';
    } else if (!emailRegex.test(trimmedEmail)) {
      errors.email = 'Please enter a valid email address.';
    } else if (trimmedEmail.length > 120) {
      errors.email = 'Email must be 120 characters or fewer.';
    }

    if (!trimmedSubject) {
      errors.subject = 'Subject is required.';
    } else if (trimmedSubject.length > 150) {
      errors.subject = 'Subject must be 150 characters or fewer.';
    }

    if (!trimmedMessage) {
      errors.message = 'Message cannot be empty.';
    } else if (trimmedMessage.length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    } else if (trimmedMessage.length > 5000) {
      errors.message = 'Message must be 5000 characters or fewer.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const launchMailtoFallback = () => {
    const mailSubject = encodeURIComponent(formData.subject.trim() || `Inquiry from ${formData.fullName.trim() || 'Visitor'}`);
    const mailBody = encodeURIComponent(
      `Name: ${formData.fullName.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    );
    window.location.href = `mailto:bajayy1812@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submission while already sending
    if (status === 'sending') return;

    // Validate fields
    if (!validateForm()) {
      setStatus('error');
      setErrorMessage('Please correct the highlighted fields before submitting.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          botField: formData.botField,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setStatus('success');
        // Reset form after successful submission
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: '',
          botField: '',
        });
        setFieldErrors({
          fullName: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(
          data.error || "Unable to send your message right now. Please try again or contact me directly."
        );
        if (data.validationErrors) {
          setFieldErrors((prev) => ({ ...prev, ...data.validationErrors }));
        }
      }
    } catch (err) {
      console.error('Contact Form Fetch Error:', err);
      setStatus('error');
      setErrorMessage("Unable to send your message right now. Please try again or contact me directly.");
    }
  };

  return (
    <section id="contact" className="section-padding bg-[#241820]/40 relative border-t border-[#49333D]">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {/* Section Header */}
          <motion.div variants={fadeUp} className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#E87991]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#E87991] font-bold">Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FFF7F7]">
              Let's build <span className="editorial-serif font-medium text-[#E87991]">something.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#B9A6AA] max-w-2xl">
              Have an opportunity, project or just want to connect? Send me a message.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Contact Information & Profiles */}
            <motion.div variants={fadeUp} className="lg:col-span-5 space-y-6">
              {/* Status / Availability Card */}
              <div className="burgundy-card p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#49333D]">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#8D7B80] block">Status</span>
                    <span className="text-xs font-bold text-[#E87991] flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-[#E87991] animate-pulse" />
                      AVAILABLE FOR SELECT OPPORTUNITIES
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase text-[#8D7B80] block">Response Time</span>
                    <span className="text-xs font-semibold text-[#FFF7F7] font-mono">WITHIN 24 HOURS</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-[#8D7B80] block">Location</span>
                  <span className="text-sm font-semibold text-[#FFF7F7] flex items-center gap-1.5 mt-0.5">
                    <MapPin size={14} className="text-[#E87991]" /> Coimbatore, Tamil Nadu, India
                  </span>
                </div>
              </div>

              {/* Direct Email Card with One-Click Copy */}
              <div className="burgundy-card p-6">
                <span className="text-xs font-mono uppercase text-[#8D7B80] font-bold block mb-2">
                  Direct Email
                </span>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#241820] border border-[#49333D]">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-[#FFF7F7]">
                    bajayy1812@gmail.com
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md bg-[#302029] hover:bg-[#E87991] hover:text-[#171114] text-[#B9A6AA] transition-colors flex items-center gap-1 text-xs"
                    title="Copy Email"
                  >
                    {copied ? (
                      <>
                        <Check size={13} className="text-[#E87991]" />
                        <span className="text-[11px] font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Verified Professional Profiles */}
              <div className="burgundy-card p-6">
                <span className="text-xs font-mono uppercase text-[#8D7B80] font-bold block mb-3">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com/bajayy1812-code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-[#241820] border border-[#49333D] hover:border-[#E87991] hover:text-[#E87991] transition-all flex items-center gap-2.5 text-xs font-semibold text-[#FFF7F7]"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ajay-b-0b0789328/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-[#241820] border border-[#49333D] hover:border-[#E87991] hover:text-[#E87991] transition-all flex items-center gap-2.5 text-xs font-semibold text-[#FFF7F7]"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div variants={fadeUp} className="lg:col-span-7">
              <div className="burgundy-card p-6 sm:p-8">
                <h3 className="text-lg font-bold text-[#FFF7F7] mb-2 flex items-center gap-2">
                  <MessageSquare size={17} className="text-[#E87991]" />
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#B9A6AA] mb-6">
                  Fill in your details below. Your message will be delivered directly to <span className="text-[#FFF7F7] font-semibold">bajayy1812@gmail.com</span>.
                </p>

                {/* Error Banner with Instant Mailto Fallback */}
                {status === 'error' && (
                  <div className="mb-4 p-4 rounded-lg bg-[#241820] border border-[#E87991]/50 text-xs text-[#FFF7F7] space-y-2">
                    <div className="flex items-center gap-2 text-[#E87991] font-semibold">
                      <AlertCircle size={16} />
                      <span>{errorMessage}</span>
                    </div>
                    <div className="pt-2 border-t border-[#49333D] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-[#B9A6AA]">Want to send immediately via your mail client?</span>
                      <button
                        type="button"
                        onClick={launchMailtoFallback}
                        className="px-3 py-1 rounded bg-[#E87991] text-[#171114] font-bold text-xs hover:bg-[#D4637B] transition-colors self-start sm:self-auto cursor-pointer"
                      >
                        Launch Mail Client
                      </button>
                    </div>
                  </div>
                )}

                {/* Success Banner */}
                {status === 'success' && (
                  <div className="mb-6 p-4 rounded-lg bg-[#241820] border border-emerald-500/50 text-xs text-[#FFF7F7] space-y-1">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                      <CheckCircle2 size={16} />
                      <span>Your message has been sent successfully! I'll get back to you soon.</span>
                    </div>
                    <p className="text-[#B9A6AA]">
                      Thank you for getting in touch. Your message has been delivered to bajayy1812@gmail.com.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Honeypot Spam Protection (hidden from real users) */}
                  <input
                    type="text"
                    name="botField"
                    value={formData.botField}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#FFF7F7] font-semibold mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        disabled={status === 'sending'}
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-[#241820] border text-xs text-[#FFF7F7] placeholder-[#8D7B80] focus:outline-none focus:bg-[#171114] transition-all disabled:opacity-60 ${
                          fieldErrors.fullName ? 'border-[#E87991]' : 'border-[#49333D] focus:border-[#E87991]'
                        }`}
                        required
                      />
                      {fieldErrors.fullName && (
                        <p className="text-[11px] text-[#E87991] mt-1 font-mono">{fieldErrors.fullName}</p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#FFF7F7] font-semibold mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        disabled={status === 'sending'}
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-[#241820] border text-xs text-[#FFF7F7] placeholder-[#8D7B80] focus:outline-none focus:bg-[#171114] transition-all disabled:opacity-60 ${
                          fieldErrors.email ? 'border-[#E87991]' : 'border-[#49333D] focus:border-[#E87991]'
                        }`}
                        required
                      />
                      {fieldErrors.email && (
                        <p className="text-[11px] text-[#E87991] mt-1 font-mono">{fieldErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#FFF7F7] font-semibold mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What would you like to discuss?"
                      disabled={status === 'sending'}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#241820] border text-xs text-[#FFF7F7] placeholder-[#8D7B80] focus:outline-none focus:bg-[#171114] transition-all disabled:opacity-60 ${
                        fieldErrors.subject ? 'border-[#E87991]' : 'border-[#49333D] focus:border-[#E87991]'
                      }`}
                      required
                    />
                    {fieldErrors.subject && (
                      <p className="text-[11px] text-[#E87991] mt-1 font-mono">{fieldErrors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#FFF7F7] font-semibold mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      disabled={status === 'sending'}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#241820] border text-xs text-[#FFF7F7] placeholder-[#8D7B80] focus:outline-none focus:bg-[#171114] transition-all resize-none disabled:opacity-60 ${
                        fieldErrors.message ? 'border-[#E87991]' : 'border-[#49333D] focus:border-[#E87991]'
                      }`}
                      required
                    />
                    {fieldErrors.message && (
                      <p className="text-[11px] text-[#E87991] mt-1 font-mono">{fieldErrors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full py-3 text-sm mt-2 font-bold cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-[#171114] border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
