
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Wifi, Coffee, Car, Utensils, Dumbbell } from 'lucide-react';

const StudioPage = () => {
  const accommodationOptions = [
    {
      name: "Crest",
      image: "https://images.unsplash.com/photo-1565182999561-f9a9b5eb7b66?auto=format&fit=crop&q=80",
      description: "Modern studio with panoramic city views and premium amenities for the ultimate urban sanctuary experience."
    },
    {
      name: "Hamilton",
      image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80",
      description: "Elegant studio featuring contemporary design and wellness-focused amenities for mindful living."
    },
    {
      name: "Skyline",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80",
      description: "Luxurious studio with stunning skyline views and integrated wellness facilities for complete tranquility."
    }
  ];

  const stayIncludes = [
    { icon: Wifi, label: "High-Speed WiFi" },
    { icon: Coffee, label: "Daily Refreshments" },
    { icon: Car, label: "Parking Space" },
    { icon: Utensils, label: "Kitchenette" },
    { icon: Dumbbell, label: "Gym Access" }
  ];

  const exploreOptions = [
    {
      title: "Wellness Programs",
      description: "Personalized wellness journeys designed for your studio sanctuary",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80"
    },
    {
      title: "Extended Stays",
      description: "Long-term packages with special rates for extended wellness retreats",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Banner Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565182999561-f9a9b5eb7b66?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-serif font-bold mb-4">Banner Studio</h1>
          <p className="text-xl font-light">Your personal sanctuary for mindful living</p>
        </div>
      </section>

      <main className="section-padding">
        {/* Accommodation Options */}
        <section className="container-custom mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-eden-dark">
              Accommodation Options
            </h2>
            <div className="w-20 h-1 bg-eden mx-auto mb-6"></div>
            <p className="text-eden-text text-lg">
              Choose from our curated collection of studio sanctuaries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accommodationOptions.map((option, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={option.image}
                    alt={option.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-stone-700 border-0 px-3 py-1">
                    Studio
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-stone-800">{option.name}</CardTitle>
                  <CardDescription className="text-stone-600 leading-relaxed font-light">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-eden hover:bg-emerald-700 text-white rounded-xl">
                    Select This Sanctuary
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What Your Stay Includes */}
        <section className="container-custom mb-16 bg-stone-50 py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-eden-dark">
              What Your Stay Includes
            </h2>
            <div className="w-20 h-1 bg-eden mx-auto mb-6"></div>
            <p className="text-eden-text text-lg">
              Every detail thoughtfully curated for your wellness journey
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {stayIncludes.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-eden/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-eden" />
                  </div>
                  <p className="text-stone-700 font-medium">{item.label}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-eden hover:bg-emerald-700 text-white px-8 py-4 rounded-xl">
              Book Your Studio Sanctuary
            </Button>
          </div>
        </section>

        {/* Explore More Options */}
        <section className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-eden-dark">
              Explore More Options
            </h2>
            <div className="w-20 h-1 bg-eden mx-auto mb-6"></div>
            <p className="text-eden-text text-lg">
              Enhance your studio sanctuary experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exploreOptions.map((option, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-serif font-semibold">{option.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 leading-relaxed font-light mb-4">
                    {option.description}
                  </p>
                  <Button variant="outline" className="w-full border-eden text-eden hover:bg-eden hover:text-white rounded-xl">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StudioPage;
