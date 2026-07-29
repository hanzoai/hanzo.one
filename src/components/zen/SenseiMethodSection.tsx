import { Anchor, Box, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, HexagonIcon } from "lucide-react";

const SenseiMethodSection = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="rgb(0 0 0 / 0.5)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="64rem" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>The Sensei Method</H2>
          <Box height={1} width={80} backgroundColor="var(--neutral-500)" marginHorizontal="auto"></Box>
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          backgroundColor="rgb(0 0 0 / 0.2)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-lg)" padding={40} marginBottom={40}
        >
          <XStack display="flex" justifyContent="center" marginBottom={32}>
            <Box render="span" display="inline-flex" alignItems="center" opacity={0.7}><HexagonIcon size={64} color="var(--neutral-500)" /></Box>
          </XStack>
          
          <Paragraph color="var(--neutral-300)" lineHeight="var(--leading-relaxed)" marginBottom={40} maxWidth="var(--container-prose)" marginHorizontal="auto" textAlign="center" $md={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}>
            Our principles come alive through the Sensei Method, a framework that brings these 64 hexagrams
            into practice. It combines wisdom from ancient philosophies with modern engineering practices
            to create technology that is both powerful and humane.
          </Paragraph>
          
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginTop={48} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <Anchor minHeight={44} 
              href="https://hanzo.agency" 
              target="_blank" 
              rel="noopener noreferrer"
              group display="flex" justifyContent="space-between" paddingHorizontal={32} paddingVertical={24} borderRadius="var(--radius-lg)" color="var(--white)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" hoverStyle={{ backgroundImage: "linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" }}
            >
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><BookOpen size={20} color="var(--foreground)" /></Box>
                <div>
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" marginBottom={8}>Hanzo Agency</H3>
                  <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">AI-powered creative & marketing</Paragraph>
                </div>
              </XStack>
              <Box render="span" display="inline-flex" alignItems="center" $group-hover={{ x: 4 }}><ArrowRight size={20} /></Box>
            </Anchor>
            
            <Anchor minHeight={44} 
              href="https://sensei.group" 
              target="_blank" 
              rel="noopener noreferrer"
              group display="flex" justifyContent="space-between" paddingHorizontal={32} paddingVertical={24} borderRadius="var(--radius-lg)" color="var(--white)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" hoverStyle={{ backgroundImage: "linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" }}
            >
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><HexagonIcon size={20} color="var(--foreground)" /></Box>
                <div>
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" marginBottom={8}>Sensei Group</H3>
                  <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">Enterprise transformation experts</Paragraph>
                </div>
              </XStack>
              <Box render="span" display="inline-flex" alignItems="center" $group-hover={{ x: 4 }}><ArrowRight size={20} /></Box>
            </Anchor>
          </Grid>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default SenseiMethodSection;
