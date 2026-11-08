import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  FolderGit2, ExternalLink, X, CheckCircle2, AlertCircle, Wrench,
  Layers, Lock, Database, UserCheck, ShieldCheck, Dumbbell, Wallet,
  ChevronRight, ArrowUpRight, Calculator, PlusCircle, RefreshCw, BarChart2
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
    accent: '#D9541E',
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
    liveDemo: null,
    icon: Dumbbell,
    previewType: 'ironpulse',
  },
  {
    id: 'expense-tracker',
    name: 'EXPENSE TRACKER – Personal Finance App',
    shortTitle: 'Expense Tracker',
    category: 'Full Stack Web Application',
    tagline: 'Zero-friction income & expense logging with real-time financial metrics.',
    accent: '#D9541E',
    overview:
      'A full-stack personal finance tracking application designed to help individuals log transactions, categorize expenditures, review net cash flows, and maintain persistent historical financial records through a responsive dashboard.',
    problemStatement:
      'Users frequently encounter friction in tracking personal expenditures due to overly complex accounting software, resulting in lack of budget visibility and unmonitored overspending across daily categories.',
    technologiesUsed: [
      'JavaScript (ES6+)',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose ODM',
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
    previewType: 'expense',
  },
];

// Interactive In-Card Simulation for Iron Pulse (Editorial Theme)
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
    <div className="w-full rounded-xl bg-[#FAF7F0] border border-[#D8D0C2] p-3 text-xs font-mono shadow-sm select-none">
      {/* Top Browser Bar */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#D8D0C2]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D8D0C2] border border-[#BDB3A3]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#D8D0C2] border border-[#BDB3A3]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#D9541E]" />
          <span className="text-[10px] text-[#77736B] ml-2">ironpulse.app/admin</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('roster')}
            className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
              activeTab === 'roster'
                ? 'bg-[#D9541E] text-white font-semibold'
                : 'text-[#77736B] hover:text-[#111111]'
            }`}
          >
            Live Roster
          </button>
          <button
            onClick={() => setActiveTab('bmi')}
            className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
              activeTab === 'bmi'
                ? 'bg-[#D9541E] text-white font-semibold'
                : 'text-[#77736B] hover:text-[#111111]'
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
            <div className="p-1.5 rounded bg-[#FFFFFF] border border-[#D8D0C2]">
              <span className="text-[9px] text-[#77736B] block">Total Members</span>
              <span className="text-xs font-bold text-[#111111]">184 Active</span>
            </div>
            <div className="p-1.5 rounded bg-[#FFFFFF] border border-[#D8D0C2]">
              <span className="text-[9px] text-[#77736B] block">Today's Check-ins</span>
              <span className="text-xs font-bold text-[#D9541E]">{checkInCount} Logged</span>
            </div>
            <div className="p-1.5 rounded bg-[#FFFFFF] border border-[#D8D0C2]">
              <span className="text-[9px] text-[#77736B] block">Pending Renew</span>
              <span className="text-xs font-bold text-[#77736B]">7 Due</span>
            </div>
          </div>

          {/* Clickable Member Check-in Rows */}
          <div className="rounded bg-[#FFFFFF] border border-[#D8D0C2] p-2 space-y-1">
            <div className="flex justify-between text-[9px] text-[#77736B] pb-1 border-b border-[#D8D0C2]">
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
                  className="flex justify-between items-center py-1 px-1.5 rounded hover:bg-[#E9E2D5] cursor-pointer transition-colors"
                >
                  <div>
                    <span className="text-[#111111] font-semibold text-[11px] block">{m.name}</span>
                    <span className="text-[9px] text-[#77736B]">{m.plan}</span>
                  </div>
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                      isCheckedIn
                        ? 'bg-[#D9541E]/10 text-[#D9541E] border border-[#D9541E]/30 font-bold'
                        : 'bg-[#E9E2D5] text-[#77736B] border border-[#D8D0C2]'
                    }`}
                  >
                    {isCheckedIn ? '✓ Logged' : '+ Check-in'}
                  </span>
                </div>
              );
            })}
          </div>
          <span className="text-[9px] text-[#77736B] block text-center italic">
            Interactive simulation: Click member to record check-in
          </span>
        </div>
      ) : (
        /* BMI Calculator Tool */
        <div className="p-2 rounded bg-[#FFFFFF] border border-[#D8D0C2] space-y-2">
          <div className="flex items-center justify-between pb-1 border-b border-[#D8D0C2]">
            <span className="text-[10px] text-[#111111] font-bold">Interactive Client BMI Assessment</span>
            <span className="text-xs font-bold text-[#D9541E] font-mono">BMI: {calculateBMI()}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div>
              <label className="text-[#77736B] block mb-1">Weight: {weight} kg</label>
              <input
                type="range"
                min="45"
                max="120"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full accent-[#D9541E]"
              />
            </div>
            <div>
              <label className="text-[#77736B] block mb-1">Height: {height} cm</label>
              <input
                type="range"
                min="140"
                max="210"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full accent-[#111111]"
              />
            </div>
          </div>

          <div className="p-1.5 rounded bg-[#E9E2D5] text-[10px] text-[#111111] flex items-center justify-between font-mono">
            <span className="text-[#77736B]">Automated Diet Allocation:</span>
            <span className="font-bold text-[#D9541E]">
              {calculateBMI() < 24.9 ? 'Maintenance & Lean Protein' : 'Caloric Deficit & Cardio'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// Interactive In-Card Simulation for Expense Tracker (Editorial Theme)
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
    <div className="w-full rounded-xl bg-[#FAF7F0] border border-[#D8D0C2] p-3 text-xs font-mono shadow-sm select-none">
      {/* Top Browser Bar */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#D8D0C2]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D8D0C2] border border-[#BDB3A3]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#D8D0C2] border border-[#BDB3A3]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#D9541E]" />
          <span className="text-[10px] text-[#77736B] ml-2">expensetracker.local/ledger</span>
        </div>
        <span className="text-[10px] text-[#D9541E] font-bold">MERN LEDGER</span>
      </div>

      {/* Reactive Balance Banner */}
      <div className="p-2.5 rounded bg-[#FFFFFF] border border-[#D8D0C2] mb-2 flex items-center justify-between">
        <div>
          <span className="text-[9px] text-[#77736B] uppercase block">Calculated Net Balance</span>
          <span className="text-sm font-bold text-[#111111]">
            ₹ {balance.toLocaleString('en-IN')}.00
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => handleAddSampleExpense('Dev API Subscription', 850, 'Cloud')}
            className="px-2 py-1 rounded bg-[#E9E2D5] hover:bg-[#D9541E] hover:text-white text-[#111111] border border-[#D8D0C2] text-[9px] font-semibold transition-colors flex items-center gap-1"
          >
            <PlusCircle size={10} /> -₹850 API
          </button>
          <button
            onClick={() => handleAddSampleExpense('Coffee & Workspace', 250, 'Dining')}
            className="px-2 py-1 rounded bg-[#E9E2D5] hover:bg-[#D9541E] hover:text-white text-[#111111] border border-[#D8D0C2] text-[9px] font-semibold transition-colors flex items-center gap-1"
          >
            <PlusCircle size={10} /> -₹250 Food
          </button>
        </div>
      </div>

      {/* Recent Ledger Entries */}
      <div className="rounded bg-[#FFFFFF] border border-[#D8D0C2] p-2 space-y-1">
        <div className="flex justify-between text-[9px] text-[#77736B] pb-1 border-b border-[#D8D0C2]">
          <span>Transaction</span>
          <span>Category</span>
          <span>Amount</span>
        </div>
        {recentTransactions.map((tx, idx) => (
          <div key={idx} className="flex justify-between items-center text-[10px]">
            <span className="text-[#111111] font-medium truncate max-w-[140px]">{tx.title}</span>
            <span className="text-[9px] text-[#77736B] px-1 rounded bg-[#E9E2D5]">{tx.cat}</span>
            <span
              className={`font-bold ${
                tx.amount > 0 ? 'text-[#111111]' : 'text-[#D9541E]'
              }`}
            >
              {tx.amount > 0 ? `+₹${tx.amount}` : `-₹${Math.abs(tx.amount)}`}
            </span>
          </div>
        ))}
      </div>

      <span className="text-[9px] text-[#77736B] block text-center mt-2 italic">
        Interactive sandbox: Click '+ Buttons' above to simulate atomic expense deduction
      </span>
    </div>
  );
}

// 10-Point Technical Recruiter Dossier Modal (Editorial Theme)
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111111]/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#F3EEE3] border border-[#D8D0C2] shadow-2xl p-6 sm:p-8 text-[#77736B]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-[#E9E2D5] border border-[#D8D0C2] text-[#111111] hover:text-[#D9541E] hover:border-[#D9541E] transition-colors"
          aria-label="Close project modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#D9541E] font-bold">
            {project.category}
          </span>
          <span className="text-xs text-[#77736B]">· Complete 10-Point Technical Case Study</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-2">
          {project.name}
        </h3>
        <p className="text-sm text-[#D9541E] font-medium mb-6">
          {project.tagline}
        </p>

        {/* 10-Point Technical Recruiter Dossier */}
        <div className="space-y-5 text-xs sm:text-sm leading-relaxed">
          {/* 1. Project Overview */}
          <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#D8D0C2]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold mb-2 flex items-center gap-2">
              <span className="text-[#D9541E]">01.</span> Project Overview
            </h4>
            <p className="text-[#77736B]">{project.overview}</p>
          </div>

          {/* 2. Problem Statement */}
          <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#D8D0C2]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold mb-2 flex items-center gap-2">
              <span className="text-[#D9541E]">02.</span> Problem Statement
            </h4>
            <p className="text-[#77736B]">{project.problemStatement}</p>
          </div>

          {/* 3. Technologies Used */}
          <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#D8D0C2]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold mb-3 flex items-center gap-2">
              <span className="text-[#D9541E]">03.</span> Technologies Used & Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologiesUsed.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#E9E2D5] text-[#111111] font-mono text-xs border border-[#D8D0C2] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Key Features */}
          <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#D8D0C2]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold mb-3 flex items-center gap-2">
              <span className="text-[#D9541E]">04.</span> Key Implemented Features
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs">
                  <CheckCircle2 size={14} className="text-[#D9541E] mt-0.5 flex-shrink-0" />
                  <span className="text-[#111111]">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. My Contribution */}
          <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#D8D0C2]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold mb-2 flex items-center gap-2">
              <span className="text-[#D9541E]">05.</span> My Engineering Contribution
            </h4>
            <p className="text-[#77736B]">{project.myContribution}</p>
          </div>

          {/* 6. Challenges Faced & 7. Solutions Implemented */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#D8D0C2]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#D9541E] font-bold mb-2 flex items-center gap-1.5">
                <AlertCircle size={14} /> 06. Challenges Faced
              </h4>
              <p className="text-xs leading-relaxed text-[#77736B]">{project.challengesFaced}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#D8D0C2]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold mb-2 flex items-center gap-1.5">
                <Wrench size={14} className="text-[#D9541E]" /> 07. Solutions Implemented
              </h4>
              <p className="text-xs leading-relaxed text-[#77736B]">{project.solutionsImplemented}</p>
            </div>
          </div>

          {/* 8. Verification & Links (08 GitHub Repo & 09 Deployment Status) */}
          <div className="p-4 rounded-xl bg-[#E9E2D5] border border-[#D8D0C2] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-[#77736B] uppercase block">
                08 & 09. Deployment & Source Status
              </span>
              <span className="text-xs text-[#111111] font-semibold">
                Production Codebase hosted on GitHub · Local / Self-Hosted MERN Architecture
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
      <section id="projects" className="section-padding bg-[#E9E2D5]/40 relative border-t border-[#D8D0C2]">
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
                <span className="w-6 h-px bg-[#D9541E]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#D9541E] font-bold">Featured Systems</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111111]">
                Production <span className="editorial-serif font-medium text-[#D9541E]">Full Stack Projects.</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#77736B] max-w-2xl">
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
                    className="editorial-card overflow-hidden editorial-card-hover"
                  >
                    <div className="grid lg:grid-cols-12 gap-0">
                      
                      {/* Left: Interactive Live Simulation Sandbox */}
                      <div className="lg:col-span-5 p-6 sm:p-8 bg-[#FAF7F0] border-b lg:border-b-0 lg:border-r border-[#D8D0C2] flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#E9E2D5] text-[#111111] border border-[#D8D0C2] font-semibold">
                              0{index + 1} // {project.category}
                            </span>
                            <div className="p-2 rounded-lg bg-[#E9E2D5] text-[#D9541E] border border-[#D8D0C2]">
                              <Icon size={16} />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-[#111111] mb-1">
                            {project.shortTitle}
                          </h3>
                          <p className="text-xs text-[#77736B] mb-5">
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

                        <div className="pt-4 mt-4 border-t border-[#D8D0C2] flex items-center justify-between text-[11px] font-mono text-[#77736B]">
                          <span>Interactive State Live</span>
                          <span className="text-[#D9541E] font-semibold">Full Stack Verified</span>
                        </div>
                      </div>

                      {/* Right: Technical Details & Case Study Access */}
                      <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-[#FFFFFF]">
                        <div>
                          {/* Overview snippet */}
                          <div className="mb-5">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold mb-2">
                              System Overview & Architecture
                            </h4>
                            <p className="text-xs sm:text-sm text-[#77736B] leading-relaxed">
                              {project.overview}
                            </p>
                          </div>

                          {/* Core Highlights */}
                          <div className="mb-5">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold mb-2.5">
                              Key Implemented Capabilities
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-2 text-xs text-[#77736B]">
                              {project.keyFeatures.slice(0, 4).map((f, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9541E] mt-1.5 flex-shrink-0" />
                                  <span className="text-[#111111]">{f}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tech Stack Badges */}
                          <div className="mb-6">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold mb-2">
                              Technologies & Libraries
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {project.technologiesUsed.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-xs px-2.5 py-1 rounded bg-[#E9E2D5] text-[#111111] border border-[#D8D0C2] font-mono font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Card Action Buttons */}
                        <div className="pt-5 border-t border-[#D8D0C2] flex flex-wrap items-center gap-3">
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="btn-primary text-xs"
                          >
                            <span>10-Point Case Study & Specs</span>
                            <ChevronRight size={14} />
                          </button>

                          <a
                            href={project.githubRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary text-xs"
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
