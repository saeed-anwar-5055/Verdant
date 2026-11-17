/* ============================================================
   VERDANT — Luxury Fashion E-Commerce
   Vanilla JavaScript — Front-End Demo
   
   IMPORTANT: This is a front-end demonstration. Features marked
   [DEMO] work only in the browser via localStorage. For real
   business use, you need a secure backend for:
   - OTP SMS verification (e.g., Twilio, Vonage)
   - Payment processing (JazzCash/EasyPaisa/card gateways)
   - Order storage & tracking
   - Automatic WhatsApp notifications (WhatsApp Business API)
   - Secure authentication & server-side validation
   ============================================================ */

/* ---------- PRODUCT DATA (30+ products) ---------- */
const PRODUCTS = [
  // MEN'S CLOTHING
  { id:'M001', name:'Heritage Wool Overcoat', category:"Men's Clothing", price:18900, oldPrice:24500,
    images:['https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=700&q=80','https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=700&q=80','https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=700&q=80'],
    desc:'A timeless double-breasted overcoat in premium wool blend. Tailored for a sharp silhouette with superior warmth and elegance.',
    sizes:['S','M','L','XL'], colors:['Charcoal','Navy','Camel'], stock:true, rating:4.8, reviews:124, isNew:false, sold:340 },
  { id:'M002', name:'Classic Oxford Shirt', category:"Men's Clothing", price:4200, oldPrice:5800,
    images:['https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=700&q=80','https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=700&q=80'],
    desc:'Crafted from 100% Egyptian cotton, this Oxford shirt offers a refined look for any occasion. Breathable and durable.',
    sizes:['S','M','L','XL'], colors:['White','Sky Blue','Olive'], stock:true, rating:4.6, reviews:89, isNew:true, sold:510 },
  { id:'M003', name:'Slim Fit Chino Trousers', category:"Men's Clothing", price:5500, oldPrice:7200,
    images:['https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=700&q=80','https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=700&q=80'],
    desc:'Modern slim-fit chinos in stretch cotton twill. Versatile enough for the office or weekend.',
    sizes:['30','32','34','36'], colors:['Beige','Navy','Black'], stock:true, rating:4.5, reviews:67, isNew:false, sold:290 },
  { id:'M004', name:'Cashmere Blend Sweater', category:"Men's Clothing", price:9800, oldPrice:13000,
    images:['https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700&q=80','https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=700&q=80'],
    desc:'Luxuriously soft cashmere blend crewneck. Lightweight yet incredibly warm — a wardrobe essential.',
    sizes:['S','M','L','XL'], colors:['Grey','Burgundy','Cream'], stock:true, rating:4.9, reviews:156, isNew:false, sold:620 },
  { id:'M005', name:'Tailored Blazer', category:"Men's Clothing", price:14500, oldPrice:19000,
    images:['https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=700&q=80','https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=700&q=80'],
    desc:'A structured blazer in premium fabric. Clean lines and a modern fit make it perfect for formal occasions.',
    sizes:['S','M','L','XL'], colors:['Black','Navy','Grey'], stock:true, rating:4.7, reviews:98, isNew:true, sold:210 },

  // WOMEN'S CLOTHING
  { id:'W001', name:'Silk Wrap Dress', category:"Women's Clothing", price:12800, oldPrice:16900,
    images:['https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=700&q=80','https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=700&q=80'],
    desc:'An elegant silk wrap dress with a flattering silhouette. Perfect for evening events or special occasions.',
    sizes:['XS','S','M','L'], colors:['Emerald','Black','Champagne'], stock:true, rating:4.8, reviews:203, isNew:true, sold:780 },
  { id:'W002', name:'Cashmere Trench Coat', category:"Women's Clothing", price:22500, oldPrice:28900,
    images:['https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=700&q=80','https://images.unsplash.com/photo-1548624313-0396c75b3c40?w=700&q=80'],
    desc:'A statement trench coat in luxurious cashmere blend. Belted waist and classic tailoring for an elevated look.',
    sizes:['XS','S','M','L'], colors:['Camel','Black','Ivory'], stock:true, rating:4.9, reviews:187, isNew:false, sold:450 },
  { id:'W003', name:'Pleated Midi Skirt', category:"Women's Clothing", price:6800, oldPrice:8900,
    images:['https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=700&q=80','https://images.unsplash.com/photo-1582142306909-195724d33ffc?w=700&q=80'],
    desc:'A flowy pleated midi skirt with a satin finish. Effortlessly elegant and comfortable all day long.',
    sizes:['XS','S','M','L'], colors:['Gold','Black','Rose'], stock:true, rating:4.4, reviews:76, isNew:true, sold:190 },
  { id:'W004', name:'Linen Blazer Set', category:"Women's Clothing", price:15500, oldPrice:19800,
    images:['https://images.unsplash.com/photo-1548624313-0396c75b3c40?w=700&q=80','https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=700&q=80'],
    desc:'A sophisticated linen blazer set with matching trousers. Breathable and refined for the modern woman.',
    sizes:['XS','S','M','L'], colors:['Beige','White','Sage'], stock:true, rating:4.6, reviews:112, isNew:false, sold:340 },
  { id:'W005', name:'Ribbed Knit Top', category:"Women's Clothing", price:3900, oldPrice:5200,
    images:['https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=700&q=80','https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700&q=80'],
    desc:'A fitted ribbed knit top in soft cotton blend. A versatile layering piece for every season.',
    sizes:['XS','S','M','L'], colors:['White','Black','Olive'], stock:true, rating:4.3, reviews:54, isNew:false, sold:420 },

  // SHOES
  { id:'S001', name:'Leather Oxford Shoes', category:'Shoes', price:11500, oldPrice:14800,
    images:['https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=700&q=80','https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=700&q=80'],
    desc:'Handcrafted leather Oxford shoes with a timeless design. Perfect for formal and business attire.',
    sizes:['40','41','42','43','44'], colors:['Brown','Black'], stock:true, rating:4.7, reviews:143, isNew:false, sold:380 },
  { id:'S002', name:'Suede Chelsea Boots', category:'Shoes', price:13900, oldPrice:17500,
    images:['https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=700&q=80','https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=700&q=80'],
    desc:'Premium suede Chelsea boots with elastic side panels. Stylish, comfortable and versatile.',
    sizes:['40','41','42','43','44'], colors:['Tan','Dark Brown','Black'], stock:true, rating:4.8, reviews:167, isNew:true, sold:290 },
  { id:'S003', name:'Minimalist Sneakers', category:'Shoes', price:7800, oldPrice:9900,
    images:['https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=700&q=80','https://images.unsplash.com/photo-1549298916-b41d501d3772?w=700&q=80'],
    desc:'Clean, minimalist sneakers in premium leather. Effortless style for everyday wear.',
    sizes:['39','40','41','42','43','44'], colors:['White','Grey','Navy'], stock:true, rating:4.5, reviews:234, isNew:true, sold:890 },
  { id:'S004', name:'Heeled Sandals', category:'Shoes', price:8500, oldPrice:11200,
    images:['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700&q=80','https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?w=700&q=80'],
    desc:'Elegant heeled sandals with a comfortable block heel. Perfect for evenings and special events.',
    sizes:['36','37','38','39','40'], colors:['Nude','Black','Gold'], stock:true, rating:4.6, reviews:98, isNew:false, sold:310 },
  { id:'S005', name:'Classic Loafers', category:'Shoes', price:9200, oldPrice:12000,
    images:['https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=700&q=80','https://images.unsplash.com/photo-1560343090-f0409e92791a?w=700&q=80'],
    desc:'Timeless penny loafers in polished leather. A smart-casual staple for any wardrobe.',
    sizes:['39','40','41','42','43','44'], colors:['Burgundy','Black','Tan'], stock:false, rating:4.4, reviews:76, isNew:false, sold:210 },

  // HANDBAGS
  { id:'B001', name:'Structured Leather Tote', category:'Handbags', price:16800, oldPrice:21500,
    images:['https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&q=80','https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&q=80'],
    desc:'A spacious structured tote in genuine leather. Sophisticated and practical for work or travel.',
    sizes:['One Size'], colors:['Tan','Black','Cream'], stock:true, rating:4.8, reviews:201, isNew:false, sold:540 },
  { id:'B002', name:'Quilted Crossbody Bag', category:'Handbags', price:12500, oldPrice:16200,
    images:['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&q=80','https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=700&q=80'],
    desc:'Chic quilted crossbody bag with gold-tone hardware. Compact yet roomy for essentials.',
    sizes:['One Size'], colors:['Black','Rose','Ivory'], stock:true, rating:4.7, reviews:178, isNew:true, sold:620 },
  { id:'B003', name:'Mini Evening Clutch', category:'Handbags', price:8900, oldPrice:11800,
    images:['https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=700&q=80','https://images.unsplash.com/photo-1591561954557-26941169b49e?w=700&q=80'],
    desc:'A delicate evening clutch with chain strap. Elegant enough for the most special occasions.',
    sizes:['One Size'], colors:['Gold','Silver','Black'], stock:true, rating:4.5, reviews:89, isNew:false, sold:280 },
  { id:'B004', name:'Leather Backpack', category:'Handbags', price:14200, oldPrice:18500,
    images:['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&q=80','https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&q=80'],
    desc:'A modern leather backpack with laptop compartment. Combines luxury with everyday functionality.',
    sizes:['One Size'], colors:['Brown','Black'], stock:true, rating:4.6, reviews:112, isNew:true, sold:190 },

  // WATCHES
  { id:'T001', name:'Classic Analog Watch', category:'Watches', price:19500, oldPrice:25000,
    images:['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=700&q=80','https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=700&q=80'],
    desc:'A refined analog watch with genuine leather strap and sapphire crystal. Timeless craftsmanship.',
    sizes:['One Size'], colors:['Brown/ Gold','Black/ Silver'], stock:true, rating:4.9, reviews:267, isNew:false, sold:450 },
  { id:'T002', name:'Minimalist Mesh Watch', category:'Watches', price:12800, oldPrice:16500,
    images:['https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=700&q=80','https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=700&q=80'],
    desc:'Ultra-thin minimalist watch with stainless steel mesh strap. Modern elegance on your wrist.',
    sizes:['One Size'], colors:['Silver','Rose Gold','Black'], stock:true, rating:4.7, reviews:143, isNew:true, sold:380 },
  { id:'T003', name:'Chronograph Sport Watch', category:'Watches', price:24500, oldPrice:31000,
    images:['https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=700&q=80','https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=700&q=80'],
    desc:'A sporty chronograph watch with water resistance and premium build. For the active gentleman.',
    sizes:['One Size'], colors:['Black','Navy'], stock:true, rating:4.8, reviews:198, isNew:false, sold:310 },

  // SUNGLASSES
  { id:'G001', name:'Classic Aviator Sunglasses', category:'Sunglasses', price:6500, oldPrice:8500,
    images:['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=700&q=80','https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700&q=80'],
    desc:'Timeless aviator sunglasses with UV400 protection. Lightweight metal frame for all-day comfort.',
    sizes:['One Size'], colors:['Gold/ Green','Silver/ Blue'], stock:true, rating:4.6, reviews:134, isNew:false, sold:560 },
  { id:'G002', name:'Oversized Cat-Eye', category:'Sunglasses', price:7200, oldPrice:9400,
    images:['https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700&q=80','https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=700&q=80'],
    desc:'Glamorous oversized cat-eye sunglasses with gradient lenses. A statement accessory for any look.',
    sizes:['One Size'], colors:['Tortoise','Black'], stock:true, rating:4.5, reviews:98, isNew:true, sold:340 },
  { id:'G003', name:'Round Retro Sunglasses', category:'Sunglasses', price:5800, oldPrice:7600,
    images:['https://images.unsplash.com/photo-1577803645773-f96470509666?w=700&q=80','https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700&q=80'],
    desc:'Vintage-inspired round sunglasses with premium acetate frame. Effortlessly cool.',
    sizes:['One Size'], colors:['Brown','Black'], stock:true, rating:4.4, reviews:67, isNew:false, sold:220 },

  // ACCESSORIES
  { id:'A001', name:'Leather Belt', category:'Accessories', price:4500, oldPrice:6000,
    images:['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&q=80','https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=700&q=80'],
    desc:'Full-grain leather belt with brushed metal buckle. Handcrafted for lasting quality.',
    sizes:['S','M','L','XL'], colors:['Brown','Black'], stock:true, rating:4.5, reviews:89, isNew:false, sold:410 },
  { id:'A002', name:'Silk Scarf', category:'Accessories', price:3200, oldPrice:4300,
    images:['https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=700&q=80','https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=700&q=80'],
    desc:'Luxurious 100% silk scarf with hand-rolled edges. Adds a touch of elegance to any outfit.',
    sizes:['One Size'], colors:['Emerald','Blush','Navy'], stock:true, rating:4.7, reviews:76, isNew:true, sold:230 },
  { id:'A003', name:'Gold-Tone Necklace', category:'Accessories', price:5900, oldPrice:7900,
    images:['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&q=80','https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&q=80'],
    desc:'Delicate gold-tone necklace with a minimal pendant. Beautifully packaged for gifting.',
    sizes:['One Size'], colors:['Gold'], stock:true, rating:4.6, reviews:112, isNew:true, sold:380 },
  { id:'A004', name:'Leather Cardholder', category:'Accessories', price:2800, oldPrice:3800,
    images:['https://images.unsplash.com/photo-1627123424574-724758594e93?w=700&q=80','https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&q=80'],
    desc:'Slim leather cardholder with RFID protection. Practical luxury for everyday carry.',
    sizes:['One Size'], colors:['Black','Tan'], stock:true, rating:4.4, reviews:58, isNew:false, sold:290 },
  { id:'A005', name:'Cashmere Beanie', category:'Accessories', price:3800, oldPrice:5200,
    images:['https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=700&q=80','https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700&q=80'],
    desc:'Soft cashmere beanie for premium warmth. A winter essential with understated style.',
    sizes:['One Size'], colors:['Grey','Cream','Olive'], stock:true, rating:4.5, reviews:64, isNew:false, sold:160 }
];

