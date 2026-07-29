import { Box, Grid, H3, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Settings, User, Laptop } from "lucide-react";

const Customization = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox 
          display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Box backgroundColor="var(--surface-card-emphasis)" padding={32} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)">
            <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><User size={40} color="var(--neutral-500)" /></Box>
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={12} color="var(--white)">Customized to you</H3>
            <Paragraph color="var(--neutral-300)">
              Use About Me to tell Hanzo things you want it to consider when it responds
            </Paragraph>
          </Box>
          
          <Box backgroundColor="var(--surface-card-emphasis)" padding={32} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)">
            <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Laptop size={40} color="var(--neutral-500)" /></Box>
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={12} color="var(--white)">Sees files & context</H3>
            <Paragraph color="var(--neutral-300)">
              Set up key shortcuts to quickly access your most-used interactions
            </Paragraph>
          </Box>
          
          <Box backgroundColor="var(--surface-card-emphasis)" padding={32} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)">
            <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Settings size={40} color="var(--neutral-500)" /></Box>
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={12} color="var(--white)">Grounded using screen data</H3>
            <Paragraph color="var(--neutral-300)">
              We ground your requests in the context of your screen
            </Paragraph>
          </Box>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginTop={48} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox 
            backgroundColor="var(--surface-card-emphasis)" padding={32} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={12} color="var(--white)">Mix Modalities</H3>
            <Paragraph color="var(--neutral-300)">
              Apply feedback from your last meeting to your code
            </Paragraph>
          </MotionBox>
          
          <MotionBox 
            backgroundColor="var(--surface-card-emphasis)" padding={32} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={12} color="var(--white)">Generate in-context code anywhere</H3>
            <Paragraph color="var(--neutral-300)">
              Create code snippets in any application with the power of Hanzo
            </Paragraph>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default Customization;
