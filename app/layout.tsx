import { Metadata } from "next";
import { Asap as GoogleAsap } from "next/font/google"; // Renamed Asap to GoogleAsap to avoid conflict
import "./globals.css";

const Asap = GoogleAsap({ 
  weight: '600',
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Allscherry!",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Asap.className}>
        {children}
      </body>
    </html>
  );
}
