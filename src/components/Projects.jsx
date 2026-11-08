import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  FolderGit2, ExternalLink, X, CheckCircle2, AlertCircle, Wrench,
  Layers, Lock, Database, UserCheck, ShieldCheck, Dumbbell, Wallet,
  ChevronRight, PlusCircle
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
    name: 'GYM MEMBERSHIP MANAGEMENT SYSTEM',
    shortTitle: 'Gym Membership Management System',
    category: 'Full Stack MERN Application',
    tagline: 'End-to-end fitness center operations & membership management portal.',
    accent: '#E87991',
    overview:
      'A production-grade full-stack gym management platform engineered to automate gym operations. It enables administrators to manage member accounts, track recurring memberships, monitor attendance, configure personalized diet plans, and calculate client BMIs while providing members with self-service dashboard visibility.',
    problemStatement:
      'Boutique gyms and fitness centers often rely on fragmented paper registers or disparate spreadsheets to track active subscriptions, member attendance, and renewals. This causes manual record reconciliation errors, untracked payment lapses, and difficulty providing personalized fitness guidance.',
    technologiesUsed: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'JWT Authentication',
      'bcrypt Password Hashing',
      'Mongoose ODM',
      'Tailwind CSS',
    ],
    keyFeatures: [
      'Admin and User authentication with encrypted passwords and stateless JWT session handling.',
      'Role-based authorization (RBAC) separating administrative powers from member self-service views.',
      'Protected admin signup and secure credential generation.',
      'RESTful API development with standardized status codes and centralized middleware error handling.',
      'CRUD operations for members, subscription plans, and nutritional schedules.',
      'Member management and live profile status verification.',
      'Subscription management tracking plan types, validity durations, and renewal dates.',
      'Payment tracking and attendance recording with timestamp logs.',
      'Responsive React dashboard optimized across mobile, tablet, and desktop devices.',
    ],
    myContribution:
      'Engineered the end-to-end full stack architecture. Built the React single-page interface with protected routes; designed the Express REST API endpoints and validation middleware; modeled the Mongoose schemas for Users, Memberships, Attendance, and Nutrition; and implemented JWT/bcrypt security protocols.',
    technicalImplementation:
      'Designed modular MVC backend architecture using Express routers, custom authentication middleware to decode JWT bearer tokens, atomic MongoDB transactions for subscription renewals, and reactive React state hooks for optimistic UI updates.',
    githubRepo: 'https://github.com/bajayy1812-code/ajay-portfolio',
    liveDemo: null,
    icon: Dumbbell,
    previewType: 'ironpulse',
  },
  {
    id: 'expense-tracker',
    name: 'EXPENSE TRACKER',
    shortTitle: 'Expense Tracker',
    category: 'Full Stack Web Application',
    tagline: 'Zero-friction income & expense logging with real-time financial metrics.',
    accent: '#E87991',
    overview:
      'A full-stack personal finance tracking application designed to help individuals log transactions, categorize expenditures, review net cash flows, and maintain persistent historical financial records through an intuitive dashboard.',
    problemStatement:
      'Users frequently encounter friction in tracking personal expenditures due to overly complex accounting software, resulting in lack of budget visibility and unmonitored overspending across daily categories.',
    technologiesUsed: [
      'JavaScript ES6+',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose ODM',
      'RESTful APIs',
      'HTML5 / CSS3',
    ],
    keyFeatures: [
      'Income and expense management with automatic balance recalculations.',
      'Category-based tracking (Housing, Dining, Utilities, Entertainment, Cloud, Stipend).',
      'Full CRUD operations enabling real-time adding, editing, and deletion with client confirmations.',
      'MongoDB persistence ensuring reliable state preservation across sessions.',
      'Spending dashboard providing percentage breakdowns of monthly cash outflow.',
      'Strict client & server-side form validation verifying numeric values and date constraints.',
      'Chronological transaction history with date-range ledger filtering.',
      'Responsive interface ensuring smooth interaction on mobile and desktop screens.',
    ],
    myContribution:
      'Developed the complete application stack. Implemented the backend CRUD controller routines in Express, formulated transaction data schemas in Mongoose with balance aggregation logic, and built the responsive client interface with reactive DOM updates.',
    technicalImplementation:
      'Crafted an event-driven architecture using Express REST endpoints, MongoDB aggregation pipelines to aggregate category totals atomically on transaction events, and responsive state synchronization on the client.',
    githubRepo: 'https://github.com/bajayy1812-code/ajay-portfolio',
    liveDemo: null,
    icon: Wallet,
    previewType: 'expense',
  },
];

