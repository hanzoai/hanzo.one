import { Anchor, Box, Grid, H2, H3, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, CreditCard, ArrowRight } from "lucide-react";

const BuildForGrowth = () => {
  return (
    <Box render="section" paddingVertical={128} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          maxWidth="var(--container-prose)" marginHorizontal="auto" textAlign="center" marginBottom={96}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>Built for Growth</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)">
            Optimize user journeys and boost your conversions by understanding every interaction from entry point to checkout.
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {[
            {
              icon: <TrendingUp size={32} color="var(--foreground)" />,
              title: "Conversion Optimization",
              description: "Identify and fix bottlenecks in your user journey to improve conversion rates.",
              metrics: "+27% average increase in conversions"
            },
            {
              icon: <Users size={32} color="var(--foreground)" />,
              title: "Audience Insights",
              description: "Understand your users better with detailed demographics and behavior analysis.",
              metrics: "15M+ user profiles analyzed daily"
            },
            {
              icon: <CreditCard size={32} color="var(--foreground)" />,
              title: "Revenue Impact",
              description: "See the direct financial impact of your optimization efforts in real-time.",
              metrics: "$1.2B+ in tracked revenue"
            }
          ].map((item, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--neutral-800)"
            >
              <Box marginBottom={20}>{item.icon}</Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={12}>{item.title}</H3>
              <Paragraph color="var(--neutral-400)" marginBottom={20}>{item.description}</Paragraph>
              <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-full)" display="inline-block" color="var(--foreground)">
                {item.metrics}
              </Box>
            </MotionBox>
          ))}
        </Grid>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          marginTop={64} textAlign="center"
        >
          <Anchor minHeight={44} href="#learn-more" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>
            Learn how our customers achieved growth <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
          </Anchor>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default BuildForGrowth;
