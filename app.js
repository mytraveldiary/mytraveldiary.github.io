/* =====================================================================
   EXCHANGE DIARY — content + interactions
   Edit CONFIG / STOPS / BOARD to change links, the route and the trashbook.
   ===================================================================== */
const CONFIG = {
  youtube: '',    // ← your YouTube channel, e.g. 'https://www.youtube.com/@yourchannel'
  instagram: 'https://www.instagram.com/ben.quaranta/',
  portfolio: 'https://benlebosss.github.io/',
};

// The route, in travel order. photo & when are optional — add your own!
const STOPS = [
  { name: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522, home: true,
    when: 'departure', text: 'one suitcase, a plane ticket and a whole semester ahead.' },
  { name: 'Seoul', country: 'South Korea', lat: 37.5665, lng: 126.978, photo: 'assets/seoul.webp',
    text: 'golden sunsets downtown, palaces between skyscrapers & Cheonggyecheon at night.' },
  { name: 'Daegu', country: 'South Korea', lat: 35.8906, lng: 128.6109,
    when: 'Sept – Dec 2024', text: 'home base for the semester: Kyungpook National University (KNU).' },
  { name: 'Ulsan', country: 'South Korea', lat: 35.5384, lng: 129.3114, photo: 'assets/ulsan-finish.webp',
    when: 'Nine Peaks Trail', text: 'the Nine Peaks Trail — 40 km & 2,500 m of climbing. Youngest finisher ever!' },
  { name: 'Busan', country: 'South Korea', lat: 35.1796, lng: 129.0756, photo: 'assets/busan.webp',
    text: 'Haedong Yonggungsa, the temple standing on the rocks by the sea.' },
  { name: 'Hanoi', country: 'Vietnam', lat: 21.0285, lng: 105.8542, photo: 'assets/hanoi.webp',
    when: 'mini vlog', text: 'the yellow Presidential Palace, buzzing streets and the old quarter chaos.' },
  { name: 'Da Nang', country: 'Vietnam', lat: 16.0612, lng: 108.2277, photo: 'assets/snap-dragon-bridge.webp',
    text: 'the Dragon Bridge lighting up the river at night.' },
  { name: 'Saigon', country: 'Vietnam', lat: 10.7769, lng: 106.7009,
    text: 'Ho Chi Minh City, all the way down south.' },
  { name: 'Beijing', country: 'China', lat: 39.9042, lng: 116.4074, photo: 'assets/beijing.webp',
    text: 'the Forbidden City — posing with new friends in traditional Qing outfits.' },
  { name: 'Great Wall', country: 'China', lat: 40.4319, lng: 116.5704, photo: 'assets/greatwall.webp',
    when: 'golden hour', text: 'watching the sun go down over the Great Wall.' },
  { name: 'Shanghai', country: 'China', lat: 31.2304, lng: 121.4737, photo: 'assets/shanghai.webp',
    text: 'the Oriental Pearl Tower & the Pudong skyline.' },
  { name: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503, photo: 'assets/tokyo-ramen.webp',
    text: 'first stop in Japan — and a (very) good bowl of ramen.' },
  { name: 'Kyoto', country: 'Japan', lat: 35.0116, lng: 135.7681, photo: 'assets/kyoto.webp',
    text: 'walking under the thousands of red torii of Fushimi Inari.' },
  { name: 'Osaka', country: 'Japan', lat: 34.6937, lng: 135.5023, photo: 'assets/osaka.webp',
    text: 'Dotonbori: neon signs, the canal & the last stop of the trip.' },
];

