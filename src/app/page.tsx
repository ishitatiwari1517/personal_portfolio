import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem 1.5rem',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.85rem',
      }}>
        <p>
          Designed &amp; Built by{' '}
          <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Ishita Tiwari</span>
          {' '}· Polaris School of Technology
        </p>
        <p style={{ marginTop: '0.3rem', fontSize: '0.78rem', opacity: 0.6 }}>
          © {new Date().getFullYear()} All rights reserved
        </p>
      </footer>
    </main>
  );
}
