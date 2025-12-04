import { CulturalPillar } from './content-types';

// PILLAR 1: RHYTHMS (NGOMA) - Sacred Healing & Rain-Making
export const rhythmsPillar: CulturalPillar = {
  id: 'rhythms',
  icon: '🥁',
  title: 'Ngoma',
  subtitle: 'Rhythms - Sacred Healing & Rain-Making',
  description: 'The heartbeat of Kamba spirituality through acrobatic drumming, healing ceremonies, and rain-making rituals.',
  longDescription: `The Kamba are celebrated throughout East Africa for their extraordinary drumming traditions, particularly the spectacular acrobatic drumming performances that blend athletic prowess with musical mastery. The kilumi drum tradition stands at the heart of Kamba spirituality and artistic expression.

Master drummers (aini a kilumi) undergo years of apprenticeship, learning not only complex polyrhythmic patterns but also death-defying acrobatic techniques - performing backflips, somersaults, splits, and aerial spins while maintaining perfect rhythm. These drummers can play multiple drums simultaneously, create thunderous bass notes that vibrate through the ground, and produce rapid-fire rhythms that entrance audiences.`,
  
  keyPoints: [
    'Acrobatic drumming with backflips and aerial spins',
    'Sacred healing ceremonies led by mundu mũgo (medicine person)',
    'Rain-making rituals (kũũma mbũa) calling upon Ngai and ancestors',
    'Thunder-like kilumi drums carved from mũvingo wood',
    'Master drummers (aini a kilumi) trained for years',
    'Trance states and spiritual energy building',
    'Communication with ancestral spirits through rhythm'
  ],
  
  symbolism: 'The kilumi drum produces deep, resonant thunder-like sounds that call upon ancestral spirits and Ngai (God). Different rhythms carry specific meanings - some call spirits, others celebrate victories, some mourn the dead, while rain-making rhythms mimic thunder.',
  
  practices: [
    'Healing ceremonies to drive away evil spirits (ngoma njũkũ)',
    'Rain-making ceremonies during droughts',
    'Weddings and victory celebrations',
    'Community festivals and spiritual cleansing',
    'Ancestor veneration rituals'
  ],
  
  media: {
    images: [
      '/gallery/Kamba/kamba-dancers-kenya-africa-2BDY0WY.jpg',
      '/gallery/Kamba/kamba_men_kunoux.jpg',
      '/gallery/Kamba/Wakamba_hunters.jpg',
      '/gallery/Kamba/House.png'
    ],
    audio: [
      {
        type: 'audio',
        src: '/media/kamba/audio/drumming/kilumi-healing-rhythm.mp3',
        title: 'Kilumi Healing Rhythm',
        description: 'Sacred drumming rhythm used in healing ceremonies',
        duration: '2:45',
        category: 'drumming'
      },
      {
        type: 'audio',
        src: '/media/kamba/audio/drumming/kilumi-rain-making.mp3',
        title: 'Rain-Making Rhythms (Mĩvuũmo mya Mbũa)',
        description: 'Thunderous drum rhythms to summon rain clouds',
        duration: '3:20',
        category: 'drumming'
      },
      {
        type: 'audio',
        src: '/media/kamba/audio/drumming/acrobatic-drumming-performance.mp3',
        title: 'Acrobatic Drumming Performance',
        description: 'Master drummers with acrobatic techniques',
        duration: '3:50',
        category: 'drumming'
      }
    ],
    video: [
      {
        type: 'video',
        src: '/media/kamba/video/dances/kilumi-dance-full.mp4',
        title: 'Kilumi Dance - Complete Performance',
        description: 'Full traditional kilumi dance with acrobatic drumming',
        poster: '/media/kamba/video/posters/kilumi-dance-poster.jpg',
        duration: '4:30',
        category: 'dances'
      },
      {
        type: 'video',
        src: '/media/kamba/video/dances/acrobatic-drumming.mp4',
        title: 'Acrobatic Drumming Exhibition',
        description: 'Master drummers performing backflips and aerial spins',
        poster: '/media/kamba/video/posters/acrobatic-drumming-poster.jpg',
        duration: '2:45',
        category: 'dances'
      }
    ]
  }
};

