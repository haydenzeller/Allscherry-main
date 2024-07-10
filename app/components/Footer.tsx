'use client'
import Link from "next/link";
import Image from "next/image";
import SubscribeBox from "@/app/components/SubscribeBox";
import mailLogo from "@/public/mail-pink.svg"
import linktreeLogo from "@/public/linktree.svg"
import goingUp from "@/public/going-up-arrow.svg"
import facebookLogo from "@/public/Facebook_Logo_Secondary.png"
import instagramLogo from "@/public/Instagram_Glyph_White.png"  
export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth" // Smooth scrolling behavior
        });
      };
    const currentYear = new Date().getFullYear();
    return (
        <>
        <section className="flex flex-col justify-center items-center mt-14">
            <div onClick={scrollToTop} className="flex flex-col justify-center items-center hover:cursor-pointer">
                <p className="text-l">Going Up?</p>
                <Image src={goingUp} alt="Going Up?" className="-rotate-90 w-12"></Image>
            </div>
        </section>
        <section className="flex flex-col bg-base-200">
            <div className="mb-10">
            <SubscribeBox showOrbs={true}/>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 mb-3">
                <div className="flex flex-row items-center justify-center">
                    <Link href="https://linktr.ee/eolcsvary_art" target="_blank" className="gap-3 flex flex-row-reverse items-center jsutify-center text-lg">
                        <Image className="bg-white rounded-full p-1" src={linktreeLogo} alt="Email Logo" width="50"/>
                    </Link>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <Link href="https://www.facebook.com/allscherry/" target="_blank" className="gap-3 flex flex-row items-center jsutify-center text-lg text-base-100">
                        <Image className="rounded-full" src={facebookLogo} alt="Email Logo" width="50"/>
                    </Link>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <Link href="https://www.instagram.com/allscherrycomics/" target="_blank" className="gap-3 flex flex-row items-center jsutify-center text-lg">
                        <Image className="" src={instagramLogo} alt="Email Logo" width="50"/>
                    </Link>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <Link href="/info/contact#contactForm" className="gap-3 flex flex-row items-center jsutify-center text-lg text-base-100">
                        <Image className="bg-white rounded-full p-1" src={mailLogo} alt="Email Logo" width="50"/>
                    </Link>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center m-1 gap-5">
                <Link href="/legal/privacy" className="underline">Privacy</Link>
                <Link href="/legal/terms" className="underline">Terms</Link>
                <Link href="/legal/copyright" className="underline">Copyright</Link>
            </div>
            <div className="flex justify-center items-center my-4">
                <p className="opacity-70 text-sm">Copywrite &copy; 2022-{currentYear}, Allscherry. All Rights Reserved.</p>
            </div>
        </section>
        </>
    )
}