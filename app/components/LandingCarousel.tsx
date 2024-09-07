"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Images {
  id: number;
  image: string;
}

export default function CarouselIndicatorsOutside() {
  const [images, setImages] = useState<Images[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("/api/getLandingCarouselImages", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const responseData = await res.json();
        setImages(responseData.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const itemWidth = carouselRef.current.offsetWidth;
        const index = Math.round(scrollLeft / itemWidth);
        setCurrentIndex(index);
      }
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleIndicatorClick = (index: number) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="flex flex-col lg:hidden">
        {loading && <div className="loading spinner bg-base-200"></div>}
        <div
          ref={carouselRef}
          className=" carousel w-auto h-auto rounded-box my-5 overflow-x-scroll scroll-smooth "
        >
          {images.map((img, index) => (
            <div
              key={img.id}
              id={`item${index + 1}`}
              className="carousel-item w-full justify-center items-center h-full"
            >
              <Image
                priority
                src={"http://api.allscherry.com/assets/" + img.image}
                alt={`Image ${index + 1}`}
                height={350}
                width={350}
                className="rounded-box h-auto w-auto"
              />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`rounded-full w-3 h-5 border border-base-200 ${
                currentIndex === index
                  ? "bg-base-200 text-black"
                  : "bg-base-100"
              }`}
            ></button>
          ))}
        </div>
      </section>
      <section className="hidden lg:flex flex-col">
        {loading && <div className="loading spinner bg-base-200"></div>}
        <div
          ref={carouselRef}
          className=" carousel w-auto h-auto rounded-box my-5 overflow-x-scroll scroll-smooth "
        >
          {images.map((img, index) => (
            <div
              key={img.id}
              id={`item${index + 1}`}
              className="carousel-item w-full justify-center items-center h-full"
            >
              <Image
                priority
                src={"http://api.allscherry.com/assets/" + img.image}
                alt={`Image ${index + 1}`}
                height={500}
                width={500}
                className="rounded-box h-auto w-auto"
              />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`rounded-full w-3 h-5 border border-base-200 ${
                currentIndex === index
                  ? "bg-base-200 text-black"
                  : "bg-base-100"
              }`}
            ></button>
          ))}
        </div>
      </section>
    </>
  );
}
