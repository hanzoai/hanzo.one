import { Box, Grid, H2, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Receipt, AlertTriangle } from "lucide-react";

const Compliance = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          marginBottom={64} textAlign="center"
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Automatic Global Tax Compliance</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Focus on your business while Hanzo handles the complexity of global tax regulations and compliance.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} borderRadius="var(--radius-lg)"
          >
            <Box backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)" width="fit-content" marginBottom={16}>
              <ShieldCheck size={24} color="var(--foreground)" />
            </Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>Automated Tax Management</H3>
            <Paragraph color="var(--neutral-400)" marginBottom={16}>
              Automatically handle VAT, GST, and regional taxes (including sales tax).
            </Paragraph>
            <Box render="ul" rowGap={8} color="var(--neutral-400)">
              <XStack render="li" display="flex" alignItems="flex-start" gap={8}>
                <Text color="var(--foreground)">•</Text>
                <span>Real-time tax rate calculation</span>
              </XStack>
              <XStack render="li" display="flex" alignItems="flex-start" gap={8}>
                <Text color="var(--foreground)">•</Text>
                <span>Tax exemption handling</span>
              </XStack>
              <XStack render="li" display="flex" alignItems="flex-start" gap={8}>
                <Text color="var(--foreground)">•</Text>
                <span>Automated tax reporting</span>
              </XStack>
            </Box>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} borderRadius="var(--radius-lg)"
          >
            <Box backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)" width="fit-content" marginBottom={16}>
              <Receipt size={24} color="var(--foreground)" />
            </Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>Merchant of Record</H3>
            <Paragraph color="var(--neutral-400)" marginBottom={16}>
              Hanzo takes liability for taxes and compliance, acting as your merchant of record.
            </Paragraph>
            <Box render="ul" rowGap={8} color="var(--neutral-400)">
              <XStack render="li" display="flex" alignItems="flex-start" gap={8}>
                <Text color="var(--foreground)">•</Text>
                <span>Simplified global expansion</span>
              </XStack>
              <XStack render="li" display="flex" alignItems="flex-start" gap={8}>
                <Text color="var(--foreground)">•</Text>
                <span>Legal entity management</span>
              </XStack>
              <XStack render="li" display="flex" alignItems="flex-start" gap={8}>
                <Text color="var(--foreground)">•</Text>
                <span>Compliant invoicing worldwide</span>
              </XStack>
            </Box>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} borderRadius="var(--radius-lg)"
          >
            <Box backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)" width="fit-content" marginBottom={16}>
              <AlertTriangle size={24} color="var(--foreground)" />
            </Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>Fraud Protection</H3>
            <Paragraph color="var(--neutral-400)" marginBottom={16}>
              Automatic fraud detection and prevention built-in to protect your business.
            </Paragraph>
            <Box render="ul" rowGap={8} color="var(--neutral-400)">
              <XStack render="li" display="flex" alignItems="flex-start" gap={8}>
                <Text color="var(--foreground)">•</Text>
                <span>Machine learning fraud detection</span>
              </XStack>
              <XStack render="li" display="flex" alignItems="flex-start" gap={8}>
                <Text color="var(--foreground)">•</Text>
                <span>Adaptive risk rules</span>
              </XStack>
              <XStack render="li" display="flex" alignItems="flex-start" gap={8}>
                <Text color="var(--foreground)">•</Text>
                <span>Chargeback protection</span>
              </XStack>
            </Box>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default Compliance;
