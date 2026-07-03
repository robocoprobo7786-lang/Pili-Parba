import { Event } from './types';

const MOCK_EVENTS: Event[] = [
  {
    title: 'Lorem Ipsum Dolor',
    slug: 'lorem-ipsum-dolor-1',
    date: 'October 18, 2026',
    region: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/eb32e7c67f970f6cbd68809ea4f64390.jpg',
  },
  {
    title: 'Lorem Ipsum Dolor',
    slug: 'lorem-ipsum-dolor-2',
    date: 'October 23, 2026',
    region: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/images (6).jpg',
  },
  {
    title: 'Lorem Ipsum Dolor',
    slug: 'lorem-ipsum-dolor-3',
    date: 'October 25, 2026',
    region: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/images (8).jpg',
  },
];

export async function getFeaturedEvents(): Promise<Event[]> {
  // Simulate network latency to be async-ready from day one
  await new Promise((resolve) => setTimeout(resolve, 50));
  return MOCK_EVENTS;
}
