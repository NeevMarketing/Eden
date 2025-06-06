
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft, CheckCircle } from 'lucide-react';
import DatePickerComponent from './DatePickerComponent';
import PackageSelector from './PackageSelector';
import { RoomCategory } from '@/types/accommodation';
import { differenceInDays, format } from 'date-fns';

interface DatePackageSelectorProps {
  roomCategory: RoomCategory;
  onSelect: (details: any) => void;
  onBack: () => void;
}

const DatePackageSelector = ({ roomCategory, onSelect, onBack }: DatePackageSelectorProps) => {
  const [selectedOption, setSelectedOption] = useState<'dates' | 'package' | null>(null);
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();

  const handleCustomDatesSelect = () => {
    if (checkInDate && checkOutDate) {
      const nights = differenceInDays(checkOutDate, checkInDate);
      onSelect({
        isPackage: false,
        checkInDate,
        checkOutDate,
        nights: nights > 0 ? nights : 1,
        totalPrice: roomCategory.startingPrice * (nights > 0 ? nights : 1)
      });
    }
  };

  const handlePackageSelect = (packageData: any) => {
    const nights = parseInt(packageData.duration.split(' ')[0]);
    onSelect({
      isPackage: true,
      packageDetails: packageData,
      nights,
      totalPrice: packageData.price
    });
  };

  if (selectedOption === 'package') {
    return (
      <div className="section-padding">
        <div className="container-custom">
          <div className="mb-8">
            <Button 
              variant="outline"
              onClick={() => setSelectedOption(null)}
              className="border-stone-300 text-stone-600 hover:bg-stone-50 rounded-xl px-6 py-3"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Journey Options
            </Button>
          </div>
          <PackageSelector
            onPackageSelect={handlePackageSelect}
            onBack={() => setSelectedOption(null)}
          />
        </div>
      </div>
    );
  }

  if (selectedOption === 'dates') {
    return (
      <div className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="mb-8">
            <Button 
              variant="outline"
              onClick={() => setSelectedOption(null)}
              className="border-stone-300 text-stone-600 hover:bg-stone-50 rounded-xl px-6 py-3"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Journey Options
            </Button>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">
              Plan Your Custom Journey
            </h2>
            <p className="text-stone-600 font-light">
              Choose your preferred arrival and departure dates for a personalized stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DatePickerComponent
              title="Arrival Date"
              placeholder="Select check-in date"
              selectedDate={checkInDate}
              onDateSelect={setCheckInDate}
            />
            
            <DatePickerComponent
              title="Departure Date"
              placeholder="Select check-out date"
              selectedDate={checkOutDate}
              onDateSelect={setCheckOutDate}
            />
          </div>

          {checkInDate && checkOutDate && (
            <Card className="bg-gradient-to-r from-eden/5 to-emerald/5 border-eden/20 mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-stone-800">Journey Summary</h3>
                  <Badge className="bg-eden/10 text-eden border-eden">
                    {differenceInDays(checkOutDate, checkInDate)} nights
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-stone-600">
                  <div>
                    <span className="font-medium">Check-in:</span><br />
                    {format(checkInDate, 'PPP')}
                  </div>
                  <div>
                    <span className="font-medium">Check-out:</span><br />
                    {format(checkOutDate, 'PPP')}
                  </div>
                  <div>
                    <span className="font-medium">Total Price:</span><br />
                    ₹{(roomCategory.startingPrice * differenceInDays(checkOutDate, checkInDate)).toLocaleString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="text-center">
            <Button 
              onClick={handleCustomDatesSelect}
              disabled={!checkInDate || !checkOutDate || differenceInDays(checkOutDate, checkInDate) <= 0}
              className="bg-eden hover:bg-emerald-700 text-white px-8 py-3 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Continue with Custom Dates
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="mb-8">
          <Button 
            variant="outline"
            onClick={onBack}
            className="border-stone-300 text-stone-600 hover:bg-stone-50 rounded-xl px-6 py-3"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Collections
          </Button>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">
            Plan Your Retreat
          </h2>
          <p className="text-stone-600 font-light mb-6">
            Choose between wellness packages or create your custom journey dates
          </p>
          <div className="bg-gradient-to-r from-eden/10 to-emerald/10 rounded-xl p-4 inline-block">
            <p className="text-eden font-medium">
              Selected: {roomCategory.name} • {roomCategory.size} • Starting from ₹{roomCategory.startingPrice.toLocaleString()}/night
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm cursor-pointer"
                onClick={() => setSelectedOption('package')}>
            <CardHeader className="bg-gradient-to-br from-emerald-50 to-teal-50">
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-eden/10 text-eden border-eden">Popular Choice</Badge>
                <Clock className="w-5 h-5 text-eden" />
              </div>
              <CardTitle className="text-xl font-serif text-stone-800">Wellness Packages</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-stone-600 mb-6 font-light">
                Pre-designed wellness programs with comprehensive inclusions and structured activities.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-eden mr-3" />
                  <span className="text-sm text-stone-600">7, 14, or 30-day programs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-eden mr-3" />
                  <span className="text-sm text-stone-600">All-inclusive pricing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-eden mr-3" />
                  <span className="text-sm text-stone-600">Structured wellness activities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-eden mr-3" />
                  <span className="text-sm text-stone-600">Better value for money</span>
                </div>
              </div>

              <Button className="w-full bg-eden hover:bg-emerald-700 text-white rounded-xl py-3">
                Explore Packages
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm cursor-pointer"
                onClick={() => setSelectedOption('dates')}>
            <CardHeader className="bg-gradient-to-br from-stone-50 to-slate-50">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="border-stone-300 text-stone-600">Flexible</Badge>
                <Calendar className="w-5 h-5 text-stone-600" />
              </div>
              <CardTitle className="text-xl font-serif text-stone-800">Custom Journey</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-stone-600 mb-6 font-light">
                Create your own schedule with flexible check-in and check-out dates.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-stone-600 mr-3" />
                  <span className="text-sm text-stone-600">Choose your own dates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-stone-600 mr-3" />
                  <span className="text-sm text-stone-600">Pay per night pricing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-stone-600 mr-3" />
                  <span className="text-sm text-stone-600">Access to all amenities Complete flexibility</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-stone-600 mr-3" />
                  <span className="text-sm text-stone-600">More control, no fixed format</span>
                </div>
              </div>

              <Button variant="outline" className="w-full border-stone-300 text-stone-600 hover:bg-stone-50 rounded-xl py-3">
                Select Custom Dates
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DatePackageSelector;
