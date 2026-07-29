import { Anchor, Box, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Server, Shield, FileText, Server as LoadBalancer } from "lucide-react";

const useCases = [
  {
    id: "ingress-controller",
    icon: Server,
    title: "Ingress Controller",
    description: "Deploy Hanzo Balancer as your Kubernetes Ingress Controller to simplify networking, secure your APIs, and reduce the costs of managing your microservices with a dynamic, production-ready Kubernetes Ingress routing solution.",
    learnMoreLink: "#ingress"
  },
  {
    id: "waf",
    icon: Shield,
    title: "Web Application Firewall",
    description: "Leverage Hanzo Balancer as your WAF to protect your microservices and APIs against a myriad of online threats, such as SQL injection and cross-site scripting, thus enhancing security and ensuring data integrity.",
    learnMoreLink: "#waf"
  },
  {
    id: "certificate",
    icon: FileText,
    title: "Certificate Management",
    description: "Hanzo Balancer provides built-in support for Let's Encrypt (ACME) automatic certificate management as well as user-defined certificates.",
    learnMoreLink: "#cert"
  },
  {
    id: "load-balancing",
    icon: LoadBalancer,
    title: "Load Balancing",
    description: "Control load to upstream services with flexible Layer 4 and Layer 7 routing and load balancing capabilities plus a large middleware toolkit that enables dynamic scaling, zero-downtime blue-green and canary deployments, mirroring, and more.",
    learnMoreLink: "#lb"
  }
];

const UseCaseCard = ({ useCase }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-700)" borderRadius="var(--radius-lg)" padding={24}
    >
      <XStack backgroundColor="var(--surface-card-emphasis)" width={48} height={48} borderRadius="var(--radius-full)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
        <useCase.icon height={24} width={24} color="var(--foreground)" />
      </XStack>
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>{useCase.title}</H3>
      <Paragraph color="var(--neutral-300)" marginBottom={16}>{useCase.description}</Paragraph>
      <Anchor tap href={useCase.learnMoreLink} color="var(--foreground)" hoverStyle={{ color: "var(--foreground)" }}>
        Learn more
      </Anchor>
    </MotionBox>
  );
};

const UseCases = () => {
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
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Hanzo Balancer Use Cases</H2>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={64} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          {useCases.map((useCase, index) => (
            <UseCaseCard key={useCase.id} useCase={useCase} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default UseCases;
