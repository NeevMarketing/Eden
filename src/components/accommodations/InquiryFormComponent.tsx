
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ChevronLeft, Calendar as CalendarIcon, Package, MapPin, Users, Mail } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { BookingDetails, InquiryForm } from "@/types/accommodation";

interface InquiryFormComponentProps {
  bookingDetails: BookingDetails;
  onSubmit: (formData: InquiryForm) => void;
  onBack: () => void;
}

const InquiryFormComponent = ({ bookingDetails, onSubmit, onBack }: InquiryFormComponentProps) => {
  const [formData, setFormData] = useState<InquiryForm>({
    name: "",
    email: "",
    phone: "",
    message: "",
    numberOfGuests: bookingDetails.roomCategory?.guests || 1
  });

  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  // Sync guest count with room capacity when room changes
  useEffect(() => {
    if (bookingDetails.roomCategory?.guests) {
      setFormData(prev => ({ 
        ...prev, 
        numberOfGuests: Math.min(prev.numberOfGuests || 1, bookingDetails.roomCategory?.guests || 1)
      }));
    }
  }, [bookingDetails.roomCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    // Redirect to thank you page in new tab
    window.open('/thank-you', '_blank');
  };

  const handleGuestChange = (value: string) => {
    const guests = parseInt(value);
    setFormData(prev => ({ ...prev, numberOfGuests: guests }));
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      setIsDatePickerOpen(false);
    }
  };

  const maxGuests = bookingDetails.roomCategory?.guests || 8;

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          size="sm"
          onClick={onBack}
          className="flex items-center space-x-2 border-stone-300 text-stone-600 hover:bg-stone-50 rounded-xl"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back</span>
        </Button>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center mb-6">
          <Mail className="w-8 h-8 text-eden mr-3" />
          <h2 className="text-3xl font-serif font-bold text-stone-800">
            Connect With Our Wellness Team
          </h2>
        </div>
        <p className="text-stone-600 font-light">
          Our sanctuary specialists will contact you with personalized recommendations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Booking Summary */}
        <Card className="h-fit bg-white/80 backdrop-blur-sm border-stone-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 font-serif text-stone-800">
              <Package className="w-5 h-5 text-eden" />
              <span>Your Sanctuary Selection</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Room Details */}
            <div className="space-y-3">
              <h4 className="font-medium text-stone-800">Accommodation</h4>
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                <p className="font-medium text-stone-800 font-serif">{bookingDetails.roomCategory?.name}</p>
                <p className="text-sm text-stone-600 font-light">{bookingDetails.roomType?.name}</p>
                <div className="flex items-center space-x-4 mt-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4 text-stone-500" />
                    <span className="text-sm text-stone-600">{bookingDetails.roomCategory?.size}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-stone-500" />
                    <span className="text-sm text-stone-600">
                      {formData.numberOfGuests} of {bookingDetails.roomCategory?.guests} guests
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Date/Package Details */}
            <div className="space-y-3">
              <h4 className="font-medium text-stone-800">Retreat Details</h4>
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                {bookingDetails.isPackage ? (
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-stone-800 font-serif">{bookingDetails.package?.name}</span>
                      <Badge className="bg-teal-100 text-teal-800 rounded-full">
                        Save {bookingDetails.package?.savings}%
                      </Badge>
                    </div>
                    <p className="text-sm text-stone-600 font-light">{bookingDetails.package?.duration}</p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center space-x-2">
                      <CalendarIcon className="w-4 h-4 text-stone-500" />
                      <span className="font-medium text-stone-800">{bookingDetails.nights} nights</span>
                    </div>
                    {bookingDetails.checkIn && bookingDetails.checkOut && (
                      <p className="text-sm text-stone-600 font-light">
                        {format(bookingDetails.checkIn, "MMM dd, yyyy")} - {format(bookingDetails.checkOut, "MMM dd, yyyy")}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Amenities */}
            <div className="space-y-3">
              <h4 className="font-medium text-stone-800">Sanctuary Features</h4>
              <div className="flex flex-wrap gap-2">
                {bookingDetails.roomCategory?.amenities.map((amenity, index) => (
                  <Badge key={index} variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-0 rounded-full">
                    {amenity}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="border-t border-stone-200 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-stone-800">Estimated Investment</span>
                <span className="text-2xl font-serif font-bold text-emerald-700">
                  ₹{bookingDetails.totalPrice?.toLocaleString()}
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-1 font-light">
                *Final pricing will be personalized by our wellness team
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Inquiry Form */}
        <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
          <CardHeader>
            <CardTitle className="font-serif text-stone-800">Share Your Details</CardTitle>
            <CardDescription className="font-light text-stone-600">
              Let us know how to reach you for your personalized sanctuary experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-stone-700">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  placeholder="Enter your full name"
                  className="border-stone-300 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-stone-700">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  placeholder="Enter your email address"
                  className="border-stone-300 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-stone-700">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  required
                  placeholder="Enter your phone number"
                  className="border-stone-300 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests" className="text-stone-700">Number of Guests *</Label>
                <Select
                  value={formData.numberOfGuests?.toString() || "1"}
                  onValueChange={handleGuestChange}
                >
                  <SelectTrigger className="border-stone-300 rounded-xl">
                    <SelectValue placeholder="Select number of guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: Math.min(maxGuests, 8) }, (_, i) => i + 1).map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-stone-500">
                  Maximum {maxGuests} guests for this accommodation
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="text-stone-700">Preferred Check-in Date</Label>
                <Popover open={isDatePickerOpen} onOpenChange={setIsDatePickerOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal border-stone-300 rounded-xl",
                        !selectedDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={handleDateSelect}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-stone-700">Your Wellness Goals</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Share any special requirements or wellness goals..."
                  rows={4}
                  className="border-stone-300 rounded-xl"
                />
              </div>

              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                <p className="text-sm text-emerald-800 font-light">
                  <strong className="font-medium">Your Wellness Journey Begins Here</strong><br />
                  Our sanctuary specialists will review your preferences and contact you within 24 hours with personalized recommendations and availability.
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-eden hover:bg-emerald-700 text-white rounded-xl py-6 text-lg font-medium"
                disabled={!formData.name || !formData.email || !formData.phone}
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
