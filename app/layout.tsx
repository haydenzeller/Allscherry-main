import { Metadata } from "next";
import { Asap as GoogleAsap } from "next/font/google"; // Renamed Asap to GoogleAsap to avoid conflict
import "./globals.css";
import { Viewport } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
const Asap = GoogleAsap({ 
  weight: '500',
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Allscherry!",
  description: "",
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
        <meta name="theme-color" content="#FFB7B7" />
        <meta name="description" content="AllsCherry" />
        <meta property="og:title" content="AllsCherry | Home" />
        <meta property="og:description" content="AllsCherry" />
        <meta property="og:image" content="/icon.svg" />
        <meta property="og:url" content="https://allscherry.com" />
        <meta name="twitter:title" content="AllsCherry | Home" />
        <meta name="twitter:description" content="AllsCherry | Home" />
        <meta name="twitter:image" content="/icon.svg" />
      </head>
      <body className={Asap.className}>
        {children}
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
