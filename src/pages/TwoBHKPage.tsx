import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Calendar, ArrowLeft } from 'lucide-react';
import InquiryFormComponent from '@/components/accommodations/InquiryFormComponent';
import DatePackageSelector from '@/components/accommodations/DateSelector';
import { BookingDetails } from '@/types/accommodation';

const TwoBHKPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDatePackage, setShowDatePackage] = useState(false);
  const [selectedSanctuary, setSelectedSanctuary] = useState<string>('');

  const collections = [
    {
      name: "CREST",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80",
      description: "Luxurious 2BHK with expansive living spaces and premium wellness amenities for ultimate comfort. Perfect for families or those who appreciate generous living space.",
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
      description: "Elegant 2BHK featuring sophisticated design and comprehensive wellness facilities for refined living. Designed with accessibility and comfort in mind.",
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
      description: "Premium 2BHK with breathtaking views and integrated wellness amenities for exceptional tranquility. The pinnacle of luxury two-bedroom living.",
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
    setShowDatePackage(true);
  };

  const handleDatePackageSelect = (details: Partial<BookingDetails>) => {
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
        id: '2bhk',
        name: '2 BHK Apartment',
        image: collections.find(c => c.name === selectedSanctuary)?.image || '',
        size: '900-1200 sq ft',
        guests: 4,
        startingPrice: 35000,
        description: 'Spacious 2BHK apartment',
        amenities: []
      },
      roomCategory: {
        id: selectedSanctuary.toLowerCase(),
        name: selectedSanctuary,
        image: collections.find(c => c.name === selectedSanctuary)?.image || '',
        description: collections.find(c => c.name === selectedSanctuary)?.description || '',
        size: '900-1200 sq ft',
        guests: 4,
        startingPrice: 35000,
        amenities: collections.find(c => c.name === selectedSanctuary)?.features || [],
        roomTypeId: '2bhk'
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

  if (showDatePackage) {
    const mockRoomCategory = {
      id: selectedSanctuary.toLowerCase(),
      name: selectedSanctuary,
      image: collections.find(c => c.name === selectedSanctuary)?.image || '',
      description: collections.find(c => c.name === selectedSanctuary)?.description || '',
      size: '900-1200 sq ft',
      guests: 4,
      startingPrice: 35000,
      amenities: collections.find(c => c.name === selectedSanctuary)?.features || [],
      roomTypeId: '2bhk'
    };

    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <DatePackageSelector
            roomCategory={mockRoomCategory}
            onSelect={handleDatePackageSelect}
            onBack={() => setShowDatePackage(false)}
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-serif font-bold mb-4">Choose Your 2BHK Collection</h1>
          <p className="text-xl font-light">Discover our premium 2BHK collections designed for luxurious living</p>
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
              <Card className="overflow-hidden border-0 bg-transparent shadow-none">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-96 lg:h-full object-cover"
                      style={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)' }}
                    />
                  </div>
                  <div className={`p-12 flex flex-col justify-center bg-gradient-to-br from-stone-50 to-white ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center mb-6">
                      <Badge className="bg-eden/10 text-eden border-eden px-4 py-2 rounded-full mr-4 text-sm font-medium">
                        2BHK Collection
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
                        className="flex-1 bg-eden hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300"
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

        {/* Safety & Accessibility Features Section */}
        <section className="bg-gradient-to-r from-stone-50 to-stone-100 py-16 mt-20 rounded-3xl">
          <div className="container-custom text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-stone-800">
              Safety & Accessibility Features
            </h2>
            <div className="w-20 h-1 bg-eden mx-auto mb-6"></div>
            <p className="text-stone-600 text-lg mb-8 max-w-2xl mx-auto font-light">
              All our residences are designed with senior safety and accessibility in mind.
            </p>
          </div>

          <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center bg-white border-0">
              <div className="w-12 h-12 bg-eden/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-eden rounded-sm"></div>
              </div>
              <h3 className="text-lg font-serif font-semibold mb-3 text-stone-800">Emergency Systems</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                All units equipped with emergency call systems that connect directly to our 24/7 medical team.
              </p>
            </Card>

            <Card className="p-6 text-center bg-white border-0">
              <div className="w-12 h-12 bg-eden/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-eden rounded-sm"></div>
              </div>
              <h3 className="text-lg font-serif font-semibold mb-3 text-stone-800">Accessible Design</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Wider doorways, grab bars, and step-free entrances for ease of movement and enhanced accessibility.
              </p>
            </Card>

            <Card className="p-6 text-center bg-white border-0">
              <div className="w-12 h-12 bg-eden/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-eden rounded-sm"></div>
              </div>
              <h3 className="text-lg font-serif font-semibold mb-3 text-stone-800">Anti-Slip Flooring</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                High-quality anti-slip flooring throughout, particularly in bathrooms and other wet areas.
              </p>
            </Card>

            <Card className="p-6 text-center bg-white border-0">
              <div className="w-12 h-12 bg-eden/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-eden rounded-sm"></div>
              </div>
              <h3 className="text-lg font-serif font-semibold mb-3 text-stone-800">24/7 Security</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Round-the-clock security personnel, CCTV monitoring, and secure access to all areas of the property.
              </p>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TwoBHKPage;
