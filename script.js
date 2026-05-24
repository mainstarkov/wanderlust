/* ============================================================
   DESTINATIONS DATA
   ============================================================ */
const destinations = [
  {
    name: "Санторини, Греция",
    image: "https://images.unsplash.com/photo-1533441865127-f4806aaa12cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    rating: 4.9,
    reviews: 120,
    price: "$1 299",
    badge: "Хит сезона",
    desc: "Санторини — жемчужина Эгейского моря с белоснежными домиками, синими куполами церквей и потрясающими закатами. Вулканические пляжи, изысканная кухня и вино из местного винограда делают этот остров незабываемым.",
    highlights: [" Закат в Ое — лучший в мире", "Вулканические пляжи Камари и Перисса", "Дегустация местных вин", "Экскурсия на Акротири — минойский город"]
  },
  {
    name: "Мальдивы",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    rating: 5.0,
    reviews: 240,
    price: "$2 499",
    badge: "Люкс",
    desc: "Мальдивы — архипелаг из 1200 коралловых островов с кристально чистой водой и бунгало над океаном. Идеальное место для медового месяца, дайвинга и полного отдыха от городской суеты.",
    highlights: [" Бунгало прямо над водой", "Снорклинг с манта-скатами и черепахами", "Спа-процедуры на закате", "Приватные пляжи"]
  },
  {
    name: "Швейцарские Альпы",
    image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    rating: 4.8,
    reviews: 90,
    price: "$1 799",
    badge: "Природа",
    desc: "Швейцарские Альпы — сказочные горные пейзажи, уютные шале и свежий воздух. Зимой — горные лыжи и сноуборд, летом — трекинг, велосипедные маршруты и альпийские луга.",
    highlights: [" Горнолыжные курорты Церматт и Вербье", "Поезд Glacier Express", "Сыроварни и шоколадные фабрики", "Озеро Женева"]
  },
  {
    name: "Бали, Индонезия",
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    rating: 4.7,
    reviews: 185,
    price: "$999",
    badge: "Бюджетно",
    desc: "Бали — остров богов с рисовыми террасами, древними храмами и тропическими джунглями. Здесь сочетаются духовность, сёрфинг, СПА и уличная еда за копейки.",
    highlights: [" Рисовые террасы Тегалаланг", "Храм Танах Лот на скале", "Сёрфинг в Куте и Чангу", "Традиционный балийский массаж"]
  },
  {
    name: "Токио, Япония",
    image: "https://images.unsplash.com/photo-1551322120-c697cf88fbdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    rating: 4.9,
    reviews: 310,
    price: "$1 599",
    badge: "Популярный",
    desc: "Токио — мегаполис, где древние традиции встречаются с технологиями будущего. Суши у рыбного рынка, роботизированные кафе, сады сакуры и самые вежливые люди на свете.",
    highlights: [" Храм Сэнсо-дзи в Асакусе", "Рынок Цукидзи — свежайшие суши", "Акихабара — электронный квартал", "Гора Фудзи — однодневная поездка"]
  },
  {
    name: "Париж, Франция",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    rating: 4.8,
    reviews: 275,
    price: "$1 399",
    badge: "Романтика",
    desc: "Париж — вечный город любви, моды и гастрономии. Эйфелева башня, Лувр, круассаны в уличных кафе и прогулки вдоль Сены создают особую атмосферу, которую невозможно забыть.",
    highlights: [" Эйфелева башня и вид с высоты", "Лувр — Мона Лиза и Venus de Milo", "Шопинг на Елисейских полях", "Круиз по Сене"]
  },
  {
    name: "Дубай, ОАЭ",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    rating: 4.6,
    reviews: 150,
    price: "$1 899",
    badge: "Роскошь",
    desc: "Дубай — город-феномен среди пустыни с самыми высокими небоскрёбами, роскошными отелями и грандиозными торговыми центрами. Здесь можно кататься на лыжах в торговом центре и купаться в тёплом Персидском заливе в один день.",
    highlights: [" Бурдж-Халифа — самое высокое здание мира", "Торговый центр Дубай Молл", "Сафари в пустыне на джипах", "Золотой рынок Сук Аль-Дахаб"]
  },
  {
    name: "Тропический рай",
    image: "https://images.unsplash.com/photo-1603477849227-705c424d1d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    rating: 4.9,
    reviews: 200,
    price: "$1 199",
    badge: "Эксклюзив",
    desc: "Нетронутые пляжи с лазурной водой, кокосовые пальмы и полная тишина — идеальное место для тех, кто хочет спрятаться от мира. Частный риф, живописные закаты и морепродукты прямо с лодки.",
    highlights: [" Приватный коралловый риф", "Каякинг и SUP-бординг", "Рыбалка с местными рыбаками", "Звёздное небо без засветки"]
  }
];

/* ============================================================
   TESTIMONIALS DATA
   ============================================================ */
const testimonials = [
  {
    name: "Анна Смирнова",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    quote: "Незабываемое путешествие! Тур был организован идеально, а гид знал всё о каждом уголке страны. Уже планирую следующую поездку!",
    rating: 5
  },
  {
    name: "Михаил Чен",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    quote: "Лучшее соотношение цены и качества! Отели были роскошными, а поездка превосшла все ожидания. Рекомендую всем путешественникам.",
    rating: 5
  },
  {
    name: "Елена Вильямс",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    quote: "Профессиональный сервис от начала до конца. Поддержка 24/7 давала спокойствие на протяжении всего путешествия. Уже бронирую снова!",
    rating: 5
  }
];

