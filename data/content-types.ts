// Type definitions for Mizizi Cultural Heritage Platform

export type MediaAsset = {
  type: 'audio' | 'video';
  src: string;
  title: string;
  description?: string;
  poster?: string;
  duration?: string;
  category?: string;
};

export type CulturalPillar = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  keyPoints: string[];
  symbolism?: string;
  practices?: string[];
  media?: {
    audio?: MediaAsset[];
    video?: MediaAsset[];
    images?: string[];
  };
  interactiveElements?: {
    type: 'color-guide' | 'pattern-explorer' | 'timeline' | 'diagram';
    data: any;
  }[];
};

export type Tradition = {
  name: string;
  description: string;
  icon: string;
  significance: string;
  audio?: MediaAsset;
  video?: MediaAsset;
};

export type Artifact = {
  id: string;
  title: string;
  description: string;
  material: string;
  origin: string;
  significance: string;
  image: string;
  modelSrc?: string;
  category: string;
};

export type Recipe = {
  name: string;
  kikambaName?: string;
  description: string;
  ingredients: string[];
  preparation: string;
  culturalSignificance: string;
  image: string;
  servingOccasion: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
};

export type HistoricalEvent = {
  year: string;
  title: string;
  description: string;
  significance: string;
};

export type TribeData = {
  name: string;
  slug: string;
  tagline: string;
  heroImage: string;
  description: string;
  
  // Stats
  location: string;
  population: string;
  language: string;
  languageNative: string;
  
  // Historical context
  history: {
    title: string;
    content: string;
    timeline: HistoricalEvent[];
  };
  
  // Five Cultural Pillars
  pillars: {
    rhythms?: CulturalPillar;    // Music, Dance, Drumming
    threads?: CulturalPillar;     // Attire, Beadwork, Textiles
    shape?: CulturalPillar;       // Wood Carving, Sculpture, Form
    woven?: CulturalPillar;       // Basket Weaving, Textile Arts
    flavor?: CulturalPillar;      // Cuisine, Culinary Heritage
  };
  
  // Additional cultural elements
  traditions: Tradition[];
  artifacts: Artifact[];
  recipes: Recipe[];
  
  // Multimedia
  media: {
    audio: MediaAsset[];
    video: MediaAsset[];
  };
  
  // Gallery
  gallery: string[];
  
  // Quiz questions
  quizQuestions: QuizQuestion[];
  
  // Proverbs and sayings
  proverbs?: {
    native: string;
    english: string;
    context: string;
  }[];
  
  // Color scheme
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  
  // Content Attribution
  attribution?: {
    contentSource?: string;
    imageSource?: string;
    contentLicense?: string;
    note?: string;
  };
};

export type ColorSymbolism = {
  color: string;
  hex: string;
  meaning: string;
  uses: string[];
  culturalContext: string;
};

export type Pattern = {
  name: string;
  description: string;
  symbolism: string;
  image: string;
  nativeName?: string;
};
