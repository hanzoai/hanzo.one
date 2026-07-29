import { Box, H2, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <Box render="section" paddingVertical={64} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, rgb(0 0 0 / 0.5), rgb(255 255 255 / 0.1))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="64rem" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={48}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Our Story</H2>
          <Box height={4} width={80} backgroundColor="var(--neutral-500)" marginHorizontal="auto"></Box>
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          backgroundColor="rgb(0 0 0 / 0.3)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={32} marginBottom={40}
        >
          <Paragraph color="var(--neutral-300)" lineHeight="var(--leading-relaxed)" marginBottom={24} $md={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}>
            Hanzo Industries, Inc. – originally known as Crowdstart under Verus Media – has undergone several transformations since its inception. 
            Founded by Zach Kelling (with David Tai as co-founder) in the mid-2010s, the company evolved from a crowd-powered marketing platform 
            into a Techstars-backed artificial intelligence venture, and ultimately into a multifaceted AI technology provider.
          </Paragraph>
          
          <Paragraph color="var(--neutral-300)" lineHeight="var(--leading-relaxed)" marginBottom={24} $md={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}>
            Along the way, Hanzo has achieved notable milestones in product development, fundraising, and partnerships, 
            while navigating pivots and challenges that shaped its guiding philosophy. Our journey demonstrates the power 
            of adaptability, resilience, and first-principles thinking in building technology that empowers others.
          </Paragraph>
          
          <Paragraph color="var(--neutral-300)" lineHeight="var(--leading-relaxed)" $md={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}>
            Today, operating under the umbrella Hanzo Industries, Inc., we remain small but influential, 
            proving the mantra that a lean, mission-driven team can punch well above its weight. Our mission 
            is to accelerate human entrepreneurship through intelligent technology and timeless wisdom.
          </Paragraph>
          
        </MotionBox>
      </Box>
    </Box>
  );
};

export default OurStory;
