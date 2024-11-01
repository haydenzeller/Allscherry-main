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
