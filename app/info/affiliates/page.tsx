import PageTitle from "@/app/components/PageTitle";
import AffiliateList from "../../components/AffiliateList";
import Header from "../../components/Header";
export default function affiliates() {
    return (
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
        </main>
    )
}