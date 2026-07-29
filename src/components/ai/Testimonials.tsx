import { Box, Grid, H2, H3, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Hanzo's AI Engineering Platform has completely transformed how we build and deploy AI applications. What used to take us weeks now takes days.",
      author: "Sarah Chen",
      title: "CTO, Quantum Innovations",
      image: "/placeholder.svg"
    },
    {
      quote: "The unified approach to model deployment, monitoring, and scaling has allowed our team to focus on building great AI experiences instead of wrestling with infrastructure.",
      author: "James Wilson",
      title: "Head of AI, GlobalTech",
      image: "/placeholder.svg"
    },
    {
      quote: "We evaluated several AI platforms, but Hanzo stood out for its developer experience and comprehensive observability features. It's made monitoring our AI in production so much easier.",
      author: "Maria Rodriguez",
      title: "Principal Engineer, TechFlow",
      image: "/placeholder.svg"
    }
  ];

  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      {/* Background elements */}
      <Box position="absolute" top={0} left={0} width="100%" height="100%" overflow="hidden" pointerEvents="none">
        <Box position="absolute" bottom={-256} right={-128} width={384} height={384} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      </Box>

      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Experiences from Our Community
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Hear from engineering teams who are building the next generation of AI-powered applications
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {testimonials.map((testimonial, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
              backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" position="relative" hoverStyle={{ backgroundColor: "var(--surface-card)" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" position="absolute" top={24} right={24}><Quote size={24} color="rgb(255 255 255 / 0.4)" /></Box>
              <Paragraph color="var(--neutral-300)" marginBottom={32} marginTop={16}>"{testimonial.quote}"</Paragraph>
              <XStack display="flex" alignItems="center">
                <Box height={48} width={48} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" overflow="hidden">
                  <Box display="inline-block" 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    render="img" height="100%" width="100%" objectFit="cover" opacity={0.7} 
                  />
                </Box>
                <Box marginLeft={16}>
                  <Box color="var(--white)" fontWeight="500">{testimonial.author}</Box>
                  <Box color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{testimonial.title}</Box>
                </Box>
              </XStack>
            </MotionBox>
          ))}
        </Grid>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          marginTop={80} backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32} $md={{ padding: 48 }}
        >
          <YStack display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" $md={{ flexDirection: "row" }}>
            <Box marginBottom={32} $md={{ marginBottom: 0, marginRight: 32, width: "66.666667%" }}>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)" marginBottom={16}>
                The AI Engineering Community
              </H3>
              <Paragraph color="var(--neutral-300)" marginBottom={24}>
                Join thousands of AI engineers and developers building the future of intelligent applications. 
                Share experiences, get support, and collaborate on best practices.
              </Paragraph>
              <XStack display="flex" flexWrap="wrap" gap={16}>
                <XStack display="flex" alignItems="center" backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8}>
                  <Box width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" marginRight={8}></Box>
                  <Text color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">4,500+ community members</Text>
                </XStack>
                <XStack display="flex" alignItems="center" backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8}>
                  <Box width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" marginRight={8}></Box>
                  <Text color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Weekly office hours</Text>
                </XStack>
                <XStack display="flex" alignItems="center" backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8}>
                  <Box width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" marginRight={8}></Box>
                  <Text color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Dedicated support team</Text>
                </XStack>
              </XStack>
            </Box>
            <XStack display="flex" justifyContent="center" $md={{ width: "33.333333%", justifyContent: "flex-end" }}>
              <XStack display="flex" columnGap={16}>
                {[...Array(5)].map((_, i) => (
                  <XStack 
                    key={i} 
                    height={48} width={48} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={2} borderColor="var(--neutral-900)" display="flex" alignItems="center" justifyContent="center" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500"
                  >
                    {["JS", "MK", "AL", "TN", "RW"][i]}
                  </XStack>
                ))}
                <XStack height={48} width={48} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={2} borderColor="var(--neutral-900)" display="flex" alignItems="center" justifyContent="center" color="var(--white)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">
                  +2.5k
                </XStack>
              </XStack>
            </XStack>
          </YStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Testimonials;
