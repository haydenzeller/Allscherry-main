import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
export default function NotFound(){
    return (
    <>
        <main className="flex min-h-screen flex-col bg-base-100 lg:hidden">
            <Header/>
            <section className="text-center">
                <div className="mt-16 bg-base-100">
                    <h1 className="text-3xl">Uh Oh!</h1>
                    <h2 className="text-3xl">The page you&apos;re looking for does&apos;nt exist :-;</h2>
                    <div className="flex flex-col justify-center items-center mt-4">
                        <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-36 text-center active:mt-1 active:border-0" href="/">Take Me Home</Link>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
        <section className="hidden lg:flex flex-col text-center justify-center items-center w-screen h-screen bg-base-200">
            <div>
                <h1 className="text-3xl">Uh Oh!</h1>
                <h2 className="text-3xl">The page you&apos;re looking for does&apos;nt exist :-;</h2>
                <div className="flex flex-col justify-center items-center mt-4">
                    <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-36 text-center active:mt-1 active:border-0" href="/">Take Me Home</Link>
                </div>
            </div>
        </section>
    </>
    )
}