import { Box, H2, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Crop, MonitorSmartphone } from "lucide-react";

const ScreenCapture = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="rgb(0 0 0 / 0.5)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox 
          display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={64} alignItems="center" $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Box order={2} borderRadius="var(--radius-xl)" overflow="hidden" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)" borderWidth={1} borderColor="var(--neutral-800)" $md={{ order: 1 }}>
            <Box position="relative" paddingBottom="120%" height={0} backgroundColor="var(--neutral-900)">
              <XStack position="absolute" top={0} right={0} bottom={0} left={0} display="flex" alignItems="center" justifyContent="center">
                <Text color="var(--neutral-400)">Screen capture preview</Text>
              </XStack>
            </Box>
          </Box>
          
          <Box order={1} $md={{ order: 2 }}>
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} color="var(--white)" $sm={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Use Apps & Your Screen as input
            </H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={24}>
              Capture any part of your screen for instant insights and explanations
            </Paragraph>
            
            <XStack display="flex" alignItems="center" columnGap={16} color="var(--neutral-400)">
              <Crop size={24} color="var(--neutral-500)" />
              <span>Select any region of your screen</span>
            </XStack>
            <XStack display="flex" alignItems="center" columnGap={16} color="var(--neutral-400)" marginTop={12}>
              <MonitorSmartphone size={24} color="var(--neutral-500)" />
              <span>Ask questions without leaving your workflow</span>
            </XStack>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default ScreenCapture;
