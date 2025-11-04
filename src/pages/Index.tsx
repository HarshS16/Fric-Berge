import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
          <div className="w-full max-w-sm">
            <img
              src="/image 8-1.png"
              alt="Mayonnaise Sachet"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full max-w-sm justify-self-end">
            <img
              src="/image9.svg"
              alt="Coriander Mint"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

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

      <section className="bg-white text-black py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 z-10 relative">
              <div className="inline-block bg-black text-white px-6 py-3 rounded-lg">
                <p className="text-lg lg:text-xl font-bold tracking-wide uppercase">
                  THE PERFECT BLEND OF
                </p>
              </div>
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight font-oswald">
                <b>TASTE &</b> <br />
                <b>FLAVOUR</b>
              </h1>
            </div>
            <div className="flex justify-center lg:justify-start relative z-10 lg:ml-[-05px] mt-8 lg:mt-12">
              <div className="relative">
                <img
                  src="/sandwich-spread.png"
                  alt="Sandwich Spread Pouch"
                  className="w-full max-w-lg lg:max-w-xl h-auto object-contain transform rotate-12 hover:rotate-6 transition-transform duration-500 relative z-20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Large black circle background */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[500px] h-[500px] lg:w-[650px] lg:h-[650px] bg-black rounded-full -mr-[150px] lg:-mr-[20px]"></div>
      </section>

      {/* Product Range */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <h2 className="text-6xl lg:text-7xl xl:text-6xl font-black leading-tight font-oswald">
          <b>EXPLORE OUR</b> <br />
          <b>PRODUCT RANGE</b>
        </h2>
        <section className="relative bg-gradient-to-br from-white to-gray-50 py-16 lg:py-24 overflow-hidden">
          {/* Decorative background - large chips image */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[800px] h-[800px] -mr-[200px]">
            <img
              src="/nacho.png"
              alt=""
              className="w-full h-full object-contain transform rotate-[25deg] opacity-90"
            />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12"></h2>

            {/* Product Collage */}
            <div className="relative h-[700px] max-w-5xl mx-auto">
              {/* Product positions with custom placement */}
              <img
                src="/tandoorimayo.png"
                alt="Mayonnaise Tandoori"
                className="absolute top-[8%] left-[2%] w-[180px] lg:w-[220px] transform -rotate-12 hover:scale-110 hover:rotate-0 transition-all duration-500 drop-shadow-2xl"
              />

              <img
                src="/Mayo.png"
                alt="Classic Mayonnaise"
                className="absolute top-[3%] left-[32%] w-[190px] lg:w-[240px] transform rotate-8 hover:scale-110 hover:rotate-0 transition-all duration-500 drop-shadow-2xl"
              />

              <img
                src="/image 8-1.png"
                alt="Mayonnaise Pouch"
                className="absolute top-[12%] right-[8%] w-[170px] lg:w-[210px] transform -rotate-6 hover:scale-110 hover:rotate-0 transition-all duration-500 drop-shadow-2xl"
              />

              <img
                src="/image 9.png"
                alt="Spread Packet"
                className="absolute bottom-[25%] left-[10%] w-[160px] lg:w-[200px] transform rotate-15 hover:scale-110 hover:rotate-0 transition-all duration-500 drop-shadow-2xl"
              />

              <img
                src="/image 29.png"
                alt="Pizza & Pasta Sauce"
                className="absolute bottom-[12%] right-[20%] w-[200px] lg:w-[250px] transform -rotate-10 hover:scale-110 hover:rotate-0 transition-all duration-500 drop-shadow-2xl"
              />
            </div>
          </div>
        </section>
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8"></div>
          {/* Decorative yellow shape */}
          <div className="absolute top-1/2 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-accent -mr-20 -mt-32 opacity-30 -z-10 transform rotate-12"></div>
        </div>
      </section>
     <section className="relative text-white overflow-hidden">
  {/* wave image + SAUCES */}
  <div className="relative h-48 lg:h-64">
    {/* 5× wave images – full-width coverage */}
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src="/blackwave.png"
          alt=""
          className="h-full w-auto max-w-none flex-shrink-0"
          style={{
            objectFit: 'contain',
            transform: 'scale(2.5)',
            marginLeft: i > 0 ? '45px' : 0 // butt-join copies
          }}
        />
      ))}
    </div>

    {/* SAUCES text */}
    <h2 className="relative z-10 text-4xl lg:text-6xl font-bold text-center leading-[12rem] lg:leading-[16rem]">
      SAUCES
    </h2>
  </div>
</section>

      {/* Spreads & Dips Section */}
      <section className="bg-white py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-6xl lg:text-7xl xl:text-6xl font-black text-center leading-tight tracking-tight font-oswald text-black">
            SPREADS<br />&amp; DIPS
          </h2>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-secondary py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6">
            Sign up For Exclusive
            <br />
            Deals and Updates
          </h2>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* What We're Up To */}
      <section className="bg-black text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between">
            {/* Left side - Title */}
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-6xl lg:text-8xl font-black leading-tight tracking-tight">
                SEE WHAT<br />
                WE'RE<br />
                UP TO
              </h2>
            </div>

            {/* Right side - Cards */}
            <div className="lg:w-1/2 flex justify-between gap-8">
              {/* Left Column - Recipes and Which meal */}
              <div className="flex flex-col gap-6">
                {/* Our Recipes Card */}
                <div className="bg-transparent flex flex-col items-center">
                  <div className="relative w-[221px] h-[143px] rounded-[32px] overflow-hidden mb-3">
                    <img
                      src="/salad.jpg"
                      alt="Our Recipes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center">Our<br />Recipes</h3>
                </div>

                {/* Which meal is hiding Card */}
                <div className="bg-transparent flex flex-col items-center">
                  <div className="relative w-[221px] h-[143px] rounded-[32px] overflow-hidden mb-3">
                    <img
                      src="/roll.jpg"
                      alt="Which meal is hiding"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center">Which meal is<br />hiding in your<br />fridge</h3>
                </div>
              </div>

              {/* Right Column - Mayo Card */}
              <div className="flex items-end pt-[200px]">
                {/* Delicious Vegan Mayo Card */}
                <div className="bg-transparent flex flex-col items-center">
                  <div className="relative w-[221px] h-[240px] rounded-[32px] overflow-hidden mb-3">
                    <img
                      src="/mm.jpg"
                      alt="Delicious Vegan Mayonnaise"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center">Delicious Vegan<br />Mayonnaise</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Feedback */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <h2 className="text-3xl lg:text-5xl font-bold mb-12">
          Our Customer
          <br />
          Feedbacks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <Quote className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm mb-4">
                "I just love it! Its so Yumm. it enhanced the taste of my food
                and it all tasted so good. Big fan now. Keep going guys."
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder-image11.jpg"
                  alt="Customer"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">Sarah Johnson</p>
                  <p className="text-xs text-muted-foreground">Food Blogger</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Quote className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm mb-4">
                "The quality is exceptional! Perfect consistency and amazing
                flavors. My family loves every product we've tried."
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder-image12.jpg"
                  alt="Customer"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">Michael Chen</p>
                  <p className="text-xs text-muted-foreground">Home Chef</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Quote className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm mb-4">
                "Best sauces I've ever used! They're perfect for sandwiches,
                burgers, and even as dips. Highly recommended!"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder-image13.jpg"
                  alt="Customer"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">Emily Davis</p>
                  <p className="text-xs text-muted-foreground">
                    Restaurant Owner
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
