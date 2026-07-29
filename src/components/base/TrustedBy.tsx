import { Box, H2, MotionBox } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const TrustedBy = () => {
  const companies = [
    "Mozilla", "GitHub", "1Password", "PwC", "Pika", "Humata", 
    "Krea", "Udio", "LangChain", "Resend", "Loops", "Mobbin", 
    "Gopuff", "Chatbase", "Betashares"
  ];

  return (
    <Box render="section" paddingVertical={64} paddingHorizontal={16} backgroundColor="var(--surface-card-emphasis)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={40}
        >
          <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--white)" marginBottom={8}>Trusted Worldwide</H2>
          <Box width={80} height={4} backgroundColor="var(--neutral-500)" marginHorizontal="auto"></Box>
        </MotionBox>
        
        <MotionBox 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          flexDirection="row" display="flex" flexWrap="wrap" justifyContent="center" columnGap={32} rowGap={16}
        >
          {companies.map((company, index) => (
            <Box 
              key={index} 
              color="var(--neutral-400)" fontWeight="500" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
            >
              {company}
            </Box>
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
};

export default TrustedBy;
