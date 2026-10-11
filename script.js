/* ============================================================
   HIGH GEAR COMPUTERS — JavaScript
   ============================================================ */

'use strict';

// ============================================================
// DATA — Products & Build Matrix
// ============================================================

const GPU_IMG   = "C:\\Users\\hanim\\.gemini\\antigravity-ide\\brain\\9bd78186-6085-408f-a1f9-bb66ff190949\\gpu_product_1791719029261.jpg";
const CPU_IMG   = "C:\\Users\\hanim\\.gemini\\antigravity-ide\\brain\\9bd78186-6085-408f-a1f9-bb66ff190949\\cpu_product_1791719042488.jpg";
const RAM_IMG   = "C:\\Users\\hanim\\.gemini\\antigravity-ide\\brain\\9bd78186-6085-408f-a1f9-bb66ff190949\\ram_product_1791719057244.jpg";
const SSD_IMG   = "C:\\Users\\hanim\\.gemini\\antigravity-ide\\brain\\9bd78186-6085-408f-a1f9-bb66ff190949\\ssd_product_1791719087608.jpg";
const MOBO_IMG  = "C:\\Users\\hanim\\.gemini\\antigravity-ide\\brain\\9bd78186-6085-408f-a1f9-bb66ff190949\\motherboard_product_1791719101872.jpg";

const PRODUCTS = [
  {
    id: 1, cat: 'gpu', brand: 'NVIDIA', name: 'GeForce RTX 4090 Founders Edition',
    img: GPU_IMG,
    price: 169900, originalPrice: 189900, discount: 10,
    rating: 4.9, reviews: 1284,
    stock: 'In Stock', stockType: 'instock',
    specs: [
      { label: 'VRAM', value: '24GB GDDR6X' },
      { label: 'Boost', value: '2.52 GHz' },
      { label: 'TDP', value: '450W' },
      { label: 'Interface', value: 'PCIe 4.0 x16' },
    ]
  },
  {
    id: 2, cat: 'cpu', brand: 'INTEL', name: 'Core i9-14900K 3.2GHz 24-Core LGA1700',
    img: CPU_IMG,
    price: 48500, originalPrice: 54000, discount: 10,
    rating: 4.8, reviews: 892,
    stock: 'In Stock', stockType: 'instock',
    specs: [
      { label: 'Cores', value: '24C / 32T' },
      { label: 'Boost', value: '6.0 GHz' },
      { label: 'Cache', value: '36MB L3' },
      { label: 'TDP', value: '253W' },
    ]
  },
  {
    id: 3, cat: 'ram', brand: 'G.SKILL', name: 'Trident Z5 RGB 64GB DDR5-6000 CL30 Kit',
    img: RAM_IMG,
    price: 18900, originalPrice: 22000, discount: 14,
    rating: 4.7, reviews: 543,
    stock: 'In Stock', stockType: 'instock',
    specs: [
      { label: 'Capacity', value: '64GB (2x32)' },
      { label: 'Speed', value: '6000 MT/s' },
      { label: 'Latency', value: 'CL30' },
      { label: 'Voltage', value: '1.35V' },
    ]
  },
  {
    id: 4, cat: 'ssd', brand: 'SAMSUNG', name: '990 Pro 2TB NVMe PCIe Gen4 M.2 SSD',
    img: SSD_IMG,
    price: 12500, originalPrice: 14999, discount: 17,
    rating: 4.9, reviews: 2108,
    stock: 'In Stock', stockType: 'instock',
    specs: [
      { label: 'Capacity', value: '2TB' },
      { label: 'Read', value: '7,450 MB/s' },
      { label: 'Write', value: '6,900 MB/s' },
      { label: 'Interface', value: 'PCIe 4.0 x4' },
    ]
  },
  {
    id: 5, cat: 'mobo', brand: 'ASUS ROG', name: 'STRIX Z790-F Gaming WiFi DDR5 ATX',
    img: MOBO_IMG,
    price: 42000, originalPrice: 46500, discount: 10,
    rating: 4.8, reviews: 387,
    stock: 'Low Stock', stockType: 'low',
    specs: [
      { label: 'Socket', value: 'LGA1700' },
      { label: 'Chipset', value: 'Z790' },
      { label: 'RAM Slots', value: '4x DDR5' },
      { label: 'PCIe', value: '5.0 x16' },
    ]
  },
  {
    id: 6, cat: 'gpu', brand: 'AMD', name: 'Radeon RX 7900 XTX 24GB GDDR6',
    img: GPU_IMG,
    price: 89900, originalPrice: 99900, discount: 10,
    rating: 4.7, reviews: 621,
    stock: 'In Stock', stockType: 'instock',
    specs: [
      { label: 'VRAM', value: '24GB GDDR6' },
      { label: 'Compute', value: '96 CU' },
      { label: 'TDP', value: '355W' },
      { label: 'Interface', value: 'PCIe 4.0 x16' },
    ]
  },
  {
    id: 7, cat: 'cpu', brand: 'AMD', name: 'Ryzen 9 7950X 4.5GHz 16-Core AM5',
    img: CPU_IMG,
    price: 52000, originalPrice: 58000, discount: 10,
    rating: 4.9, reviews: 1041,
    stock: 'In Stock', stockType: 'instock',
    specs: [
      { label: 'Cores', value: '16C / 32T' },
      { label: 'Boost', value: '5.7 GHz' },
      { label: 'Cache', value: '64MB L3' },
      { label: 'TDP', value: '170W' },
    ]
  },
  {
    id: 8, cat: 'ram', brand: 'CORSAIR', name: 'Dominator Platinum RGB 32GB DDR5-5600',
    img: RAM_IMG,
    price: 11500, originalPrice: null, discount: null,
    rating: 4.6, reviews: 298,
    stock: 'Out of Stock', stockType: 'out',
    specs: [
      { label: 'Capacity', value: '32GB (2x16)' },
      { label: 'Speed', value: '5600 MT/s' },
      { label: 'Latency', value: 'CL36' },
      { label: 'Voltage', value: '1.1V' },
    ]
  }
];

