'use client';

import { motion, Variants } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: 'EnergyLens: Household Energy Insights',
    description:
      'SaaS product providing households with actionable energy consumption insights and data visualisation. Built end-to-end with React frontend, Node/Express backend, and MongoDB.',
    tech: ['React.js', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB'],
    live: 'https://energy-lens-snowy.vercel.app/',
    github: 'https://github.com/shteypandey28-hue/EnergyLens--Household-Electricity-Insights',
    color: '#8b5cf6',
  },
  {
    title: 'CodeLens – AI-Powered Code Analyzer',
    description:
      "An AI-powered tool that analyzes code to detect bugs, suggest improvements, and generate optimized fixes using Groq's ultra-fast LLM inference. Delivers real-time code insights through a clean UI.",
    tech: ['React.js', 'Tailwind', 'Node.js', 'Express.js', 'Groq API'],
    live: 'https://code-checker-mocha.vercel.app/',
    github: 'https://github.com/ishitatiwari1517/code_checker',
    color: '#f472b6',
  },
  {
    title: 'AI Workout & Diet Planner',
    description:
      'Full-stack web app that generates personalized workout routines and diet plans based on user goals, fitness level, and dietary preferences using AI.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    live: '',
    github: 'https://github.com/ishitatiwari1517/ai_diet_planner',
    color: '#22d3ee',
  },
  {
    title: 'Task CLI + Django Backend',
    description:
      'A full-stack application featuring both a web dashboard and a CLI for CRUD operations. Allows creating, updating, deleting tasks with alerts and timers.',
    tech: ['Python', 'Django', 'CLI', 'Web App'],
    live: 'https://taskcli-app.onrender.com/',
    github: 'https://github.com/ishitatiwari1517/ojt_project_repo',
    color: '#4ade80',
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '3.5rem' }}
      >
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)',
          borderRadius: '100px', padding: '0.3rem 1rem',
          color: 'var(--accent2)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1rem',
        }}>
          <Code2 size={13} /> Selected Work
        </div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-1px', color: 'var(--text)' }}>
          Projects that <span className="grad-text">deliver results</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem', maxWidth: '480px', margin: '0.75rem auto 0' }}>
          Real problems. Real solutions. Every project is built to convert and perform.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
          gap: '1.5rem',
        }}
      >
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={card}
            whileHover={{ y: -6, boxShadow: `0 16px 40px ${p.color}22` }}
            className="glass-card"
            style={{ borderRadius: '16px', overflow: 'hidden', cursor: 'default', transition: 'box-shadow 0.3s' }}
          >
            {/* Color bar */}
            <div style={{
              height: 4,
              background: `linear-gradient(90deg, ${p.color}, transparent)`,
            }} />

            <div style={{ padding: '1.6rem' }}>
              {/* Title */}
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.6rem' }}>
                {p.title}
              </h3>

              {/* Description */}
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
                {p.description}
              </p>

              {/* Tech stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.4rem' }}>
                {p.tech.map(t => (
                  <span key={t} style={{
                    fontSize: '0.75rem', fontWeight: 600,
                    padding: '0.25rem 0.7rem', borderRadius: '100px',
                    background: `${p.color}18`, color: p.color,
                    border: `1px solid ${p.color}33`,
                  }}>{t}</span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {p.live && (
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      background: `linear-gradient(135deg, var(--accent), var(--accent3))`,
                      color: '#fff', padding: '0.5rem 1rem', borderRadius: '8px',
                      textDecoration: 'none', fontSize: '0.82rem', fontWeight: 600,
                    }}
                  >
                    <ExternalLink size={13} /> Live Preview
                  </motion.a>
                )}
                <motion.a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    background: 'var(--bg-card2)', border: '1px solid var(--border)',
                    color: 'var(--text-muted)', padding: '0.5rem 1rem', borderRadius: '8px',
                    textDecoration: 'none', fontSize: '0.82rem', fontWeight: 600,
                  }}
                >
                  <GithubIcon size={13} /> GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
