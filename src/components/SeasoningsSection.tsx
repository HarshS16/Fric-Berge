import React from "react";

type Product = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

const products: Product[] = [
  {
    id: 3,
    title: "Oregano Seasoning",
    subtitle: "",
    image: "/oregano.webp",
  },
  {
    id: 2,
    title: "Peri Peri Seasoning",
    subtitle: "",
    image: "/periperi.webp",
  },
  {
    id: 1,
    title: "Chilli Flakes",
    subtitle: "",
    image: "/chilliflakes.webp",
  },
];

const SeasoningsSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white px-6 md:px-12 py-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-20"  style={{ fontFamily: "Poppins" }}>
        Authentic Seasonings
      </h2>

      {/* Products Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">

        {products.map((item) => (
          <div key={item.id} className="flex flex-col items-center flex-1">
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full max-w-[350px] h-auto object-contain transition-transform duration-50 hover:scale-[1.5]"
            />

            {/* Text Below Image */}
            <p className="text-center mt-4 text-lg leading-tight font-medium">
              {item.title} <br /> {item.subtitle}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default SeasoningsSection;