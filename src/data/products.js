// Static product catalogue for RamBilash Sah General & Wholesale Store.
//
// Each product supports:
//   id, name, brand, category, emoji (shown on the neutral placeholder when no photo is set),
//   image  – optional path to a real photo, e.g. '/images/products/atta.webp'.
//            Only use a photo that shows this exact product (or your own shop photo of it).
//   pack   – packaging type, e.g. 'Pouch', 'Bottle', 'Jar / Tin', 'Packet', 'Loose / Bulk'.
//   sizes  – confirmed pack sizes only, e.g. ['500 ml', '1 L']. Leave empty if not confirmed.
//   price  – optional confirmed price text, e.g. '₹45 / kg'. null shows "Contact for Price".
//   featured – shows the product in "Featured" lists.
//   note   – optional short label, e.g. 'Seasonal'.
//
// Add real product / store photos to /public/images/products and set the `image` field.

// Category order follows the shop's catalogue structure (first 12), then the remaining store sections.
export const CATEGORIES = [
  { id: 'oil-ghee', name: 'Cooking Oil & Ghee', emoji: '🫒', theme: 'from-yellow-100 to-lime-50' },
  { id: 'dal-pulses', name: 'Dal & Pulses', emoji: '🫘', theme: 'from-orange-100 to-amber-50' },
  { id: 'atta-flour', name: 'Atta & Flour', emoji: '🌾', theme: 'from-amber-100 to-yellow-50' },
  { id: 'spices', name: 'Spices & Rakesh Masala', emoji: '🌶️', theme: 'from-red-100 to-orange-50' },
  { id: 'sugar-grocery', name: 'Sugar & Daily Grocery', emoji: '🧂', theme: 'from-slate-100 to-white' },
  { id: 'biscuits-bakery', name: 'Biscuits & Bakery', emoji: '🍪', theme: 'from-amber-200 to-orange-50' },
  { id: 'agarbatti-dhoop', name: 'Agarbatti & Dhoop', emoji: '🕯️', theme: 'from-orange-200 to-yellow-50' },
  { id: 'chocolates-toffees', name: 'Chocolates & Toffees', emoji: '🍫', theme: 'from-rose-100 to-amber-50' },
  { id: 'snacks-chips', name: 'Snacks & Chips', emoji: '🥔', theme: 'from-yellow-100 to-orange-50' },
  { id: 'baby-nutrition', name: 'Baby Milk Powder & Nutrition', emoji: '🍼', theme: 'from-sky-100 to-white' },
  { id: 'tea-beverages', name: 'Tea & Beverages', emoji: '☕', theme: 'from-emerald-100 to-lime-50' },
  { id: 'puja-samagri', name: 'Puja Samagri', emoji: '🪔', theme: 'from-orange-200 to-yellow-50' },
  { id: 'rice', name: 'Rice', emoji: '🍚', theme: 'from-amber-50 to-white' },
  { id: 'milk-dairy', name: 'Milk & Dairy Products', emoji: '🥛', theme: 'from-sky-100 to-white' },
  { id: 'personal-care', name: 'Personal Care', emoji: '🧴', theme: 'from-pink-100 to-rose-50' },
  { id: 'household', name: 'Household Essentials', emoji: '🧹', theme: 'from-teal-100 to-cyan-50' },
];

export const CATEGORY_MAP = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));

const toProducts = (id) => ({ ...CATEGORY_MAP[id], to: `/products?category=${id}` });

// Homepage "Popular Categories" – each card links to the right page.
// Exported at the bottom of this file, after empty categories are removed.
const HOME_CATEGORY_LIST = [
  toProducts('oil-ghee'),
  toProducts('dal-pulses'),
  toProducts('atta-flour'),
  toProducts('spices'),
  toProducts('sugar-grocery'),
  toProducts('biscuits-bakery'),
  toProducts('agarbatti-dhoop'),
  toProducts('chocolates-toffees'),
  toProducts('snacks-chips'),
  toProducts('baby-nutrition'),
  toProducts('tea-beverages'),
  { ...CATEGORY_MAP['puja-samagri'], to: '/puja-samagri' },
  { id: 'itc', name: 'ITC Products', emoji: '🏷️', theme: 'from-blue-100 to-indigo-50', to: '/itc-brands' },
  { id: 'hul', name: 'HUL Products', emoji: '🧴', theme: 'from-sky-100 to-blue-50', to: '/hul-brands' },
];

const p = (id, name, brand, category, emoji, extra = {}) => ({
  id,
  name,
  brand,
  category,
  emoji,
  image: null,
  pack: null,
  sizes: [],
  price: null,
  featured: false,
  ...extra,
});

const ASSORTED = 'Assorted Brands';
const LOOSE = 'Loose / Assorted';
const LOOSE_BULK = 'Loose / Bulk';
const img = (file) => `/images/products/${file}.webp`;

// Rakesh Masala varieties and pack sizes as listed on the brand's official site (rakeshmasala.com).
// Shop stock is not confirmed, so they are labelled as catalogue examples.
const rakesh = (id, name, sizes, image = null) =>
  p(`rakesh-${id}`, `Rakesh ${name}`, 'Rakesh Masala', 'spices', '🥘', {
    pack: 'Packet',
    sizes,
    note: 'Catalogue example',
    image,
  });

// Only products with a real photo are shown on the site. Items without one stay listed here
// and appear automatically as soon as you set their `image`.
const hasPhoto = (x) => Boolean(x.image);

