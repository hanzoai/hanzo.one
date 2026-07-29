import { Box, Grid, H3, H4, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { LineChart } from "lucide-react";

const AIAnalysisDemo = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      borderRadius="var(--radius-xl)" padding={24} borderWidth={1} borderColor="var(--neutral-800)" boxShadow="0 20px 25px -5px rgb(0 0 0 / .4)" overflow="hidden" position="relative" backgroundImage="linear-gradient(to right, var(--neutral-900), rgb(255 255 255 / 0.08))"
    >
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(rgb(255 255 255 / 0.02) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.02) 1px, transparent 1px)" backgroundSize="32px 32px" backgroundColor="size:24px 24px"></Box>
      
      <Box position="relative" zIndex={10}>
        <XStack display="flex" alignItems="center" marginBottom={24}>
          <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><LineChart size={24} color="var(--foreground)" /></Box>
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700">AI Analysis in Action</H3>
        </XStack>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <Box gridColumn="span 2 / span 2">
            <Box backgroundColor="rgb(0 0 0 / 0.5)" borderRadius="var(--radius-lg)" padding={20} borderWidth={1} borderColor="var(--neutral-800)">
              <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" marginBottom={16}>Traffic Anomaly Detection</H4>
              <Box height={240} position="relative">
                {/* Base line chart */}
                <Box display="inline-block" render="svg" width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
                  <motion.path
                    d="M0,80 C25,70 50,65 75,60 C100,55 125,50 150,55 C175,60 200,80 225,50 C250,20 275,35 300,30"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  />
                  
                  {/* Anomaly area */}
                  <motion.path
                    d="M200,80 C206,65 212,40 218,20 C224,30 230,45 236,50"
                    fill="none"
                    stroke="#FF5733"
                    strokeWidth="3"
                    strokeDasharray="2,2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1.8 }}
                  />
                  
                  {/* Anomaly circle */}
                  <motion.circle
                    cx="218"
                    cy="20"
                    r="5"
                    fill="#FF5733"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 2 }}
                  />
                </Box>
                
                {/* Anomaly detection popup */}
                <MotionBox
                  position="absolute" top={16} right={32} backgroundColor="var(--surface-overlay)" color="var(--white)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" borderRadius="var(--radius)" paddingHorizontal={12} paddingVertical={8} borderWidth={1} borderColor="var(--neutral-700)"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 2.2 }}
                >
                  <Box fontWeight="700" marginBottom={4}>Anomaly Detected</Box>
                  <div>Unusual traffic spike</div>
                  <div>Confidence: 98.7%</div>
                </MotionBox>
              </Box>
            </Box>
          </Box>
          
          <Box rowGap={16}>
            <Box backgroundColor="rgb(0 0 0 / 0.5)" borderRadius="var(--radius-lg)" padding={20} borderWidth={1} borderColor="var(--neutral-800)">
              <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" marginBottom={12}>AI Insights</H4>
              <MotionBox
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 2.4 }}
                rowGap={12}
              >
                <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                  <Box fontWeight="500" color="var(--foreground)">Traffic Anomaly</Box>
                  <Box color="var(--neutral-400)">Unusual spike detected at 14:32 UTC</Box>
                </Box>
                <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                  <Box fontWeight="500" color="var(--foreground)">Conversion Opportunity</Box>
                  <Box color="var(--neutral-400)">Checkout abandonment 23% higher on mobile</Box>
                </Box>
                <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                  <Box fontWeight="500" color="var(--foreground)">Performance Alert</Box>
                  <Box color="var(--neutral-400)">API latency increased by 150ms</Box>
                </Box>
              </MotionBox>
            </Box>
            
            <MotionBox
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.6 }}
              backgroundColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={20} borderWidth={1} borderColor="var(--border-strong)"
            >
              <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" marginBottom={8}>AI Recommendation</H4>
              <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">
                Based on the traffic pattern analysis, we recommend scaling your infrastructure in the US-West region for the next 3 hours.
              </Paragraph>
              <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} render="button" marginTop={12} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" backgroundColor="var(--neutral-700)" color="var(--white)" paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius)" hoverStyle={{ backgroundColor: "var(--neutral-600)" }}>
                Apply Recommendation
              </Box>
            </MotionBox>
          </Box>
        </Grid>
      </Box>
    </MotionBox>
  );
};

export default AIAnalysisDemo;
