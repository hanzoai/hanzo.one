import { Box, Button, ChromeText, Grid, Link, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";


const MainCards: React.FC = () => {
  return (
    <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={40} marginBottom={96} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" overflow="hidden" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"
      >
        <XStack height={256} display="flex" alignItems="center" justifyContent="center" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
          <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700">
            Capabilities
          </ChromeText>
        </XStack>
        <Box padding={32}>
          <Paragraph color="var(--neutral-300)" marginBottom={24}>
            Discover our comprehensive suite of technical capabilities that empower your organization to innovate
            and transform. From AI and cloud infrastructure to custom development solutions, we provide everything
            you need to stay ahead.
          </Paragraph>
          <XStack display="flex" flexWrap="wrap" gap={12} marginBottom={32}>
            <Text paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" borderWidth={1} borderColor="var(--border-strong)">
              AI Engineering
            </Text>
            <Text paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" borderWidth={1} borderColor="var(--border-strong)">
              Cloud Infrastructure
            </Text>
            <Text paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" borderWidth={1} borderColor="var(--border-strong)">
              Data Analytics
            </Text>
            <Text paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" borderWidth={1} borderColor="var(--border-strong)">
              Digital Experiences
            </Text>
          </XStack>
          <Button asChild width="100%" backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
            <Link minHeight={44} to="/solutions/capabilities">
              Explore Our Capabilities <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ChevronRight size={20} /></Box>
            </Link>
          </Button>
        </Box>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" overflow="hidden" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"
      >
        <XStack height={256} display="flex" alignItems="center" justifyContent="center" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
          <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700">
            Industries
          </ChromeText>
        </XStack>
        <Box padding={32}>
          <Paragraph color="var(--neutral-300)" marginBottom={24}>
            Our industry-specific expertise helps organizations across sectors overcome unique challenges and seize
            opportunities. We combine deep domain knowledge with cutting-edge technology to deliver tailored
            solutions for your business.
          </Paragraph>
          <XStack display="flex" flexWrap="wrap" gap={12} marginBottom={32}>
            <Text paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" borderWidth={1} borderColor="var(--border-strong)">
              Financial Services
            </Text>
            <Text paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" borderWidth={1} borderColor="var(--border-strong)">
              Healthcare
            </Text>
            <Text paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" borderWidth={1} borderColor="var(--border-strong)">
              Retail
            </Text>
            <Text paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" borderWidth={1} borderColor="var(--border-strong)">
              Technology
            </Text>
          </XStack>
          <Button asChild width="100%" backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
            <Link minHeight={44} to="/solutions/industries">
              Explore Our Industry Solutions <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ChevronRight size={20} /></Box>
            </Link>
          </Button>
        </Box>
      </MotionBox>
    </Grid>
  );
};

export default MainCards;