// ---------------- General store products ----------------
const STORE_LIST = [
  // 1. Cooking Oil & Ghee
  p('fortune-kachi-ghani-pouch', 'Fortune Premium Kachi Ghani Mustard Oil (Pouch)', 'Fortune', 'oil-ghee', '🫒', { pack: 'Pouch', featured: true, image: img('own-fortune-kachi-ghani-pouch') }),
  p('fortune-kachi-ghani-bottle', 'Fortune Premium Kachi Ghani Mustard Oil (Bottle)', 'Fortune', 'oil-ghee', '🫒', { pack: 'Bottle', image: img('pack-fortune-kachi-ghani-bottle') }),
  p('fortune-kachi-ghani-jar', 'Fortune Premium Kachi Ghani Mustard Oil (Jar / Large Container)', 'Fortune', 'oil-ghee', '🫒', { pack: 'Jar / Tin' }),
  p('fortune-mustard-oil', 'Fortune Mustard Oil', 'Fortune', 'oil-ghee', '🫒'),
  p('masal-mustard-oil', 'Masal Mustard Oil', 'Masal', 'oil-ghee', '🫒'),
  p('pehalwan-mustard-oil', 'Pehalwan Mustard Oil', 'Pehalwan', 'oil-ghee', '🫒'),
  p('fortune-refined-pouch', 'Fortune Refined Oil (Pouch)', 'Fortune', 'oil-ghee', '🫒', { pack: 'Pouch', image: img('pack-fortune-refined-pouch') }),
  p('fortune-refined-bottle', 'Fortune Refined Oil (Bottle)', 'Fortune', 'oil-ghee', '🫒', { pack: 'Bottle', image: img('pack-fortune-refined-bottle') }),
  // Brand spelling "RAG" still to be confirmed by the shop owner.
  p('rag-refined-oil', 'RAG Refined Oil', 'RAG', 'oil-ghee', '🫒'),
  p('other-refined-oils', 'Other Refined Cooking Oils', ASSORTED, 'oil-ghee', '🫒', { image: img('refined-oil') }),
  p('patanjali-ghee', "Patanjali Cow's Ghee (Ramdev Baba Ghee)", 'Patanjali', 'oil-ghee', '🧈', { image: img('pack-patanjali-ghee') }),
  p('other-ghee', 'Other Packaged Ghee', ASSORTED, 'oil-ghee', '🧈'),

  // 2. Dal & Pulses
  p('chana-dal-loose', 'Chana Dal (Loose / Bulk)', LOOSE, 'dal-pulses', '🫘', { pack: LOOSE_BULK, featured: true, image: img('chana-dal') }),
  p('chana-dal-packet', 'Chana Dal (Packaged)', ASSORTED, 'dal-pulses', '🫘', { pack: 'Packet' }),
  p('moong-dal', 'Moong Dal', LOOSE, 'dal-pulses', '🫘', { pack: LOOSE_BULK, image: img('moong-dal') }),
  p('masoor-dal', 'Masoor Dal', LOOSE, 'dal-pulses', '🫘', { pack: LOOSE_BULK, image: img('masoor-dal') }),
  p('toor-dal', 'Toor Dal', LOOSE, 'dal-pulses', '🫘', { pack: LOOSE_BULK, image: img('toor-dal') }),
  p('urad-dal', 'Urad Dal', LOOSE, 'dal-pulses', '🫘', { pack: LOOSE_BULK, image: img('urad-dal') }),
  p('chana', 'Chana (Whole)', LOOSE, 'dal-pulses', '🫘', { pack: LOOSE_BULK, image: img('chana') }),
  p('dal', 'Other Pulses (Mixed Dal)', LOOSE, 'dal-pulses', '🫘', { pack: LOOSE_BULK, image: img('dal') }),

  // 3. Atta & Flour
  p('aashirvaad-atta', 'Aashirvaad Atta', 'Aashirvaad', 'atta-flour', '🌾', { pack: 'Packet', featured: true, image: img('itc-aashirvaad-atta') }),
  p('aashirvaad-select-atta', 'Aashirvaad Select Atta', 'Aashirvaad', 'atta-flour', '🌾', { pack: 'Packet', image: img('pack-aashirvaad-select-atta') }),
  p('aashirvaad-shudh-chakki-atta', 'Aashirvaad Shudh Chakki Atta', 'Aashirvaad', 'atta-flour', '🌾', { pack: 'Packet' }),
  p('other-branded-atta', 'Other Branded Atta', ASSORTED, 'atta-flour', '🌾', { pack: 'Packet' }),
  p('local-chakki-atta', 'Local Chakki Atta', LOOSE, 'atta-flour', '🌾', { pack: LOOSE_BULK, image: img('atta') }),
  p('maida', 'Maida', ASSORTED, 'atta-flour', '🥣', { image: img('maida') }),
  p('suji', 'Suji', ASSORTED, 'atta-flour', '🥣', { image: img('suji') }),
  p('besan', 'Besan', ASSORTED, 'atta-flour', '🌾', { image: img('besan') }),

  // 4. Spices & Rakesh Masala
  p('turmeric', 'Haldi (Turmeric) Powder', LOOSE, 'spices', '🟡', { image: img('turmeric') }),
  p('red-chilli', 'Red Chilli Powder', LOOSE, 'spices', '🌶️', { image: img('red-chilli') }),
  p('coriander', 'Dhania (Coriander) Powder', LOOSE, 'spices', '🌿', { image: img('coriander') }),
  p('lahsun', 'Lahsun (Garlic)', LOOSE, 'spices', '🧄', { pack: LOOSE_BULK, image: img('lahsun') }),
  p('jeera', 'Jeera (Cumin)', LOOSE, 'spices', '🌿', { pack: LOOSE_BULK, image: img('jeera') }),
  p('kali-mirch', 'Marich / Kali Mirch (Black Pepper)', LOOSE, 'spices', '⚫', { pack: LOOSE_BULK, image: img('kali-mirch') }),
  p('garam-masala', 'Garam Masala', LOOSE, 'spices', '🥘', { image: img('garam-masala') }),
  p('spices', 'Mixed Spices (Masala)', ASSORTED, 'spices', '🥘', { image: img('spices') }),
  rakesh('garam-masala', 'Garam Masala', ['50 g', '100 g']),
  rakesh('sabji-masala', 'Sabji Masala', ['50 g', '100 g']),
  rakesh('meat-masala', 'Meat Masala', ['50 g', '100 g']),
  rakesh('chicken-masala', 'Chicken Masala', ['50 g', '100 g']),
  rakesh('kitchen-queen', 'Kitchen Queen Masala', ['50 g', '100 g']),
  rakesh('chhole-masala', 'Chhole Masala', ['50 g']),
  rakesh('chaat-masala', 'Tanatan Chaat Masala', ['50 g', '100 g']),
  rakesh('turmeric', 'Turmeric Powder', ['100 g', '200 g', '500 g', '1 kg']),
  rakesh('coriander', 'Coriander Powder', ['100 g', '200 g', '500 g', '1 kg']),
  rakesh('red-chilli', 'Red Chilli Powder', ['100 g', '200 g', '500 g', '1 kg']),
  rakesh('kashmiri-chilli', 'Kashmiri Chili Powder', ['50 g', '100 g']),
  rakesh('cumin', 'Cumin Powder', ['50 g', '100 g']),
  rakesh('black-pepper', 'Black Pepper Powder', ['50 g']),
  rakesh('hing', 'Deshi Tadka Hing', ['10 g', '25 g', '50 g']),
  rakesh('shahi-biryani', 'Shahi Biryani Masala', ['50 g'], img('pack-rakesh-biryani')),
  rakesh('pav-bhaji', 'Pav Bhaji Masala', ['50 g']),
  rakesh('shahi-paneer', 'Shahi Paneer Masala', ['50 g']),
  p('rakesh-masala', 'Other Rakesh Masala Products', 'Rakesh Masala', 'spices', '🥘', { note: 'Bulk & Retail' }),

  // 5. Sugar & Daily Grocery
  p('sugar', 'Sugar (Chini) – Loose', LOOSE, 'sugar-grocery', '🥄', { pack: LOOSE_BULK, featured: true, image: img('sugar') }),
  p('sugar-packaged', 'Sugar (Chini) – Packaged', ASSORTED, 'sugar-grocery', '🥄', { pack: 'Packet' }),
  p('salt', 'Salt', ASSORTED, 'sugar-grocery', '🧂', { image: img('salt') }),
  p('daily-grocery', 'Other Daily Grocery Essentials', ASSORTED, 'sugar-grocery', '🛒', { image: img('daily-grocery') }),

  // 6. Biscuits & Bakery
  p('parle-g', 'Parle-G Biscuits', 'Parle', 'biscuits-bakery', '🍪', { pack: 'Packet', featured: true, image: img('pack-parle-g') }),
  p('dreamlite', 'Dreamlite Biscuits', 'Dreamlite', 'biscuits-bakery', '🍪', { pack: 'Packet' }),
  p('good-day', 'Good Day Biscuits', 'Britannia', 'biscuits-bakery', '🍪', { pack: 'Packet' }),
  p('tos', 'TOS Biscuits', 'TOS', 'biscuits-bakery', '🍪', { pack: 'Packet' }),
  p('biscuits', 'Other Biscuits', ASSORTED, 'biscuits-bakery', '🍪', { pack: 'Packet' }),
  p('toast', 'Toast (Rusk)', ASSORTED, 'biscuits-bakery', '🍞', { image: img('rusk') }),
  p('bread', 'Bread', ASSORTED, 'biscuits-bakery', '🍞', { image: img('bread') }),
  p('bakery', 'Packaged Bakery Products', ASSORTED, 'biscuits-bakery', '🥐', { pack: 'Packet' }),

  // 8. Chocolates & Toffees
  p('snickers', 'Snickers', 'Snickers', 'chocolates-toffees', '🍫', { image: img('pack-snickers') }),
  p('melody', 'Melody Toffee', 'Parle', 'chocolates-toffees', '🍬', { image: img('pack-melody') }),
  p('kacha-aam', 'Kacha Aam Candy', ASSORTED, 'chocolates-toffees', '🥭'),
  p('chocolates', 'Other Chocolates', ASSORTED, 'chocolates-toffees', '🍫', { image: img('chocolates') }),
  p('candies', 'Candies', ASSORTED, 'chocolates-toffees', '🍬', { image: img('candies') }),
  p('toffees', 'Toffees', ASSORTED, 'chocolates-toffees', '🍭', { image: img('toffees') }),

  // 9. Snacks & Chips
  p('kurkure', 'Kurkure Masala Munch', 'Kurkure', 'snacks-chips', '🌽', { pack: 'Packet', featured: true, image: img('pack-kurkure-masala-munch') }),
  p('kurkure-other', 'Kurkure (Other Flavours)', 'Kurkure', 'snacks-chips', '🌽', { pack: 'Packet', image: img('pack-kurkure-other') }),
  p('lays', "Lay's Chips", "Lay's", 'snacks-chips', '🥔', { pack: 'Packet' }),
  p('potato-chips', 'Other Potato Chips', ASSORTED, 'snacks-chips', '🥔', { image: img('potato-chips') }),
  p('bingo-chips', 'Bingo! Snacks', 'Bingo!', 'snacks-chips', '🥔', { pack: 'Packet', image: img('itc-bingo-mad-angles') }),
  p('tedhe-medhe', 'Bingo! Tedhe Medhe', 'Bingo!', 'snacks-chips', '🥨', { pack: 'Packet', image: img('itc-bingo-tedhe-medhe') }),
  p('bikaji-bhujia', 'Bikaji Bhujia', 'Bikaji', 'snacks-chips', '🥜', { pack: 'Packet' }),
  p('moong-dal-namkeen', 'Moong Dal Namkeen', ASSORTED, 'snacks-chips', '🫘', { image: img('moong-dal-namkeen') }),
  p('maggi', 'Maggi Noodles', 'Maggi', 'snacks-chips', '🍜', { pack: 'Packet', image: img('pack-maggi') }),
  p('oyes', 'Oyes Snacks', 'Oyes', 'snacks-chips', '🥔', { pack: 'Packet' }),
  p('noodles', 'Other Noodles', ASSORTED, 'snacks-chips', '🍜', { image: img('noodles') }),
  p('pasta', 'Pasta', ASSORTED, 'snacks-chips', '🍝', { image: img('pasta') }),
  p('namkeen', 'Other Namkeen', ASSORTED, 'snacks-chips', '🥜', { image: img('namkeen') }),
  p('mixture', 'Mixture', ASSORTED, 'snacks-chips', '🥜', { image: img('mixture') }),

  // 10. Baby Milk Powder & Nutrition
  // Listed by product name only; stage/age wording must be read from the pack. No claims, not promoted.
  p('amul-spray', 'Amulspray Infant Milk Food', 'Amul', 'baby-nutrition', '🍼', { pack: 'Tin', note: 'Check stage on pack', image: img('own-amulspray') }),
  p('lactogen-1', 'Nestlé Lactogen 1', 'Nestlé', 'baby-nutrition', '🍼', { note: 'Check stage on pack' }),
  p('lactogen-2', 'Nestlé Lactogen Pro 2', 'Nestlé', 'baby-nutrition', '🍼', { pack: 'Box', note: 'Check stage on pack', image: img('own-lactogen-pro-2') }),
  p('lactogen-other', 'Nestlé Lactogen (Other Variants)', 'Nestlé', 'baby-nutrition', '🍼', { note: 'Check stage on pack' }),

  // 11. Tea & Beverages
  p('nidhi-tea', 'Nidhi Tea', 'Nidhi', 'tea-beverages', '🍵', { featured: true }),
  p('tea-brands', 'Tea (Other Brands)', ASSORTED, 'tea-beverages', '🍵', { image: img('tea') }),
  p('horlicks', 'Horlicks Lite (Regular Malt)', 'Horlicks', 'tea-beverages', '🥛', { pack: 'Jar', sizes: ['450 g'], image: img('own-horlicks-lite') }),
  p('bournvita', 'Bournvita', 'Bournvita', 'tea-beverages', '🥛', { image: img('pack-bournvita') }),
  p('coffee', 'Coffee', ASSORTED, 'tea-beverages', '☕', { image: img('coffee') }),
  p('health-drinks', 'Health Drinks', ASSORTED, 'tea-beverages', '🥤'),

  // Rice
  p('rice', 'Rice', LOOSE, 'rice', '🍚', { pack: LOOSE_BULK, featured: true, image: img('rice') }),
  p('basmati-rice', 'Basmati Rice', ASSORTED, 'rice', '🍚', { featured: true, image: img('basmati-rice') }),
  p('india-gate-classic', 'India Gate Classic Basmati Rice', 'India Gate', 'rice', '🍚', { pack: 'Pouch', image: img('own-india-gate-classic') }),

  // Milk & Dairy
  p('milk', 'Milk', ASSORTED, 'milk-dairy', '🥛'),

  // Personal Care
  p('hair-oil', 'Hair Oil', ASSORTED, 'personal-care', '💧', { image: img('hair-oil') }),
  p('mehndi', 'Mehndi', ASSORTED, 'personal-care', '🌿', { image: img('mehndi') }),
  p('perfume', 'Perfume', ASSORTED, 'personal-care', '🌸', { image: img('perfume') }),
  p('soap', 'Soap', ASSORTED, 'personal-care', '🧼', { featured: true, image: img('soap') }),
  p('shampoo', 'Shampoo', ASSORTED, 'personal-care', '🧴'),
  p('toothpaste', 'Toothpaste', ASSORTED, 'personal-care', '🪥', { image: img('toothpaste') }),
  p('toothbrush', 'Toothbrush', ASSORTED, 'personal-care', '🪥', { image: img('toothbrush') }),
  p('face-wash', 'Face Wash', ASSORTED, 'personal-care', '🧴'),

  // Household
  p('detergent', 'Detergent Powder', ASSORTED, 'household', '🧺', { featured: true }),
  p('dishwash', 'Dishwashing Products', ASSORTED, 'household', '🍽️'),
  p('floor-cleaner', 'Floor Cleaner', ASSORTED, 'household', '🧹'),
  p('cleaning', 'Cleaning Essentials', ASSORTED, 'household', '🧽', { image: img('cleaning') }),
  p('matchbox', 'Matchbox (Machis)', ASSORTED, 'household', '🔥', { image: img('matchbox') }),
  p('household-daily', 'Household Daily-use Products', ASSORTED, 'household', '🏠'),
];

