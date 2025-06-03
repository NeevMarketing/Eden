
// // export interface PackageInfo {
// //   total: number;
// //   perNight: number;
// //   features: string[];
// //   addOns: string[];
// // }

// // export interface RoomData {
// //   [key: number]: PackageInfo;
// // }

// // export interface CategoryData {
// //   [roomName: string]: RoomData;
// // }

// // export interface AccommodationData {
// //   studio: CategoryData;
// //   bhk2: CategoryData;
// // }


// export interface RoomType {
//   id: string;
//   name: string;
//   image: string;
//   size: string;
//   guests: number;
//   startingPrice: number;
//   description: string;
// }

// export interface RoomCategory {
//   id: string;
//   name: string;
//   image: string;
//   size: string;
//   guests: number;
//   startingPrice: number;
//   roomTypeId: string;
//   description: string;
//   amenities: string[];
// }

// export interface Package {
//   id: string;
//   name: string;
//   duration: string;
//   price: number;
//   savings?: number;
// }

// export interface BookingDetails {
//   roomType?: RoomType;
//   roomCategory?: RoomCategory;
//   isPackage: boolean;
//   package?: Package;
//   checkIn?: Date;
//   checkOut?: Date;
//   nights?: number;
//   totalPrice?: number;
// }

// export interface InquiryForm {
//   name: string;
//   email: string;
//   phone: string;
//   message?: string;
// }

export interface RoomType {
  id: string;
  name: string;
  image: string;
  size: string;
  guests: number;
  startingPrice: number;
  description: string;
}

export interface RoomCategory {
  id: string;
  name: string;
  image: string;
  size: string;
  guests: number;
  startingPrice: number;
  roomTypeId: string;
  description: string;
  amenities: string[];
}

export interface Package {
  id: string;
  name: string;
  duration: string;
  price: number;
  savings?: number;
}

export interface BookingDetails {
  roomType?: RoomType;
  roomCategory?: RoomCategory;
  isPackage: boolean;
  package?: Package;
  checkIn?: Date;
  checkOut?: Date;
  nights?: number;
  totalPrice?: number;
}

export interface InquiryForm {
  name: string;
  email: string;
  phone: string;
  message?: string;
}
