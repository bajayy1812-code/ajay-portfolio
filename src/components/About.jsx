import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code2, Palette, Target, Cpu, Globe } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const interests = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    desc: 'Building end-to-end web applications using the MERN stack — from UI to APIs and databases.',
    color: 'text-blue-electric',
    bg: 'bg-blue-electric/10',
    border: 'border-blue-electric/20',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Exploring design systems, user-centered thinking, and creating intuitive digital interfaces.',
    color: 'text-purple-light',
    bg: 'bg-purple-primary/10',
    border: 'border-purple-primary/20',
  },
  {
    icon: Globe,
    title: 'Web Technologies',
    desc: 'Passionate about modern frontend frameworks, responsive design, and performance optimization.',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
  },
  {
    icon: Target,
    title: 'Professional Goals',
    desc: 'Seeking opportunities to contribute to impactful products as a developer and designer.',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/20',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-padding bg-bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-purple-primary/5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl bg-blue-electric/5 pointer-events-none" />

      <div className="container-custom" ref={ref}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-purple-primary" />
            <span className="text-purple-light text-sm font-semibold tracking-widest uppercase">About Me</span>
          </motion.div>

          {/* Heading */}
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-6 text-text-primary leading-tight">
            A Little <span className="text-gradient-purple">About Me</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start mt-12">
            {/* Left — description */}
            <motion.div variants={stagger}>
              <motion.p variants={fadeUp} className="text-text-secondary text-lg leading-relaxed mb-6">
                I'm a <span className="text-text-primary font-semibold">final-year Electronics and Communication Engineering student</span> with a strong interest in UI/UX design and full stack development.
              </motion.p>
              <motion.p variants={fadeUp} className="text-text-secondary leading-relaxed mb-6">
                My development journey has helped me understand how web applications work — from designing responsive interfaces to building secure backend systems. I enjoy exploring new technologies, solving problems, and creating digital experiences that are both <span className="text-purple-light">functional and visually engaging</span>.
              </motion.p>

              {/* Education Card */}
              <motion.div
                variants={fadeUp}
                whileHover={{ scale: 1.02, boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}
                className="glass-card rounded-2xl p-6 border border-white/8 mt-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-primary/15 border border-purple-primary/30 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={22} className="text-purple-light" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-1">Education</p>
                    <h4 className="text-text-primary font-bold text-base mb-0.5">B.E. Electronics & Communication Engineering</h4>
                    <p className="text-text-secondary text-sm mb-1">Sri Shakthi Institute of Engineering and Technology, Coimbatore</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs bg-purple-primary/15 text-purple-light px-3 py-1 rounded-full border border-purple-primary/20">2023 – 2027</span>
                      <span className="text-xs bg-green-400/10 text-green-400 px-3 py-1 rounded-full border border-green-400/20">CGPA: 7.94</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick stats */}
              <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { value: '1+', label: 'Internship' },
                  { value: '2+', label: 'Projects' },
                  { value: '100+', label: 'DSA Problems' },
                ].map(({ value, label }) => (
                  <div key={label} className="glass-card rounded-xl p-4 text-center border border-white/8">
                    <div className="text-2xl font-black text-gradient-purple mb-1">{value}</div>
                    <div className="text-xs text-text-muted font-medium">{label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — interest cards */}
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map(({ icon: Icon, title, desc, color, bg, border }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={{ scale: 1.03, translateY: -4 }}
                  className={`glass-card rounded-2xl p-5 border ${border} transition-all duration-300`}
                >
                  <div className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center mb-4`}>
                    <Icon size={18} className={color} />
                  </div>
                  <h4 className="text-text-primary font-bold text-sm mb-2">{title}</h4>
                  <p className="text-text-secondary text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

