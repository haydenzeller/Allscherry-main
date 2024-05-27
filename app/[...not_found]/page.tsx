import Link from "next/link";
export default function Error404(){
    return (
        <section className="flex flex-col text-center justify-center items-center w-screen h-screen bg-base-200">
            <div>
                <h1 className="text-3xl">Uh Oh!</h1>
                <h2 className="text-3xl">The page you&apos;re looking for does&apos;nt exist :-;</h2>
                <div className="flex flex-col justify-center items-center mt-4">
                    <Link className="bg-primary text-black p-1 border-b-accent border-b-4 rounded-2xl block w-36 text-center active:mt-1 active:border-0" href="/">Take Me Home</Link>
                </div>
            </div>
        </section>
    )
}