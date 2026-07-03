import { Event } from './types';

const MOCK_EVENTS: Event[] = [
  {
    title: 'Moodubidire Maha Parba',
    slug: 'moodubidire-maha-parba',
    date: 'October 18, 2026',
    region: 'Moodubidire',
    troupe: 'Mangaladevi Friends Troupe',
    description: 'The legendary gathering of coastal troupes competing under the night sky. Witness traditional acrobatics and the drumming of the Tashe.',
    image: '/images/eb32e7c67f970f6cbd68809ea4f64390.jpg',
  },
  {
    title: 'Mangaluru Dasara Pili Vesha',
    slug: 'mangaluru-dasara-pili-vesha',
    date: 'October 23, 2026',
    region: 'Mangaluru',
    troupe: 'Kadri Tigers',
    description: 'The grand finale of the Navaratri festival. The Kadri Tigers lead the procession down Kudla streets in a storm of yellow and black.',
    image: '/images/images (6).jpg',
  },
  {
    title: 'Udupi Krishna Temple Seva',
    slug: 'udupi-krishna-temple-seva',
    date: 'October 25, 2026',
    region: 'Udupi',
    troupe: 'Udupi Ashta Matha Dancers',
    description: 'A spiritual performance offering in the outer courtyards of the historic Krishna Matha, featuring classic tiger movements and vows.',
    image: '/images/images (8).jpg',
  },
];

export async function getFeaturedEvents(): Promise<Event[]> {
  // Simulate network latency to be async-ready from day one
  await new Promise((resolve) => setTimeout(resolve, 50));
  return MOCK_EVENTS;
}
