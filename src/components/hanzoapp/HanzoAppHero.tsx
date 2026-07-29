import { Anchor, Box, Button, H1, H3, MotionBox, Paragraph, Text } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HanzoAppHero = () => {
  return (
    <Box render="section" paddingTop={128} paddingBottom={80} paddingHorizontal={16} position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      {/* Background elements */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.3} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.1))"></Box>
      <Box position="absolute" top={-160} right={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      <Box position="absolute" bottom={-160} left={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box maxWidth="64rem" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          textAlign="center"
        >
          <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
            Build LLM Apps <Text color="var(--foreground)">Easily</Text>
          </H1>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={48} $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>
            Build. Deploy. Scale.
          </Paragraph>
          
          <Box marginBottom={48}>
            <Paragraph color="var(--neutral-400)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" marginBottom={16}>Trusted and used by teams around the globe</Paragraph>
          </Box>
          
          <Box maxWidth="36rem" marginHorizontal="auto" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} marginBottom={48}>
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={16}>Iterate, fast</H3>
            <Paragraph color="var(--neutral-300)" marginBottom={24}>
              Developing LLM apps takes countless iterations. With AI engineering approach, we enable quick iterations to go from testing to production
            </Paragraph>
            
            <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-lg)" padding={16} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" textAlign="left" marginBottom={24}>
              <pre>
                $ npm install -g flowise<br/>
                $ npx flowise start
              </pre>
            </Box>
            
            <Button 
              size="lg"
              color="var(--white)" paddingHorizontal={32} paddingVertical={24} borderRadius="var(--radius-lg)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-500))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--foreground))" }}
            >
              <Anchor href="#" display="flex" alignItems="center">
                Get Started 
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
              </Anchor>
            </Button>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default HanzoAppHero;
