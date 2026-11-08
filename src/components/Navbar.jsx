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
          ? 'bg-[#171114]/90 backdrop-blur-md border-b border-[#49333D] py-3.5 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className="text-left group flex items-center gap-2 focus:outline-none"
        >
          <span className="font-mono text-xl font-bold tracking-tight text-[#FFF7F7] group-hover:text-[#E87991] transition-colors">
            AJAY<span className="text-[#E87991]">.</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#241820] text-[#B9A6AA] border border-[#49333D]">
            Full Stack
          </span>
        </button>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex items-center gap-1 bg-[#241820]/80 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-[#49333D]">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors duration-200 ${
                    isActive
                      ? 'text-[#FFF7F7]'
                      : 'text-[#B9A6AA] hover:text-[#E87991]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full bg-[#302029] shadow-sm border border-[#E87991]/40"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E87991]" />
                    )}
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right Action: Download Resume */}
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
          className="md:hidden p-2 rounded-lg bg-[#241820] border border-[#49333D] text-[#FFF7F7] hover:text-[#E87991] focus:outline-none"
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
            className="md:hidden bg-[#171114] border-b border-[#49333D] px-6 py-5 shadow-2xl"
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
                        ? 'bg-[#302029] text-[#E87991] border border-[#49333D]'
                        : 'text-[#B9A6AA] hover:text-[#FFF7F7] hover:bg-[#241820]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E87991]" />}
                  </button>
                );
              })}
              <div className="pt-3 border-t border-[#49333D] flex flex-col gap-2">
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
