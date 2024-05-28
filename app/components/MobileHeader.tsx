'use client'
import Image from "next/image";
import Link from "next/link";
import allscherryLogo from "../../public/allscherry-landing.svg"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "./Modal";



export default function MobileHeader() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setIsModalOpen(false);
    };
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
            <Link href="/">
                <div className=" z-10 -mt-28">
                    <Image priority={true} className="w-52" src={allscherryLogo} alt="Allscherry Logo"/>
                </div>
            </Link>
            <div className="flex flex-col justify-center items-center mt-3">
                <h1 className="mb-2 font-bold text-2xl text-center">Feel the wonder,<br/>crave adventure!</h1>
            <div className="h-2 rounded-3xl w-64 bg-white mb-7"></div>
                <div>
                    <ul className="grid grid-cols-2 grid-rows-2 gap-7">
                    <li className="flex justify-center ">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0" >
                                Projects
                            </div>
                            <ul tabIndex={0} className="dropdown-content absolute z-[1] menu p-2 shadow  bg-base-200 border-4 border-base-300 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="flex justify-center">
                        <div onClick={openModal} className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0" >
                        Shop
                        </div>
                        <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
                    </li>
                    <li className="flex justify-center">
                        <div className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0" >
                        Info
                        </div>
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