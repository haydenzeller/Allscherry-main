'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

interface FeaturedProducts {
    name: string;
    image: string;
}

export default function FeaturedProductsList() {
    const [featuredProducts, setFeaturedProducts] = useState<FeaturedProducts[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const getfeaturedProducts = async () => {
            try {
                const res = await fetch('/api/getFeaturedProducts', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    cache: 'no-store'
                });
                if (!res.ok) {
                    throw new Error('Failed to fetch featuredProducts');
                }
                const responseData = await res.json();
                setFeaturedProducts(responseData.data); // Update the state with fetched data
            } catch (error) {
                console.error('Error fetching featuredProducts:', error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };
        getfeaturedProducts(); // Call the function to fetch featuredProducts
    }, []); // Empty dependency array to run the effect only once on component mount

    return (
        <div className="w-full">
            {loading ? (
                <div className="flex flex-col justify-center items-center">
                    <div className="loading spinner bg-base-200"></div>
                </div>
            ) : (
                featuredProducts.length > 0 ? (
                    <ul className="grid grid-cols-2 gap-4">
                        {featuredProducts.map((product, index) => (
                            <li key={index} className="flex flex-col items-center space-y-4">
                                <div className="w-48 h-48 relative">
                                    <Image
                                        src={"https://api.allscherry.com/assets/"+product.image}
                                        alt={product.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold">{product.name}</h3>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="w-full  mb-14">No featured products available</p>
                )
            )}
        </div>
    );
}
