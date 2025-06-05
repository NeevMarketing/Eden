
import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80')"
      }} />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-eden-beige/70 to-eden-light/70 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h5 className="text-eden font-medium mb-4 animate-fade-in">EDEN GRACIOUS LIVING</h5>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6 text-eden-dark animate-fade-in lg:text-5xl">Find the peace, comfort, and connection you've been seeking.</h1>
            <p className="text-lg md:text-xl text-eden-text mb-8 animate-fade-in">Flexible-length stays in premium apartments, with wellness amenities, privacy, and everything you need in the foothills of Dehradun.</p>
            <div className="flex flex-col sm:flex-row lg:justify-start justify-center gap-4 animate-fade-in">
              <Button className="btn-primary">
                Enquire Now
              </Button>
              <Button variant="outline" className="btn-secondary">
                Explore Packages
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=600&h=400" 
                alt="Eden Gracious Living" 
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
