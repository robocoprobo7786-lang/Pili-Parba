import React from 'react';
import { getSponsors } from '../../lib/data/sponsors';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Text } from '../ui/Typography';
import { Reveal } from '../motion/Reveal';

export const Sponsors = async () => {
  const sponsors = await getSponsors();

  return (
    <Section background="bone" spacing="md" id="sponsors">
      <Container className="flex flex-col items-center gap-8 md:gap-12 border-t border-drumskin/20 pt-16 md:pt-24">
        
        {/* Section Header */}
        <div className="text-center">
          <Text 
            variant="eyebrow" 
            as="h2" 
            className="text-ink/50 tracking-widest uppercase"
          >
            Supported By
          </Text>
        </div>

        {/*
          TODO — Sponsors: When real logos and URLs are confirmed, replace each static <div>
          below with an <a> tag. Example structure for one sponsor:

            <a
              key={sponsor.id}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={sponsor.name}
              className="group flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-bone rounded-sm transition-all p-2"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={160}
                height={80}
                className="object-contain"
              />
            </a>

          Also restore the `import Image from 'next/image'` at the top of this file.
        */}

        {/* Logos Container */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 max-w-4xl mx-auto">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="flex items-center justify-center p-2"
              >
                <div className="relative w-32 md:w-40 h-16 md:h-20 flex items-center justify-center border border-ink/10 bg-drumskin/5 rounded-md">
                  {/* TODO: Replace this <span> with <Image src={sponsor.logo} alt={sponsor.name} fill className="object-contain p-4" /> */}
                  <span className="text-ink/40 tracking-widest uppercase text-sm font-semibold">
                    Sponsor
                  </span>
                </div>
              </div>
            ))}
        </div>
        </Reveal>

      </Container>
    </Section>
  );
};
