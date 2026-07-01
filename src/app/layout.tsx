import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://himalyanframes.com'),
  title: {
    default: "Himalyan Frames | Cinematic Portfolio",
    template: "%s | Himalyan Frames"
  },
  description: "An independent adventure film boutique documenting real raw deodar lines, ancient mountain histories, and boutique resort stays.",
  keywords: ["Cinematographer Dharamshala", "Himalayan Filmmaker", "Travel Video Production", "Drone Pilot India", "Adventure Films"],
  authors: [{ name: "Himalyan Frames" }],
  creator: "Himalyan Frames",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Himalyan Frames",
    title: "Himalyan Frames | Cinematic Portfolio",
    description: "An independent adventure film boutique documenting real raw deodar lines, ancient mountain histories, and boutique resort stays.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Himalyan Frames Cover",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Himalyan Frames | Cinematic Portfolio",
    description: "An independent adventure film boutique documenting real raw deodar lines, ancient mountain histories, and boutique resort stays.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Himalyan Frames',
  image: 'https://himalyanframes.com/og-image.jpg',
  description: 'An independent adventure film boutique documenting real raw deodar lines, ancient mountain histories, and boutique resort stays.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dharamshala',
    addressRegion: 'Himachal Pradesh',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.2190,
    longitude: 76.3234
  },
  url: 'https://himalyanframes.com',
  telephone: '+918219807180',
  priceRange: '$$'
};

import Script from "next/script";
import { CSPostHogProvider } from "@/components/providers/posthog-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${cormorantGaramond.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <Script
          id="json-ld-local-business"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-app-bg text-app-text transition-colors duration-500 antialiased selection:bg-brand-accent selection:text-white">
        <CSPostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange={false}
          >
            {children}
          </ThemeProvider>
        </CSPostHogProvider>
      </body>
    </html>
  );
}
