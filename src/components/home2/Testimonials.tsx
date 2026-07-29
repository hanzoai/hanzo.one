import { Box, Grid, H2, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Hanzo AI has cut our development time in half. The platform is incredibly intuitive and powerful.",
    author: "Sarah Chen",
    title: "CTO, TechVision Inc."
  },
  {
    quote: "We've tried many AI platforms, but nothing compares to the reliability and performance of Hanzo.",
    author: "Michael Rodriguez",
    title: "Lead Engineer, DataStream"
  },
  {
    quote: "The support team is phenomenal. Any issues we've had were resolved quickly and efficiently.",
    author: "David Kim",
    title: "AI Director, FutureLabs"
  }
];

const Testimonials = () => {
  return (
    <Box render="section" paddingVertical={80} position="relative" overflow="hidden">
      <Box marginHorizontal="auto" paddingHorizontal={16}>
        <Box textAlign="center" marginBottom={64}>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Trusted by Leading Teams
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            See what our customers are saying about our platform
          </Paragraph>
        </Box>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {testimonials.map((testimonial, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} backgroundImage="linear-gradient(to bottom right, var(--neutral-900), var(--pure-black))"
            >
              <Box marginBottom={24}>
                <Box display="inline-block" render="svg" height={32} width={32} color="var(--foreground)" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </Box>
              </Box>
              <Paragraph color="var(--neutral-300)" marginBottom={24}>{testimonial.quote}</Paragraph>
              <div>
                <Paragraph fontWeight="700">{testimonial.author}</Paragraph>
                <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{testimonial.title}</Paragraph>
              </div>
            </MotionBox>
          ))}
        </Grid>
        
        <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={32} marginTop={80}>
          {['Acme Inc', 'GlobalTech', 'FutureCorp', 'DataStream', 'TechVision'].map((company, index) => (
            <Box key={index} color="var(--neutral-400)" fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" opacity={0.7}>{company}</Box>
          ))}
        </XStack>
      </Box>
    </Box>
  );
};

export default Testimonials;
