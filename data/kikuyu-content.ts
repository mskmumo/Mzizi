import { TribeData, CulturalPillar } from './content-types';

// Basic Kikuyu content for tribe switching demo
export const kikuyuData: Partial<TribeData> = {
  name: 'Kikuyu',
  slug: 'kikuyu',
  tagline: 'Guardians of Mount Kenya\'s Sacred Heritage',
  heroImage: '/gallery/Kikuyu/IMG-20251204-WA0008.jpg',
  description: 'The Kikuyu people, Kenya\'s largest ethnic group, are traditionally agriculturalists who have inhabited the fertile highlands around Mount Kenya for centuries. Known for their strong community structures, entrepreneurial spirit, and rich cultural ceremonies.',
  
  location: 'Central Kenya - Kiambu, Murang\'a, Nyeri, Kirinyaga, Nyandarua',
  population: 'Over 8.1 million',
  language: 'Gĩkũyũ',
  languageNative: 'Gĩkũyũ',
  
  colors: {
    primary: '#2D5016',
    secondary: '#8B4513',
    accent: '#CD853F'
  },
  
  gallery: [
    '/gallery/Kikuyu/IMG-20251204-WA0008.jpg',
    '/gallery/Kikuyu/IMG-20251204-WA0010.jpg',
    '/gallery/Kikuyu/IMG-20251204-WA0012.jpg',
    '/gallery/Kikuyu/IMG-20251204-WA0013.jpg',
    '/gallery/Kikuyu/IMG-20251204-WA0014.jpg',
    '/gallery/Kikuyu/IMG-20251204-WA0015.jpg',
    '/gallery/Kikuyu/IMG-20251204-WA0016.jpg',
    '/gallery/Kikuyu/IMG-20251204-WA0018.jpg'
  ],
  
  // Content Attribution
  attribution: {
    imageSource: 'Google Images',
    contentSource: 'Various online sources and cultural references',
    contentLicense: 'Educational and cultural preservation purposes',
    note: 'Images sourced from Google Images search. Content compiled from various cultural and educational sources.'
  }
};

// Kikuyu Cultural Pillars (Basic structure for demo)
const kikuyuRhythms: CulturalPillar = {
  id: 'rhythms',
  icon: '🎵',
  title: 'Mũgĩthi',
  subtitle: 'Rhythms - Traditional Music & Dance',
  description: 'The musical traditions of the Kikuyu people, featuring mũgĩthi music and ceremonial dances.',
  longDescription: 'Kikuyu music traditions include the lively mũgĩthi dance and various ceremonial performances that mark important life events and celebrations.',
  keyPoints: [
    'Mũgĩthi dance and music',
    'Ceremonial drumming patterns',
    'Traditional instruments',
    'Harvest celebration songs'
  ],
  practices: ['Wedding dances', 'Harvest celebrations', 'Initiation ceremonies'],
  media: {
    images: [
      '/gallery/Kikuyu/IMG-20251204-WA0013.jpg',
      '/gallery/Kikuyu/IMG-20251204-WA0014.jpg'
    ]
  }
};

const kikuyuThreads: CulturalPillar = {
  id: 'threads',
  icon: '👔',
  title: 'Nguo',
  subtitle: 'Threads - Traditional Attire',
  description: 'Traditional Kikuyu clothing and adornment practices.',
  longDescription: 'Kikuyu traditional attire includes leather garments, beadwork, and distinctive ceremonial dress that signifies age groups and social status.',
  keyPoints: [
    'Leather garments and cloaks',
    'Beaded ornaments',
    'Age-set specific attire',
    'Ceremonial dress'
  ],
  practices: ['Coming-of-age attire', 'Wedding garments', 'Elder regalia'],
  media: {
    images: [
      '/gallery/Kikuyu/IMG-20251204-WA0012.jpg',
      '/gallery/Kikuyu/IMG-20251204-WA0018.jpg',
      '/gallery/Kikuyu/IMG-20251204-WA0015.jpg'
    ]
  }
};

const kikuyuShape: CulturalPillar = {
  id: 'shape',
  icon: '🏺',
  title: 'Rũgongo',
  subtitle: 'Shape - Pottery & Crafts',
  description: 'Traditional Kikuyu pottery and craft making.',
  longDescription: 'Kikuyu women are skilled potters, creating vessels for cooking, storage, and ceremonial use. The craft has been passed down through generations.',
  keyPoints: [
    'Clay pot making',
    'Gourd decoration',
    'Traditional tools',
    'Ceremonial vessels'
  ],
  practices: ['Pottery techniques', 'Gourd preparation', 'Decorative arts'],
  media: {
    images: [
      '/gallery/Kikuyu/IMG-20251204-WA0016.jpg'
    ]
  }
};

const kikuyuWoven: CulturalPillar = {
  id: 'woven',
  icon: '🧺',
  title: 'Ciondo',
  subtitle: 'Woven - Basket Weaving',
  description: 'Traditional basket weaving and textile crafts.',
  longDescription: 'Kikuyu basket weaving produces functional and decorative items using natural fibers and traditional patterns.',
  keyPoints: [
    'Basket weaving techniques',
    'Natural fiber processing',
    'Pattern designs',
    'Utilitarian and decorative baskets'
  ],
  practices: ['Fiber preparation', 'Weaving techniques', 'Pattern creation'],
  media: {
    images: [
      '/gallery/Kikuyu/IMG-20251204-WA0016.jpg'
    ]
  }
};

const kikuyuFlavor: CulturalPillar = {
  id: 'flavor',
  icon: '🌽',
  title: 'Irio',
  subtitle: 'Flavor - Traditional Cuisine',
  description: 'Kikuyu culinary traditions featuring irio and other traditional dishes.',
  longDescription: 'Kikuyu cuisine centers on agricultural products from the fertile highlands, with irio (mashed peas, potatoes, and corn) being a signature dish. This beloved comfort food combines mashed green peas, potatoes, maize (corn), and sometimes pumpkin leaves or spinach, all mashed together into a creamy, nutritious meal. Often served with nyama choma (grilled meat) or stew, irio represents the agricultural abundance of the Central Highlands and remains a staple at both everyday meals and special celebrations.',
  keyPoints: [
    'Irio - signature mashed dish with peas, potatoes, and corn',
    'Githeri (maize and beans) - nutritious staple',
    'Mukimo - similar to irio with added greens',
    'Mũratina - traditional fermented drink from sausage tree fruit',
    'Traditional vegetables like terere and managu',
    'Roasted maize and sweet potatoes',
    'Honey from traditional beekeeping'
  ],
  practices: ['Traditional cooking methods', 'Food preservation', 'Ceremonial feasts'],
  media: {
    images: [
      '/gallery/Kikuyu/food1.jpeg',
      '/gallery/Kikuyu/food3.jpeg',
      '/gallery/Kikuyu/food4.jpeg'
    ]
  }
};

export const kikuyuPillars = {
  rhythms: kikuyuRhythms,
  threads: kikuyuThreads,
  shape: kikuyuShape,
  woven: kikuyuWoven,
  flavor: kikuyuFlavor
};
