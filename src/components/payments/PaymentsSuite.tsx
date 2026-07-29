import { Box, Grid, H2, H3, H4, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Calendar, Send, CreditCard as CardIcon, Coins } from "lucide-react";

const suiteItems = [
  {
    icon: <CreditCard size={24} color="var(--foreground)" />,
    title: "Online Payments",
    description: "Flexible integration with any website, optimized checkouts, and local payment methods."
  },
  {
    icon: <Calendar size={24} color="var(--foreground)" />,
    title: "Subscriptions & Billing",
    description: "Automated subscription management, recurring billing, and multilingual invoicing."
  },
  {
    icon: <Send size={24} color="var(--foreground)" />,
    title: "Embedded Finance (Connect)",
    description: "Integrate end-to-end payment experiences for marketplaces and platforms, including streamlined payouts."
  },
  {
    icon: <CardIcon size={24} color="var(--foreground)" />,
    title: "Issuing",
    description: "Create and manage physical and virtual cards for your teams or customers."
  },
  {
    icon: <Coins size={24} color="var(--foreground)" />,
    title: "Capital",
    description: "Access financing options to fuel your growth."
  }
];

const PaymentsSuite = () => {
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
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Comprehensive Payments Infrastructure</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Hanzo Payments provides the essential tools needed to process payments and optimize your financial operations, 
            fully integrated into your Hanzo workflow.
          </Paragraph>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          marginBottom={64}
        >
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={32} textAlign="center">Unified Payments Suite</H3>
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {suiteItems.map((item, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} borderRadius="var(--radius-lg)"
              >
                <Box backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)" width="fit-content" marginBottom={16}>
                  {item.icon}
                </Box>
                <H4 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>{item.title}</H4>
                <Paragraph color="var(--neutral-400)">{item.description}</Paragraph>
              </MotionBox>
            ))}
          </Grid>
        </MotionBox>

        <MotionBox 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          position="relative" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32} overflow="hidden" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"
        >
          <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.05) 1px, transparent 1px)" backgroundSize="32px 32px" maskImage="linear-gradient(to bottom,transparent,black)"></Box>
          <YStack position="relative" zIndex={10} display="flex" flexDirection="column" gap={32} alignItems="center" $md={{ flexDirection: "row" }}>
            <Box $md={{ width: "66.666667%" }}>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Optimized for Growth</H3>
              <Box render="ul" rowGap={12}>
                <XStack render="li" display="flex" alignItems="flex-start" gap={8}>
                  <Text color="var(--foreground)">•</Text>
                  <span>Real-time analytics and detailed financial reporting.</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start" gap={8}>
                  <Text color="var(--foreground)">•</Text>
                  <span>Forecast and predict revenues with built-in AI-driven analytics.</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start" gap={8}>
                  <Text color="var(--foreground)">•</Text>
                  <span>Transparent pricing with no hidden fees.</span>
                </XStack>
              </Box>
            </Box>
            <Box backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--neutral-700)" borderRadius="var(--radius-lg)" padding={20} $md={{ width: "33.333333%" }}>
              <Box textAlign="center">
                <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={12}>Payment Growth</H4>
                <XStack display="flex" alignItems="flex-end" justifyContent="center" columnGap={8} height={128} marginBottom={16}>
                  {[20, 35, 28, 45, 60, 75, 90].map((height, i) => (
                    <Box 
                      key={i} 
                      borderTopLeftRadius="var(--radius)" borderTopRightRadius="var(--radius)" width={24} backgroundImage="linear-gradient(to top, var(--neutral-600), var(--neutral-500))"
                      style={{height: `${height}%`}}
                    ></Box>
                  ))}
                </XStack>
                <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Last 7 days</Box>
              </Box>
            </Box>
          </YStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default PaymentsSuite;
