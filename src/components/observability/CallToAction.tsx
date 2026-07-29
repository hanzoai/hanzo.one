import { Box, Button, Grid, H2, H3, MotionBox, Paragraph, Text, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <Box render="section" paddingVertical={128} paddingHorizontal={16} position="relative" overflow="hidden" backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), transparent, transparent)" opacity={0.7}></Box>
      
      <Box maxWidth="64rem" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center"
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={32} backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to right, var(--foreground), var(--neutral-400))" $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            Ready to see the difference clarity makes?
          </H2>
          
          <YStack display="flex" flexDirection="column" gap={24} justifyContent="center" marginBottom={48} $sm={{ flexDirection: "row" }}>
            <MotionBox
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button size="lg" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32} paddingVertical={24} borderStyle="none" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--neutral-500))" }}>
                Get Started
              </Button>
            </MotionBox>
            
            <MotionBox
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button size="lg" variant="outline" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32} paddingVertical={24} borderColor="var(--neutral-700)">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><FileText size={20} /></Box> View Docs
              </Button>
            </MotionBox>
            
            <MotionBox
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button size="lg" variant="outline" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32} paddingVertical={24} borderColor="var(--neutral-700)">
                <Text display="flex" alignItems="center">
                  Request a Demo <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
                </Text>
              </Button>
            </MotionBox>
          </YStack>
          
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} maxWidth="var(--container-prose)" marginHorizontal="auto" $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {[
              {
                title: "Self-Hosted",
                description: "Deploy on your own infrastructure with full control."
              },
              {
                title: "Cloud Managed",
                description: "Let us handle the operations while you focus on building."
              },
              {
                title: "Enterprise",
                description: "Custom solutions for high-scale, mission-critical deployments."
              }
            ].map((option, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                backgroundColor="rgb(255 255 255 / 0.2)" padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)"
              >
                <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="700" marginBottom={8}>{option.title}</H3>
                <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{option.description}</Paragraph>
              </MotionBox>
            ))}
          </Grid>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            marginTop={48} textAlign="center" color="var(--neutral-500)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)"
          >
            Free 14-day trial, no credit card required.
          </MotionBox>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default CallToAction;
