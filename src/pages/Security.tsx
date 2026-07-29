import { Anchor, Box, Grid, H2, H3, Helmet, Link, MotionBox, MotionText, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  Lock,
  CheckCircle,
  Server,
  Eye,
  Key,
  FileCheck,
  Globe,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Fingerprint,
  Database,
  Network,
  Clock,
  Users,
  FileText,
  Bug,
} from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const COMPLIANCE_BADGES = [
  { name: "SOC 2 Type II", description: "Annual audit completed" },
  { name: "GDPR", description: "EU data protection" },
  { name: "CCPA", description: "California privacy" },
  { name: "HIPAA", description: "Healthcare ready" },
  { name: "ISO 27001", description: "Information security" },
  { name: "PCI DSS", description: "Payment security" },
];

const SECURITY_FEATURES = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "All data is encrypted at rest with AES-256 and in transit with TLS 1.3. Your data remains protected throughout its lifecycle.",
  },
  {
    icon: Fingerprint,
    title: "Multi-Factor Authentication",
    description:
      "Enforce MFA across your organization with support for TOTP, hardware keys, and biometric authentication.",
  },
  {
    icon: Key,
    title: "API Key Management",
    description:
      "Fine-grained API key permissions with automatic rotation, usage tracking, and instant revocation capabilities.",
  },
  {
    icon: Users,
    title: "Role-Based Access Control",
    description:
      "Granular permissions with predefined roles and custom access policies. Audit trails for all access events.",
  },
  {
    icon: Network,
    title: "Private Networking",
    description:
      "VPC peering, private endpoints, and IP allowlisting. Keep your infrastructure isolated and secure.",
  },
  {
    icon: Database,
    title: "Data Residency",
    description:
      "Choose where your data lives. Deploy to specific regions to meet compliance and sovereignty requirements.",
  },
];

const ENTERPRISE_FEATURES = [
  "Single Sign-On (SAML, OIDC)",
  "Custom security policies",
  "Dedicated security engineer",
  "Priority incident response",
  "Custom data retention",
  "Advanced audit logging",
  "Penetration testing reports",
  "Security questionnaire support",
];

const REGIONS = [
  { name: "United States", code: "MCI - Kansas City", region: "us-central-1" },
  { name: "Canada", code: "YVR - Vancouver", region: "ca-west-1" },
  { name: "European Union", code: "BCN - Barcelona", region: "eu-west-1" },
];

