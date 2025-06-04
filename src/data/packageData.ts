
import { RoomType, RoomCategory, Package } from "@/types/accommodation";

export const roomTypes: RoomType[] = [
  {
    id: "studio",
    name: "Studio",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
    size: "350-450 sq ft",
    guests: 2,
    startingPrice: 3500,
    description: "Perfect for solo travelers or couples seeking a cozy, efficient space",
    amenities: ["Modern Kitchen", "High-Speed WiFi", "Air Conditioning", "Smart TV"]
  },
  {
    id: "1bhk",
    name: "1 BHK",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
    size: "550-650 sq ft",
    guests: 3,
    startingPrice: 5500,
    description: "Ideal for small families or extended stays with separate bedroom",
    amenities: ["Separate Bedroom", "Living Area", "Full Kitchen", "Dining Space"]
  },
  {
    id: "2bhk",
    name: "2 BHK",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop",
    size: "800-1000 sq ft",
    guests: 5,
    startingPrice: 8500,
    description: "Spacious option for families or groups requiring multiple bedrooms",
    amenities: ["Two Bedrooms", "Large Living Room", "Full Kitchen", "Two Bathrooms"]
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
