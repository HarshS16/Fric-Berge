import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white text-black">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col items-center">
            <div className="bg-black text-white rounded-3xl px-8 md:px-12 py-10 md:py-14 shadow-xl w-full max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">Our Mission</h2>
              <div className="mt-2 h-[3px] w-28 md:w-32 bg-white/90 rounded-full mx-auto"></div>
              <p className="mt-8 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-outfit">
                We are dedicated to making high-quality, innovative and better-for-you dips and
                dressings that add joy to every meal.
              </p>
            </div>

            <h1 className="mt-16 text-3xl md:text-5xl lg:text-6xl font-black text-center font-outfit">
              Hard Work Deserves Great Taste
            </h1>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center justify-center py-16 relative overflow-hidden">
      
      {/* Background white space */}
      <div className="absolute inset-0 bg-white"></div>

      {/* Sauce bowls group */}
      <img
        src="/saucebanner.png"
        alt="Sauce Collection"
        className="w-[150%] md:w-[110%] lg:w-[90%]
object-contain  relative z-10 self-start"
      />

      {/* Mayo bottle */}
      <img
        src="/Mayo.png"
        alt="Mayonnaise Bottle"
        className="absolute top-12 right-16 w-28 md:w-36 lg:w-40 rotate-[10deg] drop-shadow-xl"
      />

      {/* Pizza & Pasta Sauce bottle */}
      <img
        src="/image 29.png"
        alt="Pizza & Pasta Sauce"
        className="absolute top-40 right-4 w-32 md:w-40 lg:w-48 rotate-[-8deg] drop-shadow-xl"
      />
    </section>
      {/* Story Content */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Where It All Began
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground mb-4">
              FRIC BERGEN was born from a simple belief: that every meal deserves
              to be extraordinary. Our founders, passionate food enthusiasts,
              noticed a gap in the market for high-quality, flavorful condiments
              that could transform everyday dishes into culinary delights.
            </p>
            <p className="text-base lg:text-lg text-muted-foreground">
              Starting in a small kitchen, we experimented with countless recipes,
              sourcing the finest ingredients, and perfecting our blends until we
              achieved what we believe is the perfect taste and texture.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/placeholder-image14.jpg"
              alt="Our Story"
              className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="flex justify-center order-2 lg:order-1">
            <img
              src="/placeholder-image15.jpg"
              alt="Our Values"
              className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Values
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Quality First</h3>
                <p className="text-muted-foreground">
                  We never compromise on the quality of our ingredients or our
                  production processes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Authenticity</h3>
                <p className="text-muted-foreground">
                  Every product reflects our commitment to authentic flavors and
                  traditional recipes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously explore new flavors and combinations to delight
                  our customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-accent text-accent-foreground py-12 lg:py-16 px-6 lg:px-12 rounded-lg text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto">
            To bring joy to every table by crafting exceptional sauces, spreads,
            and dips that elevate everyday meals into memorable experiences.
            We're committed to quality, sustainability, and creating products
            that our customers can trust and love.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <img
                  src={`/placeholder-image${15 + i}.jpg`}
                  alt={`Team Member ${i}`}
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">Team Member {i}</h3>
                <p className="text-sm text-muted-foreground">Position</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStory;