// Interactive In-Card Simulation for Iron Pulse (Dark Burgundy & Rose)
function IronPulseInteractive() {
  const [activeTab, setActiveTab] = useState('roster'); // 'roster' | 'bmi'
  const [checkInCount, setCheckInCount] = useState(42);
  const [checkedInMembers, setCheckedInMembers] = useState(['K. Rajesh', 'V. Sneha']);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);

  const calculateBMI = () => {
    const hM = height / 100;
    return (weight / (hM * hM)).toFixed(1);
  };

  const handleQuickCheckIn = (name) => {
    if (!checkedInMembers.includes(name)) {
      setCheckedInMembers((prev) => [...prev, name]);
      setCheckInCount((c) => c + 1);
    }
  };

  return (
    <div className="w-full rounded-xl bg-[#171114] border border-[#49333D] p-3 text-xs font-mono shadow-inner select-none">
      {/* Top Browser Bar */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#49333D]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#49333D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#49333D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E87991]" />
          <span className="text-[10px] text-[#B9A6AA] ml-2">ironpulse.app/admin</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('roster')}
            className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
              activeTab === 'roster'
                ? 'bg-[#E87991] text-[#171114] font-bold'
                : 'text-[#B9A6AA] hover:text-[#FFF7F7]'
            }`}
          >
            Live Roster
          </button>
          <button
            onClick={() => setActiveTab('bmi')}
            className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
              activeTab === 'bmi'
                ? 'bg-[#E87991] text-[#171114] font-bold'
                : 'text-[#B9A6AA] hover:text-[#FFF7F7]'
            }`}
          >
            BMI Tool
          </button>
        </div>
      </div>

      {activeTab === 'roster' ? (
        <div className="space-y-2">
          {/* Live KPI Header */}
          <div className="grid grid-cols-3 gap-1.5">
            <div className="p-1.5 rounded bg-[#241820] border border-[#49333D]">
              <span className="text-[9px] text-[#8D7B80] block">Total Members</span>
              <span className="text-xs font-bold text-[#FFF7F7]">184 Active</span>
            </div>
            <div className="p-1.5 rounded bg-[#241820] border border-[#49333D]">
              <span className="text-[9px] text-[#8D7B80] block">Today Check-ins</span>
              <span className="text-xs font-bold text-[#E87991]">{checkInCount} Logged</span>
            </div>
            <div className="p-1.5 rounded bg-[#241820] border border-[#49333D]">
              <span className="text-[9px] text-[#8D7B80] block">Pending Renew</span>
              <span className="text-xs font-bold text-[#D6A6A0]">7 Due</span>
            </div>
          </div>

          {/* Clickable Member Check-in Rows */}
          <div className="rounded bg-[#241820] border border-[#49333D] p-2 space-y-1">
            <div className="flex justify-between text-[9px] text-[#8D7B80] pb-1 border-b border-[#49333D]">
              <span>Member (Click to simulate check-in)</span>
              <span>Status</span>
            </div>
            {[
              { name: 'Marcus Vance', plan: 'Quarterly Pro' },
              { name: 'Elena Rostova', plan: 'Annual VIP' },
              { name: 'Devon Miles', plan: 'Monthly Standard' },
            ].map((m, i) => {
              const isCheckedIn = checkedInMembers.includes(m.name);
              return (
                <div
                  key={i}
                  onClick={() => handleQuickCheckIn(m.name)}
                  className="flex justify-between items-center py-1 px-1.5 rounded hover:bg-[#302029] cursor-pointer transition-colors"
                >
                  <div>
                    <span className="text-[#FFF7F7] font-semibold text-[11px] block">{m.name}</span>
                    <span className="text-[9px] text-[#B9A6AA]">{m.plan}</span>
                  </div>
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                      isCheckedIn
                        ? 'bg-[#E87991]/20 text-[#E87991] border border-[#E87991]/40 font-bold'
                        : 'bg-[#171114] text-[#B9A6AA] border border-[#49333D]'
                    }`}
                  >
                    {isCheckedIn ? '✓ Logged' : '+ Check-in'}
                  </span>
                </div>
              );
            })}
          </div>
          <span className="text-[9px] text-[#8D7B80] block text-center italic">
            Interactive simulation: Click member to record check-in
          </span>
        </div>
      ) : (
        /* BMI Calculator Tool */
        <div className="p-2 rounded bg-[#241820] border border-[#49333D] space-y-2">
          <div className="flex items-center justify-between pb-1 border-b border-[#49333D]">
            <span className="text-[10px] text-[#FFF7F7] font-bold">Interactive Client BMI Assessment</span>
            <span className="text-xs font-bold text-[#E87991] font-mono">BMI: {calculateBMI()}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div>
              <label className="text-[#B9A6AA] block mb-1">Weight: {weight} kg</label>
              <input
                type="range"
                min="45"
                max="120"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full accent-[#E87991]"
              />
            </div>
            <div>
              <label className="text-[#B9A6AA] block mb-1">Height: {height} cm</label>
              <input
                type="range"
                min="140"
                max="210"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full accent-[#D6A6A0]"
              />
            </div>
          </div>

          <div className="p-1.5 rounded bg-[#171114] text-[10px] text-[#FFF7F7] flex items-center justify-between font-mono border border-[#49333D]">
            <span className="text-[#B9A6AA]">Automated Diet Allocation:</span>
            <span className="font-bold text-[#E87991]">
              {calculateBMI() < 24.9 ? 'Maintenance & Lean Protein' : 'Caloric Deficit & Cardio'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// Interactive In-Card Simulation for Expense Tracker (Dark Burgundy & Rose)
function ExpenseTrackerInteractive() {
  const [balance, setBalance] = useState(38450);
  const [recentTransactions, setRecentTransactions] = useState([
    { title: 'Cloud Server Hosting', amount: -1250, cat: 'Cloud' },
    { title: 'Project Milestone Stipend', amount: +25000, cat: 'Income' },
    { title: 'Dev Workspace Monitor', amount: -6500, cat: 'Equip' },
  ]);

  const handleAddSampleExpense = (title, amount, cat) => {
    setBalance((prev) => prev - amount);
    setRecentTransactions((prev) => [{ title, amount: -amount, cat }, ...prev.slice(0, 3)]);
  };

  return (
    <div className="w-full rounded-xl bg-[#171114] border border-[#49333D] p-3 text-xs font-mono shadow-inner select-none">
      {/* Top Browser Bar */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#49333D]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#49333D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#49333D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E87991]" />
          <span className="text-[10px] text-[#B9A6AA] ml-2">expensetracker.local/ledger</span>
        </div>
        <span className="text-[10px] text-[#E87991] font-bold">MERN LEDGER</span>
      </div>

      {/* Reactive Balance Banner */}
      <div className="p-2.5 rounded bg-[#241820] border border-[#49333D] mb-2 flex items-center justify-between">
        <div>
          <span className="text-[9px] text-[#8D7B80] uppercase block">Calculated Net Balance</span>
          <span className="text-sm font-bold text-[#FFF7F7]">
            ₹ {balance.toLocaleString('en-IN')}.00
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => handleAddSampleExpense('Dev API Subscription', 850, 'Cloud')}
            className="px-2 py-1 rounded bg-[#302029] hover:bg-[#E87991] hover:text-[#171114] text-[#E87991] border border-[#49333D] text-[9px] font-semibold transition-colors flex items-center gap-1"
          >
            <PlusCircle size={10} /> -₹850 API
          </button>
          <button
            onClick={() => handleAddSampleExpense('Coffee & Workspace', 250, 'Dining')}
            className="px-2 py-1 rounded bg-[#302029] hover:bg-[#E87991] hover:text-[#171114] text-[#D6A6A0] border border-[#49333D] text-[9px] font-semibold transition-colors flex items-center gap-1"
          >
            <PlusCircle size={10} /> -₹250 Food
          </button>
        </div>
      </div>

      {/* Recent Ledger Entries */}
      <div className="rounded bg-[#241820] border border-[#49333D] p-2 space-y-1">
        <div className="flex justify-between text-[9px] text-[#8D7B80] pb-1 border-b border-[#49333D]">
          <span>Transaction</span>
          <span>Category</span>
          <span>Amount</span>
        </div>
        {recentTransactions.map((tx, idx) => (
          <div key={idx} className="flex justify-between items-center text-[10px]">
            <span className="text-[#FFF7F7] font-medium truncate max-w-[140px]">{tx.title}</span>
            <span className="text-[9px] text-[#B9A6AA] px-1 rounded bg-[#171114]">{tx.cat}</span>
            <span
              className={`font-bold ${
                tx.amount > 0 ? 'text-emerald-400' : 'text-[#E87991]'
              }`}
            >
              {tx.amount > 0 ? `+₹${tx.amount}` : `-₹${Math.abs(tx.amount)}`}
            </span>
          </div>
        ))}
      </div>

      <span className="text-[9px] text-[#8D7B80] block text-center mt-2 italic">
        Interactive sandbox: Click '+ Buttons' above to simulate atomic expense deduction
      </span>
    </div>
  );
}

// 10-Point Technical Recruiter Dossier Modal (Dark Burgundy & Rose)
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#171114]/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#241820] border border-[#49333D] shadow-2xl p-6 sm:p-8 text-[#B9A6AA]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-[#302029] border border-[#49333D] text-[#FFF7F7] hover:text-[#E87991] hover:border-[#E87991] transition-colors"
          aria-label="Close project modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#E87991] font-bold">
            {project.category}
          </span>
          <span className="text-xs text-[#8D7B80]">· Complete Technical Dossier</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFF7F7] mb-2">
          {project.name}
        </h3>
        <p className="text-sm text-[#D6A6A0] font-medium mb-6">
          {project.tagline}
        </p>

        {/* Technical Dossier Content */}
        <div className="space-y-5 text-xs sm:text-sm leading-relaxed">
          {/* 1. Project Overview */}
          <div className="p-4 rounded-xl bg-[#302029] border border-[#49333D]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FFF7F7] font-bold mb-2 flex items-center gap-2">
              <span className="text-[#E87991]">01.</span> Project Overview
            </h4>
            <p className="text-[#B9A6AA]">{project.overview}</p>
          </div>

          {/* 2. Problem Statement */}
          <div className="p-4 rounded-xl bg-[#302029] border border-[#49333D]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FFF7F7] font-bold mb-2 flex items-center gap-2">
              <span className="text-[#E87991]">02.</span> Problem Statement
            </h4>
            <p className="text-[#B9A6AA]">{project.problemStatement}</p>
          </div>

          {/* 3. Technologies Used */}
          <div className="p-4 rounded-xl bg-[#302029] border border-[#49333D]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FFF7F7] font-bold mb-3 flex items-center gap-2">
              <span className="text-[#E87991]">03.</span> Technologies Used & Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologiesUsed.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#241820] text-[#FFF7F7] font-mono text-xs border border-[#49333D] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Key Features */}
          <div className="p-4 rounded-xl bg-[#302029] border border-[#49333D]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FFF7F7] font-bold mb-3 flex items-center gap-2">
              <span className="text-[#E87991]">04.</span> Key Implemented Features
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs">
                  <CheckCircle2 size={14} className="text-[#E87991] mt-0.5 flex-shrink-0" />
                  <span className="text-[#FFF7F7]">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. My Contribution */}
          <div className="p-4 rounded-xl bg-[#302029] border border-[#49333D]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FFF7F7] font-bold mb-2 flex items-center gap-2">
              <span className="text-[#E87991]">05.</span> Engineering Contribution
            </h4>
            <p className="text-[#B9A6AA]">{project.myContribution}</p>
          </div>

          {/* 6. Technical Implementation */}
          <div className="p-4 rounded-xl bg-[#302029] border border-[#49333D]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FFF7F7] font-bold mb-2 flex items-center gap-2">
              <span className="text-[#E87991]">06.</span> Technical Implementation
            </h4>
            <p className="text-[#B9A6AA]">{project.technicalImplementation}</p>
          </div>

          {/* Verification & Links */}
          <div className="p-4 rounded-xl bg-[#171114] border border-[#49333D] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-[#8D7B80] uppercase block">
                Source Code & Repository
              </span>
              <span className="text-xs text-[#FFF7F7] font-semibold">
                Production Codebase hosted on GitHub · Verified Full Stack Implementation
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2 px-4"
              >
                <GithubIcon size={14} />
                <span>View GitHub Repository</span>
              </a>

              <button
                onClick={onClose}
                className="btn-secondary text-xs py-2 px-4"
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
      <section id="projects" className="section-padding bg-[#241820]/40 relative border-t border-[#49333D]">
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
                <span className="w-6 h-px bg-[#E87991]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#E87991] font-bold">Featured Systems</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FFF7F7]">
                Projects I've <span className="editorial-serif font-medium text-[#E87991]">built.</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#B9A6AA] max-w-2xl">
                Real-world full-stack applications with integrated sandboxes, authentication logic, database schema modeling, and complete source code.
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
                    className="burgundy-card overflow-hidden burgundy-card-hover"
                  >
                    <div className="grid lg:grid-cols-12 gap-0">
                      
                      {/* Left: Interactive Live Simulation Sandbox */}
                      <div className="lg:col-span-5 p-6 sm:p-8 bg-[#241820] border-b lg:border-b-0 lg:border-r border-[#49333D] flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#302029] text-[#E87991] border border-[#49333D] font-semibold">
                              0{index + 1} // {project.category}
                            </span>
                            <div className="p-2 rounded-lg bg-[#302029] text-[#E87991] border border-[#49333D]">
                              <Icon size={16} />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-[#FFF7F7] mb-1">
                            {project.shortTitle}
                          </h3>
                          <p className="text-xs text-[#B9A6AA] mb-5">
                            {project.tagline}
                          </p>
                        </div>

                        {/* Embedded Interactive Live Simulation Widget */}
                        <div className="my-auto py-2">
                          {project.previewType === 'ironpulse' ? (
                            <IronPulseInteractive />
                          ) : (
                            <ExpenseTrackerInteractive />
                          )}
                        </div>

                        <div className="pt-4 mt-4 border-t border-[#49333D] flex items-center justify-between text-[11px] font-mono text-[#8D7B80]">
                          <span>Interactive State Live</span>
                          <span className="text-[#E87991] font-semibold">Full Stack Verified</span>
                        </div>
                      </div>

                      {/* Right: Technical Details & Case Study Access */}
                      <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-[#302029]">
                        <div>
                          {/* Overview snippet */}
                          <div className="mb-5">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FFF7F7] font-bold mb-2">
                              System Overview & Architecture
                            </h4>
                            <p className="text-xs sm:text-sm text-[#B9A6AA] leading-relaxed">
                              {project.overview}
                            </p>
                          </div>

                          {/* Core Highlights */}
                          <div className="mb-5">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FFF7F7] font-bold mb-2.5">
                              Key Implemented Capabilities
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-2 text-xs text-[#B9A6AA]">
                              {project.keyFeatures.slice(0, 4).map((f, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#E87991] mt-1.5 flex-shrink-0" />
                                  <span className="text-[#FFF7F7]">{f}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tech Stack Badges */}
                          <div className="mb-6">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FFF7F7] font-bold mb-2">
                              Technologies & Libraries
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {project.technologiesUsed.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-xs px-2.5 py-1 rounded bg-[#241820] text-[#FFF7F7] border border-[#49333D] font-mono font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Card Action Buttons */}
                        <div className="pt-5 border-t border-[#49333D] flex flex-wrap items-center gap-3">
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="btn-primary text-xs"
                          >
                            <span>View Details</span>
                            <ChevronRight size={14} />
                          </button>

                          <a
                            href={project.githubRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary text-xs"
                          >
                            <GithubIcon size={14} />
                            <span>GitHub</span>
                          </a>

                          {project.liveDemo && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary text-xs"
                            >
                              <ExternalLink size={14} />
                              <span>Live Demo</span>
                            </a>
                          )}
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
