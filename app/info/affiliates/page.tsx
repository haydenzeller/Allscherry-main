import PageTitle from "@/app/components/PageTitle";
import AffiliateList from "@/app/components/AffiliateList";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import underConstruction from "@/public/underConstruction.svg";
export default function Affiliates() {
    return (
        <>
            <main className="flex min-h-screen flex-col bg-base-100">
                <Header />
                <PageTitle title="Who helps out around AllsCherry?"/>
                <section className="flex flex-col text-center mt-14 ml-12 mr-12 items-center justify-center">
                    <div className="relative flex items-center justify-center  text-black rounded-2xl shadow-xl mt-12">
                        <div className="absolute -inset-2 z-0 bg-base-300 rounded-2xl transform scale-105 mt-24"></div>
                        <h2 className="text-center text-lg relative z-10 bg-base-200 rounded-2xl p-5">
                            Although primarily run by Eric, there&apos;s a lot of behind the scenes work done at AllsCherry. Our web developer, the co-host of our podcast, collaborative artists, and our printer do quite a bit!<br/><br/>Take a look at what they have to offer, you might make a friend!                    
                        </h2>
                    </div>
                </section>
                <section className="felx flex-col justify-center items-center mt-24 text-center">
                    <AffiliateList/>
                </section>
                <Footer/>
            </main>
            <main className="hidden md:flex flex-col items-center justify-center min-h-screen">
                <div className="flex flex-col items-center justify-center">
                    <Image src={underConstruction} alt="Under Construction" width={400} height={400}/>
                    <h1 className="text-2xl w-1/2 text-center">Oop, sorry! Desktop version is under construction, check back later!</h1>
                </div>
            </main>
        </>
    )
}