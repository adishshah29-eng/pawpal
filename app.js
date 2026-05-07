// ── FIREBASE CONFIG ──────────────────────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyBrOZqL7ubmrgU9psTooLUVr_yF4BFCwyI",
  authDomain: "pawpal-ddb65.firebaseapp.com",
  projectId: "pawpal-ddb65",
  storageBucket: "pawpal-ddb65.firebasestorage.app",
  messagingSenderId: "159718347276",
  appId: "1:159718347276:web:9a3b9dbecbe32253849429",
  measurementId: "G-5S9ZD1S5LB"
};

// ── FIREBASE INIT ─────────────────────────────────────────────────────────────
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// ── SEED DATA ─────────────────────────────────────────────────────────────────
const SEED_PETS = [
  { name: 'Luna', breed: 'Golden Retriever', age: '2 years', gender: 'Female', type: 'Dog', description: 'Luna is gentle, playful, and loves long park walks. She gets along well with children and enjoys cuddle time.', tags: ['Friendly', 'House-trained', 'Smart'], imageUrl: 'https://www.bing.com/th/id/OIP.zjSc8RLM4gcH_Qv42Q0ABwHaJX?w=193&h=244&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', caregiver: { name: 'Raveesh Malik', phone: '+91 7718239669', address: 'New Delhi, Delhi, India' }, postedOn: '3 May, 2026' },
  { name: 'Milo', breed: 'Tabby Cat', age: '1 year', gender: 'Male', type: 'Cat', description: 'Milo is curious and affectionate. He adores quiet corners and warm laps, and he is already litter box trained.', tags: ['Gentle', 'Playful', 'Calm'], imageUrl: 'https://petprosservices.com/wp-content/uploads/2017/01/picture008-e1484071226607.jpg', caregiver: { name: 'Nirmala Pramanick', phone: '+91 9876543210', address: 'Santipur, West Bengal, India' }, postedOn: '30 Apr, 2026' },
  { name: 'Nova', breed: 'French Bulldog', age: '3 years', gender: 'Female', type: 'Dog', description: 'Nova is cheerful with a big personality. She loves toys, social walks, and will be a loyal apartment companion.', tags: ['Affectionate', 'Low energy', 'Sweet'], imageUrl: 'https://cdn.britannica.com/44/233844-050-A0F9F39C/French-bulldog.jpg', caregiver: { name: 'Kamal Hasan', phone: '+91 9237748812', address: 'Pune, Maharashtra, India' }, postedOn: '27 Apr, 2026' },
  { name: 'Cleo', breed: 'Siamese', age: '2 years', gender: 'Female', type: 'Cat', description: 'Cleo is bright and vocal. She enjoys interactive play and will bond quickly with a patient and loving family.', tags: ['Curious', 'Vocal', 'Loving'], imageUrl: 'https://preview.redd.it/1st-time-owning-a-siamese-shes-so-full-of-energy-finally-v0-mpl9xmvrez4f1.jpeg?width=640&crop=smart&auto=webp&s=129072013ad3b3efb79282661a7a879734c31eb1', caregiver: { name: 'Madiha Shaikh', phone: '+91 7977493220', address: 'Mumbai, Maharashtra' }, postedOn: '25 Apr, 2026' },
  { name: 'Toby', breed: 'Beagle', age: '4 years', gender: 'Male', type: 'Dog', description: 'Toby is upbeat and social. He loves sniffing new trails and would make a wonderful companion for active families.', tags: ['Energetic', 'Sociable', 'Loyal'], imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwiDCloLv-gPHJ3SgdUmH0O72CI15qE4yMuA&s', caregiver: { name: 'Surekha', phone: '+91 7346690120', address: 'New Delhi, India' }, postedOn: '24 Apr, 2026' },
  { name: 'Nala', breed: 'Maine Coon', age: '3 years', gender: 'Female', type: 'Cat', description: 'Nala is calm and gentle with a luxurious coat. She appreciates cozy spaces and gentle attention from her humans.', tags: ['Gentle', 'Fluffy', 'Sweet'], imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnbQB9CYzWElU2kgEPNtBel50VbOA1bnvrQ&s', caregiver: { name: 'Sanya', phone: '+91 9834429170', address: 'Bangalore, Karnataka, India' }, postedOn: '22 Apr, 2026' },
  { name: 'Max', breed: 'German Shepherd', age: '5 years', gender: 'Male', type: 'Dog', description: 'Max is a loyal and protective companion. He is well-trained, obedient, and loves outdoor activities with his family.', tags: ['Loyal', 'Trained', 'Active'], imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDub5CUsqCwnxgYnma-VGb7iWSfQdBlcyLTA&s', caregiver: { name: 'Kaira Singh', phone: '+91 7867742239', address: 'Bangalore, Karnataka, India' }, postedOn: '20 Apr, 2026' },
  { name: 'Whiskers', breed: 'Persian Cat', age: '4 years', gender: 'Male', type: 'Cat', description: 'Whiskers is a fluffy and affectionate cat who enjoys being pampered. He loves attention and cozy blankets.', tags: ['Fluffy', 'Affectionate', 'Gentle'], imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWfIphSt2-ie-LX8asqRXcYb5gvR4vO5ooQ&s', caregiver: { name: 'Khalid Khan', phone: '+91 9875263891', address: 'Mumbai, Maharashtra' }, postedOn: '18 Apr, 2026' },
  { name: 'Buddy', breed: 'Labrador Retriever', age: '3 years', gender: 'Male', type: 'Dog', description: 'Buddy is a friendly and energetic labrador who loves to fetch and swim. Perfect for families with active lifestyles.', tags: ['Friendly', 'Energetic', 'Playful'], imageUrl: 'https://thumbs.dreamstime.com/b/dog-waiting-toy-labrador-yellow-retriever-stands-pavement-near-looks-towards-its-owner-him-to-come-play-399814502.jpg', caregiver: { name: 'Prakash', phone: '+91 9842374102', address: 'Bangalore, Karnataka' }, postedOn: '15 Apr, 2026' },
  { name: 'Bella', breed: 'Bengal Cat', age: '3 years', gender: 'Female', type: 'Cat', description: 'Bella is a stunning Bengal with a vibrant personality. She is playful, intelligent, and loves interactive toys.', tags: ['Playful', 'Intelligent', 'Beautiful'], imageUrl: 'https://pet-health-content-media.chewy.com/wp-content/uploads/2025/08/22025009/bengal-cat-sitting.jpeg', caregiver: { name: 'Falak Naaz', phone: '+91 9165572291', address: 'Mumbai, Maharashtra' }, postedOn: '12 Apr, 2026' },
  { name: 'Shadow', breed: 'Russian Blue Cat', age: '5 years', gender: 'Male', type: 'Cat', description: 'Shadow is an elegant and quiet cat with striking green eyes. He prefers calm environments and gentle handling.', tags: ['Elegant', 'Quiet', 'Calm'], imageUrl: 'https://i.shgcdn.com/d31ad229-48df-4cd9-897e-96bf0a3f36df/-/format/auto/-/preview/3000x3000/-/quality/lighter/', caregiver: { name: 'Shivani Shetty', phone: '+91 7853629901', address: 'Hyderabad, Telangana' }, postedOn: '10 Apr, 2026' },
  { name: 'Daisy', breed: 'Poodle Mix', age: '4 years', gender: 'Female', type: 'Dog', description: 'Daisy is a small and adorable poodle mix. She is hypoallergenic, friendly, and perfect for apartment living.', tags: ['Small', 'Friendly', 'Hypoallergenic'], imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pJxuRHhOGzk5aCTblfXwM7R_UjfvK2X_fg&s', caregiver: { name: 'Umar', phone: '+91 9825427103', address: 'Pune, Maharashtra' }, postedOn: '8 Apr, 2026' }
];

// ── STATE ─────────────────────────────────────────────────────────────────────
let allPets = [];
let activeFilter = 'All';
let selectedPet = null;
let currentUser = null;
let isSignup = false;

// ── DOM REFS ──────────────────────────────────────────────────────────────────
const petGrid = document.getElementById('petGrid');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('searchInput');
const statCount = document.getElementById('statCount');
const authNavBtn = document.getElementById('authNavBtn');
const userGreeting = document.getElementById('userGreeting');
const toastEl = document.getElementById('toast');
const authModal = document.getElementById('authModal');
const detailsModal = document.getElementById('detailsModal');
const addPetForm = document.getElementById('addPetForm');
const authForm = document.getElementById('authForm');
const modalTitle = document.getElementById('modalTitle');
const authSubmit = document.getElementById('authSubmit');
const authToggleCtr = document.getElementById('authToggleCtr');
const homeExtras = document.querySelectorAll('.home-extra');
const navBtns = document.querySelectorAll('.nav-btn');
const filterBtns = document.querySelectorAll('.filter-btn');

// ── UTILITIES ─────────────────────────────────────────────────────────────────
function todayStr() {
  return new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toastEl.classList.remove('show'), 3000);
}

function fallbackImg(name, type) {
  // Swapped to soft blues/oranges to match the clean theme
  const c = type === 'Cat' ? ['%23DBEAFE', '%23EFF6FF'] : ['%23FFEDD5', '%23FFF7ED'];
  const lbl = encodeURIComponent((name || 'Pet').slice(0, 2).toUpperCase());
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 300'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='${c[0]}'/%3E%3Cstop offset='1' stop-color='${c[1]}'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='420' height='300' rx='16' fill='url(%23g)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Inter,sans-serif' font-size='100' fill='%236B7280' font-weight='700'%3E${lbl}%3C/text%3E%3C/svg%3E`;
}

// ── VIEW ROUTING ──────────────────────────────────────────────────────────────
function showView(view) {
  document.querySelectorAll('.page').forEach(p => p.classList.toggle('active', p.id === `view-${view}`));
  navBtns.forEach(b => b.classList.toggle('active', b.dataset.view === view));
  homeExtras.forEach(el => el.classList.toggle('hidden', view !== 'home'));
  if (view === 'add-pet') addPetForm.reset();
}

// ── FIRESTORE: load pets ──────────────────────────────────────────────────────
async function loadPets() {
  try {
    const snap = await db.collection('pets').orderBy('createdAt', 'desc').get();
    if (snap.empty) {
      await seedPets();
      return loadPets();
    }
    allPets = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    updateBadges();
    renderCards();
  } catch (err) {
    console.error('Load pets error:', err);
    // Fallback: use seed data locally if Firebase not configured
    if (allPets.length === 0) {
      allPets = SEED_PETS.map((p, i) => ({ id: String(i + 1), ...p }));
      updateBadges();
      renderCards();
    }
    showToast('⚠️ Using local data. Configure Firebase to enable cloud storage.');
  }
}

async function seedPets() {
  const batch = db.batch();
  SEED_PETS.forEach(pet => {
    const ref = db.collection('pets').doc();
    batch.set(ref, { ...pet, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
  });
  await batch.commit();
}

// ── RENDER CARDS ──────────────────────────────────────────────────────────────
function getFiltered() {
  const q = searchInput.value.trim().toLowerCase();
  return allPets.filter(p => {
    const typeMatch = activeFilter === 'All' || p.type === activeFilter;
    const textMatch = !q || p.name?.toLowerCase().includes(q) || p.breed?.toLowerCase().includes(q);
    return typeMatch && textMatch;
  });
}

function updateBadges() {
  document.getElementById('badge-All').textContent = allPets.length;
  document.getElementById('badge-Dog').textContent = allPets.filter(p => p.type === 'Dog').length;
  document.getElementById('badge-Cat').textContent = allPets.filter(p => p.type === 'Cat').length;
  if (statCount) statCount.textContent = `${allPets.length} pets`;
}

function renderCards() {
  const items = getFiltered();
  petGrid.innerHTML = '';
  if (!items.length) { noResults.classList.remove('hidden'); return; }
  noResults.classList.add('hidden');
  items.forEach(pet => {
    const card = document.createElement('article');
    card.className = 'pet-card';
    const img = pet.imageUrl || fallbackImg(pet.name, pet.type);
    card.innerHTML = `
      <img src="${img}" alt="${pet.name}" onerror="this.src='${fallbackImg(pet.name, pet.type)}'">
      <div class="card-body">
        <div class="posted-date">📅 ${pet.postedOn || todayStr()}</div>
        <div class="pet-meta">
          <span class="pet-meta-tag">${pet.type}</span>
          <span class="pet-meta-tag accent">${pet.gender}</span>
          <span class="pet-meta-tag">${pet.age}</span>
        </div>
        <h2>${pet.name || 'Unnamed Pet'}</h2>
        <p>${(pet.description || '').slice(0, 110)}${pet.description?.length > 110 ? '…' : ''}</p>
        <button class="card-btn" data-id="${pet.id}">View Details</button>
      </div>`;
    petGrid.appendChild(card);
  });
}

// ── DETAILS MODAL ─────────────────────────────────────────────────────────────
function openDetails(petId) {
  const pet = allPets.find(p => p.id === petId);
  if (!pet) return;
  selectedPet = pet;

  document.getElementById('dm-name').textContent = pet.name || 'Unnamed Pet';
  const img = document.getElementById('dm-img');
  img.src = pet.imageUrl || fallbackImg(pet.name, pet.type);
  img.onerror = () => { img.src = fallbackImg(pet.name, pet.type); };
  document.getElementById('dm-posted').textContent = pet.postedOn || todayStr();
  document.getElementById('dm-tags').innerHTML = (pet.tags || []).map(t => `<span class="tag-pill">${t}</span>`).join('');
  document.getElementById('dm-desc').textContent = pet.description || '';
  document.getElementById('dm-age').textContent = pet.age || '—';
  document.getElementById('dm-gender').textContent = pet.gender || '—';
  document.getElementById('dm-breed').textContent = pet.breed || '—';
  document.getElementById('dm-loc').textContent = pet.location || pet.caregiver?.address || '—';

  const cg = pet.caregiver || {};
  document.getElementById('dm-cg-name').textContent = cg.name || '—';
  document.getElementById('dm-cg-address').textContent = cg.address || '—';
  const phoneSpan = document.getElementById('dm-cg-phone');
  const showNumBtn = document.getElementById('showNumBtn');
  phoneSpan.textContent = cg.phone || '—';
  phoneSpan.style.display = 'none';
  showNumBtn.style.display = 'inline';

  detailsModal.classList.remove('hidden');
}

// ── AUTH ──────────────────────────────────────────────────────────────────────
function updateAuthUI() {
  if (currentUser) {
    authNavBtn.textContent = 'Logout';
    authNavBtn.classList.add('out');
    const name = currentUser.displayName || currentUser.email.split('@')[0];
    userGreeting.textContent = `Hi, ${name} 👋`;
    userGreeting.classList.add('visible');
  } else {
    authNavBtn.textContent = 'Login';
    authNavBtn.classList.remove('out');
    userGreeting.classList.remove('visible');
  }
}

function openAuthModal(signup = false) {
  isSignup = signup;
  syncAuthModal();
  document.getElementById('authEmail').value = '';
  document.getElementById('authPassword').value = '';
  document.getElementById('authFullName').value = '';
  document.getElementById('authMobile').value = '';
  authModal.classList.remove('hidden');
}

function syncAuthModal() {
  modalTitle.textContent = isSignup ? 'Create Account' : 'Welcome Back';
  authSubmit.textContent = isSignup ? 'Sign Up' : 'Login';
  authToggleCtr.innerHTML = isSignup
    ? `Already have an account? <a href="#" id="toggleAuthLink">Login</a>`
    : `Don't have an account? <a href="#" id="toggleAuthLink">Sign up</a>`;
  document.getElementById('nameField').style.display = isSignup ? 'grid' : 'none';
  document.getElementById('mobileField').style.display = isSignup ? 'grid' : 'none';
}

async function handleAuth(e) {
  e.preventDefault();
  const email = document.getElementById('authEmail').value.trim();
  const password = document.getElementById('authPassword').value.trim();
  if (!email || !password) { showToast('Please fill in all fields.'); return; }

  authSubmit.disabled = true;
  authSubmit.innerHTML = '<span class="spinner"></span>Please wait…';

  try {
    if (isSignup) {
      const fullName = document.getElementById('authFullName').value.trim();
      const mobile = document.getElementById('authMobile').value.trim();
      if (!fullName || !mobile) { showToast('Please fill in all fields.'); return; }
      const cred = await auth.createUserWithEmailAndPassword(email, password);
      await cred.user.updateProfile({ displayName: fullName });
      await db.collection('users').doc(cred.user.uid).set({ name: fullName, mobile, email, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
      showToast('🎉 Account created! Welcome to PawPal!');
    } else {
      await auth.signInWithEmailAndPassword(email, password);
      showToast('✅ Logged in successfully!');
    }
    authModal.classList.add('hidden');
    authForm.reset();
  } catch (err) {
    const msgs = {
      'auth/email-already-in-use': 'This email is already registered.',
      'auth/invalid-email': 'Invalid email address.',
      'auth/weak-password': 'Password must be at least 6 characters.',
      'auth/user-not-found': 'No account found with this email.',
      'auth/wrong-password': 'Incorrect password.',
      'auth/invalid-credential': 'Invalid email or password.'
    };
    showToast(msgs[err.code] || err.message);
  } finally {
    authSubmit.disabled = false;
    authSubmit.textContent = isSignup ? 'Sign Up' : 'Login';
  }
}

// ── ADD PET ───────────────────────────────────────────────────────────────────
async function handleAddPet(e) {
  e.preventDefault();
  if (!currentUser) { showToast('Please login first to list a pet.'); openAuthModal(); return; }

  const name = document.getElementById('petName').value.trim();
  const type = document.getElementById('petType').value;
  const breed = document.getElementById('petBreed').value.trim();
  const age = document.getElementById('petAge').value.trim();
  const gender = document.getElementById('petGender').value;
  const location = document.getElementById('petLocation').value.trim();
  const desc = document.getElementById('petDescription').value.trim();
  const cgName = document.getElementById('caregiverName').value.trim();
  const cgPhone = document.getElementById('caregiverPhone').value.trim();
  const cgAddr = document.getElementById('caregiverAddress').value.trim();
  const imgFile = document.getElementById('petImageFile').files[0];

  if (!type || !age || !gender || !desc || !cgName || !cgPhone || !cgAddr) {
    showToast('Please complete all required fields.'); return;
  }

  const submitBtn = addPetForm.querySelector('[type=submit]');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="spinner"></span>Processing…';

  try {
    let imageUrl = '';
    // Base64 encode the image — no Firebase Storage needed (stays on free plan)
    if (imgFile) {
      imageUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(imgFile);
      });
    }

    const petData = {
      name: name || 'Unnamed Pet', type, breed, age, gender,
      location: location || cgAddr, description: desc,
      tags: ['New Listing'],
      imageUrl: imageUrl || fallbackImg(name, type),
      caregiver: { name: cgName, phone: cgPhone, address: cgAddr },
      postedBy: currentUser.uid,
      postedOn: todayStr(),
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    await db.collection('pets').add(petData);
    showToast('🐾 Pet listed successfully!');
    await loadPets();
    showView('home');
  } catch (err) {
    console.error(err);
    showToast('Error listing pet. Please try again.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'List for Adoption';
  }
}

// ── CLOSE MODALS ──────────────────────────────────────────────────────────────
function closeModals() {
  authModal.classList.add('hidden');
  detailsModal.classList.add('hidden');
}

// ── EVENT LISTENERS ───────────────────────────────────────────────────────────
petGrid.addEventListener('click', e => {
  const btn = e.target.closest('.card-btn[data-id]');
  if (btn) openDetails(btn.dataset.id);
});

searchInput.addEventListener('input', renderCards);

document.querySelector('.filter-group').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn[data-filter]');
  if (!btn) return;
  activeFilter = btn.dataset.filter;
  filterBtns.forEach(b => b.classList.toggle('active', b === btn));
  renderCards();
});

navBtns.forEach(btn => btn.addEventListener('click', e => {
  const view = btn.dataset.view;
  if (view === 'details') {
    if (selectedPet) { openDetails(selectedPet.id); }
    else { showToast('Please select a pet from the home page first.'); showView('home'); }
    return;
  }
  if (view === 'add-pet' && !currentUser) {
    e.preventDefault(); showToast('Please login to list a pet.'); openAuthModal();
  } else {
    showView(view);
  }
}));

authNavBtn.addEventListener('click', () => {
  if (currentUser) { auth.signOut().then(() => showToast('You have been logged out.')); }
  else { openAuthModal(false); }
});

authForm.addEventListener('submit', handleAuth);

authToggleCtr.addEventListener('click', e => {
  if (e.target.id === 'toggleAuthLink') {
    e.preventDefault();
    isSignup = !isSignup;
    syncAuthModal();
  }
});

document.getElementById('modalClose').addEventListener('click', closeModals);
document.getElementById('detailsModalClose').addEventListener('click', closeModals);
authModal.addEventListener('click', e => { if (e.target === authModal) closeModals(); });
detailsModal.addEventListener('click', e => { if (e.target === detailsModal) closeModals(); });

document.getElementById('showNumBtn').addEventListener('click', () => {
  if (!currentUser) { showToast('Please login to view contact details.'); openAuthModal(); return; }
  document.getElementById('dm-cg-phone').style.display = 'inline';
  document.getElementById('showNumBtn').style.display = 'none';
});

document.getElementById('dm-adopt-btn').addEventListener('click', () => {
  if (!currentUser) { showToast('Please login to contact the caregiver.'); openAuthModal(); return; }
  document.getElementById('showNumBtn').click();
  showToast('📞 Scroll down to see the caregiver\'s number!');
});

document.getElementById('adoptPetBtn').addEventListener('click', () => {
  document.getElementById('petGrid').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.faq-section').addEventListener('click', e => {
  const item = e.target.closest('.faq-item');
  if (!item) return;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
});

addPetForm.addEventListener('submit', handleAddPet);

// ── AUTH STATE OBSERVER ───────────────────────────────────────────────────────
auth.onAuthStateChanged(user => {
  currentUser = user;
  updateAuthUI();
});

// ── INIT ──────────────────────────────────────────────────────────────────────
loadPets();