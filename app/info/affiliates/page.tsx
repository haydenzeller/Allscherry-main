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
                    <div className="flex flex-col items-center justify-center text-xs font-semibold mt-6">
                        <div className="flex felx-row items-center justify-center gap-2">
                            <div className="flex flex-col items-center justify-center w-1/2">
                                <Image src={ericHeadshot} alt="Under Construction" width={500} height={500} className=" object-cover w-48 h-48 rounded-box"/>
                                <h2 className="mt-1 bg-white rounded-3xl p-3 text-black">CEO / Founder - Eric Olcsvary</h2>
                            </div>
                            <div className="flex flex-col items-center justify-center w-1/2">
                                <Image src={haydenHeadshot} alt="Under Construction" width={400} height={400} className="object-cover w-48 h-48 rounded-box"/>
                                <h2 className="bg-white mt-1 rounded-3xl p-3 text-black">CTO / WebDev - Hayden Zeller</h2>
                            </div>
                        </div>
                        <div className="flex felx-row items-center justify-center mt-2">
                            <div className="flex flex-col items-center justify-center w-1/2">
                                <Image src={liamHeadshot} alt="Under Construction" width={400} height={400} className="object-cover w-48 h-48 rounded-box"/>
                                <h2 className="bg-white rounded-3xl mt-1 p-3 text-black">Exec Assistant - Liam Fletcher</h2>
                            </div>
                            <div className="flex flex-col items-center justify-center w-1/2">
                                <Image src={underConstruction} alt="Under Construction" width={400} height={400} className="object-cover w-48 h-48 rounded-box"/>
                                <h2 className="bg-white rounded-3xl p-3 mt-1 text-black">Editor in Chief - Luke Hymers</h2>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2 mt-2">
                            <Image src={studioComix} alt="Under Construction" width={400} height={400} className="object-cover w-48 h-48 rounded-box"/>
                            <h2 className="bg-white rounded-3xl p-3 text-black">Printer - StudioComix Press</h2>
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