'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Code2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function Hero() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="hero-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '8rem 1.5rem 4rem',
      }}
    >
      {/* Floating orbs */}
      <div style={{
        position: 'absolute', top: '20%', left: '8%',
        width: 12, height: 12, borderRadius: '50%',
        background: 'var(--accent)', opacity: 0.7,
        animation: 'float 3s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', top: '35%', right: '12%',
        width: 8, height: 8, borderRadius: '50%',
        background: 'var(--accent3)', opacity: 0.6,
        animation: 'float 4s ease-in-out infinite 1s',
      }} />
      <div style={{
        position: 'absolute', bottom: '30%', left: '18%',
        width: 6, height: 6, borderRadius: '50%',
        background: 'var(--accent2)', opacity: 0.5,
        animation: 'float 5s ease-in-out infinite 0.5s',
      }} />

      <div style={{ maxWidth: '820px', width: '100%', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.3)',
            borderRadius: '100px', padding: '0.35rem 1rem',
            color: 'var(--accent2)', fontSize: '0.82rem', fontWeight: 600,
            marginBottom: '1.5rem',
          }}>
            <Sparkles size={13} />
            Available for freelance work
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#4ade80', display: 'inline-block',
              boxShadow: '0 0 8px #4ade80',
            }} />
          </div>
        </motion.div>

        {/* Name */}
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 500, marginBottom: '0.75rem', letterSpacing: '0.05em' }}
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-2px' }}
        >
          <span style={{ color: 'var(--text)' }}>Ishita</span>{' '}
          <span className="grad-text">Tiwari</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            fontWeight: 600,
            color: 'var(--text)',
            marginBottom: '1.25rem',
            letterSpacing: '-0.5px',
          }}
        >
          Full Stack Developer building{' '}
          <span className="grad-text">high-converting</span> websites
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{
            fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.8,
            maxWidth: '580px', margin: '0 auto 2rem',
          }}
        >
          I am a 1st year student at Polaris School of Technology. I am trying to build projects that actually solve real-world problems.
        </motion.p>

        {/* Pill tags */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}
        >
          {['C', 'Python', 'JavaScript', 'React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Open Source', "GSoC '26"].map(tag => (
            <span key={tag} style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: '100px', padding: '0.3rem 0.9rem',
              color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 500,
            }}>{tag}</span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.button
            onClick={() => scrollTo('#projects')}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--glow)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent3) 100%)',
              color: '#fff', padding: '0.85rem 2rem', borderRadius: '10px',
              border: 'none', fontFamily: 'inherit', fontWeight: 700,
              fontSize: '0.97rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
            }}
          >
            <Code2 size={16} /> View Work
          </motion.button>


        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => scrollTo('#about')}
          style={{
            marginTop: '4rem', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
            color: 'var(--text-muted)', fontSize: '0.78rem',
          }}
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            <ArrowDown size={18} />
          </motion.div>
          scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
