import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, FileText, ArrowUpRight } from 'lucide-react';

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
          ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-[#1E293B] py-3.5 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className="text-left group flex items-center gap-1.5 focus:outline-none"
        >
          <span className="font-mono text-xl font-bold tracking-tight text-[#F8FAFC]">
            AJAY<span className="text-[#6366F1]">.</span>
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-[#151D2E] text-[#94A3B8] border border-[#1E293B]">
            dev
          </span>
        </button>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex items-center gap-1 bg-[#151D2E]/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#1E293B]">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? 'text-[#F8FAFC]'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full bg-[#6366F1]/20 border border-[#6366F1]/40"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
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
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6366F1] hover:bg-[#4F46E5] text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-md shadow-[#6366F1]/20"
          >
            <Download size={13} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#151D2E] border border-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] focus:outline-none"
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
            className="md:hidden bg-[#0B0F19] border-b border-[#1E293B] px-6 py-5 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#151D2E] text-[#6366F1] border border-[#1E293B]'
                        : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#151D2E]/50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-[#1E293B] flex items-center gap-3">
                <a
                  href={RESUME_PATH}
                  download="Ajay_B_Full_Stack_Developer_Resume_Final.pdf"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#6366F1] text-white text-xs font-semibold shadow-md"
                >
                  <Download size={14} />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