// Build Matrix Component Options
const BUILD_COMPONENTS = [
  {
    id: 'cpu', label: 'CPU', icon: '⚡',
    desc: 'Choose your processor',
    options: [
      { name: 'Intel i9-14900K', price: 48500, watt: 125, compat: 100 },
      { name: 'Intel i7-13700K', price: 32000, watt: 125, compat: 100 },
      { name: 'AMD Ryzen 9 7950X', price: 52000, watt: 170, compat: 85 },
      { name: 'AMD Ryzen 7 7700X', price: 26000, watt: 105, compat: 85 },
      { name: 'Intel i5-13600K', price: 22000, watt: 125, compat: 100 },
    ]
  },
  {
    id: 'mobo', label: 'Motherboard', icon: '🔌',
    desc: 'Select your platform',
    options: [
      { name: 'ASUS ROG STRIX Z790-F', price: 42000, watt: 10, compat: 100 },
      { name: 'MSI MEG Z790 ACE', price: 52000, watt: 10, compat: 100 },
      { name: 'Gigabyte X670E AORUS', price: 38000, watt: 10, compat: 85 },
      { name: 'ASUS ProArt X670E-C', price: 32000, watt: 10, compat: 85 },
    ]
  },
  {
    id: 'ram', label: 'Memory (RAM)', icon: '💾',
    desc: 'Pick your memory',
    options: [
      { name: 'G.Skill Trident Z5 64GB DDR5', price: 18900, watt: 10, compat: 100 },
      { name: 'Corsair Dominator 32GB DDR5', price: 11500, watt: 8, compat: 100 },
      { name: 'Kingston Fury Beast 64GB DDR5', price: 15000, watt: 8, compat: 90 },
      { name: 'TeamGroup T-Force 32GB DDR4', price: 6500, watt: 8, compat: 70 },
    ]
  },
  {
    id: 'gpu', label: 'Graphics Card', icon: '🎮',
    desc: 'Choose your GPU',
    options: [
      { name: 'NVIDIA RTX 4090 24GB', price: 169900, watt: 450, compat: 100 },
      { name: 'NVIDIA RTX 4080 Super', price: 99900, watt: 320, compat: 100 },
      { name: 'NVIDIA RTX 4070 Ti', price: 79900, watt: 285, compat: 100 },
      { name: 'AMD RX 7900 XTX 24GB', price: 89900, watt: 355, compat: 90 },
      { name: 'AMD RX 7800 XT 16GB', price: 45000, watt: 263, compat: 90 },
    ]
  },
  {
    id: 'storage', label: 'Storage', icon: '💿',
    desc: 'Select your storage',
    options: [
      { name: 'Samsung 990 Pro 2TB NVMe', price: 12500, watt: 5, compat: 100 },
      { name: 'WD Black SN850X 2TB', price: 11000, watt: 5, compat: 100 },
      { name: 'Seagate Firecuda 530 2TB', price: 10500, watt: 5, compat: 100 },
      { name: 'Samsung 870 EVO 2TB SATA', price: 7500, watt: 3, compat: 100 },
    ]
  },
  {
    id: 'psu', label: 'Power Supply', icon: '⚙️',
    desc: 'Choose your PSU',
    options: [
      { name: 'Corsair RM1000x 1000W 80+ Gold', price: 14500, watt: 0, compat: 100 },
      { name: 'Seasonic Prime TX-1000W Titanium', price: 22000, watt: 0, compat: 100 },
      { name: 'be quiet! Dark Power 13 1000W', price: 18000, watt: 0, compat: 100 },
      { name: 'EVGA SuperNOVA 850W Gold', price: 10500, watt: 0, compat: 90 },
    ]
  },
  {
    id: 'cooler', label: 'CPU Cooler', icon: '❄️',
    desc: 'Select cooling solution',
    options: [
      { name: 'NZXT Kraken 360 AIO', price: 15500, watt: 15, compat: 100 },
      { name: 'Corsair H150i Elite LCD', price: 19000, watt: 15, compat: 100 },
      { name: 'Noctua NH-D15 Air Cooler', price: 8500, watt: 5, compat: 100 },
      { name: 'DeepCool LT720 360 AIO', price: 12000, watt: 12, compat: 90 },
    ]
  },
  {
    id: 'case', label: 'PC Case', icon: '🖥️',
    desc: 'Choose your chassis',
    options: [
      { name: 'Lian Li O11 Dynamic EVO XL', price: 16500, watt: 0, compat: 100 },
      { name: 'NZXT H9 Elite Mid Tower', price: 17000, watt: 0, compat: 100 },
      { name: 'Fractal Design Torrent', price: 13000, watt: 0, compat: 100 },
      { name: 'Corsair iCUE 5000X RGB', price: 15000, watt: 0, compat: 100 },
    ]
  }
];

