import  Header from "@/app/components/Header";
import  Footer from "@/app/components/Footer";
import  Image from "next/image";
import  Link from "next/link";
export default function AllscherryAnthology() {
    return (
        <main className="flex flex-col min-h-screen bg-base-100 lg:hidden">
            <Header/>
            <section className="flex flex-col items-center justify-center">
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">The AllsCherry Anthology started with the simple concept to make a book with our local artists and friends. This simple idea has broadened into one of AllsCherry’s strongest ways of bringing people together.</h2>
                <div>
                    <Image src="" alt=""/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">In 2023, and in under 4 months, we gathered 8 amazing artists to contribute their own comics into an Anthology, afterward we had a dinner party to celebrate!</h2>
                <div>
                    <Image src="" alt=""/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">This book was only the beginning, as this is now an annual project! Alongside many more to come. Here’s a list of what we’ve done so far!</h2>
                <div>
                    <div>
                        <Image src="" alt=""/>
                        <p></p>
                    </div>
                    <div>
                        <Image src="" alt=""/>
                        <p></p>
                    </div>
                </div>
                <h2 className="border border-base-200 rounded-full p-3 w-5/6 mt-6 text-center">If you’d like to get involved, or see more info, click here below!</h2>
                <Link href="/publishing/anthology" className="bg-primary text-black p-2 px-14 mt-4 border-b-accent border-b-4 rounded-full block w-34 text-center active:mt-5 active:border-0">Collab</Link>
                 
            </section>
            <Footer/>
        </main>
    );
}
