import { Box, Grid, H2, H3, Link, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Lock, Puzzle, Code } from "lucide-react";


const UnifiedAISection = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} position="relative" backgroundImage="linear-gradient(to bottom, var(--pure-black), #030014)">
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={64} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          {/* 3D Visual - Would be replaced with actual 3D cube */}
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            position="relative" aspectRatio={1} maxWidth="500px" marginHorizontal="auto" $lg={{ marginHorizontal: 0 }}
          >
            <XStack position="absolute" top={0} right={0} bottom={0} left={0} display="flex" alignItems="center" justifyContent="center">
              <Box width="100%" height="100%" maxWidth="400px" maxHeight="400px" borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" rotate="45deg" />
              <Box position="absolute" width="90%" height="90%" borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" rotate="30deg" />
              <Box position="absolute" width="80%" height="80%" borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" rotate="15deg" />
              
              <XStack position="absolute" top={0} right={0} bottom={0} left={0} display="flex" alignItems="center" justifyContent="center">
                <Box width="66.666667%" height="66.666667%" borderRadius="var(--radius-xl)" filter="blur(16px)" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.1))" />
              </XStack>
              
              <YStack position="absolute" top={0} right={0} bottom={0} left={0} display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={24} zIndex={10}>
                <XStack backgroundColor="var(--surface-overlay)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-xl)" padding={12} width="100%" maxWidth="300px" display="flex" alignItems="center">
                  <Box padding={8} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)" marginRight={12}>
                    <Layers size={20} color="var(--foreground)" />
                  </Box>
                  <Text color="var(--foreground)">AI Cloud</Text>
                </XStack>
                <XStack backgroundColor="var(--surface-overlay)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-xl)" padding={12} width="100%" maxWidth="300px" display="flex" alignItems="center">
                  <Box padding={8} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)" marginRight={12}>
                    <Code size={20} color="var(--foreground)" />
                  </Box>
                  <Text color="var(--foreground)">Developer Tools</Text>
                </XStack>
                <XStack backgroundColor="var(--surface-overlay)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-xl)" padding={12} width="100%" maxWidth="300px" display="flex" alignItems="center">
                  <Box padding={8} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)" marginRight={12}>
                    <Puzzle size={20} color="var(--foreground)" />
                  </Box>
                  <Text color="var(--foreground)">Human Ops & Workflow</Text>
                </XStack>
              </YStack>
            </XStack>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to right, var(--foreground), var(--neutral-400))" $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              The Unified AI Ecosystem
            </H2>
            
            <Box rowGap={32}>
              <div>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" color="var(--foreground)" marginBottom={8} display="flex" alignItems="center">
                  <XStack padding={4} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)" marginRight={8} display="flex" alignItems="center" justifyContent="center">
                    <Puzzle size={16} color="var(--foreground)" />
                  </XStack>
                  Human + AI Collaboration
                </H3>
                <Paragraph color="var(--neutral-400)">
                  Seamless synergy between automated intelligence and human creativity,
                  enabling teams to achieve more together than either could alone.
                </Paragraph>
              </div>
              
              <div>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" color="var(--foreground)" marginBottom={8} display="flex" alignItems="center">
                  <XStack padding={4} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)" marginRight={8} display="flex" alignItems="center" justifyContent="center">
                    <Layers size={16} color="var(--foreground)" />
                  </XStack>
                  Modular & Open
                </H3>
                <Paragraph color="var(--neutral-400)">
                  Use only the layers you need; scale effortlessly as your requirements evolve.
                  Our platform grows with your ambitions.
                </Paragraph>
              </div>
              
              <div>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" color="var(--foreground)" marginBottom={8} display="flex" alignItems="center">
                  <XStack padding={4} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)" marginRight={8} display="flex" alignItems="center" justifyContent="center">
                    <Lock size={16} color="var(--foreground)" />
                  </XStack>
                  APIs for Everything
                </H3>
                <Paragraph color="var(--neutral-400)">
                  Advertising, e-commerce, payments, messaging, authentication, and more—all
                  through consistent, developer-friendly interfaces.
                </Paragraph>
              </div>
            </Box>
            
            <Box marginTop={40}>
              <Link minHeight={44} 
                to="/platform"
                color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
              >
                Explore the platform
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
              </Link>
            </Box>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default UnifiedAISection;
