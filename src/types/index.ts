export interface ProfileInfo {
  name: string;
  birthDate: string; // YYYY-MM-DD
  city: string;
  languages: string[];
  nicknames: string[];
  tagline: string;
  bioLines: string[];
  coreValues: string[];
  interests: {
    music: string[];
    dance: string[];
    food: string[];
    hobbies: string[];
  };
  contact: {
    messagePrompt: string;
    coffeeCTA: string;
    instagramPlaceholder: string;
    whatsappPlaceholder?: string;
    emailPlaceholder?: string;
  };
}

export interface PersonalityCard {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  icon: string;
  color: string;
  accentColor: string;
  shortDesc: string;
  details: string[];
  quote: string;
  badge?: string;
}

export interface FlagItem {
  id: string;
  type: "green" | "red-ish" | "batman";
  label: string;
  description: string;
  punchline: string;
  icon: string;
}

export interface TimelineStep {
  stepNumber: number;
  timeEstimate?: string;
  title: string;
  location: string;
  description: string;
  vibe: string;
  surpriseHint: string;
  easterEggText: string;
  icon: string;
  color: string;
}

export interface TrackItem {
  id: string;
  title: string;
  genre: string;
  artistNote: string;
  devNote: string;
  energyLevel: number; // 1-5
  badge: string;
  tag: string;
}

export interface GalleryMediaItem {
  id: string;
  type: "photo" | "video";
  src: string;
  poster?: string;
  title: string;
  caption: string;
  category: "candid" | "dance" | "music" | "cafe" | "creative" | "life";
  aspectRatio: "portrait" | "landscape" | "square";
  rotationClass?: string;
  polaroidNote?: string;
  duration?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    id: string;
    label: string;
    emoji: string;
    reaction: string;
    personalityTag: string;
  }[];
}

export interface QuizResult {
  title: string;
  badge: string;
  description: string;
  coffeeVerdict: string;
  vibeMatch: string;
}
