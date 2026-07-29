import { Box, Grid, H2, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  // Example logos - in a real implementation, these would be actual logo images
  const logoItems = [
    { name: 'Microsoft', class: 'h-7' },
    { name: 'Airbnb', class: 'h-6' },
    { name: 'Netflix', class: 'h-6' },
    { name: 'Stripe', class: 'h-8' },
    { name: 'Shopify', class: 'h-6' },
    { name: 'Spotify', class: 'h-7' },
    { name: 'Slack', class: 'h-7' },
    { name: 'Amazon', class: 'h-6' }
  ];

  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--neutral-950)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24}>
            Trusted by Industry Leaders
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Powering AI innovation at organizations of all sizes, from startups to Fortune 500 companies
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 48 }}>
          {logoItems.map((logo, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
              flexDirection="row" display="flex" alignItems="center" justifyContent="center" padding={24} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }}
            >
              {/* In a real implementation, this would be an image */}
              <Box color="var(--neutral-400)" fontWeight="600" fontSize="var(--text-xl)" lineHeight="var(--leading-xl)">
                {logo.name}
              </Box>
            </MotionBox>
          ))}
        </Grid>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          marginTop={80} display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
        >
          <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}>
            <XStack display="flex" alignItems="center" marginBottom={8}>
              <XStack display="flex">
                {[...Array(5)].map((_, i) => (
                  <Box display="inline-block" 
                    key={i} 
                    render="svg" height={20} width={20} color="var(--foreground)" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </Box>
                ))}
              </XStack>
              <Text marginLeft={8} color="var(--white)" fontWeight="500">5.0</Text>
            </XStack>
            <Paragraph color="var(--neutral-300)" marginBottom={16}>
              "Hanzo's AI platform has transformed our ability to ship AI features quickly. What used to take months now takes days."
            </Paragraph>
            <XStack display="flex" alignItems="center">
              <XStack height={40} width={40} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" color="var(--foreground)" fontWeight="700">JD</XStack>
              <Box marginLeft={12}>
                <Box color="var(--white)" fontWeight="500">Jane Doe</Box>
                <Box color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">CTO, TechInnovate</Box>
              </Box>
            </XStack>
          </Box>

          <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}>
            <XStack display="flex" alignItems="center" marginBottom={8}>
              <XStack display="flex">
                {[...Array(5)].map((_, i) => (
                  <Box display="inline-block" 
                    key={i} 
                    render="svg" height={20} width={20} color="var(--foreground)" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </Box>
                ))}
              </XStack>
              <Text marginLeft={8} color="var(--white)" fontWeight="500">5.0</Text>
            </XStack>
            <Paragraph color="var(--neutral-300)" marginBottom={16}>
              "The observability features are game-changing. We finally have full visibility into our AI systems in production."
            </Paragraph>
            <XStack display="flex" alignItems="center">
              <XStack height={40} width={40} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" color="var(--foreground)" fontWeight="700">MS</XStack>
              <Box marginLeft={12}>
                <Box color="var(--white)" fontWeight="500">Michael Smith</Box>
                <Box color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">AI Lead, EnterpriseAI</Box>
              </Box>
            </XStack>
          </Box>

          <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}>
            <XStack display="flex" alignItems="center" marginBottom={8}>
              <XStack display="flex">
                {[...Array(5)].map((_, i) => (
                  <Box display="inline-block" 
                    key={i} 
                    render="svg" height={20} width={20} color="var(--foreground)" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </Box>
                ))}
              </XStack>
              <Text marginLeft={8} color="var(--white)" fontWeight="500">5.0</Text>
            </XStack>
            <Paragraph color="var(--neutral-300)" marginBottom={16}>
              "Our team went from prototype to production in just days. The SDK is intuitive and the documentation is excellent."
            </Paragraph>
            <XStack display="flex" alignItems="center">
              <XStack height={40} width={40} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" color="var(--foreground)" fontWeight="700">EJ</XStack>
              <Box marginLeft={12}>
                <Box color="var(--white)" fontWeight="500">Emma Johnson</Box>
                <Box color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">VP Engineering, StartupX</Box>
              </Box>
            </XStack>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default TrustedBy;
