/* =========================================================
   DEMO STATE
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
    bookings: [
        { id: 'BK-1041', name: 'Arjun Mehta', phone: '+91 98111 22334', email: 'arjun@example.com', service: 'Skin Fade', date: '2026-07-18', time: '17:30', type: 'Shop Visit', status: 'Pending' },
        { id: 'BK-1040', name: 'Rohan Kapoor', phone: '+91 98222 33445', email: 'rohan@example.com', service: 'Premium Grooming', date: '2026-07-17', time: '11:00', type: 'Home Service', address: 'H.No 214, Sector 71, Mohali', landmark: 'Near City Park', prefTime: 'Evening after 6 PM', status: 'Approved' },
        { id: 'BK-1039', name: 'Karan Bhatia', phone: '+91 98333 44556', email: 'karan@example.com', service: 'Beard Sculpting', date: '2026-07-15', time: '14:00', type: 'Shop Visit', status: 'Completed' },
        { id: 'BK-1038', name: 'Vikram Singh', phone: '+91 98444 55667', email: 'vikram@example.com', service: 'Hair Colour', date: '2026-07-14', time: '10:30', type: 'Shop Visit', status: 'Rejected' },
    ]
};

/* =========================================================
   INIT — enforce correct state on page load
   Show ONLY the login screen; hide the dashboard completely
========================================================= */
function boot() {
    // Always start on the login screen — never show dashboard without auth
    document.getElementById('adminLogin').style.display = 'flex';
    document.getElementById('adminShell').style.display = 'none';

    // Make sure step 1 (email/pass) is visible, step 2 (OTP) is hidden
    document.getElementById('loginCardStep1').style.display = 'block';
    document.getElementById('loginCardStep2').style.display = 'none';

    // Clear any leftover form values
    document.getElementById('loginForm').reset();
}

/* =========================================================
   LOGIN FLOW
========================================================= */
function resetLoginFlow() {
    document.getElementById('loginCardStep1').style.display = 'block';
    document.getElementById('loginCardStep2').style.display = 'none';
    document.getElementById('loginForm').reset();
    try { document.getElementById('otpForm').reset(); } catch(e) {}
    document.querySelectorAll('.otp-box').forEach(b => {
        b.value = '';
        b.classList.remove('filled');
    });
}

let currentOtp = '';

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Generate 6-digit OTP (in production: sent via SMS/WhatsApp to owner's verified number)
    currentOtp = String(Math.floor(100000 + Math.random() * 900000));
    document.getElementById('otpDemoCode').textContent = currentOtp;

    document.getElementById('loginCardStep1').style.display = 'none';
    document.getElementById('loginCardStep2').style.display = 'block';

    setTimeout(() => {
        const first = document.querySelector('.otp-box[data-i="0"]');
        if (first) first.focus();
    }, 100);

    showToast('OTP sent to the registered owner number');
});

function backToStep1(e) {
    e.preventDefault();
    resetLoginFlow();
}

// OTP box: auto-advance on input
document.getElementById('otpInputs').addEventListener('input', function(e) {
    const el = e.target;
    if (!el.classList.contains('otp-box')) return;
    el.value = el.value.replace(/[^0-9]/g, '');
    if (el.value) el.classList.add('filled');
    else el.classList.remove('filled');
    const i = parseInt(el.dataset.i);
    if (el.value && i < 5) {
        document.querySelector(`.otp-box[data-i="${i + 1}"]`).focus();
    }
});

// OTP box: backspace goes to previous
document.getElementById('otpInputs').addEventListener('keydown', function(e) {
    const el = e.target;
    if (!el.classList.contains('otp-box')) return;
    const i = parseInt(el.dataset.i);
    if (e.key === 'Backspace' && !el.value && i > 0) {
        document.querySelector(`.otp-box[data-i="${i - 1}"]`).focus();
    }
});

// OTP submit — verify and enter dashboard
document.getElementById('otpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const entered = Array.from(document.querySelectorAll('.otp-box')).map(b => b.value).join('');

    if (entered.length === 6 && entered === currentOtp) {
        // ✅ Correct — hide login, show dashboard
        document.getElementById('adminLogin').style.display = 'none';
        document.getElementById('adminShell').style.display = 'grid';

        resetLoginFlow();
        renderAdminData();
        // Make sure dashboard tab is active on fresh login
        switchTab('dash', document.querySelector('.side-link[data-tab="dash"]'));
        showToast('Identity verified — welcome back, Goldy');
    } else {
        // ❌ Wrong code — shake all boxes
        document.querySelectorAll('.otp-box').forEach(b => {
            b.classList.add('shake');
            setTimeout(() => b.classList.remove('shake'), 400);
        });
        showToast('Incorrect code — please try again');
    }
});

/* =========================================================
   LOGOUT
========================================================= */
function logoutDemo(e) {
    e.preventDefault();
    document.getElementById('adminShell').style.display = 'none';
    document.getElementById('adminLogin').style.display = 'flex';
    resetLoginFlow();
}

