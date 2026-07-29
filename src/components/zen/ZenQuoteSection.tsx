import { Box, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import TaijiSymbol from "./svg/TaijiSymbol";

interface ZenQuoteSectionProps {
  quote: string;
  attribution?: string;
}

const ZenQuoteSection: React.FC<ZenQuoteSectionProps> = ({ quote, attribution }) => {
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
          <Box position="relative" padding={48} backdropFilter="blur(16px)" WebkitBackdropFilter="blur(16px)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), var(--pure-black))">
            <Box position="absolute" top={0} left="50%" x="-50%" y="-50%">
              <TaijiSymbol size={48} color="rgb(255 255 255 / 0.8)" animate={true} />
            </Box>
            
            <Paragraph color="var(--neutral-300)" lineHeight="var(--leading-relaxed)" marginBottom={32} maxWidth="42rem" marginHorizontal="auto" $md={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-xl)" }}>
              "{quote}"
            </Paragraph>
            
            <Box width={96} height={1} marginHorizontal="auto" marginBottom={16} backgroundImage="linear-gradient(to right, transparent, var(--neutral-700), transparent)"></Box>
            
            {attribution && (
              <Paragraph color="var(--neutral-500)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontStyle="italic">
                {attribution}
              </Paragraph>
            )}
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default ZenQuoteSection;
