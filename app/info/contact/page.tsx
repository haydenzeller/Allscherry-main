import ericHeadshot from "@/public/ericHeadshot.jpg"
import Image from "next/image"
import Header from "@/app/components/Header"
import ContactForm from "@/app/components/ContactForm"
import Footer from "@/app/components/Footer"
import PageTitle from "@/app/components/PageTitle"
import underConstruction from "@/public/underConstruction.svg"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "AllsCherry | Contact",
    description: "AllsCherry Contact Page - Questions? Email us! But who is us? Eric Olcsvary, the founder of AllsCherry! Shoot him an email!",
    keywords: ["AllsCherry", "Home", "AllsCherry Home", "AllsCherry Projects", "AllsCherry News", "AllsCherry Updates", "AllsCherry Blog", "AllsCherry Blog Posts", "AllsCherry Blog Updates", "AllsCherry Blog News", "AllsCherry Blog Projects", "AllsCherry Blog Posts Projects News Updates", "AllsCherry Blog Posts Projects News Updates Home"],
    twitter: {
        card: "summary",
        site: "@allscherry",
    },
    alternates: {
        canonical: "https://allscherry.com/info/contact",
    },
    openGraph: {
        type: "website",
        url: "https://allscherry.com",
        title: "AllsCherry | Contact",
        siteName: "AllsCherry",
        description: "AllsCherry Contact Page - Questions? Email us! But who is us? Eric Olcsvary, the founder of AllsCherry! Shoot him an email!",
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

export default function Contact() {
    return (
        <main>
            <section className="flex min-h-screen flex-col bg-base-100 lg:hidden">
                <Header/>
                <PageTitle title="Questions? Email us! But who is us?"/>
                <div className="flex flex-col text-center mt-14 ml-12 mr-12 items-center justify-center">
                    <h2 className="text-md text-center border border-base-200 rounded-full px-10 py-4">AllsCherry was founded by Eric Olcsvary, as a way to bring artists together, and to... well, make art!</h2>
                    <div className="mt-4 rounded-xl">
                        <Image src={ericHeadshot} alt="Eric Headshot" className="w-96 rounded-xl"/>
                    </div>
                    <div className="flex flex-col justify-center mt-14 items-center">
                        <div className="bg-base-200 gap-5 rounded-3xl flex flex-col items-center justify-center mx-5 p-5 ">
                          <h2 className="p-2 bg-secondary text-black rounded-3xl"><strong>Hi! I&apos;m Eric Olcsvary</strong></h2>
                          <h2 className="p-2 bg-secondary text-black rounded-xl text-center">I am primarily a comic book creator, and have years of experience in graphic design, publishing and web design.<br/><br/>Having founded AllsCherry in 2021, my goal is to help upcoming artists start out in the comic book industry, and create collaborative projects to help build each other up in a community environment!<br/><br/>If you have any questions, feel free to email us, we&apos;d love to have you involved!</h2>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center mt-20 w-full">
                        <div className="w-52 h-3 bg-base-200 rounded-xl mb-10"/>
                        <h2 className="text-xl">Send us an email!</h2>
                        <ContactForm/>
                        <div className="w-52 h-3 bg-base-200 rounded-xl mt-10"/>
                    </div>
                </div>
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