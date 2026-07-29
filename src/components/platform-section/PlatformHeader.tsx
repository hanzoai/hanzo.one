import { Button, ChromeText, MotionBox, Paragraph, Text, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const PlatformHeader: React.FC = () => {
  return (
    <YStack display="flex" flexDirection="column" justifyContent="space-between" alignItems="flex-start" marginBottom={64} $md={{ flexDirection: "row", alignItems: "flex-end" }}>
      <div>
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          marginBottom={16}
        >
          <Text display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">
            AI Engineering Platform
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
            fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}
          >
            Your AI future belongs to you
          </ChromeText>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="42rem">
            Pioneer the next wave of intelligence with an integrated ecosystem that gives you full control over your AI journey.
          </Paragraph>
        </MotionBox>
      </div>
      
      <MotionBox
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        marginTop={32} $md={{ marginTop: 0 }}
      >
        <Button size="lg" variant="outline" color="var(--white)">
          <a href="/solutions">Explore Solutions</a>
        </Button>
      </MotionBox>
    </YStack>
  );
};

export default PlatformHeader;
