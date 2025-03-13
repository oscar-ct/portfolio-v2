import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata : Metadata = {
  title: 'Oscar Castro | Web Developer',
  description: "Oscar Castro is a skilled web developer crafting exceptional digital experiences using React, Next.js, and modern tools to deliver fast, user-focused solutions.",
  keywords: 'Oscar Castro, web developer, software developer, Java, JavaScript, TypeScript, Next.js, SQL, portfolio',
  robots: 'index, follow',
  verification: {
    google: 'w50CPtYeAGmmGRb2ghoI3uJzWAnOvZFGZOTo4VHXLWk',
  },
  alternates: {
    canonical: 'https://oscar-ct.com',
    languages: { 'en-US': '/en-US' },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
    other: [{ rel: 'icon', url: '/icon.png', sizes: '192x192' }],
  },
  openGraph: {
    title: 'Oscar Castro | Web Developer',
    description: "Oscar Castro is a skilled web developer crafting exceptional digital experiences using React, Next.js, and modern tools to deliver fast, user-focused solutions.",
    url: 'https://oscar-ct.com',
    siteName: 'My App',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Whales!' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oscar Castro | Web Developer',
    description: "Oscar Castro is a skilled web developer crafting exceptional digital experiences using React, Next.js, and modern tools to deliver fast, user-focused solutions.",
    images: ['/twitter-image.png'],
  },
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={"bg-gradient-to-br from-slate-700 via-slate-900 to-slate-900"}>
      <head>
        <meta name="theme-color" content="#6c2fe5"/>
        <title>{metadata.title as string}</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {children}
      <Analytics/>
      </body>
    </html>
  );
}
