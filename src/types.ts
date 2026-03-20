export interface Property {
    id: string;
    name: string;
    type: 'House' | 'Apartment' | 'Condo' | 'Villa';
    location: string;
    price: number;
    description: string;
    imageUrl: string;
    latitude: number;      // e.g. 15.2993
    longitude: number; 
  }
  