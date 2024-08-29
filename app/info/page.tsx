import Image from "next/image";
// Componenets
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";
// images
import mailLogo from "@/public/mail.svg";
import groupPhoto from "@/public/coapThumbnail3.jpg";
import ckEvent from "@/public/ck-event.jpg";
import PageTitle from "@/app/components/PageTitle";
import printBundle from "@/public/print-bundle-example.webp";
import underConstruction from "@/public/underConstruction.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AllsCherry | Info",
  description:
    "AllsCherry Info Page - So what is an AllsCherry anyway? Sounds intriguing? Wanna join in? Take a look around the site, or shoot an email to the founder, Eric!",
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
    canonical: "https://allscherry.com/info",
  },
  openGraph: {
    type: "website",
    url: "https://allscherry.com",
    title: "AllsCherry | Info",
    siteName: "AllsCherry",
    description:
      "AllsCherry Info Page - So what is an AllsCherry anyway? Sounds intriguing? Wanna join in? Take a look around the site, or shoot an email to the founder, Eric!",
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

export default function Info() {
  return (
    <>
      <main
        id="main"
        className="flex min-h-screen flex-col bg-base-100 lg:hidden"
      >
        {/* MOBILE */}
        <section className="">
          <Header />
          <PageTitle title="So what is AllsCherry anyway?" />
          <section className="flex flex-col justify-center mt-14 items-center">
            <div className="bg-base-200 gap-5 rounded-3xl flex flex-col items-center justify-center mx-5 p-5 ">
              <h2 className="p-2 bg-secondary text-black rounded-3xl">
                More than Just Publishing
              </h2>
              <h2 className="p-2 bg-secondary text-black rounded-xl text-center">
                AllsCherry is an Indie Comic Publisher that represents
                community, freedom of the creator, and originality.
                <br />
                <br />
                Look around the site to learn more about how we do things!
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center mx-1 mt-14 gap-5">
              <Link
                href="/info/contact#contactForm"
                className="flex flex-row items-center justify-center gap-5 bg-white rounded-3xl px-5 py-1"
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
            </div>
          </section>
          <section className="flex flex-col items-center justify-center gap-16 mt-14">
            <h2 className="text-xl text-center border border-base-200 rounded-3xl p-4">
              What does AllsCherry do?
            </h2>
            <div className="flex flex-row gap-4 ml-3 mr-3 text-center">
              <div className="">
                <Image
                  src={groupPhoto}
                  alt="Group photo"
                  className="w-52 h-52 rounded-box object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 w-1/2">
                <h2 className="text-md text-center border border-base-200 rounded-3xl p-3">
                  New to books? We bring artists together to create something
                  original and special, start here!
                </h2>
                <div>
                  <Link
                    href="/publishing/collaboratives"
                    className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0"
                  >
                    Collab!
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 ml-3 mr-3 text-center">
              <div className="flex flex-col justify-center items-center gap-4 w-1/2">
                <h2 className="text-md text-center border border-base-200 rounded-3xl p-3">
                  Not sure how to get your book printed or published? We&apos;ve
                  got you covered.
                </h2>
                <div>
                  <Link
                    className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0"
                    href="/publishing"
                  >
                    Publishing!
                  </Link>
                </div>
              </div>
              <div className="">
                <Image
                  src={printBundle}
                  className="w-52 h-52 object-cover rounded-box"
                  alt="Eric UVFS"
                />
              </div>
            </div>

            <div className="flex flex-row gap-4 ml-3 mr-3 text-center">
              <div className="">
                <Image
                  src={ckEvent}
                  className="w-52 h-52 object-cover rounded-box"
                  alt="Eric UVFS"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 w-1/2">
                <h2 className="text-md text-center border border-base-200 rounded-3xl p-3">
                  We go to many shows throughout the year, click below to keep
                  up tp date!
                </h2>
                <div>
                  <Link
                    className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0"
                    href="/info/events"
                  >
                    Events!
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </section>
      </main>
      <main className="hidden lg:flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={underConstruction}
            alt="Under Construction"
            width={400}
            height={400}
          />
          <h1 className="text-2xl w-1/2 text-center">
            Oop, sorry! Desktop version is under construction, check back later!
          </h1>
        </div>
      </main>
    </>
  );
}
