import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Palette, Search, GitBranch, Layout, Smartphone, MousePointer,
  Type, Layers, Monitor, Sparkles, Eye, X, ArrowRight,
  CheckCircle2, Compass, Sliders, Users, FileQuestion, Lightbulb,
  Zap, ChevronRight
} from 'lucide-react';

// Custom Figma SVG icon
const FigmaIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" opacity=".9"/>
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" opacity=".7"/>
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" opacity=".9"/>
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" opacity=".8"/>
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" opacity=".6"/>
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const designSkills = [
  { icon: Layout, title: 'UI Design', desc: 'Crafting clean, modern interfaces that prioritize visual balance, accessibility, and purposeful hierarchy.', color: 'text-purple-light', border: 'border-purple-primary/25', bg: 'bg-purple-primary/10' },
  { icon: Search, title: 'UX Fundamentals', desc: 'Understanding user personas, mental models, and information architecture to minimize cognitive load.', color: 'text-blue-electric', border: 'border-blue-electric/25', bg: 'bg-blue-electric/10' },
  { icon: GitBranch, title: 'Wireframing', desc: 'Rapidly sketching low-fidelity screen layouts to validate navigation flow and information hierarchy early.', color: 'text-green-400', border: 'border-green-400/25', bg: 'bg-green-400/10' },
  { icon: MousePointer, title: 'Prototyping', desc: 'Connecting screens into interactive micro-journeys to test transitions and practical usability.', color: 'text-orange-400', border: 'border-orange-400/25', bg: 'bg-orange-400/10' },
  { icon: Type, title: 'Typography', desc: 'Selecting disciplined typographic scales and pairings that reinforce brand voice and effortless readability.', color: 'text-yellow-400', border: 'border-yellow-400/25', bg: 'bg-yellow-400/10' },
  { icon: Palette, title: 'Color Theory', desc: 'Employing 60-30-10 color rules, purposeful contrast ratios, and dark-luxury lighting accents.', color: 'text-pink-400', border: 'border-pink-400/25', bg: 'bg-pink-400/10' },
  { icon: Smartphone, title: 'Responsive Design', desc: 'Designing fluid, mobile-first layouts with adaptable grids, touch targets, and break-point systems.', color: 'text-cyan-400', border: 'border-cyan-400/25', bg: 'bg-cyan-400/10' },
  { icon: Layers, title: 'User-Centered Design', desc: 'Aligning business requirements with real user intent through continuous empathy and iteration.', color: 'text-purple-light', border: 'border-purple-primary/25', bg: 'bg-purple-primary/10' },
];

const galleryConcepts = [
  {
    id: 'saas-analytics',
    title: 'NexusMetrics – SaaS Analytics Suite',
    category: 'Desktop SaaS Dashboard',
    tag: 'Desktop Frame',
    deviceType: 'desktop',
    desc: 'High-density operational dashboard featuring dark-luxury glass panels, real-time KPI streaming, conversion funnels, and revenue projection graphs.',
    colors: ['#8B5CF6', '#38BDF8'],
    highlights: ['Micro-interactions & state badges', 'Dense tabular data hierarchy', 'Neon ambient focus lighting'],
  },
  {
    id: 'fitness-mobile',
    title: 'PulseTrack – Mobile Fitness & Health',
    category: 'Mobile Application UI',
    tag: 'Mobile Device Frame',
    deviceType: 'mobile',
    desc: 'Ergonomic mobile experience optimized for one-hand operation with thumb-zone activity circles, workout streak trackers, and rapid metric logging.',
    colors: ['#C084FC', '#38BDF8'],
    highlights: ['Thumb-friendly bottom navigation', 'Dynamic circular progress SVG', 'Haptic-inspired card elevations'],
  },
  {
    id: 'developer-platform',
    title: 'AuraCloud – Developer Platform Portal',
    category: 'Website & App Concept',
    tag: 'Desktop Frame',
    deviceType: 'desktop',
    desc: 'Developer-first cloud management console pairing terminal-style code views with modular infrastructure topology cards.',
    colors: ['#38BDF8', '#8B5CF6'],
    highlights: ['Syntax-accented monospaced typography', 'Environment switcher modal', 'Clean resource utilization meters'],
  },
];

