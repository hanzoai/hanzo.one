import { Anchor, Box, Grid, H2, H3, H4, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, CheckCircle } from "lucide-react";

const certifications = [
  { name: "SOC 2 Type II", details: "Certified for organizational controls and security." },
  { name: "GDPR compliance", details: "Fully compliant with European data protection regulations." },
  { name: "ISO 27001 certified", details: "International standard for information security management." },
  { name: "HIPAA compliant", details: "Compliant with healthcare data protection requirements." }
];

const SecurityFeatures = [
  "End-to-end encryption",
  "Data residency controls",
  "Custom data retention policies",
  "Role-based access control",
  "Regular security audits",
  "Privacy-focused data collection",
  "Automated compliance monitoring"
];

const Security = () => {
  return (
    <Box render="section" paddingVertical={128} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), transparent, transparent)"></Box>
      
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <XStack display="inline-flex" alignItems="center" justifyContent="center" marginBottom={16}>
            <ShieldCheck size={40} color="var(--foreground)" />
          </XStack>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>Enterprise-Grade Security & Compliance</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Secure by design, ensuring your data meets stringent compliance standards.
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={64} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            $lg={{ gridColumn: "span 1 / span 1" }}
          >
            <Box borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} height="100%" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), rgb(255 255 255 / 0.08))">
              <XStack display="flex" justifyContent="center" marginBottom={24}>
                <Box padding={12} backgroundColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-full)" borderWidth={1} borderColor="var(--border-strong)">
                  <Lock size={32} color="var(--foreground)" />
                </Box>
              </XStack>
              
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" textAlign="center" marginBottom={24}>Security Features</H3>
              
              <Box render="ul" rowGap={12}>
                {SecurityFeatures.map((feature, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    flexDirection="row" display="flex" alignItems="center"
                  >
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><CheckCircle size={20} color="var(--foreground)" /></Box>
                    <Text color="var(--neutral-300)">{feature}</Text>
                  </MotionBox>
                ))}
              </Box>
            </Box>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            $lg={{ gridColumn: "span 2 / span 2" }}
          >
            <Box borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} height="100%" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), rgb(255 255 255 / 0.08))">
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={24}>Compliance Certifications</H3>
              
              <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                {certifications.map((cert, index) => (
                  <MotionBox
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" padding={20} borderWidth={1} borderColor="var(--neutral-700)"
                  >
                    <XStack display="flex" alignItems="center">
                      <Box marginRight={12} padding={8} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)">
                        <ShieldCheck size={24} color="var(--foreground)" />
                      </Box>
                      <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500">{cert.name}</H4>
                    </XStack>
                    <Paragraph marginTop={12} color="var(--neutral-400)">{cert.details}</Paragraph>
                  </MotionBox>
                ))}
              </Grid>
              
              <Box marginTop={32} backgroundColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={20} borderWidth={1} borderColor="var(--border-strong)">
                <XStack display="flex">
                  <Box marginRight={16} padding={8} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)">
                    <Box display="inline-block" render="svg" height={24} width={24} color="var(--foreground)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </Box>
                  </Box>
                  <div>
                    <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" marginBottom={8}>Data Privacy Commitment</H4>
                    <Paragraph color="var(--neutral-400)">
                      We believe privacy is a fundamental right. Hanzo Analytics is designed with privacy-first principles and gives you full control over your data collection practices.
                    </Paragraph>
                    <Anchor tap href="#privacy-policy" display="inline-block" marginTop={12} color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>
                      Read our privacy policy →
                    </Anchor>
                  </div>
                </XStack>
              </Box>
            </Box>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default Security;
