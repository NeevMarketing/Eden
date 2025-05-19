
import React from "react";
import { CheckCircle } from "lucide-react";

const WhyChoose: React.FC = () => {
  const reasons = [
    {
      title: "Secure, Peaceful Location",
      description: "Nestled in the tranquil landscapes of Dehradun, offering both serenity and security."
    },
    {
      title: "Short-Term Flexibility",
      description: "Enjoy the comforts of a permanent home with the flexibility of 1 to 4-week stays."
    },
    {
      title: "Community Without Pressure",
      description: "Connect with like-minded individuals while maintaining your personal space and privacy."
    },
    {
      title: "Hospitality with Healthcare Readiness",
      description: "Experience premium hospitality with the assurance of healthcare support when needed."
    },
    {
      title: "Loved by Families, Trusted by Elders",
      description: "Peace of mind for families and a gracious living experience for our senior guests."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80" 
                alt="Eden Gracious Living" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-eden-accent/30 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-eden-light rounded-lg -z-10"></div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-eden-dark">Why Choose Eden</h2>
            <div className="w-20 h-1 bg-eden mb-8"></div>
            
            <ul className="space-y-6">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 text-eden mr-4">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-eden-dark mb-1">{reason.title}</h3>
                    <p className="text-eden-text">{reason.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
