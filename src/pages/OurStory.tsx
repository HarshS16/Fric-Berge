import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const OurStory = () => {
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
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white text-black">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col items-center">
            <div className="bg-black text-white rounded-3xl px-6 md:px-12 py-8 md:py-14 shadow-xl w-full max-w-4xl text-center animate-on-scroll opacity-0" data-animation="fade-zoom-in">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight animate-on-scroll opacity-0" data-animation="fade-in-up">Our Mission</h2>
              <div className="mt-2 h-[3px] w-20 md:w-28 bg-white/90 rounded-full mx-auto animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="100"></div>
              <p className="mt-6 md:mt-8 text-base md:text-xl leading-relaxed max-w-3xl mx-auto font-outfit animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="200">
                We are dedicated to making high-quality, innovative and better-for-you dips and
                dressings that add joy to every meal.
              </p>
            </div>

            <h1 className="mt-12 md:mt-16 text-2xl md:text-4xl lg:text-5xl font-black text-center font-outfit animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="400">
              Hard Work Deserves Great Taste
            </h1>
          </div>
        </div>
      </section>
      
      <section className="w-full py-8 md:py-16 animate-on-scroll opacity-0" data-animation="fade-in-up">
        <img
          src="/saucescollagecanva.webp"
          alt="All Sauces Banner"
          className="w-full h-auto object-cover block transform transition duration-700 hover:scale-105"
        />
      </section>

      {/* Customer Feedback */}
      <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* Header with decorative images */}
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="space-y-2 animate-on-scroll opacity-0 text-center">
            <h3 className="text-base md:text-lg uppercase tracking-wider text-gray-600 animate-on-scroll opacity-0" data-animation="fade-in-up">
              TESTIMONIALS & REVIEWS
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-none tracking-tight animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="100">
              Our
              <br />
              Customer
              <br />
              Feedbacks
            </h2>
          </div>
          <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-0 overflow-hidden animate-on-scroll opacity-0">
            {/* Main burger image */}
            {/* <img
              src="/delfood.jpg"
              alt="Delicious Burger"
              className="absolute top-0 right-0 w-[60%] md:w-[280px] h-[120px] md:h-[200px] object-cover rounded-[20px] md:rounded-[32px] z-20 animate-on-scroll opacity-0 transform transition duration-700 hover:scale-110" data-animation="fade-in-up" data-delay="300"
            /> */}
            {/* Background sauce image */}
            {/* <img
              src="/food.jpg"
              alt="Sauce Background"
              className="absolute hidden md:block top-[60px] right-[390px] w-[280px] h-[200px] object-cover rounded-[32px] z-10 animate-on-scroll opacity-0 transform transition duration-700 hover:scale-110" data-animation="fade-in-up" data-delay="400"
            /> */}
            {/* Dip image */}
            {/* <img
              src="/sauce.jpg"
              alt="Dipping Sauce"
              className="absolute top-[150px] md:top-[240px] right-[20px] md:right-[80px] w-[50%] md:w-[240px] h-[140px] md:h-[210px] object-cover rounded-[20px] md:rounded-[32px] z-30 animate-on-scroll opacity-0 transform transition duration-700 hover:scale-110" data-animation="fade-in-up" data-delay="500"
            /> */}
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mt-8 animate-on-scroll opacity-0" data-animation="fade-zoom-in">
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
                    <Card className="bg-white rounded-[30px] md:rounded-[40px] p-8 md:p-12 shadow-lg animate-on-scroll opacity-0 transform transition duration-700 hover:shadow-xl">
                      <CardContent className="max-w-2xl mx-auto text-center p-0">
                        <p className="text-base md:text-xl lg:text-2xl leading-relaxed mb-6 md:mb-8 animate-on-scroll opacity-0" data-animation="fade-in-up">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center justify-center gap-3 md:gap-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full animate-on-scroll opacity-0 transform transition duration-700 hover:scale-110" data-animation="fade-in-up" data-delay="100"></div>
                          <h4 className="text-lg md:text-xl font-semibold animate-on-scroll opacity-0 transform transition duration-700 hover:scale-105" data-animation="fade-in-up" data-delay="200">{testimonial.author}</h4>
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

      <section className="w-full">
        <img
          src="/canva.webp"
          alt="Wavy Banner"
          className="w-full h-auto object-cover block animate-on-scroll opacity-0 transform transition duration-700 hover:scale-105" data-animation="fade-in-up"
          onError={(e) => { e.currentTarget.src = '/blackwave.png'; }}
        />
        <img
          src="/qualities.jpg"
          alt="Wavy Banner"
          className="w-full h-auto object-cover block mb-12 md:mb-16 animate-on-scroll opacity-0 transform transition duration-700 hover:scale-105" data-animation="fade-in-up" data-delay="200"
          onError={(e) => { e.currentTarget.src = '/blackwave.png'; }}
        />
      </section>

      <Footer />
    </div>
  );
};

export default OurStory;