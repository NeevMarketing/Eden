
import { BookingDetails } from '@/types/accommodation';

export const useBookingCalculations = (bookingDetails: BookingDetails) => {
  // Calculate nights dynamically based on booking details
  const calculateNights = () => {
    if (bookingDetails.isPackage && bookingDetails.packageDetails) {
      // Extract nights from package duration string (e.g., "7 nights" -> 7)
      const durationMatch = bookingDetails.packageDetails.duration.match(/(\d+)/);
      if (durationMatch) {
        return parseInt(durationMatch[1], 10);
      }
      // Fallback to original logic if pattern doesn't match
      const packageNights = parseInt(bookingDetails.packageDetails.duration.split(' ')[0]) || bookingDetails.nights;
      return packageNights;
    }
    
    // For custom dates, calculate dynamically
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

  // Calculate total price
  const calculateTotalPrice = (displayNights: number) => {
    if (bookingDetails.isPackage && bookingDetails.packageDetails) {
      return bookingDetails.packageDetails.price;
    }
    
    if (bookingDetails.roomCategory && bookingDetails.roomCategory.startingPrice) {
      return bookingDetails.roomCategory.startingPrice * displayNights;
    }
    
    return bookingDetails.totalPrice || 0;
  };

  const displayNights = calculateNights();
  const totalPrice = calculateTotalPrice(displayNights);

  return {
    displayNights,
    totalPrice
  };
};
