
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, MapPin, Users } from 'lucide-react';
import { BookingDetails } from '@/types/accommodation';

interface SanctuarySelectionCardProps {
  bookingDetails: BookingDetails;
  displayNights: number;
  totalPrice: number;
  formData?: {
    numberOfGuests?: number;
  };
}

const SanctuarySelectionCard = ({ bookingDetails, displayNights, totalPrice, formData }: SanctuarySelectionCardProps) => {
  console.log('SanctuarySelectionCard - displayNights:', displayNights, 'bookingDetails:', bookingDetails);
  
  // Get max guests for the room type
  const getMaxGuests = () => {
    if (!bookingDetails.roomType) return 0;
    
    const roomName = bookingDetails.roomType.name.toLowerCase();
    if (roomName.includes('studio')) return 2;
    if (roomName.includes('1 bhk')) return 3;
    if (roomName.includes('2 bhk')) return 4;
    return 0;
  };

  const maxGuests = getMaxGuests();
  const selectedGuests = formData?.numberOfGuests || 1;

  return (
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
                {maxGuests > 0 && formData?.numberOfGuests ? 
                  `${selectedGuests} of ${maxGuests} guests` : 
                  `${bookingDetails.roomCategory?.guests} guests`
                }
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
                <div className="text-sm text-stone-600 mb-2">{displayNights} {displayNights === 1 ? 'night' : 'nights'} stay</div>
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mt-2">
                  Save {bookingDetails.packageDetails.savings}%
                </Badge>
              </>
            ) : (
              <>
                <div className="font-medium text-stone-800 mb-1">Custom Journey</div>
                <div className="text-sm text-stone-600">{displayNights} {displayNights === 1 ? 'night' : 'nights'} stay</div>
              </>
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
  );
};

export default SanctuarySelectionCard;
