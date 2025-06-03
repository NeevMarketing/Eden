
// import React, { useState } from "react";
// import DateSelector from "./accommodations/DateSelector";
// import CategorySelector from "./accommodations/CategorySelector";
// import RoomSelector from "./accommodations/RoomSelector";
// import PackageDetails from "./accommodations/PackageDetails";

// const Accommodations: React.FC = () => {
//   const [checkIn, setCheckIn] = useState<Date>();
//   const [checkOut, setCheckOut] = useState<Date>();
//   const [selectedCategory, setSelectedCategory] = useState<string>("");
//   const [selectedRoom, setSelectedRoom] = useState<string>("");

//   const handleCategoryChange = (category: string) => {
//     setSelectedCategory(category);
//     setSelectedRoom(""); // Reset room selection when category changes
//   };

//   return (
//     <section id="accommodations" className="section-padding">
//       <div className="container-custom">
//         <div className="max-w-3xl mx-auto text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-eden-dark">
//             Find Your Perfect Stay
//           </h2>
//           <div className="w-20 h-1 bg-eden mx-auto mb-6"></div>
//           <p className="text-eden-text text-lg">
//             Choose your dates and accommodation type to see personalized packages designed for your comfort.
//           </p>
//         </div>

//         <DateSelector
//           checkIn={checkIn}
//           checkOut={checkOut}
//           onCheckInChange={setCheckIn}
//           onCheckOutChange={setCheckOut}
//         />

//         {checkIn && checkOut && (
//           <CategorySelector
//             selectedCategory={selectedCategory}
//             onCategoryChange={handleCategoryChange}
//           />
//         )}

//         <RoomSelector
//           selectedCategory={selectedCategory}
//           selectedRoom={selectedRoom}
//           onRoomChange={setSelectedRoom}
//         />

//         <PackageDetails
//           checkIn={checkIn}
//           checkOut={checkOut}
//           selectedCategory={selectedCategory}
//           selectedRoom={selectedRoom}
//         />
//       </div>
//     </section>
//   );
// };

// export default Accommodations;


import { useState } from "react";
import { RoomType, RoomCategory, BookingDetails, InquiryForm } from "@/types/accommodation";
import RoomTypeSelector from "./accommodations/RoomSelector";
import RoomCategorySelector from "./accommodations/CategorySelector";
import DatePackageSelector from "./accommodations/DateSelector";
import InquiryFormComponent from "./accommodations/InquiryFormComponent";

type Step = "roomType" | "category" | "datePackage" | "inquiry";

const AccommodationFlow = () => {
  const [currentStep, setCurrentStep] = useState<Step>("roomType");
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    isPackage: false
  });

  const handleRoomTypeSelect = (roomType: RoomType) => {
    setBookingDetails(prev => ({ ...prev, roomType, roomCategory: undefined }));
    setCurrentStep("category");
  };

  const handleCategorySelect = (category: RoomCategory) => {
    setBookingDetails(prev => ({ ...prev, roomCategory: category }));
    setCurrentStep("datePackage");
  };

  const handleDatePackageSelect = (details: Partial<BookingDetails>) => {
    setBookingDetails(prev => ({ ...prev, ...details }));
    setCurrentStep("inquiry");
  };

  const handleInquirySubmit = (formData: InquiryForm) => {
    console.log("Inquiry submitted:", { ...bookingDetails, ...formData });
    // Here you would typically send this to your backend/CRM
    alert("Thank you for your inquiry! Our wellness team will contact you shortly.");
  };

  const handleBack = () => {
    switch (currentStep) {
      case "category":
        setCurrentStep("roomType");
        break;
      case "datePackage":
        setCurrentStep("category");
        break;
      case "inquiry":
        setCurrentStep("datePackage");
        break;
    }
  };

  const steps = ["Sanctuary Type", "Collection", "Journey", "Connect"];
  const currentStepIndex = ["roomType", "category", "datePackage", "inquiry"].indexOf(currentStep);

  return (
    <div className="space-y-16">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center space-x-2 mb-16">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-500 ${
                  index <= currentStepIndex
                    ? "bg-eden text-white shadow-lg shadow-emerald-200"
                    : "bg-stone-200 text-stone-500"
                }`}
              >
                {index + 1}
              </div>
              <span className={`mt-3 text-sm font-medium ${
                index <= currentStepIndex ? "text-emerald-700" : "text-stone-500"
              }`}>
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-20 h-1 mx-6 rounded-full transition-all duration-500 ${
                index < currentStepIndex 
                  ? "bg-eden" 
                  : "bg-stone-200"
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="min-h-[600px]">
        {currentStep === "roomType" && (
          <RoomTypeSelector onSelect={handleRoomTypeSelect} />
        )}
        
        {currentStep === "category" && bookingDetails.roomType && (
          <RoomCategorySelector
            roomType={bookingDetails.roomType}
            onSelect={handleCategorySelect}
            onBack={handleBack}
          />
        )}
        
        {currentStep === "datePackage" && bookingDetails.roomCategory && (
          <DatePackageSelector
            roomCategory={bookingDetails.roomCategory}
            onSelect={handleDatePackageSelect}
            onBack={handleBack}
          />
        )}
        
        {currentStep === "inquiry" && (
          <InquiryFormComponent
            bookingDetails={bookingDetails}
            onSubmit={handleInquirySubmit}
            onBack={handleBack}
          />
        )}
      </div>
    </div>
  );
};

export default AccommodationFlow;

