// Testimonials page — each card is a clickable X profile link

const TestimonialsPage = () => {
  return (
    <main className="page">
      <div className="page-head">
        <div className="eyebrow">Feedback</div>
        <h1 className="page-title">People I've worked with.</h1>
        <p className="page-sub">
          Feedback from partners, founders and colleagues. Click any card to open their X profile.
          Want to add yours? DM <a href="https://x.com/simonthekid_" target="_blank" rel="noopener" style={{ color: 'var(--accent)', borderBottom: '1px solid var(--accent-line)' }}>@simonthekid_</a> with a line and your handle.
        </p>
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((t, i) => (
          <a key={i}
             className="card testimonial-card interactive"
             href={`https://x.com/${t.handle}`}
             target="_blank" rel="noopener"
             data-accent={t.accent}>
            <div className="testimonial-quote-mark">"</div>
            <p className="testimonial-text">{t.comment}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div className="testimonial-meta">
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role} · {t.company}</div>
                <div className="testimonial-handle">
                  <Icon name="x" size={10} /> @{t.handle}
                </div>
              </div>
              <div className="testimonial-arrow">
                <Icon name="arrow-up-right" size={16} />
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="testimonial-cta">
        <div className="eyebrow" style={{ marginBottom: 12 }}>Want to leave one?</div>
        <p style={{ fontSize: 16, color: 'var(--fg-dim)', lineHeight: 1.55, maxWidth: 620, margin: '0 0 20px' }}>
          We've worked together and you'd vouch? Drop me a line on X with your testimonial and I'll add it here with a link to your profile.
        </p>
        <a className="btn btn-primary" href="https://x.com/messages/compose?recipient_id=simonthekid_&text=Hey%20Sim%C3%A3o%20%E2%80%94%20here's%20my%20testimonial%3A%20" target="_blank" rel="noopener">
          <Icon name="x" size={14} /> Send via X DM
        </a>
      </div>
    </main>
  );
};

Object.assign(window, { TestimonialsPage });
