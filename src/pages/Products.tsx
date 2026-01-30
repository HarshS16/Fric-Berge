import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MayoCarousel from "@/components/MayoCarousel";
import TomatoCarousel from "@/components/TomatoCarousel";
import SeasoningsSection from "@/components/SeasoningsSection";

const Products = () => {
  const observer = useRef<IntersectionObserver | null>(null);
  
  // Scroll to section on hash change
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Trigger on component mount and when hash changes
    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);
  
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
      <section className="relative bg-black w-full overflow-hidden animate-on-scroll opacity-0" data-animation="fade-zoom-in">
        <img src="/herobanner.webp" alt="Hero" className="w-full h-auto object-cover block transform transition duration-1000 hover:scale-105" />
      </section>
      
      <section id="mayonnaise">
        <MayoCarousel />
      </section>
      
      <section className="relative bg-black w-full overflow-hidden animate-on-scroll opacity-0" data-animation="fade-zoom-in" data-delay="100">
        <img src="/banner-products.png" alt="Hero" className="w-full h-auto object-cover block transform transition duration-1000 hover:scale-105" />
      </section>
      
      {/* <section className="relative bg-black w-full overflow-hidden animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="200">
        <img src="/sauces.webp" alt="Hero" className="w-full h-auto object-cover block transform transition duration-1000 hover:scale-105" />
      </section> */}
      
    
     
      <section id="sauces">
        <TomatoCarousel />
      </section>
      <section className="relative bg-black w-full overflow-hidden animate-on-scroll opacity-0" data-animation="fade-zoom-in" data-delay="100">
        <img src="/2.webp" alt="Hero" className="w-full h-auto object-cover block transform transition duration-1000 hover:scale-105" />
      </section>
      <section id="seasonings">
        <SeasoningsSection />
      </section>
      {/* CTA Section */}
      {/* <section className="relative bg-black w-full overflow-hidden animate-on-scroll opacity-0" data-animation="fade-in-up">
        <img src="/canvasauces.webp" alt="Promo Banner" className="w-full h-auto object-cover block transform transition duration-1000 hover:scale-105" />
      </section> */}
      
      <Footer />
    </div>
  );
};

export default Products;