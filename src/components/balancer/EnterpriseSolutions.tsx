import { Box, Button, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Building2, Shield, FileCode, Users } from "lucide-react";

const EnterpriseSolutions = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Enterprise Solutions</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Power your mission-critical applications with enterprise-grade features designed for reliability, security, and compliance.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={64} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            padding={32} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--border-strong)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"
          >
            <XStack display="flex" alignItems="flex-start" marginBottom={24}>
              <Box backgroundColor="rgb(255 255 255 / 0.2)" padding={12} borderRadius="var(--radius-full)" marginRight={16}>
                <Shield size={24} color="var(--foreground)" />
              </Box>
              <div>
                <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={8}>Enhanced Security Suite</H3>
                <Paragraph color="var(--neutral-300)">
                  Advanced WAF protection, multi-factor authentication, and zero-trust network access controls to protect your infrastructure from sophisticated threats.
                </Paragraph>
              </div>
            </XStack>
            <XStack display="flex" alignItems="flex-start">
              <Box backgroundColor="rgb(255 255 255 / 0.2)" padding={12} borderRadius="var(--radius-full)" marginRight={16}>
                <Building2 size={24} color="var(--foreground)" />
              </Box>
              <div>
                <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={8}>High Availability Clustering</H3>
                <Paragraph color="var(--neutral-300)">
                  Multi-region and multi-zone failover capabilities with automated health checks and self-healing for 99.99% uptime SLAs.
                </Paragraph>
              </div>
            </XStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            padding={32} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--border-strong)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"
          >
            <XStack display="flex" alignItems="flex-start" marginBottom={24}>
              <Box backgroundColor="rgb(255 255 255 / 0.2)" padding={12} borderRadius="var(--radius-full)" marginRight={16}>
                <FileCode size={24} color="var(--foreground)" />
              </Box>
              <div>
                <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={8}>Advanced Traffic Policies</H3>
                <Paragraph color="var(--neutral-300)">
                  Sophisticated traffic management with circuit breaking, API rate limiting, and content-based routing for granular control.
                </Paragraph>
              </div>
            </XStack>
            <XStack display="flex" alignItems="flex-start">
              <Box backgroundColor="rgb(255 255 255 / 0.2)" padding={12} borderRadius="var(--radius-full)" marginRight={16}>
                <Users size={24} color="var(--foreground)" />
              </Box>
              <div>
                <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={8}>Enterprise Support</H3>
                <Paragraph color="var(--neutral-300)">
                  24/7/365 priority support, dedicated technical account managers, and professional services to ensure your success.
                </Paragraph>
              </div>
            </XStack>
          </MotionBox>
        </Grid>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          textAlign="center"
        >
          <Button 
            size="lg" 
            paddingHorizontal={32} backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-700), var(--neutral-700))" }}
          >
            Request Enterprise Demo
          </Button>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default EnterpriseSolutions;