/* =========================================================
   TAB SWITCHING
========================================================= */
function switchTab(tab, el) {
    document.querySelectorAll('.side-link[data-tab]').forEach(l => l.classList.remove('active'));
    if (el) el.classList.add('active');
    document.querySelectorAll('.admin-tab').forEach(t => {
        t.classList.remove('show');
        t.classList.add('hidden-panel');
    });
    const target = document.getElementById('tab-' + tab);
    if (target) {
        target.classList.remove('hidden-panel');
        target.classList.add('show');
    }
}

function switchSettingsSection(section, el) {
    document.querySelectorAll('.settings-nav-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    document.querySelectorAll('.settings-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('settings-' + section).classList.add('active');
}

/* =========================================================
   RENDER — ADMIN DATA
========================================================= */
function statusPill(s) {
    return `<span class="pill ${s}">${s}</span>`;
}

function animateStatCounts() {
    document.querySelectorAll('.val[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count) || 0;
        const prefix = el.dataset.prefix || '';
        const duration = 800;
        const start = performance.now();
        function tick(now) {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = prefix + Math.round(target * eased).toLocaleString('en-IN');
            if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    });
}

function renderAdminData() {
    const pending   = state.bookings.filter(b => b.status === 'Pending').length;
    const approved  = state.bookings.filter(b => b.status === 'Approved').length;
    const completed = state.bookings.filter(b => b.status === 'Completed').length;
    const rejected  = state.bookings.filter(b => b.status === 'Rejected').length;
    const income    = completed * 750;

    // Stat cards
    document.getElementById('statGrid').innerHTML = `
        <div class="stat-card"><span class="lbl">Pending Bookings</span><div class="val" data-count="${pending}">0</div><div class="delta">Awaiting your review</div></div>
        <div class="stat-card"><span class="lbl">Approved</span><div class="val" data-count="${approved}">0</div><div class="delta">Confirmed upcoming</div></div>
        <div class="stat-card"><span class="lbl">Completed</span><div class="val" data-count="${completed}">0</div><div class="delta">All time (session)</div></div>
        <div class="stat-card"><span class="lbl">Monthly Income (est.)</span><div class="val" data-count="${income}" data-prefix="₹">₹0</div><div class="delta">Based on completed jobs</div></div>
    `;
    animateStatCounts();

    // Recent bookings (dashboard)
    document.getElementById('recentApptBody').innerHTML = state.bookings.slice(0, 5).map(b => `
        <tr>
            <td>${b.name || '—'}</td>
            <td>${b.service}</td>
            <td>${b.date} ${b.time}</td>
            <td>${b.type}</td>
            <td>${statusPill(b.status)}</td>
        </tr>
    `).join('') || `<tr><td colspan="5" class="empty-note">No booking requests yet — new bookings from the site will appear here instantly.</td></tr>`;

    // Activity feed
    const activity = [
        ...state.bookings.map(b => ({ text: `${b.name} — ${b.service} (${b.type}) marked ${b.status}`, when: b.date })),
        ...state.reviews.filter(r => r.status === 'Pending').map(r => ({ text: `New review from ${r.name} awaiting approval`, when: r.date || '—' }))
    ];
    document.getElementById('activityFeed').innerHTML = activity.map(a => `
        <div class="activity-item">
            <span class="activity-dot"></span>
            <div><div>${a.text}</div><div class="subtle">${a.when}</div></div>
        </div>
    `).join('') || `<div class="empty-note">No recent activity yet.</div>`;

    // Full appointments table
    document.getElementById('apptBody').innerHTML = state.bookings.map((b, i) => `
        <tr>
            <td>${b.name}</td>
            <td>${b.phone}<br><span style="color:var(--muted-2);font-size:11.5px;">${b.email || ''}</span></td>
            <td>${b.service}</td>
            <td>${b.date}<br>${b.time}</td>
            <td>${b.type}</td>
            <td>${statusPill(b.status)}</td>
            <td>
                <div class="row-actions">
                    <button class="mini-btn ok"     onclick="setBookingStatus(${i},'Approved')">Accept</button>
                    <button class="mini-btn danger"  onclick="setBookingStatus(${i},'Rejected')">Reject</button>
                    <button class="mini-btn"         onclick="setBookingStatus(${i},'Completed')">Complete</button>
                </div>
            </td>
        </tr>
    `).join('') || `<tr><td colspan="7" class="empty-note">No appointments yet.</td></tr>`;

    // Home service tab
    const homeReqs = state.bookings.filter(b => b.type === 'Home Service');
    document.getElementById('homeBody').innerHTML = homeReqs.map(b => {
        const idx = state.bookings.indexOf(b);
        return `
            <tr>
                <td>${b.name}</td>
                <td>${b.address || '—'}</td>
                <td>${b.landmark || '—'}</td>
                <td>${b.prefTime || '—'}</td>
                <td>${statusPill(b.status)}</td>
                <td>
                    <div class="row-actions">
                        <button class="mini-btn ok"    onclick="setBookingStatus(${idx},'Approved')">Approve</button>
                        <button class="mini-btn danger" onclick="setBookingStatus(${idx},'Rejected')">Reject</button>
                    </div>
                </td>
            </tr>
        `;
    }).join('') || `<tr><td colspan="6" class="empty-note">No home service requests yet.</td></tr>`;

    // Gallery
    document.getElementById('adminGalleryGrid').innerHTML =
        state.gallery.map((g, i) => `
            <div class="mini-img">
                <img src="${g.img}" alt="${g.title}">
                <span class="del" onclick="removeGalleryItem(${i})">✕</span>
            </div>
        `).join('') +
        `<div class="add-tile" onclick="document.getElementById('galleryUpload').click()">+</div>`;

    // Videos
    document.getElementById('adminVideoGrid').innerHTML =
        state.videos.map((v, i) => `
            <div class="mini-img">
                <img src="${v.thumb}" alt="${v.title}">
                <span class="del" onclick="removeVideoItem(${i})">✕</span>
            </div>
        `).join('') +
        `<div class="add-tile" onclick="document.getElementById('videoUpload').click()">+</div>`;

    // Services
    document.getElementById('serviceBody').innerHTML = state.services.map((s, i) => `
        <tr>
            <td>${s.icon} ${s.name}</td>
            <td>₹<input class="inline-edit" value="${s.price}" onchange="updateServicePrice(${i}, this.value)"></td>
            <td>${s.dur}</td>
            <td>
                <div class="row-actions">
                    <button class="mini-btn danger" onclick="removeService(${i})">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');

    // Reviews
    document.getElementById('reviewBody').innerHTML = state.reviews.map((r, i) => `
        <tr>
            <td>${r.name}</td>
            <td>${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</td>
            <td style="max-width:280px;">${r.text}</td>
            <td>${statusPill(r.status)}</td>
            <td>
                <div class="row-actions">
                    <button class="mini-btn ok"    onclick="setReviewStatus(${i},'Approved')">Approve</button>
                    <button class="mini-btn danger" onclick="setReviewStatus(${i},'Rejected')">Hide</button>
                </div>
            </td>
        </tr>
    `).join('');
}

/* =========================================================
   ADMIN ACTIONS
========================================================= */
function setBookingStatus(i, status) {
    state.bookings[i].status = status;
    renderAdminData();
    showToast(`Booking ${state.bookings[i].id} marked ${status}`);
}

function removeGalleryItem(i) {
    state.gallery.splice(i, 1);
    renderAdminData();
    showToast('Photo removed from gallery');
}

function removeVideoItem(i) {
    state.videos.splice(i, 1);
    renderAdminData();
    showToast('Video removed');
}

function updateServicePrice(i, val) {
    state.services[i].price = parseInt(val) || 0;
    showToast(`${state.services[i].name} price updated to ₹${state.services[i].price}`);
}

function removeService(i) {
    const name = state.services[i].name;
    state.services.splice(i, 1);
    renderAdminData();
    showToast(`${name} removed from menu`);
}

function setReviewStatus(i, status) {
    state.reviews[i].status = status;
    renderAdminData();
    showToast(`Review by ${state.reviews[i].name} ${status.toLowerCase()}`);
}

function fileToDataUrl(file, cb) {
    const r = new FileReader();
    r.onload = () => cb(r.result);
    r.readAsDataURL(file);
}

function uploadGalleryImage(e) {
    const file = e.target.files[0]; if (!file) return;
    fileToDataUrl(file, dataUrl => {
        state.gallery.push({ img: dataUrl, cat: 'Trending', title: 'New Upload' });
        renderAdminData();
        showToast('Photo uploaded — would go live in the Gallery section');
    });
    e.target.value = '';
}

function uploadVideoThumb(e) {
    const file = e.target.files[0]; if (!file) return;
    fileToDataUrl(file, dataUrl => {
        state.videos.push({ title: 'New Upload', cat: 'Trending', thumb: dataUrl });
        renderAdminData();
        showToast('Uploaded — would go live in the Video Gallery section');
    });
    e.target.value = '';
}

function uploadHeroImage(e) {
    const file = e.target.files[0]; if (!file) return;
    fileToDataUrl(file, dataUrl => {
        document.getElementById('heroPreview').src = dataUrl;
        showToast('Hero photo updated (would publish to the live site)');
    });
    e.target.value = '';
}

function uploadAboutImage(e) {
    const file = e.target.files[0]; if (!file) return;
    fileToDataUrl(file, dataUrl => {
        document.getElementById('aboutPreview').src = dataUrl;
        showToast('About photo updated (would publish to the live site)');
    });
    e.target.value = '';
}

/* =========================================================
   SETTINGS FORM
========================================================= */
document.getElementById('settingsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('settingsSavedNote').textContent = '✓ Published to live site';
    setTimeout(() => document.getElementById('settingsSavedNote').textContent = '', 3000);
    showToast('Website settings saved and published');
});

/* =========================================================
   TOAST
========================================================= */
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._hideTimer);
    t._hideTimer = setTimeout(() => t.classList.remove('show'), 3600);
}

/* =========================================================
   START — boot() enforces login-first, nothing else runs
========================================================= */
boot();