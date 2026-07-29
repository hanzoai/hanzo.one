import { Anchor, Box, Button, H1, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Eye, Cpu, MousePointer, Keyboard } from "lucide-react";

const OperativeHero = () => {
  return (
    <Box render="section" paddingVertical={128} position="relative" overflow="hidden">
      {/* Background gradient */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), transparent)"></Box>
      <Box position="absolute" top="33.333333%" left="-25%" width="50%" height="50%" backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      <Box position="absolute" bottom="25%" right="-25%" width="50%" height="50%" backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} position="relative" zIndex={10} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Text display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" marginBottom={24}>
              AI Engineering Framework
            </Text>
            
            <H1 fontSize="var(--text-5xl)" lineHeight="var(--leading-5xl)" fontWeight="700" letterSpacing="var(--tracking-tight)" color="transparent" marginBottom={24} backgroundClip="text" backgroundImage="linear-gradient(to bottom, var(--foreground), var(--foreground), var(--foreground))" $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }} $lg={{ fontSize: "var(--text-7xl)", lineHeight: "var(--leading-7xl)" }}>
              Hanzo Operative
            </H1>

            <Paragraph marginTop={24} fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
              A framework that enables multimodal AI models to operate a computer using the same inputs and 
              outputs as a human operator, viewing the screen and executing mouse and keyboard actions to achieve objectives.
            </Paragraph>

            <YStack marginTop={40} display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}>
              <Button size="lg" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32}>
                <a href="#get-started">Get Started</a>
              </Button>
              <Button size="lg" variant="outline" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32} color="var(--white)" borderColor="rgb(255 255 255 / 0.2)" backgroundColor="rgb(255 255 255 / 0.05)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}>
                <Anchor tap href="https://docs.hanzo.ai/operative" display="flex" alignItems="center" gap={8}>
                  <Terminal size={20} />
                  View Docs
                </Anchor>
              </Button>
            </YStack>
          </MotionBox>

          <MotionBox 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            marginTop={64} display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={24} maxWidth="56rem" marginHorizontal="auto" $sm={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}
          >
            <YStack display="flex" flexDirection="column" alignItems="center">
              <XStack height={48} width={48} borderRadius="var(--radius-lg)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
                <Eye size={24} color="var(--foreground)" />
              </XStack>
              <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-300)">Screen Vision</Paragraph>
            </YStack>
            <YStack display="flex" flexDirection="column" alignItems="center">
              <XStack height={48} width={48} borderRadius="var(--radius-lg)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
                <Cpu size={24} color="var(--foreground)" />
              </XStack>
              <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-300)">Multimodal Models</Paragraph>
            </YStack>
            <YStack display="flex" flexDirection="column" alignItems="center">
              <XStack height={48} width={48} borderRadius="var(--radius-lg)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
                <MousePointer size={24} color="var(--foreground)" />
              </XStack>
              <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-300)">Cursor Control</Paragraph>
            </YStack>
            <YStack display="flex" flexDirection="column" alignItems="center">
              <XStack height={48} width={48} borderRadius="var(--radius-lg)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
                <Keyboard size={24} color="var(--foreground)" />
              </XStack>
              <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-300)">Keyboard Actions</Paragraph>
            </YStack>
          </MotionBox>
        </Box>
      </Box>
    </Box>
  );
};

export default OperativeHero;