// PILLAR 2: THREADS (MAVAZI) - Traditional Attire & Beadwork
export const threadsPillar: CulturalPillar = {
  id: 'threads',
  icon: '🧵',
  title: 'Mavazi',
  subtitle: 'Threads - Traditional Attire & Beadwork',
  description: 'The visual language of color and pattern woven through traditional garments and intricate beadwork.',
  longDescription: `Elaborate beadwork forms a visual language in Kamba culture, where every color, pattern, and adornment tells a profound story. Traditional attire combines animal skin garments (kĩthĩmbĩ) with intricate beadwork (ithaga) that communicates identity, status, and spiritual connection.

White beads hold the most sacred meaning - they represent peace (ũtheri), spiritual purity, and connection to ancestral spirits. When elders wear white beadwork, they invoke the peace of ancestors and call upon divine wisdom. Geometric patterns carry meaning: zigzag represents life's journey, diamond patterns symbolize family unity, triangles represent sacred mountains, and circles represent eternal cycles.`,
  
  keyPoints: [
    'Animal skin garments (kĩthĩmbĩ) from goat and cattle hide',
    'Sacred white beads for peace and ancestral connection',
    'Red beads symbolizing bravery and life force',
    'Black beads representing unity and strength',
    'Geometric patterns with deep meanings',
    'Coin adornments on ceremonial attire',
    'Modern fusion maintaining cultural identity'
  ],
  
  symbolism: 'WHITE (sacred) = Peace, purity, ancestors. RED = Bravery, vitality, motherhood. BLACK = Unity, endurance. BLUE = Sky, aspirations. YELLOW/ORANGE = Sun, prosperity. GREEN = Fertility, agriculture. PATTERNS: Zigzag = life journey, Diamond = family unity, Triangle = sacred mountains, Circle = eternal cycles.',
  
  practices: [
    'Ceremonial dress for weddings and initiations',
    'Maiden attire for coming-of-age ceremonies',
    'Elder regalia marking wisdom and authority',
    'Warrior attire for ngutha dances',
    'Peace negotiations using white beadwork',
    'Daily attire with cultural elements'
  ],
  
  media: {
    images: [
      '/gallery/Kamba/attire1.png',
      '/gallery/Kamba/attire2.png',
      '/gallery/Kamba/attire3.png',
      '/gallery/Kamba/clothes1.jpeg',
      '/gallery/Kamba/clothes2.jpeg',
      '/gallery/Kamba/clothes3.jpeg',
      '/gallery/Kamba/clothes4.jpeg',
      '/gallery/Kamba/clothes5.jpeg',
      '/gallery/Kamba/clothes6.jpeg',
      '/gallery/Kamba/Nguo1.png',
      '/gallery/Kamba/Nguo2.jpeg'
    ],
    video: [
      {
        type: 'video',
        src: '/media/kamba/video/threads/kamba-beadwork-tradition.mp4',
        title: 'Traditional Kamba Beadwork & Attire',
        description: 'Showcasing intricate beadwork patterns and traditional Mavazi attire',
        poster: '/media/kamba/video/posters/threads-poster.jpg',
        duration: '3:15',
        category: 'attire'
      },
      {
        type: 'video',
        src: '/media/kamba/video/threads/color-symbolism.mp4',
        title: 'Color Symbolism in Kamba Beadwork',
        description: 'The sacred meanings of white, red, and black beads',
        poster: '/media/kamba/video/posters/color-symbolism-poster.jpg',
        duration: '2:45',
        category: 'beadwork'
      }
    ]
  }
};

