import { useState, useEffect } from 'react';

const ROLES = ['Full Stack Developer', 'Database Engineer', 'React Specialist', 'Problem Solver'];

const Hero = () => {
  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const role = ROLES[roleIdx];
    if (typing) {
      if (charIdx < role.length) {
        const t = setTimeout(() => { setDisplayed(role.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }, 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => { setDisplayed(role.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 30);
        return () => clearTimeout(t);
      } else {
        setRoleIdx(i => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [charIdx, typing, roleIdx]);

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = '/Kevin Mongare -Junior Database Engineer Intern (1).pdf';
    a.download = 'Kevin-Mongare-CV.pdf';
    a.click();
  };

  return (
    <section
      id="home"
      className="mesh-bg noise"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        paddingLeft: 'clamp(24px, 8vw, 120px)', paddingRight: 'clamp(24px, 6vw, 80px)',
        paddingTop: 80, paddingBottom: 60,
      }}
    >
      <div style={{ maxWidth: 680 }}>
        {/* Greeting */}
        <p className="fade-up section-label delay-1" style={{ marginBottom: 20 }}>
          Hello, World — I'm
        </p>

        {/* Name */}
        <h1
          className="fade-up delay-2 font-display"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            color: 'var(--text-bright)',
            marginBottom: 16,
            letterSpacing: '-0.02em',
          }}
        >
          Kevin Mongare
        </h1>

        {/* Typed role */}
        <h2
          className="fade-up delay-3 font-display"
          style={{
            fontSize: 'clamp(1.3rem, 3.5vw, 2.2rem)',
            fontWeight: 600,
            color: 'var(--accent)',
            marginBottom: 28,
            minHeight: '2.6rem',
          }}
        >
          {displayed}<span className="cursor" />
        </h2>

        {/* Bio */}
        <p
          className="fade-up delay-4"
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'var(--text)',
            maxWidth: 520,
            marginBottom: 40,
          }}
        >
          I build scalable, accessible digital experiences — from pixel-perfect UIs
          to data-driven backends. Based in Nairobi, open to remote opportunities worldwide.
        </p>

        {/* CTAs */}
        <div className="fade-up delay-5" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <button className="btn btn-outline" onClick={handleDownload}>Download CV</button>
        </div>

        {/* Status badge */}
        <div
          className="fade-up delay-5"
          style={{
            marginTop: 48,
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: 'DM Mono, monospace', fontSize: '0.72rem',
            color: 'var(--text-muted)', letterSpacing: '0.08em',
          }}
        >
          <span style={{
            width: 8, height: 8, borderRadius: '50%', background: '#4ade80',
            boxShadow: '0 0 8px #4ade80',
            animation: 'blink 2s ease-in-out infinite',
          }} />
          Available for work · Nairobi, Kenya
        </div>
      </div>
    </section>
  );
};

export default Hero;
