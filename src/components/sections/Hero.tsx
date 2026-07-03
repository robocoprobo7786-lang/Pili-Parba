import React from 'react';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Typography';

export const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[100svh] -mt-24 pt-24 flex items-center justify-center overflow-hidden bg-ink"
      aria-label="Pili Parba Festival Hero"
    >
      {/* Background Video layer */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover motion-reduce:hidden"
          src="/videos/hero_video.mp4"
          poster="/images/eb32e7c67f970f6cbd68809ea4f64390.jpg"
          preload="metadata"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        {/* Fallback for prefers-reduced-motion */}
        <div className="hidden motion-reduce:block absolute inset-0 bg-ink" aria-hidden="true" />
      </div>

      {/* Content Layer */}
      <Container className="relative z-20 flex flex-col items-center justify-center text-center mt-16 md:mt-0">
        {/* H1 Headline (Screen Reader Only) */}
        <Heading
          level={1}
          as="h1"
          className="sr-only"
        >
          The Roar of Tulunadu
        </Heading>
      </Container>
    </section>
  );
};
