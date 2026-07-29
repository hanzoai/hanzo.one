import { Box, Grid, H2, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, delay }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), var(--neutral-950))"
    >
      <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Quote size={32} color="var(--foreground)" /></Box>
      <Paragraph color="var(--neutral-300)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" marginBottom={24}>{quote}</Paragraph>
      <div>
        <Paragraph fontWeight="700" color="var(--white)">{name}</Paragraph>
        <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{title}</Paragraph>
      </div>
    </MotionBox>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Hanzo has completely transformed how we build and deploy AI applications. The developer experience is unmatched.",
      name: "Sarah Chen",
      title: "CTO, TechVision AI"
    },
    {
      quote: "The open-source nature of Hanzo gives us the confidence to build our entire product on top of it. We control our destiny.",
      name: "Marcus Johnson",
      title: "Lead Engineer, DataFusion"
    },
    {
      quote: "We've cut our AI development time in half since switching to Hanzo. The integration between tools is seamless.",
      name: "Priya Sharma",
      title: "AI Product Lead, InnovateX"
    }
  ];

  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <Box display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" marginBottom={24}>
            Testimonials
          </Box>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Trusted by Leading AI Teams
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Hear from developers and teams who are building the future with Hanzo.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              delay={index * 0.1}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
