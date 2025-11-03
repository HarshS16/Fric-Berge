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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
          <div className="w-full max-w-sm">
            <img
              src="/placeholder-image1.jpg"
              alt="Mayonnaise Sachet"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full max-w-sm">
            <img
              src="/placeholder-image2.jpg"
              alt="Sandwich Spread"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full max-w-sm md:col-span-2 lg:col-span-1">
            <img
              src="/placeholder-image3.jpg"
              alt="Coriander Mint"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm lg:text-base font-medium mb-4 tracking-wide">
                THE PERFECT BLEND OF
              </p>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                TASTE &<br />FLAVOUR
              </h1>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder-image4.jpg"
                alt="Sandwich Spread Pouch"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-accent rounded-full -mr-32 -mb-32 opacity-20"></div>
      </section>

      {/* Product Range */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">
          EXPLORE OUR<br />PRODUCT RANGE
        </h2>
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="flex justify-center">
              <img
                src="/placeholder-image5.jpg"
                alt="Product Jar 1"
                className="w-full max-w-xs h-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder-image6.jpg"
                alt="Product Jar 2"
                className="w-full max-w-xs h-auto object-contain"
              />
            </div>
            <div className="flex justify-center col-span-2 md:col-span-1">
              <img
                src="/placeholder-image7.jpg"
                alt="Product Jar 3"
                className="w-full max-w-xs h-auto object-contain"
              />
            </div>
          </div>
          {/* Decorative yellow shape */}
          <div className="absolute top-1/2 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-accent -mr-20 -mt-32 opacity-30 -z-10 transform rotate-12"></div>
        </div>
      </section>

      {/* Categories with Wave */}
      <section className="relative">
        {/* Wave Divider */}
        <div className="w-full h-24 lg:h-32 bg-primary" style={{
          clipPath: "ellipse(70% 100% at 50% 100%)"
        }}></div>
        
        <div className="bg-primary text-primary-foreground py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-center mb-8">
              SAUCES
            </h2>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="w-full h-24 lg:h-32 bg-background" style={{
          clipPath: "ellipse(70% 100% at 50% 0%)"
        }}></div>

        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-8">
            SPREADS<br />& DIPS
          </h2>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-secondary py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6">
            Sign up For Exclusive<br />Deals and Updates
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
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-12">
            SEE WHAT<br />WE'RE<br />UP TO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background">
              <CardContent className="p-6">
                <img
                  src="/placeholder-image8.jpg"
                  alt="Update 1"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold mb-2">New Product Launch</h3>
                <p className="text-sm text-muted-foreground">
                  Discover our latest addition to the family - Premium Pizza & Pasta Sauce
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6">
                <img
                  src="/placeholder-image9.jpg"
                  alt="Update 2"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Recipe Corner</h3>
                <p className="text-sm text-muted-foreground">
                  Check out delicious recipes you can make with our products
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6">
                <img
                  src="/placeholder-image10.jpg"
                  alt="Update 3"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Behind the Scenes</h3>
                <p className="text-sm text-muted-foreground">
                  See how we create the perfect blend of taste and quality
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Feedback */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <h2 className="text-3xl lg:text-5xl font-bold mb-12">
          Our Customer<br />Feedbacks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <Quote className="w-8 h-8 text-accent mb-4" />
              <p className="text-sm mb-4">
                "I just love it! Its so Yumm. it enhanced the taste of my food and it all tasted
                so good. Big fan now. Keep going guys."
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
                "The quality is exceptional! Perfect consistency and amazing flavors. My family
                loves every product we've tried."
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
                "Best sauces I've ever used! They're perfect for sandwiches, burgers, and even as
                dips. Highly recommended!"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder-image13.jpg"
                  alt="Customer"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">Emily Davis</p>
                  <p className="text-xs text-muted-foreground">Restaurant Owner</p>
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
