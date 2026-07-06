import React from 'react';
import { getFeaturedEvents } from '../../lib/data/events';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading, Text } from '../ui/Typography';
import { Button } from '../ui/Button';
import { EventCard } from './EventCard';
import { Reveal } from '../motion/Reveal';

export const FeaturedEvents = async () => {
  const events = await getFeaturedEvents();

  return (
    <Section background="bone" spacing="lg" id="events">
      <Container className="flex flex-col gap-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col items-start text-left">
            <Text
              variant="eyebrow"
              as="span"
              className="text-maroon-dusk mb-3 tracking-widest"
            >
              Events
            </Text>
            <Heading
              level={2}
              as="h2"
              className="text-ink text-3xl md:text-5xl font-bold tracking-tight"
            >
              Featured Events
            </Heading>
          </div>

          <div className="hidden md:block">
            <Button variant="ghost" href="/events" className="text-sm">
              View All Events &rarr;
            </Button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Reveal key={event.slug} delay={index * 100}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>

        {/* Mobile-only View All CTA */}
        <div className="block md:hidden text-center mt-2">
          <Button variant="secondary" href="/events" className="w-full">
            View All Events
          </Button>
        </div>

      </Container>
    </Section>
  );
};
