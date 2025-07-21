import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Users } from "lucide-react";
import { BookingDetails } from "@/types/accommodation";
import { updatedRoomData } from "../../src/data/roomData";
import { useNavigate } from "react-router-dom";

const stayList = [
  { text: "Room boarding with breakfast" },
  { text: "Food vouchers: ₹6,000" },
  { text: "Spa sessions: ₹6,000" },
  { text: "8 Yoga sessions" },
  { text: "Access to swimming pool" },
  { text: "Access to movie theatre" },
  { text: "Access to library" },
  { text: "Access to pool table" },
];

interface SanctuarySelectionCardProps {
  bookingDetails: any;
  displayNights: number;
  totalPrice: number;
  selectedGuests?: number;
}

const handleBack = () => {
  // Go to home, then scroll to the section after navigation
  window.location.href = "/#pick-your-apartment";
};

const SanctuarySelectionCard = ({ bookingDetails, formData, backSource }) => {
  const navigate = useNavigate();
  const { roomType, packageDetails } = bookingDetails;
  const roomData = roomType ? updatedRoomData[roomType.id] || {} : {};

  // Example: Save percent calculation (replace with your logic if needed)
  const savePercent = 20;

  return (
    <>
      {/* Back Button */}
      <button
        className="mb-6 flex items-center gap-2 text-stone-600 hover:text-emerald-700 text-base font-medium bg-white border border-stone-200 rounded-lg px-4 py-2 transition"
        onClick={handleBack}
        aria-label="Back to Apartment"
      >
        <svg
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Back to Apartment
      </button>

      <div className="bg-white border-stone-200 rounded-lg p-6">
        <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2 text-emerald-800">
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12l2 2 4-4" />
          </svg>
          Your Stay Summary
        </h2>

        <div className="mb-4 bg-stone-50 rounded-lg p-4 border-primary border-l-4">
          <div className="font-bold text-stone-700">Accommodation</div>
          <div className="text-lg font-serif text-emerald-800">
            {roomType?.name}
          </div>
          <div className="flex items-center gap-2 text-stone-600 mt-1">
            <span>{roomData.size} sq ft</span>
            <span>·</span>
            <Users className="w-4 h-4" />
            <span>
              {formData.numberOfGuests} of {roomData.maxGuests} guests
            </span>
          </div>
        </div>
        {/* List and Save badge in one row */}
        <div className="mb-3 sm:mb-4 flex sm:flex-row items-start gap-2 bg-stone-50 rounded-lg p-3 sm:p-4">
          <ul className="pl-0 text-stone-700 text-xs sm:text-sm space-y-1 w-full sm:w-auto">
            {stayList.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 min-w-[16px]" />
                {item.text}
              </li>
            ))}
          </ul>
          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mt-1 whitespace-nowrap self-start">
            Save {savePercent}%
          </Badge>
        </div>
        <div className="mb-4 bg-stone-50 rounded-lg p-4">
          <div className="font-semibold text-stone-700 mb-2">
            Your Stay Includes
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge>Fully Furnished Apartment</Badge>
            <Badge>Air Conditioning (Hot & Cold)</Badge>
            <Badge>Fully Equipped Kitchen</Badge>
            <Badge>Well-Appointed Bathroom</Badge>
            <Badge>Complimentary Wi-Fi</Badge>
            <Badge>Complimentary Breakfast</Badge>
            <Badge>Access to Amenities</Badge>
          </div>
        </div>
        <div className="bg-stone-50 rounded-lg p-4 border-primary border-l-4">
          <div className="font-semibold text-stone-700 mb-1">
            Estimated Cost
          </div>
          <div className="text-3xl font-serif font-bold text-emerald-700">
            ₹{packageDetails.price.toLocaleString()}
          </div>
          <div className="text-xs text-stone-500 mt-1">*Excluding GST</div>
        </div>
      </div>
    </>
  );
};

export default SanctuarySelectionCard;
