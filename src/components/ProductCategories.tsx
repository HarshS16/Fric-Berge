import React from "react";
import { Link } from "react-router-dom";



type CategoryCardProps = {

  title: string;

  subtitle?: string;

  image: string;

};



const CategoryCard: React.FC<CategoryCardProps> = ({ title, subtitle, image }) => {

  return (

    <div className="bg-black text-white rounded-3xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200">

      <div>

        <h2 className="text-xl font-semibold leading-tight">{title}</h2>

        {subtitle && (

          <h3 className="text-xl font-semibold leading-tight">{subtitle}</h3>

        )}

      </div>



      <img

        src={image}

        alt={title}

        className="w-80 mx-auto my-6 object-contain transition-transform duration-500 ease-out hover:scale-120 sm:hover:scale-130 md:hover:scale-150 hover:rotate-[-15deg] sm:hover:rotate-[-20deg] md:hover:rotate-[-25deg]"

      />



      <Link to="/products" className="flex items-center gap-2 text-white mt-2">

        <span className="text-lg">Explore Now</span>

        <span className="text-xl">➜</span>

      </Link>

    </div>

  );

};



const ProductCategories: React.FC = () => {

  return (

    <section className="w-full px-4 md:px-10 lg:px-16 py-12 space-y-10">



      {/* Top Two Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <CategoryCard

          title="Mayo based"

          subtitle="Sauces, Spreads & Dips"

          image="/whitemayo.webp"

        />



        <CategoryCard

          title="Tomato based"

          subtitle="Sauces, Spreads & Dips"

          image="/pizzasauce.webp"

        />

      </div>



      {/* Seasonings Section */}

      <div className="bg-black text-white rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-200">

        <h2 className="text-xl font-semibold leading-tight mb-4">

          Authentic Seasonings

        </h2>



        <div className="flex flex-col md:flex-row gap-2 w-full">

          <div className="flex flex-col gap-1 md:items-start md:w-1/4">

            <Link to="/products" className="flex items-center gap-2 text-white">

              <span className="text-lg">Explore Now</span>

              <span className="text-xl">➜</span>

            </Link>

          </div>



          {/* Second Column - Chilli Flakes Image */}

          <div className="md:w-1/4 flex justify-center md:justify-start items-center">

            <img

              src="/chilliflakes.webp"

              alt="Chilli Flakes"

              className="w-56 object-contain hover:scale-[1.5] transition-transform duration-450"

            />

          </div>

          

          {/* Third Column - Peri Peri Image */}

          <div className="md:w-1/4 flex justify-center md:justify-start items-center">

            <img

              src="/periperi.webp"

              alt="Peri Peri"

              className="w-56 object-contain hover:scale-[1.5] transition-transform duration-450"

            />

          </div>

          

          {/* Fourth Column - Oregano Image */}

          <div className="md:w-1/4 flex justify-center md:justify-start items-center">

            <img

              src="/oregano.webp"

              alt="Oregano"

              className="w-56 object-contain hover:scale-[1.5] transition-transform duration-450"

            />

          </div>

        </div>

      </div>

    </section>

  );

};



export default ProductCategories;