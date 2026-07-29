import { Anchor, Box, H2, H3, MotionBox, Paragraph, XStack, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const ArchitectureOverview = () => {
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
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Hanzo Balancer Architecture Overview</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="56rem" marginHorizontal="auto">
            Unlike a traditional reverse proxy, which requires manual configuration, Hanzo Balancer uses service 
            discovery to dynamically configure routing. Hanzo Balancer supports all major protocols, leveraging a rich set 
            of middleware for load balancing, rate-limiting, circuit-breakers, mirroring, authentication, and more.
          </Paragraph>
        </MotionBox>

        <YStack display="flex" flexDirection="column" alignItems="center" gap={48} marginBottom={64} $md={{ flexDirection: "row" }}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            width="100%" $md={{ width: "50%" }}
          >
            <XStack backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-700)" borderRadius="var(--radius-lg)" padding={16} aspectRatio={1.7777777777777777} display="flex" alignItems="center" justifyContent="center">
              <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-400)">Hanzo Balancer Architecture Diagram</Paragraph>
              {/* Replace with actual diagram image when available */}
            </XStack>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            width="100%" $md={{ width: "50%" }}
          >
            <Paragraph color="var(--neutral-300)" marginBottom={24}>
              Hanzo Balancer also supports SSL termination and works with ACME providers (like Let's Encrypt) 
              for automatic certificate generation. Hanzo Balancer's extensive features and capabilities make it 
              the comprehensive gateway to all your applications.
            </Paragraph>
            <Box borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={24} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>Maximize Uptime, Solve Issues Quickly</H3>
              <Paragraph color="var(--neutral-300)" marginBottom={16}>
                Need support with Hanzo Balancer? Our team of experts is here to help 24/7/365!
              </Paragraph>
              <Anchor tap 
                href="#support" 
                display="inline-block" paddingHorizontal={16} paddingVertical={8} backgroundColor="var(--neutral-600)" borderRadius="var(--radius-md)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
              >
                REQUEST COMMERCIAL SUPPORT
              </Anchor>
            </Box>
          </MotionBox>
        </YStack>
      </Box>
    </Box>
  );
};

export default ArchitectureOverview;
