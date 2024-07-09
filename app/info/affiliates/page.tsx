import PageTitle from "@/app/components/PageTitle";
import AffiliateList from "@/app/components/AffiliateList";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import underConstruction from "@/public/underConstruction.svg";
import { Metadata } from "next";
import Link from "next/link";
import mailLogo from "@/public/mail.svg";
import ericHeadshot from "@/public/ericHeadshot.jpg";
import haydenHeadshot from "@/public/genius.jpg";
import liamHeadshot from "@/public/liam.jpg";
import studioComix from "@/public/studioComix.jpg";
import lukeHeadshot from "@/public/luke.jpg";
export const metadata: Metadata = {
    title: "AllsCherry | Affiliates",
    description: "AllsCherry Affiliates Page - Who helps out around AllsCherry? - Take a look at what they have to offer, you might make a friend!",
    keywords: ["AllsCherry", "Home", "AllsCherry Home", "AllsCherry Projects", "AllsCherry News", "AllsCherry Updates", "AllsCherry Blog", "AllsCherry Blog Posts", "AllsCherry Blog Updates", "AllsCherry Blog News", "AllsCherry Blog Projects", "AllsCherry Blog Posts Projects News Updates", "AllsCherry Blog Posts Projects News Updates Home"],
    twitter: {
        card: "summary",
        site: "@allscherry",
    },
    alternates: {
        canonical: "https://allscherry.com/info/affiliates",
    },
    openGraph: {
        type: "website",
        url: "https://allscherry.com",
        title: "AllsCherry | Affiliates",
        siteName: "AllsCherry",
        description: "AllsCherry Affiliates Page - Who helps out around AllsCherry? - Take a look at what they have to offer, you might make a friend!",
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

export default function Affiliates() {
    return (
        <main>
            <section className="flex min-h-screen flex-col bg-base-100 lg:hidden">
                <Header />
                <PageTitle title="Who helps out around AllsCherry?"/>
                <section className="flex flex-col justify-center mt-14 items-center">
                    <div className="bg-base-200 gap-5 rounded-3xl flex flex-col items-center justify-center mx-5 p-5 ">
                      <h2 className="p-2 bg-secondary text-black rounded-3xl"><strong>The AllsCherry Team!</strong></h2>
                      <h2 className="p-2 bg-secondary text-black rounded-xl text-center">Without the people listed below, AllsCherry wouldn&apos;t exist today! Each have their own unique skills and art form.<br/><br/>Check them out! You might make a friend!</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-6">
                        <div className="flex felx-row items-center justify-center gap-2">
                            <div className="flex flex-col items-center justify-center w-1/2">
                                <Image src={ericHeadshot} alt="Eric Olcsvaru" width={500} height={500} className=" object-cover w-48 h-48 rounded-box"/>
                                <div className="flex text-lg flex-col items-center justify-center bg-white p-2 mt-1 text-black w-48 rounded-3xl">
                                    <h2 className="font-bold">Eric Olcsvary</h2>
                                    <h2>CEO / Founder</h2>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center w-1/2">
                                <Image src={haydenHeadshot} alt="Hayden Zeller" width={400} height={400} className="object-cover w-48 h-48 rounded-box"/>
                                <div className="flex text-lg flex-col items-center justify-center bg-white p-2 mt-1 text-black w-48 rounded-3xl">
                                    <h2 className="font-bold">Hayden Zeller</h2>
                                    <h2>CTO / Developer</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex felx-row items-center justify-center mt-2 gap-2">
                            <div className="flex flex-col items-center justify-center w-1/2">
                                <Image src={liamHeadshot} alt="Liam Fletcher" width={400} height={400} className="object-cover w-48 h-48 rounded-box"/>
                                <div className="flex text-lg flex-col items-center justify-center bg-white p-2 mt-1 text-black w-48 rounded-3xl">
                                    <h2 className="font-bold">Liam Fletcher</h2>
                                    <h2>Exec Assistant</h2>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center w-1/2">
                                <Image src={lukeHeadshot} alt="Luke Hymers" width={400} height={400} className="object-cover w-48 h-48 rounded-box"/>
                                <div className="flex text-lg flex-col items-center justify-center bg-white p-2 mt-1 text-black w-48 rounded-3xl">
                                    <h2 className="font-bold">Luke Hymers</h2>
                                    <h2>Editor in Chief</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2 mt-2">
                            <Image src={studioComix} alt="Studio Comix" width={400} height={400} className="object-cover w-48 h-48 rounded-box"/>
                            <div className="bg-white flex flex-col items-center justify-center rounded-3xl p-3 mt-1 text-black w-48">
                                <h2 className="font-bold">StudioComix Press</h2>
                                <h2>Printer</h2>
                            </div>
                        </div>
                    </div>
               </section>
                <section className="flex flex-col justify-center mt-14 items-center">
                    <div className="bg-base-200 gap-5 rounded-3xl flex flex-col items-center justify-center mx-5 p-5 ">
                      <h2 className="p-2 bg-secondary text-black rounded-3xl"><strong>AllsCherry Affiliates / Stores</strong></h2>
                      <h2 className="p-2 bg-secondary text-black rounded-xl text-center">AllsCherry works with many creatives! Below are those signed under the AllsCherry Label, or simply work with us in collaboration! Check out their work (So much talent!)</h2>
                    </div>
                </section>
                <section className="felx flex-col justify-center items-center mt-24 text-center">
                    <AffiliateList/>
                </section>
                <section className="flex flex-col items-center justify-center mx-1 mt-14 gap-5">
                    <Link href="/info/contact#contactForm" className="flex flex-row items-center justify-center gap-5 bg-white rounded-3xl px-5 py-1">
                        <Image src={mailLogo} alt="Mail Logo" width={100} height={100} className="w-10"/>
                        <h2 className="text-black">Email us here!</h2>
                    </Link>
                </section>
                <Footer/>
            </section>
            <section className="hidden lg:flex flex-col items-center justify-center min-h-screen">
                <div className="flex flex-col items-center justify-center">
                    <Image src={underConstruction} alt="Under Construction" width={400} height={400}/>
                    <h1 className="text-2xl w-1/2 text-center">Oop, sorry! Desktop version is under construction, check back later!</h1>
                </div>
            </section>

        </main>
    )
}