import { PersonalityCard, FlagItem, TimelineStep, TrackItem } from "@/types";

export const personalityCards: PersonalityCard[] = [
  {
    id: "romantic",
    title: "Hopeless Romantic",
    subtitle: "Dates, Flowers & Small Gestures",
    tag: "Romantic Heart",
    icon: "HeartHandshake",
    color: "bg-blush/60 border-rose/40",
    accentColor: "#E9A8B0",
    shortDesc: "I plan dates like there might be an emotional season finale.",
    quote: "Quality time is not a background activity.",
    details: [
      "Remembers the small random things: favorite drink, specific stories, little habits.",
      "Loves handwritten-style touches, thoughtful surprises, and giving flowers without needing a reason.",
      "Looking for something genuine with marriage in mind, but takes time to build real depth first."
    ],
    badge: "Seasonal Finale Energy"
  },
  {
    id: "funny",
    title: "Sarcastic & Smooth",
    subtitle: "Mischief, Wit & Chaotic Memes",
    tag: "Humour & Wit",
    icon: "Sparkles",
    color: "bg-butter/60 border-butter-dark/40",
    accentColor: "#F6E7B8",
    shortDesc: "Flirting style: sarcastic, playful, occasionally cheesy, always respectful.",
    quote: "Single since 2005. That's an Olympic-level talking stage with life.",
    details: [
      "Can make you laugh until your stomach hurts over completely mundane Delhi observations.",
      "47 browser tabs permanently open in the brain. At least 12 are playing music.",
      "Believes a relationship without inside jokes and silly banter is missing the whole point."
    ],
    badge: "Certified Banter"
  },
  {
    id: "ambitious",
    title: "Builder & Hustler",
    subtitle: "Started at 15, Scaling Everyday",
    tag: "Ambitious Drive",
    icon: "TrendingUp",
    color: "bg-sage/60 border-sage-dark/40",
    accentColor: "#DDE8D8",
    shortDesc: "Started earning at 15. Still writing the next chapter of the plot.",
    quote: "Your ambitions are yours. I'll be in your corner, not in your way.",
    details: [
      "Growth Marketing Engineer at Veena Studio, currently building AI music tech.",
      "Paid his own college fees and expenses early on — self-reliant, disciplined, and focused.",
      "Dreaming of building scalable companies that solve authentic human problems."
    ],
    badge: "Self-Made Streak"
  },
  {
    id: "social",
    title: "Extrovert Unlocked",
    subtitle: "Music, Dance & Sunday Cafe Hours",
    tag: "Social & Creative",
    icon: "Compass",
    color: "bg-powder/60 border-powder-dark/40",
    accentColor: "#DCE8F4",
    shortDesc: "Shifted from ambivert to outgoing explorer. Social battery fully charged.",
    quote: "Currently learning guitar and DJing. Results may vary. Enthusiasm does not.",
    details: [
      "Inviting me to dance is the fastest shortcut to making me genuinely happy.",
      "Frequently hangs out at dad's cafe on Sundays, meeting people and testing new brews.",
      "Loves city architecture, safe exploration, and spontaneous road trips with great playlists."
    ],
    badge: "Dancefloor Ready"
  }
];

