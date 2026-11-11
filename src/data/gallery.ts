import { GalleryMediaItem } from "@/types";

export const galleryItems: GalleryMediaItem[] = [
  {
    id: "dev-portrait-01",
    type: "photo",
    src: "/media/photos/dev-portrait-01.svg",
    title: "The Sunday Smile",
    caption: "Candid snapshot on a Delhi afternoon. Rare photo where I wasn't making a funny face.",
    category: "candid",
    aspectRatio: "portrait",
    rotationClass: "-rotate-2",
    polaroidNote: "Delhi, 2026 • Candid"
  },
  {
    id: "dev-dance-01",
    type: "video",
    src: "/media/videos/dev-dance-01.mp4",
    poster: "/media/posters/dev-dance-01-poster.svg",
    title: "Living Room Bollywood",
    caption: "Proof that whenever a good beat drops, sitting still is strictly physically impossible.",
    category: "dance",
    aspectRatio: "portrait",
    rotationClass: "rotate-1",
    polaroidNote: "Unrehearsed Choreography",
    duration: "0:15"
  },
  {
    id: "dev-cafe-01",
    type: "photo",
    src: "/media/photos/dev-cafe-01.svg",
    title: "Sunday Brew Patrol",
    caption: "Checking in at dad's cafe. Sampling cold brews and pretending to be a coffee critique.",
    category: "cafe",
    aspectRatio: "square",
    rotationClass: "rotate-2",
    polaroidNote: "Dad's Cafe • Fresh Roast"
  },
  {
    id: "dev-guitar-01",
    type: "video",
    src: "/media/videos/dev-guitar-01.mp4",
    poster: "/media/posters/dev-guitar-01-poster.svg",
    title: "Acoustic in Progress",
    caption: "Practicing smooth chord transitions. My fingertips are currently numb, but my heart is happy.",
    category: "music",
    aspectRatio: "landscape",
    rotationClass: "-rotate-1",
    polaroidNote: "A Minor to C Major"
  },
  {
    id: "dev-travel-01",
    type: "photo",
    src: "/media/photos/dev-travel-01.svg",
    title: "City Archways & Golden Light",
    caption: "Exploring CP's heritage arches just before sunset. Delhi hits different when the light turns amber.",
    category: "life",
    aspectRatio: "landscape",
    rotationClass: "rotate-1",
    polaroidNote: "Connaught Place • 5:15 PM"
  },
  {
    id: "dev-dj-01",
    type: "video",
    src: "/media/videos/dev-dj-01.mp4",
    poster: "/media/posters/dev-dj-01-poster.svg",
    title: "The Bedroom DJ Booth",
    caption: "Trying to mix Nusrat Fateh Ali Khan with deep house. The neighbours haven't called yet.",
    category: "music",
    aspectRatio: "portrait",
    rotationClass: "-rotate-2",
    polaroidNote: "Live Mixing • DJ Setup"
  },
  {
    id: "dev-creative-01",
    type: "photo",
    src: "/media/photos/dev-creative-01.svg",
    title: "Late Night Ideation",
    caption: "Where marketing engineering, music AI concepts, and quick sketches meet on paper.",
    category: "creative",
    aspectRatio: "square",
    rotationClass: "rotate-2",
    polaroidNote: "Brainstorming Mode"
  },
  {
    id: "dev-candid-02",
    type: "photo",
    src: "/media/photos/dev-candid-02.svg",
    title: "Laughing at Something Silly",
    caption: "Caught mid-laugh by a friend. This is usually what conversations with me end up looking like.",
    category: "candid",
    aspectRatio: "portrait",
    rotationClass: "-rotate-1",
    polaroidNote: "Pure Banter • Delhi"
  }
];

