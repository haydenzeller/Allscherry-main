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
import wendy0zine from "@/public/wendy0-zine.jpg";
import gribble from "@/public/gribble.png";
import raze from "@/public/raze.png";
import mountGenesis from "@/public/mount-genesis.jpg";
import starlaAndDoom from "@/public/starla-and-doom.png";
import wendyEyes from "@/public/wendy-eyes.png";
import cookieShirt from "@/public/cookie-shirt.jpg";
import finishedShirt from "@/public/finished-shirt.jpg";
import gribbleConcept from "@/public/gribble-concept.jpg";
import razeConcept from "@/public/raze-concept.jpg";
import shadowUmbraConcept from "@/public/shadow-umbra-concept.jpg";
import wendy2024 from "@/public/wendy2024.png";
import wendyPortrait2018 from "@/public/wendy-2018.jpg";
import wendyPortrait2019 from "@/public/wendy-2019.jpg";
import wendyPortrait2021 from "@/public/wendy-2021.jpg";
import belleBio from "@/public/belleBio.jpg";
import spriteBio from "@/public/spriteBio.jpg";
import starlaBio from "@/public/starlaBio.jpg";
import wendyBio from "@/public/wendyBio.jpg";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'AllsCherry | Wendy and the Sprite',
  description: 'Wendy and the Sprite is the adventure of a Snow Nymph and an Ice Sprite, traversing an old, frozen planet. Along their adventure, they discover a phenomenon called, “The Fading”, making the planet and it\'s inhabitants lose their colour and memory.',
  keywords: ['AllsCherry', 'Home', 'AllsCherry Home', 'AllsCherry Projects', 'AllsCherry News', 'AllsCherry Updates', 'AllsCherry Blog', 'AllsCherry Blog Posts', 'AllsCherry Blog Updates', 'AllsCherry Blog News', 'AllsCherry Blog Projects', 'AllsCherry Blog Posts Projects News Updates', 'AllsCherry Blog Posts Projects News Updates Home'],
    twitter: {
        card: 'summary',
        site: '@allscherry',
    },
    openGraph: {
        type: 'website',
        url: 'https://allscherry.com',
        title: 'AllsCherry | Wendy and the Sprite',
        siteName: 'AllsCherry',
        description: 'Wendy and the Sprite is the adventure of a Snow Nymph and an Ice Sprite, traversing an old, frozen planet. Along their adventure, they discover a phenomenon called, “The Fading”, making the planet and it\'s inhabitants lose their colour and memory.',
        images: [
            {
                url: 'https://allscherry.com/icon.svg',
                width: 1200,
                height: 630,
                alt: 'AllsCherry Logo',
            },
        ],
    },
}
 

