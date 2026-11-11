const fs = require('fs');
const path = require('path');

const mediaDirs = [
  path.join(__dirname, 'public', 'media', 'photos'),
  path.join(__dirname, 'public', 'media', 'posters'),
  path.join(__dirname, 'public', 'media', 'videos'),
];

mediaDirs.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

function createPlaceholderSvg(title, subtitle, category, bg1, bg2, accent, iconType) {
  let iconSvg = '';
  if (iconType === 'camera') {
    iconSvg = `
      <circle cx="200" cy="180" r="50" fill="none" stroke="${accent}" stroke-width="6"/>
      <circle cx="200" cy="180" r="24" fill="${accent}" opacity="0.3"/>
      <rect x="140" y="120" width="120" height="90" rx="16" fill="none" stroke="${accent}" stroke-width="6"/>
      <rect x="170" y="105" width="30" height="15" rx="4" fill="${accent}"/>
    `;
  } else if (iconType === 'video') {
    iconSvg = `
      <rect x="140" y="130" width="120" height="80" rx="14" fill="none" stroke="${accent}" stroke-width="6"/>
      <polygon points="185,150 225,170 185,190" fill="${accent}"/>
    `;
  } else if (iconType === 'coffee') {
    iconSvg = `
      <path d="M150,140 C150,195 170,210 200,210 C230,210 250,195 250,140 Z" fill="none" stroke="${accent}" stroke-width="6"/>
      <path d="M250,150 C265,150 275,160 275,175 C275,190 265,200 250,200" fill="none" stroke="${accent}" stroke-width="6"/>
      <path d="M175,120 Q180,105 175,90" fill="none" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
      <path d="M200,120 Q205,105 200,90" fill="none" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
      <path d="M225,120 Q230,105 225,90" fill="none" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
    `;
  } else if (iconType === 'music') {
    iconSvg = `
      <circle cx="170" cy="190" r="20" fill="${accent}"/>
      <circle cx="230" cy="175" r="20" fill="${accent}"/>
      <line x1="188" y1="190" x2="188" y2="120" stroke="${accent}" stroke-width="6"/>
      <line x1="248" y1="175" x2="248" y2="105" stroke="${accent}" stroke-width="6"/>
      <polygon points="188,125 250,110 250,125 188,140" fill="${accent}"/>
    `;
  } else if (iconType === 'dance') {
    iconSvg = `
      <circle cx="200" cy="120" r="18" fill="${accent}"/>
      <path d="M200,140 Q185,170 170,195 M200,140 Q215,165 235,185 M200,155 L200,205 L175,245 M200,205 L225,245" fill="none" stroke="${accent}" stroke-width="6" stroke-linecap="round"/>
      <path d="M150,160 Q180,145 200,155 Q220,145 250,160" fill="none" stroke="${accent}" stroke-width="6" stroke-linecap="round"/>
    `;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 360" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg1}" />
      <stop offset="100%" stop-color="${bg2}" />
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-opacity="0.08" />
    </filter>
  </defs>

  <!-- Background Card -->
  <rect x="8" y="8" width="384" height="344" rx="20" fill="url(#bg)" stroke="#24252B" stroke-opacity="0.08" stroke-width="2"/>

  <!-- Decorative Corner Tape -->
  <rect x="20" y="10" width="70" height="22" rx="4" fill="#F6E7B8" opacity="0.85" transform="rotate(-6 55 21)"/>
  <rect x="310" y="14" width="70" height="22" rx="4" fill="#E9A8B0" opacity="0.65" transform="rotate(6 345 25)"/>

  <!-- Category Tag -->
  <g transform="translate(30, 48)">
    <rect width="90" height="24" rx="12" fill="#24252B" fill-opacity="0.07"/>
    <text x="45" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#24252B" text-anchor="middle" letter-spacing="1">${category.toUpperCase()}</text>
  </g>

  <!-- Central Icon Graphic -->
  <g opacity="0.9">
    ${iconSvg}
  </g>

  <!-- Title & Details -->
  <text x="200" y="270" font-family="'Playfair Display', serif" font-size="22" font-weight="700" fill="#24252B" text-anchor="middle">${title}</text>
  <text x="200" y="296" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="500" fill="#765747" text-anchor="middle">${subtitle}</text>

  <!-- Bottom Badge -->
  <rect x="80" y="314" width="240" height="22" rx="11" fill="#FFFFFF" fill-opacity="0.9" stroke="#24252B" stroke-opacity="0.06"/>
  <text x="200" y="329" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="#737686" text-anchor="middle">📷 DEV's PHOTO / MEDIA PLACEHOLDER</text>
</svg>`;
}

const placeholders = [
  {
    path: 'public/media/photos/dev-hero-still.svg',
    title: 'Dev Chopra',
    subtitle: 'Delhi • 21 • Hopeless Romantic & Engineer',
    category: 'Portrait',
    bg1: '#FFF8F0',
    bg2: '#F7E4E5',
    accent: '#765747',
    icon: 'camera'
  },
  {
    path: 'public/media/photos/dev-portrait-01.svg',
    title: 'The Sunday Smile',
    subtitle: 'Delhi • Rare candid with no silly faces',
    category: 'Candid',
    bg1: '#FFF8F0',
    bg2: '#F7E4E5',
    accent: '#E9A8B0',
    icon: 'camera'
  },
  {
    path: 'public/media/photos/dev-cafe-01.svg',
    title: 'Sunday Brew Patrol',
    subtitle: "Dad's Cafe • Testing new roast profiles",
    category: 'Cafe',
    bg1: '#F7E4E5',
    bg2: '#F6E7B8',
    accent: '#765747',
    icon: 'coffee'
  },
  {
    path: 'public/media/photos/dev-travel-01.svg',
    title: 'City Archways & Light',
    subtitle: 'Connaught Place • Golden hour architecture',
    category: 'City',
    bg1: '#FFF8F0',
    bg2: '#DCE8F4',
    accent: '#24252B',
    icon: 'camera'
  },
  {
    path: 'public/media/photos/dev-creative-01.svg',
    title: 'Late Night Ideation',
    subtitle: 'Veena Studio • AI music & quick sketches',
    category: 'Creative',
    bg1: '#DDE8D8',
    bg2: '#FFF8F0',
    accent: '#765747',
    icon: 'camera'
  },
  {
    path: 'public/media/photos/dev-candid-02.svg',
    title: 'Mid-Laugh Candid',
    subtitle: 'Banter with friends in Rohini',
    category: 'Banter',
    bg1: '#F6E7B8',
    bg2: '#F7E4E5',
    accent: '#E9A8B0',
    icon: 'camera'
  },
  {
    path: 'public/media/posters/dev-dance-01-poster.svg',
    title: 'Living Room Bollywood',
    subtitle: 'Spontaneous living room moves (0:15)',
    category: 'Dance Video',
    bg1: '#F6E7B8',
    bg2: '#E9A8B0',
    accent: '#24252B',
    icon: 'dance'
  },
  {
    path: 'public/media/posters/dev-guitar-01-poster.svg',
    title: 'Acoustic in Progress',
    subtitle: 'Chord switches & practice session',
    category: 'Music Clip',
    bg1: '#DCE8F4',
    bg2: '#FFF8F0',
    accent: '#765747',
    icon: 'music'
  },
  {
    path: 'public/media/posters/dev-dj-01-poster.svg',
    title: 'The Bedroom DJ Booth',
    subtitle: 'Blending Qawwali with electronic bass',
    category: 'DJ Video',
    bg1: '#DDE8D8',
    bg2: '#DCE8F4',
    accent: '#24252B',
    icon: 'video'
  }
];

placeholders.forEach(item => {
  const svg = createPlaceholderSvg(item.title, item.subtitle, item.category, item.bg1, item.bg2, item.accent, item.icon);
  fs.writeFileSync(path.join(__dirname, item.path), svg);
  console.log('Created:', item.path);
});

