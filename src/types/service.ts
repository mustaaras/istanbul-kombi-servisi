export interface Service {
  $id: string;
  name: string;
  address: string;
  district: string;
  phone: string;
  rating: number;
  reviewCount: number;
  latitude: number;
  longitude: number;
  isActive: boolean;
  imageUrl?: string;
  tags?: string[]; // e.g., ['Vaillant', 'Demirdöküm', '7/24']
}