export const PRODUCTS = STORE_LIST.filter(hasPhoto);

// ---------------- Puja Samagri & Chhath Puja ----------------
const PUJA_CATEGORY_LIST = [
  { id: 'agarbatti-dhoop', name: 'Agarbatti and Dhoop', emoji: '🕯️' },
  { id: 'diya-wicks', name: 'Diya and Cotton Wicks', emoji: '🪔' },
  { id: 'puja-oil', name: 'Puja Oil & Ghee', emoji: '🫙' },
  { id: 'camphor', name: 'Camphor', emoji: '💠' },
  { id: 'kumkum-chandan', name: 'Kumkum and Chandan', emoji: '🔴' },
  { id: 'guggal-sambrani', name: 'Guggal & Sambrani', emoji: '🌫️' },
  { id: 'dry-fruits', name: 'Nariyal & Dry Fruits', emoji: '🥥' },
];

// Puja items appear on the Puja Samagri page. `category` decides where they sit in All Products
// (e.g. agarbatti in "Agarbatti & Dhoop", Pooja Ghee in "Cooking Oil & Ghee").
const puja = (id, name, pujaCategory, emoji, extra = {}) =>
  p(id, name, ASSORTED, 'puja-samagri', emoji, {
    pujaCategory,
    ...extra,
  });

