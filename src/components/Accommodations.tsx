
import React, { useState } from "react";
import DateSelector from "./accommodations/DateSelector";
import CategorySelector from "./accommodations/CategorySelector";
import RoomSelector from "./accommodations/RoomSelector";
import PackageDetails from "./accommodations/PackageDetails";

const Accommodations: React.FC = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedRoom, setSelectedRoom] = useState<string>("");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedRoom(""); // Reset room selection when category changes
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

        <DateSelector
          checkIn={checkIn}
          checkOut={checkOut}
          onCheckInChange={setCheckIn}
          onCheckOutChange={setCheckOut}
        />

        {checkIn && checkOut && (
          <CategorySelector
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        )}

        <RoomSelector
          selectedCategory={selectedCategory}
          selectedRoom={selectedRoom}
          onRoomChange={setSelectedRoom}
        />

        <PackageDetails
          checkIn={checkIn}
          checkOut={checkOut}
          selectedCategory={selectedCategory}
          selectedRoom={selectedRoom}
        />
      </div>
    </section>
  );
};

export default Accommodations;
