import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://boris3d.online"),
  title: "BORIS | 3D Artist",
  description:
    "Портфолио Бориса Лебедева — 3D Artist для игр, фильмов, virtual production, окружений, персонажей и cinematic assets.",
  applicationName: "Boris 3D Artist",
  authors: [{ name: "Борис Лебедев" }],
  creator: "Борис Лебедев",
  keywords: [
    "Борис Лебедев",
    "3D Artist",
    "3D artist portfolio",
    "game art",
    "virtual production",
    "environment artist",
    "hard surface",
    "miniatures"
  ],
  openGraph: {
    title: "BORIS | 3D Artist",
    description:
      "Кинематографичное портфолио 3D Artist: окружения, hard-surface, персонажи, миниатюры и production-ready ассеты.",
    url: "https://boris3d.online",
    siteName: "Boris 3D Artist",
    images: [
      {
        url: "/assets/b1.jpg",
        width: 2020,
        height: 1136,
        alt: "3D work by Boris Lebedev"
      }
    ],
    locale: "ru_RU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "BORIS | 3D Artist",
    description: "3D Artist portfolio for games, films and virtual production.",
    images: ["/assets/b1.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
