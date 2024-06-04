// Componenets
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
// images
import LandingCarousel from "@/app/components/LandingCarousel";
import SubscribeBox from "@/app/components/SubscribeBox";
import PageTitle from "@/app/components/PageTitle";
import FeaturedProjectsList from "@/app/components/FeaturedProjectsList";

import Head from "next/head";



export default function Home() {
  return (
    <>
    <Head>
      <title>AllsCherry | Home</title>
      <meta name="description" content="AllsCherry Home Page" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content="AllsCherry | Home" />
      <meta property="og:description" content="AllsCherry Home Page" />
      <meta property="og:image" content="/logo.png" />
      <meta property="og:url" content="https://allscherry.com" />
      <meta name="twitter:title" content="AllsCherry | Home" />
      <meta name="twitter:description" content="AllsCherry Home Page" />
      <meta name="twitter:image" content="/icon.svg" />
    </Head>
    <main id="main" className="flex flex-col bg-base-100 max-w-svw">
      {/* MOBILE */}
      <section className="">
        <Header />
        <PageTitle title={"Welcome to AllsCherry! Take a look around!"}/>
        <section className="mt-24">
          <SubscribeBox />
        </section>
        <section className="flex flex-col justify-center items-center mt-24">
          <div className="flex justify-center items-center">
            <h1 className="text-2xl text-center border border-base-200 rounded-full p-3">
              Here&apos;s some of out current news!
            </h1>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-full h-auto">
          <LandingCarousel/>
        </section>
        <section className="text-center mt-14">
          <div className="mb-5 flex items-center justify-center">
            <h2 className="text-2xl border border-base-200 rounded-full p-3">Our featured projects</h2>
          </div>
          <FeaturedProjectsList/>
        </section>
        <Footer />
      </section>
    </main>
    </>
  );
}
