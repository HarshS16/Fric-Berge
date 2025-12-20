import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ProductCarousel } from "@/components/ProductCarousel";
import ProductCategories from "@/components/ProductCategories";

const Index = () => {
  const [activeTestimonial, setActiveTestimonial]  = React.useState(0);
  const observer = useRef<IntersectionObserver | null>(null);

  // Animation effects for scroll reveal
  useEffect(() => {
    // Create observer
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a staggered effect for child elements
            const delay = entry.target.getAttribute("data-delay") || "0";
            setTimeout(() => {
              // Choose animation based on data attribute or use default
              const animationType =
                entry.target.getAttribute("data-animation") || "fade-in-up";
              entry.target.classList.add(`animate-${animationType}`);
              entry.target.classList.remove("opacity-0");
            }, parseInt(delay));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all elements with animation classes
    const hiddenElements = document.querySelectorAll(".animate-on-scroll");
    hiddenElements.forEach((el) => {
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

  const testimonials = [
    {
      text: "The sauces taste incredibly fresh and balanced. You can tell they're made with real ingredients, not shortcuts. Fric Bergen has become a staple in my kitchen.",
      author: "Rohan Mehta, Mumbai",
    },
    {
      text: "I tried the dips for a small house party and everyone kept asking where they were from. Creamy, flavourful, and not overpowering. Perfect with snacks.",
      author: "Ananya Sharma, Delhi",
    },
    {
      text: "Finally found sauces that complement Indian food instead of masking it. Whether it's sandwiches or quick stir-fries, Fric Bergen just fits in naturally.",
      author: "Kunal Bansal, Gurugram",
    },
    {
      text: "The quality really stands out. You don't need a lot to get great flavour, which says a lot about how well the products are made.",
      author: "Pooja Malhotra, Chandigarh",
    },
    {
      text: "Their dips have become a weekend ritual at home. Easy to serve, great taste, and loved by both kids and adults.",
      author: "Shweta Kulkarni, Pune",
    },
    {
      text: "You can genuinely taste the craftsmanship in these products. Fric Bergen feels premium without being pretentious.",
      author: "Aman Khanna, Noida",
    },
  ];

  const products = [
    { id: 1, name: "Sandwich Spread", image: "/sandwich-spread.png" },
    { id: 2, name: "Pizza and Pasta Sauce", image: "/pizzapastanew.png" },
    { id: 3, name: "Mayonnaise", image: "/Mayo.png" },
    { id: 4, name: "Tandoori Mayonnaise", image: "/tandoorimayo.png" },
    { id: 5, name: "Coriander Mint Mayonnaise", image: "/mayo11.png" },
  ];

  const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(
    null
  );
  const [current, setCurrent] = React.useState(0);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  // Auto-slide functionality
  React.useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 3000); // Auto-slide every 3 seconds

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [carouselApi]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 lg:py-20">
        <div className="flex flex-col md:flex-row gap-12 sm:gap-20 md:gap-24 items-center justify-center">
          <div
            className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-xs lg:max-w-sm animate-on-scroll opacity-0"
            data-animation="fade-in-up"
            data-delay="100"
          >
            <img
              src="/mayosachet.png"
              alt="Mayonnaise Sachet"
              className="w-full h-auto object-contain transform transition-all duration-700 hover:scale-110 sm:hover:scale-125 md:hover:scale-140 lg:hover:scale-160 hover:-rotate-2 sm:hover:-rotate-4 md:hover:-rotate-8 hover:translate-y-[-10px] sm:hover:translate-y-[-15px] md:hover:translate-y-[-25px] lg:hover:translate-y-[-35px] "
            />
          </div>
          <div
            className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-xs lg:max-w-sm animate-on-scroll opacity-0"
            data-animation="fade-in-up"
            data-delay="300"
          >
            <img
              src="/image9.svg"
              alt="Coriander Mint"
              className="w-full h-auto object-contain transform transition-all duration-700 hover:scale-110 sm:hover:scale-125 md:hover:scale-140 lg:hover:scale-160 hover:rotate-2 sm:hover:rotate-4 md:hover:rotate-8 hover:translate-y-[-10px] sm:hover:translate-y-[-15px] md:hover:translate-y-[-25px] lg:hover:translate-y-[-35px] "
            />
          </div>
        </div>
      </section>

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

      {/* Brand Statement */}
      <section
        className="bg-white text-black py-12 md:py-16 lg:py-24 relative overflow-hidden animate-on-scroll opacity-0"
        data-animation="fade-in-up"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* LEFT TEXT COLUMN */}
            <div className="space-y-4 md:space-y-6 z-10 relative">
              <div
                className="inline-block bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-lg animate-on-scroll opacity-0"
                data-animation="fade-in-left"
                data-delay="100"
              >
                <p className="text-sm md:text-lg lg:text-xl font-bold tracking-wide uppercase">
                  THE PERFECT BLEND OF
                </p>
              </div>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight font-oswald animate-on-scroll opacity-0"
                data-animation="fade-zoom-in"
                data-delay="200"
              >
                <b>TASTE &</b> <br />
                <b>FLAVOUR</b>
              </h1>
            </div>

            {/* RIGHT IMAGE + BLACK CIRCLE */}
            <div className="relative flex justify-center lg:justify-end items-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px]">
              {/* Black Circle */}
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2
          w-[250px] sm:w-[350px] md:w-[500px] lg:w-[650px] h-[250px] sm:h-[350px] md:h-[500px] lg:h-[650px]
          bg-black rounded-full
          -mr-[60px] sm:-mr-[90px] md:-mr-[120px] lg:-mr-[10px] z-0"
              ></div>

              {/* Sandwich Pouch Image */}
              <img
                src="/sandwich-spread.png"
                alt="Sandwich Spread Pouch"
                className="
    absolute 
    top-1/2 -translate-y-1/2
    right-[20px] sm:right-[40px] md:right-[60px] lg:right-[110px]
    w-[200px] sm:w-[280px] md:w-[360px] lg:w-[500px]   /* increased size */
    rotate-[10deg]
    object-contain
    z-10

    transition-transform duration-500 ease-out
    hover:scale-120 sm:hover:scale-130 md:hover:scale-150 hover:rotate-[-15deg] sm:hover:rotate-[-20deg] md:hover:rotate-[-25deg] 
  "
              />
            </div>
          </div>
        </div>
      </section>
      {/* Product Range */}
      <section className="w-full py-12 md:py-16 lg:py-24 animate-on-scroll opacity-0">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-black leading-tight font-oswald mb-8 md:mb-12 animate-on-scroll opacity-0 mb-15"
            data-animation="fade-in-up"
            data-delay="100"
          >
            <b>EXPLORE OUR</b> <br />
            <b>PRODUCT RANGE</b>
          </h2>
        </div>
      </section>

      <ProductCategories />

      

      {/* What We're Up To */}
      {/* Know Our Story Section */}
      <section className="relative w-full bg-black text-white py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Drip Image Right Side */}
        <img
          src="/orange.png"
          alt="Cheese drip"
          className="hidden md:block absolute right-0 top-0 h-full object-contain pointer-events-none"
        />

        <div className="max-w-4xl relative z-10">
          {/* Heading */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none mb-6">
            KNOW OUR <br /> STORY
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl leading-relaxed mb-8 opacity-90">
            For years, Fric Bergen lived behind the scenes, elevating dishes in
            cafés, bakeries, and restaurants, earning love one plate at a time.
            But something beautiful happened along the way: customers started
            asking for the same flavours at home. They didn't just want a
            condiment, they wanted the comfort, consistency, and care that Fric
            Bergen stood for.
          </p>

          {/* CTA Button */}
          <Link
            to="/our-story"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition"
          >
            Read More
          </Link>
        </div>
      </section>

      {/* Customer Feedback */}
      <section
        className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 animate-on-scroll opacity-0"
        data-animation="fade-in-up"
      >
        {/* Header with decorative images */}
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="space-y-2 animate-on-scroll opacity-0 text-center">
            <h3 className="text-base sm:text-lg uppercase tracking-wider text-gray-600">
              TESTIMONIALS & REVIEWS
            </h3>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight animate-on-scroll opacity-0"
              data-animation="fade-in-right"
              data-delay="100"
            >
              Our
              <br />
              Customer
              <br />
              Feedbacks
            </h2>
          </div>

          {/* Decorative image container — removed height */}
          <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-0 overflow-hidden animate-on-scroll opacity-0"></div>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mt-2 animate-on-scroll opacity-0">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="bg-white rounded-[30px] sm:rounded-[35px] md:rounded-[40px] p-6 sm:p-8 md:p-12 shadow-lg transform transition duration-500 hover:shadow-xl">
                      <CardContent className="max-w-xs sm:max-w-sm md:max-w-2xl mx-auto text-center p-0">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 md:mb-8">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center justify-center gap-3 sm:gap-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full transform transition duration-500 hover:scale-110"></div>
                          <h4 className="text-lg sm:text-xl font-semibold">
                            {testimonial.author}
                          </h4>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 border-2 border-black bg-white text-black hover:bg-gray-100" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 border-2 border-black bg-white text-black hover:bg-gray-100" />
          </Carousel>
        </div>
      </section>

  
      

      <Footer />
    </div>
  );
};

export default Index;
