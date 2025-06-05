
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-serif font-semibold text-eden-dark">Eden</span>
          <span className="text-md text-eden ml-1 font-light">Gracious Living</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/#about" className="text-eden-text hover:text-eden transition-colors">About</a>
          <button 
            onClick={() => scrollToSection('choose-your-sanctuary')} 
            className="text-eden-text hover:text-eden transition-colors bg-transparent border-none cursor-pointer"
          >
            Accommodations
          </button>
          <a href="/#amenities" className="text-eden-text hover:text-eden transition-colors">Amenities</a>
          <a href="/gallery" className="text-eden-text hover:text-eden transition-colors">Gallery</a>
          <a href="/#faq" className="text-eden-text hover:text-eden transition-colors">FAQs</a>
          <a href="/#contact">
            <Button variant="outline" className="border-eden text-eden hover:bg-eden hover:text-white">Contact Us</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-eden-dark"
          onClick={toggleMobileMenu}
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
          <div className="container-custom flex flex-col space-y-4">
            <a href="/#about" className="text-eden-text hover:text-eden py-2 px-4" onClick={toggleMobileMenu}>About</a>
            <button 
              onClick={() => scrollToSection('choose-your-sanctuary')} 
              className="text-eden-text hover:text-eden py-2 px-4 text-left bg-transparent border-none cursor-pointer"
            >
              Accommodations
            </button>
            <a href="/#amenities" className="text-eden-text hover:text-eden py-2 px-4" onClick={toggleMobileMenu}>Amenities</a>
            <a href="/gallery" className="text-eden-text hover:text-eden py-2 px-4" onClick={toggleMobileMenu}>Gallery</a>
            <a href="/#faq" className="text-eden-text hover:text-eden py-2 px-4" onClick={toggleMobileMenu}>FAQs</a>
            <a href="/#contact" className="py-2 px-4" onClick={toggleMobileMenu}>
              <Button className="bg-eden text-white w-full">Contact Us</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
