import { Box, Grid, H2, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { 
  Eye, 
  History, 
  GitCommit, 
  Shield, 
  Lock, 
  Bookmark,
  CheckCircle
} from "lucide-react";

const AuditFeatures = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <XStack display="inline-flex" padding={8} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" marginBottom={16}>
            <History size={24} />
          </XStack>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Enterprise-Grade Audit & Security
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Full transparency and accountability with comprehensive audit logs 
            and enterprise security features that meet the most stringent compliance requirements.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={64} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            position="relative" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" backgroundColor="rgb(0 0 0 / 0.5)" overflow="hidden" padding={24}
          >
            <Box position="absolute" top={0} right={0} height={80} width={80} backgroundColor="rgb(255 255 255 / 0.1)" borderBottomLeftRadius="var(--radius-full)"></Box>
            <XStack backgroundColor="rgb(255 255 255 / 0.2)" padding={12} borderRadius="var(--radius-lg)" display="inline-flex" marginBottom={16}>
              <Eye size={32} color="var(--foreground)" />
            </XStack>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>Real-Time Monitoring</H3>
            <Paragraph color="var(--neutral-400)" marginBottom={16}>
              Watch your AI agents' work in real-time through a secure virtual desktop environment. 
              Every action is visible and recordable.
            </Paragraph>
            <Box render="ul" rowGap={8}>
              <XStack render="li" display="flex" alignItems="flex-start">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8} marginTop={2}><CheckCircle size={20} color="var(--foreground)" /></Box>
                <Text color="var(--neutral-300)">Live screen sharing capability</Text>
              </XStack>
              <XStack render="li" display="flex" alignItems="flex-start">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8} marginTop={2}><CheckCircle size={20} color="var(--foreground)" /></Box>
                <Text color="var(--neutral-300)">Activity dashboards and alerts</Text>
              </XStack>
              <XStack render="li" display="flex" alignItems="flex-start">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8} marginTop={2}><CheckCircle size={20} color="var(--foreground)" /></Box>
                <Text color="var(--neutral-300)">Performance metrics tracking</Text>
              </XStack>
            </Box>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            position="relative" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" backgroundColor="rgb(0 0 0 / 0.5)" overflow="hidden" padding={24}
          >
            <Box position="absolute" top={0} right={0} height={80} width={80} backgroundColor="rgb(255 255 255 / 0.1)" borderBottomLeftRadius="var(--radius-full)"></Box>
            <XStack backgroundColor="rgb(255 255 255 / 0.2)" padding={12} borderRadius="var(--radius-lg)" display="inline-flex" marginBottom={16}>
              <GitCommit size={32} color="var(--foreground)" />
            </XStack>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>Comprehensive Audit Logs</H3>
            <Paragraph color="var(--neutral-400)" marginBottom={16}>
              Every action taken by AI agents is meticulously logged and stored securely. 
              Search, filter, and export logs for compliance reporting.
            </Paragraph>
            <Box render="ul" rowGap={8}>
              <XStack render="li" display="flex" alignItems="flex-start">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8} marginTop={2}><CheckCircle size={20} color="var(--foreground)" /></Box>
                <Text color="var(--neutral-300)">Tamper-proof logging system</Text>
              </XStack>
              <XStack render="li" display="flex" alignItems="flex-start">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8} marginTop={2}><CheckCircle size={20} color="var(--foreground)" /></Box>
                <Text color="var(--neutral-300)">Full record of all decisions and actions</Text>
              </XStack>
              <XStack render="li" display="flex" alignItems="flex-start">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8} marginTop={2}><CheckCircle size={20} color="var(--foreground)" /></Box>
                <Text color="var(--neutral-300)">Advanced search and filtering options</Text>
              </XStack>
            </Box>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            position="relative" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" backgroundColor="rgb(0 0 0 / 0.5)" overflow="hidden" padding={24}
          >
            <Box position="absolute" top={0} right={0} height={80} width={80} backgroundColor="rgb(255 255 255 / 0.1)" borderBottomLeftRadius="var(--radius-full)"></Box>
            <XStack backgroundColor="rgb(255 255 255 / 0.2)" padding={12} borderRadius="var(--radius-lg)" display="inline-flex" marginBottom={16}>
              <Shield size={32} color="var(--foreground)" />
            </XStack>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>Enterprise Security</H3>
            <Paragraph color="var(--neutral-400)" marginBottom={16}>
              Military-grade encryption, role-based access control, and compliance 
              with industry standards ensure your data remains secure.
            </Paragraph>
            <Box render="ul" rowGap={8}>
              <XStack render="li" display="flex" alignItems="flex-start">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8} marginTop={2}><CheckCircle size={20} color="var(--foreground)" /></Box>
                <Text color="var(--neutral-300)">SOC 2, HIPAA, GDPR, and CCPA compliant</Text>
              </XStack>
              <XStack render="li" display="flex" alignItems="flex-start">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8} marginTop={2}><CheckCircle size={20} color="var(--foreground)" /></Box>
                <Text color="var(--neutral-300)">End-to-end encryption for all data</Text>
              </XStack>
              <XStack render="li" display="flex" alignItems="flex-start">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8} marginTop={2}><CheckCircle size={20} color="var(--foreground)" /></Box>
                <Text color="var(--neutral-300)">Single sign-on (SSO) and SCIM support</Text>
              </XStack>
            </Box>
          </MotionBox>
        </Grid>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={32} textAlign="center"
        >
          <XStack display="flex" justifyContent="center" gap={32} flexWrap="wrap">
            <XStack display="flex" alignItems="center">
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Lock size={24} color="var(--foreground)" /></Box>
              <Text color="var(--neutral-300)">SOC 2 Type II</Text>
            </XStack>
            <XStack display="flex" alignItems="center">
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Lock size={24} color="var(--foreground)" /></Box>
              <Text color="var(--neutral-300)">HIPAA</Text>
            </XStack>
            <XStack display="flex" alignItems="center">
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Lock size={24} color="var(--foreground)" /></Box>
              <Text color="var(--neutral-300)">GDPR</Text>
            </XStack>
            <XStack display="flex" alignItems="center">
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Lock size={24} color="var(--foreground)" /></Box>
              <Text color="var(--neutral-300)">CCPA</Text>
            </XStack>
            <XStack display="flex" alignItems="center">
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Lock size={24} color="var(--foreground)" /></Box>
              <Text color="var(--neutral-300)">ISO 27001</Text>
            </XStack>
            <XStack display="flex" alignItems="center">
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Bookmark size={24} color="var(--foreground)" /></Box>
              <Text color="var(--neutral-300)">99.9% Uptime SLA</Text>
            </XStack>
          </XStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default AuditFeatures;
