import { Sponsor } from './types';

const MOCK_SPONSORS: Sponsor[] = [
  {
    id: 's-1',
    name: 'Karnataka Tourism Board',
    logo: '/images/logo.png', // Reusing placeholder for mock
    url: 'https://karnatakatourism.org',
  },
  {
    id: 's-2',
    name: 'Mangaluru City Corporation',
    logo: '/images/logo.png',
    url: 'https://mangalurucity.mrc.gov.in',
  },
  {
    id: 's-3',
    name: 'Tulunadu Heritage Foundation',
    logo: '/images/logo.png',
    url: '#',
  },
  {
    id: 's-4',
    name: 'Coastal Arts Council',
    logo: '/images/logo.png',
    url: '#',
  },
  {
    id: 's-5',
    name: 'Local Business Initiative',
    logo: '/images/logo.png',
    url: '#',
  },
];

export async function getSponsors(): Promise<Sponsor[]> {
  // Simulate network latency to be async-ready from day one
  await new Promise((resolve) => setTimeout(resolve, 50));
  return MOCK_SPONSORS;
}
