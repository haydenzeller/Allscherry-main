// Componenets
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
// images
import LandingCarousel from "@/app/components/LandingCarousel";
import SubscribeBox from "@/app/components/SubscribeBox";
import PageTitle from "@/app/components/PageTitle";
import FeaturedProjectsList from "@/app/components/FeaturedProjectsList";

import underConstruction from "@/public/underConstruction.svg";
import Image from "next/image";
import { Metadata } from "next";
import AnthologyRosterList from "./components/AnthologyRosterList";

export const metadata: Metadata = {
  title: "AllsCherry | Home",
  description:
    "AllsCherry Home Page - Welcome to AllsCherry! Take a look around! Here you can find our latest news, projects, and more! Subscribe to our newsletter to stay up to date!",
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
  alternates: {
    canonical: "https://allscherry.com",
  },
  twitter: {
    card: "summary",
    site: "@allscherry",
  },

  openGraph: {
    type: "website",
    url: "https://allscherry.com",
    title: "AllsCherry | Home",
    siteName: "AllsCherry!",
    description:
      "AllsCherry Home Page - Welcome to AllsCherry! Take a look around! Here you can find our latest news, projects, and more! Subscribe to our newsletter to stay up to date!",
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

export default function Home() {
  return (
    <>
      <main id="main" className="flex flex-col bg-base-100 max-w-svw lg:hidden">
        {/* MOBILE */}
        <section className="">
          <Header />
          <PageTitle title={"Welcome to AllsCherry! Take a look around!"} />
          <section className="mt-24">
            <div className="bg-base-200 gap-5 rounded-3xl flex flex-col items-center justify-center mx-5 p-5 ">
              <h2 className="p-2 bg-secondary text-black rounded-3xl">
                Sign up for our Mailing List!
              </h2>
              <h2 className="p-2 bg-secondary text-black rounded-xl">
                Get exclusive updates, discounts, and info on newest releases!
              </h2>
            </div>
            <SubscribeBox />
          </section>
          <section className="flex flex-col justify-center items-center mt-24">
            <div className="flex justify-center items-center">
              <h1 className="text-2xl text-center border border-base-200 rounded-full p-3">
                Here&apos;s some of our current news!
              </h1>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center w-full h-auto">
            <LandingCarousel />
          </section>
          <section className="mt-14 text-center">
            <AnthologyRosterList />
          </section>
          <section className="text-center mt-14">
            <div className="mb-5 flex items-center justify-center">
              <h2 className="text-2xl border border-base-200 rounded-full p-3">
                Our featured projects
              </h2>
            </div>
            <FeaturedProjectsList />
          </section>
          <Footer />
        </section>
      </main>
      <main className="hidden text-xl lg:flex flex-col bg-base-100 max-w-svw ">
        {/* desktop */}
        <Header />
        <PageTitle title={"Welcome to AllsCherry! Take a look around!"} />
        <section className="flex flex-col items-center justify-center mt-24">
          <div className="bg-base-200 gap-5 rounded-3xl flex flex-col items-center justify-center mx-5 p-5 ">
            <h2 className="p-2 bg-secondary text-black rounded-3xl">
              Sign up for our Mailing List!
            </h2>
            <h2 className="p-2 bg-secondary text-black rounded-xl">
              Get exclusive updates, discounts, and info on newest releases!
            </h2>
          </div>
          <SubscribeBox />
        </section>
        <section className="flex flex-col justify-center items-center mt-24">
          <div className="flex justify-center items-center">
            <h1 className="text-2xl text-center border border-base-200 rounded-full p-3">
              Here&apos;s some of our current news!
            </h1>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-full h-auto">
          <LandingCarousel />
        </section>
        <section className="mt-14 text-center">
          <AnthologyRosterList />
        </section>
        <section className="text-center mt-14">
          <div className="mb-5 flex items-center justify-center">
            <h2 className="text-2xl border border-base-200 rounded-full p-3">
              Our featured projects
            </h2>
          </div>
          <FeaturedProjectsList />
        </section>
        <Footer />
      </main>
    </>
  );
}
