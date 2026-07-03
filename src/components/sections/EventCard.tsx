import React from 'react';
import Image from 'next/image';
import { Event } from '../../lib/data/types';
import { Button } from '../ui/Button';
import { Heading, Text } from '../ui/Typography';
import { Badge } from '../ui/Badge';

// Warm drumskin-toned blur placeholder used for event card decorative images
const BLUR_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMzMyYjI3Ii8+PC9zdmc+';

export interface EventCardProps {
  event: Event;
  className?: string;
}

export const EventCard: React.FC<EventCardProps> = ({ event, className }) => {
  const { slug, image } = event;

  return (
    <article
      className={`flex flex-col h-full rounded-card overflow-hidden border border-drumskin/20 bg-bone shadow-sm transition-all duration-300 hover:shadow-md hover:border-drumskin/40 hover:scale-[1.02] ${className || ''}`}
    >
      {/* Image container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-drumskin/10">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
      </div>

      {/* Content panel BENEATH the image */}
      <div className="flex flex-col flex-1 p-6 items-start justify-between gap-6">
        <div className="w-full flex flex-col gap-3">
          
          {/* Metadata tags: Date & Region */}
          <div className="flex flex-wrap gap-2 items-center">
            <Badge variant="outline" className="text-xs">
              Lorem Ipsum
            </Badge>
            <Badge variant="ember" className="text-xs">
              Lorem Ipsum
            </Badge>
          </div>

          {/* Event Title */}
          <Heading level={3} as="h3" className="text-xl md:text-2xl font-bold tracking-tight text-ink">
            Lorem Ipsum Dolor
          </Heading>

          {/* Troupe Info */}
          <Text variant="body-sm" weight="medium" className="text-maroon-dusk">
            Lorem Ipsum: Lorem Ipsum
          </Text>

          {/* Short Description */}
          <Text variant="body-sm" className="text-ink/75 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </div>

        {/* Action Button */}
        <div className="w-full pt-2">
          <Button
            variant="secondary"
            href={`/events/${slug}`}
            className="w-full text-center"
          >
            Lorem Ipsum
          </Button>
        </div>
      </div>
    </article>
  );
};
