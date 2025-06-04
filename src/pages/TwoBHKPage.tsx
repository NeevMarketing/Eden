
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Wifi, Coffee, Car, Utensils, Dumbbell, CheckCircle } from 'lucide-react';

const TwoBHKPage = () => {
  const accommodationOptions = [
    {
      name: "Crest",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80",
      description: "Luxurious 2BHK with expansive living spaces and premium wellness amenities for ultimate comfort.",
      features: [
        "Spacious layouts with modern finishes",
        "Full access to all amenities", 
        "Elegant modular kitchens",
        "Spacious private balconies"
      ]
    },
    {
      name: "Hamilton",
      image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80",
      description: "Elegant 2BHK featuring sophisticated design and comprehensive wellness facilities for refined living.",
      features: [
        "Emergency call systems",
        "Spacious private balconies", 
        "Senior-friendly accessibility design",
        "Elegant modular kitchens"
      ]
    },
    {
      name: "Skyline",
      image: "https://images.unsplash.com/photo-1565182999561-f9a9b5eb7b66?auto=format&fit=crop&q=80",
      description: "Premium 2BHK with breathtaking views and integrated wellness amenities for exceptional tranquility.",
      features: [
        "Spacious layouts with modern finishes",
        "Full access to all amenities",
        "Elegant modular kitchens", 
        "Spacious private balconies"
      ]
    }
  ];

  const stayIncludes = [
    { icon: Wifi, label: "High-Speed WiFi" },
    { icon: Coffee, label: "Daily Refreshments" },
    { icon: Car, label: "Parking Space" },
    { icon: Utensils, label: "Full Kitchen" },
    { icon: Dumbbell, label: "Gym Access" }
  ];

  const exploreOptions = [
    {
      title: "Wellness Programs",
      description: "Premium wellness journeys designed for your 2BHK sanctuary",
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-serif font-bold mb-4">2BHK</h1>
          <p className="text-xl font-light">Discover our luxury 2BHK apartments designed specifically for senior living</p>
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
              Eden offers 2BHK apartments for purchase, while Studio and 1BHK units are available for rental stays under our "Try Before You Buy" program.
            </p>
          </div>

          <div className="space-y-8">
            {accommodationOptions.map((option, index) => (
              <Card key={index} className="overflow-hidden shadow-lg">
                <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={option.image}
                      alt={option.name}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                  </div>
                  <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center mb-4">
                      <Badge className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full mr-4">
                        Available for Purchase
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4">{option.name}</h3>
                    <p className="text-stone-600 leading-relaxed mb-6 font-light">{option.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {option.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-stone-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="bg-eden hover:bg-emerald-700 text-white rounded-xl self-start px-6 py-3">
                      Explore {option.name} Apartments
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* What Your Stay Includes */}
        <section className="bg-stone-50 py-16 mb-16">
          <div className="container-custom">
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
                Book Your 2BHK Sanctuary
              </Button>
            </div>
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
              Enhance your 2BHK sanctuary experience
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

export default TwoBHKPage;
