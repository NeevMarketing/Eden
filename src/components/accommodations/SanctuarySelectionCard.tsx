import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Users } from "lucide-react";
import { BookingDetails } from "@/types/accommodation";
import { updatedRoomData } from "../../data/roomData";

interface SanctuarySelectionCardProps {
  bookingDetails: any;
  displayNights: number;
  totalPrice: number;
  selectedGuests?: number;
}

const SanctuarySelectionCard = ({
  bookingDetails,
  displayNights,
  totalPrice,
  selectedGuests,
}: SanctuarySelectionCardProps) => {
  console.log(
    "SanctuarySelectionCard - displayNights:",
    displayNights,
    "bookingDetails:",
    bookingDetails
  );

  const getRoomData = () => {
    if (!bookingDetails.roomType) return null;
    return updatedRoomData[
      bookingDetails.roomType.id as keyof typeof updatedRoomData
    ];
  };

  const roomData = getRoomData();
  const maxGuests =
    roomData?.maxGuests || bookingDetails.roomCategory?.guests || 1;

  console.log("bookingDetails");
  console.log(bookingDetails);

  return (
    <Card className="bg-white border-stone-200">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-medium text-stone-800 flex items-center">
          <CheckCircle className="w-5 h-5 mr-2 text-emerald-600" />
          Your Stay Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Accommodation */}
        <div>
          <h4 className="font-medium text-stone-800 mb-3">Accommodation</h4>
          <div className="bg-stone-50 rounded-lg p-4">
            <div className="font-medium text-stone-800 mb-1">
              {bookingDetails.roomCategory?.name}
            </div>
            <div className="text-sm text-stone-600 mb-2">
              {bookingDetails.roomType?.name}
            </div>
            <div className="flex items-center text-sm text-stone-600 space-x-4">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {roomData?.size || bookingDetails.roomCategory?.size}
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {selectedGuests
                  ? `${selectedGuests} of ${maxGuests} guests`
                  : `${maxGuests} guests`}
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
                <div className="font-medium text-stone-800 mb-1">
                  {bookingDetails.packageDetails.name}
                </div>
                <div className="flex items-start justify-between text-sm text-stone-600 space-x-4">
                  <div className="text-sm text-stone-600 mb-2">
                    {displayNights} {displayNights === 1 ? "night" : "nights"}{" "}
                    stay
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mt-2">
                    Save{" "}
                    {Math.ceil(
                      ((bookingDetails.packageDetails.orignal_per_night *
                        bookingDetails.packageDetails.days -
                        (bookingDetails.packageDetails.price -
                          bookingDetails.packageDetails.voucher)) /
                        (bookingDetails.packageDetails.orignal_per_night *
                          bookingDetails.packageDetails.days)) *
                        100
                    )}
                    %
                  </Badge>
                </div>
                {bookingDetails.packageDetails.features.map((item: any) => {
                  return (
                    <div className="flex items-center text-sm text-stone-600 space-x-4">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {item}
                      </span>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className="font-medium text-stone-800 mb-1">
                  Custom Journey
                </div>
                <div className="text-sm text-stone-600">
                  {displayNights} {displayNights === 1 ? "night" : "nights"}{" "}
                  stay
                </div>
              </>
            )}
          </div>
        </div>

        {/* Sanctuary Features */}
        <div>
          <h4 className="font-medium text-stone-800 mb-3">
            Sanctuary Features
          </h4>
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
          <h4 className="font-medium text-stone-800 mb-2">Estimated Cost </h4>
          <div className="text-2xl font-bold text-emerald-600">
            ₹{totalPrice.toLocaleString()}
          </div>
          <div className="text-xs text-stone-500 mt-1">*Excluding GST</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SanctuarySelectionCard;