export const musicTracks: TrackItem[] = [
  {
    id: "qawwali",
    genre: "Qawwali",
    title: "1:00 AM Soul Session",
    artistNote: "Nusrat Fateh Ali Khan, Sabri Brothers, Coke Studio",
    devNote: "When you want lyrics that hit deeper than philosophy textbooks.",
    energyLevel: 4,
    badge: "Spiritual High",
    tag: "Soul"
  },
  {
    id: "hiphop",
    genre: "Hip-Hop",
    title: "Windows-Down Car Flow",
    artistNote: "Desi Hip-Hop, Global Beats, Hard 808s",
    devNote: "The playlist that gets us through Delhi traffic without losing sanity.",
    energyLevel: 5,
    badge: "Hype Mode",
    tag: "Hype"
  },
  {
    id: "pop",
    genre: "Pop & Melodies",
    title: "Golden Hour Singalongs",
    artistNote: "Acoustic, Bollywood Classics, Feel-Good Anthems",
    devNote: "For singing loudly and terribly off-key with zero shame.",
    energyLevel: 3,
    badge: "Vibe Match",
    tag: "Warmth"
  },
  {
    id: "guitar",
    genre: "Learning Guitar",
    title: "Acoustic Progress Log",
    artistNote: "Fingerpicking & Chord Transitions",
    devNote: "Fingers hurt, but I can already play the chords that matter. Give me 6 months.",
    energyLevel: 2,
    badge: "In Progress",
    tag: "Acoustic"
  },
  {
    id: "dj",
    genre: "Bedroom DJing",
    title: "Transitioning Genres",
    artistNote: "Pioneer DDJ Vibes & Transitions",
    devNote: "Learning to blend Qawwali into Afrobeat. Mad science in the living room.",
    energyLevel: 4,
    badge: "Next Era",
    tag: "Electronic"
  },
  {
    id: "dance",
    genre: "Dance Moves",
    title: "Bollywood & Freestyle",
    artistNote: "Spontaneous floor energy",
    devNote: "I haven't been clubbing yet, but family weddings and parties? Unmatched energy.",
    energyLevel: 5,
    badge: "Floor Filler",
    tag: "Movement"
  }
];

export const greenFlags: FlagItem[] = [
  {
    id: "single-since-2005",
    type: "green",
    label: "Single Since 2005",
    description: "That's a very long, very patient talking stage with life itself.",
    punchline: "Zero ex-drama. Clean slate. Fresh start guaranteed.",
    icon: "ShieldCheck"
  },
  {
    id: "clean-habits",
    type: "green",
    label: "Non-Smoker, Non-Drinker & Vegetarian",
    description: "Committed to clean health, clear conversations, and mom's homemade dal.",
    punchline: "Sunday mornings are for fresh coffee, not hangover regret.",
    icon: "Leaf"
  },
  {
    id: "quality-time",
    type: "green",
    label: "Quality Time Devotee",
    description: "Phone stays face down during meals and conversations.",
    punchline: "Active listener who actually remembers what you said last Tuesday.",
    icon: "Clock"
  },
  {
    id: "can-cook",
    type: "green",
    label: "Can Actually Cook",
    description: "Loves mummy ke haath ka khana, but can handle the stove with style.",
    punchline: "Will still ask you what we're craving, but won't starve on his own.",
    icon: "ChefHat"
  }
];

export const redIshFlags: FlagItem[] = [
  {
    id: "female-besties",
    type: "red-ish",
    label: "2–3 Female Best Friends",
    description: "Comes with lifelong friends who will inspect you with warmth and love.",
    punchline: "Total transparency, zero weirdness. Full terms and conditions included.",
    icon: "Users"
  },
  {
    id: "talks-a-lot",
    type: "red-ish",
    label: "Talks A Lot (Podcast Mode)",
    description: "If you ask about tech, AI, filmmaking, or music, strap in for a docuseries.",
    punchline: "Can talk for 3 hours straight on a good drive. You've been warned.",
    icon: "Mic"
  },
  {
    id: "scattered-focus",
    type: "red-ish",
    label: "47 Tabs Open in Mind",
    description: "Curious about everything, constantly brainstorming new projects.",
    punchline: "Will randomly send you a song, a design concept, and a meme in 2 minutes.",
    icon: "Sparkle"
  }
];

export const batmanCard: FlagItem = {
  id: "batman-identity",
  type: "batman",
  label: "The 'Batman' Quirk",
  description: "Friends call me Batman because I am protective and care deeply about the people in my circle.",
  punchline: "Protective by nature, but 100% respectful of your independence, space, and personal freedom. No superhero surveillance.",
  icon: "Moon"
};

