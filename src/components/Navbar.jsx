import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const RESUME_PATH = '/resume/Ajay_B_Full_Stack_Developer_Resume_Final.pdf';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((i) => i.href.slice(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F3EEE3]/90 backdrop-blur-md border-b border-[#D8D0C2] py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className="text-left group flex items-center gap-2 focus:outline-none"
        >
          <span className="font-mono text-xl font-bold tracking-tight text-[#111111] group-hover:text-[#D9541E] transition-colors">
            AJAY<span className="text-[#D9541E]">.</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#E9E2D5] text-[#77736B] border border-[#D8D0C2]">
            Full Stack
          </span>
        </button>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex items-center gap-1 bg-[#E9E2D5]/80 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-[#D8D0C2]">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors duration-200 ${
                    isActive
                      ? 'text-[#111111]'
                      : 'text-[#77736B] hover:text-[#D9541E]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full bg-[#FFFFFF] shadow-sm border border-[#D8D0C2]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9541E]" />
                    )}
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right Action: Resume */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={RESUME_PATH}
            download="Ajay_B_Full_Stack_Developer_Resume_Final.pdf"
            className="btn-primary text-xs py-2 px-4 shadow-sm"
          >
            <Download size={13} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#E9E2D5] border border-[#D8D0C2] text-[#111111] hover:text-[#D9541E] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#F3EEE3] border-b border-[#D8D0C2] px-6 py-5 shadow-lg"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#E9E2D5] text-[#D9541E] border border-[#D8D0C2]'
                        : 'text-[#77736B] hover:text-[#111111] hover:bg-[#E9E2D5]/50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#D9541E]" />}
                  </button>
                );
              })}
              <div className="pt-3 border-t border-[#D8D0C2] flex flex-col gap-2">
                <a
                  href={RESUME_PATH}
                  download="Ajay_B_Full_Stack_Developer_Resume_Final.pdf"
                  className="btn-primary text-center py-2.5 text-xs w-full"
                >
                  <Download size={14} className="inline mr-1.5" />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
