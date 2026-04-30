'use client';

import { motion } from 'framer-motion';
import { Layout, Database, Bot, Users } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Frontend Engineering',
    desc: 'Building responsive, visually stunning user interfaces. Focused on clean UI, smooth animations, and mobile-first experiences.',
    color: '#8b5cf6',
    features: ['React.js & Next.js', 'Tailwind CSS', 'Responsive Design', 'Interactive UI'],
  },
  {
    icon: Database,
    title: 'Full-Stack Development',
    desc: 'End-to-end web applications with robust backends and database management. From conceptualization to deployment.',
    color: '#f472b6',
    features: ['Node.js & Express', 'MongoDB & SQL', 'RESTful APIs', 'Authentication'],
  },
  {
    icon: Bot,
    title: 'AI & Data Integration',
    desc: 'Integrating AI models and utilizing data to build smart applications, like AI-powered analyzers and planners.',
    color: '#22d3ee',
    features: ['Machine Learning', 'Groq API Integration', 'Pandas & NumPy', 'Data Visualization'],
  },
  {
    icon: Users,
    title: 'Community & Leadership',
    desc: 'Organizing technical events, hackathons, and driving community engagement through social media and content creation.',
    color: '#4ade80',
    features: ['Event Management', 'Hackathon Organizer', 'Content Creation', 'Social Media Team'],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section"
      style={{
        background: 'linear-gradient(180deg, transparent 0%, rgba(139,92,246,0.04) 50%, transparent 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(244,114,182,0.1)', border: '1px solid rgba(244,114,182,0.25)',
            borderRadius: '100px', padding: '0.3rem 1rem',
            color: '#f472b6', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1rem',
          }}>
            What I do
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-1px', color: 'var(--text)' }}>
            Areas of <span className="grad-text">Expertise</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem', maxWidth: '480px', margin: '0.75rem auto 0' }}>
            From full-stack development to community building, here is what I bring to the table.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -5, boxShadow: `0 12px 32px ${s.color}22` }}
              className="glass-card"
              style={{ borderRadius: '16px', padding: '1.8rem', transition: 'box-shadow 0.3s' }}
            >
              {/* Icon */}
              <div style={{
                width: 48, height: 48, borderRadius: '12px',
                background: `${s.color}18`, border: `1px solid ${s.color}33`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.2rem', color: s.color,
              }}>
                <s.icon size={22} />
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.6rem' }}>
                {s.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.87rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
                {s.desc}
              </p>

              {/* Feature list */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {s.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
