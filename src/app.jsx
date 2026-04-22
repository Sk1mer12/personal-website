// App root with routing, theme, tweaks + edit mode bridge

const defaults = JSON.parse(document.getElementById('tweak-defaults').textContent.replace(/\/\*EDITMODE-(BEGIN|END)\*\//g, ''));

function useHashRoute() {
  const parse = () => (window.location.hash.replace('#', '') || 'home');
  const [route, setRoute] = React.useState(parse());
  React.useEffect(() => {
    const onHash = () => setRoute(parse());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return [route, (r) => { window.location.hash = r; window.scrollTo({ top: 0 }); }];
}

function App() {
  const [route, setRoute] = useHashRoute();
  const [tweaks, setTweaks] = React.useState(() => {
    try {
      const saved = localStorage.getItem('simao-tweaks');
      return { ...defaults, ...(saved ? JSON.parse(saved) : {}) };
    } catch { return defaults; }
  });
  const [tweaksOpen, setTweaksOpen] = React.useState(false);
  const [editModeOn, setEditModeOn] = React.useState(false);

  // Apply tweaks to <html>
  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', tweaks.theme);
    root.setAttribute('data-accent', tweaks.accent);
    root.setAttribute('data-font', tweaks.font);
    root.setAttribute('data-surface', tweaks.surfaceStyle);
    root.setAttribute('data-grain', String(tweaks.showGrain));
    localStorage.setItem('simao-tweaks', JSON.stringify(tweaks));
  }, [tweaks]);

  const updateTweaks = (patch) => {
    setTweaks(t => ({ ...t, ...patch }));
    // Persist to disk via host
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*');
    } catch {}
  };

  const toggleTheme = () => updateTweaks({ theme: tweaks.theme === 'dark' ? 'light' : 'dark' });

  // Edit mode wiring — listener first, then announce
  React.useEffect(() => {
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.type === '__activate_edit_mode') { setEditModeOn(true); setTweaksOpen(true); }
      if (e.data.type === '__deactivate_edit_mode') { setEditModeOn(false); setTweaksOpen(false); }
    };
    window.addEventListener('message', onMsg);
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch {}
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const PageComponent = { home: HomePage, about: AboutPage, projects: ProjectsPage, testimonials: TestimonialsPage, contact: ContactPage }[route] || HomePage;

  return (
    <div>
      <Nav current={route} onNav={setRoute} theme={tweaks.theme} onToggleTheme={toggleTheme} />
      <div key={route} data-screen-label={route}>
        <PageComponent tweaks={tweaks} onNav={setRoute} />
      </div>
      <Footer />

      {editModeOn && (
        <>
          {!tweaksOpen && (
            <button className="tweaks-fab" onClick={() => setTweaksOpen(true)} title="Tweaks">
              <Icon name="sliders" size={18} />
            </button>
          )}
          {tweaksOpen && (
            <TweaksPanel tweaks={tweaks} onChange={updateTweaks} onClose={() => setTweaksOpen(false)} />
          )}
        </>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
