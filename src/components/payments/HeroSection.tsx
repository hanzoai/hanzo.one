import { Box, Button, H1, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Lock, Globe, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <Box render="section" paddingTop={128} paddingBottom={80} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={32}
        >
          <Text display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" marginBottom={16}>
            Integrated Global Payments Platform
          </Text>
          <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" backgroundClip="text" color="transparent" marginBottom={24} backgroundImage="linear-gradient(to right, var(--foreground), var(--neutral-400))" $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
            Hanzo Payments
          </H1>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={32} $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>
            Effortlessly accept payments, manage subscriptions, and scale globally.
          </Paragraph>
          <Paragraph color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={40}>
            Hanzo Payments is a unified financial infrastructure that simplifies and automates payments, 
            subscriptions, and global financial compliance. From innovative startups to enterprise giants, 
            Hanzo Payments delivers customizable checkout experiences, seamless integrations, and powerful 
            analytics to drive revenue growth.
          </Paragraph>
          <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={16}>
            <Button 
              size="lg" 
              backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-700), var(--neutral-700))" }}
            >
              Get Started Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              borderColor="var(--neutral-600)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
            >
              Explore APIs
            </Button>
          </XStack>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} marginTop={64} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}
        >
          {[
            { icon: <CreditCard size={24} color="var(--foreground)" />, title: "200+ Currencies", text: "Accept payments in local currencies worldwide" },
            { icon: <Lock size={24} color="var(--foreground)" />, title: "Automatic Compliance", text: "Global tax and regulatory compliance built-in" },
            { icon: <Globe size={24} color="var(--foreground)" />, title: "Global Reach", text: "Scale your business to new markets instantly" },
            { icon: <Zap size={24} color="var(--foreground)" />, title: "Instant Setup", text: "Go live with payments in minutes" }
          ].map((item, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              backgroundColor="var(--surface-card-emphasis)" padding={24} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-800)"
            >
              <Box backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)" width="fit-content" marginBottom={16}>
                {item.icon}
              </Box>
              <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={8}>{item.title}</H3>
              <Paragraph color="var(--neutral-400)">{item.text}</Paragraph>
            </MotionBox>
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
};

export default HeroSection;