const AGARBATTI = { category: 'agarbatti-dhoop', pack: 'Packet' };

const PUJA_LIST = [
  // 7. Agarbatti & Dhoop
  puja('forever-agarbatti', 'Forever Agarbatti', 'agarbatti-dhoop', '🕯️', { ...AGARBATTI, brand: 'Forever', featured: true }),
  puja('mangaldeep-agarbatti', 'Mangaldeep Agarbatti', 'agarbatti-dhoop', '🕯️', { ...AGARBATTI, brand: 'Mangaldeep', image: img('itc-mangaldeep-agarbatti') }),
  puja('garima-agarbatti', 'Garima Premium Agarbatti (Incense Sticks)', 'agarbatti-dhoop', '🕯️', { ...AGARBATTI, pack: 'Pouch', brand: 'Garima', featured: true, image: img('own-garima-agarbatti') }),
  puja('garima-wet-dhoop', 'Garima Premium Wet Dhoop', 'agarbatti-dhoop', '🌫️', { ...AGARBATTI, pack: 'Zipper Pouch', brand: 'Garima', image: img('own-garima-wet-dhoop') }),
  puja('cycle-naivedya-sambrani', 'Cycle Naivedya Sambrani Cups', 'agarbatti-dhoop', '🌫️', { ...AGARBATTI, pack: 'Box', sizes: ['15 cups'], brand: 'Cycle', image: img('own-cycle-naivedya-sambrani') }),
  puja('agarbatti', 'Other Agarbatti Brands', 'agarbatti-dhoop', '🕯️', { ...AGARBATTI, image: img('agarbatti') }),
  puja('dhoop-batti', 'Dhoop Batti', 'agarbatti-dhoop', '🌫️', AGARBATTI),
  puja('dhoop', 'Dhoop', 'agarbatti-dhoop', '🌫️', AGARBATTI),

  // Puja Samagri
  puja('diya', 'Diya', 'diya-wicks', '🪔', { featured: true, image: img('diya') }),
  puja('cotton-wicks', 'Cotton Wicks (Batti)', 'diya-wicks', '🪔', { image: img('cotton-wicks') }),
  puja('puja-oil', 'Devli Pooja Oil (Til Oil)', 'puja-oil', '🫙', { brand: 'Devli', pack: 'Bottle', sizes: ['900 ml'], image: img('own-devli-til-oil') }),
  puja('pooja-ghee', 'Rukman Pooja Ghee (Yellow)', 'puja-oil', '🧈', { category: 'oil-ghee', brand: 'Rukman', pack: 'Jar', sizes: ['500 ml'], image: img('own-rukman-pooja-ghee') }),
  puja('camphor', 'Camphor (Kapoor)', 'camphor', '💠', { image: img('own-camphor') }),
  puja('cycle-om-shanthi-camphor', 'Cycle Om Shanthi Pure Camphor', 'camphor', '💠', { brand: 'Cycle', pack: 'Packet', sizes: ['250 g'], image: img('own-cycle-camphor') }),
  puja('kumkum', 'Kumkum', 'kumkum-chandan', '🔴', { image: img('kumkum') }),
  puja('chandan', 'Chandan', 'kumkum-chandan', '🟤', { image: img('chandan') }),
  puja('kuberdhenu-guggal', 'Kuberdhenu Shuddh Guggal', 'guggal-sambrani', '🌫️', { brand: 'Kuberdhenu', pack: 'Jar', featured: true, image: img('own-kuberdhenu-guggal') }),
  puja('guggal', 'Guggal (Loose)', 'guggal-sambrani', '🌫️', { brand: LOOSE, pack: 'Loose', image: img('own-guggal') }),
  puja('naivedya-dhoop-cups', 'Naivedya Dhoop Cups (Sambrani)', 'guggal-sambrani', '🌫️', { image: img('own-naivedya-dhoop-cups') }),
  puja('nariyal', 'Nariyal (Coconut)', 'dry-fruits', '🥥', { featured: true, image: img('own-nariyal') }),
  puja('mungfali', 'Mungfali (Peanuts)', 'dry-fruits', '🥜', { image: img('mungfali') }),
  puja('chhohara', 'Chhohara (Dry Dates)', 'dry-fruits', '🌰', { image: img('chhohara') }),
  puja('kismis', 'Kismis (Raisins)', 'dry-fruits', '🍇', { image: img('kismis') }),
  puja('kaju', 'Kaju (Cashew)', 'dry-fruits', '🥜', { image: img('kaju') }),
  puja('pista', 'Pista (Pistachio)', 'dry-fruits', '🥜', { image: img('pista') }),

];

