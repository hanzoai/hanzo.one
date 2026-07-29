import { Box, Grid, H3, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const principles = [
  {
    title: "Orthogonality",
    japanese: "直交性",
    description: "Components that stand alone, yet integrate effortlessly. Each piece precise, purposeful, and independent."
  },
  {
    title: "Smallness",
    japanese: "小型",
    description: "Break complexity into simplicity. The tiniest modules scale infinitely; minimalism multiplied becomes power."
  },
  {
    title: "Completeness",
    japanese: "完全性",
    description: "No half-measures. Batteries always included. Meticulously crafted to empower ambitious creators instantly."
  },
  {
    title: "Dimensionality",
    japanese: "次元性",
    description: "Layers of abstraction that vanish complexity yet never block depth. Simplicity at the surface, depth underneath."
  },
  {
    title: "Clarity",
    japanese: "明晰",
    description: "Complexity is the enemy. APIs should whisper, not shout. Documentation should guide, not obscure."
  }
];

const ZenPrinciples: React.FC = () => {
  return (
    <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
      {principles.map((principle, index) => (
        <MotionBox
          key={principle.title}
          backgroundColor="rgb(0 0 0 / 0.3)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={24} display="flex" flexDirection="column"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Box fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" color="var(--foreground)" marginBottom={8} fontWeight="700">{principle.japanese}</Box>
          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8} color="var(--white)">{principle.title}</H3>
          <Paragraph color="var(--neutral-300)">{principle.description}</Paragraph>
        </MotionBox>
      ))}
    </Grid>
  );
};

export default ZenPrinciples;
