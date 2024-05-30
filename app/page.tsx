// Componenets
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
// images
import LandingCarousel from "@/app/components/LandingCarousel";
import SubscribeBox from "@/app/components/SubscribeBox";
import PageTitle from "@/app/components/PageTitle";

export default function Home() {
  return (
    <main id="main" className="flex min-h-screen flex-col bg-base-100">
      {/* MOBILE */}
      <section className="">
        <Header />
        <PageTitle title={"Welcome to AllsCherry! Take a look around!"}/>
        <section className="mt-24">
          <SubscribeBox />
        </section>
        <section className="flex flex-col justify-center items-center mt-24">
          <div>
            <h1 className="text-2xl">
              Here&apos;s some of out current news!
            </h1>
          </div>
          <LandingCarousel />
        </section>
        <Footer />
      </section>
    </main>
  );
}