// The trashbook, in reading order. types: photo | note | boarding | stamp
const BOARD = [
  { type: 'photo', src: 'assets/snap-vlog-korea.webp', caption: 'VLOG KOREA ▶', wide: true, video: true },
  { type: 'stamp', html: 'DAEGU<small>대구 · 2024</small>' },
  { type: 'photo', src: 'assets/seoul.webp', caption: 'Seoul sunset' },
  { type: 'photo', src: 'assets/snap-seoul-gate.webp', caption: 'Seoul, old meets new' },
  { type: 'boarding' },
  { type: 'photo', src: 'assets/snap-seoul-night.webp', caption: 'Cheonggyecheon by night' },
  { type: 'photo', src: 'assets/snap-market.webp', caption: 'market run' },
  { type: 'note', html: `<h4>to-do list</h4>
      <s>climb the 9 peaks</s> ✓<br><s>eat everything at the market</s> ✓<br><s>Dragon Bridge by night</s> ✓<br><s>Great Wall at sunset</s> ✓<br>come back ♥` },
  { type: 'photo', src: 'assets/snap-hike-crew.webp', caption: 'hike crew' },
  { type: 'photo', src: 'assets/ulsan-finish.webp', caption: 'youngest finisher!! (Ulsan)' },
  { type: 'photo', src: 'assets/snap-ridge.webp', caption: '9 peaks · 40 km', wide: true },
  { type: 'photo', src: 'assets/medals.webp', caption: 'the medals' },
  { type: 'stamp', blue: true, html: 'APPROVED<small>exchange student · KNU</small>' },
  { type: 'photo', src: 'assets/snap-summit-selfie.webp', caption: 'made it to the top' },
  { type: 'photo', src: 'assets/busan.webp', caption: 'Haedong Yonggungsa, Busan', wide: true },
  { type: 'photo', src: 'assets/hanoi.webp', caption: 'Presidential Palace, Hanoi' },
  { type: 'photo', src: 'assets/snap-dragon-bridge.webp', caption: 'Dragon Bridge, Da Nang' },
  { type: 'photo', src: 'assets/snap-vietnam-street.webp', caption: 'Vietnam streets' },
  { type: 'photo', src: 'assets/snap-lantern-bar.webp', caption: 'lantern nights' },
  { type: 'photo', src: 'assets/beijing.webp', caption: 'Forbidden City crew', wide: true },
  { type: 'photo', src: 'assets/greatwall.webp', caption: 'the Great Wall' },
  { type: 'photo', src: 'assets/snap-redbull.webp', caption: 'fuel' },
  { type: 'photo', src: 'assets/snap-football.webp', caption: 'late-night football' },
  { type: 'photo', src: 'assets/snap-dinner.webp', caption: 'dinner is served' },
  { type: 'photo', src: 'assets/snap-barber.webp', caption: 'fresh cut' },
  { type: 'photo', src: 'assets/snap-night-street.webp', caption: 'neon streets' },
  { type: 'photo', src: 'assets/shanghai.webp', caption: 'Shanghai skyline' },
  { type: 'photo', src: 'assets/kyoto.webp', caption: 'Fushimi Inari, Kyoto' },
  { type: 'stamp', html: 'JAPAN<small>日本 · the last stretch</small>' },
  { type: 'photo', src: 'assets/tokyo-ramen.webp', caption: 'ramen time, Tokyo' },
  { type: 'photo', src: 'assets/osaka.webp', caption: 'Dotonbori, Osaka' },
  { type: 'photo', src: 'assets/snap-night-boat.webp', caption: 'night boat ride', wide: true },
];

// Your scanned trashbook, in order (e.g. 'trashbook/page-01.jpg').
// While empty, the book shows placeholder pages.
const TRASHBOOK = {
  // cover shown when the book is closed ('' = the DIY kraft cover)
  cover: '',
  backCover: '',
  // every scanned page, in order: tb001 = left page of the 1st spread (red cover), tb002 = right page, …
  pages: Array.from({ length: 98 }, (_, i) => `trashbook/${[47, 48, 55, 56, 67, 68].includes(i + 1) ? 'th' : 'tg'}${String(i + 1).padStart(3, '0')}.webp`),
  // open directly on the first spread (the red pages) instead of the closed cover
  startOpen: true,
  placeholders: 10,
};

// stickers already on the page for first-time visitors (section + position in %)
const DEFAULT_STICKERS = [
  { id: 'taegeuk', at: '#home', fx: 0.66, fy: 0.3, r: -14 },
  { id: 'annyeong', at: '#home', fx: 0.6, fy: 0.84, r: 8 },
  { id: 'plane', at: '#map', fx: 0.8, fy: 0.08, r: 10 },
  { id: 'bobaa', at: '#photos', fx: 0.9, fy: 0.06, r: -8 },
  { id: 'shoe', at: '#photos', fx: 0.12, fy: 0.42, r: 12 },
];

/* ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
function seeded(seed) { let a = seed; return () => { a = (a * 16807) % 2147483647; return (a - 1) / 2147483646; }; }

/* ---------------- links ---------------- */
$$('[data-link]').forEach(a => {
  const url = CONFIG[a.dataset.link];
  if (url) a.href = url;
  else { a.href = '#'; a.addEventListener('click', e => { e.preventDefault(); toast('link coming soon ✂'); }); a.removeAttribute('target'); }
});
function toast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, { position: 'fixed', left: '50%', bottom: '30px', transform: 'translateX(-50%) rotate(-2deg)', zIndex: 90, background: '#ffe45c', padding: '10px 18px', fontFamily: 'Caveat, cursive', fontSize: '24px', boxShadow: '0 8px 18px rgba(0,0,0,.3)' });
  document.body.appendChild(t); setTimeout(() => t.remove(), 1800);
}

/* ---------------- ransom-note titles ---------------- */
$$('[data-ransom]').forEach((h, k) => {
  const r = seeded(7 + k * 13);
  h.innerHTML = h.dataset.ransom.split(' ').map(word => `<span class="w">${[...word].map(ch => {
    const f = Math.floor(r() * 7), rot = (r() - 0.5) * 12, y = (r() - 0.5) * 10;
    return `<span class="l f${f}" style="transform: rotate(${rot.toFixed(1)}deg) translateY(${y.toFixed(1)}px)">${ch}</span>`;
  }).join('')}</span>`).join('');
});

/* ---------------- hero video sound ---------------- */
const vlog = $('#vlog'), soundBtn = $('#sound');
soundBtn.addEventListener('click', () => {
  vlog.muted = !vlog.muted;
  if (!vlog.muted) vlog.play();
  soundBtn.textContent = vlog.muted ? '🔈 sound on' : '🔇 sound off';
  soundBtn.setAttribute('aria-pressed', String(!vlog.muted));
});
if (matchMedia('(prefers-reduced-motion: reduce)').matches) vlog.pause();

/* ---------------- map ---------------- */
const map = L.map('leaflet', { scrollWheelZoom: false, dragging: !L.Browser.mobile, worldCopyJump: true, zoomSnap: 0.25 });
// free OpenStreetMap tiles (no key needed); the sepia "old map" look is done in CSS
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', maxZoom: 18,
}).addTo(map);

// hand-drawn looking curved route between stops
function arc(a, b, bend = 0.18) {
  const pts = [], mx = (a.lat + b.lat) / 2, my = (a.lng + b.lng) / 2;
  const dx = b.lng - a.lng, dy = b.lat - a.lat;
  const cx = mx + dx * bend, cy = my - dy * bend; // control point (lat, lng)
  for (let t = 0; t <= 1.0001; t += 0.04) {
    const u = 1 - t;
    pts.push([u * u * a.lat + 2 * u * t * cx + t * t * b.lat, u * u * a.lng + 2 * u * t * cy + t * t * b.lng]);
  }
  return pts;
}
const route = [];
for (let i = 0; i < STOPS.length - 1; i++) route.push(...arc(STOPS[i], STOPS[i + 1], i % 2 ? -0.18 : 0.18));
L.polyline(route, { className: 'route-path', color: '#e2412e', weight: 3.5, opacity: 0.9, interactive: false }).addTo(map);

const markers = STOPS.map((s, i) => {
  const icon = L.divIcon({ className: '', html: `<div class="stop-pin${s.home ? ' home' : ''}">${s.home ? '✈' : i}</div>`, iconSize: [38, 38], iconAnchor: [19, 19], popupAnchor: [0, -18] });
  const m = L.marker([s.lat, s.lng], { icon, title: s.name }).addTo(map);
  m.bindPopup(`<div class="pop">${s.photo ? `<img src="${s.photo}" alt="${s.name}">` : ''}<h3>${s.name}</h3><small>${s.country}${s.when ? ' · ' + s.when : ''}</small><p>${s.text}</p></div>`, { maxWidth: 260 });
  m.on('click', () => selectStop(i, false));
  return m;
});
// start framed on Asia; the route from Paris comes in from the left edge
map.fitBounds(L.latLngBounds(STOPS.filter(s => !s.home).map(s => [s.lat, s.lng])), { padding: [50, 50] });

