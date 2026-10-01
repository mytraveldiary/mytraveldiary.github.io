/* =====================================================================
   STICKERS — hand-made SVG stickers (viewBox 0 0 120 120).
   The white die-cut border + shadow are added in CSS (.sticker svg).
   ===================================================================== */
window.STICKERS = {
  taegeuk: { label: 'Korea', svg: `
    <circle cx="60" cy="60" r="44" fill="#fff"/>
    <path d="M60 16a44 44 0 0 1 0 88a22 22 0 0 1 0-44a22 22 0 0 0 0-44z" fill="#c8102e" transform="rotate(-30 60 60)"/>
    <path d="M60 104a44 44 0 0 1 0-88a22 22 0 0 1 0 44a22 22 0 0 0 0 44z" fill="#003478" transform="rotate(-30 60 60)"/>
    <circle cx="60" cy="60" r="44" fill="none" stroke="#1c1a17" stroke-width="3"/>` },

  annyeong: { label: '안녕!', svg: `
    <path d="M14 22h92a8 8 0 0 1 8 8v44a8 8 0 0 1-8 8H52l-22 20 4-20H14a8 8 0 0 1-8-8V30a8 8 0 0 1 8-8z" fill="#ffe45c" stroke="#1c1a17" stroke-width="3.5" stroke-linejoin="round"/>
    <text x="60" y="64" text-anchor="middle" font-family="Jua, 'Malgun Gothic', sans-serif" font-size="30" font-weight="700" fill="#1c1a17">안녕!</text>` },

  plane: { label: 'CDG → ICN', svg: `
    <rect x="8" y="34" width="104" height="52" rx="10" fill="#2f4bd3" stroke="#1c1a17" stroke-width="3"/>
    <path d="M30 60l18-4 10-16h6l-4 16 14-3 5-6h4l-2 9 2 9h-4l-5-6-14-3 4 16h-6l-10-16-18-4z" fill="#fff"/>
    <text x="60" y="80" text-anchor="middle" font-family="'Special Elite', monospace" font-size="11" fill="#fff">CDG ✦ ICN</text>` },

  bobaa: { label: 'Boba', svg: `
    <path d="M34 38h52l-7 66a6 6 0 0 1-6 5H47a6 6 0 0 1-6-5z" fill="#f3d9b1" stroke="#1c1a17" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M37 60h46l-4 44a6 6 0 0 1-6 5H47a6 6 0 0 1-6-5z" fill="#c98b5b"/>
    <g fill="#2a1a12"><circle cx="50" cy="96" r="4.5"/><circle cx="61" cy="99" r="4.5"/><circle cx="71" cy="94" r="4.5"/><circle cx="56" cy="88" r="4"/><circle cx="67" cy="86" r="4"/></g>
    <rect x="30" y="30" width="60" height="10" rx="4" fill="#ff8fb1" stroke="#1c1a17" stroke-width="3.5"/>
    <path d="M68 30l10-22" stroke="#1c1a17" stroke-width="7" stroke-linecap="round"/><path d="M68 30l10-22" stroke="#ff5c8a" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="52" cy="72" r="2.5" fill="#1c1a17"/><circle cx="68" cy="72" r="2.5" fill="#1c1a17"/><path d="M56 78q4 4 8 0" stroke="#1c1a17" stroke-width="2.5" fill="none" stroke-linecap="round"/>` },

  wow: { label: 'WOW', svg: `
    <path d="M60 6l12 26 28-8-12 26 26 12-26 12 12 26-28-8-12 26-12-26-28 8 12-26L6 72l26-12L20 34l28 8z" fill="#ff5a36" stroke="#1c1a17" stroke-width="3.5" stroke-linejoin="round"/>
    <text x="60" y="70" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="28" fill="#fff" stroke="#1c1a17" stroke-width="1.5">WOW</text>` },

  knu: { label: 'KNU', img: 'assets/knu-seal.webp' },

  ramen: { label: 'Ramyeon', svg: `
    <path d="M14 58h92a46 40 0 0 1-92 0z" fill="#e2412e" stroke="#1c1a17" stroke-width="3.5"/>
    <ellipse cx="60" cy="58" rx="46" ry="10" fill="#ffd78a" stroke="#1c1a17" stroke-width="3.5"/>
    <path d="M28 58q6-8 12 0t12 0 12 0 12 0 12 0" stroke="#e8a93d" stroke-width="3" fill="none"/>
    <circle cx="74" cy="55" r="7" fill="#fff" stroke="#1c1a17" stroke-width="2"/><circle cx="74" cy="55" r="3.5" fill="#ffb81c"/>
    <path d="M40 50L86 14M48 52L96 22" stroke="#1c1a17" stroke-width="7" stroke-linecap="round"/><path d="M40 50L86 14M48 52L96 22" stroke="#d9a066" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M36 82q24 10 48 0" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/>` },

  camera: { label: 'Camera', svg: `
    <rect x="12" y="34" width="96" height="66" rx="12" fill="#1c1a17"/>
    <rect x="16" y="38" width="88" height="58" rx="9" fill="#f2efe6"/>
    <rect x="16" y="54" width="88" height="26" fill="#e2412e"/>
    <path d="M40 34l6-12h28l6 12z" fill="#1c1a17"/>
    <circle cx="60" cy="67" r="21" fill="#1c1a17"/><circle cx="60" cy="67" r="14" fill="#3a5ed6"/><circle cx="54" cy="61" r="4" fill="#cfe0ff"/>
    <rect x="84" y="42" width="14" height="8" rx="2" fill="#ffe45c"/>` },

  seoul: { label: 'Seoul ♥', svg: `
    <path d="M60 104C24 80 8 62 8 42a24 24 0 0 1 52-14 24 24 0 0 1 52 14c0 20-16 38-52 62z" fill="#ff5c8a" stroke="#1c1a17" stroke-width="3.5" stroke-linejoin="round"/>
    <text x="60" y="66" text-anchor="middle" font-family="'Permanent Marker', cursive" font-size="24" fill="#fff" transform="rotate(-8 60 60)">SEOUL</text>` },

  shoe: { label: '40 KM', svg: `
    <path d="M14 76c0-10 6-14 14-16l14-24c6 4 14 6 20 4l6 10c10 2 30 6 38 14 6 6 4 14-4 16H22c-6 0-8-2-8-4z" fill="#3ddc84" stroke="#1c1a17" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M14 80h92v8a6 6 0 0 1-6 6H20a6 6 0 0 1-6-6z" fill="#fff" stroke="#1c1a17" stroke-width="3.5"/>
    <path d="M44 44l10 6M40 52l10 6M36 60l10 6" stroke="#1c1a17" stroke-width="3" stroke-linecap="round"/>
    <text x="72" y="30" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="#1c1a17" transform="rotate(10 72 30)">40 KM!</text>` },

  caphe: { label: 'Cà phê', svg: `
    <path d="M30 52h56v34a18 18 0 0 1-18 18H48a18 18 0 0 1-18-18z" fill="#fff" stroke="#1c1a17" stroke-width="3.5"/>
    <path d="M86 60h8a10 10 0 0 1 0 20h-8" fill="none" stroke="#1c1a17" stroke-width="3.5"/>
    <path d="M33 70h50v16a15 15 0 0 1-15 15H48a15 15 0 0 1-15-15z" fill="#6b3b1f"/>
    <rect x="36" y="32" width="44" height="18" rx="3" fill="#b0b5bb" stroke="#1c1a17" stroke-width="3"/>
    <path d="M50 22q4-8 0-14M62 22q4-8 0-14" stroke="#1c1a17" stroke-width="3" fill="none" stroke-linecap="round"/>
    <text x="58" y="118" text-anchor="middle" font-family="'Permanent Marker', cursive" font-size="13" fill="#1c1a17">cà phê</text>` },

  smiley: { label: 'Smile', svg: `
    <circle cx="60" cy="60" r="46" fill="#ffe45c" stroke="#1c1a17" stroke-width="3.5"/>
    <ellipse cx="44" cy="50" rx="6" ry="9" fill="#1c1a17"/><ellipse cx="76" cy="50" rx="6" ry="9" fill="#1c1a17"/>
    <path d="M36 70q24 26 48 0" stroke="#1c1a17" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="34" cy="68" r="6" fill="#ff8fb1" opacity=".7"/><circle cx="86" cy="68" r="6" fill="#ff8fb1" opacity=".7"/>` },
};
