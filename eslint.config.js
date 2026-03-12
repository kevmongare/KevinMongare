import TechStack from '../../../data/tech-stack';

const categories = [
  { label: 'Frontend', items: TechStack.Frontend },
  { label: 'Backend',  items: TechStack.Backend },
  { label: 'Data',     items: TechStack.DataScience },
];

const AboutMe = () => (
  <section
    id="about"
    style={{
      minHeight: '100vh',
      background: 'var(--bg-2)',
      padding: 'clamp(64px,10vw,120px) clamp(24px,8vw,120px)',
      display: 'flex', alignItems: 'center',
    }}
  >
    <div style={{ maxWidth: 900, width: '100%', margin: '0 auto' }}>
      {/* Label */}
      <p className="section-label" style={{ marginBottom: 12 }}>0.2 — About Me</p>

      {/* Heading */}
      <h2
        className="font-display"
        style={{
          fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800,
          color: 'var(--text-bright)', marginBottom: 32, letterSpacing: '-0.02em',
        }}
      >
        Who I Am
      </h2>

      {/* Two column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, alignItems: 'start' }}>
        {/* Bio column */}
        <div>
          <p style={{ color: 'var(--text)', fontSize: '1rem', lineHeight: 1.85, marginBottom: 20 }}>
            I'm a React & MERN Stack Developer and Data Engineer trainee passionate about building
            scalable web apps and data-driven solutions.
          </p>
          <p style={{ color: 'var(--text)', fontSize: '1rem', lineHeight: 1.85, marginBottom: 20 }}>
            My background bridges <span style={{ color: 'var(--accent)' }}>frontend development</span>,{' '}
            <span style={{ color: 'var(--accent)' }}>SQL databases</span>, and{' '}
            <span style={{ color: 'var(--accent)' }}>analytics</span> — giving me the full picture
            from UI pixel to database query.
          </p>
          <p style={{ color: 'var(--text)', fontSize: '1rem', lineHeight: 1.85 }}>
            When I'm not coding, I'm exploring the intersection of data and user experience — and
            figuring out how to make complex systems feel simple.
          </p>
        </div>

        {/* Skills column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {categories.map(cat => (
            <div key={cat.label}>
              <p
                className="font-mono"
                style={{ fontSize: '0.7rem', letterSpacing: '0.18em', color: 'var(--accent)', marginBottom: 12, textTransform: 'uppercase' }}
              >
                {cat.label}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.items.map(item => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
