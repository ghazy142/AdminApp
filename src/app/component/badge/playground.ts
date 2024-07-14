export interface Playground {
  id: number;
  name: string;
  description: string;
  advantages: string;
  address: string;
  type: number;
  rating: number;
  country: string;
  city: string;
  longitude: number;
  latitude: number;
  holidays: string;
  openingHours: string;
  feesForHour: number;
  cancellationFees: number;
  isBookable: boolean;
  rules: string;
  playgroundPictures: string[]; // Assuming the pictures are base64 encoded strings
}
export interface PlaygroundPicture {
  id: number;
  picture: string;
  isDocumentation: boolean;
}

