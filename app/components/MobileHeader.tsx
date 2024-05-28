import Image from "next/image";
import Link from "next/link";
import allscherryLogo from "../../public/allscherry-landing.svg"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function MobileHeader() {
    return (
        <section className="flex flex-col justify-center items-center">
            <section className="h-32 w-screen bg-base-200 flex flex-row-reverse">
                <div className="flex flex-row-reverse w-full pt-9">
                    <div className="z-30 flex flex-row justify-center pr-4 pt-2">
                        <FontAwesomeIcon icon={faSearch}  className='text-black absolute mr-8 pointer-events-none'/>
                    </div>
                    <input className="input text-black input-sm bg-white rounded-3xl focus:w-full focus:ml-4 z-20 w-8 pl-5" placeholder="Search something... anything!"/>
                </div>
            </section>
            <div className=" z-10 -mt-28">
                <Image priority={true} className="w-52" src={allscherryLogo} alt="Allscherry Logo"/>
            </div>
            <div className="flex flex-col justify-center items-center mt-3">
                <h1 className="mb-2 font-bold text-2xl text-center">Feel the wonder,<br/>crave adventure!</h1>
            <div className="h-2 rounded-3xl w-64 bg-white mb-7"></div>
                <div>
                    <ul className="grid grid-cols-2 grid-rows-2 gap-7">
                    <li className="flex justify-center">
                        <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0" href="">
                        Projects
                        </Link>
                    </li>
                    <li className="flex justify-center">
                        <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0" href="">
                        Shop
                        </Link>
                    </li>
                    <li className="flex justify-center">
                        <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0" href="">
                        Info
                        </Link>
                    </li>
                    <li className="flex justify-center">
                        <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0" href="">
                        Publishing
                        </Link>
                    </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}