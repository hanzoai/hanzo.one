import { Box, Button, Grid, H2, H3, Paragraph, Text, XStack, YStack } from '@/gui'

import React from "react";
import { ArrowRight } from "lucide-react";

interface UseCaseCardProps {
  title: string;
  description: string;
  image?: string;
  color: string;
  index: number;
}

const UseCaseCard = ({ title, description, image, color, index }: UseCaseCardProps) => {
  return (
    <YStack position="relative" overflow="hidden" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" display="flex" flexDirection="column" height="100%" $md={index % 2 === 0 ? { flexDirection: "row-reverse" } : { flexDirection: "row" }}>
      <YStack width="100%" padding={32} display="flex" flexDirection="column" justifyContent="center" $md={{ width: "50%" }}>
        <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16} color="var(--foreground)">{title}</H3>
        <Paragraph color="var(--neutral-400)" marginBottom={16}>{description}</Paragraph>
        <Button variant="link" size="sm" color="var(--foreground)" padding={0} width="fit-content" hoverStyle={{ color: "var(--foreground)" }}>
          Learn more <Box render="span" display="inline-flex" alignItems="center" marginLeft={4}><ArrowRight size={16} /></Box>
        </Button>
      </YStack>
      <Box width="100%" backgroundColor="var(--surface-card-emphasis)" height={192} position="relative" overflow="hidden" $md={{ width: "50%", height: "auto" }}>
        <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), transparent)" opacity={0.5} />
        <XStack position="absolute" top={0} right={0} bottom={0} left={0} display="flex" alignItems="center" justifyContent="center">
          <Text fontSize="var(--text-9xl)" lineHeight="var(--leading-9xl)" fontWeight="700" opacity={0.1} color="var(--foreground)">{index + 1}</Text>
        </XStack>
      </Box>
    </YStack>
  );
};

const UseCases = () => {
  const useCases = [
    {
      title: "Direct-to-Consumer (DTC) Brands",
      description: "Create unique shopping experiences that reflect your brand identity with custom storefronts powered by our API-first platform.",
      color: "amber"
    },
    {
      title: "Multi-channel Retailers",
      description: "Sell seamlessly across web, mobile, social media, and marketplaces with a unified backend for inventory and orders.",
      color: "amber"
    },
    {
      title: "Subscription Businesses",
      description: "Build flexible subscription models with automated recurring billing, customizable frequencies, and easy customer management.",
      color: "amber"
    },
    {
      title: "Enterprise B2B Commerce",
      description: "Power complex B2B sales with account-based pricing, bulk ordering, approval workflows, and personalized catalogs.",
      color: "amber"
    }
  ];

  return (
    <Box render="section" paddingVertical={64} backgroundColor="var(--black)">
      <Box marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box textAlign="center" marginBottom={48}>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700">Use Cases</H2>
          <Paragraph marginTop={16} color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
            See how businesses leverage Hanzo Commerce to create exceptional shopping experiences.
          </Paragraph>
        </Box>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32}>
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              title={useCase.title}
              description={useCase.description}
              color={useCase.color}
              index={index}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default UseCases;