$('#tickets').innerHTML = STOPS.map((s, i) => `
  <li><button class="ticket reveal${s.home ? ' home' : ''}" data-i="${i}">
    <span class="num">${s.home ? '✈' : String(i).padStart(2, '0')}</span>
    <span class="info"><b>${s.name}</b><small>${s.country.toUpperCase()}${s.when ? ' · ' + s.when : ''}</small></span>
  </button></li>`).join('');
$$('.ticket').forEach(t => t.addEventListener('click', () => selectStop(+t.dataset.i, true)));
function selectStop(i, fly) {
  $$('.ticket').forEach(t => t.classList.toggle('active', +t.dataset.i === i));
  $$('.stop-pin').forEach((p, k) => p.classList.toggle('active', k === i));
  if (fly) {
    map.flyTo([STOPS[i].lat, STOPS[i].lng], STOPS[i].home ? 5 : 7, { duration: 1.4 });
    map.once('moveend', () => markers[i].openPopup());
  }
}
// don't trap the page scroll: the map is "locked" until clicked
const lock = $('#map-lock');
lock.addEventListener('click', () => {
  lock.classList.add('off');
  map.scrollWheelZoom.enable(); map.dragging.enable();
});

/* ---------------- trashbook ---------------- */
{
  const r = seeded(42);
  $('#board').innerHTML = BOARD.map((it, i) => {
    const rot = ((r() - 0.5) * 9).toFixed(1), tape = r() > 0.35 ? `<i class="tape" style="transform: rotate(${((r() - 0.5) * 16).toFixed(0)}deg)"></i>` : '';
    const style = `style="transform: rotate(${rot}deg)"`;
    switch (it.type) {
      case 'photo':
        return `<figure class="item polaroid reveal${it.wide ? ' wide' : ''}" ${style} data-src="${it.src}" data-caption="${it.caption}"${it.video ? ' data-video="1"' : ''}>${tape}<img src="${it.src}" alt="${it.caption}" loading="lazy"><figcaption>${it.caption}</figcaption></figure>`;
      case 'note':
        return `<div class="item note reveal" ${style}>${tape}${it.html}</div>`;
      case 'stamp':
        return `<div class="item stamp reveal${it.blue ? ' blue' : ''}" ${style}>${it.html}</div>`;
      case 'boarding':
        return `<div class="item boarding reveal" ${style}>${tape}
          <div class="main">
            <div class="top"><span>BOARDING PASS</span><span>✈ EXCHANGE 2024</span></div>
            <div class="cities">CDG <i>✈</i> ICN</div>
            <div class="row"><span>PASSENGER<b>QUARANTA / BENOIT</b></span><span>SEASON<b>AUTUMN 2024</b></span><span>SEAT<b>WINDOW PLS</b></span></div>
          </div>
          <div class="stub"><span>PARIS → SEOUL<br>ONE WAY (for now)</span><div class="barcode"></div></div>
        </div>`;
    }
    return '';
  }).join('');
}
// lightbox
const lb = $('#lightbox');
$('#board').addEventListener('click', e => {
  const p = e.target.closest('.polaroid');
  if (!p || held || ripped || p.classList.contains('gone')) return;
  if (p.dataset.video) { const yt = CONFIG.youtube; if (yt) { window.open(yt, '_blank', 'noopener'); return; } }
  $('img', lb).src = p.dataset.src; $('img', lb).alt = p.dataset.caption;
  $('figcaption', lb).textContent = p.dataset.caption;
  lb.hidden = false;
});
lb.addEventListener('click', () => { lb.hidden = true; });
addEventListener('keydown', e => { if (e.key === 'Escape' && !lb.hidden) { lb.hidden = true; e.stopImmediatePropagation(); } });

/* =====================================================================
   PHOTO WALL — rip a photo off the wall, let it go and it falls off-screen
   ===================================================================== */
const board = $('#board'), repin = $('#repin');
let rip = null, ripped = false;
const GRAVITY = 2600; // px/s²

