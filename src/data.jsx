// Data: CV content, projects, contacts, metrics
const CV = {
  name: 'Simão de Oliveira e Pinto',
  shortName: 'Simão Pinto',
  role: 'DeFi Lead',
  company: 'Balancer',
  location: 'Porto, Portugal',
  tagline: 'I turn early-stage DeFi products into scalable liquidity networks by aligning capital, incentives, and distribution.',
  email: 'simao.o.pinto@gmail.com',
  photo: 'assets/simao.jpg',
};

const METRICS = [
  { value: '300', unit: 'M', label: 'TVL scaled on BNB Chain', context: 'FROM $3M', company: 'Yieldnest' },
  { value: '5.2', unit: 'M', label: 'Venture investment secured as BD lead', context: 'USD RAISED', company: 'Yieldnest' },
  { value: '275', unit: 'M+', label: 'TVL growth from Plasma deployment', context: 'AS DEFI LEAD', company: 'Balancer' },
  { value: '10', unit: 'M+', label: 'TVL Growth from Monad deployment', context: 'PARTNERSHIPS', company: 'Balancer' },
];

const EXPERIENCE = [
  {
    period: 'Aug 2025 — Present',
    current: true,
    role: 'DeFi Lead',
    company: 'Balancer',
    bullets: [
      { strong: '$275M+ TVL growth', rest: 'by leading Plasma deployment and onboarding 20+ partners.' },
      { strong: 'Voting incentives', rest: 'managed across Hidden Hand, Paladin, StakeDAO with Aura coordination.' },
      { strong: 'Leveraged BPT strategies', rest: 'designed and implemented across multiple lending markets.' },
      { strong: 'Risk monitoring', rest: 'of supply & borrow caps on partner lending markets — ensuring rehypothecation functions as intended in Balancer pools.' },
      { strong: 'Governance-to-gauge pipeline', rest: 'built end-to-end; maintained Balancer frontend metadata and API integrations.' },
      { strong: 'BD team KPIs', rest: 'defined framework and performance targets.' },
    ],
  },
  {
    period: 'Aug 2024 — Aug 2025',
    role: 'Business Developer',
    company: 'Yieldnest',
    bullets: [
      { strong: 'Scaled TVL $3M → $300M', rest: 'on BNB Chain; led ecosystem expansion across Ethereum & BNB.' },
      { strong: '$5.2M venture raised', rest: 'through fundraising & merger conversations with institutional investors.' },
      { strong: '125+ integrations', rest: 'secured across DeFi ecosystem.' },
      { strong: 'Investor relations', rest: 'strong LP relationships ensuring alignment and retention.' },
      { strong: 'Incentive programs', rest: 'managed bribing strategies across partner protocols to drive TVL.' },
      { strong: 'ynETHx risk framework', rest: 'developed to identify optimal risk-adjusted underlying strategies.' },
    ],
  },
  {
    period: 'Sep 2023 — Aug 2024',
    role: 'BD and DeFi Integrations Specialist',
    company: 'Ankr Staking',
    bullets: [
      { strong: '75% process time reduction', rest: 'by automating & optimizing infrastructure — while maintaining Ankr Staking DeFi Aggregator and API functionality.' },
      { strong: '68 tokens × 66+ platforms', rest: '= 1,000+ integrations across CoinGecko, DeFiLlama and more. Massive discoverability & TVL lift.' },
      { strong: 'Cross-chain ankrETH ecosystem', rest: 'architected on Ethereum & BNB — 30+ integrations across lending, DEX, CDP protocols.' },
      { strong: '$3M+ fundraising support', rest: 'for InceptionLRT and other DeFi projects. Deep expertise in Node & RPC infrastructure.' },
    ],
  },
];

const EDUCATION = [
  {
    degree: 'MSc, Electrical & Computer Engineering',
    school: 'University of Porto',
    year: '2020 — 2024',
  },
  {
    degree: 'Master in Blockchain & Web3',
    school: 'Founderz Business School',
    year: '2023',
  },
];

const SIDE_PROJECTS_CV = [
  { name: 'Private Ledger', stack: 'Go · SDK · Bash' },
  { name: 'Insurance Company Smart Contract', stack: 'Solidity · JS · HTML · CSS' },
  { name: 'Sneakers Blog', stack: 'HTML · CSS' },
];

const VIBE_PROJECTS = [
  {
    name: 'Web3 Portfolio Tracker',
    desc: 'Track wallet holdings across chains. Pulls live balances, pricing, and PnL for addresses you follow. Built as a personal tool for keeping an eye on ecosystem wallets.',
    url: 'https://portfolio-tracker-brown-ten.vercel.app/',
    tags: ['Next.js', 'Web3', 'Vercel'],
    status: 'Live',
  },
];

const CONTACTS = [
  { label: 'X / Twitter', handle: '@simonthekid_', url: 'https://x.com/simonthekid_', kind: 'x' },
  { label: 'LinkedIn', handle: 'simopinto3', url: 'https://www.linkedin.com/in/simopinto3/', kind: 'linkedin' },
  { label: 'Telegram', handle: '@s1mkner', url: 'https://t.me/s1mkner', kind: 'telegram' },
  { label: 'Email', handle: 'simao.o.pinto@gmail.com', url: 'mailto:simao.o.pinto@gmail.com', kind: 'email' },
];

// Testimonials — each entry is a single X user. Clicking the card opens their X profile.
// To add new ones: push an object with { handle, name, role, company, comment }.
const TESTIMONIALS = [
  {
    handle: 'placeholder1',
    name: 'Name Surname',
    role: 'Founder',
    company: 'Example Protocol',
    comment: 'Simão is the rare BD who actually understands the product. He shipped integrations for us in days that other protocols quoted us months for — and brought the right partners to every conversation.',
    accent: 'mint',
  },
  {
    handle: 'placeholder2',
    name: 'Name Surname',
    role: 'Head of Growth',
    company: 'Another Protocol',
    comment: 'Working with Simão meant every meeting had a clear onchain thesis behind it. He reads gauge data like a builder and moves like an operator. Would hire again in a heartbeat.',
    accent: 'cyan',
  },
  {
    handle: 'placeholder3',
    name: 'Name Surname',
    role: 'Investor',
    company: 'VC Fund',
    comment: 'Straightforward, high-signal communicator. The kind of person you want on the other end of a partnership call.',
    accent: 'amber',
  },
];

// Simulated latest-post content. Real X/LI embedding is blocked; users click through.
const LATEST_POSTS = {
  x: {
    handle: '@simonthekid_',
    timeAgo: '2h ago',
    text: 'ynETHx TVL just crossed another milestone. Cross-chain distribution is no longer a nice-to-have — it\'s the moat. Writing up the thesis.',
    url: 'https://x.com/simonthekid_',
  },
  linkedin: {
    handle: 'Simão Pinto',
    timeAgo: 'Recent',
    text: 'Another year, another ETH Denver. Feeling grateful for the conversations, partnerships and builders met along the way — onto the next cycle.',
    url: 'https://www.linkedin.com/posts/simopinto3_another-year-another-eth-denver-feeling-ugcPost-7431577812454498304-iWA_',
  },
};

Object.assign(window, { CV, METRICS, EXPERIENCE, EDUCATION, SIDE_PROJECTS_CV, VIBE_PROJECTS, CONTACTS, LATEST_POSTS, TESTIMONIALS });
