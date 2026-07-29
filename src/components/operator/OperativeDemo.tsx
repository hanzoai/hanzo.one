import { Anchor, Box, Button, H2, H3, MotionBox, Paragraph, XStack, YStack } from '@/gui'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";

const OperativeDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <Box render="section" paddingVertical={96} position="relative" overflow="hidden" id="demo">
      {/* Background gradient */}
      <Box position="absolute" top={0} left={0} width="100%" height="100%" backgroundImage="linear-gradient(to bottom, var(--pure-black), var(--neutral-950))"></Box>
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} position="relative" zIndex={10} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box textAlign="center" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={64}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              See Operative in Action
            </H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)">
              Watch as Hanzo Operative uses multimodal AI to navigate interfaces, 
              complete tasks, and solve problems autonomously.
            </Paragraph>
          </MotionBox>
        </Box>
        
        <Box position="relative" marginHorizontal="auto" width="100%" maxWidth="64rem" aspectRatio={1.7777777777777777} borderRadius="var(--radius-xl)" overflow="hidden" borderWidth={1} borderColor="var(--neutral-800)" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)">
          <XStack position="absolute" top={0} right={0} bottom={0} left={0} display="flex" alignItems="center" justifyContent="center" backgroundImage="linear-gradient(to top right, var(--neutral-950), var(--neutral-900))">
            <Box display="inline-block" 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
              alt="Code on screen" 
              render="img" width="100%" height="100%" objectFit="cover" opacity={0.3} mixBlendMode="overlay"
            />
            
            <YStack position="absolute" top={0} right={0} bottom={0} left={0} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)" marginBottom={16} $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>Demo Video</H3>
              <Button 
                size="lg"
                borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.2)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--surface-card)" }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause size={24} /> : <Box render="span" display="inline-flex" alignItems="center" marginLeft={4}><Play size={24} /></Box>}
              </Button>
              
              <XStack position="absolute" bottom={24} width="100%" maxWidth="24rem" display="flex" alignItems="center" justifyContent="center" columnGap={16}>
                <Button size="sm" variant="ghost" color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }}>
                  <SkipBack size={20} />
                </Button>
                <Box width="100%" backgroundColor="var(--surface-card-emphasis)" height={4} borderRadius="var(--radius-full)" overflow="hidden">
                  <Box backgroundColor="var(--neutral-500)" height="100%" width="33.333333%" borderRadius="var(--radius-full)"></Box>
                </Box>
                <Button size="sm" variant="ghost" color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }}>
                  <SkipForward size={20} />
                </Button>
              </XStack>
            </YStack>
          </XStack>
        </Box>
        
        <Box marginTop={48} textAlign="center">
          <Anchor tap 
            href="https://docs.hanzo.ai/operative/examples"
            color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
          >
            View more examples →
          </Anchor>
        </Box>
      </Box>
    </Box>
  );
};

export default OperativeDemo;
