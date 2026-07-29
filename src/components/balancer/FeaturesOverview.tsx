import { Anchor, Box, Grid, H2, H3, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const FeaturesOverview = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--surface-card-emphasis)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>What is Hanzo Balancer?</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="56rem" marginHorizontal="auto">
            Hanzo Balancer is a leading modern open source reverse proxy and ingress controller that makes deploying services and APIs easy. 
            Hanzo Balancer integrates with your existing infrastructure components and configures itself automatically and dynamically.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={40} marginBottom={64} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            backgroundColor="var(--surface-card-emphasis)" padding={32} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-700)"
          >
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={16}>Simplified Operation, Complex Deployments</H3>
            <Paragraph color="var(--neutral-300)">
              Hanzo Balancer is designed to be as simple as possible to operate, but capable of handling large, 
              highly-complex deployments across a wide range of environments and protocols in public, private, and hybrid clouds.
            </Paragraph>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            backgroundColor="var(--surface-card-emphasis)" padding={32} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-700)"
          >
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={16}>Enhanced with Powerful Middleware Suite</H3>
            <Paragraph color="var(--neutral-300)">
              Hanzo Balancer also comes with a powerful set of middlewares that enhance its capabilities to include 
              load balancing, API gateway, orchestrator ingress, and more.
            </Paragraph>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            backgroundColor="var(--surface-card-emphasis)" padding={32} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-700)"
          >
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={16}>Upgrade from Other Proxies in Seconds</H3>
            <Paragraph color="var(--neutral-300)">
              Watch our short demo video to see why our cloud native, GitOps-driven API Gateway is Developers' #1 choice.
            </Paragraph>
            <Anchor tap href="#watch-demo" display="inline-flex" marginTop={16} color="var(--foreground)" hoverStyle={{ color: "var(--foreground)" }}>
              Watch Demo Video
            </Anchor>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default FeaturesOverview;
