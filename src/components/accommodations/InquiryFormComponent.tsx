
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, MapPin, Calendar, Users, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { BookingDetails, InquiryForm } from '@/types/accommodation';
import DatePickerComponent from './DatePickerComponent';
import { format } from 'date-fns';

interface InquiryFormComponentProps {
  bookingDetails: BookingDetails;
  onSubmit: (formData: InquiryForm) => void;
  onBack: () => void;
}

const InquiryFormComponent = ({ bookingDetails, onSubmit, onBack }: InquiryFormComponentProps) => {
  const [formData, setFormData] = useState<InquiryForm>({
    name: '',
    email: '',
    phone: '',
    numberOfGuests: 1,
    preferredCheckIn: undefined,
    specialRequests: '',
    emergencyContact: '',
    medicalConditions: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (field: keyof InquiryForm, value: string | Date | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Calculate nights dynamically based on booking details
  const calculateNights = () => {
    if (bookingDetails.isPackage && bookingDetails.packageDetails) {
      const packageNights = parseInt(bookingDetails.packageDetails.duration.split(' ')[0]) || bookingDetails.nights;
      return packageNights;
    }
    
    // For custom dates, calculate dynamically
    if (bookingDetails.checkInDate && bookingDetails.checkOutDate) {
      const timeDiff = bookingDetails.checkOutDate.getTime() - bookingDetails.checkInDate.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      
      // If selection falls between day 5 to 8, default to 3 nights
      const dayOfMonth = bookingDetails.checkInDate.getDate();
      if (dayOfMonth >= 5 && dayOfMonth <= 8) {
        return 3;
      }
      
      return daysDiff;
    }
    
    return bookingDetails.nights || 1;
  };

  const displayNights = calculateNights();

  // Calculate total price
  const calculateTotalPrice = () => {
    if (bookingDetails.isPackage && bookingDetails.packageDetails) {
      return bookingDetails.packageDetails.price;
    }
    
    if (bookingDetails.roomCategory && bookingDetails.roomCategory.startingPrice) {
      return bookingDetails.roomCategory.startingPrice * displayNights;
    }
    
    return bookingDetails.totalPrice || 0;
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Button 
          variant="outline"
          onClick={onBack}
          className="border-stone-300 text-stone-600 hover:bg-stone-50 rounded-xl px-6 py-3"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Journey Selection
        </Button>
      </div>

      <div className="text-center mb-8">
        <p className="text-stone-600 mb-8">
          Our sanctuary specialists will contact you with personalized recommendations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Your Sanctuary Selection */}
        <Card className="bg-white border-stone-200">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-medium text-stone-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-emerald-600" />
              Your Sanctuary Selection
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Accommodation */}
            <div>
              <h4 className="font-medium text-stone-800 mb-3">Accommodation</h4>
              <div className="bg-stone-50 rounded-lg p-4">
                <div className="font-medium text-stone-800 mb-1">{bookingDetails.roomCategory?.name}</div>
                <div className="text-sm text-stone-600 mb-2">{bookingDetails.roomType?.name}</div>
                <div className="flex items-center text-sm text-stone-600 space-x-4">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {bookingDetails.roomCategory?.size}
                  </span>
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {bookingDetails.roomCategory?.guests} guests
                  </span>
                </div>
              </div>
            </div>

            {/* Retreat Details */}
            <div>
              <h4 className="font-medium text-stone-800 mb-3">Retreat Details</h4>
              <div className="bg-stone-50 rounded-lg p-4">
                {bookingDetails.isPackage && bookingDetails.packageDetails ? (
                  <>
                    <div className="font-medium text-stone-800 mb-1">{bookingDetails.packageDetails.name}</div>
                    <div className="text-sm text-stone-600">{displayNights} nights</div>
                    <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mt-2">
                      Save {bookingDetails.packageDetails.savings}%
                    </Badge>
                  </>
                ) : (
                  <div className="font-medium text-stone-800">{displayNights} nights</div>
                )}
              </div>
            </div>

            {/* Sanctuary Features */}
            <div>
              <h4 className="font-medium text-stone-800 mb-3">Sanctuary Features</h4>
              <div className="flex flex-wrap gap-2">
                {bookingDetails.roomCategory?.amenities.map((amenity, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {amenity}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Estimated Investment */}
            <div>
              <h4 className="font-medium text-stone-800 mb-2">Estimated Investment</h4>
              <div className="text-2xl font-bold text-emerald-600">₹{totalPrice.toLocaleString()}</div>
              <div className="text-xs text-stone-500 mt-1">
                *Final pricing will be personalized by our wellness team
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Share Your Details */}
        <Card className="bg-white border-stone-200">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-medium text-stone-800">
              Share Your Details
            </CardTitle>
            <p className="text-sm text-stone-600 mt-2">
              Let us know how to reach you for your personalized sanctuary experience
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-stone-700">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-1 border-stone-300"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-stone-700">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-1 border-stone-300"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-stone-700">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="mt-1 border-stone-300"
                  required
                />
              </div>

              <div>
                <Label htmlFor="numberOfGuests" className="text-sm font-medium text-stone-700">Number of Guests *</Label>
                <Select
                  value={formData.numberOfGuests?.toString()}
                  onValueChange={(value) => handleInputChange('numberOfGuests', parseInt(value))}
                >
                  <SelectTrigger className="mt-1 border-stone-300">
                    <SelectValue placeholder="1 Guest" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Conditional Check-in Date - Only show for packages */}
              {bookingDetails.isPackage && (
                <div>
                  <Label className="text-sm font-medium text-stone-700">Check-in Date</Label>
                  <div className="mt-1">
                    <DatePickerComponent
                      title=""
                      placeholder="Select your check-in date"
                      selectedDate={formData.preferredCheckIn}
                      onDateSelect={(date) => handleInputChange('preferredCheckIn', date)}
                    />
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="specialRequests" className="text-sm font-medium text-stone-700">Your Wellness Goals</Label>
                <Textarea
                  id="specialRequests"
                  placeholder="Share any special requirements or wellness goals..."
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  className="mt-1 border-stone-300"
                  rows={4}
                />
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <h4 className="font-medium text-emerald-800 mb-2">Your Wellness Journey Begins Here</h4>
                <p className="text-sm text-emerald-700">
                  Our sanctuary specialists will review your preferences and contact you within 24 hours with personalized recommendations and availability.
                </p>
              </div>

              <Button 
                type="submit"
                className="w-full bg-stone-600 hover:bg-stone-700 text-white py-3 rounded-lg font-medium"
              >
                Begin Your Wellness Journey
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InquiryFormComponent;
