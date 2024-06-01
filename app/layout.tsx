import { Metadata } from "next";
import { Asap as GoogleAsap } from "next/font/google"; // Renamed Asap to GoogleAsap to avoid conflict
import "./globals.css";

const Asap = GoogleAsap({ 
  weight: '500',
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Allscherry!",
  description: "",
  appleWebApp: {
    title: 'Allscherry!',
    statusBarStyle: 'black-translucent',
  },
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
