import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Main content grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16 flex-grow">
            {/* Brand */}
            <div className="flex flex-col">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">FRIC BERGEN</h3>
              <p className="text-sm text-primary-foreground/80 flex-grow">
                The perfect blend of taste & flavour. Premium sauces, spreads, and dips for every occasion.
              </p>
              {/* Commenting out social icons as requested
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
              */}
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-start sm:items-start">
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-accent transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/our-story" className="hover:text-accent transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-accent transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-accent transition-colors">
                    Contact Us
                  </Link>
                </li>
                {/* <li>
                  <Link to="/contact" className="hover:text-accent transition-colors">
                    Store Locator
                  </Link>
                </li> */}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-start sm:items-start">
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Email: info@fricbergen.com</li>
                <li>Phone:0124-4076305</li>
                <li className="max-w-[200px]">Address: G1-13, R. I. I. C. O. Industrial Area, Sotanala, Alwar, Rajasthan -India</li>
              </ul>
            </div>
          </div>

          {/* Decorative image section - now visible on all screens */}
          <div className="flex flex-col items-center gap-4 md:gap-0 -mt-4 md:-mt-12">
            <div className="w-px flex-1 bg-white/20 hidden md:block"></div>
            <div className="w-24 md:w-32">
              <img
                src="/mayosachet.png"
                alt="Footer decoration"
                className="w-full h-auto object-contain"
              />
            </div>
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
