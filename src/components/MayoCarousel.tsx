import React, { useState, useEffect, useRef } from "react";

type Product = {
  id: number;
  name: string;
  image: string;
};

const originalProducts: Product[] = [
  { id: 1, name: "Mayonnaise Herbs & Garlic", image: "/Herbs&Garlic.png" },
  { id: 2, name: "Tandoori Mayonnaise", image: "/Tandoori.png" },
  { id: 3, name: "Mayonnaise Jalapeno Cheese", image: "/CheesyDip(Jalapeno).png" },
  { id: 4, name: "Coriander Mint Mayonnaise", image: "/KebabDip(Mint).png" },
  { id: 5, name: "Pure Veg Mayonnaise", image: "/PureVeg.png" },
  { id: 6, name: "Tangy Cucumber Mayonnaise", image: "/TangyCucumber.png" }

];


const ITEMS_PER_VIEW = 4;

const MayoCarousel: React.FC = () => {
  // For infinite looping (tail + real + head)
  const products = [
    ...originalProducts.slice(-ITEMS_PER_VIEW),
    ...originalProducts,
    ...originalProducts.slice(0, ITEMS_PER_VIEW),
  ];

  const [index, setIndex] = useState(ITEMS_PER_VIEW);
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Dynamically detect card width
  useEffect(() => {
    if (trackRef.current && trackRef.current.children.length > 0) {
      const firstCard = trackRef.current.children[0] as HTMLElement;

      // Adding +1px buffer prevents subpixel visibility issues
      setCardWidth(firstCard.offsetWidth + 24 + 1);
    }
  }, []);

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

  const next = () => isTransitioning && setIndex((prev) => prev + 1);
  const prev = () => isTransitioning && setIndex((prev) => prev - 1);

  return (
    <section className="w-full bg-black text-white px-6 md:px-12 pt-10 pb-14 relative">

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">Mayo based</h2>
        <h3 className="text-3xl md:text-4xl font-bold leading-tight">Sauces, Spreads and Dips</h3>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center">

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-0 z-10 w-12 h-12 rounded-full border-2 border-white text-white flex items-center justify-center text-xl hover:bg-white hover:text-black transition"
        >
          ←
        </button>

        {/* Track Wrapper */}
        <div className="overflow-hidden w-full py-20">
          <div
            ref={trackRef}
            className="flex gap-8"
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
                className="min-w-[calc(25%-24px)] w-[calc(25%-24px)] flex flex-col items-center flex-shrink-0 relative hover:z-50"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-72 h-80 object-contain transition-transform duration-450 hover:scale-[1.4]"
                />
                <p className="text-center mt-5 font-semibold leading-tight text-lg">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 z-10 w-12 h-12 rounded-full border-2 border-white text-white flex items-center justify-center text-xl hover:bg-white hover:text-black transition"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default MayoCarousel;
