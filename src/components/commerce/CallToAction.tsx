import { Box, Button, Grid, H2, H3, Paragraph, YStack } from '@/gui'

import React from "react";
import { ArrowRight, ShoppingCart, Book, Code } from "lucide-react";

const CallToAction = () => {
  return (
    <Box render="section" paddingVertical={64} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))">
      <Box marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center" marginBottom={40}>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24}>Ready to Transform Your E-commerce Experience?</H2>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-300)" marginBottom={32}>
            Join thousands of businesses that trust Hanzo Commerce to power their online stores.
          </Paragraph>
          
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            <YStack backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} display="flex" flexDirection="column" alignItems="center">
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><ShoppingCart size={48} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={8}>Start Selling</H3>
              <Paragraph color="var(--neutral-400)" marginBottom={16} textAlign="center">Launch your store with our easy-to-use platform</Paragraph>
              <Button 
                marginTop="auto" backgroundColor="var(--neutral-500)" color="var(--pure-black)" hoverStyle={{ backgroundColor: "var(--neutral-600)" }}
                onClick={() => window.open('https://console.hanzo.ai', '_blank')}
              >
                Get Started <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
              </Button>
            </YStack>
            
            <YStack backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} display="flex" flexDirection="column" alignItems="center">
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Book size={48} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={8}>Documentation</H3>
              <Paragraph color="var(--neutral-400)" marginBottom={16} textAlign="center">Explore our guides and API references</Paragraph>
              <Button 
                marginTop="auto" backgroundColor="var(--neutral-500)" color="var(--pure-black)" hoverStyle={{ backgroundColor: "var(--neutral-600)" }}
                onClick={() => window.open('https://docs.hanzo.ai/commerce', '_blank')}
              >
                View Docs <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
              </Button>
            </YStack>
            
            <YStack backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} display="flex" flexDirection="column" alignItems="center">
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Code size={48} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={8}>For Developers</H3>
              <Paragraph color="var(--neutral-400)" marginBottom={16} textAlign="center">Integrate our APIs into your applications</Paragraph>
              <Button 
                marginTop="auto" backgroundColor="var(--neutral-500)" color="var(--pure-black)" hoverStyle={{ backgroundColor: "var(--neutral-600)" }}
                onClick={() => window.open('https://docs.hanzo.ai/api', '_blank')}
              >
                API Reference <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
              </Button>
            </YStack>
          </Grid>
        </Box>
        
        <Box backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" padding={24} textAlign="center" maxWidth="var(--container-prose)" marginHorizontal="auto">
          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>Need a Custom Solution?</H3>
          <Paragraph color="var(--neutral-300)" marginBottom={24}>
            Our team of experts can help you design and implement a tailored e-commerce solution for your unique business needs.
          </Paragraph>
          <Button 
            variant="outline" 
            borderColor="var(--border-strong)" color="var(--foreground)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
            onClick={() => window.open('https://hanzo.ai/contact', '_blank')}
          >
            Contact Sales
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CallToAction;
