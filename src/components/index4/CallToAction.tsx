import { Box, Button, H2, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <Box render="section" maxWidth="56rem" marginHorizontal="auto" marginBottom={64}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        backdropFilter="blur(24px)" WebkitBackdropFilter="blur(24px)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-2xl)" padding={40} textAlign="center" backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"
      >
        <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" marginBottom={24} color="var(--white)" $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
          Start building today
        </H2>
        <Paragraph color="var(--neutral-400)" marginBottom={32} maxWidth="42rem" marginHorizontal="auto" lineHeight="var(--leading-relaxed)">
          Join thousands of developers who are creating the next generation of applications on our platform.
        </Paragraph>
        <Button 
          size="lg" 
          height={48} paddingHorizontal={32} backgroundColor="var(--white)" color="var(--pure-black)" transition="color, background-color, border-color, fill, stroke 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ backgroundColor: "var(--neutral-200)" }}
        >
          Deploy your first project <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
        </Button>
      </MotionBox>
    </Box>
  );
};

export default CallToAction;
