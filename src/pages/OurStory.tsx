import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const OurStory = () => {
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);
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
    text: "I discovered Fric Bergen products at a local shop in Delhi and instantly became a fan. The flavours are incredible, especially the tandoori mayo.",
    author: "Roopa S., Delhi",
  },
  {
    text: "Fric Bergen’s tandoori mayo completely stands out. Rich, bold, and better than any other brand I’ve tried so far.",
    author: "Amit Khanna, Gurugram",
  },
  {
    text: "After trying Fric Bergen sauces, I started recommending them to friends immediately. Everyone loved the taste and quality.",
    author: "Neha Verma, Noida",
  },
  {
    text: "I’ve tried Fric Bergen mayonnaise and peanut butter, and both are absolutely amazing. The flavours are perfectly balanced and premium.",
    author: "Shraddha Dash, Bengaluru",
  },
  {
    text: "The cheese jalapeño dip from Fric Bergen is outstanding. It instantly became a household favourite.",
    author: "Rahul Mehta, Mumbai",
  },
  {
    text: "Fric Bergen products have a very distinctive taste. You can clearly feel the quality in every bite.",
    author: "Pooja Malhotra, Chandigarh",
  },
  {
    text: "I first tasted Fric Bergen jams during a stay at a premium hotel and they left a lasting impression.",
    author: "Samridhi Madan, Faridabad",
  },
  {
    text: "Once you try Fric Bergen jams, you actively start looking for them everywhere. The taste genuinely stands out.",
    author: "Vikas Arora, Jaipur",
  },
];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white text-black">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-12">
          <div className="flex flex-col items-center">
            <div
              className="bg-black text-white rounded-3xl px-6 md:px-12 py-8 md:py-14 shadow-xl w-full max-w-4xl text-center animate-on-scroll opacity-0"
              data-animation="fade-zoom-in"
            >
              <h2
                className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight animate-on-scroll opacity-0"
                data-animation="fade-in-up"
              >
                Our Story
              </h2>
              <div
                className="mt-2 h-[3px] w-20 md:w-28 bg-white/90 rounded-full mx-auto animate-on-scroll opacity-0"
                data-animation="fade-in-up"
                data-delay="100"
              ></div>
              <p
                className="mt-6 md:mt-8 text-base md:text-xl leading-relaxed max-w-3xl mx-auto font-outfit animate-on-scroll opacity-0"
                data-animation="fade-in-up"
                data-delay="200"
              >
                Long before Fric Bergen bottles found their way onto kitchen shelves across India, they first lived in the hearts of a small team that believed food should feel like home.
              </p>
            </div>
          </div>
        </div>
      </section>
{/* Our Story Section */}
      <section className="bg-white py-12 md:py-16 lg:py-12 relative overflow-hidden animate-on-scroll opacity-0" data-animation="fade-in-up">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg leading-relaxed text-gray-800 inline-block text-center">
              Back in 2008, when Vivan Foods began making condiments for restaurants, they weren't thinking about scale. They were thinking about people—the chefs who trusted them, the families who would taste their food, and the memories that would be created around those meals. Every recipe was made with the quiet promise that quality shouldn't be a luxury; it should be a constant.
              <br /><br />
              For years, Fric Bergen lived behind the scenes, elevating dishes in cafés, bakeries, and restaurants, earning love one plate at a time. But something beautiful happened along the way: customers started asking for the same flavours at home. They didn't just want a condiment—they wanted the comfort, consistency, and care that Fric Bergen stood for.
              <br /><br />
              So in 2017, they decided to take a bigger step.
              <br /><br />
              Fric Bergen entered retail not to become a brand on a shelf, but to become a part of Indian kitchens—where laughter happens, where families gather, where every meal means something. And as homes welcomed them, Fric Bergen grew, reaching more than 60 cities across the country, carrying with them the same commitment they started with: authentic ingredients, honest flavours, and a whole lot of heart.
              <br /><br />
              Today, Fric Bergen isn't just a condiment brand. It's a little moment of joy. A familiar taste that makes a simple snack feel special. A dependable companion for moms who want the best, for students who live on quick meals, for food lovers who experiment, and for anyone who believes that good food brings people together.
              <br /><br />
              Because at Fric Bergen, every bottle still carries that original promise—made with care, shared with love.
            </p>
          </div>
        </div>
      </section>
      <h1
              className="mt-12 md:mt-16 text-2xl md:text-4xl lg:text-5xl font-black text-center font-outfit animate-on-scroll opacity-0"
              data-animation="fade-in-up"
              data-delay="400"
            >
              Hard Work Deserves Great Taste
            </h1>
      <section
        className="w-full py-8 md:py-16 animate-on-scroll opacity-0"
        data-animation="fade-in-up"
      >
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
            <h3
              className="text-base md:text-lg uppercase tracking-wider text-gray-600 animate-on-scroll opacity-0"
              data-animation="fade-in-up"
            >
              TESTIMONIALS & REVIEWS
            </h3>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-none tracking-tight animate-on-scroll opacity-0"
              data-animation="fade-in-up"
              data-delay="100"
            >
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
        <div
          className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mt-8 animate-on-scroll opacity-0"
          data-animation="fade-zoom-in"
        >
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
                        <p
                          className="text-base md:text-xl lg:text-2xl leading-relaxed mb-6 md:mb-8 animate-on-scroll opacity-0"
                          data-animation="fade-in-up"
                        >
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center justify-center gap-3 md:gap-4">
                          <div
                            className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full animate-on-scroll opacity-0 transform transition duration-700 hover:scale-110"
                            data-animation="fade-in-up"
                            data-delay="100"
                          ></div>
                          <h4
                            className="text-lg md:text-xl font-semibold animate-on-scroll opacity-0 transform transition duration-700 hover:scale-105"
                            data-animation="fade-in-up"
                            data-delay="200"
                          >
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

      <section className="w-full">
        <img
          src="/canva.webp"
          alt="Wavy Banner"
          className="w-full h-auto object-cover block animate-on-scroll opacity-0 transform transition duration-700 hover:scale-105"
          data-animation="fade-in-up"
          onError={(e) => {
            e.currentTarget.src = "/blackwave.png";
          }}
        />
        <img
          src="/bar.png"
          alt="Wavy Banner"
          className="w-full h-auto object-cover block mb-12 md:mb-16 animate-on-scroll opacity-0 transform transition duration-700 hover:scale-105"
          data-animation="fade-in-up"
          data-delay="200"
          onError={(e) => {
            e.currentTarget.src = "/blackwave.png";
          }}
        />
      </section>

      
      

      <Footer />
    </div>
  );
};
export default OurStory;
