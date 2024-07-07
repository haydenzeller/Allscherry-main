import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import PageTitle from "@/app/components/PageTitle";

import Image from "next/image";
import goingUp from "@/public/going-up-arrow.svg"
import Link from "next/link";
import mailLogo from "@/public/mail.svg"
import indieSign from "@/public/indie-sign-square.jpg"
import comicsPublishing from "@/public/allscherry-comics-publishing.jpg"
import { Metadata } from "next";
import anthCarousel from "@/public/anthCarousel4.jpg";
import studioComix from "@/public/print-carousel.jpg";


export const metadata: Metadata = {
    title: "AllsCherry | Publishing",
    description: "AllsCherry Publishing Page - AllsCherry is primarily a comic book brand! Want to publish yourself, but don't have a printer? Need some business cards? A poster? Brochures?! Don't worry, we know a guy ;)",
    keywords: ["AllsCherry", "Home", "AllsCherry Home", "AllsCherry Projects", "AllsCherry News", "AllsCherry Updates", "AllsCherry Blog", "AllsCherry Blog Posts", "AllsCherry Blog Updates", "AllsCherry Blog News", "AllsCherry Blog Projects", "AllsCherry Blog Posts Projects News Updates", "AllsCherry Blog Posts Projects News Updates Home"],
    twitter: {
        card: "summary",
        site: "@allscherry",
    },
    alternates: {
        canonical: "https://allscherry.com/publishing",
    },
    openGraph: {
        type: "website",
        url: "https://allscherry.com",
        title: "AllsCherry | Publishing",
        siteName: "AllsCherry",
        description: "AllsCherry Publishing Page - AllsCherry is primarily a comic book brand! Want to publish yourself, but don't have a printer? Need some business cards? A poster? Brochures?! Don't worry, we know a guy ;)",
        images: [
            {
                url: "https://allscherry.com/icon.svg",
                width: 1200,
                height: 630,
                alt: "AllsCherry Logo",
            },
        ],
    },
};

