import { Anchor, ArchitecturalBox, Box, Button, ChromeText, GridLines, H3, MasonryGrid, MasonryItem, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { aiPlatformFeatures } from "./data/ai-platform-data";

const AIPlatformSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Box render="section" position="relative" paddingVertical={80} overflow="hidden" $sm={{ paddingVertical: 128 }}>
      {/* Background elements - simplified */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundColor="var(--black)" />
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.05), rgb(0 0 0 / 0.9))"></Box>
      
      <GridLines spacing={60} opacity={0.2} color="rgba(147, 51, 234, 0.15)" />
      
      <Box position="relative" zIndex={10} maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" marginBottom={64}
        >
          <XStack display="flex" justifyContent="center" marginBottom={16}>
            <Text display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">
              Unified AI Development
            </Text>
          </XStack>
          <XStack display="flex" justifyContent="center">
            <ChromeText as="h2" fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
              AI Engineering Platform
            </ChromeText>
          </XStack>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" $md={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-xl)" }}>
            Build powerful AI experiences with our comprehensive platform designed for developers,
            researchers, and enterprises to create, deploy, and scale AI applications.
          </Paragraph>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          marginHorizontal="auto" maxWidth="var(--container-max)"
        >
          <MasonryGrid columns={4} gap={20} marginBottom={48}>
            {aiPlatformFeatures.map((feature, index) => {
              const isFeatureHovered = hovered === index;
              // Monochrome: hover raises the surface and the border, it does
              // not introduce a hue.
              const surface = isFeatureHovered ? 'var(--white-10)' : 'var(--white-05)';
              const edge = isFeatureHovered ? 'var(--border-strong)' : 'var(--border)';
              
              return (
                <MasonryItem key={feature.id}>
                  <MotionBox
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArchitecturalBox
                      height="100%" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} padding={24} borderRadius="var(--radius-2xl)" transition="color, background-color, border-color, fill, stroke 300ms cubic-bezier(.4,0,.2,1)"
                      backgroundColor={surface}
                      borderColor={edge}
                      showCorners={true}
                      cornerSize={16}
                      cornerColor={isFeatureHovered ? 'rgb(255 255 255 / 0.4)' : 'rgb(255 255 255 / 0.2)'}
                    >
                      <Box marginBottom={16}>
                        {React.createElement(feature.icon, { size: 32, color: 'var(--foreground)' })}
                      </Box>
                      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={8}>{feature.title}</H3>
                      <Paragraph color="var(--neutral-400)">{feature.description}</Paragraph>
                    </ArchitecturalBox>
                  </MotionBox>
                </MasonryItem>
              );
            })}
          </MasonryGrid>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          textAlign="center"
        >
          <Button
            size="lg"
            borderRadius="var(--radius-full)" backgroundImage="linear-gradient(to right, var(--neutral-700), var(--neutral-700))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-600), var(--neutral-600))" }}
          >
            <Anchor href="/ai" display="flex" alignItems="center">
              Explore the Platform <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
            </Anchor>
          </Button>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default AIPlatformSection;
