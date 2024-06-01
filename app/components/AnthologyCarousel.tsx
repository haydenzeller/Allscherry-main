"use client";

import { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";

interface Images {
  id: number;
  image: string;
}

export default function CarouselIndicatorsOutside() {
  const [images, setImages] = useState<Images[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("/api/getAnthologyCarouselImages", {
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
    if (!loading && images.length > 0) {
      const slider = new Glide(".glide-05", {
        type: "carousel",
        focusAt: "center",
        perView: 3,
        autoplay: 3000,
        animationDuration: 700,
        gap: 24,
        classes: {
          swipeable: "glide--swipeable",
          dragging: "glide--dragging",
          direction: {
            ltr: "glide--ltr",
            rtl: "glide--rtl",
          },
          type: {
            slider: "glide--slider",
            carousel: "glide--carousel",
          },
          slide: {
            active: "glide--slide--active",
            clone: "glide--slide--clone",
          },
          arrow: {
            disabled: "glide--arrow--disabled",
          },
          nav: {
            active: "glide__bullet--active",
          },
        },
        breakpoints: {
          1024: {
            perView: 2,
          },
          640: {
            perView: 1,
          },
        },
      }).mount();

      return () => {
        slider.destroy();
      };
    }
  }, [loading, images]);

  return (
    <>
      <div className="glide-05 relative w-full">
        {loading ? (
          <div className="loading spinner bg-base-200"></div>
        ) : (
          <>
            <div className="overflow-hidden" data-glide-el="track">
              <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                {images.map((image) => (
                  <li key={image.id} className="flex justify-center items-center p-2">
                    <Image
                      src={`https://api.allscherry.com/assets/${image.image}`}
                      alt="Carousel Image"
                      width={500}
                      height={500}
                      className="object-cover w-[500px] h-[500px] m-auto rounded-lg"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="flex w-full items-center justify-center gap-2 mt-4"
              data-glide-el="controls[nav]"
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  className="group p-4"
                  data-glide-dir={`=${index}`}
                  aria-label={`goto slide ${index + 1}`}
                >
                  <span className="indicator block h-2 w-2 rounded-full bg-white ring-1 ring-slate-700 transition-colors duration-300"></span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      <style jsx global>{`
        .glide__bullet--active .indicator {
          background-color: #AB7070; /* Pink color */
        }
      `}</style>
    </>
  );
}
