'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, MapPin } from 'lucide-react';

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
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  const inputStyle = {
    width: '100%', padding: '0.85rem 1rem', borderRadius: '10px',
    background: 'var(--bg-card2)', border: '1px solid var(--border)',
    color: 'var(--text)', fontSize: '0.93rem', fontFamily: 'inherit',
    outline: 'none', transition: 'border-color 0.2s',
    boxSizing: 'border-box' as const,
  };

  return (
    <section id="contact" className="section" style={{
      background: 'linear-gradient(180deg, transparent 0%, rgba(139,92,246,0.05) 50%, transparent 100%)',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
            <Mail size={13} /> Get In Touch
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-1px', color: 'var(--text)' }}>
            Let&apos;s build something <span className="grad-text">amazing</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem', maxWidth: '460px', margin: '0.75rem auto 0' }}>
            Have a project in mind? I&apos;d love to hear about it. Drop me a message and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: '2rem',
        }}>
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div className="glass-card" style={{
              borderRadius: '14px', padding: '1.4rem',
              display: 'flex', alignItems: 'center', gap: '1.2rem',
            }}>
              <div style={{
                width: 70, height: 70, borderRadius: '50%', overflow: 'hidden',
                border: '2px solid rgba(139,92,246,0.3)', flexShrink: 0,
              }}>
                <img src="/profile.jpg" alt="Ishita Tiwari" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.2rem' }}>Ishita Tiwari</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Full Stack Developer • India</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.4rem' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 8px #4ade80' }} />
                  <span style={{ fontSize: '0.75rem', color: '#4ade80', fontWeight: 600 }}>Available for work</span>
                </div>
              </div>
            </div>

            <motion.a
              href="mailto:ishitatiwari553@gmail.com"
              whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(139,92,246,0.2)' }}
              className="glass-card"
              style={{
                borderRadius: '14px', padding: '1.4rem',
                textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem',
                transition: 'box-shadow 0.3s',
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: '12px', flexShrink: 0,
                background: 'rgba(139,92,246,0.15)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: 'var(--accent)',
              }}>
                <Mail size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Email</div>
                <div style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.92rem' }}>ishitatiwari553@gmail.com</div>
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/918527647311"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(74,222,128,0.2)' }}
              className="glass-card"
              style={{
                borderRadius: '14px', padding: '1.4rem',
                textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem',
                transition: 'box-shadow 0.3s',
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: '12px', flexShrink: 0,
                background: 'rgba(74,222,128,0.12)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: '#4ade80',
              }}>
                <MessageCircle size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>WhatsApp</div>
                <div style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.92rem' }}>Chat with me</div>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/ishitatiwari1517"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(139,92,246,0.2)' }}
              className="glass-card"
              style={{
                borderRadius: '14px', padding: '1.4rem',
                textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem',
                transition: 'box-shadow 0.3s',
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: '12px', flexShrink: 0,
                background: 'rgba(139,92,246,0.15)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: 'var(--accent)',
              }}>
                <GithubIcon size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>GitHub</div>
                <div style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.92rem' }}>@ishitatiwari1517</div>
              </div>
            </motion.a>

            <div className="glass-card" style={{ borderRadius: '14px', padding: '1.4rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: 44, height: 44, borderRadius: '12px', flexShrink: 0,
                background: 'rgba(244,114,182,0.12)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: '#f472b6',
              }}>
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Location</div>
                <div style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.92rem' }}>India • Remote Friendly</div>
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass-card" style={{
              borderRadius: '14px', padding: '1.4rem',
              background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80', display: 'inline-block' }} />
                <span style={{ fontWeight: 700, color: '#4ade80', fontSize: '0.88rem' }}>Available for Projects</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.83rem', lineHeight: 1.7 }}>
                Currently taking on freelance projects. Response time: within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card"
            style={{ borderRadius: '16px', padding: '2rem' }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, boxShadow: '0 0 24px var(--glow)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: sent ? '#4ade80' : 'linear-gradient(135deg, var(--accent), var(--accent3))',
                  color: '#fff', padding: '0.9rem', borderRadius: '10px',
                  border: 'none', fontFamily: 'inherit', fontWeight: 700,
                  fontSize: '0.97rem', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  transition: 'background 0.3s',
                }}
              >
                <Send size={16} />
                {sent ? 'Message Sent! ✓' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
