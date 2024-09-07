import EventList from "@/app/components/EventList";
import Header from "@/app/components/Header";
import ericBooth from "@/public/ericBooth.png";
import Image from "next/image";
import PageTitle from "@/app/components/PageTitle";
import Footer from "@/app/components/Footer";
import underConstruction from "@/public/underConstruction.svg";
import { Metadata } from "next";
import Link from "next/link";
import mailLogo from "@/public/mail.svg";
export const metadata: Metadata = {
  title: "AllsCherry | Events",
  description:
    "AllsCherry Events Page - Check out our local events! - AllsCherry loves local events! Scroll down for a list of our events for 2024!",
  keywords: [
    "AllsCherry",
    "Home",
    "AllsCherry Home",
    "AllsCherry Projects",
    "AllsCherry News",
    "AllsCherry Updates",
    "AllsCherry Blog",
    "AllsCherry Blog Posts",
    "AllsCherry Blog Updates",
    "AllsCherry Blog News",
    "AllsCherry Blog Projects",
    "AllsCherry Blog Posts Projects News Updates",
    "AllsCherry Blog Posts Projects News Updates Home",
  ],
  twitter: {
    card: "summary",
    site: "@allscherry",
  },
  alternates: {
    canonical: "https://allscherry.com/info/events",
  },
  openGraph: {
    type: "website",
    url: "https://allscherry.com",
    title: "AllsCherry | Events",
    description:
      "AllsCherry Events Page - Check out our local events! - AllsCherry loves local events! Scroll down for a list of our events for 2024!",
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

export default function Events() {
  const year = new Date().getFullYear();
  return (
    <>
      <main className="flex max-w-screen min-h-screen flex-col bg-base-100">
        <section className="">
          <Header />
          <PageTitle title="AllsCherry loves local events!" />
          <div className="flex flex-col justify-center items-center mt-14 text-center w-full">
            <h1 className="text-lg  text-center border border-base-200 rounded-full px-12 lg:text-2xl py-1 mb-5">
              Scroll down for a list
              <br />
              of our events for {year}!
            </h1>
            <Image
              className="rounded-box w-96 lg:w-1/2"
              src={ericBooth}
              alt="Erics Booth"
            />
            <p className="mt-3 opacity-50">Photo at L.A Mood Comics and Games, in London, ON</p>
          </div>
          <section className="mt-14">
            <EventList />
          </section>
          <section className="flex flex-col items-center justify-center mt-6">
            <h2 className="text-2xl text-center border border-base-200 rounded-3xl px-3 py-2 mt-12">
              Have a show you want to see us at? Email us your suggestions!
            </h2>
            <Link
              href="/info/contact#contactForm"
              className="flex flex-row items-center mt-6 justify-center gap-5 bg-white rounded-3xl px-5 py-1"
            >
              <Image
                src={mailLogo}
                alt="Mail Logo"
                width={100}
                height={100}
                className="w-10"
              />
              <h2 className="text-black">Email us here!</h2>
            </Link>
          </section>
        </section>
        <Footer />
      </main>
    </>
  );
}
