import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import PageTitle from "../components/PageTitle";
import Link from "next/link";
import Image from "next/image";
import mailLogo from "@/public/mail.svg";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "AllsCherry | Applications",
    description: "AllsCherry Applications Page - Looking to be published? Apply below!",
    keywords: ["AllsCherry", "Home", "AllsCherry Home", "AllsCherry Projects", "AllsCherry News", "AllsCherry Updates", "AllsCherry Blog", "AllsCherry Blog Posts", "AllsCherry Blog Updates", "AllsCherry Blog News", "AllsCherry Blog Projects", "AllsCherry Blog Posts Projects News Updates", "AllsCherry Blog Posts Projects News Updates Home"],
    twitter: {
        card: "summary",
        site: "@allscherry",
    },
    alternates: {
        canonical: "https://allscherry.com/applications",
    },
    openGraph: {
        type: "website",
        url: "https://allscherry.com",
        title: "AllsCherry | Applications",
        siteName: "AllsCherry",
        description: "AllsCherry Applications Page - Looking to be published? Apply below!",
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

export default function Applications() {
    return (
        <main className="flex flex-col min-h-screen bg-base-100">
            <Header />
            {/* Mobile */}
            <section className="flex flex-col items-center justify-center">
                <PageTitle title={"Looking to be published? Apply below!"} />
                <section className="flex flex-col items-center justify-center ">
                    <h2 className="text-md w-3/4 text-center border border-base-200 text-lg rounded-3xl mt-12 p-3">Have an idea for a book?</h2>
                    <div className="flex flex-col text-black items-center justify-center mt-6 rounded-3xl bg-base-200 w-11/12 p-5">
                        <h2 className="bg-secondary rounded-3xl text-lg font-bold py-2 px-8">AllsCherry Publishing</h2>
                        <h2 className="bg-white rounded-xl font-bold text-md mt-3 py-2 px-8">Plan, Create, Produce, Print!</h2>
                        <p className="bg-secondary rounded-3xl py-2 px-3 mt-2">We help organize and map out your ideas from Step 0 all the way to a finished product, weather you&apos;re a writer, illustrator or both! Once we&apos;ve planned and completed your book creation, we will handle the rest!</p>
                    </div>
                    <Link href="/applications/publication" className="bg-primary text-black p-2 px-3 mt-6 border-b-accent border-b-4 rounded-full block w-34 mx-1 text-center active:mt-5 active:border-0">Apply Here!</Link>
                </section>
                <section className="flex flex-col items-center justify-center">
                    <h2 className="text-md w-3/4 text-center border border-base-200 text-lg rounded-3xl mt-12 p-3">Not sure where to start?</h2>
                    <div className="flex flex-col text-black items-center justify-center mt-6 rounded-3xl bg-base-200 w-11/12 p-5">
                        <h2 className="bg-secondary rounded-3xl text-lg font-bold py-2 px-8">The Stubby Stories!</h2>
                        <h2 className="bg-white rounded-xl font-bold text-md mt-3 py-2 px-8">Work Together and Create a Short Story!</h2>
                        <p className="bg-secondary rounded-3xl py-2 px-3 mt-2">The Stubby Stories is a postcard sized book meant to pair up artists and writers to create a themed short story!<br/><br/>A simple way to get into book creation, while also learning to work in a team setting on a book. Don&apos;t worry, it&apos;s easier than it sounds!</p>
                    </div>
                    <Link href="/applications/stubby-stories" className="bg-primary text-black p-2 px-3 mt-6 border-b-accent border-b-4 rounded-full block w-34 mx-1 text-center active:mt-5 active:border-0">Apply Here!</Link>
                </section>
                <section className="flex flex-col items-center justify-center">
                    <h2 className="text-md w-3/4 text-center border border-base-200 text-lg rounded-3xl mt-12 p-3">Have an idea for a short story? Publish as a group!</h2>
                    <div className="flex flex-col text-black items-center justify-center mt-6 rounded-3xl bg-base-200 w-11/12 p-5">
                        <h2 className="bg-secondary rounded-3xl text-lg font-bold py-2 px-8">The Annual Anthology</h2>
                        <h2 className="bg-white rounded-xl font-bold text-md mt-3 py-2 px-8">A Yearly Opportunity to &quot;Test the Water&quot;</h2>
                        <p className="bg-secondary rounded-3xl py-2 px-3 mt-2">Every year we gather artists big or small to each publish a short story within our Anthology Book! It&aposs an easy way to get started in comics, gain attention through each other&apos;s work, and publish your book in a cheaper way!</p>
                    </div>
                    <Link href="/applications/anthology" className="bg-primary text-black p-2 px-3 mt-6 border-b-accent border-b-4 rounded-full block w-34 mx-1 text-center active:mt-5 active:border-0">Apply Here!</Link>
                </section>
                <h2 className="text-md w-3/4 text-center border border-base-200 text-lg rounded-3xl mt-12 p-3">If you want to learn more about past projects, check out our Anthology Page!<br/><br/>Questions? Email us!</h2>
                <section className="flex flex-col items-center justify-center mx-1 mt-14 gap-5">
                    <Link href="/info/contact#contactForm" className="flex flex-row items-center justify-center gap-5 bg-white rounded-3xl px-5 py-1">
                        <Image src={mailLogo} alt="Mail Logo" width={100} height={100} className="w-10"/>
                        <h2 className="text-black">Email us here!</h2>
                    </Link>
                </section>
            </section>
            <Footer />
        </main>
    );
}