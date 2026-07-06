import type { Metadata } from 'next';
import { Hero } from '../../components/sections/Hero';
import { About } from '../../components/sections/About';
import { FeaturedEvents } from '../../components/sections/FeaturedEvents';
import { GalleryPreview } from '../../components/sections/GalleryPreview';
import { Sponsors } from '../../components/sections/Sponsors';

export const metadata: Metadata = {
  title: {
    absolute: 'Pili Parba',
  },
  description:
    'Experience Pili Vesha — the ancient Tiger Dance tradition of coastal Karnataka. Discover upcoming events, troupes, gallery highlights, and the living heritage of Tulunadu.',
  openGraph: {
    title: 'Pili Parba',
    description:
      'Experience Pili Vesha — the ancient Tiger Dance tradition of coastal Karnataka. Discover upcoming events, troupes, gallery highlights, and the living heritage of Tulunadu.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Pili Parba',
  },
};

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedEvents />
      <GalleryPreview />
      <Sponsors />
    </>
  );
}
