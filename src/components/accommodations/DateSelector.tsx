
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { CalendarIcon } from "lucide-react";
// import { format, differenceInDays } from "date-fns";
// import { cn } from "@/lib/utils";

// interface DateSelectorProps {
//   checkIn: Date | undefined;
//   checkOut: Date | undefined;
//   onCheckInChange: (date: Date | undefined) => void;
//   onCheckOutChange: (date: Date | undefined) => void;
// }

// const DateSelector: React.FC<DateSelectorProps> = ({
//   checkIn,
//   checkOut,
//   onCheckInChange,
//   onCheckOutChange,
// }) => {
//   const getStayDuration = () => {
//     if (checkIn && checkOut) {
//       return differenceInDays(checkOut, checkIn);
//     }
//     return 0;
//   };

//   return (
//     <div className="max-w-2xl mx-auto mb-12">
//       <div className="bg-white rounded-lg shadow-lg p-8">
//         <h3 className="text-xl font-serif text-eden-dark mb-6 text-center">Select Your Stay Dates</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-eden-dark font-semibold mb-3 text-lg">Check-in Date</label>
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Button
//                   variant="outline"
//                   className={cn(
//                     "w-full justify-start text-left font-normal h-14 text-lg",
//                     !checkIn && "text-muted-foreground"
//                   )}
//                 >
//                   <CalendarIcon className="mr-3 h-5 w-5" />
//                   {checkIn ? format(checkIn, "PPP") : "Select check-in date"}
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent className="w-auto p-0" align="start">
//                 <Calendar
//                   mode="single"
//                   selected={checkIn}
//                   onSelect={onCheckInChange}
//                   disabled={(date) => date < new Date()}
//                   initialFocus
//                   className="pointer-events-auto"
//                 />
//               </PopoverContent>
//             </Popover>
//           </div>
//           <div>
//             <label className="block text-eden-dark font-semibold mb-3 text-lg">Check-out Date</label>
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Button
//                   variant="outline"
//                   className={cn(
//                     "w-full justify-start text-left font-normal h-14 text-lg",
//                     !checkOut && "text-muted-foreground"
//                   )}
//                 >
//                   <CalendarIcon className="mr-3 h-5 w-5" />
//                   {checkOut ? format(checkOut, "PPP") : "Select check-out date"}
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent className="w-auto p-0" align="start">
//                 <Calendar
//                   mode="single"
//                   selected={checkOut}
//                   onSelect={onCheckOutChange}
//                   disabled={(date) => date <= (checkIn || new Date())}
//                   initialFocus
//                   className="pointer-events-auto"
//                 />
//               </PopoverContent>
//             </Popover>
//           </div>
//         </div>
//         {checkIn && checkOut && (
//           <div className="mt-6 p-4 bg-eden-light/30 rounded-lg text-center">
//             <p className="text-lg font-semibold text-eden-dark">
//               Stay Duration: {getStayDuration()} nights
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DateSelector;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, ChevronLeft, Package, Clock } from "lucide-react";
import { format, differenceInDays } from "date-fns";
import { cn } from "@/lib/utils";
import { RoomCategory, BookingDetails, Package as PackageType } from "@/types/accommodation";
import { packages } from "../../data/packageData";

interface DatePackageSelectorProps {
  roomCategory: RoomCategory;
  onSelect: (details: Partial<BookingDetails>) => void;
  onBack: () => void;
}