export const timelineSteps: TimelineStep[] = [
  {
    stepNumber: 1,
    timeEstimate: "11:30 AM",
    title: "The Pick-Up (If Mutually Comfortable)",
    location: "Your doorstep / nearby landmark",
    description: "Only if you're comfortable with it. Clean car, pleasant scent, curated playlist on soft volume, and zero awkward pauses.",
    vibe: "Warm, respectful, low pressure",
    surpriseHint: "A small warm gesture waiting on the passenger seat.",
    easterEggText: "Car temperature is pre-calibrated so nobody freezes.",
    icon: "Car",
    color: "from-rose-light/30 to-cream"
  },
  {
    stepNumber: 2,
    timeEstimate: "12:15 PM",
    title: "Connaught Place or Hauz Khas",
    location: "Colonnades of CP or HKV Greenery",
    description: "Classic Delhi heritage backdrop. Walking under the white arches or strolling past ancient stone balconies and open water.",
    vibe: "Cinematic, breezy, scenic",
    surpriseHint: "Stopping for a quick street view photo or candid moment.",
    easterEggText: "Choosing the shade side so sunglasses are optional.",
    icon: "MapPin",
    color: "from-sage-light/30 to-cream"
  },
  {
    stepNumber: 3,
    timeEstimate: "1:00 PM",
    title: "Walking, People-Watching & Easy Banter",
    location: "Sunlit corridors",
    description: "Finding out who laughs first, sharing childhood stories, discussing funny Delhi characters, and getting past the small talk.",
    vibe: "Effortless, curious, funny",
    surpriseHint: "A quick debate over the best coffee spot in the city.",
    easterEggText: "I will probably point out 3 cool fonts on storefronts.",
    icon: "Footprints",
    color: "from-butter-light/30 to-cream"
  },
  {
    stepNumber: 4,
    timeEstimate: "1:45 PM",
    title: "Cafe, Good Food & Long Lunch",
    location: "A cozy aesthetic corner table",
    description: "Hot chocolate or cold brew, great vegetarian dishes, and zero phones on the table. The kind of lunch where 2 hours feel like 20 minutes.",
    vibe: "Comfortable, deep conversation",
    surpriseHint: "Remembering the exact dish you looked at first.",
    easterEggText: "Ordering extra dessert because why pretend we don't want it?",
    icon: "Coffee",
    color: "from-powder-light/30 to-cream"
  },
  {
    stepNumber: 5,
    timeEstimate: "4:00 PM",
    title: "The Golden Hour Drive",
    location: "Wide Delhi avenues",
    description: "Windows slightly down, cool breeze, music transitioning from mellow acoustic indie to Bollywood singalongs. No awkward silences, just good vibes.",
    vibe: "Nostalgic, warm, cinematic",
    surpriseHint: "Playing that one song you mentioned earlier.",
    easterEggText: "Testing if your car-karaoke enthusiasm matches mine.",
    icon: "Music",
    color: "from-blush/40 to-cream"
  },
  {
    stepNumber: 6,
    timeEstimate: "5:30 PM",
    title: "Safe Drop-Off & Little Parting Surprise",
    location: "Safe and sound at your drop point",
    description: "Walk you right to your spot. A little token or flowers to remember the afternoon by, leaving you with a genuine smile.",
    vibe: "Sweet, memorable, respectful",
    surpriseHint: "A sweet text 15 minutes later making sure you're settled.",
    easterEggText: "Zero pressure to plan date #2 immediately — let the good feeling settle.",
    icon: "Heart",
    color: "from-rose/30 to-cream"
  }
];

export const ambitionHighlights = [
  {
    number: "15",
    label: "Started Working",
    desc: "Began freelancing and creating digital value at 15. Learned early that independence is built through discipline."
  },
  {
    number: "100%",
    label: "Self-Funded Journey",
    desc: "Paid his own college fees and living expenses. Relies relatively little on parents and takes pride in standing on his own feet."
  },
  {
    number: "AI + Music",
    label: "Veena Studio Engineer",
    desc: "Growth Marketing Engineer at Veena Studio, blending cutting-edge artificial intelligence with music creation workflows."
  },
  {
    number: "Next",
    label: "Solving Real Problems",
    desc: "Long game: building enduring companies that address real consumer needs, while supporting his future partner's independent career."
  }
];
