/* =========================================================
   SHARED STATE  (in-memory — replace with Supabase in prod)
========================================================= */
const state = {
    services: [
        { id: 1, name: 'Signature Haircut', desc: 'Precision scissor & clipper cut, tailored to face shape.', price: 600, dur: '45 min', icon: '✂' },
        { id: 2, name: 'Skin Fade', desc: 'Razor-sharp bald fade with seamless blending.', price: 750, dur: '50 min', icon: '◐' },
        { id: 3, name: 'Beard Sculpting', desc: 'Straight-razor shape-up with hot towel finish.', price: 450, dur: '30 min', icon: '⌇' },
        { id: 4, name: 'Kids Haircut', desc: 'Patient, gentle cuts for the younger gentlemen.', price: 400, dur: '30 min', icon: '★' },
        { id: 5, name: 'Hair Wash & Style', desc: 'Deep cleanse, conditioning and blow-dry styling.', price: 300, dur: '20 min', icon: '≈' },
        { id: 6, name: 'Hair Colour', desc: 'Grey blending or full colour with premium ammonia-free dye.', price: 1200, dur: '70 min', icon: '◆' },
        { id: 7, name: 'Hair Spa', desc: 'Deep nourishing spa treatment for scalp & strands.', price: 900, dur: '50 min', icon: '❋' },
        { id: 8, name: 'Head Massage', desc: 'Traditional oil head massage to relieve tension.', price: 350, dur: '25 min', icon: '✦' },
        { id: 9, name: 'Premium Grooming', desc: 'Full package — cut, beard, wash, massage & styling.', price: 1800, dur: '110 min', icon: '♛' },
    ],
    gallery: [
        { img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=700&auto=format&fit=crop', cat: 'Haircuts', title: 'Textured Crop' },
        { img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=700&auto=format&fit=crop', cat: 'Beards', title: 'Full Beard Shape' },
        { img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=700&auto=format&fit=crop', cat: 'Trending', title: 'Modern Quiff' },
        { img: 'https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=700&auto=format&fit=crop', cat: 'Transformation', title: 'Full Makeover' },
        { img: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=700&auto=format&fit=crop', cat: 'Premium', title: 'Executive Style' },
        { img: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?q=80&w=700&auto=format&fit=crop', cat: 'Haircuts', title: 'Skin Fade' },
        { img: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=700&auto=format&fit=crop', cat: 'Color', title: 'Grey Blend' },
        { img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=700&auto=format&fit=crop&sat=-100', cat: 'Beards', title: 'Straight Razor Line' },
        { img: 'https://images.unsplash.com/photo-1584316712724-f5d4b188fee2?q=80&w=700&auto=format&fit=crop', cat: 'Trending', title: 'Curly Crop' },
    ],
    videos: [
        { title: 'Skin Fade Process', cat: 'Process', thumb: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?q=80&w=500&auto=format&fit=crop' },
        { title: 'Beard Transformation', cat: 'Transformation', thumb: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=500&auto=format&fit=crop' },
        { title: 'Trending Textured Crop', cat: 'Trending', thumb: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=500&auto=format&fit=crop' },
        { title: 'Customer Reaction', cat: 'Reactions', thumb: 'https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=500&auto=format&fit=crop' },
    ],
    reviews: [
        { name: 'Arjun Mehta', date: '2 weeks ago', rating: 5, text: 'Best fade I have ever had, hands down. Goldy actually listens before he picks up the clippers.', status: 'Approved' },
        { name: 'Rohan Kapoor', date: '1 month ago', rating: 5, text: 'The home service option saved me before a wedding — punctual and immaculate work.', status: 'Approved' },
        { name: 'Vikram Singh', date: '1 month ago', rating: 4, text: 'Booked through the site in under a minute. Studio feels premium, not like a typical salon.', status: 'Pending' },
    ],
    bookings: []
};
let bookingSeq = 1024;

/* =========================================================
   NAV
========================================================= */
window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
});
function toggleMenu() { document.getElementById('navLinks').classList.toggle('open'); }
function closeMenu() { document.getElementById('navLinks').classList.remove('open'); }
function toggleFab() { document.getElementById('fabWrap').classList.toggle('open'); }
document.addEventListener('click', (e) => {
    const wrap = document.getElementById('fabWrap');
    if (wrap.classList.contains('open') && !wrap.contains(e.target)) wrap.classList.remove('open');
});

/* =========================================================
   SCROLL REVEAL
========================================================= */
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); } });
}, { threshold: 0.15 });
function observeReveals() { document.querySelectorAll('.reveal').forEach(el => io.observe(el)); }

/* =========================================================
   RENDER: SERVICES
========================================================= */
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = state.services.map((s, i) => `
    <div class="service-card reveal d${(i % 4)}">
      <div class="icon">${s.icon}</div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <div class="service-meta">
        <span class="service-price">₹${s.price}</span>
        <span class="service-dur">${s.dur}</span>
      </div>
      <a href="#booking" class="service-book">Book This →</a>
    </div>`).join('');
    const sel = document.getElementById('bService');
    sel.innerHTML = state.services.map(s => `<option value="${s.name}">${s.name} — ₹${s.price}</option>`).join('');
    observeReveals();
}

/* =========================================================
   RENDER: GALLERY
========================================================= */
let currentFilter = 'All';
function renderGalleryFilters() {
    const cats = ['All', ...new Set(state.gallery.map(g => g.cat))];
    document.getElementById('galleryFilters').innerHTML = cats.map(c =>
        `<button class="filter-btn ${c === currentFilter ? 'active' : ''}" onclick="setFilter('${c}')">${c}</button>`).join('');
}
function setFilter(cat) { currentFilter = cat; renderGalleryFilters(); renderMasonry(); }
function renderMasonry() {
    const items = currentFilter === 'All' ? state.gallery : state.gallery.filter(g => g.cat === currentFilter);
    document.getElementById('masonryGrid').innerHTML = items.map(g => `
    <div class="mason-item" onclick="openLightbox('${g.img}')">
      <img src="${g.img}" loading="lazy" alt="${g.title}">
      <div class="mason-cap">${g.title} · ${g.cat}</div>
    </div>`).join('');
}
function openLightbox(src) { document.getElementById('lightboxImg').src = src; document.getElementById('lightbox').classList.add('show'); }
function closeLightbox() { document.getElementById('lightbox').classList.remove('show'); }

/* =========================================================
   RENDER: VIDEOS
========================================================= */
function renderVideos() {
    document.getElementById('videoGrid').innerHTML = state.videos.map(v => `
    <div class="video-card" onclick="openVideoModal('${v.title}')">
      <div class="video-thumb" style="background-image:url('${v.thumb}')"></div>
      <div class="video-shade"></div>
      <div class="video-actions"><span class="vact">♡</span><span class="vact">↗</span></div>
      <div class="play-ring">▶</div>
      <div class="video-info"><h4>${v.title}</h4><span>${v.cat}</span></div>
    </div>`).join('');
}
function openVideoModal(title) {
    document.getElementById('videoModalTitle').textContent = title;
    document.getElementById('videoModal').classList.add('show');
}
function closeVideoModal() { document.getElementById('videoModal').classList.remove('show'); }

/* =========================================================
   RENDER: BEFORE / AFTER
========================================================= */
const baPairs = [
    { before: 'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=700&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=700&auto=format&fit=crop', name: 'Client — Rohit S.' },
    { before: 'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=700&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=700&auto=format&fit=crop', name: 'Client — Aman K.' }
];
function renderBA() {
    document.getElementById('baWrap').innerHTML = baPairs.map((p, i) => `
    <div class="ba-item reveal">
      <div class="ba-slider" id="ba${i}">
        <img class="ba-before" src="${p.before}">
        <img class="ba-after" id="baAfter${i}" src="${p.after}">
        <span class="ba-label l">Before</span><span class="ba-label r">After</span>
        <div class="ba-handle" id="baHandle${i}"></div>
      </div>
      <div class="ba-name">${p.name}</div>
    </div>`).join('');
    baPairs.forEach((p, i) => initBaSlider(i));
}
function initBaSlider(i) {
    const wrap = document.getElementById('ba' + i);
    const after = document.getElementById('baAfter' + i);
    const handle = document.getElementById('baHandle' + i);
    let dragging = false;
    function move(x) {
        const rect = wrap.getBoundingClientRect();
        let pct = ((x - rect.left) / rect.width) * 100;
        pct = Math.max(0, Math.min(100, pct));
        after.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
        handle.style.left = pct + '%';
    }
    wrap.addEventListener('mousedown', e => { dragging = true; move(e.clientX); });
    window.addEventListener('mousemove', e => { if (dragging) move(e.clientX); });
    window.addEventListener('mouseup', () => dragging = false);
    wrap.addEventListener('touchstart', e => { dragging = true; move(e.touches[0].clientX); });
    wrap.addEventListener('touchmove', e => { if (dragging) move(e.touches[0].clientX); });
    window.addEventListener('touchend', () => dragging = false);
}

/* =========================================================
   RENDER: REVIEWS
========================================================= */
function renderReviews() {
    const approved = state.reviews.filter(r => r.status === 'Approved');
    document.getElementById('reviewGrid').innerHTML = approved.map(r => `
    <div class="review-card reveal">
      <div class="review-top">
        <div class="avatar">${r.name.split(' ').map(n => n[0]).join('')}</div>
        <div><b>${r.name}</b><span>${r.date}</span></div>
      </div>
      <div class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
      <p>"${r.text}"</p>
    </div>`).join('');
    observeReveals();
}

/* =========================================================
   BOOKING FORM
========================================================= */
let apptType = 'Shop Visit';
function setApptType(btn) {
    document.querySelectorAll('.seg button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    apptType = btn.dataset.type;
    document.getElementById('homeFields').classList.toggle('open', apptType === 'Home Service');
}
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const booking = {
        id: 'BK-' + (bookingSeq++),
        name: document.getElementById('bName').value,
        phone: document.getElementById('bPhone').value,
        email: document.getElementById('bEmail').value,
        service: document.getElementById('bService').value,
        date: document.getElementById('bDate').value,
        time: document.getElementById('bTime').value,
        type: apptType,
        address: document.getElementById('bAddress').value,
        landmark: document.getElementById('bLandmark').value,
        prefTime: document.getElementById('bPrefTime').value,
        notes: document.getElementById('bNotes').value,
        status: 'Pending'
    };
    state.bookings.unshift(booking);
    showToast(`Request sent! Reference ${booking.id} — status: Pending`);
    this.reset();
    setApptType(document.querySelector('.seg button[data-type="Shop Visit"]'));
    renderAdminData();
});
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3600);
}

