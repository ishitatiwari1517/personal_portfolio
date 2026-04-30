'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.3s ease',
          background: scrolled
            ? 'rgba(13,13,20,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        }}
      >
        <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={e => { e.preventDefault(); handleNav('#hero'); }}
            whileHover={{ scale: 1.04 }}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
          >
            <div style={{
              width: 36, height: 36, borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--accent), var(--accent3))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: '1rem', color: '#fff', letterSpacing: '-1px'
            }}>IT</div>
            <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)' }}>Ishita Tiwari</span>
          </motion.a>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hide-mobile">
            {links.map(link => (
              <motion.button
                key={link.href}
                onClick={() => handleNav(link.href)}
                whileHover={{ color: 'var(--accent)' }}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500,
                  fontFamily: 'inherit', transition: 'color 0.2s',
                }}
              >
                {link.label}
              </motion.button>
            ))}

            {/* Theme toggle */}
            <motion.button
              onClick={toggle}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: '50%', width: 38, height: 38, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent)', transition: 'all 0.2s',
              }}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            <motion.a
              href="#contact"
              onClick={e => { e.preventDefault(); handleNav('#contact'); }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px var(--glow)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'linear-gradient(135deg, var(--accent), var(--accent3))',
                color: '#fff', padding: '0.5rem 1.3rem', borderRadius: '8px',
                textDecoration: 'none', fontWeight: 600, fontSize: '0.88rem',
                display: 'inline-block', transition: 'all 0.2s',
              }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="show-mobile">
            <motion.button
              onClick={toggle}
              whileHover={{ scale: 1.1 }}
              style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: '50%', width: 36, height: 36, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent)',
              }}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </motion.button>
            <motion.button
              onClick={() => setMenuOpen(v => !v)}
              whileHover={{ scale: 1.05 }}
              style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: '8px', width: 36, height: 36, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text)',
              }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', top: '68px', left: 0, right: 0, zIndex: 99,
              background: 'var(--bg-card)', borderBottom: '1px solid var(--border)',
              padding: '1rem 1.5rem',
              backdropFilter: 'blur(20px)',
            }}
          >
            {links.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 500,
                  fontFamily: 'inherit', padding: '0.75rem 0',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) { .hide-mobile { display: none !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
      `}</style>
    </>
  );
}