// ============================================================
// STATE
// ============================================================
const state = {
  cart: [],
  wishlist: new Set(),
  buildSelections: {},
  productsLoaded: 8,
  activeFilter: 'all',
};

// ============================================================
// UTILITIES
// ============================================================
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const fmt = (n) => '₹' + n.toLocaleString('en-IN');

function showToast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

// ============================================================
// NAVBAR
// ============================================================
(function initNavbar() {
  const navbar = $('#navbar');
  const hamburger = $('#hamburger');
  const navLinks = $('#nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    // Highlight active section
    const sections = ['home', 'categories', 'build-matrix', 'deals', 'about'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const link = $(`.nav-link[href="#${id}"]`);
      if (link) {
        if (rect.top <= 100 && rect.bottom >= 100) link.classList.add('active');
        else link.classList.remove('active');
      }
    });
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('mobile-open');
  });

  // Close mobile menu on link click
  $$('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('mobile-open');
    });
  });
})();

// ============================================================
// SEARCH
// ============================================================
(function initSearch() {
  const searchBtn = $('#search-btn');
  const searchOverlay = $('#search-overlay');
  const searchClose = $('#search-close');
  const searchInput = $('#search-input');

  searchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    setTimeout(() => searchInput.focus(), 100);
  });
  searchClose.addEventListener('click', () => searchOverlay.classList.remove('active'));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') searchOverlay.classList.remove('active');
  });
})();

