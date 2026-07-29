import { Box, Button, ChromeText, MotionBox, Paragraph, Text, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

interface CloudHeaderProps {
  mousePosition: { x: number; y: number };
  containerRef: React.RefObject<HTMLElement>;
}

const CloudHeader: React.FC<CloudHeaderProps> = ({ mousePosition, containerRef }) => {
  return (
    <YStack display="flex" flexDirection="column" justifyContent="space-between" alignItems="flex-start" marginBottom={64} $md={{ flexDirection: "row" }}>
      <Box maxWidth="42rem">
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          marginBottom={16}
        >
          <Text display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--black)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" color="var(--white)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">
            Infinitely Scalable, Globally Distributed
          </Text>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ChromeText 
            as="h2" 
            fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} textAlign="left" $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}
            style={{
              backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
            }}
          >
            AI Cloud
          </ChromeText>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginTop={16}>
            Global, infinitely scalable, sustainable compute infrastructure specifically optimized for AI applications
          </Paragraph>
        </MotionBox>
      </Box>
      
      <MotionBox
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        marginTop={32} $md={{ marginTop: 0 }}
      >
        <Button size="lg" variant="outline" color="var(--white)" borderColor="rgb(255 255 255 / 0.1)" backgroundColor="var(--black)" whiteSpace="nowrap" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}>
          <a href="/cloud">Explore Cloud</a>
        </Button>
      </MotionBox>
    </YStack>
  );
};

export default CloudHeader;
