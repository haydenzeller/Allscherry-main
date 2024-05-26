import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <section className="flex flex-col bg-base-200 pt-5">
            <div className="flex flex-col items-center justify-center">
                <div>
                    <input className="rounded-3xl text-black input w-60 bg-white input-md text-center" placeholder="Your email here! please :)"/>
                </div>
                <div>
                    <button className="bg-primary mt-5 text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center">Subscribe!</button>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-24 mt-5">
                <div className="flex flex-row">
                    <Image src="" alt="Linktree Logo" width="20"/>
                    <Link href="">
                        Linktree!
                    </Link>
                </div>
                <div className="flex flex-row">
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