
// import { AccommodationData } from "../types/accommodation";

// export const packageData: AccommodationData = {
//   studio: {
//     "Hamilton Studio": {
//       7: { total: 60000, perNight: 8571, features: ["Room boarding with breakfast", "Access to swimming pool", "4 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹3,000", "Spa sessions: ₹3,000"] },
//       14: { total: 110000, perNight: 7857, features: ["Room boarding with breakfast", "Access to swimming pool", "8 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹6,000", "Spa sessions: ₹6,000"] },
//       30: { total: 190000, perNight: 6333, features: ["Room boarding with breakfast", "Pick up drop from Airport/Railway", "Access to swimming pool", "24 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹15,000", "Spa sessions: ₹15,000"] }
//     },
//     "Skyline Studio": {
//       7: { total: 70000, perNight: 10000, features: ["Room boarding with breakfast", "Access to swimming pool", "4 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹3,000", "Spa sessions: ₹3,000"] },
//       14: { total: 120000, perNight: 8571, features: ["Room boarding with breakfast", "Access to swimming pool", "8 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹6,000", "Spa sessions: ₹6,000"] },
//       30: { total: 200000, perNight: 6667, features: ["Room boarding with breakfast", "Pick up drop from Airport/Railway", "Access to swimming pool", "24 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹15,000", "Spa sessions: ₹15,000"] }
//     },
//     "Crest Studio": {
//       7: { total: 50000, perNight: 7143, features: ["Room boarding with breakfast", "Access to swimming pool", "4 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹3,000", "Spa sessions: ₹3,000"] },
//       14: { total: 95000, perNight: 6786, features: ["Room boarding with breakfast", "Access to swimming pool", "8 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹6,000", "Spa sessions: ₹6,000"] },
//       30: { total: 170000, perNight: 5667, features: ["Room boarding with breakfast", "Pick up drop from Airport/Railway", "Access to swimming pool", "24 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹15,000", "Spa sessions: ₹15,000"] }
//     }
//   },
//   bhk2: {
//     "Renaissance 2BHK": {
//       7: { total: 150000, perNight: 21429, features: ["Room boarding with breakfast", "Access to swimming pool", "8 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹6,000", "Spa sessions: ₹6,000"] },
//       14: { total: 250000, perNight: 17857, features: ["Room boarding with breakfast", "Pick up drop from Airport/Railway", "Access to swimming pool", "16 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹10,000", "Spa sessions: ₹10,000"] },
//       30: { total: 360000, perNight: 12000, features: ["Room boarding with breakfast", "Pick up drop from Airport/Railway", "Access to swimming pool", "48 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹20,000", "Spa sessions: ₹20,000"] }
//     },
//     "Victoria 2BHK": {
//       7: { total: 100000, perNight: 14286, features: ["Room boarding with breakfast", "Access to swimming pool", "8 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹5,000", "Spa sessions: ₹5,000"] },
//       14: { total: 175000, perNight: 12500, features: ["Room boarding with breakfast", "Pick up drop from Airport/Railway", "Access to swimming pool", "16 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹8,000", "Spa sessions: ₹8,000"] },
//       30: { total: 275000, perNight: 9167, features: ["Room boarding with breakfast", "Pick up drop from Airport/Railway", "Access to swimming pool", "48 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹18,000", "Spa sessions: ₹18,000"] }
//     },
//     "Regency 1BHK": {
//       7: { total: 80000, perNight: 11429, features: ["Room boarding with breakfast", "Access to swimming pool", "4 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹3,000", "Spa sessions: ₹3,000"] },
//       14: { total: 140000, perNight: 10000, features: ["Room boarding with breakfast", "Pick up drop from Airport/Railway", "Access to swimming pool", "8 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹6,000", "Spa sessions: ₹6,000"] },
//       30: { total: 220000, perNight: 7333, features: ["Room boarding with breakfast", "Pick up drop from Airport/Railway", "Access to swimming pool", "24 Yoga sessions", "Access to movie theatre", "Access to library", "Access to pool table"], addOns: ["Food vouchers: ₹15,000", "Spa sessions: ₹15,000"] }
//     }
//   }
// };


import { RoomType, RoomCategory, Package } from "@/types/accommodation";

export const roomTypes: RoomType[] = [
  {
    id: "studio",
    name: "Studio",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
    size: "350-450 sq ft",
    guests: 2,
    startingPrice: 3500,
    description: "Perfect for solo travelers or couples seeking a cozy, efficient space"
  },
  {
    id: "1bhk",
    name: "1 BHK",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
    size: "550-650 sq ft",
    guests: 3,
    startingPrice: 5500,
    description: "Ideal for small families or extended stays with separate bedroom"
  },
  {
    id: "2bhk",
    name: "2 BHK",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop",
    size: "800-1000 sq ft",
    guests: 5,
    startingPrice: 8500,
    description: "Spacious option for families or groups requiring multiple bedrooms"
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