export const PUJA_PRODUCTS = PUJA_LIST.filter(hasPhoto);
// Puja page category buttons: only those that have visible products.
export const PUJA_CATEGORIES = PUJA_CATEGORY_LIST.filter((c) => PUJA_PRODUCTS.some((x) => x.pujaCategory === c.id));

// ---------------- ITC brands (separate catalogue) ----------------
// Reference: https://itcportal.com/itc-businesses/fmcg.html
// These are catalogue examples, not confirmed stock. Customers are asked to enquire for availability.
export const ITC_BRANDS = [
  { id: 'aashirvaad', name: 'Aashirvaad', range: 'Atta, Spices and Food Products', color: 'from-amber-500 to-yellow-400' },
  { id: 'sunfeast', name: 'Sunfeast', range: 'Biscuits and Bakery Products', color: 'from-orange-500 to-amber-400' },
  { id: 'bingo', name: 'Bingo!', range: 'Chips and Snacks', color: 'from-yellow-400 to-lime-400' },
  { id: 'yippee', name: 'YiPPee!', range: 'Noodles and Pasta', color: 'from-yellow-500 to-orange-400' },
  { id: 'mangaldeep', name: 'Mangaldeep', range: 'Agarbatti and Dhoop', color: 'from-orange-600 to-red-500' },
  { id: 'fiama', name: 'Fiama', range: 'Personal Care', color: 'from-fuchsia-500 to-pink-400' },
  { id: 'vivel', name: 'Vivel', range: 'Soap and Personal Care', color: 'from-rose-500 to-pink-400' },
  { id: 'savlon', name: 'Savlon', range: 'Hygiene and Personal Care', color: 'from-emerald-600 to-green-500' },
  { id: 'engage', name: 'Engage', range: 'Perfumes and Deodorants', color: 'from-slate-700 to-slate-500' },
  { id: 'nimyle', name: 'Nimyle', range: 'Household Cleaning Products', color: 'from-green-600 to-lime-500' },
  { id: 'candyman', name: 'Candyman', range: 'Candies and Confectionery', color: 'from-pink-500 to-orange-400' },
  { id: 'fabelle', name: 'Fabelle', range: 'Chocolates', color: 'from-amber-800 to-amber-600' },
  { id: 'classmate', name: 'Classmate', range: 'Notebooks and Stationery', color: 'from-blue-600 to-sky-500' },
];

