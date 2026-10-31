import { motion } from 'framer-motion';
import { Mail, ArrowUp } from 'lucide-react';

const GithubIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedinIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'UI/UX Design', href: '#uiux' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/ajay-b-0b0789328/', label: 'LinkedIn' },
  { icon: GithubIcon, href: 'https://github.com/ajayb1812', label: 'GitHub' },
  { icon: Mail, href: 'mailto:bajayy1812@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-bg-secondary border-t border-white/8 relative overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-purple-primary to-transparent opacity-50" />

      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <div className="font-mono font-black text-2xl tracking-widest text-gradient-purple mb-3">AJAY.</div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Designed with creativity. Built with passion.
            </p>
            <p className="text-text-muted text-xs mt-2">Coimbatore, India</p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-5">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl glass border border-white/10 text-text-secondary hover:text-purple-light hover:border-purple-primary/30 transition-all duration-200"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="text-text-primary font-bold text-sm mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-text-secondary text-sm hover:text-purple-light transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact quick */}
          <div>
            <h4 className="text-text-primary font-bold text-sm mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <a href="mailto:bajayy1812@gmail.com" className="block text-text-secondary text-sm hover:text-purple-light transition-colors">
                bajayy1812@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/ajay-b-0b0789328/" target="_blank" rel="noopener noreferrer" className="block text-text-secondary text-sm hover:text-blue-electric transition-colors">
                LinkedIn Profile
              </a>
              <a href="https://github.com/ajayb1812" target="_blank" rel="noopener noreferrer" className="block text-text-secondary text-sm hover:text-purple-light transition-colors">
                GitHub Portfolio
              </a>
            </div>

            {/* Availability */}
            <div className="mt-5 flex items-center gap-2 px-3 py-2 rounded-lg bg-green-400/10 border border-green-400/20 w-fit">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-semibold">Open to opportunities</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} Ajay B. All rights reserved. Built with React.js & Tailwind CSS.
          </p>

          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(139,92,246,0.4)' }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-primary/15 border border-purple-primary/30 text-purple-light text-xs font-semibold transition-all duration-200 hover:bg-purple-primary/25"
            aria-label="Back to top"
          >
            <ArrowUp size={13} />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