// PILLAR 3: SHAPE (ŨŨMBI) - Wood Carving & Wamunyu Heritage
export const shapePillar: CulturalPillar = {
  id: 'shape',
  icon: '🪵',
  title: 'Ũũmbi',
  subtitle: 'Shape - Revealing the Spirit in Wood',
  description: 'The sacred art of wood carving, where master artisans reveal the spirit hidden within timber.',
  longDescription: `Wood carving is the soul of Kamba artistic identity, with Wamunyu standing as the sacred birthplace and eternal heart of this ancient craft. The Kamba philosophy of ũũmbi (shape, form, creation) embodies a profound truth: the carver does not create - they reveal. Within every piece of wood dwells a spirit, a form waiting in darkness to be freed into light.

Wamunyu, located in Machakos County, earned its reputation as East Africa's premier carving center through centuries of unbroken tradition. Master carvers (atũi a mbao) undergo 8-15 year apprenticeships, learning to see the elephant already standing within the ebony, the maiden already dancing in the mvule wood. Before carving begins, ritual offerings (kĩthĩo) are made to the tree spirits, asking permission to transform their physical form.`,
  
  keyPoints: [
    'Ũũmbi philosophy: revealing spirit hidden in wood',
    'Wamunyu - sacred birthplace of Kamba carving',
    'Master carvers (atũi a mbao) with 8-15 year apprenticeships',
    'Sacred woods: mũvingo (ebony), mũkũyũ, mvule',
    'Ritual offerings before carving begins',
    'Symbolic forms: elephants (strength), giraffes (aspiration)',
    'Legendary carvers and signature styles',
    'Modern adaptation while preserving tradition'
  ],
  
  symbolism: 'Each carving carries layered meanings: elephants represent strength and ancestral memory, giraffes symbolize reaching for higher aspirations, human figures preserve individual and collective stories, abstract forms express ũũmbi wa ngoro (shape of the heart/emotions).',
  
  practices: [
    'Apprenticeship starting age 10-12',
    'Ritual preparation and offerings',
    'Wood selection and spiritual consultation',
    'Traditional tool use (kĩthũngwa, nthĩngĩ, mũhĩũũ)',
    'Four sacred carving stages',
    'Cooperative quality control',
    'International trade and commissions'
  ],
  
  media: {
    images: [
      '/gallery/Kamba/kamba-people-wood-handicraft.webp',
      '/gallery/Kamba/craft2.jpg',
      '/gallery/Kamba/Craft3.jpeg',
      '/gallery/Kamba/craft4.jpeg',
      '/gallery/Kamba/crafts.jpeg',
      '/gallery/Kamba/tools.webp',
      '/gallery/Kamba/Kamba-blacksmiths.jpg'
    ],
    video: [
      {
        type: 'video',
        src: '/media/kamba/video/crafts/wood-carving-mastery.mp4',
        title: 'Kamba Wood Carving Mastery',
        description: 'Master artisans revealing the spirit hidden within timber through traditional Ũũmbi craft',
        poster: '/media/kamba/video/posters/crafts-poster.jpg',
        duration: '3:30',
        category: 'crafts'
      }
    ]
  }
};

