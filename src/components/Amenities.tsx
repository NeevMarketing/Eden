
import React from "react";
import { Accessibility, Headphones, Heart, Home, Activity, Utensils } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AmenityProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AmenityCard: React.FC<AmenityProps> = ({ icon, title, description }) => {
  return (
    <Card className="border-eden-light/50 hover:shadow-md transition-all duration-300 overflow-hidden group bg-white">
      <CardContent className="p-6">
        <div className="mb-4 text-eden bg-eden-light/50 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-eden group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-serif text-eden-dark mb-2">{title}</h3>
        <p className="text-eden-text">{description}</p>
      </CardContent>
    </Card>
  );
};

const Amenities: React.FC = () => {
  const amenities = [
    {
      icon: <Activity size={24} />,
      title: "Wellness Centre",
      description: "Start your mornings with yoga or meditation. Take part in guided wellness routines that help you care for your body and mind."
    },
    {
      icon: <Home size={24} />,
      title: "Housekeeping & Laundry",
      description: "Enjoy the comfort of a clean, fresh space without lifting a finger. Our team takes care of the details, so your days stay light and relaxed."
    },
    {
      icon: <Headphones size={24} />,
      title: "Concierge Services",
      description: "Need help arranging something? Our team is here to quietly assist, offer support when you need it, without ever intruding."
    },
    {
      icon: <Heart size={24} />,
      title: "On-Call Medical Support",
      description: "With qualified professionals available, you can rest easy knowing help is nearby if needed. Offering peace of mind."
    },
    {
      icon: <Accessibility size={24} />,
      title: "Accessibility Features",
      description: "Every path, every apartment, every corner is designed with care from elevators to wheelchair-friendly spaces, so you can move freely and comfortably."
    },
    {
      icon: <Utensils size={24} />,
      title: "Dining Options",
      description: "Enjoy freshly prepared meals, whether in the company of others or quietly in your own space. Thoughtful dining that suits your tastes and your moments."
    }
  ];

  return (
    <section id="amenities" className="section-padding bg-eden-beige/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-eden-dark">Amenities & Services</h2>
          <div className="w-20 h-1 bg-eden mx-auto mb-6"></div>
          <p className="text-eden-text">
            At Eden, every detail is shaped to bring calm, ease, and gentle enrichment to your everyday life. You'll find thoughtful spaces and attentive services designed not to impress, but to quietly support the way you want to live — in peace, comfort, and without distractions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <AmenityCard
              key={index}
              icon={amenity.icon}
              title={amenity.title}
              description={amenity.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
