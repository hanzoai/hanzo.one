import { Box, Button, Grid, H2, H3, MotionBox, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Github, FileText, Server } from "lucide-react";

const CallToAction = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Start & Grow with Hanzo Balancer</H2>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={64} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            textAlign="center"
          >
            <Button 
              size="lg" 
              variant="outline"
              width="100%" gap={8} borderColor="var(--neutral-600)" color="var(--white)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.2)" }}
            >
              <Github size={20} />
              View on GitHub
            </Button>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            textAlign="center"
          >
            <Button 
              size="lg" 
              variant="outline"
              width="100%" gap={8} borderColor="var(--neutral-600)" color="var(--white)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.2)" }}
            >
              <FileText size={20} />
              Learn more in Docs
            </Button>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            textAlign="center"
          >
            <Button 
              size="lg" 
              variant="outline"
              width="100%" gap={8} borderColor="var(--neutral-600)" color="var(--white)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.2)" }}
            >
              <Server size={20} />
              Get Commercial Support
            </Button>
          </MotionBox>
        </Grid>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          maxWidth="28rem" marginHorizontal="auto" textAlign="center"
        >
          <Box marginBottom={24}>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>Subscribe to our newsletter</H3>
            <XStack display="flex" gap={8}>
              <Box display="inline-block" minHeight={44} 
                type="email" 
                placeholder="Enter your email" 
                render="input" width="100%" paddingHorizontal={16} paddingVertical={8} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-md)" borderWidth={1} borderColor="var(--neutral-700)" focusStyle={{ outlineStyle: "solid", outlineWidth: 2, outlineColor: "var(--neutral-500)" }}
              />
              <Button backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
                Subscribe
              </Button>
            </XStack>
            <Box marginTop={8} textAlign="left">
              <Text render="label" display="inline-flex" alignItems="center">
                <Box display="inline-block" minHeight={44} type="checkbox" render="input" borderRadius="var(--radius)" backgroundColor="var(--neutral-800)" borderColor="var(--neutral-700)" color="var(--neutral-600)" />
                <Text marginLeft={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
                  I agree to receive communications from Hanzo
                </Text>
              </Text>
            </Box>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default CallToAction;