export const ITC_BRAND_MAP = Object.fromEntries(ITC_BRANDS.map((b) => [b.id, b]));

// ITC pack photos come from Open Food / Beauty / Products Facts (CC BY-SA), stored as itc-<id>.webp.
const ITC_PHOTOS = new Set([
  'aashirvaad-atta', 'aashirvaad-spices', 'aashirvaad-salt',
  'sunfeast-dark-fantasy', 'sunfeast-marie-light', 'sunfeast-bounce',
  'bingo-mad-angles', 'bingo-tedhe-medhe', 'yippee-noodles', 'mangaldeep-agarbatti',
  'fiama-shower-gel', 'vivel-soap', 'savlon-handwash', 'engage-deo', 'engage-perfume',
  'nimyle-floor', 'fabelle-chocolate', 'classmate-notebook', 'classmate-pens',
]);

const itc = (id, name, brandId, emoji) =>
  p(`itc-${id}`, name, ITC_BRAND_MAP[brandId].name, 'itc', emoji, {
    brandId,
    note: 'Catalogue example',
    image: ITC_PHOTOS.has(id) ? img(`itc-${id}`) : null,
  });

export const ITC_PRODUCTS = [
  itc('aashirvaad-atta', 'Aashirvaad Whole Wheat Atta', 'aashirvaad', '🌾'),
  itc('aashirvaad-spices', 'Aashirvaad Spices', 'aashirvaad', '🌶️'),
  itc('aashirvaad-salt', 'Aashirvaad Salt', 'aashirvaad', '🧂'),
  itc('sunfeast-dark-fantasy', 'Sunfeast Dark Fantasy', 'sunfeast', '🍪'),
  itc('sunfeast-marie-light', 'Sunfeast Marie Light', 'sunfeast', '🍪'),
  itc('sunfeast-bounce', 'Sunfeast Bounce', 'sunfeast', '🍪'),
  itc('bingo-mad-angles', 'Bingo! Mad Angles', 'bingo', '🔺'),
  itc('bingo-tedhe-medhe', 'Bingo! Tedhe Medhe', 'bingo', '🥨'),
  itc('bingo-chips', 'Bingo! Potato Chips', 'bingo', '🥔'),
  itc('yippee-noodles', 'YiPPee! Magic Masala Noodles', 'yippee', '🍜'),
  itc('yippee-pasta', 'YiPPee! Pasta', 'yippee', '🍝'),
  itc('mangaldeep-agarbatti', 'Mangaldeep Agarbatti', 'mangaldeep', '🕯️'),
  itc('mangaldeep-dhoop', 'Mangaldeep Dhoop', 'mangaldeep', '🌫️'),
  itc('fiama-shower-gel', 'Fiama Shower Gel', 'fiama', '🧴'),
  itc('fiama-soap', 'Fiama Soap Bar', 'fiama', '🧼'),
  itc('vivel-soap', 'Vivel Soap', 'vivel', '🧼'),
  itc('savlon-handwash', 'Savlon Handwash', 'savlon', '🧴'),
  itc('savlon-antiseptic', 'Savlon Antiseptic Liquid', 'savlon', '🩹'),
  itc('engage-deo', 'Engage Deodorant', 'engage', '🌸'),
  itc('engage-perfume', 'Engage Perfume', 'engage', '🌸'),
  itc('nimyle-floor', 'Nimyle Floor Cleaner', 'nimyle', '🧹'),
  itc('candyman-toffee', 'Candyman Toffees', 'candyman', '🍬'),
  itc('candyman-candy', 'Candyman Candies', 'candyman', '🍭'),
  itc('fabelle-chocolate', 'Fabelle Chocolates', 'fabelle', '🍫'),
  itc('classmate-notebook', 'Classmate Notebooks', 'classmate', '📓'),
  itc('classmate-pens', 'Classmate Pens & Stationery', 'classmate', '🖊️'),
];

