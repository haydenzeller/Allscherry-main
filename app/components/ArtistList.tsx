'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

interface artist {
    name: string;
    description: string;
    image: string;
}

export default function ArtistList() {
    const [artists, setArtists] = useState<artist[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getArtists = async () => {
            try {
                const res = await fetch('/api/getArtistList', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    cache: 'no-store'
                });
                if (!res.ok) {
                    throw new Error('Failed to fetch artists');
                }
                const responseData = await res.json();
                setArtists(responseData.data); // Update the state with fetched data
            } catch (error) {
                console.error('Error fetching artists:', error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };
        getArtists(); // Call the function to fetch artists
    }, []); // Empty dependency array to run the effect only once on component mount

    return (
        <div className="w-full">
            {loading ? (
                <div className="flex flex-col justify-center items-center">
                    <div className="loading spinner bg-base-200"></div>
                </div>
            ) : (
                artists.length > 0 ? (
                    <ul className="grid grid-cols-2 gap-4">
                        {artists.map((artist, index) => (
                            <li key={index} className="flex flex-col items-center space-y-4">
                                <div className="w-48 h-48 relative">
                                    <Image
                                        src={"https://api.allscherry.com/assets/"+artist.image}
                                        alt={artist.name}
                                        fill
                                        sizes="(max-width: 600px) 480px, 800px"
                                        style={{ objectFit: 'cover' }}  // Instead of objectFit prop
                                        className="rounded-box"
                                    />
                                </div>
                                <div className="bg-white rounded-xl text-black p-2 w-48">
                                    <h3 className="font-bold">{artist.name}</h3>
                                    <p>{artist.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="w-full absolute">No artists available</p>
                )
            )}
        </div>
    );
}

