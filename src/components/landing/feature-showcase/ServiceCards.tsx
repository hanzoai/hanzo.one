import { Anchor, Box, Grid, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServiceCards: React.FC = () => {
  return (
    <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} marginTop={64} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
      {/* Hanzo Agency Card */}
      <MotionBox
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-xl)" padding={32} position="relative" overflow="hidden"
      >
        <XStack display="flex" alignItems="center" gap={16} marginBottom={16}>
          <Box padding={12} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)">
            <Box display="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" render="svg" color="var(--foreground)">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Box>
          </Box>
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)">Hanzo Agency</H3>
        </XStack>
        <Paragraph color="var(--neutral-300)" marginBottom={24}>
          Elevate your brand with our AI-powered creative agency. We craft cutting-edge digital experiences that captivate audiences and deliver measurable business results.
        </Paragraph>
        <Anchor minHeight={44} href="/agency" group color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>
          <Text marginRight={8}>Learn more</Text>
          <Box render="span" display="inline-flex" alignItems="center" $group-hover={{ x: 4 }}><ArrowRight size={16} /></Box>
        </Anchor>
      </MotionBox>
      
      {/* Sensei Group Card */}
      <MotionBox
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-xl)" padding={32} position="relative" overflow="hidden"
      >
        <XStack display="flex" alignItems="center" gap={16} marginBottom={16}>
          <Box padding={12} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)">
            <Box display="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" render="svg" color="var(--foreground)">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Box>
          </Box>
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)">Sensei Group</H3>
        </XStack>
        <Paragraph color="var(--neutral-300)" marginBottom={24}>
          Accelerate enterprise transformation with our elite collective of CXOs and technology experts. We guide organizations through digital evolution with strategic implementation.
        </Paragraph>
        <Anchor minHeight={44} href="/sensei" group color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>
          <Text marginRight={8}>Learn more</Text>
          <Box render="span" display="inline-flex" alignItems="center" $group-hover={{ x: 4 }}><ArrowRight size={16} /></Box>
        </Anchor>
      </MotionBox>
    </Grid>
  );
};

export default ServiceCards;
