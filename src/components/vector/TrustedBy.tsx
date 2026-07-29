import { AnimatedHeading, AnimatedSection, AnimatedStaggerContainer, Box, H2, MotionBox, createAnimationVariant, curves } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const companyItemVariant = createAnimationVariant("fadeInBlur", {
  duration: 0.3,
  curve: curves.snappy,
  distance: 10,
  blur: 4
});

const TrustedBy = () => {
  const companies = [
    "OpenAI", "Anthropic", "HuggingFace", "LangChain", "LlamaIndex", 
    "Replit", "Vercel", "GitHub", "Stripe", "Shopify", 
    "Microsoft", "Snap", "Bloomberg", "Twilio", "Intel"
  ];

  return (
    <AnimatedSection 
      paddingVertical={64} paddingHorizontal={16} backgroundColor="var(--neutral-950)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}
      viewportAmount={0.3}
    >
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <AnimatedHeading textAlign="center" marginBottom={40}>
          <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--white)" marginBottom={8}>Trusted By AI Innovators</H2>
          <Box width={80} height={4} backgroundColor="var(--neutral-500)" marginHorizontal="auto"></Box>
        </AnimatedHeading>
        
        <AnimatedStaggerContainer display="flex" flexWrap="wrap" justifyContent="center" columnGap={32} rowGap={24} delayFactor={0.03}>
          {companies.map((company, index) => (
            <MotionBox 
              key={index}
              variants={companyItemVariant}
              color="var(--neutral-400)" fontWeight="500" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" hoverStyle={{ color: "var(--foreground)" }}
              whileHover={{ scale: 1.05, color: "#818cf8" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {company}
            </MotionBox>
          ))}
        </AnimatedStaggerContainer>
      </Box>
    </AnimatedSection>
  );
};

export default TrustedBy;
