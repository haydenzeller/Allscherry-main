import EventList from "../components/EventList";
import Header from "../components/Header";
import ericBooth from "../../public/ericBooth.png"
import Image from "next/image";
export default function Events() {
    return (
        <main className="flex min-h-screen flex-col bg-base-100">
            <section className="">
                <Header/>
                <div className="flex flex-col justify-center items-center mt-14 text-center">
                    <h1 className="mb-4">Scroll down for a list of our events<br/>for 2024!</h1>
                    <Image className="w-96 rounded-box" src={ericBooth} alt="Erics Booth"/>
                </div>
                <section className="mt-14">
                    <EventList />
                </section>
            </section>
        </main>
    )
}