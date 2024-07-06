import EventList from "@/app/components/EventList";
import Header from "@/app/components/Header";
import ericBooth from "@/public/ericBooth.png"
import Image from "next/image";
import PageTitle from "@/app/components/PageTitle";
import Footer from "@/app/components/Footer";
import underConstruction from "@/public/underConstruction.svg";
import { Metadata } from "next";
import Link from "next/link";
import mailLogo from "@/public/mail.svg";
export const metadata: Metadata = {
    title: "AllsCherry | Events",
    description: "AllsCherry Events Page - Check out our local events! - AllsCherry loves local events! Scroll down for a list of our events for 2024!",
    keywords: ["AllsCherry", "Home", "AllsCherry Home", "AllsCherry Projects", "AllsCherry News", "AllsCherry Updates", "AllsCherry Blog", "AllsCherry Blog Posts", "AllsCherry Blog Updates", "AllsCherry Blog News", "AllsCherry Blog Projects", "AllsCherry Blog Posts Projects News Updates", "AllsCherry Blog Posts Projects News Updates Home"],
    twitter: {
        card: "summary",
        site: "@allscherry",
    },
    alternates: {
        canonical: "https://allscherry.com/info/events",
    },
    openGraph: {
        type: "website",
        url: "https://allscherry.com",
        title: "AllsCherry | Events",
        description: "AllsCherry Events Page - Check out our local events! - AllsCherry loves local events! Scroll down for a list of our events for 2024!",
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

export default function Events() {
    return (
        <>
            <main className="flex min-h-screen flex-col bg-base-100 lg:hidden">
                <section className="">
                    <Header/>
                    <PageTitle title="AllsCherry loves local events!"/>
                    <div className="flex flex-col justify-center items-center mt-14 text-center">
                        <h1 className="text-lg w-3/4 text-center border border-base-200 rounded-full px-3 py-1 mb-5">Scroll down for a list<br/>of our events for 2024!</h1>
                        <Image className="w-96 rounded-box" src={ericBooth} alt="Erics Booth"/>
                    </div>
                    <section className="mt-14">
                        <EventList />
                    </section>
                    <section className="flex flex-col items-center justify-center mt-6">
                        <h2 className="text-lg w-3/4 text-center border border-base-200 rounded-full px-3 py-1 mt-5">Have a show you want to see us at? Email us your suggestions!</h2>
                        <Link href="/info/contact#contactForm" className="flex flex-row items-center mt-6 justify-center gap-5 bg-white rounded-3xl px-5 py-1">
                            <Image src={mailLogo} alt="Mail Logo" width={100} height={100} className="w-10"/>
                            <h2 className="text-black">Email us here!</h2>
                        </Link>
                    </section>
                </section>
                <Footer/>
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