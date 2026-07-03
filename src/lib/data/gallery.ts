import { GalleryItem } from './types';

const MOCK_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    image: '/images/eb32e7c67f970f6cbd68809ea4f64390.jpg',
    alt: 'Tiger dancer suspended in mid-air flip with drum accompaniment',
    troupe: 'Lorem Ipsum',
    place: 'Lorem Ipsum',
    year: 2025,
    photographer: 'Lorem Ipsum',
  },
  {
    id: 'g-2',
    image: '/images/images (6).jpg',
    alt: 'Close-up of vibrant yellow and black face paint on a dancer',
    troupe: 'Lorem Ipsum',
    place: 'Lorem Ipsum',
    year: 2024,
    photographer: 'Lorem Ipsum',
  },
  {
    id: 'g-3',
    image: '/images/images (8).jpg',
    alt: 'A procession of tiger dancers marching through temple grounds',
    troupe: 'Lorem Ipsum',
    place: 'Lorem Ipsum',
    year: 2025,
    photographer: 'Lorem Ipsum',
  },
  {
    id: 'g-4',
    image: '/images/images (9).jpg',
    alt: 'Young tiger dancer displaying an intense roar expression',
    troupe: 'Lorem Ipsum',
    place: 'Lorem Ipsum',
    year: 2023,
    photographer: 'Lorem Ipsum',
  },
  {
    id: 'g-5',
    image: '/images/images (10).jpg',
    alt: 'Tashe drummers setting the rhythm for the dancers in the evening light',
    troupe: 'Lorem Ipsum',
    place: 'Lorem Ipsum',
    year: 2024,
    photographer: 'Lorem Ipsum',
  },
];

export async function getFeaturedGalleryItems(): Promise<GalleryItem[]> {
  // Simulate network latency to be async-ready from day one
  await new Promise((resolve) => setTimeout(resolve, 50));
  return MOCK_GALLERY_ITEMS;
}
