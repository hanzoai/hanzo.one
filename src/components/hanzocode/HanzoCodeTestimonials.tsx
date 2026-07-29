import { Box, Grid, H2, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Twitter } from "lucide-react";

const HanzoCodeTestimonials = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--neutral-900), var(--pure-black))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox 
          textAlign="center" marginBottom={64}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Loved by world-class devs
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Engineers all around the world reach for Hanzo Code by choice.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gap={24} marginBottom={64} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {/* Just showing one testimonial for example, but you can replicate this */}
          <MotionBox 
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" padding={24} hoverStyle={{ backgroundColor: "var(--surface-card)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <XStack display="flex" alignItems="flex-start" gap={16} marginBottom={16}>
              <Box width={48} height={48} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-700)"></Box>
              <div>
                <Box fontWeight="500">Sarah Chen</Box>
                <XStack color="var(--neutral-400)" display="flex" alignItems="center">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Twitter size={14} color="var(--foreground)" /></Box>
                  @sarahcodes
                </XStack>
              </div>
            </XStack>
            <Paragraph color="var(--neutral-300)">Hanzo Code has completely changed how I approach coding. The AI suggestions are spot-on and save me hours every day.</Paragraph>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default HanzoCodeTestimonials;
