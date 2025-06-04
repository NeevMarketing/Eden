
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
    nights: 0,
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
    <div className="space-y-8 sm:space-y-12 lg:space-y-16">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center px-4 mb-8 sm:mb-12 lg:mb-16">
        <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto w-full max-w-4xl">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center flex-shrink-0">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-all duration-500 ${
                    index <= currentStepIndex
                      ? "bg-eden text-white shadow-lg shadow-emerald-200"
                      : "bg-stone-200 text-stone-500"
                  }`}
                >
                  {index + 1}
                </div>
                <span className={`mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-center px-1 ${
                  index <= currentStepIndex ? "text-emerald-700" : "text-stone-500"
                }`}>
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-8 sm:w-12 lg:w-20 h-1 mx-2 sm:mx-4 lg:mx-6 rounded-full transition-all duration-500 flex-shrink-0 ${
                  index < currentStepIndex 
                    ? "bg-eden" 
                    : "bg-stone-200"
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] px-4 sm:px-6 lg:px-8">
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
