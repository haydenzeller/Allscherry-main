import Image from "next/image";
// Componenets
import Footer from "./components/Footer";
import SubscribeBox from "./components/SubscribeBox";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";
import MobileHeader from "./components/MobileHeader";

export default function Home() {
  return (
    <main id="main" className="flex min-h-screen flex-col bg-base-100">
      {/* MOBILE */}
      <section className="md:hidden">
        <MobileHeader />
        <section className="flex flex-col justify-center items-center mt-14">
          <div className="mb-5">
            <h2 className="text-center text-xl">
              What even is an<br />
              <i>Allscherry</i>?<br />
              Good question!
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="relative flex items-center justify-center mr-12 ml-12 text-black rounded-2xl shadow-xl">
              <div className="absolute -inset-2 z-0 bg-base-300 rounded-2xl transform scale-105 mt-24"></div>
              <h2 className="text-center text-xl relative z-10 bg-base-200 rounded-2xl p-5">
                AllsCherry, is a brand that<br />
                represents community,<br />
                quality stories, and<br />
                collaborative art pieces of<br />
                all kinds!<br /><br />
                Sound intriguing? Wanna<br />
                join in? Take a<br />
                look around the site, or shoot an email<br />
                to the founder, Eric!
              </h2>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center mt-14 items-center">
          <div className="text-center text-xl">
            <h2>Here&apos;s some of our<br/>current news!
            </h2>
          </div>
          <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-base-100 rounded-box">
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
            </div> 
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
            </div> 
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
            </div> 
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
            </div> 
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
            </div> 
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
            </div> 
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center mt-24">
          <div>
            <h2 className="text-xl text-center">Our featured projects</h2>
          </div>
          <div className="grid grid-cols-2 grid-rows-3 gap-24 mt-9 text-center">
            <div>
              {/* <Image /> */}
              <p>Wendy and the Sprite</p>
            </div>
            <div>
              {/* <Image /> */}
              <p>Overflow</p>
            </div>
            <div>
              {/* <Image /> */}
              <p>AllsCherry Anthology</p>
            </div>
            <div>
              {/* <Image /> */}
              <p>Printing and Publishing</p>
            </div>
            <div>
              {/* <Image /> */}
              <p>Prophets of Grey</p>
            </div>
            <div>
              {/* <Image /> */}
              <p>Crow on a Perch</p>
            </div>
          </div>
        </section>
        <ScrollToTop />
        <Footer />
      </section>
      {/* TABLET || SMALL LAPTOP */}
      <section className="hidden md:flex md:flex-col md:justify-center md:items-center">
        <NavBar/>
      </section>
    </main>
  );
}
