import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2, Server, Database, Shield, Wrench, Palette, Monitor, BookOpen
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Monitor,
    color: 'text-blue-electric',
    bg: 'bg-blue-electric/10',
    border: 'border-blue-electric/25',
    glow: 'hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Web Design'],
    badge: 'Proficient',
    badgeColor: 'text-blue-electric bg-blue-electric/10 border-blue-electric/25',
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/25',
    glow: 'hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'API Integration', 'Middleware'],
    badge: 'Proficient',
    badgeColor: 'text-green-400 bg-green-400/10 border-green-400/25',
  },
  {
    title: 'Database',
    icon: Database,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/25',
    glow: 'hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]',
    skills: ['MongoDB', 'MongoDB Atlas', 'Mongoose'],
    badge: 'Proficient',
    badgeColor: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/25',
  },
  {
    title: 'Security',
    icon: Shield,
    color: 'text-red-400',
    bg: 'bg-red-400/10',
    border: 'border-red-400/25',
    glow: 'hover:shadow-[0_0_30px_rgba(248,113,113,0.15)]',
    skills: ['JWT Authentication', 'Role-Based Access Control', 'bcrypt Password Hashing', 'Protected Routes'],
    badge: 'Applied',
    badgeColor: 'text-red-400 bg-red-400/10 border-red-400/25',
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/25',
    glow: 'hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]',
    skills: ['Git', 'GitHub', 'Debugging', 'VS Code'],
    badge: 'Regular Use',
    badgeColor: 'text-orange-400 bg-orange-400/10 border-orange-400/25',
  },
  {
    title: 'Design & UX Learning',
    icon: BookOpen,
    color: 'text-purple-light',
    bg: 'bg-purple-primary/10',
    border: 'border-purple-primary/25',
    glow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
    skills: ['UI Design', 'UX Fundamentals', 'Wireframing', 'Prototyping', 'Typography', 'Color Theory', 'User-Centered Design', 'Responsive Design Principles'],
    badge: 'Learning',
    badgeColor: 'text-purple-light bg-purple-primary/10 border-purple-primary/25',
    note: true,
  },
];

function SkillCard({ category, index }) {
  const Icon = category.icon;

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.02, translateY: -4 }}
      className={`glass-card rounded-2xl p-6 border ${category.border} transition-all duration-300 ${category.glow}`}
    >
      {/* Card Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl ${category.bg} border ${category.border} flex items-center justify-center`}>
            <Icon size={18} className={category.color} />
          </div>
          <h3 className="text-text-primary font-bold text-base">{category.title}</h3>
        </div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${category.badgeColor}`}>
          {category.badge}
        </span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className={`text-xs px-3 py-1.5 rounded-lg border bg-bg-main/60 ${category.border} ${category.color} font-medium transition-all duration-200 hover:${category.bg}`}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Note for learning */}
      {category.note && (
        <p className="mt-4 text-xs text-text-muted italic border-t border-white/8 pt-3">
          * Design skills are currently being actively learned and developed.
        </p>
      )}
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section-padding bg-bg-main relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 left-0 w-72 h-72 rounded-full blur-3xl bg-purple-primary/5 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl bg-blue-electric/5 pointer-events-none" />

      <div className="container-custom" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-purple-primary" />
            <span className="text-purple-light text-sm font-semibold tracking-widest uppercase">Skills & Expertise</span>
          </motion.div>

          {/* Heading */}
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-4 text-text-primary">
            Technical <span className="text-gradient-purple">Toolkit</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-text-secondary max-w-2xl mb-12 text-lg">
            A curated overview of my technical skills across the full stack — from frontend interfaces to backend systems and database management.
          </motion.p>

          {/* Cards grid */}
          <motion.div variants={stagger} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <SkillCard key={cat.title} category={cat} index={i} />
            ))}
          </motion.div>

          {/* Bottom note */}
          <motion.div variants={fadeUp} className="mt-10 glass-card rounded-2xl p-5 border border-white/8 flex items-start gap-3">
            <Palette size={20} className="text-purple-light flex-shrink-0 mt-0.5" />
            <p className="text-text-secondary text-sm leading-relaxed">
              <span className="text-text-primary font-semibold">Design Journey:</span> I'm actively building my UI/UX design expertise alongside my development work. I believe the intersection of design and engineering creates the best digital products.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

