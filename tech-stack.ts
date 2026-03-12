import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); setTimeout(() => setSent(false), 3500); }, 1200);
  };

  const socials = [
    { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/kevin-mongare-58b960200/' },
    { icon: <FaGithub />,   label: 'GitHub',   url: 'https://github.com/kevmongare' },
    { icon: <FaTwitter />,  label: 'Twitter',  url: 'https://x.com/kevin_mong86626' },
  ];

  return (
    <section
      id="contact"
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        padding: 'clamp(64px,10vw,120px) clamp(24px,8vw,120px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}
    >
      <div style={{ maxWidth: 900, width: '100%' }}>
        {/* Label */}
        <p className="section-label" style={{ marginBottom: 12 }}>0.5 — Contact</p>

        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800,
            color: 'var(--text-bright)', marginBottom: 16, letterSpacing: '-0.02em',
          }}
        >
          Let's Work Together
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: 52, maxWidth: 460 }}>
          Available for freelance projects and full-time opportunities. If you have an idea, let's talk.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 36 }}>
          {/* Form */}
          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <input
              className="field" type="text" name="name" placeholder="Your name"
              value={form.name} onChange={onChange} required
            />
            <input
              className="field" type="email" name="email" placeholder="your@email.com"
              value={form.email} onChange={onChange} required
            />
            <textarea
              className="field" name="message" placeholder="Tell me about your project..."
              value={form.message} onChange={onChange} required rows={6}
              style={{ resize: 'vertical' }}
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start', minWidth: 160, justifyContent: 'center' }}
              disabled={loading}
            >
              {loading ? 'Sending…' : sent ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>

          {/* Info panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {/* Email */}
            <a href="mailto:kmongare4@gmail.com"
              style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--text)', textDecoration: 'none', transition: 'color 0.2s' }}
              className="hover:[color:var(--accent)]">
              <span style={{
                width: 40, height: 40, borderRadius: 8, background: 'var(--accent-dim)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent)', flexShrink: 0,
              }}><FaEnvelope /></span>
              <span>
                <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: 2 }}>EMAIL</p>
                <p style={{ fontSize: '0.9rem' }}>kmongare4@gmail.com</p>
              </span>
            </a>

            {/* Divider */}
            <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />

            {/* Socials */}
            <div>
              <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16 }}>
                Find me on
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {socials.map(s => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    className="hover:[color:var(--accent)]">
                    <span style={{ fontSize: '1rem' }}>{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability note */}
            <div
              style={{
                padding: '16px 20px', background: 'var(--accent-dim)',
                border: '1px solid var(--border)', borderRadius: 10,
                marginTop: 8,
              }}
            >
              <p style={{ color: 'var(--accent)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                🟢 Currently available for new projects and open to full-time roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
