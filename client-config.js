/**
 * MÜŞTERİ KONFİGÜRASYONU
 * Yeni müşteri için yalnızca bu dosyayı doldurun.
 * index.html, style.css ve script.js hiç değişmez.
 */
window.CLIENT = {

  /* ── MARKA ─────────────────────────────────────────── */
  name: {
    sub:  'JACKSON HEIGHTS',   // Küçük üst yazı (şehir / semt vb.)
    main: 'PETISA SPA',        // Büyük logo metni (boşlukta otomatik alt satır)
  },
  tagline: 'Pet Grooming & Spa',
  city:    'New York',

  brand: {
    primary: '#C9184A',  // Butonlar, linkler, vurgu
    text:    '#6B4C5A',  // Gövde metin
    dark:    '#1A0010',  // Başlıklar, koyu alanlar
  },

  /* ── İLETİŞİM ──────────────────────────────────────── */
  phone:     '(718) 507-7887',
  whatsapp:  '17185077887',  // Ülke kodu dahil, + ve boşluk yok
  address:   '72-09 35th Ave Ground Floor, Jackson Heights, NY 11372',
  hours:     ['Tuesday – Friday: 8:30 AM – 6:00 PM', 'Saturday – Sunday: 8:30 AM – 5:00 PM', 'Monday: Closed'],
  instagram: 'https://www.instagram.com/petisaspa',
  mapQuery:  '72-09+35th+Ave+Jackson+Heights+NY+United+States',  // Google Maps arama terimi

  /* ── PUANLAMA ───────────────────────────────────────── */
  rating:      '4.6',
  reviewCount: 152,

  /* ── GÖRSELLER ─────────────────────────────────────── */
  heroImage:  'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=1400&fit=crop&crop=center&q=85',
  aboutImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=85',

  /* ── HAKKIMIZDA METİNLERİ (dizi; her öğe bir paragraf) */
  aboutText: [
    'At Petisa Spa in Jackson Heights, we believe every pet deserves to feel pampered and safe. Our experienced groomers are known for their patience and gentle touch — even the most anxious dogs leave here with a wagging tail.',
    'From precision breed cuts to full spa packages, we deliver premium grooming at honest prices. Visit our cozy salon on 35th Ave and discover why pet parents across Queens trust us with their beloved companions.',
  ],

  /* ── İSTATİSTİK ÇUBUĞU (4 öğe) ───────────────────── */
  stats: [
    { value: '152+',     label: 'Happy Clients' },
    { value: '4.6★',     label: 'Google Rating' },
    { value: 'Expert',   label: 'Grooming' },
    { value: 'Queens',   label: 'Jackson Heights' },
  ],

  /* ── HİZMETLER (4 adet; son kart otomatik vurgu rengi) */
  services: [
    {
      icon: '✂️',
      title: 'Pet Haircut',
      desc: 'Breed-specific cuts tailored to your pet\'s coat — precise, clean, and styled to perfection.',
      ctaText: 'Book Now',
      ctaHref: 'tel:+17185077887',
    },
    {
      icon: '🛁',
      title: 'Grooming & Spa',
      desc: 'Full grooming packages including bath, blow-dry, nail trim, ear cleaning, and finishing spritz.',
      ctaText: 'Book Now',
      ctaHref: 'tel:+17185077887',
    },
    {
      icon: '💅',
      title: 'Nail & Ear Care',
      desc: 'Quick, gentle nail trimming and ear cleaning to keep your pet healthy and comfortable between visits.',
      ctaText: 'Book Now',
      ctaHref: 'tel:+17185077887',
    },
    {
      icon: '🐾',
      title: 'Anxiety-Free Care',
      desc: 'Specialists in nervous and anxious pets — our calm, loving approach keeps every tail wagging throughout.',
      ctaText: 'Learn More',
      ctaHref: 'https://wa.me/17185077887',
    },
  ],

  /* ── GALERİ (5 öğe; layout: 'normal' | 'tall' | 'wide') */
  gallery: [
    { url: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=600&q=85', label: 'Cat Grooming',  layout: 'tall' },
    { url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=85', label: 'Puppy Spa',    layout: 'normal' },
    { url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=85', label: 'After Groom',   layout: 'normal' },
    { url: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&q=85', label: 'Dog Bath',      layout: 'normal' },
    { url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=900&q=85', label: 'Happy Pets',    layout: 'wide' },
  ],

  /* ── MÜŞTERİ YORUMLARI (yalnızca iyi olanlar) ─────── */
  reviews: [
    { text: 'Amazing service. My dog is usually crying with anxiety when I pick her up from groomers. When I picked her up here she was wagging her tail and happy. Her haircut was so nice also. I\'ll continue to come here from now on.',  author: 'Natalie O.' },
    { text: 'I love Petisa! My two fur babies can be nervous with strangers but they have been so sweet and patient with them and they love them! Great prices too for grooming.',                                                             author: 'Gigi J.' },
    { text: 'Great place, great service, and an amazing staff. They truly care about every single pet that comes through that door.',                                                                                                          author: 'Local Guide' },
    { text: 'The nicest groomer answered all my questions and was so sweet to my dogs. Highly recommend Petisa Spa to anyone in Jackson Heights!',                                                                                            author: 'Queens Pet Parent' },
    { text: 'My pup comes out looking fabulous every single time. The staff is professional, friendly, and genuinely loves animals.',                                                                                                         author: 'Maria L.' },
  ],

};