board.addEventListener('pointerdown', e => {
  const p = e.target.closest('.polaroid');
  if (!p || held || p.classList.contains('gone') || e.button > 0) return;
  rip = { orig: p, id: e.pointerId, sx: e.clientX, sy: e.clientY, detached: false, samples: [] };
  ripped = false;
});
addEventListener('pointermove', e => {
  if (!rip || e.pointerId !== rip.id || rip.falling) return;
  const dx = e.clientX - rip.sx, dy = e.clientY - rip.sy;
  if (!rip.detached) {
    const touch = e.pointerType !== 'mouse';
    // on phones, only a sideways swipe rips (vertical = scrolling)
    if (touch && Math.abs(dy) > 14 && Math.abs(dy) > Math.abs(dx)) { rip = null; return; }
    if (Math.hypot(dx, dy) < (touch ? 14 : 7)) return;
    detach(e);
  }
  e.preventDefault();
  rip.samples.push({ x: e.clientX, y: e.clientY, t: performance.now() });
  if (rip.samples.length > 6) rip.samples.shift();
  rip.tx = e.clientX; rip.ty = e.clientY;
}, { passive: false });

function detach(e) {
  const o = rip.orig, r = o.getBoundingClientRect();
  const rot = parseFloat((o.style.transform.match(/rotate\(([-\d.]+)deg/) || [0, 0])[1]);
  const c = o.cloneNode(true);
  c.classList.remove('reveal', 'in', 'repinned');
  c.classList.add('flying');
  // un-rotated box size, so the clone matches the original exactly
  const w = o.offsetWidth, h = o.offsetHeight;
  Object.assign(c.style, { width: w + 'px', height: h + 'px' });
  // grab point, in the photo's own coordinates
  const ox = e.clientX - (r.left + r.width / 2) + w / 2, oy = e.clientY - (r.top + r.height / 2) + h / 2;
  c.style.transformOrigin = `${ox}px ${oy}px`;
  document.body.appendChild(c);
  o.classList.add('gone');
  repin.hidden = false;
  Object.assign(rip, { clone: c, ox, oy, rot, base: rot, tx: e.clientX, ty: e.clientY, x: e.clientX, y: e.clientY, detached: true });
  document.body.classList.add('ripping');
  paintRip();
  requestAnimationFrame(dragLoop);
}
function dragLoop() {
  if (!rip || !rip.detached || rip.falling) return;
  const px = rip.x;
  rip.x += (rip.tx - rip.x) * 0.45; rip.y += (rip.ty - rip.y) * 0.45;
  const vx = rip.x - px;
  // swings like it hangs from your fingers
  rip.rot += (rip.base + Math.max(-35, Math.min(35, vx * 2.2)) - rip.rot) * 0.18;
  paintRip();
  requestAnimationFrame(dragLoop);
}
function paintRip() {
  rip.clone.style.transform = `translate(${rip.x - rip.ox}px, ${rip.y - rip.oy}px) rotate(${rip.rot}deg) scale(1.04)`;
}
function release() {
  if (!rip) return;
  if (!rip.detached) { rip = null; return; }
  ripped = true; setTimeout(() => { ripped = false; }, 60);
  document.body.classList.remove('ripping');
  const s = rip.samples, a = s[0], b = s[s.length - 1];
  const dt = Math.max(16, b ? b.t - a.t : 16) / 1000;
  const f = { c: rip.clone, x: rip.x, y: rip.y, ox: rip.ox, oy: rip.oy, rot: rip.rot,
    vx: b ? (b.x - a.x) / dt : 0, vy: b ? (b.y - a.y) / dt : 0 };
  f.vy = Math.min(f.vy, 400) - 150;               // a little hop before it drops
  f.w = f.vx * 0.35 + (Math.random() - 0.5) * 360; // spin (deg/s)
  rip.falling = true; rip = null;
  let last = performance.now();
  (function fall(now) {
    const t = Math.min(0.033, (now - last) / 1000); last = now;
    f.vy += GRAVITY * t; f.vx *= 0.995;
    f.x += f.vx * t; f.y += f.vy * t; f.rot += f.w * t;
    f.c.style.transform = `translate(${f.x - f.ox}px, ${f.y - f.oy}px) rotate(${f.rot}deg)`;
    if (f.y - 400 > innerHeight || f.x < -600 || f.x > innerWidth + 600) f.c.remove();
    else requestAnimationFrame(fall);
  })(last);
}
addEventListener('pointerup', release);
addEventListener('pointercancel', release);
repin.addEventListener('click', () => {
  $$('.polaroid.gone', board).forEach((p, i) => setTimeout(() => { p.classList.remove('gone'); p.classList.add('repinned'); }, i * 70));
  repin.hidden = true;
});

/* =====================================================================
   TRASHBOOK — a flip book for the scanned scrapbook
   ===================================================================== */
const bookView = $('#book-view'), book = $('#book');
let leaves = [], cur = 0;
// phones: one page at a time — the book slides to show the left page, then the right one
const singleMQ = matchMedia('(max-width: 860px)');
let side = 'R';

function faceHTML(pg) {
  switch (pg.type) {
    case 'cover': return `<div class="cover">
        <i class="tape" style="top:-8px;left:18%;transform:rotate(-8deg)"></i>
        <span class="c-title"><b>TRASH</b><b>BOOK</b></span>
        <small>exchange diary · 2024–25</small>
        <img class="c-seal" src="assets/knu-seal.webp" alt="">
        <div class="c-stickers">${['taegeuk', 'annyeong', 'plane', 'smiley'].map(id => `<svg viewBox="0 0 120 120">${STICKERS[id].svg}</svg>`).join('')}</div>
        <span class="c-owner">property of B.Q. — if found, please return ✈</span>
      </div>`;
    case 'scan': return `<img class="scan" data-src="${pg.src}" alt="Trashbook page ${pg.n}" decoding="async"><button class="zoom" data-src="${pg.src}" aria-label="Zoom on this page">🔍</button>${pg.n ? `<span class="pn">${pg.n}</span>` : ''}`;
    case 'empty': return `<div class="empty"><p class="hand">page ${pg.n}</p><p class="soon">scan coming soon ✂</p><span class="pn">${pg.n}</span></div>`;
    case 'end': return `<div class="empty end"><p class="hand">the end…<br>for now ♥</p></div>`;
    case 'backcover': return `<div class="cover back-c"><p>made in Korea, Vietnam, China &amp; Japan</p><div class="barcode"></div></div>`;
  }
  return '';
}
function buildBook() {
  const inner = TRASHBOOK.pages.length
    ? TRASHBOOK.pages.map((src, i) => ({ type: 'scan', src, n: i + 1 }))
    : Array.from({ length: TRASHBOOK.placeholders }, (_, i) => ({ type: 'empty', n: i + 1 }));
  const pages = [TRASHBOOK.cover ? { type: 'scan', src: TRASHBOOK.cover, n: '' } : { type: 'cover' }, ...inner];
  if (pages.length % 2 === 0) pages.push({ type: 'end' });
  pages.push(TRASHBOOK.backCover ? { type: 'scan', src: TRASHBOOK.backCover, n: '' } : { type: 'backcover' });
  book.innerHTML = '';
  leaves = [];
  for (let i = 0; i < pages.length; i += 2) {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    leaf.innerHTML = `<div class="face front ${pages[i].type}">${faceHTML(pages[i])}</div><div class="face back ${pages[i + 1].type}">${faceHTML(pages[i + 1])}</div>`;
    book.appendChild(leaf); leaves.push(leaf);
  }
  renderBook();
}
function renderBook() {
  const L = leaves.length;
  leaves.forEach((lf, k) => {
    lf.classList.toggle('flipped', k < cur);
    if (!lf.dataset.moving) lf.style.zIndex = k < cur ? k + 1 : L - k;
  });
  book.classList.toggle('closed', cur === 0);
  book.classList.toggle('ended', cur === L);
  book.classList.toggle('single', singleMQ.matches);
  if (cur === 0) side = 'R';
  if (cur === L) side = 'L';
  book.dataset.side = side;
  $('#book-count').textContent = cur === 0 ? 'cover' : cur === L ? 'the end' : `${cur} / ${L - 1}`;
  $('#book-prev').disabled = cur === 0;
  $('#book-next').disabled = cur === L;
  // load the scans of the visible spread + a few leaves around it
  leaves.forEach((lf, k) => {
    if (Math.abs(k - cur) > 3) return;
    $$('img.scan[data-src]', lf).forEach(img => { img.src = img.dataset.src; img.removeAttribute('data-src'); });
  });
}
function flip(dir) {
  const L = leaves.length, k = dir > 0 ? cur : cur - 1;
  if (k < 0 || k >= L) return;
  const lf = leaves[k];
  lf.dataset.moving = '1'; lf.style.zIndex = L + 5; // stays on top while it turns
  cur += dir;
  renderBook();
  setTimeout(() => { delete lf.dataset.moving; renderBook(); }, 900);
}
function next() {
  if (singleMQ.matches && side === 'L' && cur < leaves.length) { side = 'R'; renderBook(); return; }
  if (cur >= leaves.length) return;
  side = 'L'; flip(1);
}
function prev() {
  if (singleMQ.matches && side === 'R' && cur > 0) { side = 'L'; renderBook(); return; }
  if (cur <= 0) return;
  side = 'R'; flip(-1);
}
$('#book-prev').addEventListener('click', prev);
$('#book-next').addEventListener('click', next);
singleMQ.addEventListener('change', () => leaves.length && renderBook());
let swipeX = null, swiped = false;
book.addEventListener('pointerdown', e => { swipeX = e.clientX; swiped = false; });
book.addEventListener('pointerup', e => {
  if (swipeX === null) return;
  const dx = e.clientX - swipeX; swipeX = null;
  if (Math.abs(dx) > 45) { swiped = true; (dx < 0 ? next : prev)(); setTimeout(() => { swiped = false; }, 60); }
});
book.addEventListener('click', e => {
  if (swiped) return;
  const z = e.target.closest('.zoom');
  if (z) { $('img', lb).src = z.dataset.src; $('figcaption', lb).textContent = 'trashbook'; lb.hidden = false; return; }
  const face = e.target.closest('.face');
  if (face) (face.classList.contains('front') ? next : prev)();
});
addEventListener('keydown', e => {
  if (bookView.hidden) return;
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') prev();
  if (e.key === 'Escape' && lb.hidden) closeBook();
});
function closeBook() { location.hash = 'photos'; }
$('#book-close').addEventListener('click', closeBook);
function syncBook() {
  const open = location.hash === '#trashbook';
  bookView.hidden = !open;
  document.body.classList.toggle('book-open', open);
  if (open && !leaves.length) { buildBook(); if (TRASHBOOK.startOpen && leaves.length > 1) { cur = 1; side = 'L'; renderBook(); } }
}
addEventListener('hashchange', syncBook);
syncBook();

/* ---------------- reveal on scroll ---------------- */
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
}), { threshold: 0.12 });
$$('.reveal').forEach(el => io.observe(el));

