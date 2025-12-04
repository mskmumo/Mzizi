import { TribeData, CulturalPillar, ColorSymbolism } from './content-types';

// Color Symbolism for Kamba Beadwork
export const kambaColorSymbolism: ColorSymbolism[] = [
  {
    color: 'White',
    hex: '#FFFFFF',
    meaning: 'Peace, purity, ancestors, spiritual clarity',
    uses: ['Peace negotiations', 'Conflict resolution ceremonies', 'Spiritual cleansing rituals', 'Elder regalia'],
    culturalContext: 'Most sacred color - represents connection to ancestral spirits and divine wisdom. Worn during peace negotiations and spiritual ceremonies.'
  },
  {
    color: 'Red',
    hex: '#DC2626',
    meaning: 'Bravery, life force, blood bonds, vitality, motherhood',
    uses: ['Warrior attire', 'Coming-of-age ceremonies', 'Celebrations', 'Maternal symbolism'],
    culturalContext: 'Symbolizes courage and the life force that flows through all living things. Associated with warriors and mothers.'
  },
  {
    color: 'Black',
    hex: '#1F2937',
    meaning: 'Unity, strength, endurance, collective struggle',
    uses: ['Community ceremonies', 'Solidarity events', 'Elder attire', 'Mourning'],
    culturalContext: 'Represents the collective strength of the community and endurance through challenges.'
  },
  {
    color: 'Blue',
    hex: '#3B82F6',
    meaning: 'Sky, limitless possibilities, spiritual aspirations',
    uses: ['Youth ceremonies', 'Dreams and aspirations', 'Spiritual journeys'],
    culturalContext: 'Connects earthly existence with the heavens and infinite potential.'
  },
  {
    color: 'Yellow/Orange',
    hex: '#F59E0B',
    meaning: 'Sun, prosperity, warmth, harvest',
    uses: ['Harvest celebrations', 'Prosperity blessings', 'Wedding ceremonies'],
    culturalContext: 'Symbolizes abundance, warmth, and the life-giving power of the sun.'
  },
  {
    color: 'Green',
    hex: '#10B981',
    meaning: 'Fertility, agriculture, growth, abundance',
    uses: ['Agricultural ceremonies', 'Fertility blessings', 'New beginnings'],
    culturalContext: 'Represents connection to the land, agricultural prosperity, and new growth.'
  }
];

// This will be expanded in the next file
export const kambaData: Partial<TribeData> = {
  name: 'Kamba',
  slug: 'kamba',
  tagline: 'Masters of Trade, Craft, and Resilience',
  heroImage: '/gallery/Kamba/kamba-dancers-kenya-africa-2BDY0WY.jpg',
  description: 'The Kamba people, also known as Akamba or Wakamba, are a Bantu ethnic group from the semi-arid Eastern Province of Kenya. Renowned for their exceptional craftsmanship, entrepreneurial spirit, and rich musical traditions, the Kamba have been central to East African trade routes for centuries.',
  
  location: 'Machakos, Kitui, and Makueni Counties (Ukambani)',
  population: 'Over 4.6 million',
  language: 'Kikamba',
  languageNative: 'Kĩkamba',
  
  colors: {
    primary: '#A05A2C',
    secondary: '#79472E',
    accent: '#D86733'
  },
  
  gallery: [
    '/gallery/Kamba/kamba-dancers-kenya-africa-2BDY0WY.jpg',
    '/gallery/Kamba/attire1.png',
    '/gallery/Kamba/kamba-people-wood-handicraft.webp',
    '/gallery/Kamba/crafts.jpeg',
    '/gallery/Kamba/clothes1.jpeg',
    '/gallery/Kamba/food1.jpg',
    '/gallery/Kamba/Kamba-blacksmiths.jpg',
    '/gallery/Kamba/Wakamba_hunters.jpg',
    '/gallery/Kamba/kamba_men_kunoux.jpg',
    '/gallery/Kamba/gourds.jpg'
  ],
  
  // Content Attribution
  attribution: {
    contentSource: 'Wikipedia and various online sources',
    contentLicense: 'Educational and cultural preservation purposes',
    note: 'Content sourced from Wikipedia articles on Kamba people and related cultural topics'
  }
};
