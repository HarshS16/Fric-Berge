import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">FRIC BERGEN</h3>
            <p className="text-sm text-primary-foreground/80">
              The perfect blend of taste & flavour. Premium sauces, spreads, and dips for every occasion.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/our-story" className="hover:text-accent transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-accent transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/products" className="hover:text-accent transition-colors">
                  Mayonnaise
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-accent transition-colors">
                  Sauces
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-accent transition-colors">
                  Spreads & Dips
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-accent transition-colors">
                  Sandwich Spreads
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Email: info@fricbergen.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Food Street,<br />Culinary City, FC 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Fric Bergen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
