
export interface PackageInfo {
  total: number;
  perNight: number;
  features: string[];
  addOns: string[];
}

export interface RoomData {
  [key: number]: PackageInfo;
}

export interface CategoryData {
  [roomName: string]: RoomData;
}

export interface AccommodationData {
  studio: CategoryData;
  bhk2: CategoryData;
}
