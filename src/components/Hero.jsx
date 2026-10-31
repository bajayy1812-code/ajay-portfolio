import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ArrowDown, Mail, Sparkles, Code2, Palette } from 'lucide-react';

// SVG social icons (lucide-react v0.x doesn't include brand icons)
const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FloatingOrb = ({ style, delay = 0 }) => (
  <motion.div
    animate={{ y: [0, -30, 0], scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
    transition={{ duration: 6 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    className="absolute rounded-full blur-3xl pointer-events-none"
    style={style}
  />
);

const GeometricShape = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg-main"
    >
      {/* Background Orbs */}
      <FloatingOrb style={{ width: 500, height: 500, background: 'rgba(139,92,246,0.12)', top: '-10%', left: '-5%' }} delay={0} />
      <FloatingOrb style={{ width: 400, height: 400, background: 'rgba(56,189,248,0.1)', bottom: '5%', right: '-5%' }} delay={2} />
      <FloatingOrb style={{ width: 300, height: 300, background: 'rgba(192,132,252,0.08)', top: '60%', left: '40%' }} delay={4} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Geometric decoratives */}
      <GeometricShape
        className="absolute top-24 right-16 w-32 h-32 rounded-2xl border border-purple-primary/20 rotate-12 hidden lg:block"
        delay={0.8}
      >
        <div className="absolute inset-0 rounded-2xl bg-purple-primary/5" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-purple-primary"
        />
      </GeometricShape>

      <GeometricShape
        className="absolute bottom-32 left-16 w-20 h-20 rounded-xl border border-blue-electric/20 -rotate-6 hidden lg:block"
        delay={1.2}
      >
        <div className="absolute inset-0 rounded-xl bg-blue-electric/5" />
      </GeometricShape>

      <GeometricShape
        className="absolute top-40 left-12 hidden xl:block"
        delay={1.5}
      >
        <div className="w-2 h-2 rounded-full bg-purple-light/60" />
        <div className="w-1 h-1 rounded-full bg-blue-electric/60 mt-6 ml-4" />
        <div className="w-2 h-2 rounded-full bg-purple-primary/40 mt-4 ml-1" />
      </GeometricShape>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container-custom flex flex-col items-center text-center pt-24 pb-16"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border border-purple-primary/30 text-sm font-semibold text-purple-light">
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-400"
            />
            OPEN TO OPPORTUNITIES
            <Sparkles size={14} className="text-purple-light" />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight max-w-5xl mb-6"
        >
          <span className="text-text-primary">Designing</span>{' '}
          <span className="text-gradient-purple">Digital</span>
          <br className="hidden sm:block" />
          <span className="text-text-primary"> Experiences.</span>{' '}
          <span className="text-gradient-blue">Building</span>
          <br className="hidden sm:block" />
          <span className="text-text-primary"> Meaningful Solutions.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-text-secondary max-w-2xl mb-10 leading-relaxed"
        >
          I'm <span className="text-text-primary font-semibold">Ajay</span> — an aspiring UI/UX Designer and Full Stack Developer who loves transforming ideas into intuitive and engaging digital experiences.
        </motion.p>

        {/* Dual Role Pills */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-primary/10 border border-purple-primary/20 text-purple-light text-sm font-medium">
            <Palette size={15} /> UI/UX Designer
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-electric/10 border border-blue-electric/20 text-blue-electric text-sm font-medium">
            <Code2 size={15} /> Full Stack Developer
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <motion.button
            onClick={() => handleScroll('#projects')}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139,92,246,0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-xl bg-purple-primary text-white font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-purple-dark"
          >
            Explore My Work
          </motion.button>
          <motion.button
            onClick={() => {
              window.dispatchEvent(new CustomEvent('open-resume-modal'));
              handleScroll('#resume');
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(56,189,248,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-xl glass border border-white/15 text-text-primary font-semibold text-sm tracking-wide transition-all duration-200 hover:border-blue-electric/40 hover:text-blue-electric"
          >
            View Resume
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          {[
            { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/ajay-b-0b0789328/', label: 'LinkedIn', color: 'hover:text-blue-electric hover:border-blue-electric/40' },
            { icon: GithubIcon, href: 'https://github.com/ajayb1812', label: 'GitHub', color: 'hover:text-purple-light hover:border-purple-light/40' },
            { icon: Mail, href: 'mailto:bajayy1812@gmail.com', label: 'Email', color: 'hover:text-green-400 hover:border-green-400/40' },
          ].map(({ icon: Icon, href, label, color }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
              className={`w-11 h-11 flex items-center justify-center rounded-xl glass border border-white/10 text-text-secondary transition-all duration-200 ${color}`}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => handleScroll('#about')}
      >
        <span className="text-xs font-medium text-text-muted tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-purple-primary" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-main to-transparent pointer-events-none" />
    </section>
  );
}
