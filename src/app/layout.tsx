import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prodevelopers.cloud"),
  title: "ProDevelopers Cloud | Infrastructure Excellence",
  description: "Backend optimization, custom media engines, and low-latency systems. We build the engine that powers high-stakes digital products.",
  openGraph: {
    title: "ProDevelopers Cloud | Infrastructure Excellence",
    description: "Backend optimization, custom media engines, and low-latency systems. We build the engine that powers high-stakes digital products.",
    url: "https://prodevelopers.cloud",
    siteName: "ProDevelopers Cloud",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ProDevelopers Cloud | Infrastructure Excellence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProDevelopers Cloud | Infrastructure Excellence",
    description: "Backend optimization, custom media engines, and low-latency systems. We build the engine that powers high-stakes digital products.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${mono.variable} font-sans bg-neutral-950 text-neutral-50 antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
