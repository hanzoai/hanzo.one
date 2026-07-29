import { Box, Grid, H2, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";

const securityFeatures = [
  "SOC 2 Type II", 
  "ISO 27001 certified", 
  "GDPR compliant", 
  "HIPAA compliant", 
  "End-to-end encryption", 
  "Secure data residency options", 
  "Role-based access control", 
  "Audit logs"
];

const Security = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.1), transparent, transparent)" opacity={0.7}></Box>
      
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={48} alignItems="center" $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <XStack display="inline-flex" alignItems="center" justifyContent="center" marginBottom={24} backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)">
              <Shield size={28} color="var(--foreground)" />
            </XStack>
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Enterprise-Grade Security & Compliance</H2>
            <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-300)" marginBottom={32}>
              Hanzo Observability is engineered with enterprise-grade security, compliance, and privacy at its foundation.
            </Paragraph>
            
            <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={16}>
              {securityFeatures.map((feature, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  flexDirection="row" display="flex" alignItems="center"
                >
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><CheckCircle size={20} color="var(--foreground)" /></Box>
                  <Text color="var(--neutral-300)">{feature}</Text>
                </MotionBox>
              ))}
            </Grid>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            position="relative"
          >
            <Box position="absolute" top={-2} right={-2} bottom={-2} left={-2} borderRadius="var(--radius-xl)" filter="blur(8px)" opacity={0.75} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"></Box>
            <Box position="relative" backgroundColor="var(--black)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={32}>
              <Box rowGap={24}>
                <XStack display="flex" alignItems="center">
                  <Box padding={8} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-md)" marginRight={16}>
                    <Shield size={24} color="var(--foreground)" />
                  </Box>
                  <div>
                    <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600">Data Encryption</H3>
                    <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">All data encrypted at rest and in transit</Paragraph>
                  </div>
                </XStack>
                
                <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" padding={16}>
                  <Box marginBottom={12} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Security Certifications</Box>
                  <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={12}>
                    {["SOC 2", "ISO 27001", "GDPR", "HIPAA"].map((cert, idx) => (
                      <XStack key={idx} backgroundColor="var(--surface-card-emphasis)" padding={8} borderRadius="var(--radius)" display="flex" alignItems="center">
                        <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><CheckCircle size={16} color="var(--foreground)" /></Box>
                        <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{cert}</Text>
                      </XStack>
                    ))}
                  </Grid>
                </Box>
                
                <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" padding={16}>
                  <Box marginBottom={12} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Data Privacy Controls</Box>
                  <Box rowGap={12}>
                    <XStack display="flex" alignItems="center" justifyContent="space-between">
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Data Retention</Text>
                      <Box width={96} height={8} backgroundColor="var(--neutral-700)" borderRadius="var(--radius-full)" overflow="hidden">
                        <Box width="83.333333%" height="100%" backgroundColor="var(--neutral-500)"></Box>
                      </Box>
                    </XStack>
                    <XStack display="flex" alignItems="center" justifyContent="space-between">
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Access Controls</Text>
                      <Box width={96} height={8} backgroundColor="var(--neutral-700)" borderRadius="var(--radius-full)" overflow="hidden">
                        <Box width="100%" height="100%" backgroundColor="var(--neutral-500)"></Box>
                      </Box>
                    </XStack>
                    <XStack display="flex" alignItems="center" justifyContent="space-between">
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Audit Logging</Text>
                      <Box width={96} height={8} backgroundColor="var(--neutral-700)" borderRadius="var(--radius-full)" overflow="hidden">
                        <Box width="83.333333%" height="100%" backgroundColor="var(--neutral-500)"></Box>
                      </Box>
                    </XStack>
                  </Box>
                </Box>
              </Box>
            </Box>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default Security;
