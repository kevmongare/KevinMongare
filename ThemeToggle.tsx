import { useState, useEffect } from 'react';
import MenuList from '../data/Menu';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Menu = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const socials = [
    { name: 'GitHub',   url: 'https://github.com/kevmongare',                       icon: <FaGithub /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kevin-mongare-58b960200/', icon: <FaLinkedin /> },
    { name: 'Twitter',  url: 'https://x.com/kevin_mong86626',                        icon: <FaTwitter /> },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll('section[id]');
      let cur = 'home';
      sections.forEach(s => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 320) cur = s.id;
      });
      setActiveSection(cur);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside
        className="hidden md:flex fixed left-0 top-0 h-screen w-[80px] z-50 flex-col items-center justify-between py-8"
        style={{
          background: 'var(--bg-2)',
          borderRight: '1px solid var(--border)',
          transition: 'box-shadow 0.3s',
          boxShadow: scrolled ? '4px 0 24px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        {/* Avatar / logo */}
        <button onClick={() => scrollTo('home')} className="focus:outline-none">
          <div style={{
            width: 42, height: 42, borderRadius: '50%',
            border: '2px solid var(--accent)',
            overflow: 'hidden',
            boxShadow: '0 0 14px var(--accent-glow)',
          }}>
            <img src="./kev.png" alt="KM" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%)' }} />
          </div>
        </button>

        {/* Nav items */}
        <nav>
          <ul className="flex flex-col items-center gap-6">
            {MenuList.map((item) => {
              const active = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    title={item.name}
                    style={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
                      fontFamily: 'DM Mono, monospace', fontSize: '0.62rem',
                      letterSpacing: '0.06em', cursor: 'pointer', background: 'none', border: 'none',
                      color: active ? 'var(--accent)' : 'var(--text-muted)',
                      transition: 'color 0.2s', padding: '4px 0',
                    }}
                    className="hover:[color:var(--accent)]"
                  >
                    <span style={{ fontSize: '0.58rem', opacity: 0.6 }}>{item.number}</span>
                    <span>{item.name}</span>
                    <span style={{
                      display: 'block', height: 2, width: active ? 24 : 0,
                      background: 'var(--accent)', borderRadius: 2,
                      transition: 'width 0.3s', boxShadow: active ? '0 0 6px var(--accent-glow)' : 'none',
                    }} />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Socials */}
        <div className="flex flex-col items-center gap-3">
          {socials.map(s => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}
              style={{
                width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '50%', border: '1px solid var(--border)', color: 'var(--text-muted)',
                transition: 'all 0.2s', fontSize: '0.9rem',
              }}
              className="hover:[color:var(--accent)] hover:[border-color:var(--accent)]"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </aside>

      {/* ── Mobile hamburger ── */}
      <button
        className="md:hidden fixed top-4 right-4 z-[60] flex flex-col justify-center items-center gap-[5px]"
        style={{ width: 40, height: 40, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block', width: 20, height: 2, background: 'var(--accent)', borderRadius: 2,
            transformOrigin: 'center', transition: 'all 0.3s',
            transform: isOpen
              ? i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'scaleX(0)'
              : 'none',
          }} />
        ))}
      </button>

      {/* ── Mobile overlay ── */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 50,
        background: 'rgba(8,12,16,0.97)', backdropFilter: 'blur(16px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 36,
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(.16,1,.3,1)',
      }}>
        <img src="./kev.png" alt="KM" style={{ width: 72, height: 72, borderRadius: '50%', border: '2px solid var(--accent)', objectFit: 'cover', filter: 'grayscale(20%)' }} />
        <nav>
          <ul className="flex flex-col items-center gap-6">
            {MenuList.map(item => (
              <li key={item.id}>
                <button onClick={() => scrollTo(item.id)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Syne, sans-serif', fontSize: '1.6rem', fontWeight: 700,
                    color: activeSection === item.id ? 'var(--accent)' : 'var(--text-bright)', transition: 'color 0.2s' }}>
                  <span style={{ fontFamily: 'DM Mono', fontSize: '0.75rem', color: 'var(--accent)', marginRight: 8 }}>{item.number}</span>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-5">
          {socials.map(s => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
              style={{ width: 42, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '50%', border: '1px solid var(--border)', color: 'var(--text-muted)', fontSize: '1.1rem', transition: 'all 0.2s' }}
              className="hover:[color:var(--accent)] hover:[border-color:var(--accent)]"
            >{s.icon}</a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
