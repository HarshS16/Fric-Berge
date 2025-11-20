import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Products = () => {
  const observer = useRef<IntersectionObserver | null>(null);
  
  // Animation effects for scroll reveal
  useEffect(() => {
    // Create observer
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a staggered effect for child elements
          const delay = entry.target.getAttribute('data-delay') || '0';
          setTimeout(() => {
            // Choose animation based on data attribute or use default
            const animationType = entry.target.getAttribute('data-animation') || 'fade-in-up';
            entry.target.classList.add(`animate-${animationType}`);
            entry.target.classList.remove('opacity-0');
          }, parseInt(delay));
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all elements with animation classes
    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach(el => {
      if (observer.current) {
        observer.current.observe(el);
      }
    });

    // Cleanup
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

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
        servings: "2",
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
      <section className="relative bg-black w-full overflow-hidden animate-on-scroll opacity-0" data-animation="fade-in-up">
        <img src="/Flavours.webp" alt="Hero" className="w-full h-auto object-cover block" />

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
      <section aria-hidden className="bg-white w-full animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="100">
        <div className="h-12 md:h-16 lg:h-24"></div>
      </section>
      <section className="relative bg-black w-full overflow-hidden animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="200">
        <img src="/sauces.webp" alt="Hero" className="w-full h-auto object-cover block" />
      </section>
      <section className="bg-white text-black py-8 md:py-12 lg:py-20 relative overflow-hidden animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="300">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black leading-[0.95] animate-on-scroll opacity-0" data-animation="fade-in-left">
                Bold<br />
                Flavours.<br />
                Smooth<br />
                Finish.
              </h2>
            </div>
            <div className="relative w-full h-auto lg:h-[480px]">
              {/* Container for the two images that stacks them on smaller screens */}
              <div className="relative lg:absolute inset-0 flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-start gap-8 lg:gap-0 lg:pl-8">
                {/* Pizza & Pasta Sauce jar - on top on smaller screens, on left on larger screens */}
                <img
                  src="/ppnew.webp"
                  alt="Pizza & Pasta Sauce jar"
                  className="
                    w-[52%] sm:w-[50%] md:w-[40%] lg:w-[30%]
                    object-contain
                    animate-on-scroll opacity-0 transform transition duration-700 hover:scale-105
                    z-10
                  "
                  data-animation="fade-in-right" data-delay="200"
                />
                {/* Mayonnaise sachet - below on smaller screens, also on left on larger screens */}
                <img 
                  src="/image8.png" 
                  alt="Mayonnaise sachet" 
                  className="
                    w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%] 
                    object-contain 
                    drop-shadow-md 
                    -rotate-6
                    animate-on-scroll opacity-0 transform transition duration-700 hover:scale-105
                    mt-4 lg:-mt-0
                    lg:-translate-x-12
                    z-20 lg:ml-[-20]
                  " 
                  data-animation="fade-in-right" data-delay="300" 
                />

              </div>
              
              {/* Sauce bowl - stick to the right margin of the website */}
              <img 
                src="/nachosauce.webp" 
                alt="Sauce bowl" 
                className="
                  absolute 
                  right-0
                  top-[-20px] sm:top-[-30px] md:top-[-40px] lg:top-[-50px]
                  w-[50%] sm:w-[55%] md:w-[60%] lg:w-[75%] 
                  object-contain 
                  animate-on-scroll opacity-0 transform transition duration-700 hover:scale-105
                  z-0
                " 
                data-animation="fade-in-right" data-delay="100" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative bg-black w-full overflow-hidden animate-on-scroll opacity-0" data-animation="fade-in-up">
        <img src="/canvasauces.webp" alt="Promo Banner" className="w-full h-auto object-cover block" />
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;