import Image from "next/image";
import Link from "next/link";
import allscherryLogo from "@/public/allscherry-landing.svg";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import homeLogo from "@/public/home-logo.svg";
export default function MobileHeader() {
  return (
    <>
      <section className="flex flex-col justify-center items-center lg:hidden">
        <section className=" h-40 w-full bg-base-200 ">
          {/* <div className="flex flex-row-reverse w-full pt-9">
                    <div className="z-30 flex flex-row justify-center pr-4 pt-2">
                        <FontAwesomeIcon icon={faSearch}  className='text-black absolute mr-8 pointer-events-none'/>
                    </div>
                    <input className="input text-black input-sm bg-white rounded-3xl focus:w-full focus:ml-4 z-20 w-8 pl-5" placeholder="Search something... anything!"/>
                </div> */}
        </section>
        <Link href="/">
          <div className=" z-10 -mt-28">
            <Image
              priority
              className="w-52"
              src={allscherryLogo}
              alt="Allscherry Logo"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-center items-center mt-3 ">
          <h2 className="mb-2 font-bold text-2xl text-center">
            Feel The Wonder,
            <br />
            Crave Adventure! <span className="text-xs">&copy;</span>
          </h2>
          <div className="h-2 rounded-3xl w-64 bg-white mb-7"></div>
          <div>
            <ul className="grid grid-cols-2 grid-rows-2 gap-7">
              <li className="flex justify-center ">
                <div className="dropdown gap-4">
                  <div
                    tabIndex={0}
                    role="button"
                    className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0"
                  >
                    Projects
                  </div>
                  <ul
                    tabIndex={0}
                    className="text-black dropdown-content mt-1 p-2 bg-primary border-4 border-accent rounded-box w-52 shadow-right-bottom z-50 flex flex-col"
                  >
                    <Link
                      href="/projects/wendy-and-the-sprite"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      Wendy and the Sprite
                    </Link>
                    <Link
                      href="/projects/overflow"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      Overflow
                    </Link>
                    <Link
                      href="/projects/dot-the-robot"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      Dot the Robot
                    </Link>
                    <Link
                      href="/projects/allscherry-anthology"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      AllsCherry Anthology
                    </Link>
                    <Link
                      href="/projects/crow-on-a-perch"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      Crow on a Perch
                    </Link>
                    <Link
                      href="/projects/prophets-of-grey"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      Prophets of Grey
                    </Link>
                  </ul>
                </div>
              </li>
              <li className="flex justify-center">
                <div className="dropdown dropdown-end gap-4">
                  <Link
                    href="https://shop.allscherry.com/"
                    tabIndex={0}
                    role="button"
                    className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0"
                  >
                    Shop
                  </Link>
                  {/* <ul tabIndex={0} className="text-black dropdown-content z-10 mt-1 p-2 bg-primary border-4 border-accent rounded-box w-52 shadow-right-bottom">
                            </ul> */}
                </div>
              </li>
              <li className="flex justify-center">
                <div className="dropdown gap-4">
                  <div
                    tabIndex={0}
                    role="button"
                    className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0"
                  >
                    Info
                  </div>
                  <ul
                    tabIndex={0}
                    className="text-black dropdown-content mt-1 p-2 bg-primary border-4 border-accent rounded-box w-52 shadow-right-bottom z-50 flex flex-col"
                  >
                    <Link
                      href="/info"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      What is AllsCherry?
                    </Link>
                    <Link
                      href="/info/contact"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      Contact
                    </Link>
                    <Link
                      href="/info/events"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      Events
                    </Link>
                    <Link
                      href="/info/affiliates"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      Our Team
                    </Link>
                  </ul>
                </div>
              </li>
              <li className="flex justify-center">
                <div className="dropdown dropdown-end gap-4">
                  <div
                    tabIndex={0}
                    role="button"
                    className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0"
                  >
                    Publishing
                  </div>
                  <ul
                    tabIndex={0}
                    className="text-black dropdown-content mt-1 p-2 bg-primary border-4 border-accent rounded-box w-52 shadow-right-bottom z-50 flex flex-col"
                  >
                    <Link
                      href="/publishing"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      AllsCherry Publishing
                    </Link>
                    <Link
                      href="/publishing/collaboratives"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      Collaboratives
                    </Link>
                    <Link
                      href="/applications"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      Applications
                    </Link>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="items-center justify-center flex mt-4">
              <Link
                href="/"
                className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-full flex w-12 items-center justify-center text-center active:mt-1 active:border-0"
              >
                <Image src={homeLogo} alt="Home Logo" className="w-8" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="flex-col items-center text-xl justify-center hidden lg:flex min-w-screen">
        <section className=" h-40 w-full bg-base-200 ">
          {/* <div className="flex flex-row-reverse w-full pt-9">
                    <div className="z-30 flex flex-row justify-center pr-4 pt-2">
                        <FontAwesomeIcon icon={faSearch}  className='text-black absolute mr-8 pointer-events-none'/>
                    </div>
                    <input className="input text-black input-sm bg-white rounded-3xl focus:w-full focus:ml-4 z-20 w-8 pl-5" placeholder="Search something... anything!"/>
                </div> */}
        </section>
        <div className="w-screen flex bg-base-100 z-10 flex-col items-center justify-center pb-12">
          <Link
            href="/"
            className="flex flex-col items-center justify-center pt-12"
          >
            <Image
              priority
              className="w-80 -mt-44"
              src={allscherryLogo}
              alt="Allscherry Logo"
            />
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center bg-base-100 w-full pb-12">
          <div className="bg-white h-3 rounded-xl w-60" />
          <div className="mx-12 text-2xl">
            <h1>
              Feel the Wonder,
              <br />
              Crave Adventure!
            </h1>
          </div>
          <div className="bg-white h-3 rounded-xl w-60" />
        </div>
        <div className="flex w-screen flex-row items-center gap-0 justify-center bg-base-100">
          <div className="flex flex-row items-center justify-self-center mr-0">
            <ul className="grid grid-cols-2 gap-40 z-10">
              <li className="flex justify-center ">
                <div className="dropdown gap-4">
                  <div
                    tabIndex={0}
                    role="button"
                    className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-40 text-center active:mt-1 active:border-0"
                  >
                    Projects
                  </div>
                  <ul
                    tabIndex={0}
                    className="text-black dropdown-content mt-1 p-2 bg-primary border-4 border-accent rounded-box w-52 shadow-right-bottom z-50 flex flex-col"
                  >
                    <Link
                      href="/projects/wendy-and-the-sprite"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      Wendy and the Sprite
                    </Link>
                    <Link
                      href="/projects/overflow"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      Overflow
                    </Link>
                    <Link
                      href="/projects/dot-the-robot"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      Dot the Robot
                    </Link>
                    <Link
                      href="/projects/allscherry-anthology"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      AllsCherry Anthology
                    </Link>
                    <Link
                      href="/projects/crow-on-a-perch"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      Crow on a Perch
                    </Link>
                    <Link
                      href="/projects/prophets-of-grey"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      Prophets of Grey
                    </Link>
                  </ul>
                </div>
              </li>
              <li className="flex justify-center">
                <div className="dropdown dropdown-end gap-4">
                  <Link
                    href="https://shop.allscherry.com/"
                    tabIndex={0}
                    role="button"
                    className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-40 text-center active:mt-1 active:border-0"
                  >
                    Shop
                  </Link>
                  {/* <ul tabIndex={0} className="text-black dropdown-content z-10 mt-1 p-2 bg-primary border-4 border-accent rounded-box w-52 shadow-right-bottom">
                                </ul> */}
                </div>
              </li>
            </ul>
          </div>
          <div className="items-center justify-center flex mx-24">
            <Link
              href="/"
              className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-full flex w-12 items-center justify-center text-center active:mt-1 active:border-0"
            >
              <Image src={homeLogo} alt="Home Logo" className="w-8" />
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center">
            <ul className="grid grid-cols-2 z-10 gap-40">
              <li className="flex justify-center">
                <div className="dropdown gap-4">
                  <div
                    tabIndex={0}
                    role="button"
                    className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-40 text-center active:mt-1 active:border-0"
                  >
                    Info
                  </div>
                  <ul
                    tabIndex={0}
                    className="text-black dropdown-content mt-1 p-2 bg-primary border-4 border-accent rounded-box w-52 shadow-right-bottom z-50 flex flex-col"
                  >
                    <Link
                      href="/info"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      What is AllsCherry?
                    </Link>
                    <Link
                      href="/info/contact"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      Contact
                    </Link>
                    <Link
                      href="/info/events"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      Events
                    </Link>
                    <Link
                      href="/info/affiliates"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      Our Team
                    </Link>
                  </ul>
                </div>
              </li>
              <li className="flex justify-center">
                <div className="dropdown dropdown-end gap-4">
                  <div
                    tabIndex={0}
                    role="button"
                    className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-40 text-center active:mt-1 active:border-0"
                  >
                    Publishing
                  </div>
                  <ul
                    tabIndex={0}
                    className="text-black dropdown-content mt-1 p-2 bg-primary border-4 border-accent rounded-box w-52 shadow-right-bottom z-50 flex flex-col"
                  >
                    <Link
                      href="/publishing"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      AllsCherry Publishing
                    </Link>
                    <Link
                      href="/publishing/collaboratives"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      Collaboratives
                    </Link>
                    <Link
                      href="/applications"
                      className="hover:bg-white p-2 rounded-2xl w-full"
                    >
                      Applications
                    </Link>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
