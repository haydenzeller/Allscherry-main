import Image from "next/image";
import Link from "next/link";
import allscherryLogo from "@/public/allscherry-landing.svg"
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function MobileHeader() {
    return (
        <section className="flex flex-col justify-center items-center">
            <section className="h-52 w-full bg-base-200 ">
                {/* <div className="flex flex-row-reverse w-full pt-9">
                    <div className="z-30 flex flex-row justify-center pr-4 pt-2">
                        <FontAwesomeIcon icon={faSearch}  className='text-black absolute mr-8 pointer-events-none'/>
                    </div>
                    <input className="input text-black input-sm bg-white rounded-3xl focus:w-full focus:ml-4 z-20 w-8 pl-5" placeholder="Search something... anything!"/>
                </div> */}
            </section>
            <Link href="/">
                <div className=" z-10 -mt-28">
                    <Image priority className="w-52" src={allscherryLogo} alt="Allscherry Logo"/>
                </div>
            </Link>
            <div className="flex flex-col justify-center items-center mt-3">
                <h1 className="mb-2 font-bold text-2xl text-center">Feel The Wonder,<br/>Crave Adventure! <span className="text-xs">&copy;</span></h1>
            <div className="h-2 rounded-3xl w-64 bg-white mb-7"></div>
                <div>
                    <ul className="grid grid-cols-2 grid-rows-2 gap-7">
                    <li className="flex justify-center ">
                        <div className="dropdown gap-4">
                            <div tabIndex={0} role="button" className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0" >
                                Projects
                            </div>
                            <ul tabIndex={0} className="text-black dropdown-content mt-1 p-2 bg-primary border-4 border-accent rounded-box w-52 shadow-right-bottom z-50 flex flex-col">
                                <Link href="/projects/wendy-and-the-sprite" className="hover:bg-white p-2 rounded-2xl w-full">Wendy and the Sprite</Link>
                            </ul>
                        </div>
                    </li>
                    <li className="flex justify-center">
                        <div className="dropdown dropdown-end gap-4">
                            <div tabIndex={0} role="button" className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0" >
                                Shop
                            </div>
                            <ul tabIndex={0} className="text-black dropdown-content z-10 mt-1 p-2 bg-primary border-4 border-accent rounded-box w-52 shadow-right-bottom">
                                <li><a href="/">Coming soon!</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="flex justify-center">
                        <div className="dropdown gap-4">
                            <div tabIndex={0} role="button" className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0" >
                                Info
                            </div>
                            <ul tabIndex={0} className="text-black dropdown-content mt-1 p-2 bg-primary border-4 border-accent rounded-box w-52 shadow-right-bottom z-50 flex flex-col">
                                <Link href="/info" className="hover:bg-white p-2 rounded-2xl w-full">What is AllsCherry?</Link>
                                <Link href="/info/contact" className="hover:bg-white p-2 rounded-2xl w-full">Contact</Link>
                                <Link href="/info/events" className="hover:bg-white p-2 rounded-2xl w-full">Events</Link>
                                <Link href="/info/affiliates" className="hover:bg-white p-2 rounded-2xl w-full">Affiliates</Link>
                            </ul>
                        </div>
                    </li>
                    <li className="flex justify-center">
                        <div className="dropdown dropdown-end gap-4">
                            <div tabIndex={0} role="button" className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0" >
                                Publishing
                            </div>
                            <ul tabIndex={0} className="text-black dropdown-content mt-1 p-2 bg-primary border-4 border-accent rounded-box w-52 shadow-right-bottom z-50 flex flex-col">
                                <Link href="/publishing" className="hover:bg-white p-2 rounded-2xl w-full">AllsCherry Publishing</Link>
                                <Link href="/publishing/anthology" className="hover:bg-white p-2 rounded-2xl w-full">Joining an Anthology</Link>
                                <Link href="/publishing/design" className="hover:bg-white p-2 rounded-2xl w-full">Design Help</Link>

                            </ul>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}