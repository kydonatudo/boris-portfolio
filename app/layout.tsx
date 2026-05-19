import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.boris3d.online"),
  title: "BORIS | 3D-артист",
  description:
    "Портфолио Бориса Лебедева — 3D-артиста. Модели, окружение, архитектура, предметы, текстуры и миниатюры.",
  applicationName: "Boris 3D Artist",
  authors: [{ name: "Борис Лебедев" }],
  creator: "Борис Лебедев",
  keywords: [
    "Борис Лебедев",
    "3D Artist",
    "3D портфолио",
    "3D моделирование",
    "окружение",
    "архитектурная визуализация",
    "текстурирование",
    "miniatures"
  ],
  openGraph: {
    title: "BORIS | 3D-артист",
    description:
      "Портфолио Бориса Лебедева: 3D-модели, окружение, архитектура, предметы, текстуры и миниатюры.",
    url: "https://www.boris3d.online",
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
    title: "BORIS | 3D-артист",
    description: "Портфолио Бориса Лебедева: 3D-модели, окружение и текстуры.",
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
      <body className={`${inter.variable} font-sans font-light`}>{children}</body>
    </html>
  );
}
