import { Box, H2, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const EnterpriseFeatures = () => {
  return (
    <Box id="infra-log" render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.2}>
        <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.05) 1px, transparent 1px)" backgroundSize="32px 32px" backgroundColor="size:30px 30px" />
        <Box position="absolute" top={-160} right={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)" />
        <Box position="absolute" bottom={-160} left={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)" />
      </Box>
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          display="grid" gap={64} alignItems="center" $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
        >
          <div>
            <Box borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), var(--pure-black))">
              <XStack backgroundColor="var(--neutral-800)" paddingVertical={8} paddingHorizontal={16} display="flex" alignItems="center" justifyContent="space-between">
                <XStack display="flex" alignItems="center" columnGap={8}>
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                </XStack>
                <Box color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">infrastructure.log</Box>
              </XStack>
              <Box padding={16} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" maxHeight="400px" overflowY="auto">
                <Box color="var(--neutral-500)"># Hanzo Infrastructure Log</Box>
                <Box color="var(--foreground)">[INFO] Sydney region: 12 new CPU machines online</Box>
                <Box color="var(--foreground)">[SCALING] Tokyo region: GPU cluster expanding</Box>
                <Box color="var(--foreground)">[NETWORK] Frankfurt: New 100Gbps uplink active</Box>
                <Box color="var(--foreground)">[UPDATE] Global: System update scheduled for May 15</Box>
                <Box color="var(--foreground)">[INFO] Amsterdam: Storage cluster expansion complete</Box>
                <Box color="var(--foreground)">[SCALING] São Paulo: 8 new CPU machines online</Box>
                <Box color="var(--foreground)">[NETWORK] New York: DDoS protection enhanced</Box>
                <Box color="var(--foreground)">[INFO] Singapore: New edge region now available</Box>
                <Box color="var(--foreground)">[UPDATE] Global: Network routes optimized</Box>
              </Box>
            </Box>
          </div>
          
          <div>
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Use the Tech You Love
            </H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32}>
              Build with your favorite framework. No Dockerfile? No problem: our CLI generates containers for most popular frameworks, including Rails, Phoenix, Django, Node, Laravel, and .NET.
            </Paragraph>
            <MotionBox
              href="#learn-more"
              initial={{ opacity: 0.9 }}
              whileHover={{ opacity: 1, scale: 1.02 }}
              
              display="inline-block" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-lg)" color="var(--white)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ boxShadow: "0 10px 15px -3px rgb(0 0 0 / .35)", shadowColor: "rgb(255 255 255 / 0.2)" }}
            >
              Learn More
            </MotionBox>
          </div>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default EnterpriseFeatures;
