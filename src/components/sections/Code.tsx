import { Box, Button, H2, MotionBox, Paragraph, Text, XStack } from '@/gui'

import { motion } from "framer-motion";
import { Code as CodeIcon } from "lucide-react";

const Code = () => {
  return (
    <Box render="section" paddingVertical={80} backgroundColor="var(--black)">
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          textAlign="center" marginBottom={64}
        >
          <XStack display="inline-flex" alignItems="center" columnGap={8} backgroundColor="rgb(255 255 255 / 0.1)" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" marginBottom={24}>
            <CodeIcon size={16} color="var(--white)" />
            <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--white)">Modern Development Stack</Text>
          </XStack>
          <H2 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontFamily="var(--font-display)" color="var(--white)" marginBottom={16}>Code with Confidence</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            A modern development stack with real-time AI, beautiful UI components, and a powerful database.
          </Paragraph>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          position="relative" marginHorizontal="auto" maxWidth="64rem"
        >
          <Box borderRadius="var(--radius-xl)" overflow="hidden" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)">
            <XStack backgroundColor="var(--neutral-900)" paddingHorizontal={16} paddingVertical={8} display="flex" alignItems="center" columnGap={8}>
              <XStack display="flex" columnGap={4}>
                <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.2)"></Box>
                <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.2)"></Box>
                <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.2)"></Box>
              </XStack>
              <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">app.tsx</Box>
            </XStack>
            <Box backgroundColor="var(--black)" padding={24}>
              <Box render="pre" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                <Text render="code" color="var(--neutral-300)">
                  <Text color="var(--neutral-400)">import</Text>{" "}
                  <Text color="var(--neutral-300)">{"{"}</Text>{" "}
                  <Text color="var(--neutral-400)">createAI</Text>{" "}
                  <Text color="var(--neutral-300)">{"}"}</Text>{" "}
                  <Text color="var(--neutral-400)">from</Text>{" "}
                  <Text color="var(--foreground)">'@hanzo/ai'</Text>
                  {"\n"}
                  <Text color="var(--neutral-400)">import</Text>{" "}
                  <Text color="var(--neutral-300)">{"{"}</Text>{" "}
                  <Text color="var(--neutral-400)">Button</Text>{" "}
                  <Text color="var(--neutral-300)">{"}"}</Text>{" "}
                  <Text color="var(--neutral-400)">from</Text>{" "}
                  <Text color="var(--foreground)">'@hanzo/ui'</Text>
                  {"\n"}
                  <Text color="var(--neutral-400)">import</Text>{" "}
                  <Text color="var(--neutral-300)">{"{"}</Text>{" "}
                  <Text color="var(--neutral-400)">createClient</Text>{" "}
                  <Text color="var(--neutral-300)">{"}"}</Text>{" "}
                  <Text color="var(--neutral-400)">from</Text>{" "}
                  <Text color="var(--foreground)">'@hanzo/base'</Text>
                  {"\n\n"}
                  <Text color="var(--neutral-400)">const</Text>{" "}
                  <Text color="var(--neutral-400)">ai</Text>{" "}
                  <Text color="var(--neutral-300)">=</Text>{" "}
                  <Text color="var(--neutral-400)">createAI</Text>
                  <Text color="var(--neutral-300)">()</Text>
                  {"\n"}
                  <Text color="var(--neutral-400)">const</Text>{" "}
                  <Text color="var(--neutral-400)">db</Text>{" "}
                  <Text color="var(--neutral-300)">=</Text>{" "}
                  <Text color="var(--neutral-400)">createClient</Text>
                  <Text color="var(--neutral-300)">()</Text>
                </Text>
              </Box>
            </Box>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Code;
