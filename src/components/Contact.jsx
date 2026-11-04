import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Send, MapPin, Copy, Check, AlertCircle, CheckCircle2, MessageSquare } from 'lucide-react';

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

  const [formData, setFormData] = useState({
    name: '',
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
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('sending');

    // Create a robust mailto fallback that immediately launches the recruiter's native client
    const mailSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:bajayy1812@gmail.com?subject=${mailSubject}&body=${mailBody}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 8000);
    }, 600);
  };

  return (
    <section id="contact" className="section-padding bg-[#0B0F19] relative border-t border-[#1E293B]">
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
              <span className="w-6 h-px bg-[#6366F1]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#6366F1]">Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">
              Let's Connect & <span className="text-gradient-accent">Collaborate.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#94A3B8] max-w-2xl">
              I am open to full-time engineering roles, frontend or full stack opportunities, and technical discussions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Direct Communication Channels */}
            <motion.div variants={fadeUp} className="lg:col-span-5 space-y-4">
              {/* Email Card with 1-Click Copy */}
              <div className="glass-card rounded-2xl p-6 border border-[#1E293B]">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider block">
                        Direct Email
                      </span>
                      <a
                        href="mailto:bajayy1812@gmail.com"
                        className="text-sm font-bold text-[#F8FAFC] hover:text-[#22D3EE] transition-colors"
                      >
                        bajayy1812@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#0B0F19] border border-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                  </button>
                </div>
                {copied && (
                  <span className="text-[11px] font-mono text-green-400 mt-2 block">
                    ✓ Email address copied to clipboard!
                  </span>
                )}
              </div>

              {/* LinkedIn Link Card */}
              <a
                href="https://www.linkedin.com/in/ajay-b-0b0789328/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-6 border border-[#1E293B] flex items-center justify-between glass-card-hover group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/20">
                    <LinkedinIcon size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider block">
                      Professional Network
                    </span>
                    <span className="text-sm font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">
                      Ajay B on LinkedIn
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#64748B] group-hover:text-[#F8FAFC] transition-colors">
                  View Profile ↗
                </span>
              </a>

              {/* GitHub Link Card */}
              <a
                href="https://github.com/bajayy1812-code"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-6 border border-[#1E293B] flex items-center justify-between glass-card-hover group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20">
                    <GithubIcon size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider block">
                      Source Code & Repositories
                    </span>
                    <span className="text-sm font-bold text-[#F8FAFC] group-hover:text-[#6366F1] transition-colors">
                      @bajayy1812-code on GitHub
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#64748B] group-hover:text-[#F8FAFC] transition-colors">
                  Repositories ↗
                </span>
              </a>

              {/* Location & Status Card */}
              <div className="glass-card rounded-2xl p-6 border border-[#1E293B]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#111827] text-[#94A3B8] border border-[#1E293B]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider block">
                      Based In
                    </span>
                    <span className="text-sm font-semibold text-[#F8FAFC]">
                      Coimbatore, Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div variants={fadeUp} className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-[#1E293B] space-y-4"
                noValidate
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-[#F8FAFC] font-semibold flex items-center gap-2">
                    <MessageSquare size={16} className="text-[#6366F1]" />
                    Send a Message
                  </h3>
                  <span className="text-[11px] font-mono text-[#64748B]">
                    Direct Mail Delivery
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] mb-1.5 uppercase">
                      Name <span className="text-[#6366F1]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Hiring Manager / Recruiter"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-[#1E293B] text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#6366F1] transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] mb-1.5 uppercase">
                      Email Address <span className="text-[#6366F1]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-[#1E293B] text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#6366F1] transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#94A3B8] mb-1.5 uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Full Stack Developer Opportunity / Project Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-[#1E293B] text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#6366F1] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#94A3B8] mb-1.5 uppercase">
                    Message <span className="text-[#6366F1]">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe the role, project, or topic you'd like to discuss..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-[#1E293B] text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#6366F1] transition-colors resize-none"
                    required
                  />
                </div>

                {/* Validation and Success Notifications */}
                {status === 'error' && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle size={15} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-xs flex items-center gap-2">
                    <CheckCircle2 size={15} />
                    <span>Your message has been initiated in your default email client. Thank you for connecting!</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 rounded-lg bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-[#6366F1]/20 disabled:opacity-50"
                >
                  <Send size={14} />
                  <span>{status === 'sending' ? 'Preparing Email...' : 'Send Message'}</span>
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
