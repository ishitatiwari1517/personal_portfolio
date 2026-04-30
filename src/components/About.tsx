'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Rocket, Heart, ExternalLink } from 'lucide-react';

const stats = [
  { label: 'Year of Study', value: '1st' },
  { label: 'Cups of Coffee', value: '∞' },
];

const skills = [
  { name: 'React.js & Frontend', level: 90 },
  { name: 'Node.js & Express.js', level: 85 },
  { name: 'MongoDB & SQL', level: 80 },
  { name: 'Python & Machine Learning', level: 75 },
  { name: 'Pandas & NumPy', level: 75 },
  { name: 'C / Data Structures', level: 80 },
];

const socialLinks = [
  { platform: 'GITHUB', username: 'ishitatiwari1517', url: 'https://github.com/ishitatiwari1517' },
  { platform: 'LINKEDIN', username: 'ishita-tiwari', url: 'https://www.linkedin.com/in/ishita-tiwari-a34600380/' },
  { platform: 'LEETCODE', username: 'ishitatiwari1517', url: 'https://leetcode.com/u/ishitatiwari1517/' },
  { platform: 'CODECHEF', username: 'ishitap25', url: 'https://www.codechef.com/users/ishitap25' },
];

export default function About() {
  return (
    <section id="about" className="section" style={{
      background: 'linear-gradient(180deg, transparent 0%, rgba(139,92,246,0.04) 50%, transparent 100%)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
            <Heart size={12} /> About Me
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-1px', color: 'var(--text)' }}>
            The person behind <span className="grad-text">the code</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
          gap: '2.5rem',
          alignItems: 'start',
        }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
          >
            <div className="glass-card" style={{ borderRadius: '14px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '10px',
                  background: 'rgba(139,92,246,0.15)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', color: 'var(--accent)',
                }}>
                  <GraduationCap size={18} />
                </div>
                <span style={{ fontWeight: 700, color: 'var(--text)', fontSize: '0.95rem' }}>My Story</span>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.93rem' }}>
                Hey! I&apos;m Ishita — a 1st-year B.Tech CSE (AI & ML) student at Polaris School of Technology.
                I have hands-on experience building full-stack web applications using the MERN stack, having independently shipped projects from SaaS platforms to AI-powered tools.
              </p>
            </div>

            <div className="glass-card" style={{ borderRadius: '14px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '10px',
                  background: 'rgba(244,114,182,0.15)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', color: '#f472b6',
                }}>
                  <Rocket size={18} />
                </div>
                <span style={{ fontWeight: 700, color: 'var(--text)', fontSize: '0.95rem' }}>What Drives Me</span>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.93rem' }}>
                I am driven by a passion for solving problems through code. Whether designing responsive React frontends, building RESTful APIs, or integrating Machine Learning models, my goal is to build things that actually matter and deliver clean, functional solutions. I am also an active open-source contributor and a Google Summer of Code (GSoC) 2026 Applicant.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
              {stats.map(s => (
                <div key={s.label} className="glass-card" style={{ borderRadius: '12px', padding: '1rem 0.5rem', textAlign: 'center' }}>
                  <div className="grad-text" style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.2rem' }}>{s.value}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', height: '100%' }}
          >
            {/* Skills */}
            <div
              className="glass-card"
              style={{ borderRadius: '16px', padding: '2rem' }}
            >
              <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)', marginBottom: '1.8rem' }}>
                Skills
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {skills.map((skill) => (
                  <div key={skill.name} style={{
                    background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)',
                    borderRadius: '100px', padding: '0.6rem 1.2rem',
                    color: 'var(--text)', fontSize: '0.9rem', fontWeight: 600,
                  }}>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1px',
              background: 'var(--border)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              overflow: 'hidden',
              flexGrow: 1,
            }}>
              {socialLinks.map(link => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'var(--bg-card)',
                    padding: '1.25rem 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    transition: 'background 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139,92,246,0.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-card)'}
                >
                  <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                    {link.platform}
                  </span>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem', wordBreak: 'break-all' }}>
                    {link.username}
                  </span>
                  <div style={{
                    width: 24, height: 24, borderRadius: '6px',
                    background: 'rgba(255,255,255,0.05)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)',
                    marginTop: 'auto',
                  }}>
                    <ExternalLink size={12} />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
