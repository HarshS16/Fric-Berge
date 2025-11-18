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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[200px] sm:h-[250px] md:h-[380px] lg:h-[450px] overflow-hidden bg-white">
        <img
          src="/herosec.png"
          alt="Salad on Plate"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 mt-8 sm:mt-10"
        />

      </section>

      {/* Store Locator Section */}
      <section id="store-locator" className="w-full py-12 sm:py-16 text-center bg-white relative z-20">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight mb-8 sm:mb-12">
          Stock your Favourite <br /> Sauces & Spreads
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <span className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-0">
            Store Locator
          </span>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Select>
              <SelectTrigger className="w-full sm:w-32 md:w-36 rounded-full border-2">
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full sm:w-32 md:w-36 rounded-full border-2">
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="north">North</SelectItem>
                <SelectItem value="south">South</SelectItem>
                <SelectItem value="east">East</SelectItem>
                <SelectItem value="west">West</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Select>
              <SelectTrigger className="w-full sm:w-32 md:w-36 rounded-full border-2">
                <SelectValue placeholder="Stores" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="reliance">Reliance Fresh</SelectItem>
                <SelectItem value="bigbazaar">Big Bazaar</SelectItem>
                <SelectItem value="dmart">DMart</SelectItem>
              </SelectContent>
            </Select>

            <button className="p-2 sm:p-3 border-2 rounded-full hover:bg-gray-100 transition">
              <Search className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-8 sm:py-10 bg-white relative z-10">
        <div className="w-full h-[250px] sm:h-[300px] md:h-[420px] lg:h-[480px] overflow-hidden rounded-lg relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.097634108463!2d77.08077447612897!3d28.597770375672442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19356ec7f9f5%3A0xf90cf764432dc1d6!2sMG%20Road%2C%20DLF%20Phase%202%2C%20Sector%2025%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1708615422227!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 sm:py-16 bg-white relative z-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-10">
          Get in touch
        </h2>

        <form
          method="POST"
          className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto bg-black text-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-transparent border border-white rounded-full px-4 py-2 sm:px-6 sm:py-3 focus:outline-none text-sm sm:text-base"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="bg-transparent border border-white rounded-full px-4 py-2 sm:px-6 sm:py-3 focus:outline-none text-sm sm:text-base"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              className="bg-transparent border border-white rounded-full px-4 py-2 sm:px-6 sm:py-3 focus:outline-none text-sm sm:text-base"
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className="bg-transparent border border-white rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 w-full focus:outline-none text-sm sm:text-base"
            required
          ></textarea>

          <div className="w-full flex justify-center mt-6 sm:mt-8">
            <button
              type="submit"
              className="bg-black text-white border border-white px-6 py-2 sm:px-8 rounded-full text-base sm:text-lg hover:bg-white hover:text-black transition"
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;