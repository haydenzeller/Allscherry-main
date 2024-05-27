import Link from "next/link";
import Image from "next/image";
import SubscribeBox from "./SubscribeBox";
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <section className="flex flex-col bg-base-200 mt-14">
            <div>
               <SubscribeBox showOrbs={false}/>
            </div>
            <div className="flex flex-row justify-center items-center gap-24">
                <div className="flex flex-row items-center justify-center">
                    <Image src="" alt="Linktree Logo" width="20"/>
                    <Link href="">
                        Linktree!
                    </Link>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <Link href="">
                        Email Us!
                    </Link>
                    <Image src="" alt="Email Logo" width="20"/>
                </div>
            </div>
            <div className="flex justify-center items-center m-1">
                <p className="opacity-70 text-sm">Copywrite &copy; 2023-{currentYear}, Allscherry. All Rights Reserved.</p>
            </div>
        </section>
    )
}