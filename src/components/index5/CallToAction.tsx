import { Box, Button, ChromeText, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CallToAction: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} position="relative" overflow="hidden">
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.3} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"></Box>
      <Box position="absolute" top={-160} right={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      <Box position="absolute" bottom={-160} left={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box maxWidth="64rem" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox 
          textAlign="center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} marginHorizontal="auto" textAlign="center" $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            Start Building Today
          </ChromeText>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={40}>
            Join thousands of developers building the future with Hanzo AI Cloud and DX Platform.
            Get started for free and scale as you grow.
          </Paragraph>
          
          <Button 
            size="lg"
            backgroundColor="var(--white)" color="var(--pure-black)" paddingHorizontal={40} paddingVertical={28} borderRadius="var(--radius-lg)" fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-100)", boxShadow: "0 20px 25px -5px rgb(0 0 0 / .4)" }}
            onClick={() => navigate('/signup')}
          >
            Start Building for Free <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
          </Button>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default CallToAction;
