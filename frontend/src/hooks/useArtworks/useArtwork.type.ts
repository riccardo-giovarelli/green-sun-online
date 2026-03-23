export interface StrapiImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}

export interface Artwork {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: unknown;
  medium: string;
  dimensions: string;
  price: number;
  isAvailable: boolean;
  category?: Category;
  images?: StrapiImage[];
}
