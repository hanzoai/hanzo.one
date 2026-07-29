import { Box, Button, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { FileText, BookOpen, MessageSquare, ExternalLink } from "lucide-react";

const CallToAction = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundImage="linear-gradient(to top, var(--pure-black), rgb(255 255 255 / 0.08))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={48}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Explore Further</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Discover how Hanzo Payments can transform your business with our comprehensive resources.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} marginBottom={64} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24} display="flex" flexDirection="column"
          >
            <Box backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)" width="fit-content" marginBottom={16}>
              <FileText size={24} color="var(--foreground)" />
            </Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>API Reference</H3>
            <Paragraph color="var(--neutral-400)" marginBottom={24} flexGrow={1}>
              Detailed documentation on all Hanzo Payments APIs and integration options.
            </Paragraph>
            <Button variant="outline" width="100%" justifyContent="center" gap={8} borderColor="var(--neutral-700)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}>
              <ExternalLink size={16} />
              <span>View API Docs</span>
            </Button>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24} display="flex" flexDirection="column"
          >
            <Box backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)" width="fit-content" marginBottom={16}>
              <BookOpen size={24} color="var(--foreground)" />
            </Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>Hanzo App Marketplace</H3>
            <Paragraph color="var(--neutral-400)" marginBottom={24} flexGrow={1}>
              Explore hundreds of pre-built integrations and apps for Hanzo Payments.
            </Paragraph>
            <Button variant="outline" width="100%" justifyContent="center" gap={8} borderColor="var(--neutral-700)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}>
              <ExternalLink size={16} />
              <span>Browse Apps</span>
            </Button>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24} display="flex" flexDirection="column"
          >
            <Box backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)" width="fit-content" marginBottom={16}>
              <MessageSquare size={24} color="var(--foreground)" />
            </Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>Checkout Integration</H3>
            <Paragraph color="var(--neutral-400)" marginBottom={24} flexGrow={1}>
              Step-by-step guide to integrating Hanzo Payments checkout into your website or app.
            </Paragraph>
            <Button variant="outline" width="100%" justifyContent="center" gap={8} borderColor="var(--neutral-700)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}>
              <ExternalLink size={16} />
              <span>Integration Guide</span>
            </Button>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24} display="flex" flexDirection="column"
          >
            <Box backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)" width="fit-content" marginBottom={16}>
              <BookOpen size={24} color="var(--foreground)" />
            </Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>Case Studies</H3>
            <Paragraph color="var(--neutral-400)" marginBottom={24} flexGrow={1}>
              Read success stories from businesses using Hanzo Payments around the world.
            </Paragraph>
            <Button variant="outline" width="100%" justifyContent="center" gap={8} borderColor="var(--neutral-700)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}>
              <ExternalLink size={16} />
              <span>View Case Studies</span>
            </Button>
          </MotionBox>
        </Grid>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={32} textAlign="center" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Start Building Your Financial Future Today</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={32}>
            Hanzo Payments helps your team streamline operations, grow faster, and simplify financial complexity.
          </Paragraph>
          <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={16}>
            <Button 
              size="lg" 
              backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-700), var(--neutral-700))" }}
            >
              Get Started Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              borderColor="var(--neutral-600)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
            >
              Contact Sales
            </Button>
          </XStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default CallToAction;
