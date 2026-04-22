// Icons + reusable UI bits

const Icon = ({ name, size = 16 }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'arrow-up-right':
      return <svg {...common}><path d="M7 17L17 7M7 7h10v10"/></svg>;
    case 'arrow-right':
      return <svg {...common}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case 'sun':
      return <svg {...common}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>;
    case 'moon':
      return <svg {...common}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>;
    case 'sliders':
      return <svg {...common}><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/></svg>;
    case 'x':
      return <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
    case 'linkedin':
      return <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
    case 'telegram':
      return <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>;
    case 'calendar':
      return <svg {...common}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>;
    case 'mail':
      return <svg {...common}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>;
    case 'download':
      return <svg {...common}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>;
    case 'close':
      return <svg {...common}><path d="M18 6L6 18M6 6l12 12"/></svg>;
    default:
      return null;
  }
};

const Nav = ({ current, onNav, theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (id) => { onNav(id); setMenuOpen(false); };

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleNav('home'); }}>
            <span className="logo-dot" />
            <span>Simão<em style={{ fontStyle: 'normal', color: 'var(--accent)', marginLeft: 6 }}>Pinto</em></span>
          </a>
          <div className="nav-links">
            {links.map(l => (
              <a key={l.id} href={`#${l.id}`}
                className={`nav-link ${current === l.id ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav(l.id); }}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button className="icon-btn" onClick={onToggleTheme} title="Toggle theme">
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16} />
            </button>
            <button className="icon-btn nav-hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setMenuOpen(false)}>
          <div className="mobile-nav-panel" onClick={e => e.stopPropagation()}>
            <div className="mobile-nav-header">
              <span className="logo">
                <span className="logo-dot" />
                <span>Simão<em style={{ fontStyle: 'normal', color: 'var(--accent)', marginLeft: 6 }}>Pinto</em></span>
              </span>
              <button className="icon-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <Icon name="close" size={16} />
              </button>
            </div>
            <nav className="mobile-nav-links">
              {links.map(l => (
                <a key={l.id} href={`#${l.id}`}
                  className={`mobile-nav-link ${current === l.id ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNav(l.id); }}>
                  <span>{l.label}</span>
                  <Icon name="arrow-right" size={18} />
                </a>
              ))}
            </nav>
            <div className="mobile-nav-footer">
              <button className="mobile-theme-btn" onClick={onToggleTheme}>
                <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16} />
                {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Footer = () => (
  <footer className="footer">
    <span>© {new Date().getFullYear()} Simão Pinto · Porto / Remote</span>
    <span>Vibecoded · v1.0</span>
  </footer>
);

Object.assign(window, { Icon, Nav, Footer });