const Security = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Helmet>
        <title>Security - Enterprise-Grade Protection | Hanzo AI</title>
        <meta
          name="description"
          content="SOC 2, HIPAA, GDPR compliant. Enterprise-grade security with end-to-end encryption, MFA, and comprehensive access controls. Your data is protected."
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <Box render="section" position="relative" paddingTop={96} paddingBottom={80} paddingHorizontal={16} overflow="hidden" $md={{ paddingHorizontal: 32 }} $lg={{ paddingHorizontal: 48 }}>
          {/* Background gradient */}
          <Box position="absolute" top={0} right={0} bottom={0} left={0} overflow="hidden" zIndex={0} pointerEvents="none">
            <Box
              position="absolute" top="50%" left="50%" x="-50%" y="-50%" width="800px" height="800px" borderRadius="var(--radius-full)" opacity={0.15}
              style={{
                background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
                filter: "blur(100px)",
              }}
            />
          </Box>

          <Box maxWidth="64rem" marginHorizontal="auto" position="relative" zIndex={10}>
            <Box textAlign="center">
              {/* Badge */}
              <MotionBox
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                flexDirection="row" display="inline-flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={24}
                style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
              >
                <Shield size={14} />
                SOC 2 Type II Certified
              </MotionBox>

              <MotionText
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                fontSize="var(--text-3xl)" lineHeight="1.1" fontWeight="500" letterSpacing="var(--tracking-tight)" marginBottom={24} $sm={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }} $lg={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $xl={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
              >
                <Text color="var(--foreground)">Security without</Text>
                <br />
                <Text color="var(--neutral-400)">compromise.</Text>
              </MotionText>

              <MotionText
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                fontSize="var(--text-base)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" marginBottom={40} maxWidth="var(--container-prose)" marginHorizontal="auto" $lg={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}
              >
                Enterprise-grade security built into every layer. Your data is encrypted,
                access is controlled, and compliance is maintained by default.
              </MotionText>

              {/* CTAs */}
              <MotionBox
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                flexDirection="row" display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" gap={16} marginBottom={48}
              >
                <Link minHeight={44} 
                  to="/contact"
                  paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                  style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                >
                  Talk to Security Team
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
                </Link>
                <Anchor minHeight={44} 
                  href="https://docs.hanzo.ai/security"
                  target="_blank"
                  rel="noreferrer noopener"
                  paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
                >
                  Security Documentation
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ExternalLink size={16} /></Box>
                </Anchor>
              </MotionBox>

              {/* Compliance Badges */}
              <MotionBox
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                flexDirection="row" display="flex" flexWrap="wrap" justifyContent="center" gap={12}
              >
                {COMPLIANCE_BADGES.map((badge) => (
                  <XStack
                    key={badge.name}
                    display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)"
                  >
                    <CheckCircle size={16} color="var(--neutral-500)" />
                    <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)">{badge.name}</Text>
                  </XStack>
                ))}
              </MotionBox>
            </Box>
          </Box>
        </Box>

        {/* Security Features Grid */}
        <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $md={{ paddingHorizontal: 32 }}>
          <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              textAlign="center" marginBottom={64}
            >
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
                Defense in Depth
              </H2>
              <Paragraph color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
                Multiple layers of security controls protect your applications and data
              </Paragraph>
            </MotionBox>

            <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              {SECURITY_FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <MotionBox
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    
                    backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-700)" }}
                  >
                    <XStack
                      width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}
                      style={{ backgroundColor: `${BRAND_COLOR}20` }}
                    >
                      <Icon width={24} height={24} style={{ color: BRAND_COLOR }} />
                    </XStack>
                    <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={8}>
                      {feature.title}
                    </H3>
                    <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{feature.description}</Paragraph>
                  </MotionBox>
                );
              })}
            </Grid>
          </Box>
        </Box>

        {/* Infrastructure Security */}
        <Box render="section" paddingVertical={96} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }}>
          <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
            <Grid display="grid" gap={64} alignItems="flex-start" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <XStack
                  display="inline-flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={24}
                  style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
                >
                  Infrastructure
                </XStack>
                <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
                  Built on secure foundations
                </H2>
                <Paragraph color="var(--neutral-400)" marginBottom={32}>
                  Our infrastructure runs on SOC 2 compliant data centers with 24/7 physical
                  security, redundant power, and isolated network architecture. Every component
                  is designed with security as the primary requirement.
                </Paragraph>

                <Box rowGap={16}>
                  {[
                    { icon: Server, text: "KVM hardware-isolated virtual machines" },
                    { icon: Eye, text: "24/7 security monitoring and alerting" },
                    { icon: Clock, text: "99.99% uptime SLA with automatic failover" },
                    { icon: FileCheck, text: "Automated security patching and updates" },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <XStack key={index} display="flex" alignItems="center" gap={12}>
                        <Icon width={20} height={20} color="var(--neutral-500)" />
                        <Text color="var(--neutral-300)">{item.text}</Text>
                      </XStack>
                    );
                  })}
                </Box>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--neutral-800)" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), rgb(255 255 255 / 0.08))"
              >
                <Box render="span" display="inline-flex" alignItems="center" marginBottom={24}><Globe size={40} color="var(--neutral-400)" /></Box>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" color="var(--foreground)" marginBottom={16}>Global Data Regions</H3>
                <Paragraph color="var(--neutral-400)" marginBottom={24}>
                  Deploy to specific geographic regions to meet data residency requirements
                  and minimize latency.
                </Paragraph>

                <Box rowGap={16}>
                  {REGIONS.map((region) => (
                    <Box
                      key={region.region}
                      backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" padding={16} borderWidth={1} borderColor="var(--neutral-700)"
                    >
                      <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={4}>
                        <Text fontWeight="500" color="var(--foreground)">{region.name}</Text>
                        <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" fontFamily="var(--font-mono)">
                          {region.region}
                        </Text>
                      </XStack>
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{region.code}</Text>
                    </Box>
                  ))}
                </Box>
              </MotionBox>
            </Grid>
          </Box>
        </Box>

        {/* Enterprise Security */}
        <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))" $md={{ paddingHorizontal: 32 }}>
          <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
            <Grid display="grid" gap={64} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                order={2} $lg={{ order: 1 }}
              >
                <Box borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.1), transparent)">
                  <Box render="span" display="inline-flex" alignItems="center" marginBottom={24}><Shield size={40} style={{ color: BRAND_COLOR }} /></Box>
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" color="var(--foreground)" marginBottom={16}>
                    Enterprise Security Program
                  </H3>
                  <Paragraph color="var(--neutral-400)" marginBottom={24}>
                    For organizations with advanced security requirements, our Enterprise plan
                    includes dedicated security support and custom configurations.
                  </Paragraph>

                  <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={12} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                    {ENTERPRISE_FEATURES.map((feature) => (
                      <XStack key={feature} display="flex" alignItems="flex-start" gap={8}>
                        <Box render="span" display="inline-flex" alignItems="center" marginTop={2}><CheckCircle size={16} color="var(--neutral-500)" /></Box>
                        <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">{feature}</Text>
                      </XStack>
                    ))}
                  </Grid>

                  <Link minHeight={44} 
                    to="/contact"
                    marginTop={32} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))"
                    style={{ color: BRAND_COLOR }}
                  >
                    Contact Sales
                    <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
                  </Link>
                </Box>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                order={1} $lg={{ order: 2 }}
              >
                <XStack
                  display="inline-flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={24}
                  style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
                >
                  Enterprise
                </XStack>
                <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
                  Security for the most demanding organizations
                </H2>
                <Paragraph color="var(--neutral-400)" marginBottom={24}>
                  Whether you're in healthcare, finance, or government, Hanzo meets the
                  security and compliance requirements of regulated industries.
                </Paragraph>
                <Paragraph color="var(--neutral-400)">
                  Our security team works directly with enterprise customers to understand
                  their unique requirements and implement appropriate controls.
                </Paragraph>
              </MotionBox>
            </Grid>
          </Box>
        </Box>

        {/* Vulnerability Disclosure */}
        <Box render="section" paddingVertical={96} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }}>
          <Box maxWidth="56rem" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), transparent)"
            >
              <XStack display="flex" alignItems="flex-start" gap={16}>
                <XStack width={48} height={48} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)" display="flex" alignItems="center" justifyContent="center" flexShrink={0}>
                  <Bug size={24} color="var(--neutral-500)" />
                </XStack>
                <div>
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" color="var(--foreground)" marginBottom={8}>
                    Responsible Disclosure
                  </H3>
                  <Paragraph color="var(--neutral-400)" marginBottom={16}>
                    We take security vulnerabilities seriously and appreciate the work of
                    security researchers. If you discover a vulnerability, please report it
                    responsibly.
                  </Paragraph>
                  <Anchor minHeight={44} 
                    href="mailto:security@hanzo.ai"
                    fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-500)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
                  >
                    security@hanzo.ai
                    <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ExternalLink size={16} /></Box>
                  </Anchor>
                </div>
              </XStack>
            </MotionBox>
          </Box>
        </Box>

        {/* CTA Section */}
        <Box render="section" paddingVertical={96} paddingHorizontal={16} position="relative" overflow="hidden" backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))" $md={{ paddingHorizontal: 32 }}>
          <Box position="absolute" top={-160} right={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)" pointerEvents="none" />
          <Box position="absolute" bottom={-160} left={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(64px)" pointerEvents="none" />

          <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center" position="relative" zIndex={10}>
            <MotionText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}
            >
              Ready to secure your AI infrastructure?
            </MotionText>

            <MotionText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" marginBottom={40} maxWidth="42rem" marginHorizontal="auto"
            >
              Start building with enterprise-grade security today. Our team is ready to help
              you meet your compliance requirements.
            </MotionText>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              flexDirection="row" display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" gap={16}
            >
              <Link minHeight={44} 
                to="/signup"
                paddingHorizontal={32} paddingVertical={16} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-base)" lineHeight="var(--leading-base)" hoverStyle={{ opacity: 0.9 }}
                style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
              >
                Get Started Free
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
              </Link>
              <Link tap
                to="/contact"
                display="inline-flex" alignItems="center" paddingHorizontal={32} paddingVertical={16} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-base)" lineHeight="var(--leading-base)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
              >
                Schedule Security Review
              </Link>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              marginTop={32}
            >
              <Anchor tap
                href="https://docs.hanzo.ai/security"
                target="_blank"
                rel="noreferrer noopener"
                fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
              >
                Read the security documentation
              </Anchor>
            </MotionBox>
          </Box>
        </Box>
      </main>

      <Footer />
    </Box>
  );
};

export default Security;
