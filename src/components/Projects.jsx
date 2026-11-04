import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  FolderGit2, ExternalLink, X, CheckCircle2, AlertCircle, Wrench,
  Layers, Lock, Database, UserCheck, ShieldCheck, Dumbbell, Wallet,
  ChevronRight, ArrowUpRight
} from 'lucide-react';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const projectsData = [
  {
    id: 'iron-pulse',
    name: 'IRON PULSE – Gym Management System',
    shortTitle: 'Iron Pulse',
    category: 'Full Stack MERN Application',
    tagline: 'End-to-end fitness center operations & membership management portal.',
    accent: '#6366F1',
    overview:
      'Iron Pulse is a full-stack gym management platform engineered to automate gym operations. It enables administrators to manage member accounts, track recurring memberships, monitor attendance, configure personalized diet plans, and calculate client BMIs while providing members with self-service dashboard visibility.',
    problemStatement:
      'Boutique gyms and fitness centers often rely on fragmented paper registers or disparate spreadsheets to track active subscriptions, member attendance, and renewals. This causes manual record reconciliation errors, untracked payment lapses, and difficulty providing personalized fitness guidance.',
    technologiesUsed: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'Mongoose ODM',
      'JSON Web Tokens (JWT)',
      'bcrypt.js',
      'Tailwind CSS',
    ],
    keyFeatures: [
      'Secure Authentication with encrypted passwords and stateless JWT session handling.',
      'Role-Based Authorization (RBAC) separating administrative powers from member self-service views.',
      'Centralized Admin Dashboard displaying live member tallies, plan distributions, and recent check-ins.',
      'Membership Lifecycle Management tracking plan types, validity durations, and renewal dates.',
      'Daily Attendance Tracking with status verification and timestamp records.',
      'Diet Plan & Routine Management allowing custom nutritional allocations per member.',
      'Integrated BMI Calculator to monitor physical progress trends over time.',
      'Modular REST API Architecture with standardized HTTP status codes and centralized error handling.',
    ],
    myContribution:
      'Engineered the end-to-end full stack architecture. Built the React single-page interface with protected routes; designed the Express REST API endpoints and validation middleware; modeled the Mongoose schemas for Users, Memberships, Attendance, and Nutrition; and implemented JWT/bcrypt security protocols.',
    challengesFaced:
      'Implementing strict role segregation between administrative and standard member views while preventing unauthorized parameter tampering across protected API routes.',
    solutionsImplemented:
      'Created custom Express authorization middleware that decodes JWT claims and verifies user role scopes before routing requests to controller actions, combined with React route guards on the client.',
    githubRepo: 'https://github.com/bajayy1812-code/ajay-portfolio',
    liveDemo: null, // Transparently marked as offline or in-repo runnable
    icon: Dumbbell,
    previewType: 'dashboard',
  },
  {
    id: 'expense-tracker',
    name: 'EXPENSE TRACKER – Personal Finance App',
    shortTitle: 'Expense Tracker',
    category: 'Full Stack Web Application',
    tagline: 'Zero-friction income & expense logging with real-time financial metrics.',
    accent: '#22D3EE',
    overview:
      'A full-stack personal finance tracking application designed to help individuals log transactions, categorize expenditures, review net cash flows, and maintain persistent historical financial records through a responsive dashboard.',
    problemStatement:
      'Users frequently encounter friction in tracking personal expenditures due to overly complex accounting software, resulting in lack of budget visibility and unmonitored overspending across daily categories.',
    technologiesUsed: [
      'JavaScript (ES6+)',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'RESTful APIs',
      'HTML5 / CSS3',
    ],
    keyFeatures: [
      'Income & Expense Stream Recording with automatic balance recalculation.',
      'Category Classification (Housing, Dining, Utilities, Entertainment, Cloud).',
      'Full CRUD Operations enabling real-time editing and deletion with client confirmations.',
      'Visual Spending Summaries providing percentage breakdowns of monthly outflow.',
      'MongoDB Data Persistence ensuring reliable state preservation across sessions.',
      'Strict Client & Server-side Form Validation checking positive currency inputs and date constraints.',
      'Chronological Transaction History with date-range ledger filtering.',
      'Clean, Responsive UI optimized for both desktop and mobile viewports.',
    ],
    myContribution:
      'Developed the complete application stack. Implemented the backend CRUD controller routines in Express, formulated transaction data schemas in Mongoose with balance aggregation logic, and built the responsive client interface with reactive DOM updates.',
    challengesFaced:
      'Maintaining precise calculation of net balances and category percentages during asynchronous transaction deletions and rapid state modifications.',
    solutionsImplemented:
      'Designed MongoDB aggregation pipelines coupled with defensive server-side validation to re-compute ledger aggregates atomically on every transaction lifecycle event.',
    githubRepo: 'https://github.com/bajayy1812-code/ajay-portfolio',
    liveDemo: null,
    icon: Wallet,
    previewType: 'finance',
  },
];

