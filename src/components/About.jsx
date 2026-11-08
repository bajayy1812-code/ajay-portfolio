import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Terminal, Award, Compass, Layers, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stats = [
  { value: '100+', label: 'DSA Problems Solved', subtext: 'Algorithmic problem solving on HackerRank' },
  { value: '2', label: 'Featured Projects', subtext: 'Production MERN web applications' },
  { value: '2025', label: 'MERN Internship', subtext: 'Hands-on training at Frenzo Academy' },
  { value: '7.94', label: 'CGPA', subtext: 'B.E. ECE at Sri Shakthi Inst of Eng & Tech' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="about" className="section-padding bg-[#241820]/40 relative border-t border-[#49333D]">
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
              <span className="text-xs font-mono uppercase tracking-widest text-[#E87991] font-bold">About Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FFF7F7]">
              A little <span className="editorial-serif font-medium text-[#E87991]">about me.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#B9A6AA] max-w-2xl">
              An authentic overview of my development background, internship experience, and engineering focus.
            </p>
          </motion.div>

          {/* 4 Metric Information Cards */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="burgundy-card p-5 border border-[#49333D] hover:border-[#E87991]/50 transition-all duration-200"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#E87991] font-mono mb-1">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#FFF7F7] mb-0.5">
                  {item.label}
                </div>
                <div className="text-[11px] text-[#B9A6AA]">
                  {item.subtext}
                </div>
              </div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Narrative Column */}
            <motion.div variants={fadeUp} className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#B9A6AA] leading-relaxed">
              <div className="burgundy-card p-6 sm:p-7">
                <h3 className="text-base font-bold text-[#FFF7F7] mb-3 flex items-center gap-2">
                  <Terminal size={17} className="text-[#E87991]" />
                  Full Stack Background & Philosophy
                </h3>
                <p className="mb-4">
                  I am an aspiring <span className="text-[#FFF7F7] font-semibold">Full Stack Developer</span> with a strong foundation in MERN stack development and modern web technologies. As a final-year <span className="text-[#FFF7F7] font-semibold">Electronics and Communication Engineering</span> student at Sri Shakthi Institute of Engineering and Technology, I combine analytical thinking with practical software implementation.
                </p>
                <p>
                  Through my internship at <span className="text-[#FFF7F7] font-semibold">Frenzo Academy</span> and hands-on project implementations, I have engineered full-stack web applications from concept to deployment. I specialize in building responsive React frontends, robust Node.js/Express REST APIs with secure JWT authentication and role-based access control, and modeled MongoDB databases. I focus on clean code principles, test automation, and building intuitive user experiences.
                </p>
              </div>

              {/* Career Objective & Technical Focus */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="burgundy-card p-5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#E87991] mb-2 flex items-center gap-1.5 font-bold">
                    <Compass size={14} /> Career Objective
                  </h4>
                  <p className="text-xs text-[#B9A6AA] leading-relaxed">
                    Seeking full-time roles or internships as a Full Stack or Frontend Developer in a product-driven team to contribute to scalable features and continuous learning.
                  </p>
                </div>

                <div className="burgundy-card p-5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#FFF7F7] mb-2 flex items-center gap-1.5 font-bold">
                    <Layers size={14} className="text-[#E87991]" /> Development Focus
                  </h4>
                  <p className="text-xs text-[#B9A6AA] leading-relaxed">
                    Specialized in MERN stack architecture, state management, REST API design, database schemas, Playwright testing, and algorithmic problem solving.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Educational Details & Competencies Column */}
            <motion.div variants={fadeUp} className="lg:col-span-5 space-y-5">
              <div className="burgundy-card p-6 sm:p-7 relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#49333D]">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#241820] text-[#E87991] border border-[#49333D] font-bold">
                    Degree Overview
                  </span>
                  <span className="text-xs font-mono text-[#B9A6AA]">2023 – 2027</span>
                </div>

                <h4 className="text-base font-bold text-[#FFF7F7] mb-1">
                  Bachelor of Engineering (B.E.)
                </h4>
                <p className="text-xs text-[#D6A6A0] font-semibold mb-1">
                  Electronics and Communication Engineering
                </p>
                <p className="text-xs text-[#B9A6AA] mb-4">
                  Sri Shakthi Institute of Engineering and Technology, Coimbatore
                </p>

                <div className="p-3 rounded-lg bg-[#241820] border border-[#49333D] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#B9A6AA]">Cumulative Grade:</span>
                  <span className="text-sm font-bold font-mono text-[#E87991]">CGPA 7.94 / 10.0</span>
                </div>
              </div>

              {/* Verified Competencies */}
              <div className="burgundy-card p-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#FFF7F7] font-bold mb-3 flex items-center gap-1.5">
                  <Award size={14} className="text-[#E87991]" /> Core Engineering Strengths
                </h4>
                <div className="space-y-2.5 text-xs text-[#B9A6AA]">
                  {[
                    'Full-stack MERN application engineering',
                    'RESTful API routing with Node.js & Express',
                    'Stateless JWT authentication & bcrypt security',
                    'Database schema modeling with Mongoose & MongoDB',
                    '100+ Data Structures & Algorithms problems solved',
                    'End-to-end automated testing with Playwright',
                  ].map((strength, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-[#E87991] flex-shrink-0 mt-0.5" />
                      <span className="text-[#FFF7F7]">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
