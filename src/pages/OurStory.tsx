import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OurStory = () => {
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
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white text-black">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col items-center">
            <div className="bg-black text-white rounded-3xl px-6 md:px-12 py-8 md:py-14 shadow-xl w-full max-w-4xl text-center">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight">Our Mission</h2>
              <div className="mt-2 h-[3px] w-20 md:w-28 bg-white/90 rounded-full mx-auto"></div>
              <p className="mt-6 md:mt-8 text-base md:text-xl leading-relaxed max-w-3xl mx-auto font-outfit">
                We are dedicated to making high-quality, innovative and better-for-you dips and
                dressings that add joy to every meal.
              </p>
            </div>

            <h1 className="mt-12 md:mt-16 text-2xl md:text-4xl lg:text-5xl font-black text-center font-outfit">
              Hard Work Deserves Great Taste
            </h1>
          </div>
        </div>
      </section>
<section className="w-full py-8 md:py-16">
  <img
    src="/saucescollagecanva.webp"
    alt="All Sauces Banner"
    className="w-full h-auto object-cover block"
  />
</section>

{/* Customer Feedback */}
      <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* Header with decorative images */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div className="space-y-2">
            <h3 className="text-base md:text-lg uppercase tracking-wider text-gray-600">TESTIMONIALS & REVIEWS</h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-none tracking-tight">
              Our<br />Customer<br />Feedbacks
            </h2>
          </div>
          <div className="relative w-full md:w-1/2 max-w-[500px] h-[320px]">
            {/* Main burger image */}
            <img
              src="/delfood.jpg"
              alt="Delicious Burger"
              className="absolute top-0 right-0 w-[60%] md:w-[280px] h-[120px] md:h-[200px] object-cover rounded-[20px] md:rounded-[32px] z-20"
            />
            {/* Background sauce image */}
            <img
              src="/food.jpg"
              alt="Sauce Background"
              className="absolute hidden md:block top-[60px] right-[390px] w-[280px] h-[200px] object-cover rounded-[32px] z-10"
            />
            {/* Dip image */}
            <img
              src="/sauce.jpg"
              alt="Dipping Sauce"
              className="absolute top-[150px] md:top-[240px] right-[20px] md:right-[80px] w-[50%] md:w-[240px] h-[140px] md:h-[210px] object-cover rounded-[20px] md:rounded-[32px] z-30"
            />
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto overflow-hidden mt-16 md:mt-36">
          <div className="relative">
            <div className="transition-all duration-500 ease-in-out"
                 style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-[30px] md:rounded-[40px] p-8 md:p-12 shadow-lg">
                      <div className="max-w-2xl mx-auto text-center">
                        <p className="text-base md:text-xl lg:text-2xl leading-relaxed mb-6 md:mb-8">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center justify-center gap-3 md:gap-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full"></div>
                          <h4 className="text-lg md:text-xl font-semibold">{testimonial.author}</h4>
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
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                index === activeTestimonial ? 'bg-black' : 'bg-gray-300'
              } hover:bg-gray-400`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

      </section>

      <section className="w-full">
        <img
          src="/canva.webp"
          alt="Wavy Banner"
          className="w-full h-auto object-cover block"
          onError={(e) => { e.currentTarget.src = '/blackwave.png'; }}
        />
        <img
          src="/qualities.jpg"
          alt="Wavy Banner"
          className="w-full h-auto object-cover block mb-12 md:mb-16"
          onError={(e) => { e.currentTarget.src = '/blackwave.png'; }}
        />
      </section>

      <Footer />
    </div>
  );
};

export default OurStory;