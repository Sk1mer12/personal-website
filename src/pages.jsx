// Pages: Home, About, Projects, Contact

const HomePage = ({ tweaks, onNav }) => {
  return (
    <main className="page">
      <section className="hero" data-layout={tweaks.heroLayout}>
        <div className="hero-left">
          <div className="hero-status">
            <span className="status-pulse" />
            Currently DeFi Lead at Balancer
          </div>
          <h1 className="hero-name">
            Simão <em>Pinto</em>
          </h1>
          <p className="hero-tagline">
            I turn early-stage DeFi products into <strong>scalable liquidity networks</strong> by aligning capital, incentives, and distribution.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => onNav('projects')}>
              See projects <Icon name="arrow-right" />
            </button>
            <a className="btn" href="https://calendly.com/simaop/30min" target="_blank" rel="noopener">
              <Icon name="calendar" /> Book a call
            </a>
            <a className="btn" href="uploads/cv.pdf" target="_blank" rel="noopener">
              <Icon name="download" /> CV
            </a>
          </div>
        </div>
        <div className="hero-right">
          <img src={CV.photo} alt="Simão Pinto" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>By the numbers</h2>
          <span className="meta">Aug 2023 — Present</span>
        </div>
        <div className="metrics" data-style={tweaks.metricsStyle}>
          {METRICS.map((m, i) => (
            <div key={i} className="metric">
              <div className="metric-value">
                ${m.value}<span className="unit">{m.unit}</span>
              </div>
              <div className="metric-label">{m.label}</div>
              <div className="metric-context" style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'space-between' }}>
                <span>{m.context}</span>
                <span style={{ color: 'var(--accent)', fontWeight: 500 }}>@ {m.company}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <LatestActivity />

      <section className="section">
        <div className="section-head">
          <h2>Currently focused on</h2>
          <span className="meta">Balancer · DeFi Lead</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { kicker: '01', title: 'Plasma & cross-chain expansion', body: 'Onboarding partners on new chains — $275M+ in TVL already tracked to this workstream.' },
            { kicker: '02', title: 'Voting incentives & gauges', body: 'Hidden Hand · Paladin · StakeDAO coordination with Aura. Governance-to-gauge pipelines.' },
            { kicker: '03', title: 'Leveraged BPT strategies', body: 'Designing risk-adjusted leverage strategies across lending markets, monitoring rehypothecation in Balancer pools.' },
          ].map((f, i) => (
            <div key={i} className="card">
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: 12, letterSpacing: '0.1em', marginBottom: 14 }}>{f.kicker}</div>
              <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 8 }}>{f.title}</div>
              <div style={{ fontSize: 14, color: 'var(--fg-dim)', lineHeight: 1.55 }}>{f.body}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