/* =====================================================================
   STICKERS — click to pick, it follows the pointer, click to stick.
   Click a stuck sticker to peel it off again. Saved in this browser.
   ===================================================================== */
const layer = $('#sticker-layer');
const sheet = $('#sticker-sheet'), toggle = $('#sticker-toggle');
const KEY = 'diary-stickers-v1';
let held = null;

function stickerHTML(id) {
  const s = STICKERS[id];
  return s.img ? `<img src="${s.img}" alt="${s.label}" draggable="false">` : `<svg viewBox="0 0 120 120" role="img" aria-label="${s.label}">${s.svg}</svg>`;
}
$('#sheet-grid').innerHTML = Object.keys(STICKERS).map(id => `<button data-id="${id}" title="${STICKERS[id].label}">${stickerHTML(id)}</button>`).join('');

function makeSticker(id) {
  const el = document.createElement('div');
  el.className = 'sticker';
  el.dataset.id = id;
  el.innerHTML = stickerHTML(id);
  return el;
}
function place(el, pageX, pageY, rot) {
  el.dataset.x = pageX / document.documentElement.clientWidth; // x as a fraction → survives resizes
  el.dataset.y = pageY;
  el.dataset.r = rot;
  el.style.left = pageX + 'px'; el.style.top = pageY + 'px';
  el.style.transform = `rotate(${rot}deg)`;
}
function save() {
  const data = $$('.sticker.stuck', layer).map(el => ({ id: el.dataset.id, x: +el.dataset.x, y: +el.dataset.y, r: +el.dataset.r }));
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* storage unavailable */ }
}
function load() {
  let data = null;
  try { data = JSON.parse(localStorage.getItem(KEY)); } catch (e) { /* ignore */ }
  if (!Array.isArray(data)) {
    const small = innerWidth < 860;
    data = DEFAULT_STICKERS.map(d => {
      const sec = $(d.at);
      if (small && d.id === 'taegeuk') d = { ...d, fx: 0.78, fy: 0.13 }; // keep the title readable on phones
      return { id: d.id, x: d.fx, y: sec.offsetTop + d.fy * sec.offsetHeight, r: d.r };
    });
  }
  data.forEach(d => {
    if (!STICKERS[d.id]) return;
    const el = makeSticker(d.id);
    el.classList.add('stuck');
    layer.appendChild(el);
    place(el, d.x * document.documentElement.clientWidth, d.y, d.r);
  });
}

