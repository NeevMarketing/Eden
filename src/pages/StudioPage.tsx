
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Calendar, ArrowLeft } from 'lucide-react';
import InquiryFormComponent from '@/components/accommodations/InquiryFormComponent';
import JourneyCTASection from '@/components/accommodations/JourneyCTASection';
import { BookingDetails } from '@/types/accommodation';

const StudioPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedSanctuary, setSelectedSanctuary] = useState<string>('');

  const collections = [
    {
      name: "CREST",
      image: "https://images.unsplash.com/photo-1565182999561-f9a9b5eb7b66?auto=format&fit=crop&q=80",
      description: "Modern studio with panoramic city views and premium amenities for the ultimate urban sanctuary experience. Designed for those who appreciate contemporary luxury.",
      features: [
        "Spacious layouts with modern finishes",
        "Full access to all amenities", 
        "Elegant modular kitchens",
        "Spacious private balconies"
      ]
    },
    {
      name: "HAMILTON",
      image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80",
      description: "Elegant studio featuring contemporary design and wellness-focused amenities for mindful living. Perfect for those seeking tranquility and comfort.",
      features: [
        "Emergency call systems",
        "Spacious private balconies", 
        "Senior-friendly accessibility design",
        "Elegant modular kitchens"
      ]
    },
    {
      name: "SKYLINE",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80",
      description: "Luxurious studio with stunning skyline views and integrated wellness facilities for complete tranquility. The pinnacle of sophisticated living.",
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

  const handleBackToSanctuary = () => {
    window.location.href = '/#accommodations';
  };

  if (showForm) {
    const mockBookingDetails: BookingDetails = {
      roomType: {
        id: 'studio',
        name: 'Studio Apartment',
        image: collections.find(c => c.name === selectedSanctuary)?.image || '',
        size: '400-500 sq ft',
        guests: 1,
        startingPrice: 15000,
        description: 'Comfortable studio apartment',
        amenities: []
      },
      roomCategory: {
        id: selectedSanctuary.toLowerCase(),
        name: selectedSanctuary,
        image: collections.find(c => c.name === selectedSanctuary)?.image || '',
        description: collections.find(c => c.name === selectedSanctuary)?.description || '',
        size: '400-500 sq ft',
        guests: 1,
        startingPrice: 15000,
        amenities: collections.find(c => c.name === selectedSanctuary)?.features || [],
        roomTypeId: 'studio'
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565182999561-f9a9b5eb7b66?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-serif font-bold mb-4">Choose Your Studio Collection</h1>
          <p className="text-xl font-light">Discover our carefully curated studio collections designed for modern living</p>
        </div>
      </section>

      <main className="section-padding">
        {/* Back Button */}
        <div className="container-custom mb-8">
          <Button 
            variant="outline"
            onClick={handleBackToSanctuary}
            className="border-stone-300 text-stone-600 hover:bg-stone-50 rounded-xl px-6 py-3"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Choose Your Sanctuary
          </Button>
        </div>

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
                        Studio Collection
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

        {/* New CTA Section */}
        <JourneyCTASection onStartJourney={() => setShowForm(true)} />
      </main>

      <Footer />
    </div>
  );
};

export default StudioPage;
