import { RoomType, RoomCategory, Package } from "@/types/accommodation";

export const roomTypes: RoomType[] = [
  {
    id: "studio",
    name: "Studio Apartment",
    image: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Home%20page/Accommodations/sTUDIO%20Cover.jpg?updatedAt=1749654353949",
    size: "400-500 sq ft",
    guests: 1,
    startingPrice: 7500,
    description: "Cozy studio apartment perfect for solo travelers seeking comfort and wellness",
    amenities: ["WiFi", "Kitchenette", "Balcony", "Air Conditioning"]
  },
  {
    id: "1bhk",
    name: "1 BHK Apartment",
    image: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Home%20page/Accommodations/1BHK.jpg?updatedAt=1749654353195",
    size: "600-800 sq ft",
    guests: 2,
    startingPrice: 10000,
    description: "Spacious one-bedroom apartment ideal for couples or individuals",
    amenities: ["WiFi", "Full Kitchen", "Living Room", "Balcony", "Air Conditioning"]
  },
  {
    id: "2bhk",
    name: "2 BHK Apartment",
    image: "https://ik.imagekit.io/sjuj0rpud/Eden%20Gallery/Home%20page/Accommodations/2BHK.jpg?updatedAt=1749654353873",
    size: "900-1200 sq ft",
    guests: 4,
    startingPrice: 15000,
    description: "Premium two-bedroom apartment perfect for families",
    amenities: ["WiFi", "Full Kitchen", "Living Room", "Multiple Balconies", "Air Conditioning"]
  },
  {
    id: "3bhk",
    name: "3 BHK Apartment",
    image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80",
    size: "1200-1600 sq ft",
    guests: 6,
    startingPrice: 50000,
    description: "Luxurious three-bedroom apartment for large families or groups",
    amenities: ["WiFi", "Full Kitchen", "Spacious Living Room", "Multiple Balconies", "Air Conditioning", "Study Room"]
  }
];

export const roomCategories: RoomCategory[] = [
  // Studio Categories
  {
    id: "crest",
    name: "Crest",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    size: "350 sq ft",
    guests: 2,
    startingPrice: 3500,
    roomTypeId: "studio",
    description: "Modern studio with city views",
    amenities: ["City View", "Modern Kitchen", "High-Speed WiFi", "Air Conditioning"]
  },
  {
    id: "hamilton",
    name: "Hamilton",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
    size: "400 sq ft",
    guests: 2,
    startingPrice: 3800,
    roomTypeId: "studio",
    description: "Premium studio with luxury amenities",
    amenities: ["Premium Furnishing", "Smart TV", "Kitchenette", "Balcony"]
  },
  {
    id: "skyline",
    name: "Skyline",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop",
    size: "450 sq ft",
    guests: 2,
    startingPrice: 4200,
    roomTypeId: "studio",
    description: "Top-floor studio with panoramic views",
    amenities: ["Panoramic Views", "Premium Kitchen", "Work Desk", "Premium Bedding"]
  },
  // 1BHK Categories
  {
    id: "regency",
    name: "Regency 1BHK",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
    size: "600 sq ft",
    guests: 3,
    startingPrice: 5500,
    roomTypeId: "1bhk",
    description: "Elegant 1BHK with separate living area",
    amenities: ["Separate Bedroom", "Living Area", "Full Kitchen", "Dining Space"]
  },
  // 2BHK Categories
  {
    id: "victoria",
    name: "Victoria",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop",
    size: "850 sq ft",
    guests: 5,
    startingPrice: 8500,
    roomTypeId: "2bhk",
    description: "Spacious 2BHK with modern amenities",
    amenities: ["Two Bedrooms", "Large Living Room", "Full Kitchen", "Two Bathrooms"]
  },
  {
    id: "renaissance",
    name: "Renaissance",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    size: "1000 sq ft",
    guests: 5,
    startingPrice: 9800,
    roomTypeId: "2bhk",
    description: "Luxury 2BHK with premium finishes",
    amenities: ["Premium Interiors", "Master Bedroom", "Guest Bedroom", "Luxury Bathroom"]
  }
];

export const packages: Package[] = [
  {
    id: "1week",
    name: "1 Week Stay",
    duration: "7 nights",
    price: 0.9, // 10% discount
    savings: 10
  },
  {
    id: "2week",
    name: "2 Week Stay", 
    duration: "14 nights",
    price: 0.85, // 15% discount
    savings: 15
  },
  {
    id: "4week",
    name: "4 Week Stay",
    duration: "28 nights", 
    price: 0.75, // 25% discount
    savings: 25
  }
];

// Legacy export for backward compatibility
export const packageData = {
  roomTypes,
  roomCategories,
  packages
};