const DatePackageSelector = ({ roomCategory, onSelect, onBack }: DatePackageSelectorProps) => {
  const [selectionType, setSelectionType] = useState<"custom" | "package" | null>(null);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [selectedPackage, setSelectedPackage] = useState<PackageType>();

  const calculateCustomPrice = () => {
    if (!checkIn || !checkOut) return 0;
    const nights = differenceInDays(checkOut, checkIn);
    return nights * roomCategory.startingPrice;
  };

  const calculatePackagePrice = (pkg: PackageType) => {
    const nights = parseInt(pkg.duration.split(' ')[0]) * (pkg.duration.includes('Week') ? 7 : 1);
    return nights * roomCategory.startingPrice * pkg.price;
  };

  const handleCustomDateContinue = () => {
    if (!checkIn || !checkOut) return;
    
    const nights = differenceInDays(checkOut, checkIn);
    const totalPrice = calculateCustomPrice();
    
    onSelect({
      isPackage: false,
      checkIn,
      checkOut,
      nights,
      totalPrice
    });
  };

  const handlePackageContinue = () => {
    if (!selectedPackage) return;
    
    const totalPrice = calculatePackagePrice(selectedPackage);
    
    onSelect({
      isPackage: true,
      package: selectedPackage,
      totalPrice
    });
  };

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
          <Clock className="w-8 h-8 text-emerald-600 mr-3" />
          <h2 className="text-3xl font-serif font-bold text-stone-800">
            Plan Your Retreat
          </h2>
        </div>
        <p className="text-stone-600 font-light">
          Selected: {roomCategory.name} - ₹{roomCategory.startingPrice.toLocaleString()}/night
        </p>
      </div>

      {!selectionType && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card 
            className="group hover:shadow-xl transition-all duration-500 cursor-pointer border-2 border-stone-200 hover:border-emerald-300 bg-white/80 backdrop-blur-sm"
            onClick={() => setSelectionType("custom")}
          >
            <CardHeader className="text-center">
              <CalendarIcon className="w-12 h-12 mx-auto text-emerald-600 mb-4" />
              <CardTitle className="font-serif text-stone-800">Custom Journey</CardTitle>
              <CardDescription className="font-light text-stone-600">
                Choose your own arrival and departure dates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 rounded-xl">Select Custom Dates</Button>
            </CardContent>
          </Card>

          <Card 
            className="group hover:shadow-xl transition-all duration-500 cursor-pointer border-2 border-stone-200 hover:border-teal-300 bg-white/80 backdrop-blur-sm"
            onClick={() => setSelectionType("package")}
          >
            <CardHeader className="text-center">
              <Package className="w-12 h-12 mx-auto text-teal-600 mb-4" />
              <CardTitle className="font-serif text-stone-800">Wellness Packages</CardTitle>
              <CardDescription className="font-light text-stone-600">
                Extended stays with special wellness pricing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-teal-600 hover:bg-teal-700 rounded-xl">View Packages</Button>
            </CardContent>
          </Card>
        </div>
      )}

      {selectionType === "custom" && (
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
            <CardHeader>
              <CardTitle className="font-serif text-stone-800">Select Your Journey Dates</CardTitle>
              <CardDescription className="font-light text-stone-600">
                Choose your arrival and departure dates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-stone-700">Arrival Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal border-stone-300 rounded-xl",
                          !checkIn && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-stone-700">Departure Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal border-stone-300 rounded-xl",
                          !checkOut && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        disabled={(date) => !checkIn || date <= checkIn}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {checkIn && checkOut && (
                <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-stone-800">
                        {differenceInDays(checkOut, checkIn)} nights
                      </p>
                      <p className="text-sm text-stone-600 font-light">
                        {format(checkIn, "MMM dd")} - {format(checkOut, "MMM dd")}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-serif font-bold text-emerald-700">
                        ₹{calculateCustomPrice().toLocaleString()}
                      </p>
                      <p className="text-sm text-stone-600">Total</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  onClick={() => setSelectionType(null)}
                  className="flex-1 border-stone-300 rounded-xl"
                >
                  Back to Options
                </Button>
                <Button 
                  onClick={handleCustomDateContinue}
                  disabled={!checkIn || !checkOut}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 rounded-xl"
                >
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {selectionType === "package" && (
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <Card 
                key={pkg.id}
                className={cn(
                  "cursor-pointer transition-all duration-500 hover:shadow-lg bg-white/80 backdrop-blur-sm",
                  selectedPackage?.id === pkg.id 
                    ? "border-2 border-emerald-500 shadow-lg shadow-emerald-100" 
                    : "border border-stone-200 hover:border-emerald-300"
                )}
                onClick={() => setSelectedPackage(pkg)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-serif text-stone-800">{pkg.name}</CardTitle>
                    {pkg.savings && (
                      <Badge className="bg-teal-100 text-teal-800 rounded-full">
                        Save {pkg.savings}%
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="font-light text-stone-600">{pkg.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-600">Base Price:</span>
                      <span className="line-through text-stone-500">
                        ₹{(parseInt(pkg.duration.split(' ')[0]) * 7 * roomCategory.startingPrice).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                      <span className="text-stone-800">Package Price:</span>
                      <span className="text-emerald-700 font-serif">
                        ₹{calculatePackagePrice(pkg).toLocaleString()}
                      </span>
                    </div>
                    {pkg.savings && (
                      <p className="text-sm text-teal-700 font-medium">
                        You save ₹{((parseInt(pkg.duration.split(' ')[0]) * 7 * roomCategory.startingPrice) - calculatePackagePrice(pkg)).toLocaleString()}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex space-x-4 mt-8">
            <Button 
              variant="outline" 
              onClick={() => setSelectionType(null)}
              className="flex-1 border-stone-300 rounded-xl"
            >
              Back to Options
            </Button>
            <Button 
              onClick={handlePackageContinue}
              disabled={!selectedPackage}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 rounded-xl"
            >
              Continue with Package
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePackageSelector;

