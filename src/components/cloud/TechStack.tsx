import { Box, H2, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const techStacks = [
  "Phoenix Framework",
  "SvelteKit",
  "Ruby on Rails",
  "Docker",
  "Go",
  "Rust",
  "Django",
  "Laravel",
  "NextJS"
];

const TechStack = () => {
  return (
    <Box id="learn-more" render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), var(--neutral-900))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={32} marginBottom={64}>
          {techStacks.map((tech, index) => (
            <MotionBox
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
              paddingHorizontal={24} paddingVertical={12} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" borderWidth={1} borderColor="var(--neutral-700)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)", backgroundColor: "var(--neutral-800)" }}
            >
              {tech}
            </MotionBox>
          ))}
        </XStack>

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center"
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Developer-Focused Public Cloud
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={40}>
            Help us build the next public cloud. No, seriously. Is your product something devs can take advantage of to ship better apps? Work with us.
          </Paragraph>
          
          <MotionBox
            href="#contact"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            
            display="inline-block" paddingHorizontal={32} paddingVertical={16} borderRadius="var(--radius-lg)" backgroundColor="var(--white)" color="var(--pure-black)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ boxShadow: "0 10px 15px -3px rgb(0 0 0 / .35)", shadowColor: "rgb(255 255 255 / 0.2)" }}
          >
            Build A Cloud For Developers
          </MotionBox>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default TechStack;
