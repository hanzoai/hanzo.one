import { Badge, Box, Button, MotionBox, MotionText, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Zap, Users, ArrowRight } from "lucide-react";

const TeamHero = () => {
  return (
    <XStack render="section" position="relative" minHeight="85vh" display="flex" alignItems="center" paddingTop={128} paddingBottom={80} paddingHorizontal={16} overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      {/* Background elements */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundColor="var(--black)" zIndex={0}>
        <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.5} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.1))"></Box>
        <MotionBox animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} position="absolute" top={-160} right={-160} width={384} height={384} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></MotionBox>
        <MotionBox animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} position="absolute" bottom={-160} left={-160} width={384} height={384} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)" style={{ animationDelay: "1s" }}></MotionBox>
        
        {/* Animated grid */}
        <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.1}>
          <Box height="100%" width="100%" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px' 
          }} />
        </Box>
      </Box>

      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10} width="100%">
        <MotionBox 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          display="flex" flexDirection="column" textAlign="center"
        >
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge 
              variant="outline" 
              backgroundColor="var(--surface-card-emphasis)" borderColor="var(--border-strong)" color="var(--foreground)" alignSelf="center" marginBottom={24} paddingHorizontal={16} paddingVertical={6} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)"
            >
              AI + Human Integration
            </Badge>
          </MotionBox>
          
          <MotionText 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} letterSpacing="var(--tracking-tight)" $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
          >
            Meet your <Text backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to right, var(--foreground), var(--foreground))">AI Team</Text>
          </MotionText>
          
          <MotionText 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={40}
          >
            Autonomous AI agents working seamlessly alongside humans. 
            Train them with a simple Zoom call, monitor their work in real-time, 
            and benefit from enterprise-grade security and audit features.
          </MotionText>
          
          <MotionBox 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            flexDirection="row" display="flex" flexWrap="wrap" justifyContent="center" gap={16} marginBottom={48}
          >
            <Button 
              size="lg" 
              borderRadius="var(--radius-xl)" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-700), var(--neutral-700))" }}
            >
              Get Started
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              backgroundColor="rgb(0 0 0 / 0.5)" borderColor="var(--neutral-700)" color="var(--white)" borderRadius="var(--radius-xl)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
            >
              Watch Demo
            </Button>
          </MotionBox>
          
          <MotionBox 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            flexDirection="row" display="flex" flexWrap="wrap" justifyContent="center" columnGap={16} marginTop={32} $sm={{ columnGap: 48 }}
          >
            <MotionBox 
              display="flex" flexDirection="column" alignItems="center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Box backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)" marginBottom={12} borderWidth={1} borderColor="rgb(255 255 255 / 0.2)">
                <BrainCircuit size={24} color="var(--foreground)" />
              </Box>
              <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">AI-Powered</Text>
            </MotionBox>
            
            <MotionBox 
              display="flex" flexDirection="column" alignItems="center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Box backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)" marginBottom={12} borderWidth={1} borderColor="rgb(255 255 255 / 0.2)">
                <Users size={24} color="var(--foreground)" />
              </Box>
              <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">Human Integration</Text>
            </MotionBox>
            
            <MotionBox 
              display="flex" flexDirection="column" alignItems="center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Box backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)" marginBottom={12} borderWidth={1} borderColor="rgb(255 255 255 / 0.2)">
                <Zap size={24} color="var(--foreground)" />
              </Box>
              <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">Enterprise Ready</Text>
            </MotionBox>
          </MotionBox>
        </MotionBox>
      </Box>

      {/* Decorative elements */}
      <XStack position="absolute" bottom={40} left="50%" x="-50%" display="flex" columnGap={8}>
        <MotionBox
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          width={4} height={32} borderRadius="var(--radius-full)" opacity={0.7} backgroundImage="linear-gradient(to bottom, var(--neutral-500), var(--neutral-600))"
        />
        <MotionBox
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          width={4} height={24} borderRadius="var(--radius-full)" opacity={0.4} backgroundImage="linear-gradient(to bottom, var(--neutral-500), var(--neutral-600))"
        />
        <MotionBox
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.4,
            repeat: Infinity,
            repeatType: "loop",
          }}
          width={4} height={16} borderRadius="var(--radius-full)" opacity={0.2} backgroundImage="linear-gradient(to bottom, var(--neutral-500), var(--neutral-600))"
        />
      </XStack>
    </XStack>
  );
};

export default TeamHero;