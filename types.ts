export interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  icon: string; // In a real app, this would be a URL or icon component
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}