// ---------------- HUL – Hindustan Unilever brands (separate catalogue) ----------------
// Reference: https://www.hul.co.in/brands/
// Catalogue examples, not confirmed stock. Customers are asked to enquire for availability.
export const HUL_SEGMENTS = [
  { id: 'home-care', name: 'Home Care', emoji: '🧺' },
  { id: 'personal-care', name: 'Beauty & Personal Care', emoji: '🧴' },
  { id: 'foods', name: 'Foods & Beverages', emoji: '☕' },
];

export const HUL_BRANDS = [
  // Home care
  { id: 'surf-excel', name: 'Surf Excel', segment: 'home-care', range: 'Detergent Powder & Liquid' },
  { id: 'rin', name: 'Rin', segment: 'home-care', range: 'Detergent Bar & Powder' },
  { id: 'wheel', name: 'Wheel', segment: 'home-care', range: 'Detergent Powder & Bar' },
  { id: 'vim', name: 'Vim', segment: 'home-care', range: 'Dishwash Bar & Gel' },
  { id: 'domex', name: 'Domex', segment: 'home-care', range: 'Toilet & Floor Cleaner' },
  { id: 'comfort', name: 'Comfort', segment: 'home-care', range: 'Fabric Conditioner' },
  // Beauty & personal care
  { id: 'lifebuoy', name: 'Lifebuoy', segment: 'personal-care', range: 'Soap & Handwash' },
  { id: 'lux', name: 'Lux', segment: 'personal-care', range: 'Soap & Body Wash' },
  { id: 'dove', name: 'Dove', segment: 'personal-care', range: 'Soap, Shampoo & Body Care' },
  { id: 'pears', name: 'Pears', segment: 'personal-care', range: 'Soap & Body Wash' },
  { id: 'hamam', name: 'Hamam', segment: 'personal-care', range: 'Soap' },
  { id: 'liril', name: 'Liril', segment: 'personal-care', range: 'Soap' },
  { id: 'ponds', name: "Pond's", segment: 'personal-care', range: 'Face Cream, Powder & Face Wash' },
  { id: 'glow-lovely', name: 'Glow & Lovely', segment: 'personal-care', range: 'Face Cream' },
  { id: 'vaseline', name: 'Vaseline', segment: 'personal-care', range: 'Body Lotion & Petroleum Jelly' },
  { id: 'lakme', name: 'Lakmé', segment: 'personal-care', range: 'Cosmetics & Skin Care' },
  { id: 'sunsilk', name: 'Sunsilk', segment: 'personal-care', range: 'Shampoo & Conditioner' },
  { id: 'clinic-plus', name: 'Clinic Plus', segment: 'personal-care', range: 'Shampoo' },
  { id: 'tresemme', name: 'TRESemmé', segment: 'personal-care', range: 'Shampoo & Hair Care' },
  { id: 'indulekha', name: 'Indulekha', segment: 'personal-care', range: 'Hair Oil' },
  { id: 'closeup', name: 'Closeup', segment: 'personal-care', range: 'Toothpaste' },
  { id: 'pepsodent', name: 'Pepsodent', segment: 'personal-care', range: 'Toothpaste & Toothbrush' },
  { id: 'axe', name: 'Axe', segment: 'personal-care', range: 'Deodorant' },
  // Foods & beverages
  { id: 'brooke-bond', name: 'Brooke Bond', segment: 'foods', range: 'Tea – Red Label, Taj Mahal, Taaza' },
  { id: 'bru', name: 'Bru', segment: 'foods', range: 'Coffee' },
  { id: 'horlicks', name: 'Horlicks', segment: 'foods', range: 'Health Drink' },
  { id: 'boost', name: 'Boost', segment: 'foods', range: 'Health Drink' },
  { id: 'kissan', name: 'Kissan', segment: 'foods', range: 'Ketchup & Jam' },
  { id: 'knorr', name: 'Knorr', segment: 'foods', range: 'Soups & Seasoning' },
  { id: 'hellmanns', name: "Hellmann's", segment: 'foods', range: 'Mayonnaise' },
];

export const HUL_BRAND_MAP = Object.fromEntries(HUL_BRANDS.map((b) => [b.id, b]));

// Photos from Open Food / Beauty / Products Facts (CC BY-SA), stored as hul-<id>.webp.
// Ids listed here have a reviewed photo; the rest show the neutral "Photo coming soon" tile.
const HUL_PHOTOS = new Set([
  'surf-excel',
  'vim',
  'domex',
  'comfort',
  'lifebuoy',
  'lux',
  'dove',
  'pears',
  'hamam',
  'ponds',
  'glow-lovely',
  'vaseline',
  'lakme',
  'sunsilk',
  'clinic-plus',
  'tresemme',
  'indulekha',
  'closeup',
  'pepsodent',
  'axe',
  'taj-mahal',
  'taaza',
  'kissan-ketchup',
  'kissan-jam',
  'knorr',
]);
const HUL_PHOTO_OVERRIDES = { horlicks: img('own-horlicks-lite') };

