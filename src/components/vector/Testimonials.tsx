import { Box, Grid, H2, H3, H4, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "After evaluating multiple vector databases, we chose Hanzo Vector for its impressive performance and scalability. It handles our billion-vector dataset with consistent sub-10ms query times.",
      author: "Sophia Chen",
      position: "VP of AI Engineering",
      company: "TechGlobal"
    },
    {
      quote: "Hanzo Vector's ability to handle hybrid search across both vectors and metadata has been a game-changer for our recommendation system. The integration was seamless and the performance boost was immediate.",
      author: "Michael Rodriguez",
      position: "Senior Data Scientist",
      company: "RecoAI"
    },
    {
      quote: "We migrated from a competitor to Hanzo Vector and saw a 7x performance improvement overnight. The migration tools made the process painless, and the support team was exceptional throughout.",
      author: "Aisha Johnson",
      position: "CTO",
      company: "SearchWave"
    }
  ];

  const companyLogos = [
    "IKEA", "NVIDIA", "SmartNews", "Walmart", "Shopee", 
    "Tokopedia", "Shutterstock", "AT&T", "ZipRecruiter", "IBM", 
    "Bosch", "eBay", "Inflection", "Intuit", "NewRelic"
  ];

  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={-160} right={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      <Box position="absolute" bottom={-160} left={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Loved by GenAI Developers
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Hear what our users say about building with Hanzo Vector
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={80} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {testimonials.map((testimonial, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32} position="relative"
            >
              <Box position="absolute" top={-16} left={32} fontSize="var(--text-5xl)" lineHeight="var(--leading-5xl)" color="var(--neutral-500)">"</Box>
              <Paragraph color="var(--neutral-300)" marginBottom={32} position="relative" zIndex={10} paddingTop={16}>
                {testimonial.quote}
              </Paragraph>
              <div>
                <H4 color="var(--white)" fontWeight="600">{testimonial.author}</H4>
                <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{testimonial.position}, {testimonial.company}</Paragraph>
              </div>
            </MotionBox>
          ))}
        </Grid>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center"
        >
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--white)" marginBottom={32}>
            Trusted for Production Workloads
          </H3>
          
          <XStack display="flex" flexWrap="wrap" justifyContent="center" columnGap={32} rowGap={24}>
            {companyLogos.map((company, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                color="var(--neutral-500)" fontWeight="500" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)"
              >
                {company}
              </MotionBox>
            ))}
          </XStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Testimonials;
