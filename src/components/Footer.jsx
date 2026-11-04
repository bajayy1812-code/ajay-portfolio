import { ArrowUp, Mail } from 'lucide-react';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-[#0B0F19] border-t border-[#1E293B] py-12 text-[#94A3B8]">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-8 items-start pb-8 border-b border-[#1E293B]">
          {/* Identity Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="font-mono text-xl font-bold text-[#F8FAFC] tracking-tight">
              AJAY B<span className="text-[#6366F1]">.</span>
            </div>
            <p className="text-xs text-[#94A3B8] max-w-sm leading-relaxed">
              Aspiring Full Stack Developer | MERN Stack Developer. Building scalable web architectures, clean reactive interfaces, and robust backend APIs.
            </p>
            <div className="flex items-center gap-3 pt-2 text-[#94A3B8]">
              <a
                href="https://github.com/bajayy1812-code"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#151D2E] border border-[#1E293B] hover:text-[#F8FAFC] hover:border-[#6366F1]/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/ajay-b-0b0789328/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#151D2E] border border-[#1E293B] hover:text-[#22D3EE] hover:border-[#22D3EE]/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="mailto:bajayy1812@gmail.com"
                className="p-2 rounded-lg bg-[#151D2E] border border-[#1E293B] hover:text-[#6366F1] hover:border-[#6366F1]/40 transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] font-semibold mb-3">
              Section Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-[#94A3B8] hover:text-[#22D3EE] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Status & Location */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] font-semibold mb-3">
              Career Status
            </h4>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#151D2E] border border-[#1E293B] text-xs font-mono text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Open to Roles</span>
            </div>
            <p className="text-[11px] text-[#64748B] font-mono mt-1">
              Coimbatore, Tamil Nadu, India
            </p>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <p>© {new Date().getFullYear()} Ajay B. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors focus:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
