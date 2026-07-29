import { Box, Button, H2, H3, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle } from "lucide-react";

const Security = () => {
  return (
    <Box id="security" render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--neutral-900), var(--pure-black))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" marginBottom={64}
        >
          <Box render="span" display="inline-flex" alignItems="center" marginHorizontal="auto" marginBottom={24}><Shield size={64} color="var(--foreground)" /></Box>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Enterprise-Ready
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Apps running on Hanzo Machines are KVM hardware-isolated, built on a memory-safe stack and running directly on our own metal.
          </Paragraph>
        </MotionBox>

        <YStack display="flex" flexDirection="column" gap={64} alignItems="flex-start" $md={{ flexDirection: "row" }}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            flex={1}
          >
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={24}>Enterprise Features</H3>
            <Box render="ul" rowGap={16}>
              {[
                "Single Sign-On",
                "Guaranteed Support Response Times",
                "SOC2 Type 2 Attested",
                "Memory-safe Rust and Go stack",
                "CI/CD Integration"
              ].map((feature, index) => (
                <XStack key={index} render="li" display="flex" alignItems="flex-start">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={12} marginTop={4}><CheckCircle size={20} color="var(--foreground)" /></Box>
                  <Text color="var(--neutral-300)">{feature}</Text>
                </XStack>
              ))}
            </Box>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            flex={1}
          >
            <Box borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--border-strong)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={24}><Lock size={48} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={16}>Hanzo.io Security</H3>
              <Paragraph color="var(--neutral-300)" marginBottom={32}>
                Our security team works around the clock to ensure your applications and data are protected. We employ industry-leading practices and regularly undergo independent security audits.
              </Paragraph>
              <Button variant="outline" backgroundColor="transparent" color="var(--white)" borderWidth={1} borderColor="var(--foreground)" hoverStyle={{ backgroundColor: "var(--white)", color: "var(--pure-black)" }}>
                <a href="https://hanzo.ai/security">Security Details</a>
              </Button>
            </Box>
          </MotionBox>
        </YStack>

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          marginTop={80} textAlign="center"
        >
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={32}>Trusted by teams at</Paragraph>
          <XStack display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" gap={48}>
            <Box height={48} width={128} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-md)"></Box>
            <Box height={48} width={128} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-md)"></Box>
            <Box height={48} width={128} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-md)"></Box>
            <Box height={48} width={128} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-md)"></Box>
          </XStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Security;
