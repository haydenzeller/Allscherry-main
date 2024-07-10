'use client'
import { useState } from "react"
export default function SubscribeBox({showOrbs = true}) {
    const [email, setEmail] = useState("");
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubscribe = async () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email !== "") {
            if (emailRegex.test(email)) {
                try {
                    setIsLoading(true);
                    const res = await fetch('api/newsletterSubscribe', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: email,
                        }),
                    });
                    if (res.status === 200) {
                        // Handle success (e.g., show a success message)
                        setShowError(false);
                        setIsLoading(false);
                        setShowSuccess(true);
                    } else {
                        // Handle other status codes (e.g., show an error message)
                        console.error('Error subscribing:', res.statusText);
                        setShowError(true);
                        setShowSuccess(false);
                        setIsLoading(false);
                    }
                } catch (error) {
                    console.error('Network error:', error);
                    setShowError(true);
                    setShowSuccess(false);
                    setIsLoading(false);
                }
            } else {
                // Invalid email format
                setShowError(true);
                setShowSuccess(false);
                setIsLoading(false);
            }
        } else {
            // Empty email
            setShowError(true);
            setShowSuccess(false);
            setIsLoading(false);
        }
    };
    return (
    <section>
        <div className="mt-10 flex flex-row gap-2 justify-center items-center">
            {showOrbs && <div className="bg-white w-12 h-12 rounded-full" /> }
            <input className="rounded-2xl input w-60 bg-white input-md text-black text-center" placeholder="Subscribe for Updates!" onChange={e => {setEmail(e.target.value); setShowError(false); setShowSuccess(false)}}/>
            {showOrbs && <div className="bg-white w-12 h-12 rounded-full" /> }
        </div>
        <div className="flex flex-col justify-center items-center">
            <div>
                <button className="bg-primary mt-5 text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center shadow active:translate-y-0.5 active:shadow-none active:border-b-0 active:mt-6" onClick={handleSubscribe}>Subscribe!</button>
            </div>
            <div className="absolute mt-24">
                {showSuccess && <p className="text-success">Subscribed :) Thanks!</p>}
                {showError && <p className="text-error">Sorry, email is invalid!</p>}
                {isLoading && <p className="loading loading-spinner bg-base-300"/>}
            </div>
        </div>
    </section>
    )
}