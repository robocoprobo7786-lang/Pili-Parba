import React from 'react';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading, Text } from '../ui/Typography';
import { Reveal } from '../motion/Reveal';

// Warm drumskin-toned blur placeholder
const BLUR_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMzMyYjI3Ii8+PC9zdmc+';

export const About: React.FC = () => {
  return (
    <Section background="bone" spacing="lg" id="history">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Reveal>
              <Text
                variant="eyebrow"
                as="span"
                className="text-maroon-dusk mb-3 tracking-widest"
              >
                History
              </Text>

              <Heading
                level={2}
                as="h2"
                className="text-ink mb-6 text-3xl md:text-5xl font-bold tracking-tight"
              >
                History of Pili Parba
              </Heading>

              <div className="flex flex-col gap-6 max-w-2xl">
                <Text variant="body" className="text-ink/80 text-base md:text-lg">
                  {"Kudla Pili Parba was established to provide a dedicated platform where Hulivesha teams could gather, celebrate their shared heritage, and showcase their artistry through a professionally organized competition that honors Tulunadu's enduring cultural traditions together."}
                </Text>

                <Text variant="body" className="text-ink/80 text-base md:text-lg">
                  Unlike traditional street performances, participating teams perform on a common stage where experienced judges evaluate presentation, coordination, creativity, discipline, musical accompaniment, and overall execution throughout every competitive performance with fairness.
                </Text>

                <Text variant="body" className="text-ink/80 text-base md:text-lg">
                  Over successive editions, Kudla Pili Parba has become a celebrated gathering, bringing together performers, volunteers, and audiences while encouraging younger generations to appreciate, preserve, and proudly continue Hulivesha traditions.
                </Text>
              </div>
            </Reveal>
          </div>

          {/* Supporting Image Column */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-md overflow-hidden shadow-lg border border-drumskin/10">
              <Image
                src="/images/images (5).jpg"
                alt="A performer executing a mid-air acrobatic flip while painted in full Pili Vesha tiger stripes"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};
