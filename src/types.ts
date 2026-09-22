export interface ServiceItem {
  id: string;
  title: string;
  category: 'cleaning' | 'repair' | 'gas' | 'installation' | 'commercial';
  price: number;
  originalPrice?: number;
  timeEstimate: string;
  description: string;
  popular?: boolean;
  features: string[];
  imageUrl: string;
  steps?: string[];
  acTypeSupported?: string;
  warrantyDays?: number;
  sparePartGuarantee?: string;
}

export interface GoogleReview {
  id: string;
  authorName: string;
  rating: number;
  date: string;
  location: string;
  comment: string;
  verified: boolean;
  acType?: string;
}

export interface ACProblem {
  id: string;
  name: string;
  hindiName?: string;
  iconName: string;
  likelyReason: string;
  recommendedService: string;
  estimatedCost: string;
}

export interface BookingData {
  id?: string;
  customerName: string;
  phone: string;
  address: string;
  locality: string;
  serviceType: string;
  acType: string;
  preferredDate: string;
  preferredSlot: string;
  notes?: string;
  createdAt?: string;
}
