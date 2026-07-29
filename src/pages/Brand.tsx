import { Box, Button, Grid, H1, H2, H3, Helmet, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ColorSwatch = ({ name, hex, ...styleProps }) => (
  <Box {...styleProps} rowGap={8}>
    <Box width="100%" aspectRatio={1} borderRadius="var(--radius-lg)"></Box>
    <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">{name}</Box>
    <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">{hex}</Box>
  </Box>
);

const TypographyExample = ({ name,   description, ...styleProps }) => (
  <Box {...styleProps} rowGap={8} marginBottom={40}>
    <Box >{name}</Box>
    <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">{description}</Box>
  </Box>
);

const ComponentShowcase = ({ title, children }) => (
  <Box borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" overflow="hidden">
    <Box padding={16} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="rgb(0 0 0 / 0.4)">
      <H3 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--white)">{title}</H3>
    </Box>
    <XStack padding={32} display="flex" flexWrap="wrap" gap={16} alignItems="center" justifyContent="center" backgroundColor="rgb(0 0 0 / 0.2)">
      {children}
    </XStack>
  </Box>
);

const Brand = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Helmet>
        <title>Hanzo Design System - Brand Guidelines</title>
        <meta name="description" content="The Hanzo design system, typography, colors, and components. A guide for consistent visual design across our platform." />
      </Helmet>
      
      <Navbar />
      
      <Box render="main" paddingTop={128} paddingBottom={96} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          maxWidth="var(--container-wide)" marginHorizontal="auto"
        >
          <Box textAlign="center" marginBottom={64}>
            <Box display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-900)" color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" marginBottom={16}>
              Design System
            </Box>
            <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to bottom, var(--foreground), rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
              Hanzo Brand
            </H1>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-400)" maxWidth="var(--container-prose)" marginHorizontal="auto">
              A comprehensive guide for creating consistent, elegant, and minimal interfaces across our platform.
            </Paragraph>
          </Box>
          
          {/* Design Principles */}
          <Box render="section" marginBottom={96}>
            <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={32} textAlign="center">Design Principles</H2>
            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              <Box padding={32} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundImage="linear-gradient(to bottom, var(--neutral-900), var(--pure-black))">
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={16}>Minimal & Focused</H3>
                <Paragraph color="var(--neutral-400)">
                  Reduce visual noise and focus on essential elements. Each design decision should have purpose and enhance the user experience.
                </Paragraph>
              </Box>
              <Box padding={32} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundImage="linear-gradient(to bottom, var(--neutral-900), var(--pure-black))">
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={16}>Elegant & Refined</H3>
                <Paragraph color="var(--neutral-400)">
                  Use subtle gradients, appropriate spacing, and thoughtful typography to create elegant and sophisticated interfaces.
                </Paragraph>
              </Box>
              <Box padding={32} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundImage="linear-gradient(to bottom, var(--neutral-900), var(--pure-black))">
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={16}>Consistent & Cohesive</H3>
                <Paragraph color="var(--neutral-400)">
                  Maintain consistency in design patterns, spacing, and visual hierarchy to create a unified experience across all touchpoints.
                </Paragraph>
              </Box>
            </Grid>
          </Box>
          
          {/* Color Palette */}
          <Box render="section" marginBottom={96}>
            <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={32} textAlign="center">Color Palette</H2>
            <Box rowGap={48}>
              <div>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" marginBottom={24}>Core Colors</H3>
                <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={24} $sm={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
                  <ColorSwatch name="Pure Black" hex="#000000" backgroundColor="var(--black)" />
                  <ColorSwatch name="Deep Black" hex="#101010" backgroundColor="#101010" />
                  <ColorSwatch name="Pure White" hex="#FFFFFF" backgroundColor="var(--white)" />
                  <ColorSwatch name="Off White" hex="#F7F7F7" backgroundColor="#F7F7F7" />
                </Grid>
              </div>
              
              <div>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" marginBottom={24}>Gray Scale</H3>
                <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={24} $sm={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }} $md={{ gridTemplateColumns: "repeat(6, minmax(0, 1fr))" }}>
                  <ColorSwatch name="Gray 900" hex="#171717" backgroundColor="#171717" />
                  <ColorSwatch name="Gray 800" hex="#262626" backgroundColor="#262626" />
                  <ColorSwatch name="Gray 700" hex="#404040" backgroundColor="#404040" />
                  <ColorSwatch name="Gray 600" hex="#525252" backgroundColor="#525252" />
                  <ColorSwatch name="Gray 500" hex="#737373" backgroundColor="#737373" />
                  <ColorSwatch name="Gray 400" hex="#A3A3A3" backgroundColor="#A3A3A3" />
                </Grid>
              </div>
              
              <div>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" marginBottom={24}>Subtle Gradients</H3>
                <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                  <ColorSwatch 
                    name="White Fade" 
                    hex="Linear" 
                    backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.1), transparent)" 
                  />
                  <ColorSwatch 
                    name="Gray Fade" 
                    hex="Linear" 
                    backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), transparent)" 
                  />
                </Grid>
              </div>
            </Box>
          </Box>
          
          {/* Typography */}
          <Box render="section" marginBottom={96}>
            <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={32} textAlign="center">Typography</H2>
            <Box maxWidth="var(--container-prose)" marginHorizontal="auto">
              <TypographyExample 
                name="Heading 1" 
                fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" letterSpacing="var(--tracking-tight)" $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }} 
                description="Large page titles, hero sections" 
              />
              <TypographyExample 
                name="Heading 2" 
                fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" letterSpacing="var(--tracking-tight)" $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }} 
                description="Section titles, major divisions" 
              />
              <TypographyExample 
                name="Heading 3" 
                fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" 
                description="Subsection headings, feature headings" 
              />
              <TypographyExample 
                name="Heading 4" 
                fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" 
                description="Card titles, minor section headings" 
              />
              <TypographyExample 
                name="Body Large" 
                fontSize="var(--text-lg)" lineHeight="var(--leading-relaxed)" color="var(--neutral-300)" 
                description="Featured paragraphs, pull quotes" 
              />
              <TypographyExample 
                name="Body" 
                fontSize="var(--text-base)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" 
                description="Primary body text" 
              />
              <TypographyExample 
                name="Caption" 
                fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)" 
                description="Supporting text, metadata, labels" 
              />
            </Box>
          </Box>
          
          {/* Components */}
          <Box render="section" marginBottom={96}>
            <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={32} textAlign="center">Components</H2>
            <Box rowGap={48}>
              <ComponentShowcase title="Buttons">
                <Button variant="default" size="lg">Primary Button</Button>
                <Button variant="outline" size="lg">Secondary Button</Button>
                <Button variant="ghost" size="lg">Ghost Button</Button>
                <Button variant="link" size="lg">Link Button</Button>
              </ComponentShowcase>
              
              <ComponentShowcase title="Cards">
                <Box width="100%" maxWidth="28rem" padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundImage="linear-gradient(to bottom, var(--neutral-900), var(--pure-black))">
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" marginBottom={8}>Card Title</H3>
                  <Paragraph color="var(--neutral-400)" marginBottom={16}>This is a standard card component with a subtle gradient background.</Paragraph>
                  <Button variant="outline" size="sm">Learn More</Button>
                </Box>
              </ComponentShowcase>
              
              <ComponentShowcase title="Badges">
                <Box paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-900)" color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">Default Badge</Box>
                <Box paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.1)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" color="var(--white)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">Glass Badge</Box>
              </ComponentShowcase>
            </Box>
          </Box>
          
          {/* Grid & Spacing */}
          <Box render="section" marginBottom={96}>
            <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={32} textAlign="center">Grid & Spacing</H2>
            <Box maxWidth="var(--container-prose)" marginHorizontal="auto">
              <Box backgroundColor="var(--neutral-900)" padding={16} borderRadius="var(--radius-lg)" marginBottom={32}>
                <Grid display="grid" gridTemplateColumns="repeat(4, minmax(0, 1fr))" gap={16} height={256}>
                  {[...Array(8)].map((_, i) => (
                    <XStack key={i} backgroundColor="var(--neutral-800)" borderRadius="var(--radius)" display="flex" alignItems="center" justifyContent="center">
                      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">{i+1}</Text>
                    </XStack>
                  ))}
                </Grid>
              </Box>
              <Box rowGap={12} color="var(--neutral-400)">
                <p>We use a 4px base unit for all spacing measurements.</p>
                <p>Common spacing values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px.</p>
                <p>Baseline grid: 4px with a primary line height of 1.5.</p>
              </Box>
            </Box>
          </Box>
          
          {/* Icons & Illustrations */}
          <section>
            <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={32} textAlign="center">Icons & Illustrations</H2>
            <Box maxWidth="var(--container-prose)" marginHorizontal="auto" textAlign="center">
              <Paragraph color="var(--neutral-400)" marginBottom={32}>
                We use minimalist, monochrome SVG graphics with subtle animations to emphasize important concepts
                without compromising our clean, elegant aesthetic.
              </Paragraph>
              <XStack display="flex" flexWrap="wrap" gap={32} justifyContent="center">
                <Box display="inline-block" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" render="svg" color="var(--white)">
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </Box>
                
                <Box display="inline-block" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" render="svg" color="var(--white)">
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </Box>
                
                <Box display="inline-block" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" render="svg" color="var(--white)">
                  <path d="M15 4L9 12L15 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </Box>
                
                <Box display="inline-block" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" render="svg" color="var(--white)">
                  <path d="M9 4L15 12L9 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </Box>
              </XStack>
            </Box>
          </section>
        </MotionBox>
      </Box>

      <Footer />
    </Box>
  );
};

export default Brand;
