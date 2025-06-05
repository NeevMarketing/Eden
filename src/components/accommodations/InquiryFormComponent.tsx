import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, MapPin, Calendar, Users, Phone, Mail, MessageSquare } from 'lucide-react';
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
    
    // For custom dates, check if it's a sanctuary between day 5-8
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

  const totalPrice = bookingDetails.isPackage 
    ? bookingDetails.packageDetails?.price 
    : bookingDetails.totalPrice || (bookingDetails.roomType?.startingPrice ? bookingDetails.roomType.startingPrice * displayNights : 0);

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
            Back to Journey Selection
          </Button>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">
            Connect With Us
          </h2>
          <p className="text-stone-600 font-light">
            Complete your journey details and our wellness team will reach out to you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Retreat Details */}
          <Card className="bg-gradient-to-br from-eden/5 to-emerald/5 border-eden/20">
            <CardHeader>
              <CardTitle className="text-xl font-serif text-stone-800 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-eden" />
                Retreat Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                <span className="text-sm text-stone-600">Sanctuary Type</span>
                <Badge className="bg-eden/10 text-eden border-eden">
                  {bookingDetails.roomType?.name}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                <span className="text-sm text-stone-600">Collection</span>
                <span className="font-medium text-stone-800">{bookingDetails.roomCategory?.name}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                <span className="text-sm text-stone-600">Duration</span>
                <span className="font-medium text-stone-800">{displayNights} nights</span>
              </div>

              {bookingDetails.isPackage && bookingDetails.packageDetails && (
                <div className="p-3 bg-white/50 rounded-lg">
                  <span className="text-sm text-stone-600 block mb-1">Package</span>
                  <span className="font-medium text-stone-800">{bookingDetails.packageDetails.name}</span>
                </div>
              )}

              {!bookingDetails.isPackage && bookingDetails.checkInDate && bookingDetails.checkOutDate && (
                <>
                  <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                    <span className="text-sm text-stone-600">Check-in</span>
                    <span className="font-medium text-stone-800">{format(bookingDetails.checkInDate, 'PPP')}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                    <span className="text-sm text-stone-600">Check-out</span>
                    <span className="font-medium text-stone-800">{format(bookingDetails.checkOutDate, 'PPP')}</span>
                  </div>
                </>
              )}

              <div className="flex items-center justify-between p-4 bg-eden/10 rounded-lg border border-eden/20">
                <span className="text-stone-800 font-medium">Total Investment</span>
                <span className="text-xl font-bold text-eden">₹{totalPrice?.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>

          {/* Your Information */}
          <Card className="bg-white/90 backdrop-blur-sm border-stone-200">
            <CardHeader>
              <CardTitle className="text-xl font-serif text-stone-800 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-eden" />
                Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-stone-700 font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-1 border-stone-300 rounded-xl"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-stone-700 font-medium">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-1 border-stone-300 rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-stone-700 font-medium">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-1 border-stone-300 rounded-xl"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="numberOfGuests" className="text-stone-700 font-medium">Number of Guests *</Label>
                  <Select
                    value={formData.numberOfGuests?.toString()}
                    onValueChange={(value) => handleInputChange('numberOfGuests', parseInt(value))}
                  >
                    <SelectTrigger className="mt-1 border-stone-300 rounded-xl">
                      <SelectValue placeholder="Select number of guests" />
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

                {bookingDetails.isPackage && (
                  <div>
                    <Label className="text-stone-700 font-medium">Preferred Check-in Date</Label>
                    <div className="mt-1">
                      <DatePickerComponent
                        title=""
                        placeholder="When would you like to start?"
                        selectedDate={formData.preferredCheckIn}
                        onDateSelect={(date) => handleInputChange('preferredCheckIn', date)}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <Label htmlFor="emergencyContact" className="text-stone-700 font-medium">Emergency Contact</Label>
                  <Input
                    id="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                    className="mt-1 border-stone-300 rounded-xl"
                    placeholder="Name and phone number"
                  />
                </div>

                <div>
                  <Label htmlFor="medicalConditions" className="text-stone-700 font-medium">Medical Conditions</Label>
                  <Textarea
                    id="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                    className="mt-1 border-stone-300 rounded-xl"
                    placeholder="Please mention any medical conditions we should be aware of"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="specialRequests" className="text-stone-700 font-medium">Special Requests</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    className="mt-1 border-stone-300 rounded-xl"
                    placeholder="Any special requirements or preferences?"
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-eden hover:bg-emerald-700 text-white py-3 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Submit Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InquiryFormComponent;
