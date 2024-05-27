'use client'
import { use, useState } from "react"
import mailchimpSubmit from "../api/mailchimpSubmit";
export default function SubscribeBox({showOrbs = true}) {
    const [email, setEmail] = useState("");
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubscribe = () => {
        // Regular expression for validating an email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email !== "") {
            if (emailRegex.test(email)) {
                setShowError(false);
                setShowSuccess(true);
                mailchimpSubmit(email);
            } else {
                setShowError(true);
                setShowSuccess(false);
            }
        }
        else {
            setShowError(true);
            setShowSuccess(false);
        }
    };

    return (
    <>
    <div className="mt-10 flex flex-row gap-6 justify-center items-center">
        {showOrbs && <div className="bg-white w-12 h-12 rounded-full" /> }
        <input className="rounded-2xl input w-60 bg-white input-md text-black text-center" placeholder="Your email here! please :)" onChange={e => {setEmail(e.target.value); setShowError(false); setShowSuccess(false)}}/>
        {showOrbs && <div className="bg-white w-12 h-12 rounded-full" /> }
    </div>
    <div className="flex flex-col justify-center items-center">
        <button className="bg-primary mt-5 text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center active:mt-1 active:border-0 active:mb-1" onClick={handleSubscribe}>Subscribe!</button>
        <div className=" absolute mt-20">
            {showSuccess && <p className="text-success">Subscribed :) Thanks!</p>}
            {showError && <p className="text-error">Sorry, email is invalid!</p>}
        </div>
    </div>
    </>
    )
}