import { ProfileInfo } from "@/types";

export function getDevAge(): number {
  const birthDate = new Date("2005-02-12");
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export const devProfile: ProfileInfo = {
  name: "Dev Chopra",
  birthDate: "2005-02-12",
  city: "Delhi, India",
  languages: ["Hindi", "English", "Punjabi (sometimes)"],
  nicknames: ["Dev", "Devaa", "Babu", "Batman"],
  tagline: "A little romantic. A little chaotic. Mostly harmless.",
  bioLines: [
    "Growth Marketing Engineer by day, aspiring bedroom guitarist & DJ by night.",
    "Hopeless romantic who plans dates like season finales.",
    "47 browser tabs permanently open in the brain. At least 12 are playing music.",
    "Non-smoker, non-drinker, pure vegetarian & mummy ke haath ka khana enthusiast."
  ],
  coreValues: [
    "Respect, dignity & natural affection",
    "Long-term commitment (hoping for marriage, never rushing it)",
    "High emotional maturity & good sense of humour",
    "Supporting a partner's dreams without conditions"
  ],
  interests: {
    music: [
      "Qawwali (soul mode)",
      "Hip-Hop (hype mode)",
      "Pop & Soul (romantic mode)",
      "Learning Acoustic Guitar",
      "Learning DJ Mixing"
    ],
    dance: [
      "Freestyle dance",
      "Bollywood celebrations",
      "Spontaneous living room moves"
    ],
    food: [
      "Mummy ke haath ka khana (undefeated)",
      "Can cook real food",
      "Good coffee & McDonald's hot chocolate",
      "100% Pure Vegetarian"
    ],
    hobbies: [
      "Tech innovations & AI tools",
      "Sketching & drawing",
      "Movies, web series & video essays",
      "Exploring quiet corners, safe architecture & city history",
      "Sunday visits to dad's cafe"
    ]
  },
  contact: {
    messagePrompt: "The better stories are for an actual conversation.",
    coffeeCTA: "Should we get coffee sometime?",
    instagramPlaceholder: "https://instagram.com/thedevchopra",
    emailPlaceholder: "the.chopra.dev@gmail.com"
  }
};

