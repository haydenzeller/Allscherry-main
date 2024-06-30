import { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import dotmntgenesis from "@/public/dot-mnt-genesis.jpg";
import dotmodel from "@/public/dot-model.png";
import dotpage1 from "@/public/dot-page1.jpg";
import Link from "next/link";

export const metadata: Metadata = {
    title: "AllsCherry | Dot the Robot",
    description: "AllsCherry Dot the Robot Page - Dot the Robot is a book of discovery, mystery, colourful underwater lands, and a complicated series of historical events.",
    keywords: ["AllsCherry", "Home", "AllsCherry Home", "AllsCherry Projects", "AllsCherry News", "AllsCherry Updates", "AllsCherry Blog", "AllsCherry Blog Posts", "AllsCherry Blog Updates", "AllsCherry Blog News", "AllsCherry Blog Projects", "AllsCherry Blog Posts Projects News Updates", "AllsCherry Blog Posts Projects News Updates Home"],
    twitter: {
        card: "summary",
        site: "@allscherry",
    },
    alternates: {
        canonical: "https://allscherry.com/projects/dot-the-robot",
    },
    openGraph: {
        type: "website",
        url: "https://allscherry.com",
        title: "AllsCherry | Dot the Robot",
        siteName: "AllsCherry",
        description: "AllsCherry Dot the Robot Page - Dot the Robot is a book of discovery, mystery, colourful underwater lands, and a complicated series of historical events.",
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

export default function DotTheRobot() {
    return (
        <>
            <main className="flex min-h-screen flex-col bg-base-100 lg:hidden">
                <Header />
                <section className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center relative mx-5 my-12">
                        <Image src={dotmntgenesis} alt="Dot the Robot Mount Genesis" className="rounded-3xl"/>                        
                    </div>
                    <div className="flex flex-col items-center justify-center relative">
                        <h1 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">Dot the Robot, the “beginning” of it all. Originally inspir4ed during his trip to Victoria, BC in 2023, Eric was experimenting with many new ideas as well as a whole new lifestyle.<br/><br/>In his personal life, a lot had changed and for the better. This not only changed a a lifestyle, but the art style too!</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center relative mx-5 my-12">
                        <Image src={dotpage1} alt="Dot the Robot Page 1" className="rounded-3xl"/>
                    </div>
                    <div className="flex flex-col items-center justify-center relative">
                        <h1 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">Dot the Robot, set very very far before Wendy and the Sprite, tells the story of a dreary and old planet, one that is under attack. The residents of the planet, “The Grey” are up against a spatial Phenomenon that seems to be at the base of the “Northbound Mountain”. Too dangerous to go themselves, they send a newly developed Robot to fix the problem, their name is Dot.</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center relative mx-5 my-12">
                        <Image src={dotmodel} alt="Dot the Robot Model" className="rounded-3xl w-1/2"/>
                    </div>
                    <div className="flex flex-col items-center justify-center relative">
                        <h1 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">Dot the Robot is a story Eric is using as a way to express the character and their experiences as opposed to the plot/one off adventure driven Overflow and Wendy. However lore rich and detailed Dot will be, the characters and their experience are the true story.<br/><br/>Planned to be a three part series, it&apos;s definitely the biggest and most detailed project Eric has done, and it&apos;ll take some time so be patient!.</h1>
                    </div>
                </section>
                <section className="flex flex-col items-center justify-center">
                    // 2x3 grid of images use coming soon
                    <div className="grid grid-cols-2 grid-rows-3 gap-1 mt-6">
                        <div className="flex flex-col items-center justify-center relative">
                            <Image src={dotmntgenesis} alt="Dot the Robot Mount Genesis" className="rounded-3xl"/>
                        </div>
                        <div className="flex flex-col items-center justify-center relative">
                            <Image src={dotmntgenesis} alt="Dot the Robot Mount Genesis" className="rounded-3xl"/>
                        </div>
                        <div className="flex flex-col items-center justify-center relative">
                            <Image src={dotmntgenesis} alt="Dot the Robot Mount Genesis" className="rounded-3xl"/>
                        </div>
                        <div className="flex flex-col items-center justify-center relative">
                            <Image src={dotmntgenesis} alt="Dot the Robot Mount Genesis" className="rounded-3xl"/>
                        </div>
                        <div className="flex flex-col items-center justify-center relative">
                            <Image src={dotmntgenesis} alt="Dot the Robot Mount Genesis" className="rounded-3xl"/>
                        </div>
                        <div className="flex flex-col items-center justify-center relative">
                            <Image src={dotmntgenesis} alt="Dot the Robot Mount Genesis" className="rounded-3xl"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center relative">
                        <Image src={dotmntgenesis} alt="Dot the Robot Mount Genesis" className="rounded-3xl"/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">But of course, Eric&apos;s ideas did not stop there. Because now that we have seen the past of this “Grey Planet” Wendy and the gang traverse, what about the past&apos;s past??<br/><br/>Always wanting to dabble into music, since all of his comics stemmed from musical inspiration, the idea to make an album sprouted from this on-going project. Where did the world of Dot the Robot originate?</h2>
                        <Link href="/projects/wendy-and-the-sprite" className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0">Wendy and the Sprite</Link>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}