const processSteps = [
  { num: '01', title: 'Research', desc: 'Exploring target audience pain points, observing competitor patterns, and establishing problem parameters.', color: '#38BDF8' },
  { num: '02', title: 'User Flow', desc: 'Mapping user journeys from initial entry point to primary goal completion with minimal friction.', color: '#8B5CF6' },
  { num: '03', title: 'Wireframing', desc: 'Constructing low-fidelity skeletal layouts to establish spatial hierarchy and content priorities.', color: '#C084FC' },
  { num: '04', title: 'UI Design', desc: 'Applying color harmony, typography scale, micro-elevations, and atomic design system components.', color: '#38BDF8' },
  { num: '05', title: 'Prototyping', desc: 'Assembling interactive states, modal flows, and motion transitions for tactile simulation.', color: '#8B5CF6' },
  { num: '06', title: 'Testing', desc: 'Validating interface usability, gathering objective feedback, and refining the user journey.', color: '#C084FC' },
];

// 11-step Case Study data structure
const caseStudyData = {
  title: 'PulseFit – Gym & Member Portal Experience',
  subtitle: 'A Conceptual End-to-End UI/UX Design Case Study',
  status: 'Conceptual Case Study · Learning Exploration',
  summary: 'A complete design thinking journey tackling friction in fitness center membership management, translating complex administrative controls into an effortless dark-luxury interface.',
  sections: [
    {
      id: 'overview',
      number: '01',
      title: 'Project Overview',
      icon: Compass,
      content: 'PulseFit was conceived as an intuitive member and administration platform for boutique fitness studios. The project bridges the gap between tedious backend gym operations and a rewarding mobile member experience.'
    },
    {
      id: 'problem',
      number: '02',
      title: 'Problem Statement',
      icon: FileQuestion,
      content: 'Independent fitness studio owners report spending over 15 hours weekly reconciling expired memberships, chasing renewal payments, and deciphering cluttered paper rosters. Meanwhile, members experience confusion regarding booking credits and locker assignments.'
    },
    {
      id: 'audience',
      number: '03',
      title: 'Target Audience',
      icon: Users,
      content: '1) Studio Managers & Front Desk Staff who require fast, high-density desktop dashboards with zero-lag check-ins. 2) Gym Members (aged 18–45) who expect frictionless class scheduling, subscription visibility, and streak tracking from their smartphones.'
    },
    {
      id: 'painpoints',
      number: '04',
      title: 'User Pain Points',
      icon: Sliders,
      content: '• Multi-click navigation required for simple daily check-ins.\n• Lack of automated payment alerts causing awkward front-desk interactions.\n• Low visibility into member attendance patterns and class capacity limits.'
    },
    {
      id: 'goals',
      number: '05',
      title: 'Design Goals',
      icon: Lightbulb,
      content: '1. Establish an "Action in ≤ 2 clicks" standard for all critical desk workflows.\n2. Design a Dark Luxury aesthetic that radiates energy, professionalism, and high-end focus.\n3. Create clear visual differentiation between Admin Management tools and Member Self-service.'
    },
    {
      id: 'userflow',
      number: '06',
      title: 'User Flow',
      icon: GitBranch,
      content: 'Entry Point: Login (Role-Aware) → Route to Admin Dashboard or Member Hub → Single-Click Action Center (Quick Check-in / Plan Renewal) → Confirmation Toast with Instant State Sync.'
    },
    {
      id: 'wireframes',
      number: '07',
      title: 'Wireframes',
      icon: Layout,
      content: 'Low-fidelity wireframing focused on spatial distribution: placing primary metrics along the top horizon, table queries on the central viewport, and urgent alerts in a right-hand sticky drawer.'
    },
    {
      id: 'designsystem',
      number: '08',
      title: 'Design System',
      icon: Palette,
      content: '• Background Palette: #090B14 (Base), #0F1424 (Surface), #121629 (Cards)\n• Accent Colors: Electric Blue (#38BDF8) for operational data; Primary Purple (#8B5CF6) for brand elements; Green (#4ADE80) for active subscriptions.\n• Typography: Inter & JetBrains Mono for numeric telemetry.'
    },
    {
      id: 'hifi',
      number: '09',
      title: 'High-Fidelity Designs',
      icon: Sparkles,
      content: 'High-fidelity mockups integrate subtle glassmorphism borders (rgba(255,255,255,0.08)), glowing state indicators, and responsive tab cards that effortlessly scale down to 360px mobile viewports.'
    },
    {
      id: 'solution',
      number: '10',
      title: 'Final Solution',
      icon: CheckCircle2,
      content: 'A cohesive twin-platform UI system featuring an ultra-responsive desktop administrative command center alongside a companion mobile web view for members, eliminating administrative friction.'
    },
    {
      id: 'learnings',
      number: '11',
      title: 'Learnings & Future Iterations',
      icon: Zap,
      content: 'Key takeaway: Design systems save significant engineering time when component tokens are mapped 1-to-1 with Tailwind CSS utilities. Future iterations will explore accessibility high-contrast modes and multilingual RTL support.'
    }
  ]
};