export default function WendyAndTheSprite() {
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
                        <p className="opacity-50">Original idea for Wendy and the Sprite</p>
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
                <section className="flex flex-col items-center justify-center text-center mt-16">
                    <h2 className="border border-base-200 rounded-3xl p-3 w-3/4">After switching to a comic book format, Chapter 0 was created as a way to have context to what would have been an animated story</h2>
                    <Image src={wendy0zine} alt="Wendy and the Sprite Chapter 0" width={300} height={300} className="rounded-box mt-6 w-auto h-auto"/>
                    <h2 className="border border-base-200 rounded-3xl p-3 w-3/4 mt-6">Eric works mostly with coincidence, candidness and spontaneity. As the story and lore progresses, the characters and history begin to speak for themselves!<br/><br/>This makes for unexpected characters and twists even for the creator!</h2>
                </section>
                <section className="flex flex-col items-center justify-center mt-16">
                    <div className="flex flex-row items-start justify-center gap-3 text-center text-sm">
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <Image src={raze} alt="Raze" width={400} height={400} className="rounded-box h-auto w-3/4"/>
                            <p className="opacity-50">Raze Cub, Wendy Chapter 2</p>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <Image src={gribble} alt="Gribble" width={400} height={400} className="rounded-box h-auto w-3/4"/>
                            <p className="opacity-50">Gribble and their Grub of Gribblets, Wendy Chapter 2</p>

                        </div>
                    </div>
                    <h2 className="text-center w-3/4 border border-base-200 rounded-3xl p-3 mt-6">Naturally, the story has grown into something much more than a Snow Person and a Ball of Ice.<br/><br/>Exploring narratives of Witchcraft, Robotic Animals, Spatial Phenomenons, native’s at war with stone people, The Sun splitting in half, as well as underwater adventures, Wendy and the Sprite was only the beginning of a much bigger project</h2>
                </section>
                <section className="flex flex-col items-center justify-center mt-16">
                    <Image src={mountGenesis} alt="Mount Genesis" width={400} height={400} className="rounded-box h-auto w-auto" />
                    <p className="opacity-50 text-center">Mount Genesis, Era of Fading</p>
                    <Image src={starlaAndDoom} alt="Starla and Doom" width={200} height={200} className="rounded-box h-auto w-auto mt-6"/>
                    <p className="opacity-50 w-2/4 text-center">Starla the Cosmic Witch and the Doom Sprites</p>
                    <h2 className="border border-base-200 rounded-3xl p-3 w-3/4 mt-6 text-center">By this point, 3 comics were released, with Wendy having gone through 4 character concepts before finalizing their look</h2>
                </section>
                <section className="flex flex-col items-center justify-center">
                    <div className="grid grid-cols-2 grid-rows-2 gap-5 p-2 mt-6">
                        <Image src={wendyPortrait2018} alt="Wendy Portrait 2018" width={200} height={200} className="rounded-box h-auto w-auto"/>
                        <Image src={wendyPortrait2019} alt="Wendy Portrait 2019" width={200} height={200} className="rounded-box h-auto w-auto"/>
                        <Image src={wendyPortrait2021} alt="Wendy Portrait 2021" width={200} height={200} className="rounded-box h-auto w-auto"/>
                        <Image src={wendyPortrait2021} alt="Wendy Portrait 2021" width={200} height={200} className="rounded-box h-auto w-auto"/>
                    </div>
                    <h2 className="border border-base-200 rounded-3xl p-3 w-3/4 mt-6 text-center">Wendy and the Sprite has 3 graphic novels so far, and is planned to continue, however, to build up the story, Eric has started two other series to go alongside it.<br/><br/>The story doesn&apos;t stop at this series, all fo Eric&apos;s work interconnect, explore and enjoy!</h2>
                    <div className="flex flex-row gap-3 mt-6">
                        <Link className="bg-primary mt-3 text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-4 active:border-0" href="">
                            Overflow
                        </Link>
                        <Link className="bg-primary mt-3 text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-4 active:border-0" href="">
                            Dot the Robot
                        </Link>
                    </div>
                </section>
                <section className="flex flex-col items-center justify-center mt-16">
                    <h2 className="border border-base-200 rounded-3xl p-3 w-3/4 mt-6 text-center">Wendy and Sprite quickly became the mascots of Eric&apos;s illustrative practice, being on all branding material, every sketchbook, and every story he came up with</h2>
                    <Image src={wendyEyes} alt="Wendy Eyes" width={150} height={150} className="rounded-box h-auto w-auto mt-6"/>
                    <div className="flex flex-row items-center justify-center gap-5 mt-6">
                        <div className="flex items-center">
                            <Image src={cookieShirt} alt="Cookie Shirt" width={200} height={200} className="rounded-box object-cover aspect-square"/>
                        </div>
                        <div className="flex items-center">
                            <Image src={finishedShirt} alt="Finished Shirt" width={200} height={200} className="rounded-box object-cover aspect-square"/>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center mt-6 gap-5">
                        <Image src={razeConcept} alt="Raze Concept" width={175} height={175} className="rounded-box h-auto w-auto"/>
                        <Image src={gribbleConcept} alt="Gribble Concept" width={175} height={175} className="rounded-box h-auto w-auto"/>
                    </div>
                    <div className="flex flex-row items-center justify-center mt-6">
                        <Image src={shadowUmbraConcept} alt="Shadow Umbra Concept" width={177} height={175} className="rounded-box h-auto w-auto"/>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-1 mt-6 mx-1">
                        <Image src={wendyBio} alt="Wendy Bio" width={200} height={200} className="rounded-box h-auto w-auto"/>
                        <Image src={spriteBio} alt="Sprite Bio" width={200} height={200} className="rounded-box h-auto w-auto"/>
                        <Image src={starlaBio} alt="Starla Bio" width={200} height={200} className="rounded-box h-auto w-auto"/>
                        <Image src={belleBio} alt="Belle Bio" width={200} height={200} className="rounded-box h-auto w-auto"/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image src={wendy2024} alt="Wendy 2024" width={200} height={200} className="rounded-box h-auto w-auto mt-6"/>
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