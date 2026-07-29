import { Anchor, Box, Grid, H2, H3, Helmet, Link, MotionBox, MotionText, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";

import {
  CheckCircle,
  Server,
  Activity,
  ArrowRight,
  Clock,
  ExternalLink,
  Bell,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BRAND_COLOR = "#10b981"; // Green for status page

const services = [
  { name: "API Gateway", status: "operational", uptime: "99.99%", latency: "45ms" },
  { name: "Authentication", status: "operational", uptime: "99.98%", latency: "23ms" },
  { name: "LLM Inference", status: "operational", uptime: "99.95%", latency: "120ms" },
  { name: "Vector Database", status: "operational", uptime: "99.99%", latency: "12ms" },
  { name: "Storage", status: "operational", uptime: "99.99%", latency: "8ms" },
  { name: "Edge CDN", status: "operational", uptime: "100%", latency: "15ms" },
  { name: "Monitoring", status: "operational", uptime: "99.99%", latency: "5ms" },
];

const regions = [
  { name: "US Central", code: "us-central-1", status: "operational" },
  { name: "US East", code: "us-east-1", status: "operational" },
  { name: "EU West", code: "eu-west-1", status: "operational" },
  { name: "Asia Pacific", code: "ap-southeast-1", status: "operational" },
];

const StatusPage = () => {
  const allOperational = services.every((s) => s.status === "operational");

  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Helmet>
        <title>System Status - Hanzo AI</title>
        <meta
          name="description"
          content="Check the current status of Hanzo AI services. Real-time uptime monitoring and incident reports."
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <Box render="section" position="relative" paddingTop={96} paddingBottom={64} paddingHorizontal={16} overflow="hidden" $md={{ paddingHorizontal: 32 }} $lg={{ paddingHorizontal: 48 }}>
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
              <MotionBox
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                flexDirection="row" display="inline-flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" marginBottom={24} backgroundColor={allOperational ? "rgb(255 255 255 / 0.2)" : "rgb(255 255 255 / 0.2)"} color={allOperational ? "var(--foreground)" : "var(--foreground)"}
              >
                <CheckCircle size={16} />
                {allOperational ? "All Systems Operational" : "Partial Outage"}
              </MotionBox>

              <MotionText
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                fontSize="var(--text-3xl)" lineHeight="1.1" fontWeight="500" letterSpacing="var(--tracking-tight)" marginBottom={24} $sm={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }} $lg={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $xl={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
              >
                <Text color="var(--foreground)">System</Text>
                <br />
                <Text color="var(--neutral-400)">Status.</Text>
              </MotionText>

              <MotionText
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                fontSize="var(--text-base)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" marginBottom={40} maxWidth="var(--container-prose)" marginHorizontal="auto" $lg={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}
              >
                Real-time status of Hanzo AI infrastructure and services.
                Subscribe to updates or check our incident history.
              </MotionText>

              <MotionBox
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                flexDirection="row" display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" gap={16}
              >
                <XStack minHeight={44} render="button" display="inline-flex" alignItems="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" backgroundColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" borderWidth={1} borderColor="var(--border-strong)" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Bell size={16} /></Box>
                  Subscribe to Updates
                </XStack>
                <Anchor
                  href="https://docs.hanzo.ai/status"
                  target="_blank"
                  rel="noopener noreferrer"
                  display="inline-flex" alignItems="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
                >
                  API Status Endpoint
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ExternalLink size={16} /></Box>
                </Anchor>
              </MotionBox>
            </Box>
          </Box>
        </Box>

        {/* Services Status */}
        <Box render="section" paddingVertical={64} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }}>
          <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              marginBottom={32}
            >
              <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)" marginBottom={8}>Services</H2>
              <Paragraph color="var(--neutral-400)">Current status of all Hanzo AI services</Paragraph>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" overflow="hidden"
            >
              <Box >
                {services.map((service, index) => (
                  <MotionBox
                    key={service.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    
                    flexDirection="row" paddingHorizontal={24} paddingVertical={16} display="flex" alignItems="center" justifyContent="space-between" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}
                  >
                    <XStack display="flex" alignItems="center" gap={16}>
                      <Server size={20} color="var(--neutral-500)" />
                      <Text fontWeight="500" color="var(--foreground)">{service.name}</Text>
                    </XStack>
                    <XStack display="flex" alignItems="center" gap={24}>
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)" display="none" $sm={{ display: "block" }}>
                        {service.latency} avg
                      </Text>
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" display="none" $md={{ display: "block" }}>
                        {service.uptime} uptime
                      </Text>
                      <XStack display="flex" alignItems="center" gap={8}>
                        <CheckCircle size={16} color="var(--neutral-500)" />
                        <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)">Operational</Text>
                      </XStack>
                    </XStack>
                  </MotionBox>
                ))}
              </Box>
            </MotionBox>
          </Box>
        </Box>

        {/* Regions Status */}
        <Box render="section" paddingVertical={64} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $md={{ paddingHorizontal: 32 }}>
          <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              marginBottom={32}
            >
              <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)" marginBottom={8}>Global Regions</H2>
              <Paragraph color="var(--neutral-400)">Status across all deployment regions</Paragraph>
            </MotionBox>

            <Grid display="grid" gap={16} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
              {regions.map((region, index) => (
                <MotionBox
                  key={region.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}
                >
                  <XStack display="flex" alignItems="center" gap={12} marginBottom={16}>
                    <Globe size={20} color="var(--neutral-500)" />
                    <Text fontWeight="500" color="var(--foreground)">{region.name}</Text>
                  </XStack>
                  <XStack display="flex" alignItems="center" justifyContent="space-between">
                    <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)" fontFamily="var(--font-mono)">{region.code}</Text>
                    <XStack display="flex" alignItems="center" gap={8}>
                      <MotionBox animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" />
                      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)">Active</Text>
                    </XStack>
                  </XStack>
                </MotionBox>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Recent Incidents */}
        <Box render="section" paddingVertical={64} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }}>
          <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              marginBottom={32}
            >
              <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)" marginBottom={8}>Recent Incidents</H2>
              <Paragraph color="var(--neutral-400)">Incident history for the past 90 days</Paragraph>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32} textAlign="center"
            >
              <Box render="span" display="inline-flex" alignItems="center" marginHorizontal="auto" marginBottom={16}><Activity size={48} color="var(--neutral-500)" /></Box>
              <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" color="var(--foreground)" marginBottom={8}>No Recent Incidents</H3>
              <Paragraph color="var(--neutral-400)">
                All systems have been operating normally for the past 90 days.
              </Paragraph>
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
              fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}
            >
              Need help with an issue?
            </MotionText>

            <MotionText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" marginBottom={40} maxWidth="42rem" marginHorizontal="auto"
            >
              Our support team is available 24/7 to help you resolve any issues.
            </MotionText>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              flexDirection="row" display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" gap={16}
            >
              <Link
                to="/contact"
                display="inline-flex" alignItems="center" paddingHorizontal={32} paddingVertical={16} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-base)" lineHeight="var(--leading-base)" backgroundColor="var(--neutral-500)" color="var(--foreground)" hoverStyle={{ opacity: 0.9 }}
              >
                Contact Support
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
              </Link>
              <Anchor tap
                href="https://docs.hanzo.ai"
                target="_blank"
                rel="noopener noreferrer"
                display="inline-flex" alignItems="center" paddingHorizontal={32} paddingVertical={16} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-base)" lineHeight="var(--leading-base)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
              >
                View Documentation
              </Anchor>
            </MotionBox>
          </Box>
        </Box>
      </main>

      <Footer />
    </Box>
  );
};

export default StatusPage;
