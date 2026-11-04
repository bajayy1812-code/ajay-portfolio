import { motion } from 'framer-motion';
import { ArrowDown, Download, FolderGit2, Mail, ExternalLink, Code2, Database, Layout } from 'lucide-react';

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

const RESUME_PATH = '/resume/Ajay_B_Full_Stack_Developer_Resume_Final.pdf';

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center items-center bg-[#0B0F19] text-[#F8FAFC] pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle Developer Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1E293B 1px, transparent 1px),
            linear-gradient(to bottom, #1E293B 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Gentle Radial Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#6366F1]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#151D2E] border border-[#1E293B] text-xs font-mono text-[#94A3B8]"
        >
          <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
          <span>Available for Full-time Roles & Internships</span>
        </motion.div>

        {/* Primary Identity Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-[#F8FAFC]">
            Hi, I'm <span className="text-[#6366F1]">Ajay B.</span>
          </h1>
          <p className="mt-3 text-lg sm:text-xl md:text-2xl font-medium text-[#22D3EE] tracking-normal font-mono">
            Aspiring Full Stack Developer | MERN Stack Developer
          </p>
        </motion.div>

        {/* Concise Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-[#94A3B8] max-w-2xl leading-relaxed mb-8"
        >
          I build end-to-end web applications with a focus on clean frontend architecture, secure RESTful APIs, and reliable database systems. Passionate about solving real-world problems through performant code and intuitive user interfaces.
        </motion.p>

        {/* Technical Competencies Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10 text-xs font-mono text-[#94A3B8]"
        >
          <span className="px-3 py-1 rounded-md bg-[#151D2E] border border-[#1E293B] flex items-center gap-1.5">
            <Code2 size={13} className="text-[#6366F1]" /> React.js & Node.js
          </span>
          <span className="px-3 py-1 rounded-md bg-[#151D2E] border border-[#1E293B] flex items-center gap-1.5">
            <Database size={13} className="text-[#22D3EE]" /> MongoDB & Express.js
          </span>
          <span className="px-3 py-1 rounded-md bg-[#151D2E] border border-[#1E293B] flex items-center gap-1.5">
            <Layout size={13} className="text-[#6366F1]" /> Responsive UI Engineering
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-3.5 mb-10 w-full sm:w-auto"
        >
          <button
            onClick={() => handleScroll('#projects')}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold text-xs tracking-wide transition-all duration-200 shadow-md shadow-[#6366F1]/25 flex items-center justify-center gap-2"
          >
            <FolderGit2 size={15} />
            Explore Projects
          </button>

          <a
            href={RESUME_PATH}
            download="Ajay_B_Full_Stack_Developer_Resume_Final.pdf"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#151D2E] hover:bg-[#1E293B] text-[#F8FAFC] border border-[#1E293B] hover:border-[#6366F1]/40 font-semibold text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Download size={15} className="text-[#22D3EE]" />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-4 text-[#94A3B8]"
        >
          <a
            href="https://github.com/bajayy1812-code"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-[#151D2E] border border-[#1E293B] hover:text-[#F8FAFC] hover:border-[#6366F1]/50 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/ajay-b-0b0789328/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-[#151D2E] border border-[#1E293B] hover:text-[#22D3EE] hover:border-[#22D3EE]/50 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:bajayy1812@gmail.com"
            className="p-2.5 rounded-lg bg-[#151D2E] border border-[#1E293B] hover:text-[#6366F1] hover:border-[#6366F1]/50 transition-colors"
            aria-label="Email Address"
          >
            <Mail size={18} />
          </a>
        </motion.div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
        <button
          onClick={() => handleScroll('#about')}
          className="text-[11px] font-mono text-[#94A3B8] tracking-widest uppercase flex items-center gap-1"
        >
          Scroll <ArrowDown size={12} />
        </button>
      </div>
    </section>
  );
}
