import { useParams } from "react-router-dom";
import { roomTypes } from "../data/packageData";
import { updatedRoomData } from "../data/roomData";
import SanctuarySelectionCard from "../components/accommodations/SanctuarySelectionCard";
import InquiryForm from "../components/accommodations/InquiryForm";
import React, { useState, useEffect } from "react";

const BookingSummaryPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const { roomId } = useParams();
  const roomType = roomTypes.find((r) => r.id === roomId);
  const roomData = updatedRoomData[roomId] || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfGuests: 1,
    preferredCheckIn: new Date(),
    specialRequests: "",
  });

  const bookingDetails = {
    roomType,
    roomCategory: roomType,
    packageDetails: {
      duration: "14 nights",
      price: roomType?.startingPrice || 0,
      orignal_per_night: roomType?.startingPrice || 0,
      days: 14,
      voucher: 0,
    },
    isPackage: true,
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submit logic here
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto pt-12">
      <div className="flex-1">
        <SanctuarySelectionCard
          bookingDetails={bookingDetails}
          formData={formData}
        />
      </div>
      <div className="flex-1">
        <InquiryForm
          bookingDetails={bookingDetails}
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default BookingSummaryPage;
