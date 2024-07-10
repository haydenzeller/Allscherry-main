import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import PageTitle from "@/app/components/PageTitle";
import Image from "next/image";
import Link from "next/link";
import anthVol1 from "@/public/allscherryAnth1.png";
import anthVol2 from "@/public/anthVol2Cover.jpg";
import mailLogo from "@/public/mail.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AllsCherry | Collaboratives",
    description: "AllsCherry Collaboratives Page - Group projects have never been more fun!",
    keywords: ["AllsCherry", "Home", "AllsCherry Home", "AllsCherry Projects", "AllsCherry News", "AllsCherry Updates", "AllsCherry Blog", "AllsCherry Blog Posts", "AllsCherry Blog Updates", "AllsCherry Blog News", "AllsCherry Blog Projects", "AllsCherry Blog Posts Projects News Updates", "AllsCherry Blog Posts Projects News Updates Home"],
    twitter: {
        card: "summary",
        site: "@allscherry",
    },
    alternates: {
        canonical: "https://allscherry.com/collaboratives",
    },
    openGraph: {
        type: "website",
        url: "https://allscherry.com",
        title: "AllsCherry | Collaboratives",
        siteName: "AllsCherry",
        description: "AllsCherry Collaboratives Page - Group projects have never been more fun!",
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

export default function Collaboratives() {
    return (
        <main className="flex flex-col min-h-screen bg-base-100">
            <Header />
            {/* Mobile */}
            <section className="flex flex-col items-center justify-center">
                <PageTitle title={"Group projects have never been more fun!"} />
                <h2 className="text-md w-3/4 text-center border border-base-200 text-lg rounded-3xl mt-12 p-3">We welcome new and experienced artists to our two collaborative projects!<br/><br/>The AllsCherry Anthology and Stubby Stories!</h2>
                <div className="flex flex-col text-black items-center justify-center mt-6 rounded-3xl bg-base-200 w-11/12 p-5">
                    <h2 className="bg-secondary rounded-3xl text-lg font-bold py-2 px-8">The Annual Anthology</h2>
                    <p className="text-center text-sm opacity-40 mt-1">Runs from May - September</p>
                    <h2 className="bg-white rounded-xl font-bold text-md mt-3 py-2 px-8">6 - 10 Comic Book Creators!</h2>
                    <p className="bg-secondary rounded-3xl py-2 px-3 mt-2 ">We gather artists every year to create a book filled with original stories they want to share with the world. It&apos;s a great way to get into the comic industry and make connections!</p>
                    <h2 className="bg-white rounded-xl font-bold text-md mt-3 py-2 px-3">Work together, or Create Your Own Story!</h2>
                    <p className="bg-secondary rounded-3xl py-2 px-3 mt-2">We accept your own stories, such as 2024&apos;s Creative Block by Kylah Heykoop, or Team Projects! In 2024, we had a story written by our founder, which was then illustrated by 4 other artists, all with their own unique style!We have a team of writers and artists that can help you create your story, or you can bring your own team!</p>
                </div>
                <div className="flex flex-col items-center justify-center mt-12">
                    <div className="flex felx-row items-center justify-center gap-5 mx-5">
                        <Image src={anthVol1} alt="Comics Publishing" width={700} height={700} className="rounded-box w-1/2"/>
                        <Image src={anthVol2} alt="Comics Publishing" width={700} height={700} className="rounded-box w-1/2"/>
                    </div>
                    <Link href="/publishing/anthology" className="bg-primary text-black p-2 px-3 mt-12 border-b-accent border-b-4 rounded-full block w-34 mx-1 text-center active:mt-5 active:border-0">Join In!</Link>
                </div>
                <div className="flex flex-col text-black items-center justify-center mt-12 rounded-3xl bg-base-200 w-11/12 p-5">
                    <h2 className="bg-secondary rounded-3xl text-lg font-bold py-2 px-8">The Stubby Stories!</h2>
                    <p className="text-center text-sm opacity-40 mt-1">Runs seasonally for 4 months</p>
                    <h2 className="bg-white rounded-xl font-bold text-md mt-6 py-2 px-8">3 Writers and 3 Srtisits!</h2>
                    <p className="bg-secondary rounded-3xl py-2 px-3 mt-2">Pairing up/working as a group, we create 3 short stories in our postcard sized book for the selected season, such as Halloween!</p>
                    <h2 className="bg-white rounded-xl font-bold text-md mt-6 py-2 px-3">Selected Themes for Each Book!</h2>
                    <p className="bg-secondary rounded-3xl py-2 px-3 mt-2">To keep it interesting, our Stubby Stories are themed per book, having each short story tie in somehow together but each have their own unique style! In 2024, our Halloween released book was Fruit Pie Themed! Spooky! (and tasty!)</p>
                </div>
                <div className="flex flex-col items-center justify-center mt-12">
                    <Link href="/publishing/anthology" className="bg-primary text-black p-2 px-4 border-b-accent border-b-4 rounded-full block w-34 mx-1 text-center active:mt-5 active:border-0">Apply Here :)</Link>
                </div>
                <h2 className="text-md w-3/4 text-center border border-base-200 text-lg rounded-3xl mt-12 p-3">If you want to learn more about past projects, check out our Anthology Page!<br/><br/>Questions? Email us!</h2>
                <Link href="/projects/allscherry-anthology" className="bg-primary text-black p-2 px-4 mt-4 border-b-accent border-b-4 rounded-full block w-34 mx-1 text-center active:mt-5 active:border-0">Projects</Link>
                <div className="flex flex-col items-center justify-center mx-1 mt-14 gap-5">
                    <Link href="/info/contact#contactForm" className="flex flex-row items-center justify-center gap-5 bg-white rounded-3xl px-5 py-1">
                        <Image src={mailLogo} alt="Mail Logo" width={100} height={100} className="w-10"/>
                        <h2 className="text-black">Email us here!</h2>
                    </Link>
                </div>
            </section>
            <Footer />
        </main>
    );
}
