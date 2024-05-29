// Componenets
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
// images
import LandingCarousel from "./components/LandingCarousel";

export default function Home() {
  return (
    <main id="main" className="flex min-h-screen flex-col bg-base-100">
      {/* MOBILE */}
      <section className="">
        <Header />
        <section className="flex flex-col justify-center items-center mt-14">
          <LandingCarousel />
        </section>
        <ScrollToTop />
        <Footer />
      </section>
    </main>
  );
}
