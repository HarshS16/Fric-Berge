import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Main content grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 flex-grow">
            {/* Brand */}
            <div className="flex flex-col">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">FRIC BERGEN</h3>
              <p className="text-sm text-primary-foreground/80 flex-grow">
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
            <div className="flex flex-col items-center md:items-start">
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
                <li>
                  <a href="/contact" className="hover:text-accent transition-colors">
                    Store Locator
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Email: info@fricbergen.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: G1-13, R. I. I. C. O. Industrial Area, Sotanala, Alwar, Rajasthan -India
</li>
              </ul>
            </div>
          </div>

          {/* Vertical line and image section (image aligned to bottom of the line) */}
          {/* <div className="hidden md:flex items-end gap-8">
            <div className="w-px h-48 bg-white/20 self-stretch"></div>
            <div className="w-32 flex items-end">
              <img
                src="/image 8-1.png"
                alt="Footer decoration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div> */}
          <div className="hidden md:flex flex-col items-center gap-0 -mt-12">
  <div className="w-px flex-1 bg-white/20"></div>
  <div className="w-32">
    <img
      src="/image 8-1.png"
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