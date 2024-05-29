import EventList from "../components/EventList";
import Header from "../components/Header";


export default function Events() {
    return (
        <main className="flex min-h-screen flex-col bg-base-100">
            <section className="md:hidden">
                <Header/>
                <section className="mt-14">
                    <EventList />
                </section>
            </section>
        </main>
    )
}