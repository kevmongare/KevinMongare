const FooterPart = () => (
  <footer
    style={{
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--border)',
      padding: '28px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
    }}
  >
    <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
      © {new Date().getFullYear()} Kevin Mongare — All rights reserved
    </p>
    <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: 'var(--accent)', opacity: 0.7 }}>
      Built with React · TypeScript · Tailwind
    </p>
  </footer>
);

export default FooterPart;
