import Link from "next/link";
import Image from "next/image";

import allscherryLogo from "../public/allscherry-logo.png"
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-base-100">
      <SearchBar/>
      <section className="flex flex-row justify-between">
        <div className="ml-4 z-10 -mt-16">
          <Image priority className=" w-32" src={allscherryLogo} alt="Allscherry Logo"/>
        </div>
        <div className="flex flex-col mt-3 pr-2">
          <h1 className="mb-4 font-bold text-sm text-center">Feel the wonder, crave adventure!</h1>
          <div>
            <ul className="grid grid-cols-2 grid-rows-2 gap-7">
              <li className="flex justify-center">
                <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center" href="">
                  Projects
                </Link>
              </li>
              <li className="flex justify-center">
                <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center" href="">
                  Shop
                </Link>
              </li>
              <li className="flex justify-center">
                <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center" href="">
                  Info
                </Link>
              </li>
              <li className="flex justify-center">
                <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center" href="">
                  Publishing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center mt-10">
        <div className="bg-base-200 text-black rounded-3xl pt-3 pb-3 pr-8 pl-8">
          <h2 className="text-center">Sign up for our mailing list!<br/> Why? Because!</h2>
        </div>
        <div className="mt-10 flex flex-row gap-6 justify-center items-center">
          <div className="bg-white w-12 h-12 rounded-full" />
          <input className="rounded-3xl input w-60 bg-white input-md text-center" placeholder="Your email here! please :)"/>
          <div className="bg-white w-12 h-12 rounded-full" />
        </div>
        <div>
          <button className="bg-primary mt-5 text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center">Subscribe!</button>
        </div>
      </section>
      <section>
        <div className="text-center mt-24 text-xl">
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
    </main>
  );
}
