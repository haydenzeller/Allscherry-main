// Componenets
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
// images
import LandingCarousel from "@/app/components/LandingCarousel";
import SubscribeBox from "@/app/components/SubscribeBox";
import PageTitle from "@/app/components/PageTitle";
import FeaturedProjectsList from "@/app/components/FeaturedProjectsList";

export default function Home() {
  return (
    <main id="main" className="flex flex-col bg-base-100 min-h-svh ">
      {/* MOBILE */}
      <section className="">
        <Header />
        <PageTitle title={"Welcome to AllsCherry! Take a look around!"}/>
        <section className="mt-24">
          <SubscribeBox />
        </section>
        <section className="flex flex-col justify-center items-center mt-24">
          <div>
            <h1 className="text-2xl text-center">
              Here&apos;s some of out current news!
            </h1>
          </div>
        </section>
        <LandingCarousel/>
        <section className="text-center mt-14">
          <h2 className="text-xl mb-5">Our featured projects</h2>
          <FeaturedProjectsList/>
        </section>
        <Footer />
      </section>
    </main>
  );
}
