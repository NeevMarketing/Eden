
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Bed } from "lucide-react";
import { format, differenceInDays } from "date-fns";
import { cn } from "@/lib/utils";

// Package data based on the uploaded images
const packageData = {
  studio: {
    "Hamilton Studio": {
      7: { total: 60000, perNight: 8571, features: ["Room boarding with breakfast", "Access to swimming pool", "4 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹3,000", "Spa sessions: ₹3,000"] },
      14: { total: 110000, perNight: 7857, features: ["Room boarding with breakfast", "Access to swimming pool", "8 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹6,000", "Spa sessions: ₹6,000"] },
      30: { total: 190000, perNight: 6333, features: ["Room boarding with breakfast", "Pick up drop from Airport/Railway", "Access to swimming pool", "24 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹15,000", "Spa sessions: ₹15,000"] }
    },
    "Skyline Studio": {
      7: { total: 70000, perNight: 10000, features: ["Room boarding with breakfast", "Access to swimming pool", "4 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹3,000", "Spa sessions: ₹3,000"] },
      14: { total: 120000, perNight: 8571, features: ["Room boarding with breakfast", "Access to swimming pool", "8 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹6,000", "Spa sessions: ₹6,000"] },
      30: { total: 200000, perNight: 6667, features: ["Room boarding with breakfast", "Pick up drop from Airport/Railway", "Access to swimming pool", "24 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹15,000", "Spa sessions: ₹15,000"] }
    },
    "Crest Studio": {
      7: { total: 50000, perNight: 7143, features: ["Room boarding with breakfast", "Access to swimming pool", "4 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹3,000", "Spa sessions: ₹3,000"] },
      14: { total: 95000, perNight: 6786, features: ["Room boarding with breakfast", "Access to swimming pool", "8 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹6,000", "Spa sessions: ₹6,000"] },
      30: { total: 170000, perNight: 5667, features: ["Room boarding with breakfast", "Pick up drop from Airport/Railway", "Access to swimming pool", "24 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹15,000", "Spa sessions: ₹15,000"] }
    }
  },
  bhk2: {
    "Renaissance 2BHK": {
      7: { total: 150000, perNight: 21429, features: ["Room boarding with breakfast", "Access to swimming pool", "8 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹6,000", "Spa sessions: ₹6,000"] },
      14: { total: 250000, perNight: 17857, features: ["Room boarding with breakfast", "Pick up drop from Airport/Railway", "Access to swimming pool", "16 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹10,000", "Spa sessions: ₹10,000"] },
      30: { total: 360000, perNight: 12000, features: ["Room boarding with breakfast", "Pick up drop from Airport/Railway", "Access to swimming pool", "48 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹20,000", "Spa sessions: ₹20,000"] }
    },
    "Victoria 2BHK": {
      7: { total: 100000, perNight: 14286, features: ["Room boarding with breakfast", "Access to swimming pool", "8 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹5,000", "Spa sessions: ₹5,000"] },
      14: { total: 175000, perNight: 12500, features: ["Room boarding with breakfast", "Pick up drop from Airport/Railway", "Access to swimming pool", "16 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹8,000", "Spa sessions: ₹8,000"] },
      30: { total: 275000, perNight: 9167, features: ["Room boarding with breakfast", "Pick up drop from Airport/Railway", "Access to swimming pool", "48 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹18,000", "Spa sessions: ₹18,000"] }
    },
    "Regency 1BHK": {
      7: { total: 80000, perNight: 11429, features: ["Room boarding with breakfast", "Access to swimming pool", "4 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹3,000", "Spa sessions: ₹3,000"] },
      14: { total: 140000, perNight: 10000, features: ["Room boarding with breakfast", "Pick up drop from Airport/Railway", "Access to swimming pool", "8 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹6,000", "Spa sessions: ₹6,000"] },
      30: { total: 220000, perNight: 7333, features: ["Room boarding with breakfast", "Pick up drop from Airport/Railway", "Access to swimming pool", "24 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹15,000", "Spa sessions: ₹15,000"] }
    }
  }
};

