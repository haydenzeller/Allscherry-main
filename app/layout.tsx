import { Metadata } from "next";
import { Asap as GoogleAsap } from "next/font/google"; // Renamed Asap to GoogleAsap to avoid conflict
import "./globals.css";
import { Viewport } from "next";
const Asap = GoogleAsap({ 
  weight: '500',
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Allscherry!",
  description: "",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  viewportFit: "cover",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
      </head>
      <body className={Asap.className}>
        {children}
      </body>
    </html>
  );
}
