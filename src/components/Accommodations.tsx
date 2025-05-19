
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tab } from "@headlessui/react";
import { Bed } from "lucide-react";

// Tab panel content for different duration stays
const DurationContent: React.FC<{ weeks: number; type: string; price: string }> = ({ weeks, type, price }) => {
  return (
    <div className="animate-fade-in space-y-4 py-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h4 className="text-xl font-serif text-eden-dark">{weeks}-Week Stay</h4>
          <p className="text-eden-text">All-inclusive package</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-serif text-eden">₹{price}</p>
          <p className="text-sm text-muted-foreground">Per person</p>
        </div>
      </div>
      
      <ul className="space-y-2 text-eden-text">
        <li className="flex items-start">
          <span className="mr-2 text-eden">✓</span>
          <span>Fully furnished {type} apartment</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-eden">✓</span>
          <span>Three daily meals and refreshments</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-eden">✓</span>
          <span>Weekly housekeeping and laundry</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-eden">✓</span>
          <span>Access to all amenities and wellness programs</span>
        </li>
      </ul>
      
      <Button className="btn-primary w-full mt-6">
        Enquire Now
      </Button>
    </div>
  );
};

// Accommodation type card component
const AccommodationCard: React.FC<{
  title: string;
  description: string;
  image: string;
  roomSize: string;
  occupancy: string;
  prices: { [key: string]: string };
}> = ({ title, description, image, roomSize, occupancy, prices }) => {
  return (
    <Card className="overflow-hidden border-eden-light/50 shadow-md">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-eden-dark font-serif">{title}</CardTitle>
          <Bed className="text-eden" size={20} />
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 text-sm mb-6">
          <div>
            <p className="text-muted-foreground">Room Size</p>
            <p className="font-medium">{roomSize}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Occupancy</p>
            <p className="font-medium">{occupancy}</p>
          </div>
        </div>
        
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-lg bg-eden-light/50 p-1">
            <Tab className={({ selected }) => 
              `w-full rounded-md py-2 text-sm font-medium transition-all
              ${selected 
                ? 'bg-white text-eden shadow' 
                : 'text-eden-text hover:bg-white/20 hover:text-eden'}`
            }>
              1 Week
            </Tab>
            <Tab className={({ selected }) => 
              `w-full rounded-md py-2 text-sm font-medium transition-all
              ${selected 
                ? 'bg-white text-eden shadow' 
                : 'text-eden-text hover:bg-white/20 hover:text-eden'}`
            }>
              2 Weeks
            </Tab>
            <Tab className={({ selected }) => 
              `w-full rounded-md py-2 text-sm font-medium transition-all
              ${selected 
                ? 'bg-white text-eden shadow' 
                : 'text-eden-text hover:bg-white/20 hover:text-eden'}`
            }>
              4 Weeks
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <DurationContent weeks={1} type={title} price={prices.oneWeek} />
            </Tab.Panel>
            <Tab.Panel>
              <DurationContent weeks={2} type={title} price={prices.twoWeek} />
            </Tab.Panel>
            <Tab.Panel>
              <DurationContent weeks={4} type={title} price={prices.fourWeek} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </CardContent>
    </Card>
  );
};

const Accommodations: React.FC = () => {
  const accommodations = [
    {
      title: "Studio Apartment",
      description: "Cozy, thoughtfully designed space with everything within easy reach",
      image: "https://images.unsplash.com/photo-1565182999561-f9a9b5eb7b66?auto=format&fit=crop&q=80",
      roomSize: "400 sq.ft.",
      occupancy: "1-2 Persons",
      prices: {
        oneWeek: "25,000",
        twoWeek: "45,000",
        fourWeek: "80,000"
      }
    },
    {
      title: "1BHK Apartment",
      description: "Spacious living area with a separate bedroom for enhanced privacy",
      image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80",
      roomSize: "600 sq.ft.",
      occupancy: "1-2 Persons",
      prices: {
        oneWeek: "35,000",
        twoWeek: "65,000",
        fourWeek: "120,000"
      }
    },
    {
      title: "2BHK Apartment",
      description: "Premium living space with two bedrooms, ideal for couples or visitors",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80",
      roomSize: "850 sq.ft.",
      occupancy: "2-4 Persons",
      prices: {
        oneWeek: "45,000",
        twoWeek: "85,000",
        fourWeek: "160,000"
      }
    }
  ];

  return (
    <section id="accommodations" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-eden-dark">Accommodation Packages</h2>
          <div className="w-20 h-1 bg-eden mx-auto mb-6"></div>
          <p className="text-eden-text">
            Experience gracious living in our thoughtfully designed accommodations,
            available for stays of 1 to 4 weeks, with all the comforts of home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <AccommodationCard
              key={index}
              title={accommodation.title}
              description={accommodation.description}
              image={accommodation.image}
              roomSize={accommodation.roomSize}
              occupancy={accommodation.occupancy}
              prices={accommodation.prices}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
