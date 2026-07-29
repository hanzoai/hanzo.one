import { Box, Grid, H2, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Paintbrush } from "lucide-react";

const CheckoutExperience = () => {
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
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Customizable Checkout Experiences</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Create beautiful, high-converting checkout flows that drive revenue growth and customer satisfaction.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={64} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" overflow="hidden"
          >
            <Box padding={24}>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Global Payment Methods</H3>
              <Box render="ul" rowGap={12} marginBottom={24}>
                <XStack render="li" display="flex" alignItems="flex-start" gap={8}>
                  <Text color="var(--foreground)">•</Text>
                  <span>Over 200 currencies and local payment methods</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start" gap={8}>
                  <Text color="var(--foreground)">•</Text>
                  <span>Optimized global payment acceptance with Adaptive Acceptance</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start" gap={8}>
                  <Text color="var(--foreground)">•</Text>
                  <span>Smart routing for higher authorization rates</span>
                </XStack>
              </Box>

              <XStack display="flex" flexWrap="wrap" gap={8} marginTop={16}>
                {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay', 'Google Pay', 'iDEAL', 'Bancontact', 'SOFORT', '+190 more'].map((method, index) => (
                  <Text key={index} display="inline-block" paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">
                    {method}
                  </Text>
                ))}
              </XStack>
            </Box>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            display="flex" flexDirection="column" justifyContent="space-between" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" overflow="hidden"
          >
            <Box padding={24}>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Checkout Interface</H3>
              <Paragraph color="var(--neutral-400)" marginBottom={24}>
                Fully customizable checkout UI that matches your brand and maximizes conversions.
              </Paragraph>
              
              <Box backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-700)" borderRadius="var(--radius-lg)" padding={16} marginBottom={16}>
                <Box height={32} width={128} backgroundColor="var(--neutral-800)" borderRadius="var(--radius)" marginBottom={12}></Box>
                <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={12} marginBottom={12}>
                  <Box height={40} backgroundColor="var(--neutral-800)" borderRadius="var(--radius)"></Box>
                  <Box height={40} backgroundColor="var(--neutral-800)" borderRadius="var(--radius)"></Box>
                </Grid>
                <Box height={40} backgroundColor="var(--neutral-800)" borderRadius="var(--radius)" marginBottom={12}></Box>
                <Box height={40} backgroundColor="var(--neutral-600)" borderRadius="var(--radius)"></Box>
              </Box>
              
              <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginTop={8} textAlign="center">Customizable checkout flow</Box>
            </Box>
          </MotionBox>
        </Grid>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} borderRadius="var(--radius-lg)"
          >
            <Box backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)" width="fit-content" marginBottom={16}>
              <Globe size={24} color="var(--foreground)" />
            </Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>Global Reach</H3>
            <Paragraph color="var(--neutral-400)">
              Accept payments in 200+ countries and territories with localized experiences for each market.
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
              <Smartphone size={24} color="var(--foreground)" />
            </Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>Mobile Optimized</H3>
            <Paragraph color="var(--neutral-400)">
              Responsive checkout flows designed for high conversion on all devices and screen sizes.
            </Paragraph>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} borderRadius="var(--radius-lg)"
          >
            <Box backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)" width="fit-content" marginBottom={16}>
              <Paintbrush size={24} color="var(--foreground)" />
            </Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>Fully Customizable</H3>
            <Paragraph color="var(--neutral-400)">
              Customize every aspect of the checkout experience to match your brand identity.
            </Paragraph>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default CheckoutExperience;
