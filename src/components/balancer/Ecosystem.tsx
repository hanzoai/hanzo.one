import { Box, Grid, H2, H3, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const ecosystemCategories = [
  {
    title: "Providers & Orchestrators",
    items: [
      "Kubernetes",
      "Docker Swarm",
      "etcd",
      "Consul",
      "K3S",
      "HashiCorp Nomad",
      "Redis",
      "Azure Service Fabric",
      "Amazon ECS",
      "AKS",
      "GKE",
      "EKS",
      "IBM Cloud Kubernetes Service",
      "OpenShift"
    ]
  },
  {
    title: "Tracing & Metrics",
    items: [
      "OpenTelemetry",
      "Datadog",
      "Prometheus",
      "InfluxDB"
    ]
  },
  {
    title: "TLS Certificates",
    items: [
      "Let's Encrypt",
      "Tailscale",
      "SPIFFE"
    ]
  }
];

const Ecosystem = () => {
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
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Hanzo Balancer Ecosystem</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="56rem" marginHorizontal="auto">
            Hanzo Balancer integrates with every major cluster technology and includes built-in support for 
            the top distributed tracing and metrics providers.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={40} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {ecosystemCategories.map((category, index) => (
            <MotionBox
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              backgroundColor="var(--surface-card-emphasis)" padding={24} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-700)"
            >
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={16}>{category.title}</H3>
              <Box render="ul" rowGap={8}>
                {category.items.map((item) => (
                  <Box key={item} render="li" color="var(--neutral-300)">
                    {item}
                  </Box>
                ))}
              </Box>
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Ecosystem;
