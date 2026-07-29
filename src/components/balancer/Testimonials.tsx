import { Box, Grid, H2, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Running with minimal maintenance and config for years",
    rating: 5,
    author: "John C",
    role: "Sr. Software Architect"
  },
  {
    quote: "Fast and powerful reverse proxy with everything you need for your containerized infrastructure",
    rating: 5,
    author: "Dennis M",
    role: "Software Engineer"
  },
  {
    quote: "First thing you install on a fresh Kubernetes cluster",
    rating: 5,
    author: "Steve T",
    role: "DevOps Engineer"
  },
  {
    quote: "The most flexible reverse proxy",
    rating: 4.5,
    author: "Esteban T",
    role: "Development Engineer"
  },
  {
    quote: "The middleware feature makes all the difference",
    rating: 5,
    author: "Werner D",
    role: "Software Architect"
  }
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Text key={`full-${i}`} color="var(--foreground)">★</Text>);
  }

  if (halfStar) {
    stars.push(<Text key="half" color="var(--foreground)">★</Text>);
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Text key={`empty-${i}`} color="var(--neutral-500)">★</Text>);
  }

  return <XStack display="flex">{stars}</XStack>;
};

const Testimonials = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--surface-card-emphasis)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={-160} right={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      <Box position="absolute" bottom={-160} left={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>What Our Users Are Saying</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)">
            Join the growing number of users who trust Hanzo Balancer.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {testimonials.map((testimonial, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              backgroundColor="var(--surface-card-emphasis)" padding={24} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-700)"
            >
              <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" marginBottom={16}>"{testimonial.quote}"</Paragraph>
              <StarRating rating={testimonial.rating} />
              <Box marginTop={16}>
                <Paragraph fontWeight="500">{testimonial.author}</Paragraph>
                <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{testimonial.role}</Paragraph>
              </Box>
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Testimonials;
