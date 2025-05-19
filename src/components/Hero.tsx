
import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80')",
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-eden-beige/70 to-eden-light/70 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h5 className="text-eden font-medium mb-4 animate-fade-in">EDEN GRACIOUS LIVING</h5>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6 text-eden-dark animate-fade-in">
            Stay Where You're Cared For.
          </h1>
          <p className="text-lg md:text-xl text-eden-text mb-8 animate-fade-in">
            Thoughtful long-stay apartments designed for graceful living in Dehradun.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Button className="btn-primary">
              Enquire Now
            </Button>
            <Button variant="outline" className="btn-secondary">
              Explore Packages
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
