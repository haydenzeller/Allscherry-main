import ericHeadshot from "../../../public/ericHeadshot.jpg"
import Image from "next/image"
import Header from "../../components/Header"
import ContactForm from "../../components/ContactForm"
import Footer from "../../components/Footer"
import PageTitle from "@/app/components/PageTitle"
export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col bg-base-100">
            <Header/>
            <PageTitle title="Questions? Email us! but who is us?"/>
            <div className="flex flex-col text-center mt-14 ml-12 mr-12 items-center justify-center">
                <h1 className="text-xl">Allscherry was founded by Eric Olcsvary, as a way to bring artists together, and to... well, make art!</h1>
                <div className="mt-4 rounded-xl">
                    <Image src={ericHeadshot} alt="Eric Headshot" className="w-96 rounded-xl"/>
                </div>
                <div className="relative flex items-center justify-center  text-black rounded-2xl shadow-xl mt-12">
                    <div className="absolute -inset-2 z-0 bg-base-300 rounded-2xl transform scale-105 mt-24"></div>
                    <h2 className="text-center text-lg relative z-10 bg-base-200 rounded-2xl p-5">
                        My name is Eric! I&apos;m an artist! One who loves to tell stories, create worlds, and work with my fellow artists around me. I primarily work with comic books, but I tend to dabble in whatever medium strikes me as I work!<br/><br/>I like to work with the community, so if you have any questions, or simply want to say hello, <i>shoot me an email!</i>
                    </h2>
                </div>
                <section className="flex flex-col justify-center items-center text-center mt-20 w-full">
                    <div className="w-52 h-3 bg-base-200 rounded-xl mb-10"/>
                    <h2 className="text-xl">Send us an email!</h2>
                    <ContactForm/>
                    <div className="w-52 h-3 bg-base-200 rounded-xl mt-10"/>
                </section>
            </div>
            <Footer/>
        </main>
    )
}