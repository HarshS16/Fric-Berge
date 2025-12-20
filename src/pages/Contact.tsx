import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const Contact = () => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [showModal, setShowModal] = useState(false);
  
  // Animation effects for scroll reveal
  useEffect(() => {
    // Create observer
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a staggered effect for child elements
          const delay = entry.target.getAttribute('data-delay') || '0';
          setTimeout(() => {
            // Choose animation based on data attribute or use default
            const animationType = entry.target.getAttribute('data-animation') || 'fade-in-up';
            entry.target.classList.add(`animate-${animationType}`);
            entry.target.classList.remove('opacity-0');
          }, parseInt(delay));
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all elements with animation classes
    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach(el => {
      if (observer.current) {
        observer.current.observe(el);
      }
    });

    // Cleanup
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Convert FormData to JSON for better compatibility
    const formObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      formObject[key] = value.toString();
    });
    
    try {
      const response = await fetch('https://submit-form.com/54CBsxOYq', {
        method: 'POST',
        body: JSON.stringify(formObject),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      
      if (response.ok) {
        setShowModal(true);
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[200px] sm:h-[250px] md:h-[380px] lg:h-[450px] overflow-hidden bg-white animate-on-scroll opacity-0" data-animation="fade-in-up">
        <img
          src="/herosec.png"
          alt="Salad on Plate"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 mt-8 sm:mt-10"
        />

      </section>

      

      {/* Contact Section */}
      <section className="w-full py-12 sm:py-16 bg-white relative z-20 animate-on-scroll opacity-0" data-animation="fade-in-up" data-delay="300">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-10 animate-on-scroll opacity-0" data-animation="fade-in-up">
          Get in touch
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto bg-black text-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl animate-on-scroll opacity-0 transform transition duration-700 hover:shadow-xl" data-animation="fade-in-up" data-delay="100"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-transparent border border-white rounded-full px-4 py-2 sm:px-6 sm:py-3 focus:outline-none text-sm sm:text-base transform transition duration-500 hover:scale-105"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="bg-transparent border border-white rounded-full px-4 py-2 sm:px-6 sm:py-3 focus:outline-none text-sm sm:text-base transform transition duration-500 hover:scale-105"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              className="bg-transparent border border-white rounded-full px-4 py-2 sm:px-6 sm:py-3 focus:outline-none text-sm sm:text-base transform transition duration-500 hover:scale-105"
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className="bg-transparent border border-white rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 w-full focus:outline-none text-sm sm:text-base transform transition duration-500 hover:scale-[1.02]"
            required
          ></textarea>

          <div className="w-full flex justify-center mt-6 sm:mt-8">
            <button
              type="submit"
              className="bg-black text-white border border-white px-6 py-2 sm:px-8 rounded-full text-base sm:text-lg hover:bg-white hover:text-black transition transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 text-center animate-on-scroll">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Message Sent!</h3>
            <p className="text-gray-600 mb-6">Thank you for contacting us. We'll get back to you soon.</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
      </section>

      <Footer />
    </div>
  );
};

export default Contact;