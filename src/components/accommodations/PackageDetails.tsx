
import React from "react";
import { Button } from "@/components/ui/button";
import { format, differenceInDays } from "date-fns";
import { packageData } from "@/data/packageData";
import { PackageInfo } from "@/types/accommodation";

interface PackageDetailsProps {
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  selectedCategory: string;
  selectedRoom: string;
}

const PackageDetails: React.FC<PackageDetailsProps> = ({
  checkIn,
  checkOut,
  selectedCategory,
  selectedRoom,
}) => {
  const getDurationCategory = (days: number): 7 | 14 | 30 => {
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

  if (!selectedCategory || !selectedRoom || !checkIn || !checkOut) return null;

  const duration = getStayDuration();
  const durationCategory = getDurationCategory(duration);
  const categoryData = selectedCategory === "studio" ? packageData.studio : packageData.bhk2;
  const roomData = categoryData[selectedRoom];
  const packageInfo: PackageInfo | undefined = roomData?.[durationCategory];

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

export default PackageDetails;
