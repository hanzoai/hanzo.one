import { Box, H2, MotionBox, MotionText, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";

// Partners and investors
const partners = [
  { name: "Techstars", year: "'17" },
  { name: "NVIDIA" },
  { name: "Google Cloud" },
  { name: "Amazon" },
  { name: "DigitalOcean" },
  { name: "Nebius" },
];

// Companies we've worked with at Hanzo Industries
const clients = [
  "Triller",
  "Damon",
  "Bellabeat",
  "Unikrn",
  "Cover",
  "Casper",
  "Myle",
  "Drumpants",
  "Cove",
  "Aura",
  "KANOA",
  "SKULLY",
];

const TrustedBySection = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--pure-black)" $md={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" marginBottom={48}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Trusted by the best
          </H2>
          <Paragraph color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
            Backed by world-class partners and trusted by industry leaders
          </Paragraph>
        </MotionBox>

        {/* Partners section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          marginBottom={48}
        >
          <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" textTransform="uppercase" letterSpacing="var(--tracking-widest)" color="var(--neutral-500)" marginBottom={24} textAlign="center">
            Partners & Investors
          </Paragraph>
          <XStack display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" gap={24} $md={{ gap: 40 }}>
            {partners.map((partner, index) => (
              <MotionBox
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                
                paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)" color="var(--neutral-300)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)", borderColor: "var(--neutral-600)" }}
              >
                <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" letterSpacing="var(--tracking-tight)">
                  {partner.name}
                  {partner.year && (
                    <Text color="var(--brand)" marginLeft={4}>{partner.year}</Text>
                  )}
                </Text>
              </MotionBox>
            ))}
          </XStack>
        </MotionBox>

        {/* Clients section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" textTransform="uppercase" letterSpacing="var(--tracking-widest)" color="var(--neutral-500)" marginBottom={24} textAlign="center">
            Trusted By
          </Paragraph>
          <XStack display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" columnGap={32} rowGap={16}>
            {clients.map((client, index) => (
              <MotionText
                key={client}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                
                color="var(--neutral-500)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" hoverStyle={{ color: "var(--neutral-300)" }}
              >
                {client}
              </MotionText>
            ))}
          </XStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default TrustedBySection;
