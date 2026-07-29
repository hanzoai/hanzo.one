import { Box, Grid, H2, H3, H4, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Repeat, LayoutGrid, CreditCard } from "lucide-react";

const useCases = [
  {
    icon: <ShoppingCart size={24} color="var(--foreground)" />,
    title: "Ecommerce",
    description: "Sell directly to consumers worldwide with optimized, secure checkout experiences."
  },
  {
    icon: <Repeat size={24} color="var(--foreground)" />,
    title: "SaaS & Subscription",
    description: "Automate recurring billing and manage complex pricing tiers."
  },
  {
    icon: <LayoutGrid size={24} color="var(--foreground)" />,
    title: "Marketplaces",
    description: "Integrate multi-party payments and payouts for buyers and sellers."
  },
  {
    icon: <CreditCard size={24} color="var(--foreground)" />,
    title: "Embedded Finance",
    description: "Seamlessly embed financial services into your product, from cards to loans."
  }
];

const UseCases = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Use Cases</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Hanzo Payments powers diverse business models across industries with flexible, scalable solutions.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          {useCases.map((useCase, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}
            >
              <Box backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)" width="fit-content" marginBottom={16}>
                {useCase.icon}
              </Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>{useCase.title}</H3>
              <Paragraph color="var(--neutral-400)" marginBottom={16}>{useCase.description}</Paragraph>
              
              <Box marginTop={24} paddingTop={24} borderTopWidth={1} borderColor="var(--neutral-800)">
                <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" marginBottom={12}>Key Features</H4>
                <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={12}>
                  {[...Array(4)].map((_, i) => (
                    <XStack key={i} display="flex" alignItems="center" gap={8}>
                      <Box width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--foreground)"></Box>
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
                        {index === 0 && ['Optimized checkout', 'Global shipping', 'Inventory sync', 'Tax compliance'][i]}
                        {index === 1 && ['Recurring billing', 'Trials & coupons', 'Revenue recovery', 'Usage metering'][i]}
                        {index === 2 && ['Split payments', 'Escrow', 'KYC verification', 'Seller onboarding'][i]} 
                        {index === 3 && ['Card issuing', 'Lending', 'Account connectivity', 'Balance management'][i]}
                      </Text>
                    </XStack>
                  ))}
                </Grid>
              </Box>
            </MotionBox>
          ))}
        </Grid>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          marginTop={64} padding={32} borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" textAlign="center" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"
        >
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Start Quickly, Scale Instantly</H3>
          <Paragraph color="var(--neutral-300)" maxWidth="42rem" marginHorizontal="auto" marginBottom={24}>
            No-code solutions available, with setup completed in minutes. Scalable from startup to enterprise-level with consistent reliability.
          </Paragraph>
          <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={16}>
            <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} render="button" paddingHorizontal={24} paddingVertical={12} backgroundColor="var(--neutral-600)" borderRadius="var(--radius-md)" transition="all 200ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
              Get Started
            </Box>
            <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} render="button" paddingHorizontal={24} paddingVertical={12} backgroundColor="transparent" borderWidth={1} borderColor="var(--neutral-600)" borderRadius="var(--radius-md)" transition="all 200ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ borderColor: "var(--neutral-400)" }}>
              View Documentation
            </Box>
          </XStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default UseCases;