/* =========================================================
   ADMIN — LOGIN / NAV
========================================================= */
function openAdmin(e) { e.preventDefault(); document.getElementById('admin-root').classList.add('show'); }
function closeAdmin(e) {
    if (e) e.preventDefault();
    document.getElementById('admin-root').classList.remove('show');
    document.getElementById('adminLogin').style.display = 'flex';
    document.getElementById('adminShell').classList.remove('show');
    resetLoginFlow();
}
function resetLoginFlow() {
    document.getElementById('loginCardStep1').classList.remove('hidden-panel');
    document.getElementById('loginCardStep2').classList.add('hidden-panel');
    document.getElementById('loginForm').reset();
    document.getElementById('otpForm').reset();
    document.querySelectorAll('.otp-box').forEach(b => b.classList.remove('filled'));
}
let currentOtp = '';
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // generate a 6-digit OTP — in production this is sent via SMS/WhatsApp to the owner's verified number
    currentOtp = String(Math.floor(100000 + Math.random() * 900000));
    document.getElementById('otpDemoCode').textContent = currentOtp;
    document.getElementById('loginCardStep1').classList.add('hidden-panel');
    document.getElementById('loginCardStep2').classList.remove('hidden-panel');
    const first = document.querySelector('.otp-box[data-i="0"]');
    setTimeout(() => first.focus(), 100);
    showToast('OTP sent to the registered owner number');
});
function backToStep1(e) { e.preventDefault(); resetLoginFlow(); }

