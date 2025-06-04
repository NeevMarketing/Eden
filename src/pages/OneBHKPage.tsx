
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Calendar } from 'lucide-react';
import InquiryFormComponent from '@/components/accommodations/InquiryFormComponent';
import { BookingDetails } from '@/types/accommodation';

const OneBHKPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedSanctuary, setSelectedSanctuary] = useState<string>('');

  const collections = [
    {
      name: "CREST",
      image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80",
      description: "Spacious 1BHK with separate living area and premium wellness amenities for enhanced comfort. Perfect for couples or individuals who value space and luxury.",
      features: [
        "Spacious layouts with modern finishes",
        "Full access to all amenities", 
        "Elegant modular kitchens",
        "Spacious private balconies"
      ]
    },
    {
      name: "HAMILTON", 
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80",
      description: "Contemporary 1BHK featuring modern design and integrated wellness facilities for mindful living. Designed with senior-friendly accessibility in mind.",
      features: [
        "Emergency call systems",
        "Spacious private balconies", 
        "Senior-friendly accessibility design",
        "Elegant modular kitchens"
      ]
    },
    {
      name: "SKYLINE",
      image: "https://images.unsplash.com/photo-1565182999561-f9a9b5eb7b66?auto=format&fit=crop&q=80",
      description: "Luxury 1BHK with stunning views and comprehensive wellness amenities for complete tranquility. The epitome of sophisticated one-bedroom living.",
      features: [
        "Spacious layouts with modern finishes",
        "Full access to all amenities",
        "Elegant modular kitchens", 
        "Spacious private balconies"
      ]
    }
  ];

  const handleSelectSanctuary = (sanctuaryName: string) => {
    setSelectedSanctuary(sanctuaryName);
    setShowForm(true);
  };

  const handleFormSubmit = (formData: any) => {
    console.log('Form submitted with sanctuary:', selectedSanctuary, formData);
    window.open('/thank-you', '_blank');
  };

  if (showForm) {
    const mockBookingDetails: BookingDetails = {
      roomType: {
        id: '1bhk',
        name: '1 BHK Apartment',
        image: collections.find(c => c.name === selectedSanctuary)?.image || '',
        size: '600-800 sq ft',
        guests: 2,
        startingPrice: 25000,
        description: 'Spacious 1BHK apartment',
        amenities: []
      },
      roomCategory: {
        id: selectedSanctuary.toLowerCase(),
        name: selectedSanctuary,
        image: collections.find(c => c.name === selectedSanctuary)?.image || '',
        description: collections.find(c => c.name === selectedSanctuary)?.description || '',
        size: '600-800 sq ft',
        guests: 2,
        startingPrice: 25000,
        amenities: collections.find(c => c.name === selectedSanctuary)?.features || [],
        roomTypeId: '1bhk'
      },
      nights: 1,
      isPackage: false
    };

    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <InquiryFormComponent
            bookingDetails={mockBookingDetails}
            onSubmit={handleFormSubmit}
            onBack={() => setShowForm(false)}
          />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Banner Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-serif font-bold mb-4">Choose Your 1BHK Collection</h1>
          <p className="text-xl font-light">Discover our spacious 1BHK collections designed for comfortable living</p>
        </div>
      </section>

      <main className="section-padding">
        {/* Collections */}
        <section className="container-custom space-y-16">
          {collections.map((collection, index) => (
            <div key={collection.name} className="space-y-8">
              <Card className="overflow-hidden shadow-xl border-0">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-96 lg:h-full object-cover"
                    />
                  </div>
                  <div className={`p-12 flex flex-col justify-center bg-gradient-to-br from-stone-50 to-white ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center mb-6">
                      <Badge className="bg-eden/10 text-eden border-eden px-4 py-2 rounded-full mr-4 text-sm font-medium">
                        1BHK Collection
                      </Badge>
                    </div>
                    
                    <h2 className="text-4xl font-serif font-bold text-stone-800 mb-6">{collection.name}</h2>
                    <p className="text-stone-600 leading-relaxed mb-8 text-lg font-light">{collection.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {collection.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-stone-600">
                          <CheckCircle className="w-5 h-5 text-eden mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button 
                        size="lg"
                        className="flex-1 bg-eden hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => handleSelectSanctuary(collection.name)}
                      >
                        <Calendar className="w-5 h-5 mr-2" />
                        Select Sanctuary
                      </Button>
                      <Button 
                        variant="outline"
                        size="lg"
                        className="flex-1 border-eden text-eden hover:bg-eden hover:text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300"
                      >
                        <Users className="w-5 h-5 mr-2" />
                        Virtual Tour
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-eden/5 to-emerald-50 py-16 mt-20 rounded-3xl">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-stone-800">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-stone-600 text-lg mb-8 max-w-2xl mx-auto font-light">
              Choose your perfect 1BHK sanctuary and let our wellness team create a personalized experience just for you.
            </p>
            <Button 
              size="lg"
              className="bg-eden hover:bg-emerald-700 text-white px-12 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setShowForm(true)}
            >
              Start Your Wellness Journey
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OneBHKPage;