export default function Publushing() {
    return (
        <main>
            <section className="flex flex-col min-h-screen bg-base-100">
                <Header/>
                <PageTitle title={"AllsCherry is an Indie Publishing Company!"}/>
                <div className="flex flex-col items-center justify-center mt-6">
                    <h2 className="text-md w-10/12 text-center border border-base-200 rounded-3xl p-3">What Separates us from the rest?<br/><br/>Community, passion, and artistic freedom!</h2>
                </div>
                <section className="flex bg-base-200 flex-col items-center justify-center mt-6 mx-5 rounded-3xl">
                    <div className="rounded-3xl text-black bg-[#FFDBDB] p-3 px-5 m-3">
                        <h2>AllsCherry has 3 core values...</h2>
                    </div>
                    <div className="mt-2">
                        <div className="rounded-xl text-black bg-white p-3 px-5 m-3">
                            <h2>1. Tyranny is not Art</h2>
                        </div>
                        <div className=" rounded-xl text-black p-3 px-5 m-3 bg-[#FFDBDB]">
                            <h2>Have an idea? Let&apos;s make it happen! Your way</h2>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="rounded-xl text-black bg-white p-3 px-5 m-3">
                            <h2>2. A strong community builds strong projects</h2>
                        </div>
                        <div className="rounded-xl text-black p-3 px-5 m-3 bg-[#FFDBDB]">
                            <h2>AllsCherry works with many types of artists; building teams for projects or for collaborative works!</h2>
                        </div>
                    </div>             
                    <div className="mt-2">
                        <div className="rounded-xl text-black bg-white p-3 px-5 m-3">
                            <h2>3. Origiality is key</h2>
                        </div>
                        <div className="rounded-xl text-black p-3 px-5 m-3 bg-[#FFDBDB]">
                            <h2>Creating something new, and truly yours, is what makes for something truly special!</h2>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col justify-center items-center text-center mx-1 mt-14 gap-5">
                    <div className="flex flex-row items-center justify-center gap-3">
                        <div className="w-1/2 flex flex-col justify-center">
                            <Image src={comicsPublishing} alt="Comics Publishing" width={700} height={700} className="rounded-box"/>
                            <Link href="/forms/publication" className="bg-primary text-black p-2 px-1 mt-4 border-b-accent border-b-4 rounded-full block w-34 mx-1 text-center active:mt-5 active:border-0">Let&apos;s make a book!</Link>
                        </div>
                        <div className="flex justify-center w-1/2">
                            <h2 className="text-md text-center border border-base-200 rounded-3xl p-3">AllsCherry believes if someone tells you how to make your art, then it&apos;s not your art!<br/><br/>We make your ideas come to life how you want it. Our CEO and Chief Editor personally bring you from Step 0 to a book in hand with our Publication Service!</h2>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse items-center justify-center gap-3">
                        <div className="w-1/2 flex flex-col justify-center">
                            <Image src={anthCarousel} alt="Comics Publishing" width={700} height={700} className="rounded-box"/>
                            <Link href="/publishing/anthology" className="bg-primary text-black p-2 px-1 mt-4 border-b-accent border-b-4 rounded-full block w-34 mx-1 text-center active:mt-5 active:border-0">Be included here!</Link>
                        </div>
                        <div className="flex justify-center w-1/2">
                            <h2 className="text-md text-center border border-base-200 rounded-3xl p-3">AllsCherry continuously builds it&apos;s community to include all kinds of creative minds.<br/><br/>We pride ourselves in our collaborative Annual Anthology and Stubby Stories books to bring together beginner and veteran artists!</h2>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-3">
                        <div className="w-1/2 flex flex-col justify-center">
                            <Image src={indieSign} alt="Comics Publishing" width={700} height={700} className="rounded-box"/>
                            <Link href="/publishing/anthology" className="bg-primary text-black p-2 px-1 mt-4 border-b-accent border-b-4 rounded-full block w-34 mx-1 text-center active:mt-5 active:border-0">Let&apos;s hear it!</Link>
                        </div>
                        <div className="flex justify-center w-1/2">
                            <h2 className="text-md text-center border border-base-200 rounded-3xl p-3">Originality in art is a core aspect at AllsCherry, not only for the sake of the artists here, but for the audience too!<br/><br/>Everybody loves a new and captivating story, so let&apos;s help you plan yours out, we&apos;d love to hear it!</h2>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col justify-center items-center text-center mx-1 mt-14 gap-5">
                    <div className="flex flex-col items-center justify-center mx-1">
                        <h2 className="text-md w-10/12 text-center border border-base-200 rounded-3xl p-3">AllsCherry is a proud Ambassador of Canadian Printer and Comic Shop, StudioComix Press!</h2>
                        <Image src={studioComix} alt="StudioComix" className="rounded-3xl w-3/4 mt-6"/>
                    </div>
                    <div className="flex flex-col items-center justify-center mx-1 mt-6">
                        <h2 className="text-md w-10/12 text-center border border-base-200 rounded-3xl p-3">Don’t know where to start? Check out our application form, or simply email us! We’re happy to help!</h2>
                        <Link href="/info/contact" className="bg-primary text-black p-2 px-14 mt-6 border-b-accent border-b-4 rounded-full block w-34 text-center active:mt-5 active:border-0">Apply Here:)</Link>
                    </div>
                </section>
                <section className="flex flex-col items-center justify-center mx-1 mt-14 gap-5">
                    <Link href="/info/contact#contactForm" className="flex flex-row items-center justify-center gap-5 bg-white rounded-3xl px-5 py-1">
                        <Image src={mailLogo} alt="Mail Logo" width={100} height={100} className="w-10"/>
                        <h2 className="text-black">Email us here!</h2>
                    </Link>
                </section>
                <Footer/>
            </section>
        </main>
    );
}
