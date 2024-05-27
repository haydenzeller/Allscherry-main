import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import allscherryLogo from "../../public/allscherry-logo.png"
import Link from "next/link";

export default function NavBar() {
    return (
        <section className="bg-base-200 flex flex-row w-screen pt-2 justify-center items-center md:gap-5 lg:gap-10">
            {/* LEFT */}
            <div className="flex flex-col w-full">
                <div className="flex flex-row justify-end items-end mb-2">
                    <h1 className="text-sm text-base-100 lg:text-xl">Feel the Wonder,</h1> 
                </div>
                <div>
                    <div className="bg-base-100 h-3 w-full rounded-3xl"/>
                </div>
                <div className="flex flex-row-reverse pt-5 gap-14 lg:gap-19 pr-10">
                    <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-24 lg:w-36 text-center active:mt-1 active:border-0" href="">
                        Projects
                    </Link>
                    <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-24 lg:w-36 text-center active:mt-1 active:border-0" href="">
                        Shop
                    </Link>
                </div>
            </div>
            {/* CENTER IMAGE */}
            <div className="w-52">
                <div className="w-24 lg:w-36 -mb-12">
                    <Image src={allscherryLogo} alt="AllsCherry Logo"/>
                </div>
            </div>
            {/* RIGHT */}
            <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between items-center mb-2">
                    <div className="flex flex-row">
                        <h1 className="text-sm text-base-100 lg:text-xl">Crave Adventure!</h1> 
                    </div>
                    <div className="flex w-52 lg:w-64 mr-3">
                        <FontAwesomeIcon icon={faSearch}  className='w-5 m-1.5 text-black absolute'/>
                        <input className=" text-black pl-9 lg:pl-8 input input-xs text-xs mr-10lg:text-s lg:input-sm bg-white rounded-3xl w-full" placeholder="Search something... anything!" />
                    </div>
                </div>
                <div>
                    <div className="bg-base-100 h-3 w-full rounded-3xl"/>
                </div>
                <div className="flex flex-row gap-14 lg:gap-19 pt-5 pl-10">
                    <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-24 lg:w-36 text-center active:mt-1 active:border-0" href="">
                        Publishing
                    </Link>
                    <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-24 lg:w-36 text-center active:mt-1 active:border-0" href="">
                        Info
                    </Link>
                </div>
            </div>
        </section>
    )
}