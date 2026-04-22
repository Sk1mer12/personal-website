// Latest activity — tries to fetch live X feed via Nitter RSS bridge (rss2json)
// Falls back to manually-curated latest post from data.jsx if fetch fails.

const NITTER_INSTANCES = [
  'nitter.net',
  'nitter.privacydev.net',
  'nitter.poast.org',
];
const X_HANDLE = 'simonthekid_';

async function fetchLatestTweet() {
  for (const host of NITTER_INSTANCES) {
    const rssUrl = `https://${host}/${X_HANDLE}/rss`;
    const api = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    try {
      const res = await fetch(api);
      if (!res.ok) continue;
      const data = await res.json();
      const item = data?.items?.[0];
      if (item && item.link && item.title) {
        // Strip HTML from title
        const text = item.title.replace(/<[^>]+>/g, '').replace(/^R to @\w+:\s*/, '').trim();
        // Rewrite nitter link → x.com
        const url = item.link.replace(/https?:\/\/[^/]+/, 'https://x.com');
        return {
          text,
          url,
          date: new Date(item.pubDate),
        };
      }
    } catch (e) { /* try next */ }
  }
  return null;
}

function timeAgo(date) {
  const s = Math.floor((Date.now() - date.getTime()) / 1000);
  if (s < 60) return `${s}s ago`;
  if (s < 3600) return `${Math.floor(s/60)}m ago`;
  if (s < 86400) return `${Math.floor(s/3600)}h ago`;
  if (s < 2592000) return `${Math.floor(s/86400)}d ago`;
  return `${Math.floor(s/2592000)}mo ago`;
}

const LatestActivity = () => {
  const [xPost, setXPost] = React.useState(null);
  const [xLoading, setXLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    fetchLatestTweet().then(live => {
      if (cancelled) return;
      setXLoading(false);
      if (live) {
        setXPost({
          handle: '@simonthekid_',
          timeAgo: timeAgo(live.date),
          text: live.text,
          url: live.url,
          live: true,
        });
      } else {
        setXPost(LATEST_POSTS.x);
      }
    });
    return () => { cancelled = true; };
  }, []);

  const x = xPost || LATEST_POSTS.x;
  const li = LATEST_POSTS.linkedin;

  return (
    <section className="section">
      <div className="section-head">
        <h2>Latest activity</h2>
        <span className="meta">
          {xLoading ? 'Fetching X feed…' : (x.live ? '● Live from X' : 'Latest posts')}
        </span>
      </div>
      <div className="latest-grid">
        <a className="card post-card interactive" href={x.url} target="_blank" rel="noopener">
          <div className="post-top">
            <div className="post-platform">
              <div className="post-platform-icon"><Icon name="x" size={14} /></div>
              {x.handle}
              {x.live && <span style={{ color: 'var(--accent)', fontSize: 10, marginLeft: 6 }}>● LIVE</span>}
            </div>
            <Icon name="arrow-up-right" size={14} />
          </div>
          <div className="post-body">
            {xLoading ? <span style={{ color: 'var(--fg-mute)' }}>Loading latest tweet…</span> : x.text}
          </div>
          <div className="post-meta">{xLoading ? '' : `${x.timeAgo} · Open on X`}</div>
        </a>
        <a className="card post-card interactive" href={li.url} target="_blank" rel="noopener">
          <div className="post-top">
            <div className="post-platform">
              <div className="post-platform-icon"><Icon name="linkedin" size={14} /></div>
              {li.handle}
            </div>
            <Icon name="arrow-up-right" size={14} />
          </div>
          <div className="post-body">{li.text}</div>
          <div className="post-meta">{li.timeAgo} · Open on LinkedIn</div>
        </a>
      </div>
    </section>
  );
};

Object.assign(window, { LatestActivity });
