import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/our-story" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl lg:text-3xl font-bold tracking-tight"
          >
            FRIC BERGEN
          </Link>

          <div className="hidden md:flex items-center gap-8 bg-white/10 px-6 py-4 rounded-[32px] border border-white/20">
  {navLinks.map((link) => (
    <Link
      key={link.path}
      to={link.path}
      className={`text-sm lg:text-base font-medium transition-colors hover:text-accent ${
        isActive(link.path)
          ? "text-foreground"
          : "text-muted-foreground"
      }`}
    >
      {link.name}
    </Link>
  ))}
  <Link 
    to="/contact"
    className="ml-4 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
  >
    Store Locator →
  </Link>
</div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-accent ${
                    isActive(link.path)
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild size="sm" className="w-full mt-2">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
