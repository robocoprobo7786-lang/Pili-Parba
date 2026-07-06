import { GalleryItem } from './types';

const MOCK_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    image: '/images/eb32e7c67f970f6cbd68809ea4f64390.jpg',
    alt: 'image 1',
    year: 2025,
    photographer: 'Photos',
  },
  {
    id: 'g-2',
    image: '/images/images (6).jpg',
    alt: 'image 2',
    year: 2024,
    photographer: 'Photos',
  },
  {
    id: 'g-3',
    image: '/images/images (8).jpg',
    alt: 'image 3',
    year: 2025,
    photographer: 'Photos',
  },
  {
    id: 'g-4',
    image: '/images/images (9).jpg',
    alt: 'image 4',
    year: 2023,
    photographer: 'Photos',
  },
  {
    id: 'g-5',
    image: '/images/images (10).jpg',
    alt: 'image 5',
    year: 2024,
    photographer: 'Photos',
  },
];

export async function getFeaturedGalleryItems(): Promise<GalleryItem[]> {
  // Simulate network latency to be async-ready from day one
  await new Promise((resolve) => setTimeout(resolve, 50));
  return MOCK_GALLERY_ITEMS;
}
