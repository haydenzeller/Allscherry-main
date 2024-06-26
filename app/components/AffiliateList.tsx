'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

interface Affiliate {
    name: string;
    description: string;
    image: string;
}

export default function AffiliateList() {
    const [affiliates, setAffiliates] = useState<Affiliate[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getAffiliates = async () => {
            try {
                const res = await fetch('/api/getAffiliateList', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    cache: 'no-store'
                });
                if (!res.ok) {
                    throw new Error('Failed to fetch affiliates');
                }
                const responseData = await res.json();
                setAffiliates(responseData.data); // Update the state with fetched data
            } catch (error) {
                console.error('Error fetching affiliates:', error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };
        getAffiliates(); // Call the function to fetch affiliates
    }, []); // Empty dependency array to run the effect only once on component mount

    return (
        <div className="w-full">
            {loading ? (
                <div className="flex flex-col justify-center items-center">
                    <div className="loading spinner bg-base-200"></div>
                </div>
            ) : (
                affiliates.length > 0 ? (
                    <ul className="grid grid-cols-2 gap-4">
                        {affiliates.map((affiliate, index) => (
                            <li key={index} className="flex flex-col items-center space-y-4">
                                <div className="w-48 h-48 relative">
                                    <Image
                                        src={"https://api.allscherry.com/assets/"+affiliate.image}
                                        alt={affiliate.name}
                                        fill
                                        sizes="(max-width: 600px) 480px, 800px"
                                        style={{ objectFit: 'cover' }}  // Instead of objectFit prop
                                        className="rounded-box"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold">{affiliate.name}</h3>
                                    <p>{affiliate.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="w-full absolute">No affiliates available</p>
                )
            )}
        </div>
    );
}