// OTP box auto-advance / backspace / paste handling
document.getElementById('otpInputs').addEventListener('input', function (e) {
    const el = e.target; if (!el.classList.contains('otp-box')) return;
    el.value = el.value.replace(/[^0-9]/g, '');
    if (el.value) el.classList.add('filled'); else el.classList.remove('filled');
    const i = parseInt(el.dataset.i);
    if (el.value && i < 5) { document.querySelector(`.otp-box[data-i="${i + 1}"]`).focus(); }
});
document.getElementById('otpInputs').addEventListener('keydown', function (e) {
    const el = e.target; if (!el.classList.contains('otp-box')) return;
    const i = parseInt(el.dataset.i);
    if (e.key === 'Backspace' && !el.value && i > 0) { document.querySelector(`.otp-box[data-i="${i - 1}"]`).focus(); }
});
document.getElementById('otpForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const entered = Array.from(document.querySelectorAll('.otp-box')).map(b => b.value).join('');
    if (entered.length === 6 && entered === currentOtp) {
        document.getElementById('adminLogin').style.display = 'none';
        document.getElementById('adminShell').classList.add('show');
        resetLoginFlow();
        renderAdminData();
        showToast('Identity verified — welcome back, Goldy');
    } else {
        document.querySelectorAll('.otp-box').forEach(b => { b.classList.add('shake'); setTimeout(() => b.classList.remove('shake'), 400); });
        showToast('Incorrect code — please try again');
    }
});
function switchTab(tab, el) {
    document.querySelectorAll('.side-link[data-tab]').forEach(l => l.classList.remove('active'));
    el.classList.add('active');
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('show'));
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.add('hidden-panel'));
    const target = document.getElementById('tab-' + tab);
    target.classList.remove('hidden-panel'); target.classList.add('show');
}

