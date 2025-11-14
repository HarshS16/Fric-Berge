import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Products = () => {
  // Hero Section Images with animation states
  const images = [
    { src: "/image 29.png", alt: "Pizza & Pasta Sauce", delay: "0" },
    { src: "/tandoorimayo.png", alt: "Mayonnaise", delay: "100" },
    { src: "/Mayo.png", alt: "Tandoori Mayonnaise", delay: "200" },
    { src: "/image 29.png", alt: "White Sauce", delay: "300" },
  ];

  const products = {
    mayonnaise: [
      {
        name: "Classic Mayonnaise",
        description: "Pure vegetarian emulsified sauce",
        mrp: "₹10",
        weight: "36g",
        servings: "2",
        image: "/placeholder-image20.jpg",
      },
      {
        name: "Coriander Mint Mayonnaise",
        description: "Dip and spread emulsified sauce",
        mrp: "₹10",
        weight: "36g",
        servings: "2",
        image: "/placeholder-image21.jpg",
      },
      {
        name: "5 Servings Pack",
        description: "Pure vegetarian mayonnaise",
        mrp: "₹25",
        weight: "90g",
        servings: "5",
        image: "/placeholder-image22.jpg",
      },
    ],
    sauces: [
      {
        name: "Pizza & Pasta Sauce",
        description: "Pure vegetarian sauce",
        mrp: "₹10",
        weight: "36g",
        servings: "2",
        image: "/image 29.png",
      },
      {
        name: "Tomato Ketchup",
        description: "Premium quality ketchup",
        mrp: "₹10",
        weight: "36g",
        servings: "2",
        image: "/placeholder-image24.jpg",
      },
      {
        name: "Hot & Spicy Sauce",
        description: "For the spice lovers",
        mrp: "₹10",
        weight: "36g",
        servings: "2",
        image: "/placeholder-image25.jpg",
      },
    ],
    spreads: [
      {
        name: "Classic Sandwich Spread",
        description: "No onion, no garlic",
        mrp: "₹10",
        weight: "36g",
        servings: "2",
        image: "/placeholder-image26.jpg",
      },
      {
        name: "Tangy Sandwich Spread",
        description: "Tangy flavor",
        mrp: "₹10",
        weight: "36g",
        servings: "2",
        image: "/placeholder-image27.jpg",
      },
      {
        name: "Cucumber Spread",
        description: "Fresh cucumber flavor",
        mrp: "₹10",
        weight: "36g",
        servings: "2",
        image: "/placeholder-image28.jpg",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section - full-bleed image */}
      <section className="relative bg-black w-full overflow-hidden">
        <img src="/bg.jpg" alt="Hero" className="w-full h-auto object-cover block" />

        {/**
         * Original hero content commented out for reference:
         *
         * <div className="absolute top-0 left-0 w-full">
         *   <img src="/orange.png" alt="" className="w-full object-cover h-[200px]" ... />
         * </div>
         *
         * <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
         *   <div className="flex flex-col items-start">
         *     <h1 className="text-6xl lg:text-8xl font-black text-white mb-8">Flavours<br />Gone Wild</h1>
         *     <div className="relative w-full h-[500px] mt-12"> ... images map ... </div>
         *   </div>
         * </div>
         *
         * <style jsx>{`@keyframes fadeInSlide { ... }`}</style>
         */}
      </section>
      <section aria-hidden className="bg-white w-full">
        <div className="h-16 md:h-24 lg:h-32"></div>
      </section>
<section className="relative bg-black w-full overflow-hidden">
        <img src="/bunner2.png" alt="Hero" className="w-full h-auto object-cover block" />
      </section>
      <section className="bg-white text-black py-12 lg:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-7xl font-black leading-[0.95]">
                Bold<br />
                Flavours.<br />
                Smooth<br />
                Finish.
              </h2>
            </div>
            <div className="relative w-full h-[380px] lg:h-[480px]">
              <img src="/nachosauce.png" alt="Sauce bowl" className="absolute right-[-16px] lg:right-[-92px] top-[-50] w-[70%] lg:w-[75%] object-contain" />
              {/* <img src="/nacho.png" alt="Nacho chip" className="absolute right-8 -top-6 w-[35%] lg:w-[38%] rotate-[10deg]" /> */}
              <img src="/image 29.png" alt="Pizza & Pasta Sauce jar" className="absolute left-[-24px] lg:left-[-100px] bottom-4 w-[108%] lg:w-[96%] object-contain drop-shadow-xl" />
              <img src="/image8.png" alt="Mayonnaise sachet" className="absolute left-[-24px] lg:left-[-280px] bottom-16 w-[84%] lg:w-[72%] object-contain drop-shadow-md -rotate-6" />
            </div>
          </div>
        </div>
      </section>
      {/* Products Section */}
      {/* CTA Section */}
      <section className="relative bg-black w-full overflow-hidden">
        <img src="/bunn.png" alt="Promo Banner" className="w-full h-auto object-cover block" />
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
