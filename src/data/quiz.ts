import { QuizQuestion, QuizResult } from "@/types";

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What's our car audio vibe for a long sunset drive?",
    subtitle: "Delhi traffic is tolerable only with the right soundtrack.",
    options: [
      {
        id: "a",
        label: "Soulful Qawwali & Coke Studio classics at 1 AM",
        emoji: "🕊️",
        reaction: "Deep soul connection detected.",
        personalityTag: "soulful"
      },
      {
        id: "b",
        label: "Loud Punjabi / Hip-hop bass drops with windows rolled down",
        emoji: "⚡",
        reaction: "Instant hype! Volume dial is turning up.",
        personalityTag: "hype"
      },
      {
        id: "c",
        label: "Mellow acoustic indie & Bollywood romantic 2000s anthems",
        emoji: "✨",
        reaction: "Car karaoke is now officially mandatory.",
        personalityTag: "romantic"
      },
      {
        id: "d",
        label: "Silence so we can debate crazy conspiracy theories & life stories",
        emoji: "🎙️",
        reaction: "Podcast mode activated. Strap in for 3 hours.",
        personalityTag: "curious"
      }
    ]
  },
  {
    id: 2,
    question: "When we sit down at a cozy cafe, what's your go-to order?",
    subtitle: "Warning: food choices reveal true character traits.",
    options: [
      {
        id: "a",
        label: "Iced Americano or Rich Cold Brew (serious conversation fuel)",
        emoji: "☕",
        reaction: "Respect. You appreciate clarity and caffeine.",
        personalityTag: "focused"
      },
      {
        id: "b",
        label: "Steaming Hot Chocolate with extra whipped cream",
        emoji: "🍫",
        reaction: "Dev's exact comfort order! Extra chocolate points.",
        personalityTag: "sweet"
      },
      {
        id: "c",
        label: "Artisanal herbal tea with honey & lemon",
        emoji: "🫖",
        reaction: "Zen vibes. Calming Dev's 47 open brain tabs.",
        personalityTag: "calm"
      },
      {
        id: "d",
        label: "Whatever looks pretty on the menu + double fries for the table",
        emoji: "🍟",
        reaction: "Sharing fries = foundational green flag.",
        personalityTag: "fun"
      }
    ]
  },
  {
    id: 3,
    question: "How do you prefer spending a breezy Delhi evening?",
    subtitle: "Choose your ideal weekend flow.",
    options: [
      {
        id: "a",
        label: "Strolling through Connaught Place arches & people-watching",
        emoji: "🏛️",
        reaction: "Classic Delhi heritage romance.",
        personalityTag: "romantic"
      },
      {
        id: "b",
        label: "Finding a hidden terrace cafe and talking until closing time",
        emoji: "🌆",
        reaction: "Uninterrupted conversation is golden.",
        personalityTag: "deep"
      },
      {
        id: "c",
        label: "A spontaneous long drive with no fixed destination",
        emoji: "🚗",
        reaction: "Best kind of adventure.",
        personalityTag: "adventurous"
      },
      {
        id: "d",
        label: "Cozy couch, delicious vegetarian takeout & a gripping web series",
        emoji: "🛋️",
        reaction: "Peak comfort mode.",
        personalityTag: "cozy"
      }
    ]
  },
  {
    id: 4,
    question: "A high-energy Bollywood song starts playing at a wedding / party:",
    subtitle: "Your spontaneous reflex:",
    options: [
      {
        id: "a",
        label: "Drag me to the middle of the dancefloor immediately",
        emoji: "💃",
        reaction: "Deal! Dev's freestyle moves are already activated.",
        personalityTag: "dance"
      },
      {
        id: "b",
        label: "Laugh from the side table with snacks while cheering enthusiastically",
        emoji: "🍿",
        reaction: "Cheerleader energy is deeply appreciated.",
        personalityTag: "supportive"
      },
      {
        id: "c",
        label: "Start with polite shoulder shimmies, then gradually join the madness",
        emoji: "🪩",
        reaction: "The classic Bollywood progression.",
        personalityTag: "balanced"
      },
      {
        id: "d",
        label: "Challenge me to a dramatic dance-off right there",
        emoji: "🔥",
        reaction: "Game on. You might regret this.",
        personalityTag: "playful"
      }
    ]
  }
];

export const quizResults: Record<string, QuizResult> = {
  highVibe: {
    title: "100% Chaos & Chemistry Match",
    badge: "Official Compatibility Verdict: Outstanding",
    description: "You appreciate good banter, unexpected road trip playlists, and don't take life too seriously. You'll easily survive Dev's 47 open tabs and likely add 3 more of your own.",
    coffeeVerdict: "A high-priority coffee invitation is strongly warranted.",
    vibeMatch: "Vibe Match: 98.4% (The remaining 1.6% is reserved for arguing over the best cafe)"
  },
  romanticSoul: {
    title: "Hopeless Romantic Harmony",
    badge: "Official Compatibility Verdict: Sweet & Deep",
    description: "You value real connection, quality conversations where phones stay face down, and thoughtful little surprises. You'll love Dev's date-planning enthusiasm.",
    coffeeVerdict: "A quiet corner table at a scenic Delhi cafe has your name on it.",
    vibeMatch: "Vibe Match: 99.1% (Certified Season Finale Material)"
  },
  adventurous: {
    title: "Spontaneous Co-Pilot Match",
    badge: "Official Compatibility Verdict: High Energy & Fun",
    description: "Long drives, sudden playlist shifts, and discovering hidden Delhi heritage spots are your thing. You won't mind Dev's protective 'Batman' side because mutual respect is first priority.",
    coffeeVerdict: "Coffee, but with a scenic drive and windows rolled down.",
    vibeMatch: "Vibe Match: 97.8% (Zero Awkward Silences Guaranteed)"
  }
};
