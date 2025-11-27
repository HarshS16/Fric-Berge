import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { ProductCarousel } from "@/components/ProductCarousel";

const Index = () => {
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);
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

  const testimonials = [
    {
      text: "A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food. All great deeds and all great thoughts",
      author: "Bratlee Hamint",
    },
    {
      text: "The quality is exceptional! Perfect consistency and amazing flavors. My family loves every product we've tried.",
      author: "Michael Chen",
    },
    {
      text: "Best sauces I've ever used! They're perfect for sandwiches, burgers, and even as dips. Highly recommended!",
      author: "Emily Davis",
    },
  ];

  const products = [
    { id: 1, name: "Sandwich Spread", image: "/sandwich-spread.png" },
    { id: 2, name: "Pizza and Pasta Sauce", image: "/pizzapastanew.png" },
    { id: 3, name: "Mayonnaise", image: "/Mayo.png" },
    { id: 4, name: "Tandoori Mayonnaise", image: "/tandoorimayo.png" },
    { id: 5, name: "Coriander Mint Mayonnaise", image: "/mayo11.png" },
  ];

  const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(null);
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
          <div className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-xs lg:max-w-sm animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="100">
            <img
              src="/mayosachet.png"
              alt="Mayonnaise Sachet"
              className="w-full h-auto object-contain transform transition-all duration-700 hover:scale-110 sm:hover:scale-125 md:hover:scale-140 lg:hover:scale-160 hover:-rotate-2 sm:hover:-rotate-4 md:hover:-rotate-8 hover:translate-y-[-10px] sm:hover:translate-y-[-15px] md:hover:translate-y-[-25px] lg:hover:translate-y-[-35px] "
            />
          </div>
          <div className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-xs lg:max-w-sm animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="300">
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
      <section className="bg-white text-black py-12 md:py-16 lg:py-24 relative overflow-hidden animate-on-scroll opacity-0" data-animation="fade-in-up">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* LEFT TEXT COLUMN */}
            <div className="space-y-4 md:space-y-6 z-10 relative">
              <div className="inline-block bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-lg animate-on-scroll opacity-0" data-animation="fade-in-left" data-delay="100">
                <p className="text-sm md:text-lg lg:text-xl font-bold tracking-wide uppercase">
                  THE PERFECT BLEND OF
                </p>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight font-oswald animate-on-scroll opacity-0" data-animation="fade-zoom-in" data-delay="200">
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-black leading-tight font-oswald mb-8 md:mb-12 animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="100">
            <b>EXPLORE OUR</b> <br />
            <b>PRODUCT RANGE</b>
          </h2>
          
          {/* Products Carousel */}
          {/* <div className="mb-12 md:mb-16 animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="200">
            <Carousel
              setApi={setCarouselApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {products.map((product) => (
                  <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="p-1">
                      <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="flex flex-col items-center p-6">
                          <div className="relative w-48 h-48 mb-4">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-contain rounded-xl"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/placeholder.svg';
                              }}
                            />
                          </div>
                          <h3 className="text-xl font-bold text-center">{product.name}</h3>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 border-2 border-black bg-white text-black hover:bg-gray-100" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 border-2 border-black bg-white text-black hover:bg-gray-100" />
            </Carousel>
          </div> */}
        </div>
        
        {/* Full-width collage image as integral part of the section */}
        {/* <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 animate-on-scroll opacity-0" data-animation="fade-zoom-in" data-delay="200">
          <img
            src="/collage.webp"
            alt="Product Range"
            className="w-full h-auto object-contain transform transition duration-700 hover:scale-105 "
          />
        </div> */}
      </section>

      {/* <section className="bg-black text-white w-full animate-on-scroll opacity-0" data-animation="fade-in-up">
      
      </section> */}

      {/* Wavy Banner Image */}
      {/* <div className="w-full -mb-20">
        <img
          src="/WAVYBANN.png"
          alt="Wavy Banner"
          className="w-full h-auto object-cover mb-10 lg:mb-0"
        />
      </div> */}

      {/* Spreads & Dips Section */}
      {/* <section className="bg-white py-12 md:py-16 lg:py-24 relative overflow-hidden animate-on-scroll opacity-0" data-animation="fade-in-up">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-black text-center leading-tight tracking-tight font-oswald text-black animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="100">
            SPREADS
            <br />
            &amp; DIPS
          </h2>
        </div>
      </section> */}

      {/* Circular Product Carousel */}
      <section className="bg-white py-12 md:py-16 lg:py-24 relative overflow-hidden animate-on-scroll opacity-0" data-animation="fade-in-up">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-black text-center leading-tight tracking-tight font-oswald text-black animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="100">
            OUR PRODUCTS
          </h2> */}
          <div className="mt-12 animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="200">
            <ProductCarousel />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white py-12 md:py-16 lg:py-24 relative overflow-hidden animate-on-scroll opacity-0" data-animation="fade-in-up">
        

        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
          {/* Big Bold Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-8 md:mb-12 leading-tight animate-on-scroll opacity-0" data-animation="fade-zoom-in" data-delay="100">
            Sign up For Exclusive <br /> Deals and Updates
          </h2>

          {/* Email Input + Subscribe */}
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-6 animate-on-scroll opacity-0">
            {/* Email Box */}
            <div className="w-full bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.1)] sm:shadow-[0_0_30px_rgba(0,0,0,0.1)] md:shadow-[0_0_40px_rgba(0,0,0,0.1)] px-4 py-3 sm:px-6 sm:py-4 flex items-center">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
              />
            </div>

            {/* Subscribe Button */}
            <Button
              type="submit"
              size="lg"
              className="rounded-full px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold bg-black hover:bg-gray-900 w-full sm:w-auto"
            >
              SUBSCRIBE
            </Button>
          </form>

          {/* Checkbox Row */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-gray-600 text-xs sm:text-sm animate-on-scroll opacity-0">
            <input
              type="checkbox"
              className="w-3 h-3 sm:w-4 sm:h-4 rounded border-gray-400"
            />
            <span>I agree to the privacy policy</span>
          </div>
        </div>
      </section>

      {/* What We're Up To */}
      <section className="bg-black text-white py-12 md:py-16 lg:py-20 relative animate-on-scroll opacity-0" data-animation="fade-in-up">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between">
            {/* Left side - Title */}
            <div className="lg:w-1/2 mb-8 md:mb-12 lg:mb-0 text-center lg:text-left w-full animate-on-scroll opacity-0">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight tracking-tight animate-on-scroll opacity-0" data-animation="fade-in-left" data-delay="100">
                SEE WHAT
                <br />
                WE'RE
                <br />
                UP TO
              </h2>
            </div>

            {/* Right side - Cards */}
            <div className="lg:w-1/2 flex flex-col sm:flex-row justify-between gap-6 md:gap-8 mx-auto lg:mx-0">
              {/* Left Column - Recipes and Which meal */}
              <div className="flex flex-col gap-6 md:gap-8">
                {/* Our Recipes Card */}
                <div className="bg-transparent flex flex-col items-center animate-on-scroll opacity-0" data-animation="fade-in-up">
                  <div className="relative w-[160px] sm:w-[200px] md:w-[240px] h-[120px] sm:h-[140px] md:h-[160px] rounded-[20px] sm:rounded-[25px] md:rounded-[32px] mb-2 sm:mb-3 group hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2">
                    <img
                      src="/salad.jpg"
                      alt="Our Recipes"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-xl rounded-[20px] sm:rounded-[25px] md:rounded-[32px]"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-center animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="100">
                    Our
                    <br />
                    Recipes
                  </h3>
                </div>

                {/* Which meal is hiding Card */}
                <div className="bg-transparent flex flex-col items-center animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="200">
                  <div className="relative w-[160px] sm:w-[200px] md:w-[240px] h-[120px] sm:h-[140px] md:h-[160px] rounded-[20px] sm:rounded-[25px] md:rounded-[32px] mb-2 sm:mb-3 group hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2">
                    <img
                      src="/roll.jpg"
                      alt="Which meal is hiding"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-xl rounded-[20px] sm:rounded-[25px] md:rounded-[32px]"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-center animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="300">
                    Which meal is
                    <br />
                    hiding in your
                    <br />
                    fridge
                  </h3>
                </div>
              </div>

              {/* Right Column - Mayo Card */}
              <div className="flex items-end pt-[100px] sm:pt-[150px] md:pt-[200px] animate-on-scroll opacity-0">
                {/* Delicious Vegan Mayo Card */}
                <div className="bg-transparent flex flex-col items-center animate-on-scroll opacity-0" data-animation="fade-in-right" data-delay="400">
                  <div className="relative w-[160px] sm:w-[200px] md:w-[260px] h-[180px] sm:h-[220px] md:h-[280px] rounded-[20px] sm:rounded-[25px] md:rounded-[32px] mb-2 sm:mb-3">
                    <img
                      src="/image8.png"
                      alt="Delicious Vegan Mayonnaise"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 shadow-lg hover:shadow-xl rounded-[20px] sm:rounded-[25px] md:rounded-[32px] "
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-center animate-on-scroll opacity-0" data-animation="fade-in-right" data-delay="500">
                    Delicious Vegan
                    <br />
                    Mayonnaise
                  </h3>
                </div>
              </div>
            </div>
          </div>
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

      {/* Quality and Story Section */}
<section
  className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24 animate-on-scroll opacity-0"
  data-animation="fade-in-up"
>
  <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-16">

    {/* Left side - Image */}
    <div
      className="lg:w-1/2 animate-on-scroll opacity-0"
      data-animation="fade-in-left"
    >
      <div className="relative w-full aspect-[4/3] rounded-[30px] sm:rounded-[40px] md:rounded-[48px] overflow-hidden bg-[#E57373]">
        <img
          src="/man.jpg"
          alt="Chef with Products"
          className="w-full h-full object-cover transform transition duration-700 hover:scale-105 rounded-[30px] sm:rounded-[40px] md:rounded-[48px]"
        />
      </div>
    </div>

    {/* Right side - Content */}
    <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
      
      {/* Cards + Button Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">

        {/* Premium Quality Card */}
        <div
          className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg animate-on-scroll opacity-0 transform transition duration-500 hover:shadow-4xl hover:-translate-y-1"
          data-animation="fade-in-up"
        >
          <div className="text-center mb-3 sm:mb-4">
            <h3 className="text-lg sm:text-xl font-bold mt-3 sm:mt-4 mb-2 sm:mb-3">
              Premium Quality
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              The quality and safety of our products is our top priority.
              We continue to quest for even greater product quality.
            </p>
          </div>
        </div>

        {/* Always Fresh Card */}
        <div
          className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg animate-on-scroll opacity-0 transform transition duration-500 hover:shadow-4xl hover:-translate-y-1"
          data-animation="fade-in-up"
        >
          <div className="text-center mb-3 sm:mb-4">
            <h3 className="text-lg sm:text-xl font-bold mt-3 sm:mt-4 mb-2 sm:mb-3">
              Always Fresh
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Fric Bergen is always committed to 100% fresh, has a certificate
              of food safety certification.
            </p>
          </div>
        </div>

        {/* OUR STORY button centered below both cards */}
        <div
          className="col-span-1 sm:col-span-2 flex justify-center animate-on-scroll opacity-0 mt-2"
          data-animation="fade-in-up"
          data-delay="200"
        >
          <Link
            to="/our-story"
            className="inline-block bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            OUR STORY
          </Link>
        </div>

      </div>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default Index;