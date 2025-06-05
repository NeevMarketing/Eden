
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Calendar, Users, Star } from 'lucide-react';

interface Package {
  id: string;
  name: string;
  duration: string;
  price: number;
  savings: number;
  description: string;
  features: string[];
}

interface PackageSelectorProps {
  onPackageSelect: (packageData: Package) => void;
  onBack: () => void;
}

const PackageSelector = ({ onPackageSelect, onBack }: PackageSelectorProps) => {
  const packages: Package[] = [
    {
      id: 'wellness-7',
      name: 'Wellness Retreat - 7 Days',
      duration: '7 Days',
      price: 35000,
      savings: 15,
      description: 'A week-long wellness journey with daily yoga, spa treatments, and personalized nutrition.',
      features: [
        'Daily yoga and meditation sessions',
        '3 spa treatments included',
        'Personalized nutrition consultation',
        'Wellness workshop access',
        'All meals included',
        'Airport transfers',
        '24/7 concierge service'
      ]
    },
    {
      id: 'wellness-14',
      name: 'Wellness Retreat - 14 Days',
      duration: '14 Days',
      price: 65000,
      savings: 20,
      description: 'Two weeks of comprehensive wellness programming for deep relaxation and rejuvenation.',
      features: [
        'Daily yoga and meditation sessions',
        '6 spa treatments included',
        'Health assessment and consultation',
        'Fitness training sessions',
        'Cooking workshops',
        'All meals included',
        'Personal wellness coach',
        'Medical check-ups',
        'Nature excursions'
      ]
    },
    {
      id: 'wellness-30',
      name: 'Wellness Retreat - 30 Days',
      duration: '30 Days',
      price: 120000,
      savings: 25,
      description: 'A month-long transformative wellness experience with comprehensive health programs.',
      features: [
        'Daily yoga and meditation sessions',
        '12 spa treatments included',
        'Comprehensive health assessment',
        'Personal trainer sessions',
        'Nutritionist consultations',
        'Wellness lifestyle coaching',
        'All meals included',
        'Weekly medical check-ups',
        'Detox programs',
        'Mindfulness workshops',
        'Cultural activities',
        'Guest speaker sessions'
      ]
    }
  ];

  return (
    <div className="space-y-8 mb-16">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 mb-4">
          Choose Your Wellness Package
        </h2>
        <p className="text-stone-600 font-light text-sm md:text-base">
          Select a comprehensive wellness program designed for your transformation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {packages.map((pkg, index) => (
          <Card key={pkg.id} className={`hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm relative ${
            index === 1 ? 'border-2 border-eden shadow-lg' : ''
          }`}>
            {index === 1 && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-eden text-white border-eden px-4 py-1 rounded-full flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  Recommended
                </Badge>
              </div>
            )}
            <CardHeader className="bg-gradient-to-br from-emerald-50 to-teal-50 pb-4">
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-eden/10 text-eden border-eden px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                  Save {pkg.savings}%
                </Badge>
                <div className="flex items-center text-stone-600">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                  <span className="text-xs md:text-sm">{pkg.duration}</span>
                </div>
              </div>
              <CardTitle className="text-lg md:text-xl font-serif text-stone-800">{pkg.name}</CardTitle>
              <div className="text-2xl md:text-3xl font-bold text-emerald-700">
                ₹{pkg.price.toLocaleString()}
              </div>
            </CardHeader>
            <CardContent className="pt-4 md:pt-6 flex flex-col h-full">
              <p className="text-stone-600 mb-4 md:mb-6 font-light text-sm md:text-base">{pkg.description}</p>
              
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-eden mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-stone-600">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="w-full bg-eden hover:bg-emerald-700 text-white rounded-xl py-2 md:py-3 mt-auto text-sm md:text-base"
                onClick={() => onPackageSelect(pkg)}
              >
                Select Package
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="border-stone-300 text-stone-600 hover:bg-stone-50 rounded-xl px-6 md:px-8 text-sm md:text-base"
        >
          Back to Journey Options
        </Button>
      </div>
    </div>
  );
};

export default PackageSelector;
