import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hey, Potential Future Wife | Dev Chopra",
  description: "A playful, romantic, flirty, meme-centric personal introduction to Dev Chopra. Mobile-first experience. Single since 2005, builder, dancer, and hopeless romantic.",
  keywords: ["Dev Chopra", "date.devchopra.life", "Hopeless Romantic", "Delhi"],
  authors: [{ name: "Dev Chopra" }],
  openGraph: {
    title: "Hey, Potential Future Wife | Dev Chopra",
    description: "Well, this is an interesting way to meet, isn't it? Enter Dev's little universe.",
    url: "https://date.devchopra.life",
    siteName: "date.devchopra.life",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hey, Potential Future Wife | Dev Chopra",
    description: "A little romantic. A little chaotic. Mostly harmless.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF8F0",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} ${caveat.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F0E8DF] text-ink antialiased selection:bg-rose-light selection:text-ink flex justify-center overflow-x-hidden">
        {/* Mobile Viewport Container: Max 430px wide, centered on desktop */}
        <div className="w-full max-w-[430px] min-h-screen bg-cream text-ink relative sm:shadow-2xl sm:border-x sm:border-ink/5 overflow-x-hidden flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
