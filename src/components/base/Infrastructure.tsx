import { Box, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Globe, Zap, Shield } from "lucide-react";

const Infrastructure = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--surface-card-emphasis)" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={16}>Global Infrastructure</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Serverless architecture that scales automatically with your application needs
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" padding={24} textAlign="center"
          >
            <XStack display="inline-flex" alignItems="center" justifyContent="center" height={48} width={48} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" color="var(--foreground)" marginBottom={20} marginHorizontal="auto">
              <Globe size={24} />
            </XStack>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={12}>Global Distribution</H3>
            <Paragraph color="var(--neutral-300)">
              Multi-region deployments ensuring low latency and high availability for users worldwide.
            </Paragraph>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" padding={24} textAlign="center"
          >
            <XStack display="inline-flex" alignItems="center" justifyContent="center" height={48} width={48} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" color="var(--foreground)" marginBottom={20} marginHorizontal="auto">
              <Zap size={24} />
            </XStack>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={12}>Automatic Scaling</H3>
            <Paragraph color="var(--neutral-300)">
              Serverless infrastructure that scales resources up and down based on demand without manual intervention.
            </Paragraph>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" padding={24} textAlign="center"
          >
            <XStack display="inline-flex" alignItems="center" justifyContent="center" height={48} width={48} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" color="var(--foreground)" marginBottom={20} marginHorizontal="auto">
              <Shield size={24} />
            </XStack>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={12}>High Redundancy</H3>
            <Paragraph color="var(--neutral-300)">
              Fault-tolerant architecture with redundancy and failover capabilities to ensure 99.99% uptime.
            </Paragraph>
          </MotionBox>
        </Grid>
        
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          marginTop={64} position="relative"
        >
          <Box borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-xl)" padding={24} overflow="hidden" position="relative">
            <Grid display="grid" gridTemplateColumns="repeat(5, minmax(0, 1fr))" gap={8} marginBottom={24} $md={{ gap: 12 }}>
              {Array.from({ length: 15 }).map((_, i) => (
                <MotionBox
                  key={i}
                  animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                ></MotionBox>
              ))}
            </Grid>
            
            <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={16}>
              {["North America", "Europe", "Asia", "Australia", "South America"].map((region, i) => (
                <Box key={i} paddingHorizontal={12} paddingVertical={4} backgroundColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-full)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                  {region}
                </Box>
              ))}
            </XStack>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Infrastructure;
