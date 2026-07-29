import { Box, Button, Grid, H2, H3, H4, Link, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Server } from "lucide-react";


const Compliance = () => {
  return (
    <Box render="section" paddingVertical={48} paddingHorizontal={16} backgroundColor="var(--surface-card-emphasis)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          display="flex" flexDirection="column" rowGap={48}
        >
          <YStack display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" $md={{ flexDirection: "row" }}>
            <Box marginBottom={32} $md={{ marginBottom: 0 }}>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Shield size={24} color="var(--foreground)" /></Box>
                <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--white)">Secure & Compliant</H2>
              </XStack>
              <XStack marginTop={16} display="flex" flexWrap="wrap" gap={16}>
                <XStack display="flex" alignItems="center" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-md)" paddingHorizontal={12} paddingVertical={4}>
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Lock size={16} color="var(--foreground)" /></Box>
                  <Text color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">SOC2 Type 2 Certified</Text>
                </XStack>
                <XStack display="flex" alignItems="center" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-md)" paddingHorizontal={12} paddingVertical={4}>
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Lock size={16} color="var(--foreground)" /></Box>
                  <Text color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">HIPAA Compliant</Text>
                </XStack>
              </XStack>
            </Box>
            
            <XStack display="flex" alignItems="center">
              <Box height={48} width={48} marginRight={16}>
                <Box display="inline-block" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/hanzo-ai-icon.png" alt="Hanzo Base Logo" render="img" width="100%" height="100%" objectFit="contain" />
              </Box>
              <div>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" color="var(--white)">Hanzo Base</H3>
                <Paragraph color="var(--neutral-400)">Secure. Scalable. Open Source.</Paragraph>
              </div>
            </XStack>
          </YStack>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            borderRadius="var(--radius-xl)" padding={24} borderWidth={1} borderColor="var(--border-strong)" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"
          >
            <XStack display="flex" alignItems="center" marginBottom={16}>
              <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Server size={24} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)">Global Data Regions</H3>
            </XStack>
            
            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} marginTop={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              <Box backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" padding={16}>
                <H4 fontWeight="500" color="var(--foreground)" marginBottom={8}>United States (US)</H4>
                <Paragraph color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={4}>MCI - Kansas City</Paragraph>
                <Paragraph color="var(--neutral-400)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">Hanzo Cloud region: us-central-1</Paragraph>
              </Box>
              
              <Box backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" padding={16}>
                <H4 fontWeight="500" color="var(--foreground)" marginBottom={8}>Canada (CA)</H4>
                <Paragraph color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={4}>YVR - Vancouver</Paragraph>
                <Paragraph color="var(--neutral-400)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">Hanzo Cloud region: ca-west-1</Paragraph>
              </Box>
              
              <Box backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" padding={16}>
                <H4 fontWeight="500" color="var(--foreground)" marginBottom={8}>European Union (EU)</H4>
                <Paragraph color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={4}>BCN - Barcelona</Paragraph>
                <Paragraph color="var(--neutral-400)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">Hanzo Cloud region: eu-west-1</Paragraph>
              </Box>
            </Grid>
            
            <Box marginTop={24} textAlign="center">
              <Button variant="outline" backgroundColor="var(--surface-card-emphasis)" borderColor="var(--border-strong)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
                <Link tap to="/security">Learn More About Our Security</Link>
              </Button>
            </Box>
          </MotionBox>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Compliance;