// ============================================================
// PARTICLES CANVAS
// ============================================================
(function initParticles() {
  const canvas = $('#particles-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let w, h;

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.r = Math.random() * 1.5 + 0.5;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.7 ? '#7c3aed' : '#00d4ff';
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function init() {
    resize();
    particles = Array.from({ length: 120 }, () => new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.save();
          ctx.globalAlpha = (1 - dist / 120) * 0.08;
          ctx.strokeStyle = '#00d4ff';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, w, h);
    drawConnections();
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }

  init();
  loop();
  window.addEventListener('resize', init);
})();

// ============================================================
// HERO MOUSE PARALLAX
// ============================================================
(function initHeroParallax() {
  const wrapper = $('#hero-img-wrapper');
  if (!wrapper) return;
  document.addEventListener('mousemove', (e) => {
    const hero = $('.hero');
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    wrapper.style.transform = `rotateY(${dx * 6}deg) rotateX(${-dy * 4}deg) translateZ(20px)`;
  });
})();

// ============================================================
// PRODUCTS GRID
// ============================================================
function renderProducts(filter = 'all') {
  const grid = $('#products-grid');
  const items = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);

  grid.innerHTML = items.map(p => `
    <div class="product-card" data-id="${p.id}" data-cat="${p.cat}">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        ${p.discount ? `<span class="product-badge">-${p.discount}%</span>` : ''}
        <button class="wishlist-btn ${state.wishlist.has(p.id) ? 'active' : ''}" data-id="${p.id}" aria-label="Add to wishlist">
          <svg viewBox="0 0 24 24" fill="${state.wishlist.has(p.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        <div class="product-specs-hover">
          <h4>SPECIFICATIONS</h4>
          ${p.specs.map(s => `
            <div class="spec-row">
              <span>${s.label}</span>
              <span>${s.value}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${renderStars(p.rating)}</span>
          <span class="rating-count">(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price">
          <span class="price-current">${fmt(p.price)}</span>
          ${p.originalPrice ? `<span class="price-original">${fmt(p.originalPrice)}</span>` : ''}
          ${p.discount ? `<span class="price-discount">SAVE ${p.discount}%</span>` : ''}
        </div>
        <div class="stock-status ${p.stockType}">${p.stock}</div>
        <button class="add-to-cart" data-id="${p.id}" ${p.stockType === 'out' ? 'disabled style="opacity:0.5;cursor:not-allowed"' : ''}>
          ${p.stockType === 'out' ? 'OUT OF STOCK' : 'ADD TO CART'}
        </button>
      </div>
    </div>
  `).join('');

  // Bind events
  $$('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      addToCart(id);
    });
  });

  $$('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      if (state.wishlist.has(id)) {
        state.wishlist.delete(id);
        btn.classList.remove('active');
        btn.querySelector('path').setAttribute('fill', 'none');
        showToast('Removed from wishlist');
      } else {
        state.wishlist.add(id);
        btn.classList.add('active');
        btn.querySelector('path').setAttribute('fill', 'currentColor');
        showToast('Added to wishlist ❤️');
      }
    });
  });
}

// Product Filters
(function initFilters() {
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeFilter = btn.dataset.filter;
      renderProducts(state.activeFilter);
    });
  });
})();

// Category Card → filter products & scroll
function applyFilterAndScroll(catKey) {
  // Map category data-cat values to filter button data-filter values
  const catMap = {
    gpu: 'gpu', cpu: 'cpu', mobo: 'mobo', ram: 'ram',
    ssd: 'ssd', psu: 'all', cooling: 'all', case: 'all'
  };
  const filter = catMap[catKey] || 'all';
  state.activeFilter = filter;
  renderProducts(filter);

  // Sync filter buttons
  $$('.filter-btn').forEach(b => b.classList.remove('active'));
  const matchBtn = $(`.filter-btn[data-filter="${filter}"]`);
  if (matchBtn) matchBtn.classList.add('active');

  // Scroll to products section smoothly
  const productsSection = document.getElementById('deals');
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

(function initCategoryCards() {
  $$('.cat-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.dataset.cat;
      applyFilterAndScroll(cat);
    });
    // Make it feel clickable
    card.style.cursor = 'pointer';
  });
})();

// ============================================================
// CART
// ============================================================
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product || product.stockType === 'out') return;

  const existing = state.cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    state.cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  showToast(`${product.name.substring(0, 30)}... added to cart ✓`);
  openCart();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  updateCartUI();
}

function openCart() {
  $('#cart-sidebar').classList.add('open');
  $('#cart-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  $('#cart-sidebar').classList.remove('open');
  $('#cart-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

function updateCartUI() {
  const count = state.cart.reduce((s, i) => s + i.qty, 0);
  const total = state.cart.reduce((s, i) => s + i.price * i.qty, 0);

  $('#cart-count').textContent = count;
  $('#cart-total-price').textContent = fmt(total);

  const cartItems = $('#cart-items');
  const cartFooter = $('#cart-footer');

  if (state.cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        <p>Your cart is empty</p>
      </div>`;
    cartFooter.style.display = 'none';
  } else {
    cartItems.innerHTML = state.cart.map(item => `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.img}" alt="${item.name}" />
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name.substring(0, 40)}${item.name.length > 40 ? '...' : ''}</div>
          <div class="cart-item-price">${fmt(item.price)} × ${item.qty}</div>
        </div>
        <button class="cart-item-remove" data-id="${item.id}">✕</button>
      </div>
    `).join('');
    cartFooter.style.display = 'flex';

    $$('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
    });
  }
}

