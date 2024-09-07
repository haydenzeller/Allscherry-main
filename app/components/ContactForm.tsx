'use client'
import { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile'
import React from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [cloudflareStatus, setCloudflareStatus] = useState("")

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email !== "") {
            if (emailRegex.test(email)) {
                try {
                    setIsLoading(true);
                    const res = await fetch('/api/submitContact', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: email,
                            name: name,
                            message: message
                        }),
                    });
                    if (res.ok) {
                        setShowError(false);
                        setShowSuccess(true);
                        setName('');
                        setEmail('');
                        setMessage('');
                    } else {
                        console.error('Error submitting contact form:', res.statusText);
                        setErrorMessage('Error submitting form, please try again.');
                        setShowError(true);
                        setShowSuccess(false);
                    }
                } catch (error) {
                    console.error('Network error:', error);
                    setErrorMessage('Network error, please try again later.');
                    setShowError(true);
                    setShowSuccess(false);
                } finally {
                    setIsLoading(false);
                }
            } else {
                setErrorMessage('Invalid email format.');
                setShowError(true);
                setShowSuccess(false);
            }
        } else {
            setErrorMessage('Email is required.');
            setShowError(true);
            setShowSuccess(false);
        }
    };
    const key = process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY || "";

    return (
        <form 
            onSubmit={handleSubmit} 
            className="flex flex-col justify-center items-center lg:w-1/2 text-black"
        >
            <input 
                type="text"
                placeholder="What's your name?" 
                aria-label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input text-xl bg-white w-full m-5 lg:h-20 rounded-2xl"
            />
            <input 
                type="email"
                placeholder="What's your email?" 
                aria-label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input text-xl bg-white w-full m-5 lg:h-20 rounded-2xl"
            />
            <textarea 
                placeholder="What's the reason for your email? Be nice!" 
                aria-label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="textarea lg:text-lg bg-white w-full m-5 rounded-2xl h-32"
            />

            <Turnstile  className="cf-turnstile" siteKey={key} onSuccess={() => setCloudflareStatus('solved')}  />
            {cloudflareStatus == 'solved' && 
                <div>
                    <button 
                        type="submit"
                        className="bg-primary mt-5 text-black p-1 border-b-accent border-b-4 rounded-2xl block w-28 text-center shadow active:translate-y-0.5 active:shadow-none active:border-b-0 active:mt-6"
                    >
                        Submit!
                    </button>
                </div>
            }
           <div className="flex flex-col justify-center items-center mt-0 mb-4">
                <div className="absolute mt-20">
                    {showSuccess && <p className="text-success">Submitted successfully! Thank you :)</p>}
                    {showError && <p className="text-error">{errorMessage}</p>}
                    {isLoading && <p className="loading loading-spinner bg-base-300"></p>}
                </div>
            </div>
        </form>
    );
}
