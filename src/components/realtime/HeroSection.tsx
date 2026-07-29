import { Box, Button, Grid, MotionBox, MotionText, Text, XStack, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Activity, Radio, Zap, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <Box render="section" paddingTop={128} paddingBottom={64} paddingHorizontal={16} position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), transparent)" />
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <YStack display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" gap={48} $lg={{ flexDirection: "row" }}>
          <Box width="100%" $lg={{ width: "50%" }}>
            <MotionBox 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5 }}
              flexDirection="row" display="inline-flex" alignItems="center" paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" marginBottom={24}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Activity size={16} color="var(--foreground)" /></Box>
              <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)">Real-time Data Synchronization</Text>
            </MotionBox>
            
            <MotionText 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.1 }}
              fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} color="var(--white)" $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $lg={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
            >
              Instant data sync <br/>
              <Text backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to right, var(--foreground), var(--foreground))">
                across all clients
              </Text>
            </MotionText>
            
            <MotionText 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-300)" marginBottom={32} maxWidth="36rem" $md={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-xl)" }}
            >
              Build collaborative, interactive experiences with Hanzo Realtime. 
              Synchronize data across clients in milliseconds with our reliable 
              WebSocket and pub/sub messaging infrastructure.
            </MotionText>
            
            <MotionBox 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
              flexDirection="row" display="flex" flexWrap="wrap" gap={16}
            >
              <Button 
                size="lg" 
                backgroundColor="var(--neutral-600)" color="var(--white)" paddingHorizontal={24} hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
              >
                Start Building <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                borderColor="var(--neutral-700)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
              >
                View Documentation
              </Button>
            </MotionBox>
          </Box>
          
          <Box width="100%" $lg={{ width: "50%" }}>
            <MotionBox 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.4 }}
              backgroundColor="rgb(0 0 0 / 0.6)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} borderRadius="var(--radius-xl)"
            >
              <XStack display="flex" justifyContent="space-between" alignItems="center" marginBottom={16}>
                <XStack display="flex" alignItems="center">
                  <MotionBox animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} height={12} width={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" marginRight={12} />
                  <Text color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Live connection</Text>
                </XStack>
                <XStack display="flex" alignItems="center">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Radio size={16} color="var(--foreground)" /></Box>
                  <Text color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">10ms latency</Text>
                </XStack>
              </XStack>
              
              <Box rowGap={16}>
                <XStack height={56} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--border-strong)" padding={16} display="flex" alignItems="center" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Zap size={20} color="var(--foreground)" /></Box>
                  <Text color="var(--neutral-200)">Client data synchronized in real-time</Text>
                </XStack>
                
                <Grid display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap={16}>
                  {[1, 2, 3].map((i) => (
                    <YStack 
                      key={i}
                      height={96} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-800)" padding={16} display="flex" flexDirection="column" justifyContent="center" alignItems="center" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), var(--neutral-950))"
                    >
                      <MotionBox animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} height={8} width={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" marginBottom={8} />
                      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" textAlign="center">Client {i}</Text>
                      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" textAlign="center">Connected</Text>
                    </YStack>
                  ))}
                </Grid>
                
                <Box height={144} backgroundColor="var(--neutral-900)" borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-800)" padding={12} overflow="hidden" fontFamily="var(--font-mono)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
                  <Box color="var(--foreground)">// Subscribe to real-time updates</Box>
                  <Box color="var(--neutral-300)">const channel = await hanzo.realtime.subscribe(</Box>
                  <Box color="var(--neutral-300)" paddingLeft={16}>'room-updates',</Box>
                  <Box color="var(--neutral-300)" paddingLeft={16}>(message) =&gt; {`{`}</Box>
                  <Box color="var(--neutral-300)" paddingLeft={32}>console.log('New message:', message);</Box>
                  <Box color="var(--neutral-300)" paddingLeft={32}>updateUIWithData(message.data);</Box>
                  <Box color="var(--neutral-300)" paddingLeft={16}>{`}`}</Box>
                  <Box color="var(--neutral-300)">);</Box>
                </Box>
              </Box>
            </MotionBox>
          </Box>
        </YStack>
      </Box>
    </Box>
  );
};

export default HeroSection;
