import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown, Download, FolderGit2, Mail, ExternalLink, Code2,
  Database, Server, Terminal, Copy, Check, Sparkles, Send,
  Cpu, Play, Layers, ArrowRight
} from 'lucide-react';

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

const roles = [
  'Full Stack Developer',
  'MERN Stack Specialist',
  'Frontend Engineer',
  'API & Database Architect',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('code'); // 'code' | 'terminal' | 'stats'
  const [terminalHistory, setTerminalHistory] = useState([
    { cmd: 'ajay.currentFocus', output: '"Full Stack MERN Architecture & Performant Web Apps"' },
    { cmd: 'ajay.status', output: '● "Ready for full-time engineering opportunities"' },
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  // Dynamic role rotator
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleRunCommand = (cmdStr) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    let res = '';
    if (cleanCmd.includes('skills')) {
      res = '["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript (ES6+)", "Tailwind CSS", "Playwright"]';
    } else if (cleanCmd.includes('projects')) {
      res = '["01: Iron Pulse (Gym Management)", "02: Expense Tracker (MERN Ledger)"]';
    } else if (cleanCmd.includes('contact')) {
      res = 'Email: bajayy1812@gmail.com | LinkedIn: /in/ajay-b-0b0789328';
    } else if (cleanCmd.includes('hire') || cleanCmd.includes('status')) {
      res = '● Open to Full-Time Software Engineering & Developer roles.';
    } else if (cleanCmd === 'clear') {
      setTerminalHistory([]);
      return;
    } else {
      res = `Command '${cmdStr}' executed. Try: skills, projects, contact, hire, clear.`;
    }

    setTerminalHistory((prev) => [...prev, { cmd: cmdStr, output: res }]);
    setTerminalInput('');
  };

  const handleCopySnippet = () => {
    const codeSnippet = `const developer = {
  name: "Ajay B.",
  title: "Full Stack Developer",
  stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
  location: "Coimbatore, India",
  available: true
};`;
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center bg-[#F3EEE3] text-[#111111] pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle Editorial Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #D8D0C2 1px, transparent 1px),
            linear-gradient(to bottom, #D8D0C2 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container-custom relative z-10 w-full py-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Editorial Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#E9E2D5] border border-[#D8D0C2]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9541E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D9541E]" />
              </span>
              <span className="text-xs font-semibold tracking-wider text-[#111111] uppercase font-mono">
                Available for Full-time Roles & Internships
              </span>
            </div>

            {/* Editorial Heading */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-mono text-[#77736B] tracking-wide">
                Hi, I'm <span className="font-bold text-[#111111]">Ajay B.</span>
              </h2>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.12]">
                Designing <span className="editorial-serif font-medium text-[#D9541E]">meaningful</span> web architectures.{' '}
                <span className="block mt-1">
                  Engineering <span className="editorial-serif font-medium text-[#111111]">scalable</span> solutions.
                </span>
              </h1>

              {/* Dynamic Title Switcher */}
              <div className="h-8 flex items-center pt-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#77736B] mr-2">
                  Specialization:
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="text-sm sm:text-base font-bold font-mono text-[#D9541E] px-2 py-0.5 rounded bg-[#E9E2D5] border border-[#D8D0C2]"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Professional Summary Description */}
            <p className="text-base sm:text-lg text-[#77736B] leading-relaxed max-w-xl">
              I build end-to-end web applications with a focus on clean frontend architecture, secure RESTful APIs, and reliable database systems. Passionate about solving real-world engineering challenges through performant code and intuitive user interfaces.
            </p>

            {/* Tech Highlights */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-[#111111]">
              <span className="px-3 py-1 rounded-md bg-[#FFFFFF] border border-[#D8D0C2] flex items-center gap-1.5 shadow-sm">
                <Code2 size={13} className="text-[#D9541E]" />
                React.js & Node.js
              </span>
              <span className="px-3 py-1 rounded-md bg-[#FFFFFF] border border-[#D8D0C2] flex items-center gap-1.5 shadow-sm">
                <Database size={13} className="text-[#D9541E]" />
                MongoDB & Express.js
              </span>
              <span className="px-3 py-1 rounded-md bg-[#FFFFFF] border border-[#D8D0C2] flex items-center gap-1.5 shadow-sm">
                <Layers size={13} className="text-[#D9541E]" />
                RESTful Architecture
              </span>
            </div>

            {/* CTAs & Social Links */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleScroll('#projects')}
                className="btn-primary"
              >
                <span>Explore My Work</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={() => handleScroll('#resume')}
                className="btn-secondary"
              >
                <Download size={15} />
                <span>View Resume</span>
              </button>

              {/* Verified External Social Icons */}
              <div className="flex items-center gap-2 pl-2 border-l border-[#D8D0C2]">
                <a
                  href="https://github.com/bajayy1812-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#E9E2D5] border border-[#D8D0C2] text-[#111111] hover:text-[#D9541E] hover:border-[#D9541E] transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub: /bajayy1812-code"
                >
                  <GithubIcon size={17} />
                </a>

                <a
                  href="https://www.linkedin.com/in/ajay-b-0b0789328/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#E9E2D5] border border-[#D8D0C2] text-[#111111] hover:text-[#D9541E] hover:border-[#D9541E] transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: Ajay B"
                >
                  <LinkedinIcon size={17} />
                </a>

                <a
                  href="mailto:bajayy1812@gmail.com"
                  className="p-2.5 rounded-lg bg-[#E9E2D5] border border-[#D8D0C2] text-[#111111] hover:text-[#D9541E] hover:border-[#D9541E] transition-all"
                  aria-label="Email Directly"
                  title="Email: bajayy1812@gmail.com"
                >
                  <Mail size={17} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Developer Station */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="rounded-xl bg-[#FFFFFF] border border-[#D8D0C2] shadow-md overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#E9E2D5] border-b border-[#D8D0C2]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#D8D0C2] border border-[#BDB3A3]" />
                  <span className="w-3 h-3 rounded-full bg-[#D8D0C2] border border-[#BDB3A3]" />
                  <span className="w-3 h-3 rounded-full bg-[#D9541E]" />
                  <span className="ml-2 font-mono text-xs text-[#77736B] font-semibold">
                    ajay-station :: mern-stack
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'code'
                        ? 'bg-[#FFFFFF] text-[#D9541E] font-bold shadow-sm border border-[#D8D0C2]'
                        : 'text-[#77736B] hover:text-[#111111]'
                    }`}
                  >
                    ajay.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'terminal'
                        ? 'bg-[#FFFFFF] text-[#D9541E] font-bold shadow-sm border border-[#D8D0C2]'
                        : 'text-[#77736B] hover:text-[#111111]'
                    }`}
                  >
                    interactive.sh
                  </button>
                  <button
                    onClick={() => setActiveTab('stats')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'stats'
                        ? 'bg-[#FFFFFF] text-[#D9541E] font-bold shadow-sm border border-[#D8D0C2]'
                        : 'text-[#77736B] hover:text-[#111111]'
                    }`}
                  >
                    system.env
                  </button>
                </div>
              </div>

              {/* Tab 1: TypeScript Profile Preview */}
              {activeTab === 'code' && (
                <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto relative bg-[#FFFFFF] min-h-[310px] flex flex-col justify-between">
                  <button
                    onClick={handleCopySnippet}
                    className="absolute top-3 right-3 p-1.5 rounded-md bg-[#E9E2D5] border border-[#D8D0C2] text-[#77736B] hover:text-[#111111] hover:border-[#D9541E] transition-all flex items-center gap-1 text-[10px]"
                    title="Copy code snippet"
                  >
                    {copiedCode ? (
                      <>
                        <Check size={12} className="text-[#D9541E]" />
                        <span className="text-[#D9541E] font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <pre className="text-[#111111]">
                    <code>
                      <span className="text-[#77736B]">// Developer Profile & Verification</span>
                      {'\n'}
                      <span className="text-[#D9541E] font-semibold">export const</span>{' '}
                      <span className="text-[#111111] font-bold">ajayDeveloper</span> = {'{'}
                      {'\n'}  <span className="text-[#77736B]">name:</span>{' '}
                      <span className="text-[#D9541E]">"Ajay B."</span>,
                      {'\n'}  <span className="text-[#77736B]">role:</span>{' '}
                      <span className="text-[#D9541E]">"Aspiring Full Stack Developer"</span>,
                      {'\n'}  <span className="text-[#77736B]">degree:</span>{' '}
                      <span className="text-[#D9541E]">"B.E. Electronics & Communication"</span>,
                      {'\n'}  <span className="text-[#77736B]">institution:</span>{' '}
                      <span className="text-[#111111]">"Sri Shakthi Inst of Eng & Tech"</span>,
                      {'\n'}  <span className="text-[#77736B]">cgpa:</span>{' '}
                      <span className="text-[#D9541E] font-bold">7.94</span>,
                      {'\n'}  <span className="text-[#77736B]">coreStack:</span> [
                      {'\n'}    <span className="text-[#D9541E]">"React.js"</span>,{' '}
                      <span className="text-[#D9541E]">"Node.js"</span>,{' '}
                      <span className="text-[#D9541E]">"Express.js"</span>,{' '}
                      <span className="text-[#D9541E]">"MongoDB"</span>
                      {'\n'}  ],
                      {'\n'}  <span className="text-[#77736B]">status:</span>{' '}
                      <span className="text-[#D9541E] font-bold">"Ready to Deploy"</span>
                      {'\n'}{'}'};
                    </code>
                  </pre>

                  <div className="pt-3 border-t border-[#D8D0C2] flex items-center justify-between text-[11px] text-[#77736B]">
                    <span>Language: TypeScript 5.4</span>
                    <span className="flex items-center gap-1 text-[#D9541E] font-semibold">
                      <Sparkles size={11} /> Ready for Production
                    </span>
                  </div>
                </div>
              )}

              {/* Tab 2: Interactive Terminal */}
              {activeTab === 'terminal' && (
                <div className="p-4 font-mono text-xs bg-[#FFFFFF] min-h-[310px] flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] text-[#77736B] mb-2 pb-2 border-b border-[#D8D0C2]">
                      Try commands: <span className="text-[#D9541E] font-bold">skills</span>,{' '}
                      <span className="text-[#D9541E] font-bold">projects</span>,{' '}
                      <span className="text-[#D9541E] font-bold">contact</span>,{' '}
                      <span className="text-[#D9541E] font-bold">hire</span>,{' '}
                      <span className="text-[#77736B]">clear</span>
                    </div>

                    {/* Command History */}
                    <div className="space-y-2 max-h-[170px] overflow-y-auto pr-1">
                      {terminalHistory.map((item, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <div className="flex items-center gap-1.5 text-[#111111]">
                            <span className="text-[#D9541E] font-bold">$</span>
                            <span className="text-[#111111] font-semibold">{item.cmd}</span>
                          </div>
                          <p className="text-[#77736B] text-[11px] pl-3.5 leading-relaxed font-mono">
                            {item.output}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Runnable quick command pills */}
                  <div className="pt-3 border-t border-[#D8D0C2]">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {['skills', 'projects', 'contact', 'hire'].map((cmd) => (
                        <button
                          key={cmd}
                          onClick={() => handleRunCommand(cmd)}
                          className="px-2 py-0.5 rounded bg-[#E9E2D5] hover:bg-[#D9541E] hover:text-white text-[#111111] text-[10px] transition-colors border border-[#D8D0C2]"
                        >
                          ${cmd}
                        </button>
                      ))}
                    </div>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (terminalInput.trim()) handleRunCommand(terminalInput);
                      }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-[#D9541E] font-bold">$</span>
                      <input
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        placeholder="Type command and press enter..."
                        className="w-full bg-[#E9E2D5]/50 border border-[#D8D0C2] rounded px-2.5 py-1 text-xs text-[#111111] focus:outline-none focus:border-[#D9541E] placeholder-[#77736B]"
                      />
                      <button
                        type="submit"
                        className="p-1 rounded bg-[#D9541E] text-white hover:bg-[#C24513] transition-colors"
                        title="Execute"
                      >
                        <Play size={11} />
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* Tab 3: System Environment */}
              {activeTab === 'stats' && (
                <div className="p-4 font-mono text-xs bg-[#FFFFFF] min-h-[310px] space-y-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#77736B] pb-1 border-b border-[#D8D0C2]">
                    Telemetry & Engineering Environment
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded bg-[#E9E2D5]/70 border border-[#D8D0C2]">
                      <span className="text-[#77736B] text-[10px] block">RUNTIME</span>
                      <span className="text-[#111111] font-bold">Node.js (LTS)</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#E9E2D5]/70 border border-[#D8D0C2]">
                      <span className="text-[#77736B] text-[10px] block">DATABASE</span>
                      <span className="text-[#111111] font-bold">MongoDB Atlas</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#E9E2D5]/70 border border-[#D8D0C2]">
                      <span className="text-[#77736B] text-[10px] block">SECURITY</span>
                      <span className="text-[#111111] font-bold">JWT + bcrypt</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#E9E2D5]/70 border border-[#D8D0C2]">
                      <span className="text-[#77736B] text-[10px] block">TESTING</span>
                      <span className="text-[#111111] font-bold">Playwright E2E</span>
                    </div>
                  </div>

                  <div className="p-3 rounded bg-[#E9E2D5]/70 border border-[#D8D0C2] space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#77736B]">Location</span>
                      <span className="text-[#111111] font-semibold">Coimbatore, Tamil Nadu, India</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#77736B]">Problem Solving</span>
                      <span className="text-[#D9541E] font-bold">100+ DSA Solved</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#77736B]">Internship</span>
                      <span className="text-[#111111] font-semibold">Frenzo Academy (2025)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
