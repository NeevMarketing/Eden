
import React from "react";
import { CheckCircle } from "lucide-react";

const WhyChoose: React.FC = () => {
  const reasons = [
    {
      title: "Flexible Stays, Simple Comfort",
      description: "Eden welcomes you with peaceful, fully serviced apartments designed for ease and comfort. Whether it's a brief visit or an extended season, you'll find a space that feels like home; surrounded by nature, thoughtful services, and a warm community."
    },
    {
      title: "Community That Fits You",
      description: "At Eden, you'll always find space for yourself and room to connect. Whether you prefer peaceful hours in your apartment or time spent in the garden or lounge with others, every part of Eden is designed to offer comfort, choice, and quiet luxury surrounded by a gentle, welcoming community."
    },
    {
      title: "Comfort Backed by Care",
      description: "Live confidently, knowing that thoughtful care and healthcare support are always within reach. From medical staff on call to daily services that keep your home running smoothly, Eden allows you to focus on what matters most: your comfort, well-being, and peace of mind."
    },
    {
      title: "Trusted by Families, Chosen by Seniors",
      description: "Families trust Eden because it offers their loved ones more than just a rental; it offers security, thoughtful care, and a beautiful place to thrive. For seniors, it's a chance to enjoy each day at their own pace, surrounded by natural beauty, meaningful comforts, and a team that truly understands what it means to live well."
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
            <div className="w-20 h-1 bg-eden mb-6"></div>
            
            <p className="text-eden-text mb-8 italic">
              Set in the quiet hills of Dehradun, Eden offers a calm, secure place to settle away from the busy streets and noise, yet close to everything essential. Here, mornings are slow, the air is fresh, and the backdrop of mountains makes everyday feel like a retreat.
            </p>
            
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
