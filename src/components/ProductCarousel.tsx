import React from "react";
import { CircularCarousel, FlipCard } from "@/components/CircularCarousel";

const images = [
  "/sandwich-spread.png",
  "/pizzapastanew.png",
  "/mayosachet.png",
  "/tandoorimayo.png",
  "/mayo11.png",
  "/sandwich-spread.png",
  "/pizzapastanew.png",
  "/Mayo.png",
  "/tandoorimayo.png",
  "/mayo11.png",
];

export function ProductCarousel() {
  return (
    <div className="w-full min-h-[30rem] overflow-hidden flex items-center justify-center">
      <CircularCarousel>
        {images.map((url, i) => (
          <FlipCard
            key={i}
            img={url}
            text="This is a product description. You can add anything here, features, details, price etc."
          />
        ))}
      </CircularCarousel>
    </div>
  );
}