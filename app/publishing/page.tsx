import PageTitle from "@/app/components/PageTitle";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import goingUp from "@/public/going-up-arrow.svg"
import Link from "next/link";
import mailLogo from "@/public/mail.svg"
import indieSign from "@/public/indie-sign-square.jpg"
import comicsPublishing from "@/public/allscherry-comics-publishing.jpg"
import prints from "@/public/print-carousel.jpg"
import underConstruction from "@/public/underConstruction.svg"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AllsCherry | Publishing",
    description: "AllsCherry Publishing Page - AllsCherry is primarily a comic book brand!",
    keywords: ["AllsCherry", "Home", "AllsCherry Home", "AllsCherry Projects", "AllsCherry News", "AllsCherry Updates", "AllsCherry Blog", "AllsCherry Blog Posts", "AllsCherry Blog Updates", "AllsCherry Blog News", "AllsCherry Blog Projects", "AllsCherry Blog Posts Projects News Updates", "AllsCherry Blog Posts Projects News Updates Home"],
};
export default function Publishing() {
    return (
        <>
            <main className="flex min-h-screen flex-col bg-base-100 lg:hidden">
                <Header />
                <PageTitle title="AllsCherry is primarily a comic book brand!"/>
                <section className="flex flex-col justify-center items-center text-center mx-3 mt-14 gap-4">
                    <div className="flex flex-row items-center justify-center">
                        <div>
                            <Image src={comicsPublishing} alt="Comics Publishing" width={700} height={700} className="rounded-box"/>
                        </div>
                        <div className="flex justify-center">
                            <p className="text-md w-10/12 text-center border border-base-200 rounded-3xl p-3">AllsCherry has it&apos;s own label, used to collaborate with artists, distribute and sell it&apos;s books while staying independent and local!</p>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse items-center justify-center">
                        <div>
                            <Image src={indieSign} alt="Indie Sign" width={700} height={700} className="rounded-box"/>
                        </div>
                        <div className="flex justify-center">
                            <p className="text-md w-10/12 text-center border border-base-200 rounded-3xl p-3">We strive to keep the artist&apos;s work their own, leaving the creativity to them, and the heavy lifting for us!</p>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col items-center justify-center text-center m-10">
                    <h2 className="text-md w-10/12 text-center border border-base-200 rounded-3xl p-3">Want to publish yourself, but don&apos;t have a printer? Need some business cards? A poster? Brochures?!<br/><br/>Don&apos;t worry, we know a guy ;)</h2>
                    <Image className="mt-10 rounded-box" src={prints} alt="Printing" width={300} height={300}/>
                    <Image src={goingUp} alt="Going Up?" className="w-12 filter grayscale rotate-90 "></Image>
                </section>
                <section className="flex flex-col justify-center items-center text-center mr-14 ml-14">
                    <h2 className="text-md w-10/12 text-center border border-base-200 rounded-3xl p-3">We print with a local printer, StudioComix Press, located in Kitchener, Ontario!<br/><br/>The Process is simple!<br/><br/>Send us an email with these requirements in mind...</h2>
                </section>
                <section className="flex flex-col justify-center items-center mb-14 mt-14">
                    <div className="relative flex items-center justify-center mr-4 ml-4 text-black rounded-2xl">
                    <div className="absolute -inset-2 z-0 bg-base-300 rounded-2xl transform scale-105 mt-24"></div>
                        <div className="text-center text-xl relative z-10 bg-base-200 rounded-2xl py-5 px-10">
                            <ul>
                                <li className="list-disc text-left text-md">What is the item? (Business cards, graphic novel, poster, etc...)<br/><br/></li>
                                <li className="list-disc text-left text-md">How many pages is your item in spread format (double sided!)<br/><br/></li>
                                <li className="list-disc text-left text-md">Is it in colour or black and white?<br/><br/></li>
                                <li className="list-disc text-left text-md">What is the item? (Business cards, graphic novel, poster, etc...)<br/><br/></li>
                                <li className="list-disc text-left text-md">How many units do you need? (Ex. 100 units, 200 units, etc.)<br/><br/></li>
                                <li className="list-disc text-left text-md">What are the dimensions of your item? (Ex. 8.5” x 11”)<br/><br/></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col justify-center mt-14 items-center">
                    <div className="flex flex-col items-center justify-center mt-5">
                        <Link href="/info/contact#contactForm" className="gap-3 flex flex-row items-center justify-center text-xl">
                        <Image className="bg-white rounded-full p-1" src={mailLogo} alt="Email Logo" width="50"/>
                        Email us for a quote!
                        </Link>
                        <div className="h-3 my-5 w-full ">
                            <div className="bg-white h-full w-full rounded-3xl"></div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col items-center justify-center text-center mt-14">
                    <div className="flex justify-center">
                        <h2 className="text-lg w-3/4 text-center border border-base-200 rounded-3xl p-3">Don&apos;t know where to start? We can help you design something!<br/><br/>Or maybe you want to start in one of our Anthologies?</h2>
                    </div>
                    <div className="flex flex-row mt-14 mb-14 gap-10">
                        <div>
                            <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0" href="/publishing/anthology">
                                Join in!
                            </Link>
                        </div>
                        <div>
                            <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0" href="/publishing/design">
                                Design Help
                            </Link>
                        </div>
                    </div>
                </section>
                <Footer/>
            </main>
            <main className="hidden lg:flex flex-col items-center justify-center min-h-screen">
                <div className="flex flex-col items-center justify-center">
                    <Image src={underConstruction} alt="Under Construction" width={400} height={400}/>
                    <h1 className="text-2xl w-1/2 text-center">Oop, sorry! Desktop version is under construction, check back later!</h1>
                </div>
            </main>
        </>
    )
}