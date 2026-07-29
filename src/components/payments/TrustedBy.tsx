import { Box, Grid, H2, MotionBox, Paragraph, XStack, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const clients = [
  { name: "Damon", delay: 0 },
  { name: "Triller", delay: 0.1 },
  { name: "Zoo", delay: 0.2 },
  { name: "Skully", delay: 0.3 },
  { name: "Bellabeat", delay: 0.4 },
  { name: "Lifemed AI", delay: 0.5 }
];

const testimonial = {
  quote: "Hanzo accelerated our innovation beyond what we thought possible, helping us launch groundbreaking AI applications at scale.",
  author: "Sarah Chen",
  role: "CTO, Damon Motorcycles"
};

const TrustedBy = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={48}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Trusted Globally</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Industry leaders trust Hanzo Payments to manage their complex financial operations.
          </Paragraph>
        </MotionBox>
        
        <XStack display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" gap={24} paddingHorizontal={16} marginBottom={64} $sm={{ gap: 40 }}>
          {clients.map((client, index) => (
            <MotionBox
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: client.delay }}
              fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to right, var(--neutral-400), var(--neutral-300))" $sm={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}
            >
              {client.name}
            </MotionBox>
          ))}
        </XStack>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={32} maxWidth="var(--container-prose)" marginHorizontal="auto"
        >
          <YStack display="flex" flexDirection="column" alignItems="center" textAlign="center">
            <Box fontSize="var(--text-5xl)" lineHeight="var(--leading-5xl)" color="var(--foreground)" marginBottom={16}>"</Box>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-200)" fontStyle="italic" marginBottom={24}>
              {testimonial.quote}
            </Paragraph>
            <Box marginTop={16}>
              <Paragraph fontWeight="600">{testimonial.author}</Paragraph>
              <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{testimonial.role}</Paragraph>
            </Box>
          </YStack>
        </MotionBox>

        <Grid marginTop={64} display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} textAlign="center" $md={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            padding={16}
          >
            <Box fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={8}>200+</Box>
            <Box color="var(--neutral-400)">Currencies Supported</Box>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            padding={16}
          >
            <Box fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={8}>99.99%</Box>
            <Box color="var(--neutral-400)">Uptime SLA</Box>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            padding={16}
          >
            <Box fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={8}>190+</Box>
            <Box color="var(--neutral-400)">Countries Served</Box>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            padding={16}
          >
            <Box fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={8}>24/7</Box>
            <Box color="var(--neutral-400)">Global Support</Box>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default TrustedBy;
