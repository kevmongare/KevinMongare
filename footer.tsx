@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
@import "tailwindcss";

:root {
  --bg:          #080c10;
  --bg-2:        #0d1117;
  --bg-card:     #111620;
  --border:      rgba(99,230,190,0.12);
  --accent:      #63e6be;
  --accent-dim:  rgba(99,230,190,0.12);
  --accent-glow: rgba(99,230,190,0.3);
  --text:        #cdd9e5;
  --text-muted:  #6e8098;
  --text-bright: #e6f0fa;
}

.light {
  --bg:          #f4f6fa;
  --bg-2:        #eaecf2;
  --bg-card:     #ffffff;
  --border:      rgba(14,120,100,0.14);
  --accent:      #0da87e;
  --accent-dim:  rgba(14,168,126,0.1);
  --accent-glow: rgba(14,168,126,0.22);
  --text:        #3a4a5c;
  --text-muted:  #7a8fa3;
  --text-bright: #1a2535;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background-color: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
::selection { background: var(--accent); color: var(--bg); }
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--bg-2); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 99px; }

.font-display { font-family: 'Syne', sans-serif; }
.font-mono    { font-family: 'DM Mono', monospace; }

.mesh-bg {
  background-color: var(--bg);
  background-image:
    radial-gradient(ellipse 60% 45% at 72% 18%, rgba(99,230,190,0.055) 0%, transparent 70%),
    radial-gradient(ellipse 40% 55% at 12% 82%, rgba(99,230,190,0.035) 0%, transparent 65%);
}

.noise::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 200px;
}

.section-label {
  font-family: 'DM Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
}

.glass-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
}
.glass-card:hover {
  border-color: rgba(99,230,190,0.28);
  box-shadow: 0 0 36px rgba(99,230,190,0.06), 0 12px 40px rgba(0,0,0,0.25);
  transform: translateY(-4px);
}

.tag {
  font-family: 'DM Mono', monospace;
  font-size: 0.7rem;
  padding: 2px 10px;
  border-radius: 99px;
  border: 1px solid var(--border);
  color: var(--accent);
  background: var(--accent-dim);
  white-space: nowrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'DM Mono', monospace;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  padding: 11px 26px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s;
  text-decoration: none;
  border: none;
  outline: none;
}
.btn-primary { background: var(--accent); color: var(--bg); }
.btn-primary:hover { filter: brightness(1.1); box-shadow: 0 0 28px var(--accent-glow); transform: translateY(-2px); }
.btn-outline { background: transparent; color: var(--accent); border: 1px solid var(--accent); }
.btn-outline:hover { background: var(--accent-dim); box-shadow: 0 0 16px var(--accent-glow); transform: translateY(-2px); }

@keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes blink  { 0%,100% { opacity: 1; } 50% { opacity: 0; } }

.fade-up { animation: fadeUp 0.65s cubic-bezier(.16,1,.3,1) both; }
.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.22s; }
.delay-3 { animation-delay: 0.34s; }
.delay-4 { animation-delay: 0.46s; }
.delay-5 { animation-delay: 0.6s; }

.cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background: var(--accent);
  margin-left: 2px;
  vertical-align: middle;
  animation: blink 1s step-end infinite;
}

.field {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg-2);
  color: var(--text-bright);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.field::placeholder { color: var(--text-muted); }
.field:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-dim); }
