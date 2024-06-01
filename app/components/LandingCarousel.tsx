'use client'
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface ImageData {
    id: number;
    image: string;
}

export default function LandingCarousel() {
    const [images, setImages] = useState<ImageData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const touchStartXRef = useRef<number | null>(null);

    useEffect(() => {
        const getImages = async () => {
            try {
                const res = await fetch('/api/getLandingCarouselImages', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    cache: 'no-store'
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch images');
                }

                const responseData = await res.json();
                setImages(responseData.data);
            } catch (error) {
                console.error('Error fetching images:', error);
                setError('Failed to fetch images. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        getImages();
    }, []);

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        touchStartXRef.current = event.touches[0].clientX;
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        if (touchStartXRef.current === null) return;
        const touchMoveX = event.touches[0].clientX;
        const diff = touchStartXRef.current - touchMoveX;

        if (Math.abs(diff) > 50) {
            setActiveIndex((prevIndex) => {
                const newIndex = diff > 0 ? prevIndex + 1 : prevIndex - 1;
                return newIndex < 0 ? images.length - 1 : newIndex % images.length;
            });
            touchStartXRef.current = null;
        }
    };

    return (
        <div className="relative">
            <div
                ref={containerRef}
                className="relative flex items-center justify-center w-full h-80 overflow-hidden" // Set a fixed height here (e.g., h-80)
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                {loading ? (
                    <div className="flex items-center justify-center w-full h-full">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
                    </div>
                ) : error ? (
                    <div className="text-red-500">{error}</div>
                ) : (
                    images.map((image, index) => (
                        <div
                            key={image.id}
                            className={`absolute inset-0 transition-opacity duration-500 ${
                                index === activeIndex ? "opacity-100" : "opacity-0"
                            }`}
                            style={{ zIndex: index === activeIndex ? 1 : 0 }}
                        >
                            <Image
                                src={`https://api.allscherry.com/assets/${image.image}`}
                                alt="Anthology Image"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    ))
                )}
            </div>
            <div className="flex justify-center mt-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${
                            index === activeIndex ? "bg-base-200" : "bg-white"
                        }`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}
