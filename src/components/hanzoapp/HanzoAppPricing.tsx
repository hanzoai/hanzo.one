import { Box, Button, Grid, H2, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const PricingTier = ({ title, price, description, features, highlight = false, cta = "Get Started" }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      borderWidth={1} borderRadius="var(--radius-xl)" padding={32} height="100%" borderColor={highlight ? "var(--neutral-500)" : "var(--neutral-800)"} backgroundImage={highlight ? "linear-gradient(to bottom, rgb(255 255 255 / 0.2), var(--pure-black))" : undefined} backgroundColor={highlight ? undefined : "rgb(255 255 255 / 0.2)"}
    >
      <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={8}>{title}</H3>
      <Box marginBottom={16}>
        <Box fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700">{price}</Box>
        <Paragraph color="var(--neutral-400)">{description}</Paragraph>
      </Box>
      
      <Box render="ul" rowGap={12} marginBottom={32}>
        {features.map((feature, index) => (
          <XStack key={index} render="li" display="flex" alignItems="flex-start" gap={8}>
            <Box render="span" display="inline-flex" alignItems="center" marginTop={4}><Check size={20} color="var(--neutral-500)" /></Box>
            <Text color="var(--neutral-300)">{feature}</Text>
          </XStack>
        ))}
      </Box>
      
      <Button
        width="100%" backgroundColor={highlight ? "var(--neutral-600)" : "var(--neutral-800)"} color={highlight ? "var(--white)" : "var(--white)"} hoverStyle={highlight ? { backgroundColor: "var(--neutral-700)" } : { backgroundColor: "var(--neutral-700)" }}
      >
        {cta}
      </Button>
    </MotionBox>
  );
};

const HanzoAppPricing = () => {
  const starterFeatures = [
    "10,000 Predictions / month",
    "then $0.001 per prediction",
    "1GB Storage",
    "Database Backup",
    "1 Week Log Retention",
    "Evaluations & Metrics",
    "Custom Chatbot Branding",
    "Community Support"
  ];
  
  const proFeatures = [
    "Everything in Starter",
    "50,000 Predictions / month",
    "then $0.001 per prediction",
    "10GB Storage",
    "Unlimited Workspaces",
    "Admin Roles & Permissions",
    "3 Months Log Retention",
    "Priority Support"
  ];
  
  const enterpriseFeatures = [
    "On-Premise Deployment",
    "Air-gapped Environments",
    "SSO & SAML",
    "LDAP & RBAC",
    "Versioning",
    "Audit Logs",
    "99.99% Uptime SLA"
  ];

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
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Pricing</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)">
            Free 14 day trial. No credit card required.
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <PricingTier 
            title="Starter"
            price="$35/month"
            description="For individuals & small teams"
            features={starterFeatures}
          />
          
          <PricingTier 
            title="Pro"
            price="$65/month"
            description="For medium-sized businesses"
            features={proFeatures}
            highlight={true}
          />
          
          <PricingTier 
            title="Enterprise"
            price="Contact Us"
            description="For large organizations"
            features={enterpriseFeatures}
            cta="Contact Sales"
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default HanzoAppPricing;