// PILLAR 4: WOVEN (KYONDO) - Sisal Basket Weaving
export const wovenPillar: CulturalPillar = {
  id: 'woven',
  icon: '🧺',
  title: 'Kyondo',
  subtitle: 'Woven - Sisal Baskets & Sustainability',
  description: 'Traditional basket weaving that embodies sustainability, maternal care, and communal creation.',
  longDescription: `Kamba women are master weavers, creating the iconic kiondo (plural: ciondo) - sturdy and beautiful baskets from sisal fibers, palm fronds, and other natural materials. The craft represents more than utility; it embodies principles of sustainability, maternal care (as baskets carry and protect), and communal weaving practices where knowledge passes from grandmother to mother to daughter.

The geometric patterns woven into each basket identify the maker's region and family lineage. Different basket types serve specific purposes: large ngoloko for farm produce, medium-sized for shopping and daily use, small decorated ones for gifts, and flat winnowing trays. The craft has gained international recognition as sustainable fashion, with Kenyan designers incorporating kiondo into contemporary designs.`,
  
  keyPoints: [
    'Kiondo baskets from sisal and palm fibers',
    'Sustainable harvesting and natural dyes',
    'Geometric patterns identifying maker and region',
    'Maternal care symbolism - carrying and protecting',
    'Communal weaving and knowledge transmission',
    'Economic importance for women',
    'International recognition as sustainable fashion',
    'Contemporary fusion with modern design'
  ],
  
  symbolism: 'The basket represents the mother\'s arms - strong yet gentle, carrying life\'s necessities. Circular weaving patterns symbolize community unity and eternal cycles. Natural fibers represent connection to the earth and sustainable living.',
  
  practices: [
    'Sisal harvesting and fiber extraction',
    'Natural dyeing with plant materials',
    'Pattern weaving with family designs',
    'Different sizes for different uses',
    'Cooperative production and marketing',
    'Fair trade initiatives',
    'Contemporary fashion integration'
  ],
  
  media: {
    images: [
      '/gallery/Kamba/gourds.jpg',
      '/gallery/Kamba/waivery.jpg',
      '/gallery/Kamba/download1.jpeg'
    ]
  }
};

// PILLAR 5: FLAVOR (MLO) - Culinary Heritage
export const flavorPillar: CulturalPillar = {
  id: 'flavor',
  icon: '🍲',
  title: 'Mlo',
  subtitle: 'Flavor - Traditional Culinary Heritage',
  description: 'The taste of tradition through Muthokoi, honey, sorghum, and foods that sustained generations.',
  longDescription: `Kamba culinary heritage centers on nutritious, sustaining foods that fueled long-distance traders and agricultural communities. Muthokoi - the quintessential dish of maize and beans - exemplifies Kamba food philosophy: simple ingredients transformed through careful preparation into protein-rich sustenance that provides lasting energy.

Traditional cooking methods use clay pots over three-stone fireplaces, imparting unique flavors while connecting cooks to ancestral practices. Honey holds special significance, both as sweetener and in brewing traditional beer (ũki/mũratina) served during ceremonies and communal work parties. Indigenous vegetables gathered from farms and bushland provide nutrition and medicinal benefits, each plant having specific harvesting seasons and ritual uses beyond food.`,
  
  keyPoints: [
    'Muthokoi (maize & beans) - quintessential staple',
    'Traditional honey - sweetener and ceremonial beer',
    'Sorghum and millet porridges (mbũa/ũsũa)',
    'Indigenous vegetables with medicinal properties',
    'Clay pot cooking over three-stone fires',
    'Honey beer (ũki/mũratina) for ceremonies',
    'Communal eating practices and etiquette',
    'Seasonal harvest thanksgiving'
  ],
  
  symbolism: 'Food represents community care and shared prosperity. Muthokoi symbolizes the union of different elements creating strength (like community members). First fruits offerings honor ancestors and ensure future abundance. Sharing food bonds community members.',
  
  practices: [
    'Muthokoi preparation in clay pots',
    'Fermented porridge for nursing mothers',
    'Wild vegetable gathering and preparation',
    'Traditional beer brewing for ceremonies',
    'First fruits thanksgiving offerings',
    'Communal feasting protocols',
    'Food preservation techniques',
    'Seasonal agricultural celebrations'
  ],
  
  media: {
    images: [
      '/gallery/Kamba/food1.jpg',
      '/gallery/Kamba/food2.jpeg',
      '/gallery/Kamba/food3.jpeg',
      '/gallery/Kamba/food4.jpeg',
      '/gallery/Kamba/food6.jpg',
      '/gallery/Kamba/foods.jpeg',
      '/gallery/Kamba/foods1.jpeg',
      '/gallery/Kamba/brew.jpeg'
    ]
  }
};

// Export all pillars
export const kambaPillars = {
  rhythms: rhythmsPillar,
  threads: threadsPillar,
  shape: shapePillar,
  woven: wovenPillar,
  flavor: flavorPillar
};
