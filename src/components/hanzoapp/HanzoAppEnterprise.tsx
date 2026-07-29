import { Box, Button, H2, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const HanzoAppEnterprise = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--neutral-950)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-prose)" marginHorizontal="auto" textAlign="center">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Enterprise</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32}>
            Looking for specific use cases and support?
          </Paragraph>
          <Button 
            size="lg"
            backgroundColor="var(--neutral-600)" color="var(--white)" paddingHorizontal={32} hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
          >
            Let's Chat
          </Button>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default HanzoAppEnterprise;