/* =========================================================
   ADMIN — RENDER
========================================================= */
function statusPill(s) { return `<span class="pill ${s}">${s}</span>`; }
function animateStatCounts() {
    document.querySelectorAll('.val[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count) || 0;
        const prefix = el.dataset.prefix || '';
        const duration = 800; const start = performance.now();
        function tick(now) {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = Math.round(target * eased);
            el.textContent = prefix + val.toLocaleString('en-IN');
            if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    });
}
function renderAdminData() {
    // stats
    const today = new Date().toISOString().slice(0, 10);
    const pending = state.bookings.filter(b => b.status === 'Pending').length;
    const completed = state.bookings.filter(b => b.status === 'Completed').length;
    const cancelled = state.bookings.filter(b => b.status === 'Rejected').length;
    const income = completed * 750;
    document.getElementById('statGrid').innerHTML = `
    <div class="stat-card"><span class="lbl">Pending Bookings</span><div class="val" data-count="${pending}">0</div><div class="delta">Awaiting your review</div></div>
    <div class="stat-card"><span class="lbl">Completed</span><div class="val" data-count="${completed}">0</div><div class="delta">All time (session)</div></div>
    <div class="stat-card"><span class="lbl">Cancelled</span><div class="val" data-count="${cancelled}">0</div><div class="delta">Rejected requests</div></div>
    <div class="stat-card"><span class="lbl">Monthly Income (est.)</span><div class="val" data-count="${income}" data-prefix="₹">₹0</div><div class="delta">Based on completed jobs</div></div>
  `;
    animateStatCounts();
    // recent (dashboard)
    document.getElementById('recentApptBody').innerHTML = state.bookings.slice(0, 5).map(b => `
    <tr><td>${b.name || '—'}</td><td>${b.service}</td><td>${b.date} ${b.time}</td><td>${b.type}</td><td>${statusPill(b.status)}</td></tr>
  `).join('') || `<tr><td colspan="5" class="empty-note">No booking requests yet — new bookings from the site will appear here instantly.</td></tr>`;

    // full appointments table
    document.getElementById('apptBody').innerHTML = state.bookings.map((b, i) => `
    <tr>
      <td>${b.name}</td><td>${b.phone}<br><span style="color:var(--muted-2);font-size:11.5px;">${b.email || ''}</span></td>
      <td>${b.service}</td><td>${b.date}<br>${b.time}</td><td>${b.type}</td><td>${statusPill(b.status)}</td>
      <td><div class="row-actions">
        <button class="mini-btn ok" onclick="setBookingStatus(${i},'Approved')">Accept</button>
        <button class="mini-btn danger" onclick="setBookingStatus(${i},'Rejected')">Reject</button>
        <button class="mini-btn" onclick="setBookingStatus(${i},'Completed')">Complete</button>
      </div></td>
    </tr>`).join('') || `<tr><td colspan="7" class="empty-note">No appointments yet.</td></tr>`;

    // home service
    const homeReqs = state.bookings.filter(b => b.type === 'Home Service');
    document.getElementById('homeBody').innerHTML = homeReqs.map((b) => {
        const idx = state.bookings.indexOf(b);
        return `<tr><td>${b.name}</td><td>${b.address || '—'}</td><td>${b.landmark || '—'}</td><td>${b.prefTime || '—'}</td><td>${statusPill(b.status)}</td>
    <td><div class="row-actions">
      <button class="mini-btn ok" onclick="setBookingStatus(${idx},'Approved')">Approve</button>
      <button class="mini-btn danger" onclick="setBookingStatus(${idx},'Rejected')">Reject</button>
    </div></td></tr>`;
    }).join('') || `<tr><td colspan="6" class="empty-note">No home service requests yet.</td></tr>`;

    // gallery
    document.getElementById('adminGalleryGrid').innerHTML = state.gallery.map((g, i) => `
    <div class="mini-img"><img src="${g.img}"><span class="del" onclick="removeGalleryItem(${i})">✕</span></div>
  `).join('') + `<div class="add-tile" onclick="document.getElementById('galleryUpload').click()">+</div>`;

    // videos
    document.getElementById('adminVideoGrid').innerHTML = state.videos.map((v, i) => `
    <div class="mini-img"><img src="${v.thumb}"><span class="del" onclick="removeVideoItem(${i})">✕</span></div>
  `).join('') + `<div class="add-tile" onclick="document.getElementById('videoUpload').click()">+</div>`;

    // services
    document.getElementById('serviceBody').innerHTML = state.services.map((s, i) => `
    <tr><td>${s.icon} ${s.name}</td>
    <td>₹<input class="inline-edit" value="${s.price}" onchange="updateServicePrice(${i}, this.value)"></td>
    <td>${s.dur}</td>
    <td><div class="row-actions"><button class="mini-btn danger" onclick="removeService(${i})">Delete</button></div></td></tr>
  `).join('');

    // reviews
    document.getElementById('reviewBody').innerHTML = state.reviews.map((r, i) => `
    <tr><td>${r.name}</td><td>${'★'.repeat(r.rating)}</td><td style="max-width:280px;">${r.text}</td><td>${statusPill(r.status)}</td>
    <td><div class="row-actions">
      <button class="mini-btn ok" onclick="setReviewStatus(${i},'Approved')">Approve</button>
      <button class="mini-btn danger" onclick="setReviewStatus(${i},'Rejected')">Hide</button>
    </div></td></tr>
  `).join('');
}

