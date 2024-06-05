// Componenets
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
// images
import LandingCarousel from "@/app/components/LandingCarousel";
import SubscribeBox from "@/app/components/SubscribeBox";
import PageTitle from "@/app/components/PageTitle";
import FeaturedProjectsList from "@/app/components/FeaturedProjectsList";

import underConstruction from "@/public/underConstruction.svg";
import Image from "next/image"


export default function Home() {
  return (
    <>
    <main id="main" className="flex flex-col bg-base-100 max-w-svw lg:hidden">
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
    <main className="sm:hidden md:flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <Image src={underConstruction} alt="Under Construction" width={400} height={400}/>
        <h1 className="text-2xl w-1/2 text-center">Oop, sorry! Desktop version is under construction, check back later!</h1>
      </div>
    </main>
    </>
  );
}
