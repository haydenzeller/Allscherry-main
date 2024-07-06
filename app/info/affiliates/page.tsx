import PageTitle from "@/app/components/PageTitle";
import AffiliateList from "@/app/components/AffiliateList";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import underConstruction from "@/public/underConstruction.svg";
import { Metadata } from "next";

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
               </section>
                <section className="felx flex-col justify-center items-center mt-24 text-center">
                    <AffiliateList/>
                </section>
                <section className="flex flex-col justify-center mt-14 items-center">
                    <div className="bg-base-200 gap-5 rounded-3xl flex flex-col items-center justify-center mx-5 p-5 ">
                      <h2 className="p-2 bg-secondary text-black rounded-3xl"><strong>AllsCherry Affiliates / Artists!</strong></h2>
                      <h2 className="p-2 bg-secondary text-black rounded-xl text-center">AllsCherry works with many creatives! Below are those signed under the AllsCherry Label, or simply work with us in collaboration! Check out their work (So much talent!)</h2>
                    </div>
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