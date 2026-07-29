import { Anchor, Box, Grid, H2, H3, Helmet, Link, MotionBox, MotionText, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, FileText, ArrowRight, ExternalLink, CheckCircle } from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const PRIVACY_HIGHLIGHTS = [
  {
    icon: Shield,
    title: "Data Protection",
    description: "Your data is encrypted at rest and in transit with industry-standard encryption.",
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Strict access controls ensure only authorized personnel can access your information.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We're transparent about what data we collect and how we use it.",
  },
  {
    icon: FileText,
    title: "Your Rights",
    description: "You have full control over your data with the right to access, modify, or delete it.",
  },
];

const Privacy = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Helmet>
        <title>Privacy Policy - Hanzo AI</title>
        <meta
          name="description"
          content="Hanzo AI privacy policy - how we protect your data and respect your privacy. GDPR and CCPA compliant."
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <Box render="section" position="relative" paddingTop={96} paddingBottom={64} paddingHorizontal={16} overflow="hidden" $md={{ paddingHorizontal: 32 }} $lg={{ paddingHorizontal: 48 }}>
          <Box position="absolute" top={0} right={0} bottom={0} left={0} overflow="hidden" zIndex={0} pointerEvents="none">
            <Box
              position="absolute" top="50%" left="50%" x="-50%" y="-50%" width="800px" height="800px" borderRadius="var(--radius-full)" opacity={0.1}
              style={{
                background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
                filter: "blur(100px)",
              }}
            />
          </Box>

          <Box maxWidth="64rem" marginHorizontal="auto" position="relative" zIndex={10}>
            <Box textAlign="center">
              <MotionBox
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                flexDirection="row" display="inline-flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={24}
                style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
              >
                <Shield size={14} />
                GDPR & CCPA Compliant
              </MotionBox>

              <MotionText
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                fontSize="var(--text-3xl)" lineHeight="1.1" fontWeight="500" letterSpacing="var(--tracking-tight)" marginBottom={24} $sm={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }} $lg={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $xl={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
              >
                <Text color="var(--foreground)">Your privacy</Text>
                <br />
                <Text color="var(--neutral-400)">is our priority.</Text>
              </MotionText>

              <MotionText
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                fontSize="var(--text-base)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" marginBottom={40} maxWidth="var(--container-prose)" marginHorizontal="auto" $lg={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}
              >
                We believe in transparency and giving you control over your data.
                This policy explains how we collect, use, and protect your information.
              </MotionText>

              <MotionBox
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                flexDirection="row" display="flex" flexWrap="wrap" justifyContent="center" gap={12} marginBottom={32}
              >
                {["GDPR", "CCPA", "SOC 2", "HIPAA"].map((badge) => (
                  <XStack
                    key={badge}
                    display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)"
                  >
                    <CheckCircle size={16} color="var(--neutral-500)" />
                    <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)">{badge}</Text>
                  </XStack>
                ))}
              </MotionBox>
            </Box>
          </Box>
        </Box>

        {/* Privacy Highlights */}
        <Box render="section" paddingVertical={64} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $md={{ paddingHorizontal: 32 }}>
          <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
            <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
              {PRIVACY_HIGHLIGHTS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <MotionBox
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}
                  >
                    <XStack
                      width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}
                      style={{ backgroundColor: `${BRAND_COLOR}15` }}
                    >
                      <Icon width={24} height={24} style={{ color: BRAND_COLOR }} />
                    </XStack>
                    <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={8}>{item.title}</H3>
                    <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{item.description}</Paragraph>
                  </MotionBox>
                );
              })}
            </Grid>
          </Box>
        </Box>

        {/* Policy Content */}
        <Box render="section" paddingVertical={64} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }}>
          <Box maxWidth="56rem" marginHorizontal="auto">
            <Box maxWidth="none">
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginTop={32} marginBottom={16} color="var(--foreground)">Information We Collect</H2>
                <Paragraph color="var(--neutral-300)" marginBottom={24}>
                  We collect information that you provide directly to us when you use our services,
                  including personal information such as your name, email address, and payment information.
                  We also collect usage data and analytics to improve our services.
                </Paragraph>

                <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginTop={32} marginBottom={16} color="var(--foreground)">How We Use Your Information</H2>
                <Paragraph color="var(--neutral-300)" marginBottom={24}>
                  We use the information we collect to provide, maintain, and improve our services,
                  process transactions, send communications, and develop new products and services.
                </Paragraph>

                <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginTop={32} marginBottom={16} color="var(--foreground)">Sharing Your Information</H2>
                <Paragraph color="var(--neutral-300)" marginBottom={24}>
                  We may share your information with third-party service providers to help us operate our business
                  and provide our services. We may also share information if required by law or to protect our rights.
                </Paragraph>

                <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginTop={32} marginBottom={16} color="var(--foreground)">Data Security</H2>
                <Paragraph color="var(--neutral-300)" marginBottom={24}>
                  We implement appropriate security measures to protect your personal information.
                  All data is encrypted at rest with AES-256 and in transit with TLS 1.3.
                </Paragraph>

                <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginTop={32} marginBottom={16} color="var(--foreground)">Your Rights</H2>
                <Paragraph color="var(--neutral-300)" marginBottom={24}>
                  You can access, update, or delete your account information at any time by
                  logging into your account or contacting us directly. Under GDPR and CCPA,
                  you have additional rights including data portability and the right to opt-out.
                </Paragraph>

                <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginTop={32} marginBottom={16} color="var(--foreground)">Contact Us</H2>
                <Paragraph color="var(--neutral-300)" marginBottom={24}>
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <Anchor tap href="mailto:privacy@hanzo.ai" color="var(--foreground)" hoverStyle={{ textDecorationLine: "underline" }}>
                    privacy@hanzo.ai
                  </Anchor>
                </Paragraph>

                <Paragraph marginTop={32} color="var(--neutral-500)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                  Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </Paragraph>
              </MotionBox>
            </Box>
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
              fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}
            >
              Questions about privacy?
            </MotionText>

            <MotionText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" marginBottom={40} maxWidth="42rem" marginHorizontal="auto"
            >
              Our team is here to help. Contact us for any questions about how we handle your data.
            </MotionText>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              flexDirection="row" display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" gap={16}
            >
              <Link minHeight={44} 
                to="/contact"
                paddingHorizontal={32} paddingVertical={16} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-base)" lineHeight="var(--leading-base)" hoverStyle={{ opacity: 0.9 }}
                style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
              >
                Contact Us
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
              </Link>
              <Link tap
                to="/security"
                display="inline-flex" alignItems="center" paddingHorizontal={32} paddingVertical={16} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-base)" lineHeight="var(--leading-base)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
              >
                View Security Page
              </Link>
            </MotionBox>
          </Box>
        </Box>
      </main>

      <Footer />
    </Box>
  );
};

export default Privacy;