(function initCart() {
  $('#cart-btn').addEventListener('click', openCart);
  $('#cart-close').addEventListener('click', closeCart);
  $('#cart-overlay').addEventListener('click', closeCart);
})();

// ============================================================
// BUILD MATRIX
// ============================================================
(function initBuildMatrix() {
  const stepsContainer = $('.bm-steps');
  const statusList = $('#bm-status-list');

  // Render steps
  stepsContainer.innerHTML = BUILD_COMPONENTS.map((comp, i) => `
    <div class="bm-step" data-comp="${comp.id}">
      <div class="bm-step-num">${i + 1}</div>
      <div class="bm-step-info">
        <h4>${comp.icon} ${comp.label}</h4>
        <p class="bm-step-selected-name">${comp.desc}</p>
      </div>
      <select class="bm-step-select" data-comp="${comp.id}">
        <option value="">Select ${comp.label}</option>
        ${comp.options.map(o => `<option value="${o.name}" data-price="${o.price}" data-watt="${o.watt}" data-compat="${o.compat}">${o.name} — ${fmt(o.price)}</option>`).join('')}
      </select>
    </div>
  `).join('');

  // Render status items
  statusList.innerHTML = BUILD_COMPONENTS.map(comp => `
    <div class="bm-status-item" id="status-${comp.id}">
      <span class="status-label">${comp.label.toUpperCase()}</span>
      <span class="status-check">PENDING</span>
    </div>
  `).join('');

  // Select change handlers
  $$('.bm-step-select').forEach(sel => {
    sel.addEventListener('change', () => {
      const compId = sel.dataset.comp;
      const option = sel.options[sel.selectedIndex];
      const step = $(`.bm-step[data-comp="${compId}"]`);
      const statusItem = $(`#status-${compId}`);
      const infoP = step.querySelector('.bm-step-selected-name');

      if (sel.value) {
        const price = parseInt(option.dataset.price);
        const watt = parseInt(option.dataset.watt);
        const compat = parseInt(option.dataset.compat);

        state.buildSelections[compId] = { name: sel.value, price, watt, compat };
        step.classList.add('selected');
        infoP.textContent = sel.value;
        statusItem.classList.add('done');
        statusItem.querySelector('.status-check').textContent = '✓ SELECTED';
      } else {
        delete state.buildSelections[compId];
        step.classList.remove('selected');
        const comp = BUILD_COMPONENTS.find(c => c.id === compId);
        infoP.textContent = comp.desc;
        statusItem.classList.remove('done');
        statusItem.querySelector('.status-check').textContent = 'PENDING';
      }

      updateBuildMetrics();
    });
  });

  function updateBuildMetrics() {
    const selections = Object.values(state.buildSelections);
    const total = selections.reduce((s, c) => s + c.price, 0);
    const wattTotal = selections.reduce((s, c) => s + c.watt, 0);
    const avgCompat = selections.length
      ? Math.round(selections.reduce((s, c) => s + c.compat, 0) / selections.length)
      : 0;
    const completeness = Math.round((selections.length / BUILD_COMPONENTS.length) * 100);
    const compat = selections.length ? Math.min(100, Math.round((avgCompat * 0.7) + (completeness * 0.3))) : 0;

    $('#bm-total-price').textContent = fmt(total);

    // Compatibility
    const compatFill = $('#compat-fill');
    const compatVal = $('#compat-value');
    compatFill.style.width = compat + '%';
    compatVal.textContent = compat ? compat + '%' : '—';

    // Power
    const maxWatt = 1000;
    const powerPct = Math.min(100, Math.round((wattTotal / maxWatt) * 100));
    $('#power-fill').style.width = powerPct + '%';
    $('#power-value').textContent = wattTotal ? wattTotal + 'W' : '— W';
  }

  // Add all to cart
  $('#bm-add-all').addEventListener('click', () => {
    const count = Object.keys(state.buildSelections).length;
    if (count === 0) {
      showToast('Please select at least one component');
      return;
    }
    const total = Object.values(state.buildSelections).reduce((s, c) => s + c.price, 0);
    showToast(`${count} components added! Total: ${fmt(total)}`);
  });

  // Reset
  $('#bm-reset').addEventListener('click', () => {
    state.buildSelections = {};
    $$('.bm-step-select').forEach(sel => { sel.value = ''; sel.dispatchEvent(new Event('change')); });
    showToast('Build reset ↺');
  });
})();

