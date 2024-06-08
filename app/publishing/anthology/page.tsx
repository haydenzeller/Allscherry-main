
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import mailLogo from "@/public/mail.svg"
import PageTitle from "@/app/components/PageTitle";
import Link from "next/link";
import Image from "next/image";
import AnthologyCarousel from "@/app/components/AnthologyCarousel";
import anth1 from "@/public/allscherry-anth1.png"
import anth2 from "@/public/anth-vol2-cover.jpg"
import underConstruction from "@/public/underConstruction.svg"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AllsCherry | Anthology",
    description: "AllsCherry Anthology Page - We make annual Anthologies!",
    keywords: ["AllsCherry", "Home", "AllsCherry Home", "AllsCherry Projects", "AllsCherry News", "AllsCherry Updates", "AllsCherry Blog", "AllsCherry Blog Posts", "AllsCherry Blog Updates", "AllsCherry Blog News", "AllsCherry Blog Projects", "AllsCherry Blog Posts Projects News Updates", "AllsCherry Blog Posts Projects News Updates Home"],
};

export default function Anthology() {
  return (
    <>
        <main id="main" className="flex min-h-screen flex-col bg-base-100 lg:hidden">
        {/* MOBILE */}
        <section className="">
            <Header />
            <PageTitle title={"We make annual Anthologies!"}/>
            <section className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center w-full mt-14">
                    <h2 className="text-lg w-1/2 text-center border border-base-200 rounded-3xl p-3">Are you a writer? or illustrator?<br/><br/>Well we have got a deal for you!</h2>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center mb-14 mt-14">
                <div className="relative flex items-center justify-center mr-4 ml-4 text-black rounded-2xl">
                    <div className="absolute -inset-2 z-0 bg-base-300 rounded-2xl transform scale-105 mt-24"></div>
                    <div className="text-center text-xl relative z-10 bg-base-200 rounded-2xl p-5">
                        <h1>The AllsCherry Anthology has one goal, make something awesome with local artists!<br/><br/>Every year we gather 6 to 10 artists and create a collaborative book, release it within the year, and throw a dinner party to celebrate!<br/><br/>Wanna join in? Fill out our form below so we can see what you&apos;ve got!</h1>
                    </div>
                </div>
                <div>
                    <button className="bg-primary mt-10 text-black p-1 border-b-accent border-b-4 rounded-2xl block w-56 text-center shadow active:translate-y-0.5 active:shadow-none active:border-b-0 active:mt-11">Anthology Application!</button>
                </div>
            </section>
            <section className="flex flex-row justify-center items-center gap-0">
                <div>
                    <Image src={anth1} alt="Anthology 1" className="rounded-box" width={225} height={250}/>
                </div>
                <div>
                    <Image src={anth2} alt="Anthology 2" className="rounded-box" width={225} height={225}/>
                </div>
            </section>
            <section className="flex flex-row items-center justify-center text-center mt-14">
                <div className="flex justify-center">
                    <h2 className="text-lg w-1/2 text-center border border-base-200 rounded-3xl p-3">Here&apos;s just some of what we&apos;ve accomplished with the local talent!</h2>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center w-full h-auto">
                <AnthologyCarousel/>
            </section>
            <section className="flex flex-col justify-center mt-14 items-center">
                    <div className="flex flex-col items-center justify-center mt-5">
                        <Link href="/info/contact" className="gap-3 flex flex-row items-center justify-center text-xl">
                        <Image className="bg-white rounded-full p-1" src={mailLogo} alt="Email Logo" width="50"/>
                        Questions? Email us!
                        </Link>
                        <div className="h-3 my-5 w-full ">
                            <div className="bg-white h-full w-full rounded-3xl"></div>
                        </div>
                    </div>
                </section>
            <Footer />
        </section>
        </main>
        <main className="hidden lg:flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center">
                <Image src={underConstruction} alt="Under Construction" width={400} height={400}/>
                <h1 className="text-2xl w-1/2 text-center">Oop, sorry! Desktop version is under construction, check back later!</h1>
            </div>
        </main>
    </>
  );
}
