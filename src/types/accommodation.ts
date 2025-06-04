
export interface RoomType {
  id: string;
  name: string;
  description: string;
  image: string;
  size: string;
  guests: number;
  startingPrice: number;
  amenities: string[];
}

export interface RoomCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  size: string;
  guests: number;
  startingPrice: number;
  amenities: string[];
  roomTypeId: string;
}

export interface Package {
  id: string;
  name: string;
  duration: string;
  price: number;
  savings: number;
}

export interface PackageInfo {
  id: string;
  name: string;
  duration: string;
  savings: number;
  description: string;
  features: string[];
  addOns: string[];
  total: number;
}

export interface BookingDetails {
  roomType?: RoomType;
  roomCategory?: RoomCategory;
  checkIn?: Date;
  checkOut?: Date;
  nights: number;
  isPackage: boolean;
  package?: Package;
  totalPrice?: number;
}

export interface InquiryForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  numberOfGuests: number;
}
