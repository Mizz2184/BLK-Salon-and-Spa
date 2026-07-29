export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  description?: string;
  category: 'Styling' | 'Color' | 'Treatments' | 'Extensions' | 'Lash & Brow' | 'Facials' | 'Waxing';
  popular?: boolean;
  notes?: string;
}

export interface PackageItem {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface MembershipTier {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  value: number;
  savings: string;
  choices: string[];
  perks: string[];
  popular?: boolean;
}

export interface LuxuryRoom {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  iconName: string;
}

export interface AwardBadge {
  id: string;
  title: string;
  organization: string;
  year?: string;
  iconName: string;
}

export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  description: string;
  image: string;
  benefits: string[];
}

export interface BookingState {
  isOpen: boolean;
  selectedCategory?: string;
  selectedServiceId?: string;
  selectedPackageId?: string;
}