function setBookingStatus(i, status) { state.bookings[i].status = status; renderAdminData(); showToast(`Booking ${state.bookings[i].id} marked ${status}`); }
function removeGalleryItem(i) { state.gallery.splice(i, 1); renderAdminData(); renderGalleryFilters(); renderMasonry(); }
function fileToDataUrl(file, cb) { const r = new FileReader(); r.onload = () => cb(r.result); r.readAsDataURL(file); }
function uploadGalleryImage(e) {
    const file = e.target.files[0]; if (!file) return;
    fileToDataUrl(file, (dataUrl) => {
        state.gallery.push({ img: dataUrl, cat: 'Trending', title: 'New Upload' });
        renderAdminData(); renderGalleryFilters(); renderMasonry();
        showToast('Photo uploaded — now live in the Gallery section');
    });
    e.target.value = '';
}
function uploadVideoThumb(e) {
    const file = e.target.files[0]; if (!file) return;
    fileToDataUrl(file, (dataUrl) => {
        state.videos.push({ title: 'New Upload', cat: 'Trending', thumb: dataUrl });
        renderAdminData(); renderVideos();
        showToast('Uploaded — now live in the Video Gallery section');
    });
    e.target.value = '';
}
function uploadHeroImage(e) {
    const file = e.target.files[0]; if (!file) return;
    fileToDataUrl(file, (dataUrl) => {
        document.getElementById('heroPreview').src = dataUrl;
        document.getElementById('hero').style.backgroundImage =
            `radial-gradient(ellipse 900px 600px at 78% 18%, rgba(200,162,77,0.14), transparent 60%), linear-gradient(180deg, rgba(10,10,11,.55), rgba(10,10,11,.92)), url('${dataUrl}')`;
        showToast('Hero photo updated on the live site');
    });
    e.target.value = '';
}
function uploadAboutImage(e) {
    const file = e.target.files[0]; if (!file) return;
    fileToDataUrl(file, (dataUrl) => {
        document.getElementById('aboutPreview').src = dataUrl;
        document.querySelector('.about-photo img').src = dataUrl;
        showToast('About photo updated on the live site');
    });
    e.target.value = '';
}
function removeVideoItem(i) { state.videos.splice(i, 1); renderAdminData(); renderVideos(); }
function updateServicePrice(i, val) { state.services[i].price = parseInt(val) || 0; renderServices(); }
function removeService(i) { state.services.splice(i, 1); renderAdminData(); renderServices(); }
function setReviewStatus(i, status) { state.reviews[i].status = status; renderAdminData(); renderReviews(); }

