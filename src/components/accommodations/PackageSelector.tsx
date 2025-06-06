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
  avgPerNight: string;
}
interface PackageSelectorProps {
  onPackageSelect: (packageData: Package) => void;
  onBack: () => void;
}
const PackageSelector = ({
  onPackageSelect,
  onBack
}: PackageSelectorProps) => {
  const packages: Package[] = [{
    id: 'night-7',
    name: '7 Night Plans',
    duration: '7 Days',
    price: 50000,
    savings: 15,
    description: 'Perfect for short getaways',
    avgPerNight: '₹7,143',
    features: ['Private room with daily breakfast', '₹3,000 food vouchers', '₹3,000 spa credit', '4 yoga sessions', 'Access to all amenities including:', 'Swimming pool', 'Library', 'Movie theatre', 'Pool table']
  }, {
    id: 'night-14',
    name: '14 Night Plans',
    duration: '14 Days',
    price: 95000,
    savings: 20,
    description: 'Perfect for longer renewal',
    avgPerNight: '₹6,786',
    features: ['Everything in 7-Night Plan, plus more:', '₹6,000 food vouchers', '₹6,000 spa credit', 'Airport/Railway Pickup & Drop']
  }, {
    id: 'night-30',
    name: '30 Night Plans',
    duration: '30 Days',
    price: 170000,
    savings: 25,
    description: 'Ideal for deep restoration',
    avgPerNight: '₹5,667',
    features: ['Everything in 14-Night Plan, plus more:', '₹6,000 food vouchers', '₹6,000 spa credit', 'Airport/Railway Pickup & Drop']
  }];
  return <div className="space-y-8 mb-16">
      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">
          Pick Your Perfect Stay Plan
        </h2>
        <p className="text-stone-600 font-light">
          Choose a plan that fits your time and lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => <Card key={pkg.id} className={`hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm relative min-h-[600px] ${index === 1 ? 'border-2 border-eden shadow-lg' : ''}`}>
            {index === 1 && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-eden text-white border-eden px-4 py-1 rounded-full flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  Recommended
                </Badge>
              </div>}
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
              <div className="text-sm text-stone-600">
                Avg. per night: {pkg.avgPerNight}
              </div>
            </CardHeader>
            <CardContent className="pt-6 flex flex-col h-full">
              <p className="text-stone-600 mb-6 font-light">{pkg.description}</p>
              
              <div className="space-y-3 mb-6 flex-grow">
                {pkg.features.map((feature, idx) => <div key={idx} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-eden mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-stone-600">{feature}</span>
                  </div>)}
              </div>

              <Button className="w-full bg-eden hover:bg-emerald-700 text-white rounded-xl py-3 mt-auto" onClick={() => onPackageSelect(pkg)}>
                Select Package
              </Button>
            </CardContent>
          </Card>)}
      </div>

      <div className="text-center">
        
      </div>
    </div>;
};
export default PackageSelector;