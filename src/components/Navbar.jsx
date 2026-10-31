import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'UI/UX Design', href: '#uiux' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(i => i.href.slice(1));
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = useCallback((href) => {
    if (href === '#resume') {
      window.dispatchEvent(new CustomEvent('open-resume-modal'));
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass border-b border-white/8 py-3'
            : 'bg-transparent py-5'
        }`}
        style={{ backdropFilter: scrolled ? 'blur(20px)' : 'none' }}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => handleNav('#home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="font-mono font-bold text-xl tracking-widest text-gradient-purple"
          >
            AJAY.
          </motion.button>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.href}>
                  <motion.button
                    onClick={() => handleNav(item.href)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-purple-400'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute inset-0 rounded-lg bg-purple-primary/10 border border-purple-primary/20"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.button>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <motion.button
            onClick={() => handleNav('#contact')}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139,92,246,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-primary/20 border border-purple-primary/30 text-purple-light text-sm font-semibold transition-all duration-200 hover:bg-purple-primary/30"
          >
            Hire Me
          </motion.button>

          {/* Mobile Toggle */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg glass border border-white/10"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} className="text-purple-light" /> : <Menu size={20} className="text-text-secondary" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 glass border-b border-white/8 lg:hidden"
          >
            <ul className="flex flex-col py-4 container-custom gap-1">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleNav(item.href)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === item.href.slice(1)
                        ? 'text-purple-light bg-purple-primary/10'
                        : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

