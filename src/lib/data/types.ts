export interface Event {
  title: string;
  slug: string;
  date: string;
  region: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  troupe: string;
  place: string;
  year: number;
  photographer: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  url: string;
}