function DesktopDeviceFrame({ concept }) {
  return (
    <div className="w-full rounded-2xl glass-card border border-white/10 overflow-hidden shadow-2xl bg-bg-card">
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-bg-secondary border-b border-white/8">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-1 px-3 py-1 rounded-md bg-bg-main/60 border border-white/5 text-[10px] font-mono text-text-muted">
          <span className="text-purple-light">https://</span>
          <span>{concept.id}.studio/analytics</span>
        </div>
        <div className="text-[10px] font-mono text-purple-light font-semibold">1080p Desktop</div>
      </div>

      {/* Screen Content */}
      <div className="p-4 sm:p-5 space-y-4">
        {/* Top Navbar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-primary to-blue-electric" />
            <span className="text-xs font-bold text-text-primary tracking-wide">NexusMetrics OS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] text-green-400 font-mono">Live Sync</span>
          </div>
        </div>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="p-3 rounded-xl bg-purple-primary/10 border border-purple-primary/20">
            <span className="text-[10px] text-text-muted block">Gross MRR</span>
            <span className="text-sm sm:text-base font-black text-text-primary">$32,840</span>
            <span className="text-[9px] text-green-400 font-semibold">+18.4% this qtr</span>
          </div>
          <div className="p-3 rounded-xl bg-blue-electric/10 border border-blue-electric/20">
            <span className="text-[10px] text-text-muted block">Active Sessions</span>
            <span className="text-sm sm:text-base font-black text-text-primary">1,492</span>
            <span className="text-[9px] text-blue-electric font-semibold">99.8% uptime</span>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/8">
            <span className="text-[10px] text-text-muted block">Avg Retain</span>
            <span className="text-sm sm:text-base font-black text-yellow-400">94.2%</span>
            <span className="text-[9px] text-text-muted font-semibold">Cohort 2026</span>
          </div>
        </div>

        {/* Visual Graph & Ledger */}
        <div className="grid sm:grid-cols-5 gap-3">
          <div className="sm:col-span-3 p-3.5 rounded-xl bg-bg-main/60 border border-white/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-text-primary">Throughput Graph</span>
              <span className="text-[9px] text-purple-light font-mono">24h History</span>
            </div>
            <div className="flex items-end gap-1.5 h-20 pt-2">
              {[45, 60, 50, 75, 65, 88, 72, 95, 82, 100, 90, 85].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-purple-primary/40 to-blue-electric" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="sm:col-span-2 p-3.5 rounded-xl bg-bg-main/60 border border-white/5 space-y-1.5">
            <span className="text-[10px] font-bold text-text-primary block">Node Health</span>
            {[
              { name: 'US-East Cluster', status: 'Optimal', val: '99%' },
              { name: 'AP-South Mumbai', status: 'Optimal', val: '98%' },
              { name: 'EU-Central Zurich', status: 'Warning', val: '86%' },
            ].map((n, i) => (
              <div key={i} className="flex items-center justify-between text-[9px] py-1 border-b border-white/5 last:border-0">
                <span className="text-text-secondary">{n.name}</span>
                <span className={`font-mono font-bold ${n.status === 'Warning' ? 'text-yellow-400' : 'text-green-400'}`}>{n.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileDeviceFrame({ concept }) {
  return (
    <div className="w-full max-w-[280px] mx-auto rounded-[32px] glass-card border-[3px] border-white/15 overflow-hidden shadow-2xl bg-bg-main p-3 relative">
      {/* Notch */}
      <div className="w-24 h-4 bg-bg-card rounded-full mx-auto mb-2 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white/20" />
      </div>

      {/* Screen Header */}
      <div className="flex items-center justify-between px-2 pb-2 border-b border-white/8 mb-3">
        <span className="text-[10px] font-bold text-text-primary">PulseTrack</span>
        <span className="text-[9px] font-mono text-purple-light">9:41 AM</span>
      </div>

      {/* Health Rings Mini Mock */}
      <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-primary/20 via-blue-electric/10 to-transparent border border-purple-primary/30 mb-3 text-center">
        <div className="w-16 h-16 rounded-full border-4 border-purple-primary/60 border-t-blue-electric mx-auto mb-2 flex items-center justify-center">
          <span className="text-[11px] font-black text-text-primary">78%</span>
        </div>
        <span className="text-[10px] font-bold text-text-primary block">Daily Target</span>
        <span className="text-[8px] text-text-muted">7,820 / 10,000 Steps</span>
      </div>

      {/* Quick Activity List */}
      <div className="space-y-1.5 mb-3">
        {[
          { icon: Zap, label: 'HIIT Circuit', val: '420 kcal', color: 'text-orange-400' },
          { icon: Heart, label: 'Heart Rate', val: '138 bpm', color: 'text-pink-400' },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/5 text-[9px]">
            <span className="text-text-secondary">{item.label}</span>
            <span className={`font-mono font-bold ${item.color}`}>{item.val}</span>
          </div>
        ))}
      </div>

      {/* Bottom Floating Bar */}
      <div className="p-2 rounded-xl bg-bg-card border border-white/10 flex justify-around">
        <div className="w-2 h-2 rounded-full bg-purple-light" />
        <div className="w-2 h-2 rounded-full bg-white/30" />
        <div className="w-2 h-2 rounded-full bg-white/30" />
      </div>
    </div>
  );
}

function Heart({ size = 14, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  );
}

export default function UIUXShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedCaseStep, setSelectedCaseStep] = useState(0);
  const [inspectConcept, setInspectConcept] = useState(null);

  return (
    <>
      <section id="uiux" className="section-padding bg-bg-secondary relative overflow-hidden">
        {/* Deep Studio Background Lighting */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 15% 15%, rgba(139,92,246,0.08) 0%, transparent 45%), radial-gradient(circle at 85% 85%, rgba(56,189,248,0.08) 0%, transparent 45%)`
          }}
        />

        <div className="container-custom relative z-10" ref={ref}>
          <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            {/* Section Badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-purple-primary" />
              <span className="text-purple-light text-sm font-semibold tracking-widest uppercase">
                Creative Studio
              </span>
            </motion.div>

            {/* Main Section Header */}
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-4 text-text-primary">
              UI/UX Design <span className="text-gradient-purple">Showcase</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-text-secondary max-w-2xl mb-16 text-lg">
              Combining creative design thinking with modern interaction design. A dedicated space exploring interface craft, design systems, and thoughtful user experiences.
            </motion.p>

            {/* ========================================================
                SUBSECTION A: DESIGN EXPERTISE
            ======================================================== */}
            <motion.div variants={fadeUp} className="mb-20">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-black text-text-primary">Design Expertise</h3>
                  <p className="text-xs text-text-muted mt-1">Core disciplines and foundations currently being actively learned and practiced.</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full border border-purple-primary/30 text-purple-light bg-purple-primary/10 font-semibold">
                  Continuous Learning
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {designSkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.title}
                      variants={fadeUp}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className={`glass-card rounded-2xl p-5 border ${skill.border} transition-all duration-300 hover:shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between`}
                    >
                      <div>
                        <div className={`w-10 h-10 rounded-xl ${skill.bg} border ${skill.border} flex items-center justify-center mb-3`}>
                          <Icon size={18} className={skill.color} />
                        </div>
                        <h4 className="text-text-primary font-bold text-sm mb-2">{skill.title}</h4>
                        <p className="text-text-secondary text-xs leading-relaxed">{skill.desc}</p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-text-muted">
                        <span>Foundation</span>
                        <span className="text-purple-light">Active Study</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* ========================================================
                SUBSECTION B: CREATIVE DESIGN GALLERY
            ======================================================== */}
            <motion.div variants={fadeUp} className="mb-20">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-black text-text-primary">Creative Design Gallery</h3>
                  <p className="text-xs text-text-muted mt-1">Interactive device frames & conceptual design prototypes across desktop and mobile.</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-lg border border-white/10 bg-white/5 text-text-muted font-medium">
                  Conceptual Explorations
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {galleryConcepts.map((concept) => (
                  <motion.div
                    key={concept.id}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-purple-primary/30 transition-all duration-300 flex flex-col"
                  >
                    {/* Frame Preview Header */}
                    <div className="p-4 bg-bg-main/60 border-b border-white/5 flex items-center justify-between">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/5 text-text-secondary border border-white/10">
                        {concept.tag}
                      </span>
                      <button
                        onClick={() => setInspectConcept(concept)}
                        className="text-xs text-purple-light hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <Eye size={12} /> Inspect
                      </button>
                    </div>

                    {/* Miniature Frame Display */}
                    <div className="p-4 flex-1 flex items-center justify-center bg-bg-card/40 min-h-[240px]">
                      {concept.deviceType === 'desktop' ? (
                        <div className="w-full transform scale-95 origin-center">
                          <DesktopDeviceFrame concept={concept} />
                        </div>
                      ) : (
                        <div className="w-full flex justify-center transform scale-95 origin-center">
                          <MobileDeviceFrame concept={concept} />
                        </div>
                      )}
                    </div>

                    {/* Concept Info */}
                    <div className="p-5 border-t border-white/8 space-y-3">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-mono text-purple-light">{concept.category}</span>
                        <h4 className="text-text-primary font-bold text-base mt-0.5">{concept.title}</h4>
                      </div>
                      <p className="text-text-secondary text-xs leading-relaxed">{concept.desc}</p>
                      
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {concept.highlights.map((h, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-text-muted border border-white/5">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-center text-text-muted text-xs mt-6 italic">
                * Note: Gallery previews represent conceptual studio explorations designed to demonstrate layout design, color hierarchy, and responsive thinking.
              </p>
            </motion.div>

            {/* ========================================================
                SUBSECTION C: DESIGN PROCESS
            ======================================================== */}
            <motion.div variants={fadeUp} className="mb-20">
              <div className="text-center max-w-xl mx-auto mb-12">
                <h3 className="text-2xl font-black text-text-primary mb-2">My Design Process</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  A structured, iterative 6-stage methodology ensuring decisions are grounded in user needs and engineering feasibility.
                </p>
              </div>

              <div className="relative">
                {/* Connected Glowing Timeline Bar */}
                <div className="absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-blue-electric via-purple-primary to-purple-light opacity-30 hidden lg:block" />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {processSteps.map((step, i) => (
                    <motion.div
                      key={step.num}
                      variants={fadeUp}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="flex flex-col items-center text-center p-3 rounded-2xl glass-card border border-white/8 hover:border-purple-primary/30 transition-all duration-300 relative z-10"
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 relative border transition-all duration-300 shadow-lg"
                        style={{
                          background: `${step.color}15`,
                          borderColor: `${step.color}40`,
                          boxShadow: `0 0 24px ${step.color}20`,
                        }}
                      >
                        <span className="font-mono font-black text-base" style={{ color: step.color }}>
                          {step.num}
                        </span>
                      </div>
                      <h4 className="text-text-primary font-bold text-sm mb-1">{step.title}</h4>
                      <p className="text-text-muted text-[11px] leading-relaxed hidden sm:block">
                        {step.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ========================================================
                SUBSECTION D: DESIGN TOOLS
            ======================================================== */}
            <motion.div variants={fadeUp} className="mb-20">
              <div className="mb-8">
                <h3 className="text-2xl font-black text-text-primary">Design & Craft Tools</h3>
                <p className="text-xs text-text-muted mt-1">Software and toolsets used for UI exploration and rapid prototyping.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
                {[
                  {
                    icon: FigmaIcon,
                    name: 'Figma',
                    desc: 'Currently learning and practicing interface design, wireframing, layout auto-layout components, and design token libraries.',
                    status: 'Actively Learning',
                    statusColor: 'text-purple-light bg-purple-primary/10 border-purple-primary/25',
                  },
                  {
                    icon: Monitor,
                    name: 'VS Code & Web Dev Tools',
                    desc: 'Daily production development environment for crafting responsive interfaces with React.js, Tailwind CSS, and Framer Motion.',
                    status: 'Daily Production Use',
                    statusColor: 'text-blue-electric bg-blue-electric/10 border-blue-electric/25',
                  },
                ].map(({ icon: Icon, name, desc, status, statusColor }) => (
                  <motion.div
                    key={name}
                    whileHover={{ scale: 1.02, y: -3 }}
                    className="glass-card rounded-2xl p-6 border border-white/8 hover:border-purple-primary/30 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-primary/10 border border-purple-primary/20 flex items-center justify-center">
                          <Icon size={22} className="text-purple-light" />
                        </div>
                        <span className={`text-xs px-2.5 py-1 rounded-md border font-semibold ${statusColor}`}>
                          {status}
                        </span>
                      </div>
                      <h4 className="text-text-primary font-bold text-base mb-2">{name}</h4>
                      <p className="text-text-secondary text-xs leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ========================================================
                SUBSECTION E: CASE STUDIES (Comprehensive 11-Step Layout)
            ======================================================== */}
            <motion.div variants={fadeUp}>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-black text-text-primary">Design Case Study Presentation</h3>
                  <p className="text-xs text-text-muted mt-1">
                    An in-depth 11-step design thinking breakdown showing how user research, wireframes, and design systems converge.
                  </p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full border border-yellow-400/30 text-yellow-400 bg-yellow-400/10 font-semibold">
                  Conceptual Showcase
                </span>
              </div>

              {/* Case Study Presentation Viewer */}
              <div className="glass-card rounded-3xl border border-purple-primary/20 p-6 md:p-8 bg-bg-card/90 shadow-2xl">
                {/* Header info */}
                <div className="pb-6 mb-6 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-purple-light uppercase tracking-wider block mb-1">
                      {caseStudyData.status}
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-black text-text-primary mb-2">
                      {caseStudyData.title}
                    </h4>
                    <p className="text-text-secondary text-sm max-w-3xl leading-relaxed">
                      {caseStudyData.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 self-start lg:self-auto">
                    <span className="text-xs text-text-muted font-mono">Stage:</span>
                    <span className="text-xs font-bold text-purple-light px-2.5 py-1 rounded-md bg-purple-primary/10 border border-purple-primary/25">
                      {selectedCaseStep + 1} of {caseStudyData.sections.length}
                    </span>
                  </div>
                </div>

                {/* Horizontal Step Navigation Pill Bar */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 scrollbar-thin">
                  {caseStudyData.sections.map((sec, idx) => {
                    const isSelected = selectedCaseStep === idx;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => setSelectedCaseStep(idx)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                          isSelected
                            ? 'bg-purple-primary text-white shadow-lg shadow-purple-primary/25'
                            : 'glass border border-white/8 text-text-muted hover:text-text-primary hover:border-white/20'
                        }`}
                      >
                        <span className="font-mono text-[10px] opacity-75">{sec.number}</span>
                        <span>{sec.title}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Step Presentation Canvas */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedCaseStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 sm:p-8 rounded-2xl bg-bg-main/70 border border-white/8 space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-primary/15 border border-purple-primary/30 flex items-center justify-center">
                        {(() => {
                          const CurrentIcon = caseStudyData.sections[selectedCaseStep].icon;
                          return <CurrentIcon size={20} className="text-purple-light" />;
                        })()}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-purple-light uppercase tracking-widest">
                          Phase {caseStudyData.sections[selectedCaseStep].number}
                        </span>
                        <h5 className="text-lg sm:text-xl font-bold text-text-primary">
                          {caseStudyData.sections[selectedCaseStep].title}
                        </h5>
                      </div>
                    </div>

                    <div className="pt-2 text-text-secondary text-sm leading-relaxed whitespace-pre-line">
                      {caseStudyData.sections[selectedCaseStep].content}
                    </div>

                    {/* Step Navigation Controls */}
                    <div className="pt-6 border-t border-white/8 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedCaseStep((prev) => Math.max(0, prev - 1))}
                        disabled={selectedCaseStep === 0}
                        className="px-4 py-2 rounded-xl glass border border-white/10 text-xs font-semibold text-text-secondary disabled:opacity-30 disabled:cursor-not-allowed hover:text-text-primary transition-colors"
                      >
                        Previous Phase
                      </button>

                      <button
                        onClick={() =>
                          setSelectedCaseStep((prev) =>
                            Math.min(caseStudyData.sections.length - 1, prev + 1)
                          )
                        }
                        disabled={selectedCaseStep === caseStudyData.sections.length - 1}
                        className="px-5 py-2 rounded-xl bg-purple-primary text-white text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-purple-dark transition-colors flex items-center gap-1.5"
                      >
                        <span>Next Phase</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Footer Disclaimer */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-text-muted">
                  <span>Transparent presentation: No fabricated research data or fake usability metrics.</span>
                  <span className="text-purple-light font-mono">11-Step UX Architecture</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Inspect Concept Lightbox Modal */}
      <AnimatePresence>
        {inspectConcept && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setInspectConcept(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-white/15 p-6 sm:p-8 bg-bg-card shadow-2xl"
            >
              <button
                onClick={() => setInspectConcept(null)}
                className="absolute top-6 right-6 p-2 rounded-xl glass border border-white/10 text-text-secondary hover:text-text-primary transition-colors"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-purple-light uppercase tracking-wider">{inspectConcept.category}</span>
                <span className="text-xs text-text-muted">· Conceptual Preview</span>
              </div>
              <h3 className="text-2xl font-black text-text-primary mb-4">{inspectConcept.title}</h3>

              <div className="p-4 rounded-2xl bg-bg-main border border-white/10 mb-6 flex justify-center">
                {inspectConcept.deviceType === 'desktop' ? (
                  <div className="w-full">
                    <DesktopDeviceFrame concept={inspectConcept} />
                  </div>
                ) : (
                  <div className="w-full flex justify-center">
                    <MobileDeviceFrame concept={inspectConcept} />
                  </div>
                )}
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-6">{inspectConcept.desc}</p>

              <div className="flex justify-end">
                <button
                  onClick={() => setInspectConcept(null)}
                  className="px-6 py-2.5 rounded-xl bg-purple-primary text-white text-xs font-semibold hover:bg-purple-dark transition-colors"
                >
                  Close Inspection
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
