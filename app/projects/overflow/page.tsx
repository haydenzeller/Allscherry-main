import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import underConstruction from "@/public/underConstruction.svg";
import overflowLogo from "@/public/overflow-logo.png";
import ofPageEx from "@/public/of-page-ex.png";
import overflowCover from "@/public/overflow-cover.png";
import Link from "next/link";
import ofCoverBlank from "@/public/of-cover-blank.png";
import ofGrid1 from "@/public/of-grid-1.jpeg";
import ofGrid2 from "@/public/of-grid-2.jpeg";
import ofGrid3 from "@/public/of-grid-3.jpeg";
import ofGrid4 from "@/public/of-grid-4.jpeg";
import ofGroup from "@/public/of-group.jpeg";
import ofPromo from "@/public/of-promo.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AllsCherry | Overflow",
    description: "AllsCherry Overflow Page - Overflow is a book of discovery, mystery, colourful underwater lands, and a complicated series of historical events.",
    keywords: ["AllsCherry", "Home", "AllsCherry Home", "AllsCherry Projects", "AllsCherry News", "AllsCherry Updates", "AllsCherry Blog", "AllsCherry Blog Posts", "AllsCherry Blog Updates", "AllsCherry Blog News", "AllsCherry Blog Projects", "AllsCherry Blog Posts Projects News Updates", "AllsCherry Blog Posts Projects News Updates Home"],
    twitter: {
        card: "summary",
        site: "@allscherry",
    },
    alternates: {
        canonical: "https://allscherry.com/projects/overflow",
    },
    openGraph: {
        type: "website",
        url: "https://allscherry.com",
        title: "AllsCherry | Overflow",
        siteName: "AllsCherry",
        description: "AllsCherry Overflow Page - Overflow is a book of discovery, mystery, colourful underwater lands, and a complicated series of historical events.",
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

export default function Overflow() {
    return (
        <>
            <main className="flex min-h-screen flex-col bg-base-100 lg:hidden">
                <Header />
                <section className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center relative">
                        <Image src={overflowLogo} alt="Overflow Logo" width={500} height={500} className="w-screen h-auto pt-5 pb-5"/>
                        <Image src={ofPageEx} alt="Overflow Page Example" width={500} height={500} className="w-auto h-auto rounded-box"/>
                        <h1 className="border border-base-200 rounded-3xl p-3 w-3/4 mt-6 text-center">Overflow is a book of discovery, mystery, colourful underwater lands, and a complicated series of historical events.<br/><br/>Four creatures find a whole world beneath their feet, one of true beauty. So many colours, so many creatures, and so much unexplored territory! What awaits these four brave souls deep beneath?</h1>
                    </div>
                    <div className="flex flex-row items-center justify-center mt-6 mx-3 gap-5">
                        <Image src={overflowCover} alt="Overflow Cover" width={500} height={500} className="w-32 h-32 rounded-box"/>
                        <div className="flex flex-col items-center justify-center bg-base-200 rounded-box h-32 w-32">
                            <h2>Coming Soon!</h2>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-base-200 rounded-box h-32 w-32">
                            <h2>Coming Soon!</h2>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-6">
                        <h2 className="text-xl">Check out the series here!</h2>    
                        <Link className="bg-primary mt-3 text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-4 active:border-0" href="">Overflow!</Link>
                    </div>
                </section>
                <section className="flex flex-col items-center justify-center mt-6">
                    <div className="flex flex-col items-center justify-center relative mx-3">
                        <Image src={ofCoverBlank} alt="Overflow Cover Blank" width={500} height={500} className="w-auto h-auto rounded-box"/>
                        <h2 className="border border-base-200 rounded-3xl p-3 w-10/12 mt-6 text-center">After Chapters 0-2 of Wendy and the Sprite, Eric had a surge of inspiration for a whole new book. It took less than 4 months to make said book, the ideas were “Overflowing” and it basically wrote itself!<br/><br/>An incredibly long time after Wendy and the Sprite, a world above water is enveloped in a black and white landscape, one of a dull and lifeless experience. These four creatures seek adventure, and they sure as heck find some!</h2>
                    </div>
                    {/* 4x4 */}
                    <div className="grid grid-cols-2 grid-rows-2 items-center justify-center mt-6 gap-5 mx-4">
                        <div className="flex flex-col items-center justify-center bg-base-200 rounded-box">
                            <Image src={ofGrid1} alt="Overflow Grid 1" width={500} height={500} className="rounded-box"/>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-base-200 rounded-box">
                            <Image src={ofGrid2} alt="Overflow Grid 2" width={500} height={500} className="rounded-box"/>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-base-200 rounded-box">
                            <Image src={ofGrid3} alt="Overflow Grid 3" width={500} height={500} className="rounded-box"/>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-base-200 rounded-box">
                            <Image src={ofGrid4} alt="Overflow Grid 4" width={500} height={500} className="rounded-box"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-6 mx-4">
                        <Image src={ofGroup} alt="Overflow Group" width={500} height={500} className="w-auto h-auto rounded-box"/>
                        <p className="border border-base-200 rounded-3xl p-3 w-10/12 mt-6 text-center">Since Wendy and most of the creatures in the comic series don&apos;t speak, Overflow gave Eric an opportunity to write with more dialogue, and see how this can work in his comic formats!<br/><br/>This new landscape, creatures, and plot line also gave a lot of opportunity for lore building. Since the book is set so far in the future, a lot has changed. What do the events of Wendy and the Sprite have to do with this plot I wonder?</p>
                    </div>
                    {/* large div for image placeholder */}
                    <div className="flex flex-col items-center justify-center mt-6 mx-5">
                        <Image src={ofPromo} alt="Overflow Promo" width={500} height={500} className="rounded-box"/>
                    </div>
                    <h2 className="border border-base-200 rounded-3xl p-3 w-10/12 mt-6 text-center">Overflow, now opening many avenues for lore and character building, gave Eric another new idea for a book, Dot the Robot. We know the present (Wendy), we know the future (Overflow), but what about the planet&apos;s past?</h2>
                    <Link className="bg-primary mt-3 text-black p-1 border-b-accent border-b-4 rounded-2xl block w-32 text-center active:mt-4 active:border-0" href="/projects/dot-the-robot">Dot the Robot!</Link>
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
