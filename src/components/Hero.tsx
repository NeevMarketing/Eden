import React from "react";
import { Button } from "@/components/ui/button";
const Hero: React.FC = () => {
  function scrollTOBottom(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <section className="relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 z-0"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Home%20page/Home-Page-Cover.jpg?updatedAt=1749655344808')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-eden-beige/10 to-eden-light/70 z-10"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h5 className="text-eden font-medium mb-4 animate-fade-in"></h5>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6 text-eden-dark animate-fade-in lg:text-5xl">
            Premium Apartments
            <br />
            Thoughtfully Designed
          </h1>
          <p className="text-lg md:text-xl text-eden-text mb-8 animate-fade-in">
            Flexible, Private and Peaceful stays
            <br /> in the Valley of Dehradun.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <a href="/#contact">
              <Button className="btn-primary">Book Now</Button>
            </a>
            <a href="/#choose-your-sanctuary">
              <Button variant="outline" className="btn-secondary">
                Explore Apartments
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
export default Hero;