const Accommodations: React.FC = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedRoom, setSelectedRoom] = useState<string>("");

  const getDurationCategory = (days: number) => {
    if (days <= 7) return 7;
    if (days <= 14) return 14;
    return 30;
  };

  const getStayDuration = () => {
    if (checkIn && checkOut) {
      return differenceInDays(checkOut, checkIn);
    }
    return 0;
  };

  const renderPackageDetails = () => {
    if (!selectedCategory || !selectedRoom || !checkIn || !checkOut) return null;

    const duration = getStayDuration();
    const durationCategory = getDurationCategory(duration);
    const categoryData = selectedCategory === "studio" ? packageData.studio : packageData.bhk2;
    const roomData = categoryData[selectedRoom as keyof typeof categoryData];
    const packageInfo = roomData[durationCategory as keyof typeof roomData];

    if (!packageInfo) return null;

    return (
      <div className="mt-8 bg-eden-light/30 rounded-lg p-8">
        <h3 className="text-2xl font-serif text-eden-dark mb-6">Your Selected Package</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-eden-dark mb-4">{selectedRoom}</h4>
            <p className="text-lg text-eden-text mb-2">
              <strong>Duration:</strong> {duration} nights
            </p>
            <p className="text-lg text-eden-text mb-2">
              <strong>Check-in:</strong> {format(checkIn, "PPP")}
            </p>
            <p className="text-lg text-eden-text mb-4">
              <strong>Check-out:</strong> {format(checkOut, "PPP")}
            </p>
            <div className="bg-eden rounded-lg p-4 text-white">
              <p className="text-2xl font-bold">₹{packageInfo.total.toLocaleString()}</p>
              <p className="text-sm opacity-90">Total package cost (Exclusive of GST)</p>
              <p className="text-sm opacity-90">₹{Math.round(packageInfo.total / duration).toLocaleString()} per night</p>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-eden-dark mb-3">Package Includes:</h5>
            <ul className="space-y-2 mb-4">
              {packageInfo.features.map((feature, index) => (
                <li key={index} className="flex items-start text-eden-text">
                  <span className="w-2 h-2 bg-eden rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <h5 className="text-lg font-semibold text-eden-dark mb-3">Optional Add-ons:</h5>
            <ul className="space-y-2 mb-6">
              {packageInfo.addOns.map((addon, index) => (
                <li key={index} className="flex items-start text-eden-text">
                  <span className="w-2 h-2 bg-eden-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {addon}
                </li>
              ))}
            </ul>
            <Button className="btn-primary w-full text-lg py-6">
              Book This Package
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="accommodations" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-eden-dark">
            Find Your Perfect Stay
          </h2>
          <div className="w-20 h-1 bg-eden mx-auto mb-6"></div>
          <p className="text-eden-text text-lg">
            Choose your dates and accommodation type to see personalized packages designed for your comfort.
          </p>
        </div>

        {/* Date Selection */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-serif text-eden-dark mb-6 text-center">Select Your Stay Dates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-eden-dark font-semibold mb-3 text-lg">Check-in Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal h-14 text-lg",
                        !checkIn && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-3 h-5 w-5" />
                      {checkIn ? format(checkIn, "PPP") : "Select check-in date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <label className="block text-eden-dark font-semibold mb-3 text-lg">Check-out Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal h-14 text-lg",
                        !checkOut && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-3 h-5 w-5" />
                      {checkOut ? format(checkOut, "PPP") : "Select check-out date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      disabled={(date) => date <= (checkIn || new Date())}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            {checkIn && checkOut && (
              <div className="mt-6 p-4 bg-eden-light/30 rounded-lg text-center">
                <p className="text-lg font-semibold text-eden-dark">
                  Stay Duration: {getStayDuration()} nights
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Room Category Selection */}
        {checkIn && checkOut && (
          <div className="mb-12">
            <h3 className="text-2xl font-serif text-eden-dark mb-8 text-center">Choose Your Accommodation Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card 
                className={cn(
                  "cursor-pointer transition-all duration-300 border-2 hover:shadow-lg",
                  selectedCategory === "studio" ? "border-eden bg-eden-light/20" : "border-eden-light/50"
                )}
                onClick={() => {
                  setSelectedCategory("studio");
                  setSelectedRoom("");
                }}
              >
                <CardHeader className="text-center">
                  <Bed className="w-12 h-12 text-eden mx-auto mb-4" />
                  <CardTitle className="text-xl font-serif text-eden-dark">Studio Apartments</CardTitle>
                  <CardDescription className="text-lg">
                    Cozy, well-designed spaces perfect for comfortable living
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-eden-text">3 options available</p>
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    Hamilton • Skyline • Crest
                  </p>
                </CardContent>
              </Card>

              <Card 
                className={cn(
                  "cursor-pointer transition-all duration-300 border-2 hover:shadow-lg",
                  selectedCategory === "bhk2" ? "border-eden bg-eden-light/20" : "border-eden-light/50"
                )}
                onClick={() => {
                  setSelectedCategory("bhk2");
                  setSelectedRoom("");
                }}
              >
                <CardHeader className="text-center">
                  <Bed className="w-12 h-12 text-eden mx-auto mb-4" />
                  <CardTitle className="text-xl font-serif text-eden-dark">1BHK & 2BHK Apartments</CardTitle>
                  <CardDescription className="text-lg">
                    Spacious apartments with separate living areas for enhanced comfort
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-eden-text">3 options available</p>
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    Renaissance 2BHK • Victoria 2BHK • Regency 1BHK
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Specific Room Selection */}
        {selectedCategory && (
          <div className="mb-12">
            <h3 className="text-2xl font-serif text-eden-dark mb-8 text-center">
              Select Your {selectedCategory === "studio" ? "Studio" : "Apartment"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.keys(selectedCategory === "studio" ? packageData.studio : packageData.bhk2).map((roomName) => (
                <Card
                  key={roomName}
                  className={cn(
                    "cursor-pointer transition-all duration-300 border-2 hover:shadow-lg",
                    selectedRoom === roomName ? "border-eden bg-eden-light/20" : "border-eden-light/50"
                  )}
                  onClick={() => setSelectedRoom(roomName)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-serif text-eden-dark text-center">{roomName}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <Button 
                        variant={selectedRoom === roomName ? "default" : "outline"}
                        className="w-full"
                      >
                        {selectedRoom === roomName ? "Selected" : "Select This Room"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Package Details */}
        {renderPackageDetails()}
      </div>
    </section>
  );
};

export default Accommodations;
