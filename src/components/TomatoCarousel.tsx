import React, { useState, useEffect, useRef } from "react";

type Product = {
  id: number;
  name: string;
  image: string;
};

const originalProducts: Product[] = [
  { id: 1, name: "Pizza & Pasta Sauce", image: "/pizzasauce.webp" },
  { id: 2, name: "Schezwan Sauce", image: "/schezwan.webp" },
  { id: 3, name: "Hot Kimchi Sauce", image: "/kimchi.webp" },
  { id: 4, name: "Salsa Dip", image: "/salsadip.webp" },
  { id: 5, name: "Garlic Chilli Sauce", image: "/garlicchilli.webp" },
];

const ITEMS_PER_VIEW = 3;

const TomatoCarousel: React.FC = () => {
  // Duplicate list: tail + original + head (infinite loop trick)
  const products = [
    ...originalProducts.slice(-ITEMS_PER_VIEW),
    ...originalProducts,
    ...originalProducts.slice(0, ITEMS_PER_VIEW),
  ];

  const [index, setIndex] = useState(ITEMS_PER_VIEW);
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Detect card width dynamically
  useEffect(() => {
    if (trackRef.current && trackRef.current.children.length > 0) {
      const firstCard = trackRef.current.children[0] as HTMLElement;
      setCardWidth(firstCard.offsetWidth + 24); // gap-6 = 24px
    }
  }, []);

  // Infinite loop reset
  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    if (index >= originalProducts.length + ITEMS_PER_VIEW) {
      setIndex(ITEMS_PER_VIEW);
    }

    if (index < ITEMS_PER_VIEW) {
      setIndex(originalProducts.length + ITEMS_PER_VIEW - 1);
    }

    setTimeout(() => setIsTransitioning(true), 10);
  };

  const next = () => {
    if (isTransitioning) setIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (isTransitioning) setIndex((prev) => prev - 1);
  };

  return (
    <section className="w-full bg-black text-white px-6 md:px-12 py-12 space-y-8 relative">
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
        `}
      </style>

      {/* Header */}
      <div className="animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Tomato based
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold leading-tight">
          Sauces, Spreads and Dips
        </h3>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-0 z-10 w-12 h-12 rounded-full border-2 border-white text-white flex items-center justify-center text-xl
                     hover:bg-white hover:text-black transition"
        >
          ←
        </button>

        {/* Track Wrapper */}
        <div className="overflow-hidden w-full px-20">
          <div
            ref={trackRef}
            className="flex gap-6"
            style={{
              transform: `translateX(-${index * cardWidth}px)`,
              transition: isTransitioning
                ? "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)"
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {products.map((product, i) => (
              <div
                key={`${product.id}-${i}`}
                className="min-w-[260px] flex flex-col items-center flex-shrink-0"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-48 object-contain transition-transform duration-150 hover:scale-[1.15]"
                />
                <p className="text-center mt-3 font-medium leading-tight text-sm">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 z-10 w-12 h-12 rounded-full border-2 border-white text-white flex items-center justify-center text-xl
                     hover:bg-white hover:text-black transition"
        >
          →
        </button>
      </div>

    </section>
  );
};

export default TomatoCarousel;
