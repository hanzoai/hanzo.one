import { Box, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import JapaneseWave from "./JapaneseWave";

interface Principle {
  title: string;
  description: string;
  japaneseSymbol?: string;
}

const principles: Principle[] = [
  {
    title: "Orthogonality",
    japaneseSymbol: "直交性",
    description: "Do one thing exceptionally. Components that stand alone, yet integrate effortlessly."
  },
  {
    title: "Smallness",
    japaneseSymbol: "小型",
    description: "Break complexity into simplicity. The tiniest modules scale infinitely."
  },
  {
    title: "Completeness",
    japaneseSymbol: "完全性",
    description: "No half-measures. Batteries always included. Meticulously crafted to empower creators."
  },
  {
    title: "Dimensionality",
    japaneseSymbol: "次元性",
    description: "Layers of abstraction that vanish complexity yet never block depth."
  },
  {
    title: "Clarity",
    japaneseSymbol: "明晰",
    description: "Complexity is the enemy. APIs should whisper, not shout. Clear thinking fuels innovation."
  },
  {
    title: "Accessibility",
    japaneseSymbol: "アクセス性",
    description: "Democratize access to data, models, and knowledge. Transparency drives rapid iteration."
  },
  {
    title: "Composability",
    japaneseSymbol: "構成性",
    description: "Small components combine into infinite possibility. Every piece purposeful, every connection intuitive."
  },
  {
    title: "Scalability",
    japaneseSymbol: "拡張性",
    description: "Build for tomorrow's traffic, today. We architect for exponential growth."
  },
  {
    title: "Velocity",
    japaneseSymbol: "速度",
    description: "Iteration at the speed of thought. Rapid experimentation is how magic becomes method."
  },
  {
    title: "Longevity",
    japaneseSymbol: "長寿",
    description: "Invest in future-proof designs. We build systems that evolve. Durability by design."
  }
];

const ZenManifesto: React.FC = () => {
  return (
    <Box position="relative">
      <Box position="absolute" zIndex={-10} top={0} left={0} right={0} height="100%">
        <JapaneseWave 
          color="#9b87f5" 
          height={300} 
          opacity={0.05} 
          speed={30} 
          position="absolute" top="25%"
        />
        <JapaneseWave 
          color="#6E59A5" 
          height={300} 
          delay={1} 
          opacity={0.03} 
          speed={35} 
          position="absolute" top="66.666667%"
        />
      </Box>
      
      <Box maxWidth="56rem" marginHorizontal="auto" paddingHorizontal={16} paddingVertical={64}>
        <MotionBox 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} color="var(--white)" $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Our AI Engineering Manifesto</H2>
          <Paragraph color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" $md={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}>
            Hanzo began as a spark—an intuition that AI was the next great leverage. Since then, 
            we've honed our craft: a fusion of relentless experimentation, bold creativity, and disciplined 
            engineering, forging principles that guide our quest for radical innovation.
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          {principles.map((principle, index) => (
            <MotionBox
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={24} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"
            >
              <XStack display="flex" alignItems="center" marginBottom={12}>
                <Box fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" color="var(--foreground)" fontWeight="600" marginRight={12}>{principle.japaneseSymbol}</Box>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--white)" fontWeight="700">{principle.title}</H3>
              </XStack>
              <Paragraph color="var(--neutral-300)">{principle.description}</Paragraph>
            </MotionBox>
          ))}
        </Grid>
        
        <MotionBox 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          marginTop={64} textAlign="center"
        >
          <Box display="inline-block" padding={24} backgroundColor="rgb(0 0 0 / 0.3)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)">
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--white)" fontWeight="700" marginBottom={8}>Crafted by Innovators, Proven by Scale</H3>
            <Paragraph color="var(--neutral-300)">
              The Zen of Hanzo is our battle-tested ethos. Born from the crucible of high-stakes launches,
              explosive successes, and daring experiments. We are AI engineers, cypherpunk innovators, 
              and relentless optimists who believe technology is a lever to amplify human creativity and enterprise.
            </Paragraph>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default ZenManifesto;
