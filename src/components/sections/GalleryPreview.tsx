import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedGalleryItems } from '../../lib/data/gallery';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading, Text } from '../ui/Typography';
import { Button } from '../ui/Button';
import { Reveal } from '../motion/Reveal';

// Map each grid index to its correct responsive sizes string.
const getImageSizes = (index: number): string => {
  switch (index) {
    case 0:
      return '(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw'; // 8/12 = 66%
    case 1:
    case 2:
      return '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'; // 4/12 = 33%
    case 3:
      return '(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 42vw'; // 5/12 = 42%
    case 4:
      return '(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 58vw'; // 7/12 = 58%
    default:
      return '100vw';
  }
};

// Warm bone-toned blur placeholder
const BLUR_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMzMyYjI3Ii8+PC9zdmc+';

// Editorial 12-column asymmetric grid
const getGridItemClasses = (index: number): string => {
  switch (index) {
    case 0:
      return 'col-span-1 md:col-span-8 row-span-1 md:row-span-2'; // Dominant landscape
    case 1:
      return 'col-span-1 md:col-span-4 row-span-1'; // Supporting top right
    case 2:
      return 'col-span-1 md:col-span-4 row-span-1'; // Supporting bottom right
    case 3:
      return 'col-span-1 md:col-span-5 row-span-1'; // Bottom row left
    case 4:
      return 'col-span-1 md:col-span-7 row-span-1'; // Bottom row right (panoramic)
    default:
      return 'col-span-1 row-span-1';
  }
};

export const GalleryPreview = async () => {
  const galleryItems = await getFeaturedGalleryItems();

  return (
    <Section background="ink" spacing="lg" id="gallery">
      <Container>

        {/* Editorial Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
          <Reveal>
            <Text
              variant="eyebrow"
              as="span"
              className="text-bone/80 mb-4 tracking-[0.2em] uppercase text-sm font-semibold"
            >
              Gallery
            </Text>
            <Heading
              level={2}
              as="h2"
              className="text-ember text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
            >
              Lorem Ipsum <span className="text-ember">Dolor</span>
            </Heading>
            <Text
              variant="body"
              className="text-bone/90 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
            </Text>
          </Reveal>
        </div>

        {/* Asymmetrical Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[360px] gap-4 md:gap-4 lg:gap-6 grid-flow-row-dense">
          {galleryItems.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 100}
              className={`h-full ${getGridItemClasses(index)}`}
            >
              <Link
                href="/gallery"
                aria-label={`View full gallery for ${item.troupe}`}
                className="block relative w-full h-full overflow-hidden rounded-sm bg-drumskin/10 group hover:shadow-lg transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                <Image
                  src={item.image}
                  alt={`${item.alt} | ${item.troupe}, ${item.place} (${item.year}). Photo by ${item.photographer}`}
                  fill
                  sizes={getImageSizes(index)}
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />

                {/* Subtle scrim for metadata contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <Heading level={3} as="h3" className="text-bone text-xl md:text-2xl font-bold mb-1">
                      {item.troupe}
                    </Heading>
                    <Text variant="eyebrow" className="text-bone/90 text-xs tracking-wider uppercase">
                      {item.photographer} • {item.year}
                    </Text>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* CTA Below Gallery */}
        <Reveal delay={200}>
          <div className="mt-16 flex justify-center">
            <Button variant="outline-ember" href="/gallery" className="px-12 py-5 text-sm tracking-widest uppercase font-bold">
              View All
            </Button>
          </div>
        </Reveal>

      </Container>
    </Section>
  );
};