function ProjectMockupFrame({ type, accent }) {
  if (type === 'dashboard') {
    return (
      <div className="w-full rounded-lg bg-[#0B0F19] border border-[#1E293B] p-3 text-[11px] font-mono select-none">
        {/* Top Browser Bar */}
        <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#1E293B]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/80" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <span className="w-2 h-2 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[10px] text-[#64748B]">ironpulse-admin.local/members</span>
          <span className="text-[10px] text-[#6366F1] font-semibold">RBAC ACTIVE</span>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-2 mb-2.5">
          <div className="p-2 rounded bg-[#151D2E] border border-[#1E293B]">
            <span className="text-[9px] text-[#94A3B8] block">Total Members</span>
            <span className="text-xs font-bold text-[#F8FAFC]">184 Active</span>
          </div>
          <div className="p-2 rounded bg-[#151D2E] border border-[#1E293B]">
            <span className="text-[9px] text-[#94A3B8] block">Check-ins Today</span>
            <span className="text-xs font-bold text-[#22D3EE]">42 Logged</span>
          </div>
          <div className="p-2 rounded bg-[#151D2E] border border-[#1E293B]">
            <span className="text-[9px] text-[#94A3B8] block">Pending Renew</span>
            <span className="text-xs font-bold text-yellow-400">7 Members</span>
          </div>
        </div>

        {/* Mini Table Preview */}
        <div className="rounded bg-[#151D2E] border border-[#1E293B] p-2 space-y-1">
          <div className="flex justify-between text-[9px] text-[#64748B] pb-1 border-b border-[#1E293B]">
            <span>Member</span>
            <span>Plan</span>
            <span>Status</span>
          </div>
          {[
            { name: 'K. Rajesh', plan: 'Quarterly', status: 'Active', color: 'text-green-400' },
            { name: 'V. Sneha', plan: 'Annual Pro', status: 'Active', color: 'text-green-400' },
            { name: 'A. Miller', plan: 'Monthly', status: 'Expiring', color: 'text-yellow-400' },
          ].map((m, i) => (
            <div key={i} className="flex justify-between items-center text-[10px]">
              <span className="text-[#F8FAFC]">{m.name}</span>
              <span className="text-[#94A3B8] text-[9px]">{m.plan}</span>
              <span className={`${m.color} text-[9px] font-semibold`}>{m.status}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-lg bg-[#0B0F19] border border-[#1E293B] p-3 text-[11px] font-mono select-none">
      {/* Top Browser Bar */}
      <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#1E293B]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/80" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
          <span className="w-2 h-2 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[10px] text-[#64748B]">expensetracker.local/overview</span>
        <span className="text-[10px] text-[#22D3EE] font-semibold">MERN LEDGER</span>
      </div>

      {/* Net Balance Preview */}
      <div className="p-2.5 rounded bg-[#151D2E] border border-[#1E293B] mb-2.5 flex items-center justify-between">
        <div>
          <span className="text-[9px] text-[#94A3B8] uppercase block">Net Balance</span>
          <span className="text-sm font-bold text-[#F8FAFC]">₹ 38,450.00</span>
        </div>
        <div className="text-right text-[9px]">
          <span className="text-green-400 block">+ ₹ 52,000 Inc</span>
          <span className="text-red-400 block">- ₹ 13,550 Exp</span>
        </div>
      </div>

      {/* Categories mini preview */}
      <div className="space-y-1.5">
        {[
          { label: 'Host & Cloud Dev', pct: 45, color: 'bg-[#22D3EE]' },
          { label: 'Rent & Workspace', pct: 30, color: 'bg-[#6366F1]' },
          { label: 'Equipment & Sub', pct: 25, color: 'bg-[#38BDF8]' },
        ].map((c, i) => (
          <div key={i} className="text-[9px]">
            <div className="flex justify-between text-[#94A3B8] mb-0.5">
              <span>{c.label}</span>
              <span>{c.pct}%</span>
            </div>
            <div className="w-full h-1 bg-[#111827] rounded-full overflow-hidden">
              <div className={`h-full ${c.color}`} style={{ width: `${c.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectDetailsModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#111827] border border-[#1E293B] shadow-2xl p-6 sm:p-8 text-[#94A3B8]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-[#151D2E] border border-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
          aria-label="Close project modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#6366F1] font-semibold">
            {project.category}
          </span>
          <span className="text-xs text-[#64748B]">· Detailed Architecture</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] mb-2">
          {project.name}
        </h3>
        <p className="text-sm text-[#22D3EE] font-medium mb-6">
          {project.tagline}
        </p>

        {/* 10-Point Recruiter Briefing Container */}
        <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
          {/* 1. Project Overview */}
          <div className="p-4 rounded-xl bg-[#151D2E] border border-[#1E293B]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] font-bold mb-2 flex items-center gap-2">
              <span className="text-[#6366F1]">01.</span> Project Overview
            </h4>
            <p>{project.overview}</p>
          </div>

          {/* 2. Problem Statement */}
          <div className="p-4 rounded-xl bg-[#151D2E] border border-[#1E293B]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] font-bold mb-2 flex items-center gap-2">
              <span className="text-[#22D3EE]">02.</span> Problem Statement
            </h4>
            <p>{project.problemStatement}</p>
          </div>

          {/* 3. Technologies Used */}
          <div className="p-4 rounded-xl bg-[#151D2E] border border-[#1E293B]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] font-bold mb-3 flex items-center gap-2">
              <span className="text-[#6366F1]">03.</span> Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologiesUsed.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#0B0F19] text-[#F8FAFC] font-mono text-xs border border-[#1E293B]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Key Features */}
          <div className="p-4 rounded-xl bg-[#151D2E] border border-[#1E293B]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] font-bold mb-3 flex items-center gap-2">
              <span className="text-[#22D3EE]">04.</span> Key Implemented Features
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs">
                  <CheckCircle2 size={14} className="text-[#22D3EE] mt-0.5 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. My Contribution */}
          <div className="p-4 rounded-xl bg-[#151D2E] border border-[#1E293B]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] font-bold mb-2 flex items-center gap-2">
              <span className="text-[#6366F1]">05.</span> My Engineering Contribution
            </h4>
            <p>{project.myContribution}</p>
          </div>

          {/* 6. Challenges Faced & 7. Solutions Implemented */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#151D2E] border border-[#1E293B]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-yellow-400 font-bold mb-2 flex items-center gap-1.5">
                <AlertCircle size={14} /> 06. Challenges Faced
              </h4>
              <p className="text-xs leading-relaxed">{project.challengesFaced}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#151D2E] border border-[#1E293B]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-green-400 font-bold mb-2 flex items-center gap-1.5">
                <Wrench size={14} /> 07. Solutions Implemented
              </h4>
              <p className="text-xs leading-relaxed">{project.solutionsImplemented}</p>
            </div>
          </div>

          {/* 8. Verification & Links (08 GitHub Repo & 09 Live Demo Status) */}
          <div className="p-4 rounded-xl bg-[#0B0F19] border border-[#1E293B] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-[#64748B] uppercase block">
                08 & 09. Deployment & Source Status
              </span>
              <span className="text-xs text-[#F8FAFC] font-medium">
                Production Code hosted on GitHub · Local / Self-Hosted MERN Environment
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6366F1] hover:bg-[#4F46E5] text-white text-xs font-semibold transition-colors"
              >
                <GithubIcon size={14} />
                <span>View GitHub Repo</span>
              </a>

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-[#151D2E] hover:bg-[#1E293B] text-[#F8FAFC] border border-[#1E293B] text-xs font-semibold transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="section-padding bg-[#111827] relative border-t border-[#1E293B]">
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
                <span className="w-6 h-px bg-[#6366F1]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#6366F1]">Featured Work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">
                Production-Ready <span className="text-gradient-accent">Projects.</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#94A3B8] max-w-2xl">
                Real-world full-stack applications showcasing end-to-end engineering, database architecture, authentication protocols, and problem-solving.
              </p>
            </motion.div>

            {/* Projects Showcase Cards */}
            <div className="space-y-10">
              {projectsData.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={project.id}
                    variants={fadeUp}
                    className="glass-card rounded-2xl border border-[#1E293B] overflow-hidden glass-card-hover"
                  >
                    <div className="grid lg:grid-cols-12 gap-0">
                      {/* Left Visual Preview Column */}
                      <div className="lg:col-span-5 p-6 sm:p-8 bg-[#0B0F19]/60 border-b lg:border-b-0 lg:border-r border-[#1E293B] flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#151D2E] text-[#6366F1] border border-[#1E293B] font-semibold">
                              0{index + 1} // {project.category}
                            </span>
                            <div className="p-2 rounded-lg bg-[#151D2E] text-[#22D3EE] border border-[#1E293B]">
                              <Icon size={16} />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">
                            {project.shortTitle}
                          </h3>
                          <p className="text-xs text-[#94A3B8] mb-6">
                            {project.tagline}
                          </p>
                        </div>

                        {/* Interactive In-Card Mockup Frame */}
                        <div className="my-auto">
                          <ProjectMockupFrame type={project.previewType} accent={project.accent} />
                        </div>

                        <div className="pt-4 mt-4 border-t border-[#1E293B]/70 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                          <span>Architecture Verified</span>
                          <span className="text-[#22D3EE]">MERN Stack</span>
                        </div>
                      </div>

                      {/* Right Details & Specs Column */}
                      <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                        <div>
                          {/* Overview snippet */}
                          <div className="mb-6">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] font-semibold mb-2">
                              Project Overview
                            </h4>
                            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                              {project.overview}
                            </p>
                          </div>

                          {/* Core Highlights */}
                          <div className="mb-6">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] font-semibold mb-3">
                              Key Capabilities
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-2 text-xs text-[#94A3B8]">
                              {project.keyFeatures.slice(0, 4).map((f, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] mt-1.5 flex-shrink-0" />
                                  <span>{f}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tech Stack Badges */}
                          <div className="mb-6">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] font-semibold mb-2.5">
                              Technology Stack
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {project.technologiesUsed.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-xs px-2.5 py-1 rounded bg-[#0B0F19] text-[#94A3B8] border border-[#1E293B] font-mono"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Card Action Buttons */}
                        <div className="pt-5 border-t border-[#1E293B] flex flex-wrap items-center gap-3">
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#6366F1] hover:bg-[#4F46E5] text-white text-xs font-semibold tracking-wide transition-colors shadow-sm"
                          >
                            <span>View Full Case Study</span>
                            <ChevronRight size={14} />
                          </button>

                          <a
                            href={project.githubRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#151D2E] hover:bg-[#1E293B] text-[#F8FAFC] border border-[#1E293B] text-xs font-semibold transition-colors"
                          >
                            <GithubIcon size={14} />
                            <span>GitHub Code</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recruiter Deep-Dive Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