/* ---------- CONSTANTS ---------- */
const DELIVERY_FEE = 250;           // PKR
const FREE_DELIVERY_THRESHOLD = 5000; // PKR
const WHATSAPP_NUMBER = '923168920170';
const CATEGORIES = ["Men's Clothing","Women's Clothing",'Shoes','Handbags','Watches','Sunglasses','Accessories'];
const FALLBACK_IMG = 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=700&q=80';

/* ---------- STATE ---------- */
let cart = JSON.parse(localStorage.getItem('verdant_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('verdant_wishlist') || '[]');
let currentFilters = { search:'', categories:[], minPrice:null, maxPrice:null, sort:'default' };
let currentProduct = null;
let selectedSize = null;
let selectedColor = null;
let selectedQty = 1;

/* ---------- HELPERS ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const fmt = n => 'PKR ' + Number(n).toLocaleString('en-PK');
const saveCart = () => localStorage.setItem('verdant_cart', JSON.stringify(cart));
const saveWishlist = () => localStorage.setItem('verdant_wishlist', JSON.stringify(wishlist));
const byId = id => PRODUCTS.find(p => p.id === id);
const stars = rating => '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));
const esc = s => String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

function toast(msg, type = '') {
  const t = $('#toast');
  t.textContent = msg;
  t.className = 'toast show ' + type;
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.classList.remove('show'), 3200);
}

function bumpBadge(el) {
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
}

function updateBadges() {
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const wishCount = wishlist.length;
  $('#cartCount').textContent = cartCount;
  $('#wishlistCount').textContent = wishCount;
  if (cartCount) bumpBadge($('#cartCount'));
  if (wishCount) bumpBadge($('#wishlistCount'));
}

function imgTag(src, alt) {
  return `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy"
    onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">`;
}

/* ---------- NAVIGATION ---------- */
function showPage(page) {
  $$('.page').forEach(p => p.hidden = true);
  const target = $('#page-' + page);
  if (target) target.hidden = false;
  // scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });
  // close mobile nav
  $('#navLinks').classList.remove('open');
  $('#filters').classList.remove('open');

  // lazy render per page
  if (page === 'home') renderHome();
  if (page === 'shop') renderShop();
  if (page === 'cart') renderCart();
  if (page === 'checkout') renderCheckout();
  if (page === 'wishlist') renderWishlist();
}

// Delegate all data-nav clicks
document.addEventListener('click', e => {
  const navEl = e.target.closest('[data-nav]');
  if (!navEl) return;
  e.preventDefault();
  showPage(navEl.dataset.nav);
});

/* ---------- PRODUCT CARD ---------- */
function productCard(p) {
  const inWish = wishlist.includes(p.id);
  const disc = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  return `
  <article class="product-card" data-id="${p.id}">
    <div class="product-media" data-goto="${p.id}">
      ${imgTag(p.images[0], p.name)}
      <div class="product-badges">
        ${disc > 0 ? `<span class="p-badge sale">-${disc}%</span>` : ''}
        ${!p.stock ? '<span class="p-badge stock-out">Sold Out</span>' : ''}
        ${p.isNew && p.stock ? '<span class="p-badge new">New</span>' : ''}
      </div>
      <button class="wish-btn ${inWish ? 'active' : ''}" data-wish="${p.id}" aria-label="Wishlist">
        <svg viewBox="0 0 24 24" fill="${inWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>
      </button>
    </div>
    <div class="product-body">
      <span class="product-cat">${esc(p.category)}</span>
      <h3 class="product-name" data-goto="${p.id}">${esc(p.name)}</h3>
      <div class="product-rating"><span class="stars">${stars(p.rating)}</span> <span>${p.rating} (${p.reviews})</span></div>
      <div class="price-row">
        <span class="price">${fmt(p.price)}</span>
        ${p.oldPrice ? `<span class="price-old">${fmt(p.oldPrice)}</span>` : ''}
      </div>
      <div class="product-actions">
        <button class="btn btn-outline" data-add="${p.id}" ${!p.stock ? 'disabled' : ''}>Add to Cart</button>
        <button class="btn buy-now" data-buy="${p.id}" ${!p.stock ? 'disabled' : ''}>Buy Now</button>
      </div>
    </div>
  </article>`;
}

/* ---------- GLOBAL PRODUCT ACTIONS ---------- */
document.addEventListener('click', e => {
  // go to product detail
  const gotoEl = e.target.closest('[data-goto]');
  if (gotoEl && !e.target.closest('[data-add],[data-buy],[data-wish]')) {
    openProduct(gotoEl.dataset.goto);
    return;
  }
  // wishlist toggle
  const wishBtn = e.target.closest('[data-wish]');
  if (wishBtn) {
    e.stopPropagation();
    toggleWishlist(wishBtn.dataset.wish);
    return;
  }
  // add to cart (default size/color)
  const addBtn = e.target.closest('[data-add]');
  if (addBtn) {
    e.stopPropagation();
    const p = byId(addBtn.dataset.add);
    if (p) addToCart(p.id, p.sizes[0], p.colors[0], 1);
    return;
  }
  // buy now
  const buyBtn = e.target.closest('[data-buy]');
  if (buyBtn) {
    e.stopPropagation();
    const p = byId(buyBtn.dataset.buy);
    if (p) { addToCart(p.id, p.sizes[0], p.colors[0], 1); showPage('checkout'); }
  }
});

/* ---------- WISHLIST ---------- */
function toggleWishlist(id) {
  const i = wishlist.indexOf(id);
  if (i > -1) { wishlist.splice(i, 1); toast('Removed from wishlist'); }
  else { wishlist.push(id); toast('Added to wishlist ♥', 'success'); }
  saveWishlist();
  updateBadges();
  refreshWishButtons();
  if (!$('#page-wishlist').hidden) renderWishlist();
}

function refreshWishButtons() {
  $$('[data-wish]').forEach(btn => {
    const active = wishlist.includes(btn.dataset.wish);
    btn.classList.toggle('active', active);
    const svg = btn.querySelector('svg');
    if (svg) svg.setAttribute('fill', active ? 'currentColor' : 'none');
  });
}

/* ---------- CART ---------- */
function addToCart(id, size, color, qty = 1) {
  const p = byId(id);
  if (!p || !p.stock) return;
  const key = id + '|' + size + '|' + color;
  const existing = cart.find(i => i.key === key);
  if (existing) existing.qty += qty;
  else cart.push({ key, id, size, color, qty });
  saveCart();
  updateBadges();
  toast(`Added to cart: ${p.name}`, 'success');
  if (!$('#page-cart').hidden) renderCart();
}

function changeQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.key !== key);
  saveCart();
  updateBadges();
  renderCart();
}

