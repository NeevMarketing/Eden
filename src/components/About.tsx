
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-eden-beige/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-eden-dark">About Eden Gracious Living</h2>
          <div className="w-20 h-1 bg-eden mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-serif text-eden mb-6">A Senior-First Hospitality Space</h3>
            <p className="text-eden-text mb-4">
              Eden Gracious Living is more than just accommodation—it's a philosophy of living that embraces comfort, dignity, and holistic wellbeing for our senior guests.
            </p>
            <p className="text-eden-text mb-4">
              Nestled in the serene landscapes of Dehradun, our thoughtfully designed residences offer a perfect blend of independence and support, privacy and community, tranquility and engagement.
            </p>
            <p className="text-eden-text">
              Our attentive staff, peaceful campus, and tailored services create an environment where seniors can truly thrive, enjoying each day with grace and purpose.
            </p>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80" 
                alt="Eden Gracious Living peaceful environment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-eden-light rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-eden-accent/30 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