function pick(el, x, y) {
  const rect = el.getBoundingClientRect();
  el.classList.remove('stuck');
  el.classList.add('held');
  document.body.appendChild(el);
  const r = +(el.dataset.r || (Math.random() - 0.5) * 20);
  held = { el, x: rect.left + rect.width / 2 || x, y: rect.top + rect.height / 2 || y, tx: x, ty: y, rot: r, base: r, vx: 0 };
  el.style.left = '0px'; el.style.top = '0px';
  document.body.classList.add('holding');
  moveHeld();
}
function drop(x, y) {
  const el = held.el;
  const overSheet = !sheet.hidden && sheet.contains(document.elementFromPoint(x, y));
  held = null;
  document.body.classList.remove('holding');
  el.classList.remove('held');
  if (overSheet) { el.remove(); save(); return; }
  layer.appendChild(el);
  el.classList.add('stuck');
  place(el, x + scrollX, y + scrollY, Math.round(+el.dataset.r || 0));
  save();
}
function moveHeld() {
  if (!held) return;
  const h = held;
  const px = h.x;
  h.x += (h.tx - h.x) * 0.3;
  h.y += (h.ty - h.y) * 0.3;
  h.vx = h.x - px;
  const tilt = Math.max(-25, Math.min(25, h.vx * 1.6));
  h.rot += (h.base + tilt - h.rot) * 0.2;
  h.el.dataset.r = h.base.toFixed(1);
  h.el.style.transform = `translate(${h.x}px, ${h.y}px) rotate(${h.rot}deg) scale(1.12)`;
  requestAnimationFrame(moveHeld);
}

