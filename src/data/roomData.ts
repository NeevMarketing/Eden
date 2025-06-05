
import { RoomType } from "@/types/accommodation";

export const roomTypes: RoomType[] = [
  {
    id: "studio",
    name: "Studio Apartment",
    description: "A thoughtfully designed space perfect for solo travelers or couples seeking tranquility and comfort.",
    image: "/placeholder.svg",
    size: "650 sq ft",
    guests: 2,
    startingPrice: 5000,
    amenities: [
      "Private balcony",
      "Kitchenette",
      "Wellness corner",
      "High-speed WiFi",
      "Air conditioning",
      "Daily housekeeping"
    ]
  },
  {
    id: "1bhk",
    name: "1 BHK Apartment",
    description: "Spacious one-bedroom sanctuary with separate living areas, ideal for extended wellness retreats.",
    image: "/placeholder.svg",
    size: "1000 sq ft",
    guests: 3,
    startingPrice: 7500,
    amenities: [
      "Separate bedroom",
      "Full kitchen",
      "Living area",
      "Private balcony",
      "Wellness space",
      "High-speed WiFi",
      "Air conditioning",
      "Daily housekeeping"
    ]
  },
  {
    id: "2bhk",
    name: "2 BHK Apartment",
    description: "Premium two-bedroom retreat perfect for families or groups seeking luxury and space for their wellness journey.",
    image: "/placeholder.svg",
    size: "1600 sq ft",
    guests: 4,
    startingPrice: 12000,
    amenities: [
      "Two bedrooms",
      "Full kitchen",
      "Living & dining area",
      "Two bathrooms",
      "Private balcony",
      "Wellness space",
      "High-speed WiFi",
      "Air conditioning",
      "Daily housekeeping"
    ]
  }
];
