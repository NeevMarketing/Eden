
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format, differenceInDays } from "date-fns";
import { cn } from "@/lib/utils";

interface DateSelectorProps {
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  onCheckInChange: (date: Date | undefined) => void;
  onCheckOutChange: (date: Date | undefined) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  checkIn,
  checkOut,
  onCheckInChange,
  onCheckOutChange,
}) => {
  const getStayDuration = () => {
    if (checkIn && checkOut) {
      return differenceInDays(checkOut, checkIn);
    }
    return 0;
  };

  return (
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
                  onSelect={onCheckInChange}
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
                  onSelect={onCheckOutChange}
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
  );
};

export default DateSelector;