/* =========================================================
   SETTINGS — publish edits to the live customer site
========================================================= */
document.getElementById('settingsForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const v = id => document.getElementById(id).value.trim();
    const businessName = v('setBusinessName');
    const barberName = v('setBarberName');
    const estYear = v('setEstYear');
    const expYears = v('setExpYears');
    const phone = v('setPhone');
    const whatsapp = v('setWhatsapp');
    const hours = v('setHours');
    const address = v('setAddress');

    // Nav + footer business name
    document.querySelector('#nav .logo').innerHTML = `<b>✂</b>&nbsp;${businessName.toUpperCase()}`;
    document.querySelector('footer .logo').innerHTML = `<b>✂</b>&nbsp;${businessName.toUpperCase()}`;
    document.title = businessName + ' — Luxury Grooming';

    // Hero eyebrow (est year)
    document.getElementById('heroEyebrow').textContent = `Est. ${estYear} — Private Grooming Studio`;

    // About section
    document.getElementById('aboutYears').textContent = expYears + '+';
    document.getElementById('aboutName').innerHTML = `Meet <span class="stroke">${barberName}<svg viewBox="0 0 200 14"><path d="M2 8c40-8 158-8 196 2"/></svg></span>`;
    document.getElementById('aboutIntro').textContent =
        `Trained in London and Tokyo, ${barberName} has spent ${expYears} years refining a single craft — the men's haircut, done properly. No conveyor belt, no rush. Every appointment is a private, 45–60 minute session built around your head shape, hair type, and the way you actually live.`;

    // Address + hours everywhere
    document.getElementById('bookingAddress').textContent = address;
    document.getElementById('bookingHours').textContent = hours;
    document.getElementById('contactAddress').textContent = address;
    document.getElementById('hoursStrip1').innerHTML = `<b>Hours</b> ${hours}`;

    // Contact phone / whatsapp links
    document.querySelectorAll('a[href^="tel:"]').forEach(a => { a.href = 'tel:+' + phone.replace(/[^0-9]/g, ''); if (a.querySelector('span')) a.querySelector('span').textContent = phone; });
    document.querySelectorAll('a[href^="https://wa.me/"]').forEach(a => { a.href = 'https://wa.me/' + whatsapp; });

    // Social links
    const instagram = v('setInstagram'), facebook = v('setFacebook'), youtube = v('setYoutube'), tiktok = v('setTiktok');
    document.querySelectorAll('a[href*="instagram.com"]').forEach(a => a.href = instagram);
    document.querySelectorAll('a[href*="facebook.com"]').forEach(a => a.href = facebook);
    document.querySelectorAll('a[href*="youtube.com"]').forEach(a => a.href = youtube);
    document.querySelectorAll('a[href*="tiktok.com"]').forEach(a => a.href = tiktok);

    // Floating widget visibility
    document.getElementById('fabWrap').style.display = document.getElementById('setShowFab').checked ? 'flex' : 'none';

    document.getElementById('settingsSavedNote').textContent = '✓ Published to live site';
    setTimeout(() => document.getElementById('settingsSavedNote').textContent = '', 3000);
    showToast('Website settings saved and published');
});

/* =========================================================
   INIT
========================================================= */
renderServices();
renderGalleryFilters();
renderMasonry();
renderVideos();
renderBA();
renderReviews();
observeReveals();