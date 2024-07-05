import { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import dotmntgenesis from "@/public/dot-mnt-genesis.jpg";
import dotmodel from "@/public/dot-model.png";
import dotpage1 from "@/public/dot-page1.jpg";
import Link from "next/link";
import dot8 from "@/public/dot8.jpeg";
import dot2 from "@/public/dot2.jpeg";
import dot3 from "@/public/dot3.jpeg";
import dot4 from "@/public/dot4.jpeg";
import dot5 from "@/public/dot5.jpeg";
import dot6 from "@/public/dot6.jpeg";
import dot7 from "@/public/dot7.jpeg";

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
                    <div className="grid grid-cols-2 grid-rows-3 gap-3 mt-6">
                        <div className="flex flex-col items-center justify-center relative">
                            <Image src={dot2} alt="Dot the Robot Mount Genesis" className="rounded-3xl"/>
                        </div>
                        <div className="flex flex-col items-center justify-center relative">
                            <Image src={dot3} alt="Dot the Robot Mount Genesis" className="rounded-3xl"/>
                        </div>
                        <div className="flex flex-col items-center justify-center relative">
                            <Image src={dot4} alt="Dot the Robot Mount Genesis" className="rounded-3xl"/>
                        </div>
                        <div className="flex flex-col items-center justify-center relative">
                            <Image src={dot5} alt="Dot the Robot Mount Genesis" className="rounded-3xl"/>
                        </div>
                        <div className="flex flex-col items-center justify-center relative">
                            <Image src={dot6} alt="Dot the Robot Mount Genesis" className="rounded-3xl"/>
                        </div>
                        <div className="flex flex-col items-center justify-center relative">
                            <Image src={dot7} alt="Dot the Robot Mount Genesis" className="rounded-3xl"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center relative mt-6">
                        <Image src={dot8} alt="Dot the Robot Mount Genesis" className="rounded-3xl"/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">But of course, Eric&apos;s ideas did not stop there. Because now that we have seen the past of this “Grey Planet” Wendy and the gang traverse, what about the past&apos;s past??<br/><br/>Always wanting to dabble into music, since all of his comics stemmed from musical inspiration, the idea to make an album sprouted from this on-going project. Where did the world of Dot the Robot originate?</h2>
                        <Link href="/projects/prophets-of-grey" className="bg-primary text-black p-2 mt-4 border-b-accent border-b-4 rounded-full block w-34 text-center active:mt-5 active:border-0">Prophets of Grey</Link>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}
