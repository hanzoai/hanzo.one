import { Box, H2, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { MousePointer, FileText } from "lucide-react";

const TextInteraction = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox 
          display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={64} alignItems="center" $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} color="var(--white)" $sm={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Follows your actions on any app
            </H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={24}>
              Select text anywhere and instantly summarize, translate, or analyze it
            </Paragraph>
            
            <XStack display="flex" alignItems="center" columnGap={16} color="var(--neutral-400)">
              <MousePointer size={24} color="var(--neutral-500)" />
              <span>Works with any selectable text</span>
            </XStack>
            <XStack display="flex" alignItems="center" columnGap={16} color="var(--neutral-400)" marginTop={12}>
              <FileText size={24} color="var(--neutral-500)" />
              <span>Instant insights across applications</span>
            </XStack>
          </div>
          
          <Box borderRadius="var(--radius-xl)" overflow="hidden" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)" borderWidth={1} borderColor="var(--neutral-800)">
            <Box position="relative" paddingBottom="120%" height={0} backgroundColor="var(--neutral-900)">
              <XStack position="absolute" top={0} right={0} bottom={0} left={0} display="flex" alignItems="center" justifyContent="center">
                <Text color="var(--neutral-400)">Text interaction preview</Text>
              </XStack>
            </Box>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default TextInteraction;
