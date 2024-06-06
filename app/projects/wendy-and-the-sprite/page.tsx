import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import underConstruction from "@/public/underConstruction.svg";

import watsBanner from "@/public/wats-banner.jpg";
import wats0 from "@/public/wats-chp0.png";
import wats1 from "@/public/wats-chp1.png";
import wats2 from "@/public/wats-chp2.png";
import watsBackstorySketch from "@/public/wats-backstory-sketch.svg";

import Link from "next/link";
import BackstoryVideo from "@/app/components/BackstoryVideo";
import animationGif from "@/public/animation-intro.gif";
import watsGrid1 from "@/public/wats-grid-1.jpeg";
import watsGrid2 from "@/public/wats-grid-2.jpeg";
import watsGrid3 from "@/public/wats-grid-3.jpeg";

export default function Publishing() {
    return (
        <>
            <main className="flex min-h-screen flex-col bg-base-100 lg:hidden">
                <Header />
                <section>
                    <div className="flex flex-col items-center justify-center mt-14">
                        <Image priority src={watsBanner} alt="Wendy and the Sprite Banner" width={250} height={1000} className="rounded-box h-auto w-auto"/>
                        <h2 className="w-3/4 text-md text-center mt-6 border border-base-200 rounded-3xl p-3">
                            Wendy and the Sprite is the adventure of a Snow Nymph and an Ice Sprite, traversing an old, frozen planet. Along their adventure, they discover a phenomenon called, “The Fading”, making the planet and it&apos;s inhabitants lose their colour and memory.
                        </h2>
                        <div className="flex flex-row gap-3 mt-6">
                            <Image priority src={wats0} alt="Wendy and the Sprite Chapter 0" width={125} height={300} className="rounded-box h-auto w-auto "/>
                            <Image priority src={wats1} alt="Wendy and the Sprite Chapter 1" width={125} height={300} className="rounded-box h-auto w-auto "/>
                            <Image priority src={wats2} alt="Wendy and the Sprite Chapter 2" width={125} height={300} className="rounded-box h-auto w-auto "/>
                        </div>
                        <h2 className="mt-6 text-xl border border-base-200 rounded-3xl p-3">Check out the series here!</h2>
                        <Link className="mt-3 bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-4 active:border-0" href="">
                            Wendy Series!
                        </Link>
                    </div>
                </section>
                <section>
                    <div className="flex flex-row justify-center items-center gap-3 text-center mx-3 mt-14">
                        <Image src={watsBackstorySketch} alt="Wendy and the Sprite Backstory Sketch" width={150} height={150} className="rounded-box"/>
                        <h2 className="border border-base-200 rounded-3xl p-3">The Wendy and the Sprite series started as a post-secondary animation project. With the characters in mind, Eric made an animation that would ultimately become Chapter 1: Awakening</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center m-6">
                        <BackstoryVideo/>
                    </div>
                </section>
                <section className="flex justify-center items-center mx-4">
                    <div className="grid grid-cols-2 grid-rows-2 gap-5 overflow-hidden">
                        <Image unoptimized src={animationGif} alt="Wendy and the Sprite Animation" width={200} height={200} className="w-48 h-48 rounded-box object-cover"/>
                        <Image src={watsGrid1} alt="Wendy and the Sprite Grid 1" width={200} height={200} className="w-48 h-48 rounded-box object-cover"/>
                        <Image src={watsGrid2} alt="Wendy and the Sprite Grid 2" width={200} height={200} className="w-48 h-48 rounded-box object-cover"/>
                        <Image src={watsGrid3} alt="Wendy and the Sprite Grid 3" width={200} height={200} className="w-48 h-48 rounded-box object-cover"/>
                    </div>
                </section>
                <Footer />
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