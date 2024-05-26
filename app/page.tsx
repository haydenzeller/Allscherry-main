import Link from "next/link";
import Image from "next/image";

import allscherryLogo from "../public/allscherry-logo.png"
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <SearchBar/>
      <section className="flex flex-row justify-between">
        <div className="ml-4 z-10 -mt-16">
          <Image priority className=" w-32" src={allscherryLogo} alt="Allscherry Logo"/>
        </div>
        <div className="flex flex-col mt-3 pr-9">
          <h1 className="mb-4 font-bold text-l">Feel the wonder, crave adventure!</h1>
          <div>
            <ul className="grid grid-cols-2 grid-rows-2 gap-7">
              <li className="flex justify-center">
                <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-3xl block w-28 text-center" href="">
                  Projects
                </Link>
              </li>
              <li className="flex justify-center">
                <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-3xl block w-28 text-center" href="">
                  Shop
                </Link>
              </li>
              <li className="flex justify-center">
                <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-3xl block w-28 text-center" href="">
                  Info
                </Link>
              </li>
              <li className="flex justify-center">
                <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-3xl block w-28 text-center" href="">
                  Publishing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
