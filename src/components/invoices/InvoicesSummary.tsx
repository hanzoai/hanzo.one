import { Box, Button, Grid, H3, MotionBox, Paragraph, Text, XStack, createAnimationVariant, curves } from '@/gui'

import React from "react";
import { CreditCard, Receipt, Clock, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const cardAnimation = createAnimationVariant("fadeInBlur", {
  duration: 0.4,
  curve: curves.snappy,
  distance: 15
});

const InvoicesSummary = () => {
  return (
    <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
      <MotionBox 
        variants={cardAnimation}
        padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="rgb(255 255 255 / 0.2)"
      >
        <XStack display="flex" alignItems="center" gap={12} marginBottom={16}>
          <CreditCard size={20} color="var(--neutral-400)" />
          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500">Active Subscription</H3>
        </XStack>
        
        <Box marginBottom={24}>
          <Box fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={4}>Trial Plan</Box>
          <Paragraph color="var(--neutral-400)">Free credit grant of $5.00</Paragraph>
        </Box>
        
        <Button 
          backgroundColor="var(--neutral-600)" color="var(--white)" width="100%" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
        >
          View Plan Details
        </Button>
      </MotionBox>
      
      <MotionBox 
        variants={cardAnimation}
        padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="rgb(255 255 255 / 0.2)"
      >
        <XStack display="flex" alignItems="center" gap={12} marginBottom={16}>
          <Receipt size={20} color="var(--neutral-400)" />
          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500">Payment Summary</H3>
        </XStack>
        
        <Box rowGap={8} marginBottom={16}>
          <XStack display="flex" justifyContent="space-between">
            <Text color="var(--neutral-400)">Current Usage</Text>
            <span>$0.04</span>
          </XStack>
          <XStack display="flex" justifyContent="space-between">
            <Text color="var(--neutral-400)">Next Invoice</Text>
            <span>$0.00</span>
          </XStack>
          <XStack display="flex" justifyContent="space-between" fontWeight="500">
            <span>Credits Available</span>
            <span>$5.00</span>
          </XStack>
        </Box>
        
        <Button backgroundColor="var(--white)" color="var(--pure-black)" width="100%" hoverStyle={{ backgroundColor: "var(--neutral-200)" }}>
          Purchase Credits
        </Button>
      </MotionBox>
      
      <MotionBox 
        variants={cardAnimation}
        padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="rgb(255 255 255 / 0.2)"
      >
        <XStack display="flex" alignItems="center" gap={12} marginBottom={16}>
          <Clock size={20} color="var(--neutral-400)" />
          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500">Upcoming Charges</H3>
        </XStack>
        
        <XStack backgroundColor="rgb(0 0 0 / 0.3)" padding={16} borderRadius="var(--radius-lg)" display="flex" alignItems="center" gap={12} marginBottom={24}>
          <AlertCircle size={20} color="var(--foreground)" />
          <Paragraph color="var(--neutral-300)">No upcoming charges. You're on a trial plan.</Paragraph>
        </XStack>
        
        <Button 
          variant="outline" 
          borderColor="var(--neutral-700)" width="100%"
        >
          View Pricing
        </Button>
      </MotionBox>
    </Grid>
  );
};

export default InvoicesSummary;
