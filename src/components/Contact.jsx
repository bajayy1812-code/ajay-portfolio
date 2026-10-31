import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Send, MapPin, CheckCircle2, Copy, Check } from 'lucide-react';

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const contactLinks = [
  {
    icon: Mail,
    label: 'Direct Email',
    value: 'bajayy1812@gmail.com',
    href: 'mailto:bajayy1812@gmail.com',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/25',
    hover: 'hover:border-green-400/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)]',
    copyable: true,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn Profile',
    value: 'Ajay B',
    href: 'https://www.linkedin.com/in/ajay-b-0b0789328/',
    color: 'text-blue-electric',
    bg: 'bg-blue-electric/10',
    border: 'border-blue-electric/25',
    hover: 'hover:border-blue-electric/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]',
  },
  {
    icon: GithubIcon,
    label: 'GitHub Portfolio',
    value: 'bajayy1812-code',
    href: 'https://github.com/bajayy1812-code',
    color: 'text-purple-light',
    bg: 'bg-purple-primary/10',
    border: 'border-purple-primary/25',
    hover: 'hover:border-purple-primary/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('bajayy1812@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 900));
    setStatus('success');
    
    // Also build a mailto fallback link for seamless real-world delivery
    const mailtoUrl = `mailto:bajayy1812@gmail.com?subject=${encodeURIComponent(
      form.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `From: ${form.name} (${form.email})\n\n${form.message}`
    )}`;
    window.open(mailtoUrl, '_blank');

    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 6000);
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding bg-bg-main relative overflow-hidden">
      {/* Background Lighting */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 25% 75%, rgba(139,92,246,0.08) 0%, transparent 60%), radial-gradient(circle at 75% 25%, rgba(56,189,248,0.08) 0%, transparent 60%)'
        }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-purple-primary" />
            <span className="text-purple-light text-sm font-semibold tracking-widest uppercase">Contact</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black mb-4 text-text-primary max-w-2xl leading-tight"
          >
            Let's Build Something <span className="text-gradient-purple">Meaningful Together.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-text-secondary max-w-xl mb-16 text-lg">
            Have an opportunity, collaboration, or interesting idea? I'd love to connect.
          </motion.p>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left — contact channels */}
            <motion.div variants={stagger} className="lg:col-span-2 space-y-4">
              {contactLinks.map(({ icon: Icon, label, value, href, color, bg, border, hover, copyable }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className={`flex items-center justify-between glass-card rounded-2xl p-5 border ${border} ${hover} transition-all duration-300`}
                >
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 flex-1"
                  >
                    <div className={`w-11 h-11 rounded-xl ${bg} border ${border} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={18} className={color} />
                    </div>
                    <div>
                      <p className="text-text-muted text-[11px] font-semibold uppercase tracking-wider mb-0.5">{label}</p>
                      <p className={`font-semibold text-sm ${color}`}>{value}</p>
                    </div>
                  </a>

                  {copyable && (
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-xl glass border border-white/10 text-text-muted hover:text-text-primary transition-colors ml-2"
                      title="Copy email address"
                      aria-label="Copy email address"
                    >
                      {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                    </button>
                  )}
                </motion.div>
              ))}

              {/* Location Card */}
              <motion.div variants={fadeUp} className="flex items-center gap-4 glass-card rounded-2xl p-5 border border-white/8">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-text-secondary" />
                </div>
                <div>
                  <p className="text-text-muted text-[11px] font-semibold uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-text-primary font-semibold text-sm">Coimbatore, India</p>
                </div>
              </motion.div>

              {/* Quick Status Pill */}
              <motion.div variants={fadeUp} className="p-4 rounded-2xl bg-purple-primary/10 border border-purple-primary/20 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <p className="text-xs text-text-secondary leading-relaxed">
                  <span className="text-text-primary font-semibold">Active Availability:</span> Available for UI/UX Design, Frontend, or Full Stack Developer roles.
                </p>
              </motion.div>
            </motion.div>

            {/* Right — Contact Form */}
            <motion.div variants={fadeUp} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-7 sm:p-8 border border-white/10 space-y-4 shadow-2xl">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl bg-bg-main border border-white/10 text-text-primary text-sm placeholder-text-muted focus:outline-none focus:border-purple-primary/50 focus:ring-1 focus:ring-purple-primary/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-bg-main border border-white/10 text-text-primary text-sm placeholder-text-muted focus:outline-none focus:border-purple-primary/50 focus:ring-1 focus:ring-purple-primary/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Job Opportunity / Design Project / Full Stack Role"
                    className="w-full px-4 py-3 rounded-xl bg-bg-main border border-white/10 text-text-primary text-sm placeholder-text-muted focus:outline-none focus:border-purple-primary/50 focus:ring-1 focus:ring-purple-primary/30 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe the opportunity, role requirements, or idea you'd like to collaborate on..."
                    className="w-full px-4 py-3 rounded-xl bg-bg-main border border-white/10 text-text-primary text-sm placeholder-text-muted focus:outline-none focus:border-purple-primary/50 focus:ring-1 focus:ring-purple-primary/30 transition-colors resize-none"
                  />
                </div>

                {/* Status Alert */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-green-400/10 border border-green-400/25 text-green-400 text-sm"
                  >
                    <CheckCircle2 size={16} />
                    <span>Inquiry ready! Opening your default email client to send directly to Ajay.</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{
                    scale: status !== 'sending' ? 1.02 : 1,
                    boxShadow: status !== 'sending' ? '0 0 30px rgba(139,92,246,0.4)' : 'none'
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-purple-primary text-white font-semibold text-sm transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed hover:bg-purple-dark shadow-lg shadow-purple-primary/25"
                >
                  {status === 'sending' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                      />
                      Preparing message...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-center text-text-muted text-xs pt-1">
                  Or write directly to{' '}
                  <a href="mailto:bajayy1812@gmail.com" className="text-purple-light hover:underline font-mono">
                    bajayy1812@gmail.com
                  </a>
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
