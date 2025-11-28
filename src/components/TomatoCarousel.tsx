import React, { useRef } from "react";

type Product = {
  id: number;
  name: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Pizza & Pasta Sauce",
    image: "/pizzasauce.webp",
  },
  {
    id: 2,
    name: "Schezwan Sauce",
    image: "/schezwan.webp",
  },
  {
    id: 3,
    name: "Hot Kimchi Sauce",
    image: "/kimchi.webp",
  },
  {
    id: 4,
    name: "Salsa Dip",
    image: "/salsadip.webp",
  },
  {
    id: 5,
    name: "Garlic Chilli Sauce",
    image: "/garlicchilli.webp",
  },
];

const TomatoCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-black text-white px-6 md:px-12 py-12 space-y-8 relative">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Tomato based
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight">
            Sauces, Spreads and Dips
          </h3>
        </div>
      </div>

      {/* Arrow Button */}
      <button
        onClick={scrollRight}
        className="absolute right-6 md:right-12 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full border border-white flex items-center justify-center text-2xl hover:bg-white hover:text-black transition z-10"
      >
        →
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto scroll-smooth no-scrollbar py-4"
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[180px] flex flex-col items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-48 object-contain transition-transform duration-100 hover:scale-[1.3]"
            />
            <p className="text-center mt-3 font-medium leading-tight">
              {product.name}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default TomatoCarousel;