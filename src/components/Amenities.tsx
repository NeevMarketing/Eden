
import React from "react";
import { Accessibility, Headphones, Heart, Home, Users, Activity, Utensils } from "lucide-react";
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
      description: "Daily yoga, meditation, and therapeutic sessions to nurture mind, body, and spirit."
    },
    {
      icon: <Home size={24} />,
      title: "Housekeeping & Laundry",
      description: "Regular housekeeping and laundry services to maintain a clean, comfortable living space."
    },
    {
      icon: <Headphones size={24} />,
      title: "Concierge Services",
      description: "Attentive staff available to assist with requests, arrangements, and information."
    },
    {
      icon: <Heart size={24} />,
      title: "On-Call Medical Support",
      description: "Peace of mind with qualified medical professionals available when needed."
    },
    {
      icon: <Utensils size={24} />,
      title: "Community Activities",
      description: "Engage in various social events, workshops, and recreational activities."
    },
    {
      icon: <Accessibility size={24} />,
      title: "Accessibility Features",
      description: "Thoughtfully designed spaces with elevator access and wheelchair-friendly pathways."
    },
    {
      icon: <Users size={24} />,
      title: "Dining Options",
      description: "Enjoy chef-prepared meals in community dining or the privacy of your apartment."
    }
  ];

  return (
    <section id="amenities" className="section-padding bg-eden-beige/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-eden-dark">Amenities & Services</h2>
          <div className="w-20 h-1 bg-eden mx-auto mb-6"></div>
          <p className="text-eden-text">
            At Eden, we provide thoughtful amenities and attentive services to enhance your stay,
            ensuring comfort, convenience, and enrichment in every aspect of daily life.
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
