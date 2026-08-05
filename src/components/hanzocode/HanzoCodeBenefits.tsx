import { Anchor, Box, Grid, H2, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const HanzoCodeBenefits = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={64} alignItems="center" maxWidth="var(--container-prose)">
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24}>Like Cursor & Windsurf, But Better</H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={24}>
              Hanzo Code gives you all the features you love from Cursor and Windsurf, with intelligence that goes beyond tab completion.
            </Paragraph>
            
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} marginTop={48}>Advanced Code Understanding</H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={24}>
              Unlike other AI coding assistants, Hanzo Code builds a complete understanding of your entire codebase, not just the current file.
            </Paragraph>
            
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} marginTop={48}>Natural Language & Contextual Awareness</H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={24}>
              Rewrite entire modules with plain English instructions. Our AI understands your context and project architecture better than any other tool.
            </Paragraph>
            
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} marginTop={48}>True Force Multiplier</H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={24}>
              Hanzo Code isn't just an assistant—it's a force multiplier that can scale your productivity by orders of magnitude.
            </Paragraph>
            
            <Anchor tap href="#features" color="var(--foreground)" fontWeight="500" hoverStyle={{ color: "var(--foreground)" }}>
              See how we compare
            </Anchor>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default HanzoCodeBenefits;
