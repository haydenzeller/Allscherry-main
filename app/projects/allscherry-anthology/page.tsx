import  Header from "@/app/components/Header";
import  Footer from "@/app/components/Footer";
import  Image from "next/image";
import  Link from "next/link";
import anthDinner from "@/public/anthDinner4.jpg";
import anthCarousel from "@/public/anthCarousel4.jpg";
import vol1Cover from "@/public/allscherryAnth1.png";
import vol2Cover from "@/public/anthVol2Cover.jpg";
import { Metadata } from "next";
export const metadata: Metadata = { 
    title: "AllsCherry | Anthology",
    description: "AllsCherry Anthology Page - The AllsCherry Anthology started with the simple concept to make a book with our local artists and friends. This simple idea has broadened into one of AllsCherry’s strongest ways of bringing people together.",
    keywords: ["AllsCherry", "Home", "AllsCherry Home", "AllsCherry Projects", "AllsCherry News", "AllsCherry Updates", "AllsCherry Blog", "AllsCherry Blog Posts", "AllsCherry Blog Updates", "AllsCherry Blog News", "AllsCherry Blog Projects", "AllsCherry Blog Posts Projects News Updates", "AllsCherry Blog Posts Projects News Updates Home"],
    twitter: {
        card: "summary",
        site: "@allscherry",
    },
    alternates: {
        canonical: "https://allscherry.com/publishing/anthology",
    },
    openGraph: {
        type: "website",
        url: "https://allscherry.com",
        title: "AllsCherry | Anthology",
        siteName: "AllsCherry",
        description: "AllsCherry Anthology Page - The AllsCherry Anthology started with the simple concept to make a book with our local artists and friends. This simple idea has broadened into one of AllsCherry’s strongest ways of bringing people together.",
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

export default function AllscherryAnthology() {
    return (
        <main className="flex flex-col min-h-screen bg-base-100 lg:hidden">
            <Header/>
            <section className="flex flex-col items-center justify-center">
                <h1 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">The AllsCherry Anthology started with the simple concept to make a book with our local artists and friends. This simple idea has broadened into one of AllsCherry’s strongest ways of bringing people together.</h1>
                <div className="flex flex-col items-center justify-center m-6 p-1">
                    <Image src={anthDinner} alt="Anthology Dinner" className="rounded-3xl"/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">In 2023, and in under 4 months, we gathered 8 amazing artists to contribute their own comics into an Anthology, afterward we had a dinner party to celebrate!</h2>
                <div className="flex flex-col items-center justify-center m-6 p-1">
                    <Image src={anthCarousel} alt="Anthology Carousel Image" className="rounded-3xl"/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">This book was only the beginning, as this is now an annual project! Alongside many more to come. Here’s a list of what we’ve done so far!</h2>
                <div className="flex flex-row items-center justify-center gap-3 m-6 text-center">
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <Image src={vol1Cover} alt="Anthology Vol 1" className="rounded-3xl object-cover"/>
                        <p>AllsCherry Anthology Vol.1</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <Image src={vol2Cover} alt="Anthology Vol 2" className="rounded-3xl object-cover"/>
                        <p>AllsCherry Anthology Vol.2</p>
                    </div>
                </div>
                <h2 className="border border-base-200 rounded-full p-3 w-5/6 mt-6 text-center">If you’d like to get involved, or see more info, click here below!</h2>
                <Link href="/publishing/anthology" className="bg-primary text-black p-2 px-14 mt-4 border-b-accent border-b-4 rounded-full block w-34 text-center active:mt-5 active:border-0">Collab</Link>
                 
            </section>
            <Footer/>
        </main>
    );
}