function removeCartItem(key) {
  cart = cart.filter(i => i.key !== key);
  saveCart();
  updateBadges();
  renderCart();
  toast('Item removed from cart');
}

const cartSubtotal = () => cart.reduce((s, i) => {
  const p = byId(i.id); return p ? s + p.price * i.qty : s;
}, 0);
const cartDelivery = () => cart.length === 0 ? 0 : (cartSubtotal() >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE);
const cartTotal = () => cartSubtotal() + cartDelivery();

/* ---------- RENDER: CART ---------- */
function renderCart() {
  const layout = $('#cartLayout');
  const empty = $('#cartEmpty');
  if (!cart.length) {
    layout.innerHTML = '';
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  const items = cart.map(i => {
    const p = byId(i.id);
    if (!p) return '';
    return `
    <div class="cart-item">
      <div class="cart-item-img">${imgTag(p.images[0], p.name)}</div>
      <div>
        <div class="cart-item-name">${esc(p.name)}</div>
        <div class="cart-item-meta">${esc(i.size)} · ${esc(i.color)} · ${fmt(p.price)}</div>
        <div class="cart-item-price">${fmt(p.price * i.qty)}</div>
      </div>
      <div class="cart-item-controls">
        <div class="qty-selector">
          <button data-qty="${i.key}" data-d="-1">−</button>
          <span>${i.qty}</span>
          <button data-qty="${i.key}" data-d="1">+</button>
        </div>
        <button class="remove-btn" data-remove="${i.key}">Remove</button>
      </div>
    </div>`;
  }).join('');

  layout.innerHTML = `
    <div class="cart-items">${items}</div>
    <aside class="cart-summary">
      <h3>Order Summary</h3>
      <div class="summary-row"><span>Subtotal</span><span>${fmt(cartSubtotal())}</span></div>
      <div class="summary-row"><span>Delivery (Karachi)</span><span>${cartDelivery() ? fmt(cartDelivery()) : 'FREE'}</span></div>
      <div class="summary-row total"><span>Total</span><span>${fmt(cartTotal())}</span></div>
      <button class="btn btn-outline" data-nav="shop">Continue Shopping</button>
      <button class="btn btn-primary" data-nav="checkout">Proceed to Checkout</button>
      <div class="delivery-note">🚚 Delivery in <strong>Karachi only</strong>. Free delivery on orders above ${fmt(FREE_DELIVERY_THRESHOLD)}.</div>
    </aside>`;

  // attach listeners
  $$('[data-qty]', layout).forEach(btn => btn.onclick = () => changeQty(btn.dataset.qty, +btn.dataset.d));
  $$('[data-remove]', layout).forEach(btn => btn.onclick = () => removeCartItem(btn.dataset.remove));
}

/* ---------- RENDER: CHECKOUT ---------- */
function renderCheckout() {
  const layout = $('#checkoutLayout');
  if (!cart.length) {
    layout.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
      <h3>Your cart is empty</h3>
      <p>Add products before proceeding to checkout.</p>
      <button class="btn btn-primary" data-nav="shop">Shop Now</button>
    </div>`;
    return;
  }

  const items = cart.map(i => {
    const p = byId(i.id);
    return `<div class="checkout-item"><span>${esc(p.name)} × ${i.qty} <small>(${esc(i.size)}/${esc(i.color)})</small></span><span>${fmt(p.price * i.qty)}</span></div>`;
  }).join('');

  layout.innerHTML = `
    <form class="checkout-form" id="checkoutForm">
      <div class="checkout-card">
        <h3>Delivery Details</h3>
        <div class="form-group"><label>Full Name *</label><input type="text" id="coName" required></div>
        <div class="form-group"><label>Phone Number *</label><input type="tel" id="coPhone" placeholder="03XXXXXXXXX" required pattern="[0-9+\\-\\s]{10,15}"></div>
        <div class="form-group"><label>Complete Address *</label><textarea id="coAddress" rows="3" required></textarea></div>
        <div class="form-row">
          <div class="form-group"><label>City *</label><input type="text" id="coCity" value="Karachi" required readonly></div>
          <div class="form-group"><label>Area *</label><input type="text" id="coArea" placeholder="e.g. Clifton" required></div>
        </div>
        <div class="form-group"><label>Postal Code (optional)</label><input type="text" id="coPostal"></div>
        <div class="delivery-note">📍 <strong>Delivery Area:</strong> We currently deliver within <strong>Karachi only</strong>. Orders with other cities cannot be fulfilled.</div>
      </div>

      <div class="checkout-card">
        <h3>Payment Method</h3>
        <div class="payment-options">
          <label class="payment-option selected"><input type="radio" name="pay" value="Cash on Delivery" checked> Cash on Delivery</label>
          <label class="payment-option"><input type="radio" name="pay" value="JazzCash"> JazzCash</label>
          <label class="payment-option"><input type="radio" name="pay" value="EasyPaisa"> EasyPaisa</label>
          <label class="payment-option"><input type="radio" name="pay" value="Bank Transfer"> Bank Transfer</label>
          <label class="payment-option"><input type="radio" name="pay" value="Debit/Credit Card"> Debit / Credit Card</label>
        </div>
        <div class="payment-note">⚠️ <strong>Important:</strong> Only Cash on Delivery is fully functional in this demo. JazzCash, EasyPaisa, Bank Transfer and Card payments require integration with a real payment gateway on a secure backend before they can process real money.</div>
      </div>

      <button type="submit" class="btn btn-primary full">Place Order via WhatsApp</button>
      <p class="auth-note">Placing an order opens WhatsApp with your order details pre-filled. <strong>You must press Send in WhatsApp to complete the order.</strong> Automatic notifications require WhatsApp Business API on a backend.</p>
    </form>

    <aside class="checkout-summary">
      <div class="checkout-card">
        <h3>Order Summary</h3>
        ${items}
        <div class="checkout-line" style="margin-top:14px"><span>Subtotal</span><span>${fmt(cartSubtotal())}</span></div>
        <div class="checkout-line"><span>Delivery</span><span>${cartDelivery() ? fmt(cartDelivery()) : 'FREE'}</span></div>
        <div class="checkout-line total"><span>Grand Total</span><span>${fmt(cartTotal())}</span></div>
      </div>
    </aside>`;

  // payment selected styling
  $$('input[name="pay"]', layout).forEach(r => r.onchange = () => {
    $$('.payment-option', layout).forEach(o => o.classList.remove('selected'));
    r.closest('.payment-option').classList.add('selected');
  });

  $('#checkoutForm').onsubmit = handlePlaceOrder;
}

/* ---------- ORDER PLACEMENT (WhatsApp + localStorage) ---------- */
function handlePlaceOrder(e) {
  e.preventDefault();
  const name = $('#coName').value.trim();
  const phone = $('#coPhone').value.trim();
  const address = $('#coAddress').value.trim();
  const city = $('#coCity').value.trim();
  const area = $('#coArea').value.trim();
  const postal = $('#coPostal').value.trim();
  const pay = $('input[name="pay"]:checked').value;

  // basic validation
  if (!name || !phone || !address || !area) { toast('Please fill all required fields.', 'error'); return; }
  if (city.toLowerCase() !== 'karachi') { toast('We deliver in Karachi only.', 'error'); return; }
  if (!/^(\+92|0)?3\d{9}$|^(\+92|0)?3\d{2}[-\s]?\d{7}$/.test(phone.replace(/\s/g,''))) {
    // loose validation; allow common PK formats
  }

  // Build order object [DEMO — saved locally only]
  const orderId = 'VRD-' + Date.now().toString().slice(-6);
  const order = {
    id: orderId, name, phone, address, city, area, postal,
    payment: pay,
    items: cart.map(i => {
      const p = byId(i.id);
      return { name:p.name, size:i.size, color:i.color, qty:i.qty, price:p.price };
    }),
    subtotal: cartSubtotal(),
    delivery: cartDelivery(),
    total: cartTotal(),
    status: 'Order Received',
    date: new Date().toISOString()
  };
  // save to localStorage (demo tracking)
  const orders = JSON.parse(localStorage.getItem('verdant_orders') || '[]');
  orders.unshift(order);
  localStorage.setItem('verdant_orders', JSON.stringify(orders));

  // Build WhatsApp message
  let msg = `*NEW ORDER — VERDANT*\n`;
  msg += `Order ID: ${orderId}\n`;
  msg += `Customer: ${name}\n`;
  msg += `Phone: ${phone}\n`;
  msg += `Address: ${address}, ${area}, ${city}${postal ? ' - ' + postal : ''}\n`;
  msg += `------------------------------\n`;
  order.items.forEach(it => {
    msg += `• ${it.name} (${it.size}/${it.color}) × ${it.qty} — PKR ${(it.price * it.qty).toLocaleString()}\n`;
  });
  msg += `------------------------------\n`;
  msg += `Subtotal: PKR ${order.subtotal.toLocaleString()}\n`;
  msg += `Delivery: ${order.delivery ? 'PKR ' + order.delivery.toLocaleString() : 'FREE'}\n`;
  msg += `*Grand Total: PKR ${order.total.toLocaleString()}*\n`;
  msg += `Payment: ${pay}\n`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');

  // clear cart
  cart = [];
  saveCart();
  updateBadges();

  toast(`Order ${orderId} prepared! Press Send in WhatsApp to confirm.`, 'success');

  // Show confirmation screen
  $('#checkoutLayout').innerHTML = `
    <div class="empty-state" style="grid-column:1/-1">
      <h3>Order Prepared ✔</h3>
      <p>Your Order ID is <strong>${orderId}</strong>. WhatsApp has opened with your order details — <strong>please press Send</strong> to complete your order.</p>
      <p style="margin-top:10px;font-size:0.85rem;color:#8a7d5c">Demo note: this order was saved in your browser only. Real orders need a backend database.</p>
      <button class="btn btn-primary" data-nav="tracking">Track Order</button>
      <button class="btn btn-outline" data-nav="home">Back to Home</button>
    </div>`;
}

/* ---------- HOME RENDER ---------- */
const TESTIMONIALS = [
  { text:'The quality of the overcoat I ordered is exceptional. Packaging was premium and delivery was quick. VERDANT has earned a loyal customer.', name:'Ayesha K.', loc:'Clifton, Karachi' },
  { text:'Finally a Pakistani brand that understands luxury. The silk dress fits beautifully and the fabric feels divine.', name:'Fatima R.', loc:'DHA, Karachi' },
  { text:'Ordered shoes and a watch — both exceeded expectations. Customer service on WhatsApp was prompt and helpful.', name:'Usman A.', loc:'Gulshan, Karachi' },
];

function renderHome() {
  $('#featuredGrid').innerHTML = PRODUCTS.slice(0, 8).map(productCard).join('');
  $('#newArrivalsGrid').innerHTML = PRODUCTS.filter(p => p.isNew).slice(0, 8).map(productCard).join('');
  $('#bestSellersGrid').innerHTML = [...PRODUCTS].sort((a,b) => b.sold - a.sold).slice(0, 8).map(productCard).join('');
  $('#testimonialsGrid').innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-stars">★★★★★</div>
      <p class="testimonial-text">"${esc(t.text)}"</p>
      <div class="testimonial-author">${esc(t.name)}</div>
      <div class="testimonial-loc">${esc(t.loc)}</div>
    </div>`).join('');
}

/* ---------- SHOP RENDER & FILTERS ---------- */
function buildCategoryFilters() {
  $('#categoryFilters').innerHTML = CATEGORIES.map(c => `
    <label><input type="checkbox" value="${esc(c)}"> ${esc(c)}</label>`).join('');
  $$('#categoryFilters input').forEach(cb => cb.onchange = () => {
    currentFilters.categories = $$('#categoryFilters input:checked').map(i => i.value);
    renderShop();
  });
}

function getFilteredProducts() {
  let list = [...PRODUCTS];
  const f = currentFilters;
  if (f.search) {
    const q = f.search.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  }
  if (f.categories.length) list = list.filter(p => f.categories.includes(p.category));
  if (f.minPrice != null) list = list.filter(p => p.price >= f.minPrice);
  if (f.maxPrice != null) list = list.filter(p => p.price <= f.maxPrice);

  switch (f.sort) {
    case 'price-asc': list.sort((a,b) => a.price - b.price); break;
    case 'price-desc': list.sort((a,b) => b.price - a.price); break;
    case 'newest': list.sort((a,b) => (b.isNew?1:0) - (a.isNew?1:0)); break;
    case 'popular': list.sort((a,b) => b.sold - a.sold); break;
  }
  return list;
}

function renderShop() {
  const list = getFilteredProducts();
  const grid = $('#shopGrid');
  const empty = $('#shopEmpty');
  $('#resultsCount').textContent = `Showing ${list.length} product${list.length !== 1 ? 's' : ''}`;
  if (!list.length) { grid.innerHTML = ''; empty.hidden = false; return; }
  empty.hidden = true;
  grid.innerHTML = list.map(productCard).join('');
}

function resetFilters() {
  currentFilters = { search:'', categories:[], minPrice:null, maxPrice:null, sort:'default' };
  $('#filterSearch').value = '';
  $('#minPrice').value = '';
  $('#maxPrice').value = '';
  $('#sortSelect').value = 'default';
  $$('#categoryFilters input').forEach(i => i.checked = false);
  renderShop();
  toast('Filters reset');
}

/* ---------- PRODUCT DETAIL ---------- */
function openProduct(id) {
  const p = byId(id);
  if (!p) return;
  currentProduct = p;
  selectedSize = p.sizes[0];
  selectedColor = p.colors[0];
  selectedQty = 1;

  const disc = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  const inWish = wishlist.includes(p.id);

  $('#productDetail').innerHTML = `
    <div class="detail-gallery">
      <div class="detail-main-img">${imgTag(p.images[0], p.name)}</div>
      <div class="detail-thumbs">
        ${p.images.map((src, i) => `<button class="${i===0?'active':''}" data-thumb="${i}">${imgTag(src, p.name + ' view ' + (i+1))}</button>`).join('')}
      </div>
    </div>
    <div class="detail-info">
      <span class="detail-cat">${esc(p.category)}</span>
      <h1>${esc(p.name)}</h1>
      <div class="detail-rating"><span class="stars">${stars(p.rating)}</span> ${p.rating} · ${p.reviews} reviews · ${p.sold} sold</div>
      <div class="detail-price-row">
        <span class="detail-price">${fmt(p.price)}</span>
        ${p.oldPrice ? `<span class="detail-price-old">${fmt(p.oldPrice)}</span><span class="p-badge sale">-${disc}%</span>` : ''}
      </div>
      <p class="detail-desc">${esc(p.desc)}</p>
      <div class="detail-option">
        <h4>Size</h4>
        <div class="option-pills" id="sizePills">
          ${p.sizes.map(s => `<button class="option-pill ${s===selectedSize?'active':''}" data-size="${esc(s)}">${esc(s)}</button>`).join('')}
        </div>
      </div>
      <div class="detail-option">
        <h4>Colour</h4>
        <div class="option-pills" id="colorPills">
          ${p.colors.map(c => `<button class="option-pill ${c===selectedColor?'active':''}" data-color="${esc(c)}">${esc(c)}</button>`).join('')}
        </div>
      </div>
      <div class="detail-option">
        <h4>Quantity</h4>
        <div class="qty-selector">
          <button id="detailQtyMinus">−</button>
          <span id="detailQtyVal">1</span>
          <button id="detailQtyPlus">+</button>
        </div>
      </div>
      <div class="stock-status ${p.stock ? 'in' : 'out'}">${p.stock ? '✔ In Stock' : '✖ Out of Stock'}</div>
      <div class="detail-actions">
        <button class="btn btn-outline" id="detailWish">${inWish ? '♥ In Wishlist' : '♡ Add to Wishlist'}</button>
        <button class="btn btn-primary" id="detailAdd" ${!p.stock ? 'disabled' : ''}>Add to Cart</button>
        <button class="btn buy-now" id="detailBuy" ${!p.stock ? 'disabled' : ''}>Buy Now</button>
      </div>
    </div>`;

  // Thumbnail switching
  $$('#productDetail [data-thumb]').forEach(btn => btn.onclick = () => {
    const idx = +btn.dataset.thumb;
    $('#productDetail .detail-main-img').innerHTML = imgTag(p.images[idx], p.name);
    $$('#productDetail [data-thumb]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });

  // Size / colour selection
  $$('#sizePills [data-size]').forEach(b => b.onclick = () => {
    selectedSize = b.dataset.size;
    $$('#sizePills .option-pill').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
  });
  $$('#colorPills [data-color]').forEach(b => b.onclick = () => {
    selectedColor = b.dataset.color;
    $$('#colorPills .option-pill').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
  });

  // Qty
  $('#detailQtyMinus').onclick = () => { if (selectedQty > 1) { selectedQty--; $('#detailQtyVal').textContent = selectedQty; } };
  $('#detailQtyPlus').onclick = () => { if (selectedQty < 10) { selectedQty++; $('#detailQtyVal').textContent = selectedQty; } };

  // Actions
  $('#detailWish').onclick = () => { toggleWishlist(p.id); openProduct(p.id); };
  $('#detailAdd').onclick = () => { addToCart(p.id, selectedSize, selectedColor, selectedQty); };
  $('#detailBuy').onclick = () => { addToCart(p.id, selectedSize, selectedColor, selectedQty); showPage('checkout'); };

  // related products
  $('#relatedGrid').innerHTML = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4).map(productCard).join('');

  showPage('product');
}

/* ---------- WISHLIST RENDER ---------- */
function renderWishlist() {
  const grid = $('#wishlistGrid');
  const empty = $('#wishlistEmpty');
  if (!wishlist.length) { grid.innerHTML = ''; empty.hidden = false; return; }
  empty.hidden = true;
  grid.innerHTML = wishlist.map(id => {
    const p = byId(id);
    if (!p) return '';
    return `
    <article class="product-card">
      <div class="product-media" data-goto="${p.id}">${imgTag(p.images[0], p.name)}</div>
      <div class="product-body">
        <span class="product-cat">${esc(p.category)}</span>
        <h3 class="product-name" data-goto="${p.id}">${esc(p.name)}</h3>
        <div class="price-row"><span class="price">${fmt(p.price)}</span>${p.oldPrice ? `<span class="price-old">${fmt(p.oldPrice)}</span>` : ''}</div>
        <div class="product-actions" style="flex-direction:column">
          <button class="btn btn-primary" data-move="${p.id}" ${!p.stock ? 'disabled' : ''}>Move to Cart</button>
          <button class="btn btn-outline" data-wish="${p.id}">Remove</button>
        </div>
      </div>
    </article>`;
  }).join('');

  $$('[data-move]', grid).forEach(btn => btn.onclick = () => {
    const p = byId(btn.dataset.move);
    if (!p) return;
    addToCart(p.id, p.sizes[0], p.colors[0], 1);
    wishlist = wishlist.filter(id => id !== p.id);
    saveWishlist();
    updateBadges();
    renderWishlist();
    toast('Moved to cart', 'success');
  });
}

/* ---------- SEARCH ---------- */
$('#searchToggle').onclick = () => {
  $('#searchBar').classList.toggle('open');
  if ($('#searchBar').classList.contains('open')) setTimeout(() => $('#searchInput').focus(), 50);
};
$('#searchClose').onclick = () => $('#searchBar').classList.remove('open');
$('#searchSubmit').onclick = () => {
  const q = $('#searchInput').value.trim();
  if (!q) return;
  currentFilters.search = q;
  $('#filterSearch').value = q;
  $('#searchBar').classList.remove('open');
  showPage('shop');
};

/* ---------- NEWSLETTER ---------- */
$('#newsletterForm').onsubmit = e => {
  e.preventDefault();
  $('#newsletterForm').reset();
  $('#newsletterMsg').textContent = 'Thank you for subscribing! (Demo — no email sent.)';
  toast('Subscribed! Thank you.', 'success');
};

/* ---------- CONTACT FORM ---------- */
$('#contactForm').onsubmit = e => {
  e.preventDefault();
  $('#contactForm').reset();
  $('#contactMsg').textContent = 'Message received (demo only — connect a backend for real delivery).';
  toast('Message sent! (demo)', 'success');
};

/* ---------- LOGIN / SIGNUP [DEMO] ---------- */
$('#signupForm').onsubmit = e => {
  e.preventDefault();
  const name = $('#signupName').value.trim();
  const phone = $('#signupPhone').value.trim();
  const email = $('#signupEmail').value.trim();
  const pass = $('#signupPassword').value;
  const confirm = $('#signupConfirm').value;
  if (pass !== confirm) { toast('Passwords do not match', 'error'); return; }
  if (pass.length < 6) { toast('Password must be at least 6 characters', 'error'); return; }
  // [DEMO] store locally — NEVER do this in production
  const users = JSON.parse(localStorage.getItem('verdant_users') || '[]');
  if (users.find(u => u.phone === phone)) { toast('This number is already registered.', 'error'); return; }
  users.push({ name, phone, email });
  localStorage.setItem('verdant_users', JSON.stringify(users));
  toast('Account created (demo). OTP verification requires a backend.', 'success');
  $('#signupForm').reset();
  showPage('login');
};

$('#loginForm').onsubmit = e => {
  e.preventDefault();
  const phone = $('#loginPhone').value.trim();
  const pass = $('#loginPassword').value;
  const users = JSON.parse(localStorage.getItem('verdant_users') || '[]');
  if (users.find(u => u.phone === phone)) {
    toast('Signed in (demo).', 'success');
    showPage('home');
  } else {
    toast('No account found. Please sign up (demo).', 'error');
  }
};

/* ---------- TRACKING [DEMO] ---------- */
$('#trackingForm').onsubmit = e => {
  e.preventDefault();
  const orderId = $('#trackOrderId').value.trim().toUpperCase();
  const phone = $('#trackPhone').value.trim();
  const orders = JSON.parse(localStorage.getItem('verdant_orders') || '[]');
  const order = orders.find(o => o.id.toUpperCase() === orderId && o.phone.replace(/\s/g,'') === phone.replace(/\s/g,''));
  const result = $('#trackingResult');

  if (!order) {
    result.innerHTML = `<div class="tracking-result-card"><h3>Order not found</h3><p style="color:#6b6b6b">No matching order in this browser. Real tracking requires a backend order database.</p></div>`;
    return;
  }

  const steps = ['Order Received','Order Confirmed','Processing','Shipped','Out for Delivery','Delivered'];
  const current = steps.indexOf(order.status) > -1 ? steps.indexOf(order.status) : 0;
  result.innerHTML = `
    <div class="tracking-result-card">
      <h3>Order ${esc(order.id)}</h3>
      <p style="font-size:0.85rem;color:#6b6b6b">Placed: ${new Date(order.date).toLocaleDateString()} · Payment: ${esc(order.payment)}</p>
      <div class="status-steps">
        ${steps.map((s, i) => `
          <div class="status-step ${i <= current ? 'done' : ''} ${i === current ? 'current' : ''}">
            <div class="status-dot">${i <= current ? '✓' : ''}</div>
            <div class="status-label">${s}</div>
          </div>`).join('')}
      </div>
      <p style="font-size:0.75rem;color:#8a7d5c;margin-top:12px">Demo data — a backend is required for real order tracking.</p>
    </div>`;
};

/* ---------- MENU TOGGLE ---------- */
$('#menuToggle').onclick = () => $('#navLinks').classList.toggle('open');
$('#cartBtn').onclick = () => showPage('cart');
$('#wishlistBtn').onclick = () => showPage('wishlist');

/* ---------- SHOP FILTER LISTENERS ---------- */
function bindShopControls() {
  $('#filterSearch').oninput = e => { currentFilters.search = e.target.value.trim(); renderShop(); };
  $('#sortSelect').onchange = e => { currentFilters.sort = e.target.value; renderShop(); };
  $('#applyPrice').onclick = () => {
    const min = $('#minPrice').value === '' ? null : +$('#minPrice').value;
    const max = $('#maxPrice').value === '' ? null : +$('#maxPrice').value;
    currentFilters.minPrice = min;
    currentFilters.maxPrice = max;
    renderShop();
  };
  $('#resetFilters').onclick = resetFilters;
  $('#filterToggle').onclick = () => $('#filters').classList.toggle('open');
}

/* ---------- INIT ---------- */
(function init() {
  buildCategoryFilters();
  bindShopControls();
  updateBadges();
  renderHome();
  showPage('home');
})();