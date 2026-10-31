import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  ExternalLink, Layers, Lock, BarChart3, CreditCard, Receipt, Tag,
  CheckSquare, X, Eye, BookOpen, ShieldCheck, Database, Server, Smartphone, Monitor
} from 'lucide-react';

const GithubIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const projects = [
  {
    number: '01',
    id: 'iron-pulse',
    title: 'IRON PULSE',
    subtitle: 'Gym Membership Management System',
    description:
      'A full-stack MERN application designed to streamline gym operations. Features a complete admin and member portal with authentication, subscription management, payment tracking, and visual analytics — all secured with JWT and role-based access control.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'bcrypt', 'Mongoose'],
    features: [
      { icon: Lock, text: 'Admin/User Authentication' },
      { icon: Layers, text: 'Role-Based Access Control (RBAC)' },
      { icon: CheckSquare, text: 'Secure Admin Registration' },
      { icon: CheckSquare, text: 'Member Directory & Profile Management' },
      { icon: CreditCard, text: 'Subscription Plans & Expiry Tracking' },
      { icon: Receipt, text: 'Payment History & Audit Logs' },
      { icon: BarChart3, text: 'Visual Analytics & Membership Metrics' },
      { icon: ShieldCheck, text: 'Protected API Routes & Token Validation' },
    ],
    architecture: [
      { layer: 'Client', tech: 'React.js (SPA)', role: 'Stateful UI with protected routing, interactive charts, and responsive modals.' },
      { layer: 'Server', tech: 'Node.js & Express.js', role: 'REST API endpoints, JWT auth verification, role validation middleware.' },
      { layer: 'Database', tech: 'MongoDB Atlas', role: 'Mongoose schemas for Users, Memberships, Subscriptions, and Payments.' },
      { layer: 'Security', tech: 'bcrypt + JWT', role: 'Salted password hashing and encrypted token payloads with expiration.' },
    ],
    caseStudySummary: {
      problem: 'Gym administrators face manual overhead tracking memberships, missed renewals, unauthorized access, and decentralized payment logs.',
      solution: 'Iron Pulse delivers a unified single-dashboard interface with segregated roles (Admin vs. Member), automated status calculations, and instant visibility into member health.',
      keyTakeaways: 'Deepened hands-on mastery in JWT lifecycle management, MongoDB compound indexes, and designing responsive tabular data layouts for administrative productivity.'
    },
    github: 'https://github.com/bajayy1812-code/ajay-portfolio',
    gradient: 'from-purple-primary/20 via-transparent to-transparent',
    accent: 'border-purple-primary/30',
    accentText: 'text-purple-light',
    accentBg: 'bg-purple-primary/10',
    iconColor: 'text-purple-light',
    label: 'Full Stack MERN',
    labelColor: 'text-purple-light bg-purple-primary/10 border-purple-primary/20',
    visual: 'ironpulse',
  },
  {
    number: '02',
    id: 'expense-tracker',
    title: 'EXPENSE TRACKER',
    subtitle: 'Personal Finance Management App',
    description:
      'A full-stack expense tracking application to manage personal finances. Track income, categorize expenses, monitor spending patterns, and maintain complete financial records with a clean, responsive dashboard interface.',
    tech: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs'],
    features: [
      { icon: Receipt, text: 'Income & Expense Stream Tracking' },
      { icon: Tag, text: 'Custom Expense Categorization' },
      { icon: CheckSquare, text: 'Full CRUD Operations with Confirmation' },
      { icon: BarChart3, text: 'Visual Spending Summaries & Category Shares' },
      { icon: Database, text: 'Persistent MongoDB Cloud Storage' },
      { icon: CheckSquare, text: 'Client & Server-Side Form Validation' },
      { icon: Layers, text: 'Date-Range Filtering & Ledger View' },
      { icon: ShieldCheck, text: 'Sanitized Inputs & Reliable Error Handlers' },
    ],
    architecture: [
      { layer: 'Client', tech: 'Modern JavaScript (ES6+)', role: 'Reactive DOM updates, dynamic metric cards, and clean forms.' },
      { layer: 'Server', tech: 'Node.js & Express.js', role: 'Modular route controllers, validation middleware, and JSON serialization.' },
      { layer: 'Database', tech: 'MongoDB & Mongoose', role: 'Strict transaction schemas with timestamps, categories, and amount validation.' },
      { layer: 'Data Flow', tech: 'RESTful Architecture', role: 'Predictable HTTP verbs (GET, POST, PUT, DELETE) with status code standards.' },
    ],
    caseStudySummary: {
      problem: 'Individuals struggle to maintain financial awareness without structured recording, leading to uncontrolled budget leakages.',
      solution: 'A zero-friction financial dashboard enabling one-click transaction logging, immediate balance recalculation, and visual breakdown by category.',
      keyTakeaways: 'Refined understanding of data aggregation pipelines in MongoDB, modular REST controller separation, and form UX validation.'
    },
    github: 'https://github.com/bajayy1812-code/ajay-portfolio',
    gradient: 'from-blue-electric/15 via-transparent to-transparent',
    accent: 'border-blue-electric/30',
    accentText: 'text-blue-electric',
    accentBg: 'bg-blue-electric/10',
    iconColor: 'text-blue-electric',
    label: 'Full Stack Web App',
    labelColor: 'text-blue-electric bg-blue-electric/10 border-blue-electric/20',
    visual: 'expense',
  },
];

