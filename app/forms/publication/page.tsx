import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import mailLogo from "@/public/mail.svg";
import Link from "next/link";
export default function Publication() {
    return (
        <main className="flex flex-col bg-base-100 min-h-screen">
            <Header/>
            {/* Mobile */}
            <section className="flex flex-col justify-center items-center min-w-screen">
                <div className="flex flex-col items-center justify-center">
                    <div className="mt-12 bg-secondary py-2 px-28 rounded-3xl text-center text-black font-semibold">
                        <h1>Publication Form</h1>
                    </div>
                    <div className="flex mt-6 flex-col items-left justify-left">
                        <p><i>*indicates a required field</i></p>
                        <p><i>If something does not apply to you, type N/A</i></p>
                    </div>
                    <div className="bg-primary rounded-full h-3 w-11/12 mt-6"/>
                </div>
                <form className="flex flex-col items-center justify-center w-full">
                    <input type="text" id="name" name="name" placeholder="*First Name" className="mt-6 text-center p-2 rounded-3xl w-3/4"/>
                    <input type="text" id="name" name="name" placeholder="*Last Name" className="mt-6 text-center p-2 rounded-3xl w-3/4"/>
                    <input type="email" id="email" name="email" placeholder="*What's your email" className="mt-6 text-center p-2 rounded-3xl w-3/4"/>
                    <input type="text" id="name" name="name" placeholder="*What's your phone number" className="mt-6 text-center p-2 rounded-3xl w-3/4"/>
                    <input type="text" id="name" name="name" placeholder="*Street Address" className="mt-6 text-center p-2 rounded-3xl w-3/4"/>
                    <input type="text" id="name" name="name" placeholder="*City" className="mt-6 text-center p-2 rounded-3xl w-3/4"/>
                    <input type="text" id="name" name="name" placeholder="*Province" className="mt-6 text-center p-2 rounded-3xl w-3/4"/>
                    <input type="text" id="name" name="name" placeholder="*Postal Code" className="mt-6 text-center p-2 rounded-3xl w-3/4"/>
                    <input type="text" id="name" name="name" placeholder="*Country" className="mt-6 text-center p-2 rounded-3xl w-3/4"/>
                    <div className=" bg-gray-500 mt-6 rounded-full h-3 w-1/2"/>
                    <h2 className="mt-6 bg-white rounded-xl p-3 text-center text-black w-3/4">What's your Profession?</h2>
                    <div className="flex flex-col items-center justify-center mt-6 text-center">
                        <div className="bg-white text-black flex flex-row items-center justify-left pl-5 rounded-3xl w-1/2 py-2">
                            <input type="checkbox" id="illustrator" name="illustrator" value="illustrator" className=" appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"/>
                            <label htmlFor="illustrator" className="mr-8">Illustrator</label>
                        </div>
                        <div className="w-1/2 bg-white text-black flex flex-row items-center justify-left pl-5 mt-6 rounded-3xl py-2">
                            <input type="checkbox" id="inker" name="inker" value="inker" className=" appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"/>
                            <label htmlFor="inker" className="mr-8">Inker</label>
                        </div>
                        <div className="w-1/2 bg-white text-black flex flex-row items-center justify-left pl-5 mt-6 rounded-3xl py-2">
                            <input type="checkbox" id="colourist" name="colourist" value="colourist" className=" appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"/>
                            <label htmlFor="colourist" className="mr-8">Colourist</label>
                        </div>
                        <div className="w-1/2 bg-white text-black flex flex-row items-center justify-left pl-5 mt-6 rounded-3xl py-2">
                            <input type="checkbox" id="writer" name="writer" value="writer" className=" appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"/>
                            <label htmlFor="writer" className="mr-8">Writer</label>
                        </div>
                        <div className="w-full bg-white text-black flex flex-row items-center justify-left pl-5 mt-6 rounded-3xl py-2">
                            <input type="checkbox" id="other" name="other" value="other" className=" appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"/>
                            <label htmlFor="other" className="mr-8">Other</label>
                            <input type="text" id="name" name="name" placeholder="Please specify :)" className="text-center p-2 rounded-3xl w-1/2 border-base-100"/>
                        </div>
                    </div>
                    <h2 className="mt-12 bg-white rounded-xl p-3 text-center text-black w-3/4">What will you publish with AllsCherry?</h2>
                    <div className="flex flex-col items-center justify-center mt-6 text-center w-full">
                        {/* Comic Book */}
                        <div className="bg-white text-black flex flex-row items-center justify-left pl-5 rounded-3xl w-1/2 py-2">
                            <input type="checkbox" id="comicBook" name="comicBook" value="comicBook" className=" appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"/>
                            <label htmlFor="comicBook" className="mr-8">Comic Book</label>
                        </div>
                        {/* Graphic Novel */}
                        <div className="w-1/2 bg-white text-black flex flex-row items-center justify-left pl-5 mt-6 rounded-3xl py-2">
                            <input type="checkbox" id="graphicNovel" name="graphicNovel" value="graphicNovel" className=" appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"/>
                            <label htmlFor="graphicNovel" className="mr-8">Graphic Novel</label>
                        </div>
                        {/* Manga */}
                        <div className="w-1/2 bg-white text-black flex flex-row items-center justify-left pl-5 mt-6 rounded-3xl py-2">
                            <input type="checkbox" id="manga" name="manga" value="manga" className=" appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"/>
                            <label htmlFor="manga" className="mr-8">Manga</label>
                        </div>
                        {/* Collabrative */}
                        <div className="w-1/2 bg-white text-black flex flex-row items-center justify-left pl-5 mt-6 rounded-3xl py-2">
                            <input type="checkbox" id="collabrative" name="collabrative" value="collabrative" className=" appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"/>
                            <label htmlFor="collabrative" className="mr-8">Collabrative</label>
                        </div>
                    </div>
                    <h2 className="mt-12 bg-white rounded-t-3xl p-3 text-center text-black w-3/4">*What is the concept of your story?</h2>
                    <textarea id="storyConcept" name="storyConcept" placeholder="Type your concept here..." className="mt-0 text-left h-40 text-black p-2 rounded-b-3xl w-3/4"/>
                    <h2 className="mt-12 bg-white rounded-xl p-3 text-center text-black w-3/4">*Is your book already complete and ready for publication?</h2>
                    <div className="flex flex-col items-center justify-center mt-6 text-center w-full">
                        <div className="bg-white pl-4 text-black flex items-center rounded-3xl w-1/3 py-2">
                            <input
                                type="radio"
                                id="yes"
                                name="answer"
                                value="yes"
                                className="appearance-none w-5 h-5 mr-3 rounded-full border-2 border-base-100 checked:bg-base-100"
                            />
                            <label htmlFor="yes" className="ml-2">Yes</label>
                        </div>
                        <div className="bg-white pl-4 text-black flex items-center rounded-3xl w-1/3 py-2 mt-6">
                            <input
                                type="radio"
                                id="no"
                                name="answer"
                                value="no"
                                className="appearance-none w-5 h-5 mr-3 rounded-full border-2 border-base-100 checked:bg-base-100"
                            />
                            <label htmlFor="no" className="ml-2">No</label>
                        </div>
                    </div>
                    <h2 className="mt-12 bg-white rounded-xl p-3 text-center text-black w-3/4">*Is your story a series or a one shot?</h2>
                    <div className="flex flex-col items-center justify-center mt-6 text-center w-full">
                        <div className="bg-white pl-4 text-black flex items-center rounded-3xl w-1/3 py-2">
                            <input
                                type="radio"
                                id="series"
                                name="answer"
                                value="series"
                                className="appearance-none w-5 h-5 mr-3 rounded-full border-2 border-base-100 checked:bg-base-100"
                            />
                            <label htmlFor="series" className="ml-2">A Series</label>
                        </div>
                        <div className="bg-white pl-4 text-black flex items-center rounded-3xl w-1/3 py-2 mt-6">
                            <input
                                type="radio"
                                id="oneShot"
                                name="answer"
                                value="oneShot"
                                className="appearance-none w-5 h-5 mr-3 rounded-full border-2 border-base-100 checked:bg-base-100"
                            />
                            <label htmlFor="oneShot" className="ml-2">A One Shot</label>
                        </div>
                    </div>
                    <h2 className="mt-12 bg-white rounded-t-3xl p-3 text-center text-black w-3/4">*If it&apos;s a series, how many books do you have planned, and how long do you plan the series to be?</h2>
                    <textarea id="seriesPlan" name="seriesPlan" placeholder="Type your idea here..." className="mt-0 text-left h-40 text-black p-2 rounded-b-3xl w-3/4"/>
                </form>
                <section className="flex flex-col items-center justify-center mx-1 mt-14 gap-5">
                    <Link href="/info/contact#contactForm" className="flex flex-row items-center justify-center gap-5 bg-white rounded-3xl px-5 py-1">
                        <Image src={mailLogo} alt="Mail Logo" width={100} height={100} className="w-10"/>
                        <h2 className="text-black">Email us here!</h2>
                    </Link>
                </section>
            </section>
            <Footer/>
        </main>
    )
}