addEventListener('pointermove', e => { if (held) { held.tx = e.clientX; held.ty = e.clientY; } }, { passive: true });
// capture phase: while holding a sticker, a click only sticks it (links underneath don't fire)
document.addEventListener('click', e => {
  if (held) {
    e.preventDefault(); e.stopPropagation();
    drop(e.clientX, e.clientY);
    return;
  }
  const stuck = e.target.closest && e.target.closest('.sticker.stuck');
  if (stuck) { e.preventDefault(); e.stopPropagation(); pick(stuck, e.clientX, e.clientY); return; }
  const src = e.target.closest && e.target.closest('#sheet-grid button');
  if (src) { e.preventDefault(); e.stopPropagation(); pick(makeSticker(src.dataset.id), e.clientX, e.clientY); }
}, true);
// scroll the wheel while holding to rotate the sticker
addEventListener('wheel', e => { if (held) { e.preventDefault(); held.base += e.deltaY > 0 ? 12 : -12; } }, { passive: false });
addEventListener('keydown', e => {
  if (!held) return;
  if (e.key === 'Escape') { held.el.remove(); held = null; document.body.classList.remove('holding'); }
  if (e.key === 'r' || e.key === 'R') held.base += 15;
});

toggle.addEventListener('click', e => {
  if (held) return; // the capture handler already stuck it
  sheet.hidden = !sheet.hidden;
  toggle.setAttribute('aria-expanded', String(!sheet.hidden));
});
$('#clear-stickers').addEventListener('click', () => { $$('.sticker', layer).forEach(el => el.remove()); save(); });
addEventListener('resize', () => $$('.sticker.stuck', layer).forEach(el => place(el, +el.dataset.x * document.documentElement.clientWidth, +el.dataset.y, +el.dataset.r)));

// stickers are placed once the layout (fonts, images) has settled
addEventListener('load', load);
