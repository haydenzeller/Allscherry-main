import Image from "next/image";
// Componenets
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";
// images
import mailLogo from "@/public/mail.svg";
import groupPhoto from "@/public/groupPhoto.jpg";
import ericUVFS from "@/public/ericUVFS.jpg";
import PageTitle from "@/app/components/PageTitle";
import printBundle from "@/public/print-bundle-example.webp"
import underConstruction from "@/public/underConstruction.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AllsCherry | Info",
  description: "AllsCherry Info Page - So what is an AllsCherry anyway? Sounds intriguing? Wanna join in? Take a look around the site, or shoot an email to the founder, Eric!",
  keywords: ["AllsCherry", "Home", "AllsCherry Home", "AllsCherry Projects", "AllsCherry News", "AllsCherry Updates", "AllsCherry Blog", "AllsCherry Blog Posts", "AllsCherry Blog Updates", "AllsCherry Blog News", "AllsCherry Blog Projects", "AllsCherry Blog Posts Projects News Updates", "AllsCherry Blog Posts Projects News Updates Home"],
  twitter: {
    card: "summary",
    site: "@allscherry",
  },
  alternates: {
    canonical: "https://allscherry.com/info",
  },
  openGraph: {
    type: "website",
    url: "https://allscherry.com",
    title: "AllsCherry | Info",
    siteName: "AllsCherry",
    description: "AllsCherry Info Page - So what is an AllsCherry anyway? Sounds intriguing? Wanna join in? Take a look around the site, or shoot an email to the founder, Eric!",
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

export default function Info() {
  return (
    <>
      <main id="main" className="flex min-h-screen flex-col bg-base-100 lg:hidden">
        {/* MOBILE */}
        <section className="">
          <Header />
          <PageTitle title="So what is an AllsCherry anyway?" />
          <section className="flex flex-col justify-center mt-14 items-center">
            <div className="bg-base-200 gap-5 rounded-3xl flex flex-col items-center justify-center mx-5 p-5 ">
              <h2 className="p-2 bg-secondary text-black rounded-3xl">More than a Publishing Company</h2>
              <h2 className="p-2 bg-secondary text-black rounded-xl text-center">AllsCherry is an Indie Publisher that represents community, freedom of the creator, and community.<br/><br/>Want to join in on the fun? Look around the site to learn more about how we do things! Or, email our founder, Eric!</h2>
            </div>
            <div className="flex flex-col items-center justify-center mx-1 mt-14 gap-5">
              <Link href="/info/contact#contactForm" className="flex flex-row items-center justify-center gap-5 bg-white rounded-3xl px-5 py-1">
                <Image src={mailLogo} alt="Mail Logo" width={100} height={100} className="w-10"/>
                  <h2 className="text-black">Email us here!</h2>
              </Link>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center gap-16 mt-14">
            <div className="flex flex-row gap-4 ml-3 mr-3 text-center">
              <div className="">
                <Image src={groupPhoto} alt="Group photo" className="w-52 h-auto rounded-box" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 w-1/2">
                <h2 className="text-md text-center border border-base-200 rounded-3xl p-3">We work with artists to make something original and special. New to books? here&apos;s a great way to start!</h2>
                <div>
                  <Link href="/publishing/anthology" className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0">
                    Collab!
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 ml-3 mr-3 text-center">
              <div className="flex flex-col justify-center items-center gap-4 w-1/2">
                <h2 className="text-md text-center border border-base-200 rounded-3xl p-3">Not sure how to produce a book? email us your questions or... We can do it for you, and, we can print it too!</h2>
                <div>
                  <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0" href="/publishing">
                    Publishing!
                  </Link>
                </div>
              </div>
              <div className="">
                <Image src={printBundle} className="w-52 rounded-box" alt="Eric UVFS"/>
              </div>
            </div>
            
            <div className="flex flex-row gap-4 ml-3 mr-3 text-center">
              <div className="">
                <Image src={ericUVFS} className="w-52 rounded-box" alt="Eric UVFS"/>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 w-1/2">
                <h2 className="text-md text-center border border-base-200 rounded-3xl p-3">We do many shows throughout the year, click below to keep up!</h2>
                <div>
                  <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0" href="/info/events">
                    Events!
                  </Link>
                </div>
              </div>
            </div>

          </section>
          <Footer />
        </section>
      </main>
      <main className="hidden lg:flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center">
                <Image src={underConstruction} alt="Under Construction" width={400} height={400}/>
                <h1 className="text-2xl w-1/2 text-center">Oop, sorry! Desktop version is under construction, check back later!</h1>
            </div>
      </main>
    </>
  );
}
