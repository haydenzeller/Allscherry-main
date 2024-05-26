import Link from "next/link";
import Image from "next/image";

import allscherryLogo from "../public/allscherry-logo.png"
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import SubscribeBox from "./components/SubscribeBox";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-base-100">
      <SearchBar/>
      <section className="flex flex-row justify-center gap-5">
        <div className="ml-4 z-10 -mt-16">
          <Image priority={true} className="w-36" src={allscherryLogo} alt="Allscherry Logo"/>
        </div>
        <div className="flex flex-col mt-3 pr-8">
          <h1 className="mb-4 font-bold text-md text-center">Feel the wonder, crave adventure!</h1>
          <div>
            <ul className="grid grid-cols-2 grid-rows-2 gap-7">
              <li className="flex justify-center">
                <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:translate-y-1 active:border-0" href="">
                  Projects
                </Link>
              </li>
              <li className="flex justify-center">
                <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:translate-y-1 active:border-0" href="">
                  Shop
                </Link>
              </li>
              <li className="flex justify-center">
                <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:translate-y-1 active:border-0" href="">
                  Info
                </Link>
              </li>
              <li className="flex justify-center">
                <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:translate-y-1 active:border-0" href="">
                  Publishing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center mt-14">
        <div className="bg-base-300 text-black rounded-2xl absolute pt-3 pb-3 pr-8 pl-8 h-[60px] w-[270px] mb-[110px] z-0" />
        <div className="flex items-center justify-center bg-base-200 text-black rounded-2xl pt-3 pb-3 pr-8 pl-8 relative z-10">
          <h2 className="text-center">
            Sign up for our mailing list!
            <br /> Why? Because!
          </h2>
        </div>
        <SubscribeBox />
      </section>
      <section className="flex flex-col justify-center mt-14 items-center">
        <div className="text-center text-xl">
          <h1>Here&apos;s some of our<br/>current news!
          </h1>
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
      <section className="flex flex-col justify-center items-center mt-14">
        <div className="mb-5">
          <h1 className="text-center text-xl">What even is an<br/><i>Allscherry</i>?<br/>Good question!</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-base-300 text-black rounded-2xl absolute h-[90px] w-[340px] mt-[50px] z-0" />
          <div className="flex items-center justify-center bg-base-200 text-black rounded-2xl pt-3 pb-3 pr-8 pl-8 relative z-10">
            <h2 className="text-center">
              AllsCherry, is a brand that represents<br/>community, quality stories, and<br/>collabrative art pieces of all kinds!
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-14">
          <div className="bg-base-300 text-black rounded-2xl absolute h-[90px] w-[360px] mt-[50px] z-0" />
          <div className="flex items-center justify-center bg-base-200 text-black rounded-2xl pt-3 pb-3 pr-8 pl-8 relative z-10">
            <h2 className="text-center">
              Sound intriguing? Wanna join in? Take a<br/>look around the site, or shoot an email<br/>to the founder, Eric!
            </h2>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center mt-24">
        <div>
          <h1 className="text-xl text-center">Our featured projects</h1>
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
      <Link to={SearchBar}></Link>
      <Footer />
    </main>
  );
}