// ============================================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================================
(function initScrollAnimations() {
  const style = document.createElement('style');
  style.textContent = `
    .fade-in { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
    .fade-in.visible { opacity: 1; transform: translateY(0); }
    .fade-in-left { opacity: 0; transform: translateX(-30px); transition: opacity 0.7s ease, transform 0.7s ease; }
    .fade-in-left.visible { opacity: 1; transform: translateX(0); }
  `;
  document.head.appendChild(style);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // Add fade-in to major elements
  const animEls = [
    ...$$('.showcase-card'),
    ...$$('.cat-card'),
    ...$$('.trust-card'),
    ...$$('.bm-step'),
    $('.hero-content'),
    $('.hero-visual'),
    $('.about-left'),
    $('.about-right'),
  ].filter(Boolean);

  animEls.forEach((el, i) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    observer.observe(el);
  });
})();

// ============================================================
// NEWSLETTER
// ============================================================
(function initNewsletter() {
  const btn = $('#newsletter-btn');
  const input = $('#newsletter-email');
  if (!btn || !input) return;
  btn.addEventListener('click', () => {
    const val = input.value.trim();
    if (!val || !val.includes('@')) {
      showToast('Please enter a valid email address');
      return;
    }
    input.value = '';
    showToast('Thanks for subscribing! 🎉');
  });
})();

// ============================================================
// COUNTER ANIMATION
// ============================================================
(function initCounters() {
  const statNumbers = $$('.stat-number');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = el.textContent;
      const numMatch = target.match(/\d+/);
      if (!numMatch) return;
      const num = parseInt(numMatch[0]);
      const suffix = target.replace(/\d+/, '');
      let current = 0;
      const step = Math.ceil(num / 40);
      const timer = setInterval(() => {
        current = Math.min(current + step, num);
        el.textContent = current + suffix;
        if (current >= num) clearInterval(timer);
      }, 30);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  statNumbers.forEach(el => observer.observe(el));
})();

// ============================================================
// INITIAL RENDER
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();

  // Smooth anchor scrolling
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
