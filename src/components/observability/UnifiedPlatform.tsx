import { Box, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Clock, Users, LineChart } from "lucide-react";

const UnifiedPlatform = () => {
  return (
    <Box render="section" paddingVertical={128} paddingHorizontal={16} position="relative" backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.1), transparent, transparent)"></Box>
      
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          maxWidth="var(--container-prose)" marginHorizontal="auto" textAlign="center" marginBottom={80}
        >
          <XStack display="inline-flex" alignItems="center" justifyContent="center" marginBottom={24} backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)">
            <Cpu size={28} color="var(--foreground)" />
          </XStack>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>Unified Intelligence Platform</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)">
            Bring all your AI observability needs under one seamless platform. Hanzo integrates monitoring, analytics, debugging, and evaluation into a single powerful toolkit.
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {[
            {
              icon: <Clock size={28} color="var(--foreground)" />,
              title: "Real-time System Tracing",
              description: "Capture and analyze every event in your AI system with microsecond precision."
            },
            {
              icon: <Users size={28} color="var(--foreground)" />,
              title: "Cross-team Collaboration",
              description: "Unite your engineering, data science, and product teams with role-based views and controls."
            },
            {
              icon: <LineChart size={28} color="var(--foreground)" />,
              title: "Intelligent Event Analytics",
              description: "Reveal patterns and insights that would otherwise remain hidden in your operational data."
            }
          ].map((feature, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
              borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), rgb(0 0 0 / 0.8))" hoverStyle={{ borderColor: "var(--neutral-700)" }}
            >
              <Box backgroundColor="rgb(255 255 255 / 0.2)" padding={12} borderRadius="var(--radius-lg)" width="fit-content" marginBottom={20}>
                {feature.icon}
              </Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={12}>{feature.title}</H3>
              <Paragraph color="var(--neutral-400)">{feature.description}</Paragraph>
            </MotionBox>
          ))}
        </Grid>
        
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          marginTop={80} position="relative" height={320} overflow="hidden" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)"
        >
          <Box position="absolute" top={0} right={0} bottom={0} left={0} zIndex={10} backgroundImage="linear-gradient(to bottom, transparent, var(--pure-black))"></Box>
          
          <XStack position="absolute" top={0} right={0} bottom={0} left={0} display="flex" alignItems="center" justifyContent="center">
            <Grid display="grid" gridTemplateColumns="repeat(4, minmax(0, 1fr))" gap={16} width="100%" padding={32}>
              {Array.from({ length: 12 }).map((_, idx) => (
                <Box 
                  key={idx} 
                  height={80} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--border-strong)" opacity={0.6} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"
                  style={{ 
                    opacity: Math.random() * 0.5 + 0.3,
                    transform: `scale(${Math.random() * 0.3 + 0.8})` 
                  }}
                />
              ))}
            </Grid>
          </XStack>
          
          <XStack position="absolute" top={0} right={0} bottom={0} left={0} display="flex" alignItems="center" justifyContent="center" zIndex={20}>
            <Box textAlign="center">
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16} $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>Everything in One Place</H3>
              <Paragraph color="var(--neutral-300)" maxWidth="28rem">
                End fragmentation in your AI operations with Hanzo's all-in-one observability platform
              </Paragraph>
            </Box>
          </XStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default UnifiedPlatform;
