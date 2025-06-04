
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Calendar, Users } from 'lucide-react';

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
        'All meals included'
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
        'All meals included'
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
        'All meals included'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">
          Choose Your Wellness Package
        </h2>
        <p className="text-stone-600 font-light">
          Select a comprehensive wellness program designed for your transformation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <Card key={pkg.id} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-br from-emerald-50 to-teal-50 pb-4">
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-eden/10 text-eden border-eden px-3 py-1 rounded-full">
                  Save {pkg.savings}%
                </Badge>
                <div className="flex items-center text-stone-600">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-sm">{pkg.duration}</span>
                </div>
              </div>
              <CardTitle className="text-xl font-serif text-stone-800">{pkg.name}</CardTitle>
              <div className="text-3xl font-bold text-emerald-700">
                ₹{pkg.price.toLocaleString()}
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-stone-600 mb-6 font-light">{pkg.description}</p>
              
              <div className="space-y-3 mb-6">
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-eden mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-stone-600">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="w-full bg-eden hover:bg-emerald-700 text-white rounded-xl py-3"
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
          className="border-stone-300 text-stone-600 hover:bg-stone-50 rounded-xl px-8"
        >
          Back to Journey Options
        </Button>
      </div>
    </div>
  );
};

export default PackageSelector;
