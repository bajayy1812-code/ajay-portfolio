import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Send, MapPin, Copy, Check, AlertCircle, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

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

    const emailRegex = /^[^\s@]+@[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('sending');

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
    <section id="contact" className="section-padding bg-[#E9E2D5]/40 relative border-t border-[#D8D0C2]">
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
              <span className="w-6 h-px bg-[#D9541E]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#D9541E] font-bold">Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111]">
              Let's Discuss <span className="editorial-serif font-medium text-[#D9541E]">Opportunities.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#77736B] max-w-2xl">
              Currently open to full-time engineering roles, MERN stack developer positions, and technical collaborations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Contact Information & Editorial Metadata */}
            <motion.div variants={fadeUp} className="lg:col-span-5 space-y-6">
              {/* Status / Availability Card (Inspired by Reference) */}
              <div className="editorial-card p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#D8D0C2]">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#77736B] block">Status</span>
                    <span className="text-xs font-bold text-[#D9541E] flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-[#D9541E] animate-pulse" />
                      AVAILABLE FOR SELECT ROLES
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase text-[#77736B] block">Response</span>
                    <span className="text-xs font-semibold text-[#111111] font-mono">WITHIN 24 HOURS</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-[#77736B] block">Location</span>
                  <span className="text-sm font-semibold text-[#111111] flex items-center gap-1.5 mt-0.5">
                    <MapPin size={14} className="text-[#D9541E]" /> Coimbatore, Tamil Nadu, India
                  </span>
                </div>
              </div>

              {/* Direct Email Card with One-Click Copy */}
              <div className="editorial-card p-6">
                <span className="text-xs font-mono uppercase text-[#77736B] font-bold block mb-2">
                  Direct Email Address
                </span>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#FAF7F0] border border-[#D8D0C2]">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-[#111111]">
                    bajayy1812@gmail.com
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md bg-[#E9E2D5] hover:bg-[#D9541E] hover:text-white text-[#111111] transition-colors flex items-center gap-1 text-xs"
                    title="Copy Email"
                  >
                    {copied ? (
                      <>
                        <Check size={13} className="text-[#D9541E]" />
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
              <div className="editorial-card p-6">
                <span className="text-xs font-mono uppercase text-[#77736B] font-bold block mb-3">
                  Verified Engineering Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com/bajayy1812-code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-[#FAF7F0] border border-[#D8D0C2] hover:border-[#D9541E] hover:bg-[#FFFFFF] transition-all flex items-center gap-2.5 text-xs font-semibold text-[#111111]"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ajay-b-0b0789328/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-[#FAF7F0] border border-[#D8D0C2] hover:border-[#D9541E] hover:bg-[#FFFFFF] transition-all flex items-center gap-2.5 text-xs font-semibold text-[#111111]"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Functional Message Form */}
            <motion.div variants={fadeUp} className="lg:col-span-7">
              <div className="editorial-card p-6 sm:p-8">
                <h3 className="text-lg font-bold text-[#111111] mb-2 flex items-center gap-2">
                  <MessageSquare size={17} className="text-[#D9541E]" />
                  Send an Inquiry
                </h3>
                <p className="text-xs text-[#77736B] mb-6">
                  Fill in your details below and your preferred mail client will launch with a pre-formatted inquiry.
                </p>

                {status === 'error' && (
                  <div className="mb-4 p-3 rounded-lg bg-[#D9541E]/10 border border-[#D9541E]/30 text-xs text-[#D9541E] flex items-center gap-2 font-medium">
                    <AlertCircle size={15} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="mb-4 p-3 rounded-lg bg-[#E9E2D5] border border-[#D8D0C2] text-xs text-[#111111] flex items-center gap-2 font-medium">
                    <CheckCircle2 size={15} className="text-[#D9541E]" />
                    <span>Inquiry prepared! Launching your mail client...</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Jane Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF7F0] border border-[#D8D0C2] text-xs text-[#111111] placeholder-[#77736B] focus:outline-none focus:border-[#D9541E] focus:bg-[#FFFFFF] transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. jane@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF7F0] border border-[#D8D0C2] text-xs text-[#111111] placeholder-[#77736B] focus:outline-none focus:border-[#D9541E] focus:bg-[#FFFFFF] transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Full Stack Developer Opportunity"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF7F0] border border-[#D8D0C2] text-xs text-[#111111] placeholder-[#77736B] focus:outline-none focus:border-[#D9541E] focus:bg-[#FFFFFF] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me a little about your team, role scope, and timeline..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF7F0] border border-[#D8D0C2] text-xs text-[#111111] placeholder-[#77736B] focus:outline-none focus:border-[#D9541E] focus:bg-[#FFFFFF] transition-all resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full py-3 text-sm mt-2 font-semibold"
                  >
                    {status === 'sending' ? (
                      <span>Preparing Inquiry...</span>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
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
