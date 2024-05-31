
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import PageTitle from "@/app/components/PageTitle";
import Image from "next/image";
import Link from "next/link";
import mailLogo from "@/public/mail.svg"
import DesignImages from "@/app/components/DesignImages";
export default function Anthology() {
  return (
    <main id="main" className="flex min-h-screen flex-col bg-base-100">
      {/* MOBILE */}
      <section className="">
        <Header />
        <PageTitle title={"Need some design help?"}/>
        <section className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full mt-14">
                <h2 className="text-xl pr-24 pl-24 text-center w-full">In the process of making a book, poster, banner, or something similar?</h2>
            </div>
        </section>
        <section className="flex flex-col justify-center items-center mb-14 mt-14">
                <div className="relative flex items-center justify-center mr-10 ml-10 text-black rounded-2xl">
                <div className="absolute -inset-2 z-0 bg-base-300 rounded-2xl transform scale-105 mt-24"></div>
                    <div className="text-center text-xl relative z-10 bg-base-200 rounded-2xl p-5">
                        <h2 className=" text-center text-xl">AllsCherry could help with...<br/><br/></h2>
                        <ul className="pl-5">
                            <li className="list-disc text-left text-lg">General Design Advice<br/><br/></li>
                            <li className="list-disc text-left text-lg">Logo creation / advice<br/><br/></li>
                            <li className="list-disc text-left text-lg">Branding / marketing (such as business cards, posters, or ads)<br/><br/></li>
                        </ul>
                    </div>
                </div>
        </section> 
        <section className="flex flex-col justify-center items-center mb-14 mt-14">
                <div className="relative flex items-center justify-center mr-10 ml-10 text-black rounded-2xl">
                <div className="absolute -inset-2 z-0 bg-base-300 rounded-2xl transform scale-105 mt-24"></div>
                    <div className="text-center text-xl relative z-10 bg-base-200 rounded-2xl p-5">
                        <h2 className=" text-center text-xl">Everything of ours is designed in house, including this website!<br/><br/>Email us if you need assistance, we might be able to help!</h2>
                    </div>
                </div>
        </section> 
        <section className="flex flex-col items-center jsutify-center mt-14 mb-14 text-center">
            <h2 className="text-xl mb-5">Our design examples</h2>
            <DesignImages/>
        </section>
        <section className="flex flex-col justify-center mt-14 items-center">
                <div className="flex flex-col items-center justify-center mt-5">
                    <Link href="/info/contact#contactForm" className="gap-3 flex flex-row items-center justify-center text-xl">
                    <Image className="bg-white rounded-full p-1" src={mailLogo} alt="Email Logo" width="50"/>
                    Email us for a quote!
                    </Link>
                    <div className="h-3 my-5 w-full ">
                        <div className="bg-white h-full w-full rounded-3xl"></div>
                    </div>
                </div>
            </section>
        </section>
      <Footer/>
    </main>
  );
}