function IronPulseMockup() {
  return (
    <div className="w-full max-w-sm rounded-xl overflow-hidden glass border border-white/10 shadow-2xl p-3 bg-bg-card/90">
      {/* Top browser/window bar */}
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/8">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="text-[10px] font-mono text-text-muted bg-white/5 px-2.5 py-0.5 rounded-md">ironpulse.app/dashboard</div>
        <span className="text-[10px] font-bold text-purple-light">ADMIN</span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="p-2 rounded-lg bg-purple-primary/10 border border-purple-primary/20">
          <span className="text-[9px] text-text-muted block">Active Members</span>
          <span className="text-xs font-bold text-text-primary">248</span>
          <span className="text-[8px] text-green-400 block mt-0.5">+12% mo</span>
        </div>
        <div className="p-2 rounded-lg bg-blue-electric/10 border border-blue-electric/20">
          <span className="text-[9px] text-text-muted block">Monthly Rev</span>
          <span className="text-xs font-bold text-text-primary">$14.2k</span>
          <span className="text-[8px] text-green-400 block mt-0.5">98% collected</span>
        </div>
        <div className="p-2 rounded-lg bg-white/5 border border-white/10">
          <span className="text-[9px] text-text-muted block">Renewals Due</span>
          <span className="text-xs font-bold text-yellow-400">18</span>
          <span className="text-[8px] text-yellow-400/80 block mt-0.5">Next 7 days</span>
        </div>
      </div>

      {/* Table snippet */}
      <div className="rounded-lg bg-bg-main/60 p-2 border border-white/5">
        <div className="flex items-center justify-between text-[9px] font-semibold text-text-muted pb-1 mb-1 border-b border-white/5">
          <span>Member</span>
          <span>Plan</span>
          <span>Status</span>
        </div>
        {[
          { name: 'Marcus Vance', plan: 'Annual Pro', status: 'Active', color: 'text-green-400 bg-green-400/10' },
          { name: 'Elena Rostova', plan: 'Monthly Elite', status: 'Active', color: 'text-green-400 bg-green-400/10' },
          { name: 'Devon Miles', plan: 'Quarterly', status: 'Pending', color: 'text-yellow-400 bg-yellow-400/10' },
        ].map((m, i) => (
          <div key={i} className="flex items-center justify-between py-1 text-[10px]">
            <span className="text-text-primary font-medium">{m.name}</span>
            <span className="text-text-secondary text-[9px]">{m.plan}</span>
            <span className={`text-[8px] font-semibold px-1.5 py-0.5 rounded ${m.color}`}>{m.status}</span>
          </div>
        ))}
      </div>

      {/* Mini Chart */}
      <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between">
        <span className="text-[9px] text-text-muted">Attendance Activity</span>
        <div className="flex items-end gap-1 h-5">
          {[35, 60, 45, 80, 65, 90, 75, 95].map((h, i) => (
            <div key={i} className="w-2 rounded-t-sm bg-purple-primary/70" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ExpenseTrackerMockup() {
  return (
    <div className="w-full max-w-sm rounded-xl overflow-hidden glass border border-white/10 shadow-2xl p-3 bg-bg-card/90">
      {/* Top browser/window bar */}
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/8">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="text-[10px] font-mono text-text-muted bg-white/5 px-2.5 py-0.5 rounded-md">expensetracker.local</div>
        <span className="text-[10px] font-bold text-blue-electric">MERN</span>
      </div>

      {/* Total Balance Card */}
      <div className="p-3 rounded-xl bg-gradient-to-r from-blue-electric/20 to-purple-primary/20 border border-blue-electric/30 mb-3 flex items-center justify-between">
        <div>
          <span className="text-[9px] uppercase tracking-wider text-text-muted block">Net Balance</span>
          <span className="text-base font-black text-text-primary">$4,850.00</span>
        </div>
        <div className="text-right">
          <span className="text-[9px] text-green-400 block font-semibold">+ $6,200 Inc</span>
          <span className="text-[9px] text-red-400 block font-semibold">- $1,350 Exp</span>
        </div>
      </div>

      {/* Category breakdown bars */}
      <div className="space-y-1.5 mb-3">
        {[
          { label: 'Housing & Utilities', pct: 45, amount: '$600', color: 'bg-blue-electric' },
          { label: 'Groceries & Dining', pct: 25, amount: '$340', color: 'bg-purple-light' },
          { label: 'Cloud Services & Tools', pct: 18, amount: '$250', color: 'bg-green-400' },
        ].map((c, i) => (
          <div key={i} className="text-[9px]">
            <div className="flex justify-between text-text-muted mb-0.5">
              <span>{c.label}</span>
              <span className="text-text-primary font-medium">{c.amount}</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className={`h-full ${c.color} rounded-full`} style={{ width: `${c.pct}%` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Transactions List */}
      <div className="rounded-lg bg-bg-main/60 p-2 border border-white/5 space-y-1.5">
        <span className="text-[9px] font-semibold text-text-muted block">Recent Activity</span>
        {[
          { title: 'Freelance Project Stipend', date: 'Oct 28', amount: '+$1,200', positive: true },
          { title: 'AWS Cloud Hosting', date: 'Oct 26', amount: '-$45.50', positive: false },
        ].map((t, i) => (
          <div key={i} className="flex items-center justify-between text-[10px]">
            <div>
              <span className="text-text-primary block font-medium text-[9px]">{t.title}</span>
              <span className="text-[8px] text-text-muted">{t.date}</span>
            </div>
            <span className={`font-mono font-bold text-[9px] ${t.positive ? 'text-green-400' : 'text-red-400'}`}>
              {t.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectModal({ project, type, onClose }) {
  if (!project) return null;
  const isCaseStudy = type === 'casestudy';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-white/15 p-6 sm:p-8 bg-bg-card shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl glass border border-white/10 text-text-secondary hover:text-text-primary hover:border-white/25 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className={`text-xs font-bold px-3 py-1 rounded-full border ${project.labelColor}`}>
            {isCaseStudy ? 'Technical Case Study' : 'Project Deep-Dive'}
          </span>
          <span className="text-xs text-text-muted font-mono">{project.number} / 02</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-text-primary mb-1">{project.title}</h3>
        <p className={`text-sm font-semibold ${project.accentText} mb-6`}>{project.subtitle}</p>

        {isCaseStudy ? (
          /* Case Study Content */
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-xs uppercase tracking-wider font-bold text-purple-light mb-2 flex items-center gap-2">
                <BookOpen size={14} /> Problem Statement
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">{project.caseStudySummary.problem}</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-xs uppercase tracking-wider font-bold text-blue-electric mb-2 flex items-center gap-2">
                <CheckSquare size={14} /> The Technical Solution
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">{project.caseStudySummary.solution}</p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-text-primary mb-3">Architectural Structure</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.architecture.map((arch, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl glass border border-white/8">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-text-primary">{arch.layer}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-purple-light border border-purple-primary/20">{arch.tech}</span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">{arch.role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-primary/10 border border-purple-primary/20">
              <h4 className="text-xs uppercase tracking-wider font-bold text-purple-light mb-2">Key Engineering Learnings</h4>
              <p className="text-text-secondary text-sm leading-relaxed">{project.caseStudySummary.keyTakeaways}</p>
            </div>
          </div>
        ) : (
          /* Full Project Overview */
          <div className="space-y-6">
            <p className="text-text-secondary text-sm leading-relaxed">{project.description}</p>

            {/* Visual preview */}
            <div className="p-4 rounded-2xl bg-bg-main/80 border border-white/10 flex justify-center">
              {project.visual === 'ironpulse' ? <IronPulseMockup /> : <ExpenseTrackerMockup />}
            </div>

            <div>
              <h4 className="text-sm font-bold text-text-primary mb-3">Core Capabilities & Implemented Features</h4>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl glass border border-white/5">
                      <Icon size={14} className={`${project.iconColor} flex-shrink-0 mt-0.5`} />
                      <span className="text-xs text-text-secondary leading-relaxed">{feat.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-text-primary mb-3">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-lg border border-white/10 bg-bg-main text-text-secondary font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-primary text-white font-semibold text-xs hover:bg-purple-dark transition-colors"
            >
              <GithubIcon size={14} /> Open GitHub Repo
            </a>
            {!isCaseStudy ? (
              <button
                onClick={() => onClose()}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/15 text-text-primary font-semibold text-xs hover:border-purple-primary/30 transition-colors"
              >
                Close View
              </button>
            ) : null}
          </div>
          <span className="text-[11px] text-text-muted italic">Production code and schemas maintained on GitHub.</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeModal, setActiveModal] = useState(null); // { project, type: 'preview' | 'casestudy' }

  return (
    <>
      <section id="projects" className="section-padding bg-bg-main relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl bg-purple-primary/5 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl bg-blue-electric/5 pointer-events-none" />

        <div className="container-custom" ref={ref}>
          <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            {/* Label */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-purple-primary" />
              <span className="text-purple-light text-sm font-semibold tracking-widest uppercase">Projects</span>
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-4 text-text-primary">
              Things I've <span className="text-gradient-purple">Built</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-text-secondary max-w-xl mb-16 text-lg">
              Real-world full-stack applications built from scratch, demonstrating end-to-end development skills, secure authentication, and data architecture.
            </motion.p>

            {/* Project Cards */}
            <div className="space-y-12">
              {projects.map((project, i) => (
                <motion.div
                  key={project.number}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className={`glass-card rounded-3xl overflow-hidden border ${project.accent} transition-all duration-300 hover:shadow-[0_8px_60px_rgba(0,0,0,0.6)]`}
                >
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Visual side with mock preview & subtle zoom */}
                    <div
                      className={`lg:col-span-2 bg-gradient-to-br ${project.gradient} bg-bg-card p-6 md:p-8 flex items-center justify-center border-b lg:border-b-0 ${
                        i % 2 === 0 ? 'lg:border-r' : 'lg:order-last lg:border-l'
                      } border-white/8 group relative overflow-hidden`}
                    >
                      <div className="transition-transform duration-500 group-hover:scale-105 w-full flex justify-center">
                        {project.visual === 'ironpulse' ? <IronPulseMockup /> : <ExpenseTrackerMockup />}
                      </div>

                      {/* Overlay badge on hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <span className="px-4 py-2 rounded-xl glass border border-white/20 text-xs font-semibold text-white flex items-center gap-2">
                          <Eye size={14} /> Interactive Preview
                        </span>
                      </div>
                    </div>

                    {/* Content side */}
                    <div className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-between">
                      <div>
                        {/* Number + Label */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="font-mono text-5xl font-black opacity-20 text-text-primary leading-none">
                            {project.number}
                          </span>
                          <span className={`text-xs font-bold px-3 py-1 rounded-lg border ${project.labelColor}`}>
                            {project.label}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl font-black text-text-primary mb-1">{project.title}</h3>
                        <p className={`text-base font-semibold ${project.accentText} mb-4`}>{project.subtitle}</p>
                        <p className="text-text-secondary leading-relaxed text-sm mb-6">{project.description}</p>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                          {project.features.slice(0, 6).map(({ icon: Icon, text }) => (
                            <div key={text} className="flex items-center gap-2">
                              <Icon size={14} className={project.iconColor} />
                              <span className="text-text-secondary text-xs">{text}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className={`text-xs px-3 py-1.5 rounded-lg border border-white/10 bg-bg-main/60 ${project.accentText} font-medium`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions: View Project, View Case Study, GitHub */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/8">
                        {/* View Project Button */}
                        <motion.button
                          onClick={() => setActiveModal({ project, type: 'preview' })}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-primary text-white text-xs font-semibold hover:bg-purple-dark transition-all duration-200 shadow-lg shadow-purple-primary/20"
                        >
                          <Eye size={14} />
                          View Project
                        </motion.button>

                        {/* View Case Study Button */}
                        <motion.button
                          onClick={() => setActiveModal({ project, type: 'casestudy' })}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/15 text-text-primary text-xs font-semibold hover:border-blue-electric/40 hover:text-blue-electric transition-all duration-200"
                        >
                          <BookOpen size={14} />
                          View Case Study
                        </motion.button>

                        {/* GitHub Button */}
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border ${project.accent} ${project.accentBg} ${project.accentText} text-xs font-semibold transition-all duration-200`}
                        >
                          <GithubIcon size={14} />
                          GitHub Repo
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom GitHub Link */}
            <motion.div variants={fadeUp} className="mt-14 text-center">
              <motion.a
                href="https://github.com/bajayy1812-code"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139,92,246,0.3)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl border border-purple-primary/30 bg-purple-primary/10 text-purple-light font-semibold text-sm transition-all duration-200 hover:bg-purple-primary/20"
              >
                <GithubIcon size={16} />
                View All Repositories on GitHub
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Modal */}
      <AnimatePresence>
        {activeModal && (
          <ProjectModal
            project={activeModal.project}
            type={activeModal.type}
            onClose={() => setActiveModal(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
