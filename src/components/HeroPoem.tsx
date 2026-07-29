import { H1, MotionBox, Paragraph, Text } from '@/gui'

import { motion } from "framer-motion";

const HeroPoem = () => {
  return (
    <MotionBox 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      textAlign="center" maxWidth="56rem" marginHorizontal="auto" marginBottom={64} rowGap={24}
    >
      <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-tight)" fontFamily="var(--font-display)" letterSpacing="var(--tracking-tight)" color="var(--white)" position="relative" zIndex={50} textAlign="center" $sm={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
        In the age of endless dreams,
        <Text display="block" backgroundClip="text" color="transparent" paddingVertical={4} lineHeight="var(--leading-relaxed)" backgroundImage="linear-gradient(to right, var(--foreground), var(--foreground))">
          Ideas take flight on digital wings
        </Text>
      </H1>
      <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" fontWeight="300" textAlign="center" $sm={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>
        Through circuits of light and streams of code,<br />
        Hanzo weaves your visions into reality untold.<br />
        With algorithms crafted and AI refined,<br />
        We transform the dreams of your design.
      </Paragraph>
    </MotionBox>
  );
};

export default HeroPoem;
