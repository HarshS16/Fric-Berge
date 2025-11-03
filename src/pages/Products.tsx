import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Products = () => {
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
        servings: "5",
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
        image: "/placeholder-image23.jpg",
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
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">OUR PRODUCTS</h1>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Discover our range of premium quality sauces, spreads, and dips
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <Tabs defaultValue="mayonnaise" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="mayonnaise">Mayonnaise</TabsTrigger>
            <TabsTrigger value="sauces">Sauces</TabsTrigger>
            <TabsTrigger value="spreads">Spreads & Dips</TabsTrigger>
          </TabsList>

          <TabsContent value="mayonnaise">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.mayonnaise.map((product, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {product.description}
                      </p>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="font-bold">MRP</p>
                          <p className="text-muted-foreground">{product.mrp}</p>
                        </div>
                        <div>
                          <p className="font-bold">Net Wt.</p>
                          <p className="text-muted-foreground">{product.weight}</p>
                        </div>
                        <div>
                          <p className="font-bold">Servings</p>
                          <p className="text-muted-foreground">{product.servings}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sauces">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.sauces.map((product, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {product.description}
                      </p>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="font-bold">MRP</p>
                          <p className="text-muted-foreground">{product.mrp}</p>
                        </div>
                        <div>
                          <p className="font-bold">Net Wt.</p>
                          <p className="text-muted-foreground">{product.weight}</p>
                        </div>
                        <div>
                          <p className="font-bold">Servings</p>
                          <p className="text-muted-foreground">{product.servings}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="spreads">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.spreads.map((product, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {product.description}
                      </p>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="font-bold">MRP</p>
                          <p className="text-muted-foreground">{product.mrp}</p>
                        </div>
                        <div>
                          <p className="font-bold">Net Wt.</p>
                          <p className="text-muted-foreground">{product.weight}</p>
                        </div>
                        <div>
                          <p className="font-bold">Servings</p>
                          <p className="text-muted-foreground">{product.servings}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-accent-foreground py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg mb-6">
            Contact us for custom orders and bulk purchases
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
