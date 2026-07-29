import { Box, H2, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <Box render="section" paddingVertical={64} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="64rem" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={48}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Our Story</H2>
          <Box height={4} width={80} backgroundColor="var(--neutral-500)" marginHorizontal="auto"></Box>
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          backgroundColor="rgb(0 0 0 / 0.3)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={32} rowGap={16}
        >
          <Paragraph color="var(--neutral-300)" lineHeight="var(--leading-relaxed)" $md={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}>
            Hanzo began as Crowdstart, a small, hungry team driving explosive product launches—most notably, 
            the record-breaking SKULLY Technologies AR-1 helmet on Indiegogo, raising millions and demonstrating 
            the immense power of data-driven innovation. That success signaled we were onto something special.
          </Paragraph>
          
          <Paragraph color="var(--neutral-300)" lineHeight="var(--leading-relaxed)" $md={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}>
            We soon evolved into Hanzo AI, incubated by Techstars, pioneering intelligent e-commerce, 
            AI-driven marketing, and blockchain innovation. Our tools democratized technology previously 
            reserved for giants, enabling startups and enterprises alike to scale beyond expectation. 
            Under the leadership of co-founders Zach Kelling (Founding CTO) and Michael Kelling 
            (original co-founder, current CEO), Hanzo became synonymous with turning ambitious ideas into reality.
          </Paragraph>
          
          <Paragraph color="var(--neutral-300)" lineHeight="var(--leading-relaxed)" $md={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}>
            Today, as Hanzo Industries, we fuse AI and engineering discipline to build powerful platforms, 
            open-source tools, and autonomous AI solutions—fueling the next generation of innovation.
          </Paragraph>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default StorySection;
