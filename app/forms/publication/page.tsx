'use client';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import mailLogo from "@/public/mail.svg";
import Link from "next/link";
import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
export default function Publication() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [country, setCountry] = useState("");
    const [profession, setProfession] = useState("");
    const [publishType, setPublishType] = useState("");
    const [concept, setConcept] = useState("");
    const [ready, setReady] = useState("");
    const [series, setSeries] = useState("");
    const [idea, setIdea] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false);
    const [cloudflareStatus, setCloudflareStatus] = useState("")
    const [submitted, setSubmitted] = useState(false);
    const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setError(false);
        switch(name) {
            case "firstName":
                setFirstName(value);
                console.log(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "address":
                setAddress(value);
                break;
            case "city":
                setCity(value);
                break;
            case "province":
                setProvince(value);
                break;
            case "postalCode":
                setPostalCode(value);
                break;
            case "country":
                setCountry(value);
                break;
            case "company":
                setCompany(value);
                break;
            case "profession":
                setProfession(profession + value);
                break;
            case "publishType":
                setPublishType(value);
                break;
            case "concept":
                setConcept(value);
                break;
            case "ready":
                setReady(value);
                break;
            case "series":
                setSeries(value);
                break;
            case "idea":
                setIdea(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (event:React.FormEvent) => {
        event.preventDefault();
        if (firstName === "" || lastName === "" || email === "" || address === "" || city === "" || province === "" || postalCode === "" || country === "" || profession === "" || publishType === "" || concept === "" || ready === "" || series === "" || idea === "") {
            setError(true);
            return;
        }
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            address: address,
            city: city,
            province: province,
            postal: postalCode,
            country: country,
            company: company,
            profession: profession,
            type: publishType,
            concept: concept,
            ready: ready,
            series: series,
            seriesIdea: idea
        }
        try {
            const res = await fetch('/api/submitPublicationForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                console.log("Success");
                setSubmitted(true);
            } else {
                console.error('Error submitting publication form:', res.statusText);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    }

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
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full text-black">
                    <input type="text" id="firstName" name="firstName" placeholder="*First Name" onChange={handleInputChange} className="mt-6 text-center p-2 rounded-3xl w-3/4"/>
                    <input type="text" id="lastName" name="lastName" placeholder="*Last Name"  onChange={handleInputChange} className="mt-6 text-center p-2 rounded-3xl w-3/4"/>
                    <input type="email" id="email" name="email" placeholder="*What's your email"  onChange={handleInputChange} className="mt-6 text-center p-2 rounded-3xl w-3/4"/>
                    <input type="text" id="phone" name="phone" placeholder="What's your phone number"  onChange={handleInputChange} className="mt-6 text-center p-2 rounded-3xl w-3/4"/>
                    <input type="text" id="address" name="address" placeholder="*Street Address" onChange={handleInputChange} className="mt-6 text-center p-2 rounded-3xl w-3/4"/>
                    <input type="text" id="city" name="city" placeholder="*City" onChange={handleInputChange} className="mt-6 text-center p-2 rounded-3xl w-3/4"/>
                    <input type="text" id="province" name="province" placeholder="*Province" onChange={handleInputChange} className="mt-6 text-center p-2 rounded-3xl w-3/4"/>
                    <input type="text" id="postal" name="postal" placeholder="*Postal Code" onChange={handleInputChange} className="mt-6 text-center p-2 rounded-3xl w-3/4"/>
                    <input type="text" id="country" name="country" placeholder="*Country" onChange={handleInputChange} className="mt-6 text-center p-2 rounded-3xl w-3/4"/>
                    <input type="text" id="company" name="company" placeholder="Company Name" onChange={handleInputChange} className="mt-6 text-center p-2 rounded-3xl w-3/4"/>
                    <div className=" bg-gray-500 mt-6 rounded-full h-3 w-1/2"/>
                    <h2 className="mt-6 bg-white rounded-xl p-3 text-center text-black w-3/4">*What&apos;s your Profession?</h2>
                    <div className="flex flex-col items-center justify-center mt-6 text-center">
                        <div className="bg-white text-black flex flex-row items-center justify-left pl-5 rounded-3xl w-1/2 py-2">
                            <input type="radio" id="illustrator" name="profession" value="illustrator" onChange={handleInputChange} className=" appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"/>
                            <label htmlFor="illustrator" className="mr-8">Illustrator</label>
                        </div>
                        <div className="w-1/2 bg-white text-black flex flex-row items-center justify-left pl-5 mt-6 rounded-3xl py-2">
                            <input type="radio" id="inker" name="profession" value="inker" onChange={handleInputChange} className=" appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"/>
                            <label htmlFor="inker" className="mr-8">Inker</label>
                        </div>
                        <div className="w-1/2 bg-white text-black flex flex-row items-center justify-left pl-5 mt-6 rounded-3xl py-2">
                            <input type="radio" id="colourist" name="profession" value="colourist" onChange={handleInputChange} className=" appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"/>
                            <label htmlFor="colourist" className="mr-8">Colourist</label>
                        </div>
                        <div className="w-1/2 bg-white text-black flex flex-row items-center justify-left pl-5 mt-6 rounded-3xl py-2">
                            <input type="radio" id="writer" name="profession" value="writer" onChange={handleInputChange} className=" appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"/>
                            <label htmlFor="writer" className="mr-8">Writer</label>
                        </div>
                        <div className="w-full bg-white text-black flex flex-row items-center justify-left pl-5 mt-6 rounded-3xl py-2">
                            <input type="radio" id="other" name="profession" value="other" onChange={handleInputChange} className=" appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"/>
                            <label htmlFor="other" className="mr-8">Other</label>
                            <input type="text" id="name" name="profession" onChange={handleInputChange} placeholder="Please specify :)" className="text-center p-2 rounded-3xl w-1/2 border-base-100"/>
                        </div>
                    </div>
                    <h2 className="mt-12 bg-white rounded-xl p-3 text-center text-black w-3/4">*What will you publish with AllsCherry?</h2>
                    <div className="flex flex-col items-center justify-center mt-6 text-center w-full">
                        {/* Comic Book */}
                        <div className="bg-white text-black flex flex-row items-center justify-left pl-5 rounded-3xl w-1/2 py-2">
                            <input type="radio" id="comicBook" name="type" value="comicBook" onChange={handleInputChange} className=" appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"/>
                            <label htmlFor="comicBook" className="mr-8">Comic Book</label>
                        </div>
                        {/* Graphic Novel */}
                        <div className="w-1/2 bg-white text-black flex flex-row items-center justify-left pl-5 mt-6 rounded-3xl py-2">
                            <input type="radio" id="novel" name="type" value="graphicNovel" onChange={handleInputChange} className=" appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"/>
                            <label htmlFor="graphicNovel" className="mr-8">Graphic Novel</label>
                        </div>
                        {/* Manga */}
                        <div className="w-1/2 bg-white text-black flex flex-row items-center justify-left pl-5 mt-6 rounded-3xl py-2">
                            <input type="radio" id="manga" name="type" value="manga" onChange={handleInputChange} className=" appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"/>
                            <label htmlFor="manga" className="mr-8">Manga</label>
                        </div>
                        {/* Collabrative */}
                        <div className="w-1/2 bg-white text-black flex flex-row items-center justify-left pl-5 mt-6 rounded-3xl py-2">
                            <input type="radio" onChange={handleInputChange} id="collabrative" name="type" value="collabrative" className=" appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"/>
                            <label htmlFor="collabrative" className="mr-8">Collabrative</label>
                        </div>
                    </div>
                    <h2 className="mt-12 bg-white rounded-t-3xl p-3 text-center text-black w-3/4">*What is the concept of your story?</h2>
                    <textarea id="storyConcept" name="storyConcept" onChange={handleInputChange} placeholder="Type your concept here..." className="mt-0 text-left h-40 text-black p-2 rounded-b-3xl w-3/4"/>
                    <h2 className="mt-12 bg-white rounded-xl p-3 text-center text-black w-3/4">*Is your book already complete and ready for publication?</h2>
                    <div className="flex flex-col items-center justify-center mt-6 text-center w-full">
                        <div className="bg-white pl-4 text-black flex items-center rounded-3xl w-1/3 py-2">
                            <input
                                type="radio"
                                id="yes"
                                name="answer"
                                value="yes"
                                onChange={handleInputChange} 
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
                                onChange={handleInputChange} 
                                className="appearance-none w-5 h-5 mr-3 rounded-full border-2 border-base-100 checked:bg-base-100"
                            />
                            <label htmlFor="no" className="ml-2">No</label>
                        </div>
                    </div>
                    <h2 className="mt-12 bg-white rounded-xl p-3 text-center text-black w-3/4">*Is your story a series or a one shot?</h2>
                    <div className="flex flex-col items-center justify-center mt-6 text-center w-full">
                        <div className="bg-white pl-4 text-black flex items-center rounded-3xl w-1/3 py-2">
                            <input
                                onChange={handleInputChange} 
                                type="radio"
                                id="series"
                                name="series"
                                value="yes"
                                className="appearance-none w-5 h-5 mr-3 rounded-full border-2 border-base-100 checked:bg-base-100"
                            />
                            <label htmlFor="series" className="ml-2">A Series</label>
                        </div>
                        <div className="bg-white pl-4 text-black flex items-center rounded-3xl w-1/3 py-2 mt-6">
                            <input
                                type="radio"
                                id="oneShot"
                                name="series"
                                onChange={handleInputChange} 
                                value="no"
                                className="appearance-none w-5 h-5 mr-3 rounded-full border-2 border-base-100 checked:bg-base-100"
                            />
                            <label htmlFor="oneShot" className="ml-2">A One Shot</label>
                        </div>
                    </div>
                    <h2 className="mt-12 bg-white rounded-t-3xl p-3 text-center text-black w-3/4">*If it&apos;s a series, how many books do you have planned, and how long do you plan the series to be?</h2>
                    <textarea id="seriesPlan" name="seriesPlan" onChange={handleInputChange} placeholder="Type your idea here..." className="mt-0 text-left h-40 text-black p-2 rounded-b-3xl w-3/4"/>

                    <Turnstile className="cf-turnstile mt-12" siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY || ""} onSuccess={() => setCloudflareStatus('solved')} />
                    {cloudflareStatus == 'solved' &&
                    <div className="flex flex-col justify-center items-center mt-6">
                        {error && <p className="text-red-500">Please fill in all required fields</p>}
                        {submitted && <p className="text-green-500">Form submitted successfully!</p>}
                        <button type="submit" className="bg-primary mt-6 text-black p-2 border-b-accent border-b-4 rounded-2xl block w-28 text-center shadow active:translate-y-0.5 active:shadow-none active:border-b-0 active:mt-6">
                            Submit!
                        </button>
                    </div>
                    }
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