import Link from "next/link";
import Image from "next/image";

import SubscribeBox from "./SubscribeBox";

import mailLogo from "../../public/mail.svg"
import linktreeLogo from "../../public/linktree.svg"

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <section className="flex flex-col bg-base-200 mt-14">
            <div className="mb-3">
               <SubscribeBox showOrbs={true}/>
            </div>
            <div className="flex flex-row justify-center items-center gap-24 mb-3">
                <div className="flex flex-row items-center justify-center">
                    <Link href="" className="gap-3 flex flex-row-reverse items-center jsutify-center">
                        Linktree!
                        <Image className="bg-white rounded-full p-1" src={linktreeLogo} alt="Email Logo" width="30"/>
                    </Link>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <Link href="" className="gap-3 flex flex-row items-center jsutify-center">
                        Email Us!
                        <Image className="bg-white rounded-full p-1" src={mailLogo} alt="Email Logo" width="30"/>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center items-center m-1">
                <p className="opacity-70 text-sm">Copywrite &copy; 2022-{currentYear}, Allscherry. All Rights Reserved.</p>
            </div>
        </section>
    )
}