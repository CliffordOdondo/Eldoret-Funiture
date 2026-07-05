/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: 'beds' | 'sofas' | 'tables' | 'dining' | 'shoeracks' | 'tvstands' | 'kitchen';
  price: number; // in Kenyan Shillings (KSh)
  description: string;
  image: string;
  dimensions: string;
  materials: string[];
  isChester?: boolean; // Chester bed / Sofa
  woodOnly?: boolean; // Solid wood only, no upholstery
  features: string[];
  createdAt?: number;
}

export interface CategoryInfo {
  id: string;
  name: string;
  description: string;
  bannerImage: string;
  subcategories: string[];
}

export interface InquiryDetails {
  productId: string;
  productName: string;
  price: number;
  customMaterial?: string;
  customColor?: string;
  customNotes?: string;
}
