import { Box, H3, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import TaijiSymbol from "./svg/TaijiSymbol";

const FinalQuoteSection = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="56rem" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          textAlign="center"
        >
          <Box position="relative" padding={48} backdropFilter="blur(16px)" WebkitBackdropFilter="blur(16px)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(0 0 0 / 0.9))">
            <Box position="absolute" top={0} left="50%" x="-50%" y="-50%">
              <TaijiSymbol size={64} color="rgb(255 255 255 / 0.9)" animate={true} />
            </Box>
            
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)" marginBottom={24}>The Zen of Hanzo</H3>
            <Paragraph color="var(--neutral-300)" lineHeight="var(--leading-relaxed)" marginBottom={32} maxWidth="42rem" marginHorizontal="auto" $md={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}>
              "Before code, there is concept. Before concept, there is principle. 
              Before principle, there is emptiness. From emptiness, all possibility."
            </Paragraph>
            
            <Box width={96} height={1} marginHorizontal="auto" marginBottom={24} backgroundImage="linear-gradient(to right, transparent, var(--neutral-600), transparent)"></Box>
            
            <Paragraph color="var(--neutral-500)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontStyle="italic">
              Ancient wisdom meets modern engineering
            </Paragraph>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default FinalQuoteSection;
