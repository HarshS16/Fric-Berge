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
      
      {/* Add these keyframes to your global CSS or tailwind.config.js */}
      <style>
        {`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-150px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(150px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(150px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeZoomIn {
          from {
            opacity: 0;
            transform: scale(0.6);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-left {
          animation: fadeInLeft 1.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 1.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }

        .animate-fade-zoom-in {
          animation: fadeZoomIn 1.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }

        .animate-on-scroll {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        `}
      </style>
      
      {/* Hero Section - full-bleed image */}
      <section className="relative bg-black w-full overflow-hidden animate-on-scroll opacity-0" data-animation="fade-in-up">
        <img src="/Flavours.webp" alt="Hero" className="w-full h-auto object-cover block transform transition duration-1000 hover:scale-105" />
      </section>
      
      <section aria-hidden className="bg-white w-full animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="100">
        <div className="h-12 md:h-16 lg:h-24"></div>
      </section>
      
      <section className="relative bg-black w-full overflow-hidden animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="200">
        <img src="/sauces.webp" alt="Hero" className="w-full h-auto object-cover block transform transition duration-1000 hover:scale-105" />
      </section>
      
      <section className="bg-white text-black py-8 md:py-12 lg:py-20 relative overflow-visible animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="300">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 animate-on-scroll opacity-0" data-animation="fade-in-left" data-delay="100">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black leading-[0.95] animate-on-scroll opacity-0" data-animation="fade-in-left">
                Bold<br />
                Flavours.<br />
                Smooth<br />
                Finish.
              </h2>
            </div>

            <div className="relative w-full lg:h-[550px] animate-on-scroll opacity-0" data-animation="fade-in-right" data-delay="200">
              {/* Image container */}
              <div className="relative lg:absolute inset-0 flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-start gap-8 lg:gap-0 lg:pl-8">
                {/* JAR IMAGE */}
                <img
                  src="/ppnew.webp"
                  alt="Pizza & Pasta Sauce jar"
                  className="
                    w-[55%] sm:w-[50%] md:w-[45%] lg:w-[45%]
                    object-contain
                    animate-on-scroll opacity-0 transform transition duration-700 hover:scale-110
                    z-10
                    mr-auto
                    -translate-x-6 sm:-translate-x-10 md:-translate-x-16 lg:-translate-x-20
                    mt-6
                  "
                  data-animation="fade-in-right"
                  data-delay="300"
                />
              </div>

              {/* SAUCE BOWL */}
              <img
                src="/fric-nacho-sauce.webp"
                alt="Sauce bowl"
                className="
                  absolute 
                  right-0
                  top-[-10px] sm:top-[-20px] md:top-[-30px] lg:top-[20px]
                  w-[300%] sm:w-[55%] md:w-[60%] lg:w-[355%]
                  object-contain 
                  animate-on-scroll opacity-0 transform transition duration-700 hover:scale-110
                  z-0
                "
                data-animation="fade-in-right"
                data-delay="400"
              />
            </div>
          </div>
        </div>
      </section>

     
      {/* CTA Section */}
      <section className="relative bg-black w-full overflow-hidden animate-on-scroll opacity-0" data-animation="fade-in-up">
        <img src="/canvasauces.webp" alt="Promo Banner" className="w-full h-auto object-cover block transform transition duration-1000 hover:scale-105" />
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;