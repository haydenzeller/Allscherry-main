'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
interface Images {
    id: number;
    image: string;
}
export default function LandingCarousel() {
    const [images, setImages] = useState<Images[]>([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch('/api/landingCarouselImages', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    cache: 'no-store'
                });
                if (!res.ok) {
                    throw new Error('Failed to fetch products');
                }
                const responseData = await res.json();
                setImages(responseData.data); // Update the state with fetched data
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        getProducts(); // Call the function to fetch products
    }, []); // Empty dependency array to run the effect only once on component mount
    return (
        <>
        <div className="h-auto carousel rounded-box m-8">
            {images.length > 0 ? (
                images.map((image) => (
                    <div key={image.id} className="carousel-item w-full">
                        <Image priority
                        src={'https://api.allscherry.com/assets/' + image.image}
                        alt="Carousel Image"
                        width={1000}
                        height={1000} />
                    </div>
                ))
            ) : (<></>)}
        </div>
        </>
    )
}