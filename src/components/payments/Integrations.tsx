import { Box, Grid, H2, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Plug, Code, FileText } from "lucide-react";

const Integrations = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Powerful Integrations & APIs</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Connect Hanzo Payments to your existing systems with ease through powerful APIs and pre-built integrations.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={64} $lg={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} borderRadius="var(--radius-lg)" $lg={{ gridColumn: "span 2 / span 2" }}
          >
            <Box backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)" width="fit-content" marginBottom={16}>
              <Plug size={24} color="var(--foreground)" />
            </Box>
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Pre-built Integrations</H3>
            <Paragraph color="var(--neutral-400)" marginBottom={24}>
              Hundreds of pre-built integrations with popular services, including:
            </Paragraph>
            <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={12} $sm={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              {['Salesforce', 'Adobe', 'SAP', 'QuickBooks', 'Shopify', 'WooCommerce', 'Magento', 'WordPress', 'Squarespace', 'NetSuite', 'Xero', 'HubSpot'].map((integration, index) => (
                <Box key={index} paddingVertical={8} paddingHorizontal={12} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-md)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" textAlign="center" color="var(--neutral-300)">
                  {integration}
                </Box>
              ))}
            </Grid>
            <Paragraph color="var(--neutral-400)" marginTop={16} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" textAlign="center">
              And many more via the Hanzo App Marketplace
            </Paragraph>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" overflow="hidden" $lg={{ gridColumn: "span 3 / span 3" }}
          >
            <Box padding={24} borderBottomWidth={1} borderColor="var(--neutral-800)">
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={8}>Developer-First APIs</H3>
              <Paragraph color="var(--neutral-400)">
                Comprehensive API and detailed developer documentation for custom integrations.
              </Paragraph>
            </Box>
            <Box padding={24} backgroundColor="var(--neutral-950)" fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" overflow="auto" style={{ maxHeight: '300px' }}>
              <Box render="pre" color="var(--neutral-300)">
{`// Create a payment intent
const paymentIntent = await hanzo.paymentIntents.create({
  amount: 2000,
  currency: 'usd',
  payment_method_types: ['card'],
  customer: customer.id,
  metadata: {
    order_id: '6735',
  },
});

// Handle the payment
const { paymentIntent, error } = await stripe.confirmCardPayment(
  clientSecret,
  {
    payment_method: {
      card: cardElement,
      billing_details: {
        name: 'Jenny Rosen',
      },
    },
  }
);`}
              </Box>
            </Box>
            <XStack padding={16} display="flex" justifyContent="space-between" alignItems="center" borderTopWidth={1} borderColor="var(--neutral-800)">
              <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">API Reference</Text>
              <XStack display="flex" columnGap={8}>
                <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} render="button" paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--neutral-800)" borderRadius="var(--radius)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Copy</Box>
                <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} render="button" paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--neutral-600)" borderRadius="var(--radius)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Try it</Box>
              </XStack>
            </XStack>
          </MotionBox>
        </Grid>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} borderRadius="var(--radius-lg)"
          >
            <Box backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)" width="fit-content" marginBottom={16}>
              <Code size={24} color="var(--foreground)" />
            </Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>Easy to Implement</H3>
            <Paragraph color="var(--neutral-400)">
              Quick integration with just a few lines of code, with SDKs for all major programming languages.
            </Paragraph>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} borderRadius="var(--radius-lg)"
          >
            <Box backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)" width="fit-content" marginBottom={16}>
              <FileText size={24} color="var(--foreground)" />
            </Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>Comprehensive Documentation</H3>
            <Paragraph color="var(--neutral-400)">
              Detailed guides, API reference, and code examples to help you integrate Hanzo Payments quickly.
            </Paragraph>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} borderRadius="var(--radius-lg)" display="flex" flexDirection="column" justifyContent="space-between"
          >
            <div>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>Explore Our APIs</H3>
              <Paragraph color="var(--neutral-400)" marginBottom={16}>
                Get started with quickstart guides, examples, and developer tools.
              </Paragraph>
            </div>
            <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} render="button" width="100%" paddingVertical={8} backgroundColor="var(--neutral-600)" borderRadius="var(--radius-md)" transition="all 200ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
              API Reference
            </Box>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default Integrations;