const AboutPage = () => {
  return (
    <main className="page">
      <div className="page-head">
        <div className="eyebrow">About</div>
        <h1 className="page-title">Business dev in DeFi, with a builder's backbone.</h1>
        <p className="page-sub">
          Electrical & Computer Engineering at University of Porto, with a Master in Blockchain & Web3.
          I moved from smart-contract & infra projects into DeFi business development, where my edge is reading onchain behavior and turning it into partnership strategy.
        </p>
      </div>

      <section className="section" style={{ marginTop: 0 }}>
        <div className="section-head">
          <h2>Experience</h2>
          <span className="meta">2023 — Present</span>
        </div>
        <div className="timeline">
          {EXPERIENCE.map((job, i) => (
            <div key={i} className="job">
              <div className={`job-period ${job.current ? 'job-current' : ''}`}>
                {job.current && <span style={{ marginRight: 6 }}>●</span>}{job.period}
              </div>
              <div>
                <h3 className="job-role">{job.role}</h3>
                <div className="job-company">{job.company}</div>
                <ul className="job-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>
                      <strong>{b.strong}</strong> — {b.rest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Education</h2>
          <span className="meta">2020 — 2024</span>
        </div>
        <div className="edu-grid">
          {EDUCATION.map((e, i) => (
            <div key={i} className="card edu-card">
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-year">{e.year}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Early builder work</h2>
          <span className="meta">Pre-Balancer</span>
        </div>
        <div className="edu-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {SIDE_PROJECTS_CV.map((p, i) => (
            <div key={i} className="card edu-card">
              <div className="edu-degree">{p.name}</div>
              <div className="edu-school">{p.stack}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

const ProjectsPage = () => {
  const [liveCount, setLiveCount] = React.useState(0);

  return (
    <main className="page">
      <div className="page-head">
        <div className="eyebrow">Projects · Vibecoded</div>
        <h1 className="page-title">Things I've shipped on the side.</h1>
        <p className="page-sub">
          Small tools, prototypes and experiments. Each one started as a specific itch — a thing I wanted to see onchain
          that didn't exist yet. Previews below are live iframes of the actual deployments.
        </p>
      </div>

      <div className="projects-grid">
        {VIBE_PROJECTS.map((p, i) => (
          <a key={i} className="card project-card interactive" href={p.url} target="_blank" rel="noopener">
            <div className="project-preview">
              <iframe src={p.url} loading="lazy" title={p.name} onLoad={() => setLiveCount(c => c + 1)} />
              <div className="project-preview-overlay">
                <div className="btn btn-primary" style={{ pointerEvents: 'none' }}>
                  Open <Icon name="arrow-up-right" />
                </div>
              </div>
            </div>
            <div className="project-body">
              <div className="project-title">
                {p.name}
                <span className="project-title-arrow"><Icon name="arrow-up-right" size={14} /></span>
              </div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                <span className="tag" style={{ color: 'var(--accent)', borderColor: 'var(--accent-line)' }}>● {p.status}</span>
              </div>
            </div>
          </a>
        ))}

        {/* coming soon placeholder */}
        <div className="card project-card" style={{ opacity: 0.6 }}>
          <div className="project-preview" style={{ display: 'grid', placeItems: 'center', background: 'repeating-linear-gradient(45deg, transparent 0, transparent 12px, var(--line) 12px, var(--line) 13px)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-mute)', background: 'var(--bg)', padding: '8px 14px', borderRadius: 6, border: '1px solid var(--line)' }}>
              next project — WIP
            </span>
          </div>
          <div className="project-body">
            <div className="project-title">Something new, soon</div>
            <p className="project-desc">
              More vibecoded experiments on the way.
            </p>
            <div className="project-tags">
              <span className="tag">TBD</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const ContactPage = () => {
  return (
    <main className="page">
      <div className="page-head">
        <div className="eyebrow">Contact</div>
        <h1 className="page-title">Let's talk DeFi, BD, or both.</h1>
        <p className="page-sub">
          Easiest path: book a 30-minute call below. For quick threads, X or Telegram. For intros or inbound roles, LinkedIn.
        </p>
      </div>

      <div className="contact-grid">
        {CONTACTS.map((c, i) => (
          <a key={i} className="card contact-card interactive" href={c.url} target="_blank" rel="noopener">
            <div className="contact-top">
              <div className="contact-icon">
                <Icon name={c.kind === 'email' ? 'mail' : c.kind === 'calendly' ? 'calendar' : c.kind} size={18} />
              </div>
              <Icon name="arrow-up-right" size={16} />
            </div>
            <div>
              <div className="contact-label">{c.label}</div>
              <div className="contact-handle">{c.handle}</div>
            </div>
          </a>
        ))}
      </div>

      <a className="calendly-cta" href="https://calendly.com/simaop/30min" target="_blank" rel="noopener">
        <div className="calendly-cta-left">
          <div className="calendly-cta-icon">
            <Icon name="calendar" size={24} />
          </div>
          <div>
            <div className="calendly-cta-eyebrow">Fastest way to move things forward</div>
            <div className="calendly-cta-title">Skip the DMs — book a 30-min call.</div>
            <div className="calendly-cta-sub">calendly.com/simaop/30min</div>
          </div>
        </div>
        <div className="calendly-cta-arrow">
          <Icon name="arrow-right" size={20} />
        </div>
      </a>
    </main>
  );
};

Object.assign(window, { HomePage, AboutPage, ProjectsPage, ContactPage, TestimonialsPage });
