import { Box, Button, Grid, H2, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Laptop, Server, Cloud, Workflow } from "lucide-react";

const DeploymentOptions = () => {
  const deploymentOptions = [
    {
      icon: Laptop,
      title: "Hanzo Vector Lite",
      description: "Lightweight vector database-as-a-library that runs directly in your application.",
      features: [
        "Instant setup with pip/npm install",
        "Perfect for prototyping and development",
        "No external dependencies or services",
        "Up to 1M vectors on a single machine"
      ],
      cta: "Get Started",
      color: "blue"
    },
    {
      icon: Server,
      title: "Hanzo Vector Server",
      description: "Self-hosted, production-ready vector database for single-machine deployment.",
      features: [
        "Complete feature set in standalone mode",
        "Ideal for up to 100M vectors",
        "Docker & Kubernetes deployment options",
        "Simple configuration and management"
      ],
      cta: "Deploy Now",
      color: "indigo"
    },
    {
      icon: Workflow,
      title: "Hanzo Vector Cluster",
      description: "Distributed, horizontally scalable deployment for massive vector collections.",
      features: [
        "Scale to billions of vectors with minimal latency",
        "Horizontal scaling across multiple nodes",
        "Advanced cluster management tools",
        "High availability and fault tolerance"
      ],
      cta: "Learn More",
      color: "purple"
    },
    {
      icon: Cloud,
      title: "Hanzo Vector Cloud",
      description: "Fully-managed vector database service with zero operational overhead.",
      features: [
        "Pay-as-you-go serverless option",
        "Dedicated clusters for enterprise needs",
        "10x faster than self-hosted solutions",
        "99.99% uptime SLA and global availability"
      ],
      cta: "Try Free",
      color: "teal"
    }
  ];

  const getColorClasses = (color: string, isHovered: boolean = false) => {
    const colorMap: Record<string, { bg: string, text: string, border: string }> = {
      blue: { 
        bg: isHovered ? "bg-blue-900/40" : "bg-blue-900/20", 
        text: "text-blue-400", 
        border: isHovered ? "border-blue-500/50" : "border-blue-800/50" 
      },
      indigo: { 
        bg: isHovered ? "bg-indigo-900/40" : "bg-indigo-900/20", 
        text: "text-indigo-400", 
        border: isHovered ? "border-indigo-500/50" : "border-indigo-800/50" 
      },
      purple: { 
        bg: isHovered ? "bg-purple-900/40" : "bg-purple-900/20", 
        text: "text-purple-400", 
        border: isHovered ? "border-purple-500/50" : "border-purple-800/50" 
      },
      teal: { 
        bg: isHovered ? "bg-teal-900/40" : "bg-teal-900/20", 
        text: "text-teal-400", 
        border: isHovered ? "border-teal-500/50" : "border-teal-800/50" 
      }
    };

    return colorMap[color] || colorMap.indigo;
  };

  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--neutral-950)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <Box textAlign="center" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={64}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Deployment Options to Match Your Journey
            </H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)">
              From local development to global-scale production, Hanzo Vector offers flexible deployment options to fit your needs.
            </Paragraph>
          </MotionBox>
        </Box>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          {deploymentOptions.map((option, index) => {
            const { bg, text, border } = getColorClasses(option.color);
            return (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                borderWidth={1} borderRadius="var(--radius-xl)" padding={24} display="flex" flexDirection="column" height="100%" transition="all 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ y: "-4px", boxShadow: "0 10px 15px -3px rgb(0 0 0 / .35)", shadowColor: "rgb(255 255 255 / 0.2)" }}
              >
                <XStack height={48} width={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
                  <option.icon height={24} width={24} />
                </XStack>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" color="var(--white)" marginBottom={8}>{option.title}</H3>
                <Paragraph color="var(--neutral-300)" marginBottom={24}>{option.description}</Paragraph>
                
                <Box render="ul" rowGap={8} marginBottom={32} flexGrow={1}>
                  {option.features.map((feature, fIndex) => (
                    <XStack key={fIndex} render="li" display="flex" alignItems="flex-start">
                      <Text marginRight={8}>•</Text>
                      <Text color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{feature}</Text>
                    </XStack>
                  ))}
                </Box>
                
                <Button variant="outline" marginTop="auto" borderColor="var(--neutral-700)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}>
                  {option.cta}
                </Button>
              </MotionBox>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default DeploymentOptions;