/* ============================================================
   HEADER — SCROLL SHADOW
   ============================================================ */
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

/* ============================================================
   BURGER MENU
   ============================================================ */
const burger    = document.getElementById("burger");
const mobileNav = document.getElementById("mobile-nav");

burger.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
});

// Close mobile nav when a link is clicked
mobileNav.querySelectorAll(".mobile-nav__link").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  });
});

// Close on outside click
document.addEventListener("click", e => {
  if (!header.contains(e.target)) {
    mobileNav.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
});

/* ============================================================
   TESTIMONIALS SLIDER
   ============================================================ */
let current = 0;
let autoTimer;

const card        = document.getElementById("testimonial-card");
const starsEl     = document.getElementById("testimonial-stars");
const quoteEl     = document.getElementById("testimonial-quote");
const avatarEl    = document.getElementById("testimonial-avatar");
const nameEl      = document.getElementById("testimonial-name");
const dotsWrap    = document.getElementById("testimonial-dots");
const prevBtn     = document.getElementById("prev-btn");
const nextBtn     = document.getElementById("next-btn");

function renderDots() {
  dotsWrap.innerHTML = "";
  testimonials.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.className = "testimonial-dot" + (i === current ? " active" : "");
    btn.setAttribute("aria-label", `Отзыв ${i + 1}`);
    btn.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(btn);
  });
}

function renderTestimonial() {
  const t = testimonials[current];
  starsEl.innerHTML = Array.from({ length: t.rating }, () =>
    `<svg class="star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
  ).join("");
  quoteEl.textContent = t.quote;
  avatarEl.src        = t.avatar;
  avatarEl.alt        = t.name;
  nameEl.textContent  = t.name;
  renderDots();
}

function goTo(index) {
  card.classList.add("fade-out");
  setTimeout(() => {
    current = (index + testimonials.length) % testimonials.length;
    renderTestimonial();
    card.classList.remove("fade-out");
  }, 280);
  resetAuto();
}

function resetAuto() {
  clearInterval(autoTimer);
  autoTimer = setInterval(() => goTo(current + 1), 5000);
}

prevBtn.addEventListener("click", () => goTo(current - 1));
nextBtn.addEventListener("click", () => goTo(current + 1));

// Touch swipe on testimonial card
let touchStartX = 0;
card.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; }, { passive: true });
card.addEventListener("touchend", e => {
  const dx = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(dx) > 40) goTo(dx > 0 ? current + 1 : current - 1);
});

// Init
renderTestimonial();
resetAuto();

/* ============================================================
   SCROLL-IN REVEAL
   ============================================================ */
const revealTargets = document.querySelectorAll(
  ".dest-card, .feature-card, .section-header, .testimonials, .newsletter"
);

revealTargets.forEach(el => el.classList.add("reveal"));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => observer.observe(el));

/* ============================================================
   SEARCH FORM — SMOOTH SCROLL TO DESTINATIONS
   ============================================================ */
document.querySelector(".search-card__btn").addEventListener("click", () => {
  const dest = document.getElementById("destinations");
  if (dest) dest.scrollIntoView({ behavior: "smooth" });
});

/* ============================================================
   MODAL
   ============================================================ */
const modalOverlay = document.getElementById("modal-overlay");
const modalClose   = document.getElementById("modal-close");
const modalImg     = document.getElementById("modal-img");
const modalBadge   = document.getElementById("modal-badge");
const modalRating  = document.getElementById("modal-rating");
const modalPrice   = document.getElementById("modal-price");
const modalTitle   = document.getElementById("modal-title");
const modalDesc    = document.getElementById("modal-desc");
const modalHL      = document.getElementById("modal-highlights");

function openModal(data) {
  modalImg.src     = data.image;
  modalImg.alt     = data.name;
  modalBadge.textContent = data.badge;
  modalTitle.textContent = data.name;
  modalDesc.textContent  = data.desc;
  modalPrice.textContent = `От ${data.price}`;
  modalRating.innerHTML  =
    `<svg class="star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
     <span>${data.rating}</span>
     <span class="rating__count">(${data.reviews}+ отзывов)</span>`;
  modalHL.innerHTML = data.highlights.map(h => `<li>${h}</li>`).join("");
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// Bind click on each dest-card
document.querySelectorAll(".dest-card").forEach((card, i) => {
  card.addEventListener("click", () => openModal(destinations[i]));
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") openModal(destinations[i]); });
});

/* ============================================================
   NEWSLETTER — BASIC VALIDATION
   ============================================================ */
const newsletterInput = document.querySelector(".newsletter__input");
const newsletterBtn   = document.querySelector(".newsletter__btn");

newsletterBtn.addEventListener("click", () => {
  const email = newsletterInput.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    newsletterInput.style.borderColor = "#e53e3e";
    newsletterInput.focus();
    return;
  }
  newsletterInput.style.borderColor = "";
  newsletterBtn.textContent = "Вы подписаны ✓";
  newsletterBtn.disabled = true;
  newsletterBtn.style.opacity = "0.7";
  newsletterInput.value = "";
});

newsletterInput.addEventListener("input", () => {
  newsletterInput.style.borderColor = "";
});