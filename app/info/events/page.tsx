import EventList from "@/app/components/EventList";
import Header from "@/app/components/Header";
import ericBooth from "@/public/ericBooth.png"
import Image from "next/image";
import PageTitle from "@/app/components/PageTitle";
import Footer from "@/app/components/Footer";
import underConstruction from "@/public/underConstruction.svg";
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