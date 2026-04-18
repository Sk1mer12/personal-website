// Tweaks panel

const TWEAK_CONFIG = [
  { key: 'theme', label: 'Theme', kind: 'opts', options: [{ v: 'dark', l: 'Dark' }, { v: 'light', l: 'Light' }] },
  { key: 'accent', label: 'Accent', kind: 'swatches', options: [
    { v: 'mint', color: 'rgb(103, 224, 153)' },
    { v: 'cyan', color: 'oklch(0.82 0.13 220)' },
    { v: 'amber', color: 'oklch(0.82 0.14 75)' },
    { v: 'violet', color: 'oklch(0.78 0.14 300)' },
    { v: 'red', color: 'oklch(0.72 0.18 22)' },
  ]},
  { key: 'font', label: 'Font', kind: 'opts', options: [{ v: 'inter', l: 'Inter' }, { v: 'mono-first', l: 'Mono' }, { v: 'editorial', l: 'Serif' }] },
  { key: 'heroLayout', label: 'Hero layout', kind: 'opts', options: [{ v: 'split', l: 'Split' }, { v: 'centered', l: 'Centered' }, { v: 'stacked', l: 'Stacked' }] },
  { key: 'metricsStyle', label: 'Metrics', kind: 'opts', options: [{ v: 'big', l: 'Grid' }, { v: 'minimal', l: 'Minimal' }, { v: 'inline', l: 'Inline' }] },
  { key: 'surfaceStyle', label: 'Surface', kind: 'opts', options: [{ v: 'glass', l: 'Glass' }, { v: 'flat', l: 'Flat' }, { v: 'outline', l: 'Outline' }] },
  { key: 'showGrain', label: 'Film grain', kind: 'toggle' },
];

const TweaksPanel = ({ tweaks, onChange, onClose }) => {
  return (
    <div className="tweaks-panel">
      <div className="tweaks-head">
        <span>⚙ Tweaks</span>
        <button className="icon-btn" style={{ width: 28, height: 28 }} onClick={onClose}>
          <Icon name="close" size={14} />
        </button>
      </div>
      {TWEAK_CONFIG.map(cfg => (
        <div key={cfg.key} className="tweak-row">
          <div className="tweak-label">
            <span>{cfg.label}</span>
            <span className="tweak-value">{String(tweaks[cfg.key])}</span>
          </div>
          {cfg.kind === 'opts' && (
            <div className="tweak-opts">
              {cfg.options.map(o => (
                <div key={o.v}
                  className={`tweak-opt ${tweaks[cfg.key] === o.v ? 'active' : ''}`}
                  onClick={() => onChange({ [cfg.key]: o.v })}>
                  {o.l}
                </div>
              ))}
            </div>
          )}
          {cfg.kind === 'swatches' && (
            <div className="tweak-swatches">
              {cfg.options.map(o => (
                <div key={o.v}
                  className={`tweak-swatch ${tweaks[cfg.key] === o.v ? 'active' : ''}`}
                  style={{ background: o.color }}
                  onClick={() => onChange({ [cfg.key]: o.v })}
                  title={o.v}
                />
              ))}
            </div>
          )}
          {cfg.kind === 'toggle' && (
            <div className="tweak-opts">
              <div className={`tweak-opt ${tweaks[cfg.key] ? 'active' : ''}`}
                onClick={() => onChange({ [cfg.key]: true })}>On</div>
              <div className={`tweak-opt ${!tweaks[cfg.key] ? 'active' : ''}`}
                onClick={() => onChange({ [cfg.key]: false })}>Off</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

Object.assign(window, { TweaksPanel });
