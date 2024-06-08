import { Metadata } from "next";
import { Asap as GoogleAsap } from "next/font/google"; // Renamed Asap to GoogleAsap to avoid conflict
import "./globals.css";
import { Viewport } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import GoogleAnalytics from '@/app/components/GoogleAnalytics';


const Asap = GoogleAsap({ 
  weight: '500',
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "AllsCherry!",
  description: "AllsCherry",
  keywords: ["AllsCherry", "Home", "AllsCherry Home", "AllsCherry Projects", "AllsCherry News", "AllsCherry Updates", "AllsCherry Blog", "AllsCherry Blog Posts", "AllsCherry Blog Updates", "AllsCherry Blog News", "AllsCherry Blog Projects", "AllsCherry Blog Posts Projects News Updates", "AllsCherry Blog Posts Projects News Updates Home"],
  twitter: {
    card: "summary",
    site: "@allscherry",
  },
  openGraph: {
    type: "website",
    url: "https://allscherry.com",
    title: "AllsCherry!",
    description: "AllsCherry",
    siteName: "AllsCherry",
    images: [
      {
        url: "https://allscherry.com/icon.svg",
        width: 1200,
        height: 630,
        alt: "AllsCherry Logo",
      },
    ],
  },
};

export const viewport: Viewport = {
  initialScale: 1.0,
  viewportFit: "cover",
  themeColor:"#FFB7B7",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="icon" href="/icon.svg" sizes="any" type="image/svg+xml" />
        <meta name="description" content="AllsCherry" />
        <meta name="color-scheme" content="light"></meta>
        <meta property="og:title" content="AllsCherry | Home" />
        <meta property="og:description" content="AllsCherry" />
        <meta property="og:image" content="/icon.svg" />
        <meta property="og:url" content="https://allscherry.com" />
        <meta name="twitter:title" content="AllsCherry | Home" />
        <meta name="twitter:description" content="AllsCherry | Home" />
        <meta name="twitter:image" content="/icon.svg" />
      </head>
      <GoogleAnalytics/>
      <body className={Asap.className}>
        {children}
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
