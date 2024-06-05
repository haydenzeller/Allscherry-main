import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import underConstruction from "@/public/underConstruction.svg";
export default function Publishing() {
    return (
        <>
            <main className="flex min-h-screen flex-col bg-base-100 md:hidden">
                <Header />
                <Footer/>
            </main>
            <main className="sm:hidden md:flex flex-col items-center justify-center min-h-screen">
                <div className="flex flex-col items-center justify-center">
                    <Image src={underConstruction} alt="Under Construction" width={400} height={400}/>
                    <h1 className="text-2xl w-1/2 text-center">Oop, sorry! Desktop version is under construction, check back later!</h1>
                </div>
            </main>
        </>
    )
}