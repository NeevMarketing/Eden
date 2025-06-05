
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookingDetails, InquiryForm as InquiryFormType } from '@/types/accommodation';
import DatePickerComponent from './DatePickerComponent';

interface InquiryFormProps {
  bookingDetails: BookingDetails;
  formData: InquiryFormType;
  onInputChange: (field: keyof InquiryFormType, value: string | Date | number) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const InquiryForm = ({ bookingDetails, formData, onInputChange, onSubmit }: InquiryFormProps) => {
  return (
    <Card className="bg-white border-stone-200">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-medium text-stone-800">
          Connect With Us
        </CardTitle>
        <p className="text-sm text-stone-600 mt-2">
          Let us know how to reach you for your personalized sanctuary experience
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-stone-700">Full Name *</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => onInputChange('name', e.target.value)}
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
              onChange={(e) => onInputChange('email', e.target.value)}
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
              onChange={(e) => onInputChange('phone', e.target.value)}
              className="mt-1 border-stone-300"
              required
            />
          </div>

          <div>
            <Label htmlFor="numberOfGuests" className="text-sm font-medium text-stone-700">Number of Guests *</Label>
            <Select
              value={formData.numberOfGuests?.toString()}
              onValueChange={(value) => onInputChange('numberOfGuests', parseInt(value))}
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
                  onDateSelect={(date) => onInputChange('preferredCheckIn', date)}
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
              onChange={(e) => onInputChange('specialRequests', e.target.value)}
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
  );
};

export default InquiryForm;