const hul = (id, name, brandId, emoji) =>
  p(`hul-${id}`, name, HUL_BRAND_MAP[brandId].name, 'hul', emoji, {
    brandId,
    segment: HUL_BRAND_MAP[brandId].segment,
    note: 'Catalogue example',
    image: HUL_PHOTO_OVERRIDES[id] ?? (HUL_PHOTOS.has(id) ? img(`hul-${id}`) : null),
  });

export const HUL_PRODUCTS = [
  hul('surf-excel', 'Surf Excel Detergent', 'surf-excel', '🧺'),
  hul('rin', 'Rin Detergent Bar', 'rin', '🧼'),
  hul('wheel', 'Wheel Detergent Powder', 'wheel', '🧺'),
  hul('vim', 'Vim Dishwash Bar', 'vim', '🍽️'),
  hul('domex', 'Domex Toilet Cleaner', 'domex', '🚽'),
  hul('comfort', 'Comfort Fabric Conditioner', 'comfort', '👕'),
  hul('lifebuoy', 'Lifebuoy Soap & Body Wash', 'lifebuoy', '🧼'),
  hul('lux', 'Lux Soap', 'lux', '🧼'),
  hul('dove', 'Dove Soap & Shampoo', 'dove', '🧴'),
  hul('pears', 'Pears Soap', 'pears', '🧼'),
  hul('hamam', 'Hamam Soap', 'hamam', '🧼'),
  hul('liril', 'Liril Soap', 'liril', '🧼'),
  hul('ponds', "Pond's Talc & Cream", 'ponds', '🧴'),
  hul('glow-lovely', 'Glow & Lovely Face Cream', 'glow-lovely', '🧴'),
  hul('vaseline', 'Vaseline Petroleum Jelly & Lotion', 'vaseline', '🧴'),
  hul('lakme', 'Lakmé Cosmetics', 'lakme', '💄'),
  hul('sunsilk', 'Sunsilk Shampoo', 'sunsilk', '🧴'),
  hul('clinic-plus', 'Clinic Plus Shampoo', 'clinic-plus', '🧴'),
  hul('tresemme', 'TRESemmé Shampoo', 'tresemme', '🧴'),
  hul('indulekha', 'Indulekha Hair Oil', 'indulekha', '🫙'),
  hul('closeup', 'Closeup Toothpaste', 'closeup', '🪥'),
  hul('pepsodent', 'Pepsodent Toothpaste', 'pepsodent', '🪥'),
  hul('axe', 'Axe Deodorant', 'axe', '🌸'),
  hul('red-label', 'Brooke Bond Red Label Tea', 'brooke-bond', '🍵'),
  hul('taj-mahal', 'Brooke Bond Taj Mahal Tea', 'brooke-bond', '🍵'),
  hul('taaza', 'Brooke Bond Taaza Tea', 'brooke-bond', '🍵'),
  hul('bru', 'Bru Coffee', 'bru', '☕'),
  hul('horlicks', 'Horlicks', 'horlicks', '🥛'),
  hul('boost', 'Boost Health Drink', 'boost', '🥛'),
  hul('kissan-ketchup', 'Kissan Tomato Ketchup', 'kissan', '🍅'),
  hul('kissan-jam', 'Kissan Jam', 'kissan', '🍓'),
  hul('knorr', 'Knorr Soup', 'knorr', '🍲'),
  hul('hellmanns', "Hellmann's Mayonnaise", 'hellmanns', '🥚'),
];

// "All Products" shows general store + puja items. ITC items stay on their own page.
export const ALL_STORE_PRODUCTS = [...PRODUCTS, ...PUJA_PRODUCTS];
// Home category cards: keep ITC/Puja links, drop product categories with nothing to show.
export const HOME_CATEGORIES = HOME_CATEGORY_LIST.filter(
  (c) => !c.to.startsWith('/products?') || ALL_STORE_PRODUCTS.some((x) => x.category === c.id),
);
// Infant formula is never promoted as "featured".
export const FEATURED_PRODUCTS = ALL_STORE_PRODUCTS.filter((x) => x.featured && x.category !== 'baby-nutrition');

// Pack type and sizes of a product (used by the ?pack= URL filter on the Products page).
export const productPackOptions = (x) => [x.pack, ...x.sizes].filter(Boolean);

// Lookup across every catalogue (store, puja, ITC and HUL) for product detail pages.
export const PRODUCT_BY_ID = Object.fromEntries(
  [...ALL_STORE_PRODUCTS, ...ITC_PRODUCTS, ...HUL_PRODUCTS].map((x) => [x.id, x]),
);

export const relatedProducts = (product, limit = 4) => {
  const pool = product.category === 'itc' ? ITC_PRODUCTS : product.category === 'hul' ? HUL_PRODUCTS : ALL_STORE_PRODUCTS;
  const sameCategory = pool.filter((x) => x.id !== product.id && x.category === product.category);
  const sameBrand = pool.filter(
    (x) => x.id !== product.id && x.category !== product.category && x.brand === product.brand && !x.brand.startsWith('Assorted') && !x.brand.startsWith('Loose'),
  );
  return [...sameCategory, ...sameBrand].slice(0, limit);
};
