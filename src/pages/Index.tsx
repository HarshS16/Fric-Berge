import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);

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
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 lg:py-20">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center justify-center">
          <div className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-xs lg:max-w-sm animate-fade-in-left">
            <img
              src="/mayosachet.png"
              alt="Mayonnaise Sachet"
              className="w-full h-auto object-contain transform transition-all duration-700 hover:scale-105 sm:hover:scale-110 md:hover:scale-125 lg:hover:scale-150 hover:-rotate-1 sm:hover:-rotate-3 md:hover:-rotate-6 hover:translate-y-[-5px] sm:hover:translate-y-[-10px] md:hover:translate-y-[-20px] lg:hover:translate-y-[-30px]"
            />
          </div>
          <div className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-xs lg:max-w-sm animate-fade-in-right">
            <img
              src="/image9.svg"
              alt="Coriander Mint"
              className="w-full h-auto object-contain transform transition-all duration-700 hover:scale-105 sm:hover:scale-110 md:hover:scale-125 lg:hover:scale-150 hover:rotate-1 sm:hover:rotate-3 md:hover:rotate-6 hover:translate-y-[-5px] sm:hover:translate-y-[-10px] md:hover:translate-y-[-20px] lg:hover:translate-y-[-30px]"
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
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-left {
          animation: fadeInLeft 1s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 1s ease-out forwards;
        }
        `}
      </style>

      {/* Brand Statement */}
      {/* <section className="bg-black text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block bg-black text-white px-4 py-2 rounded-full">
                <p className="text-sm lg:text-base font-medium tracking-wide">
                  THE PERFECT BLEND OF
                </p>
              </div>
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                TASTE &<br />
                FLAVOUR
              </h1>
            </div>
            <div className="flex justify-center lg:justify-end relative">
              <img
                src="/sandwich-spread.png"
                alt="Sandwich Spread Pouch"
                className="w-full max-w-md h-auto object-contain transform rotate-12 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[800px] h-[800px] bg-black rounded-full -mr-[400px]"></div>
        </div>
      </section> */}

      <section className="bg-white text-black py-12 md:py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* LEFT TEXT COLUMN */}
            <div className="space-y-4 md:space-y-6 z-10 relative">
              <div className="inline-block bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-lg">
                <p className="text-sm md:text-lg lg:text-xl font-bold tracking-wide uppercase">
                  THE PERFECT BLEND OF
                </p>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight font-oswald">
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
    hover:scale-110 sm:hover:scale-125 md:hover:scale-140 hover:rotate-[-10deg] sm:hover:rotate-[-15deg] md:hover:rotate-[-20deg]   /* hover animation */
  "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="w-full py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-black leading-tight font-oswald mb-8 md:mb-12">
            <b>EXPLORE OUR</b> <br />
            <b>PRODUCT RANGE</b>
          </h2>
        </div>
        
        {/* Full-width collage image as integral part of the section */}
        <div className="w-full">
          <img
            src="/collagge.png"
            alt="Product Range"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
      <section className="bg-black text-white w-full">
        {/* Simple black background with SAUCES text */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center">
            SAUCES
          </h2>
        </div>
      </section>

      {/* Spreads & Dips Section */}
      <section className="bg-white py-12 md:py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-black text-center leading-tight tracking-tight font-oswald text-black">
            SPREADS
            <br />
            &amp; DIPS
          </h2>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white py-12 md:py-16 lg:py-24 relative overflow-hidden">
        {/* Decorative Left Circle */}
        <div className="absolute left-4 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 hidden md:block">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10">
            <div className="absolute inset-0 border-2 sm:border-4 border-purple-500 rounded-full"></div>
            <div className="absolute top-1 left-1 w-6 h-6 sm:top-2 sm:left-2 sm:w-8 sm:h-8 bg-black rounded-full"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
          {/* Big Bold Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-8 md:mb-12 leading-tight">
            Sign up For Exclusive <br /> Deals and Updates
          </h2>

          {/* Email Input + Subscribe */}
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-6">
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
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-gray-600 text-xs sm:text-sm">
            <input
              type="checkbox"
              className="w-3 h-3 sm:w-4 sm:h-4 rounded border-gray-400"
            />
            <span>I agree to the privacy policy</span>
          </div>
        </div>
      </section>

      {/* What We're Up To */}
      <section className="bg-black text-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between">
            {/* Left side - Title */}
            <div className="lg:w-1/2 mb-8 md:mb-12 lg:mb-0 text-center lg:text-left w-full">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight tracking-tight">
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
                <div className="bg-transparent flex flex-col items-center">
                  <div className="relative w-[150px] sm:w-[180px] md:w-[221px] h-[100px] sm:h-[120px] md:h-[143px] rounded-[20px] sm:rounded-[25px] md:rounded-[32px] overflow-hidden mb-2 sm:mb-3 group hover:shadow-2xl transition-all duration-500 ease-out">
                    <img
                      src="/salad.jpg"
                      alt="Our Recipes"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-center">
                    Our
                    <br />
                    Recipes
                  </h3>
                </div>

                {/* Which meal is hiding Card */}
                <div className="bg-transparent flex flex-col items-center">
                  <div className="relative w-[150px] sm:w-[180px] md:w-[221px] h-[100px] sm:h-[120px] md:h-[143px] rounded-[20px] sm:rounded-[25px] md:rounded-[32px] overflow-hidden mb-2 sm:mb-3 group hover:shadow-2xl transition-all duration-500 ease-out">
                    <img
                      src="/roll.jpg"
                      alt="Which meal is hiding"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-center">
                    Which meal is
                    <br />
                    hiding in your
                    <br />
                    fridge
                  </h3>
                </div>
              </div>

              {/* Right Column - Mayo Card */}
              <div className="flex items-end pt-[100px] sm:pt-[150px] md:pt-[200px]">
                {/* Delicious Vegan Mayo Card */}
                <div className="bg-transparent flex flex-col items-center">
                  <div className="relative w-[150px] sm:w-[180px] md:w-[221px] h-[160px] sm:h-[200px] md:h-[240px] rounded-[20px] sm:rounded-[25px] md:rounded-[32px] overflow-hidden mb-2 sm:mb-3">
                    <img
                      src="/mm.jpg"
                      alt="Delicious Vegan Mayonnaise"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-center">
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
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        {/* Header with decorative images */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 mb-8">
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg uppercase tracking-wider text-gray-600">
              TESTIMONIALS & REVIEWS
            </h3>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight">
              Our
              <br />
              Customer
              <br />
              Feedbacks
            </h2>
          </div>
          <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-[200px] sm:h-[250px] md:h-[320px]">
            {/* Main burger image */}
            <img
              src="/delfood.jpg"
              alt="Delicious Burger"
              className="absolute top-0 right-0 w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] h-[120px] sm:h-[150px] md:h-[200px] object-cover rounded-[20px] sm:rounded-[25px] md:rounded-[32px] z-20"
            />
            {/* Background sauce image */}
            <img
              src="/food.jpg"
              alt="Sauce Background"
              className="absolute top-[40px] sm:top-[50px] md:top-[60px] right-[150px] sm:right-[220px] md:right-[390px] w-[140px] sm:w-[180px] md:w-[280px] h-[100px] sm:h-[120px] md:h-[200px] object-cover rounded-[20px] sm:rounded-[25px] md:rounded-[32px] z-10"
            />
            {/* Dip image */}
            <img
              src="/sauce.jpg"
              alt="Dipping Sauce"
              className="absolute top-[120px] sm:top-[160px] md:top-[240px] right-[20px] sm:right-[40px] md:right-[80px] w-[140px] sm:w-[180px] md:w-[240px] h-[120px] sm:h-[150px] md:h-[210px] object-cover rounded-[20px] sm:rounded-[25px] md:rounded-[32px] z-30"
            />
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto overflow-hidden mt-16 sm:mt-24 md:mt-36">
          <div className="relative">
            <div
              className="transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-[30px] sm:rounded-[35px] md:rounded-[40px] p-6 sm:p-8 md:p-12 shadow-lg">
                      <div className="max-w-xs sm:max-w-sm md:max-w-2xl mx-auto text-center">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 md:mb-8">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center justify-center gap-3 sm:gap-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full"></div>
                          <h4 className="text-lg sm:text-xl font-semibold">
                            {testimonial.author}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slider dots */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                index === activeTestimonial ? "bg-black" : "bg-gray-300"
              } hover:bg-gray-400`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Quality and Story Section */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-16">
          {/* Left side - Image */}
          <div className="lg:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-[30px] sm:rounded-[40px] md:rounded-[48px] overflow-hidden bg-[#E57373]">
              <img
                src="/man.jpg"
                alt="Chef with Products"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2 space-y-8 md:space-y-12 flex flex-col items-center lg:items-start">
            {/* Quality Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {/* Premium Quality Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg">
                <div className="text-center mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold mt-3 sm:mt-4 mb-2 sm:mb-3">
                    Premium Quality
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    The quality and safety of our products is our top priority.
                    We continue to quest for even greater product quality
                  </p>
                </div>
              </div>

              {/* Always Fresh Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg">
                <div className="text-center mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold mt-3 sm:mt-4 mb-2 sm:mb-3">
                    Always Fresh
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Fric Bergen is always committed to 100% fresh, has a
                    certificate of food safety certification
                  </p>
                </div>
              </div>
            </div>

            {/* Our Story Button */}
            <Link
              to="/our-story"
              className="inline-block bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              OUR STORY
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
