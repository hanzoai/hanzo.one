import { Box, Button, Dialog, DialogTrigger, H3, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { Check } from "lucide-react";

interface PricingPlanProps {
  name: string;
  icon: React.ReactNode;
  price: string;
  billingPeriod?: string;
  description: string;
  features: string[];
  popular?: boolean;
  customColor?: string;
  showDetails?: boolean;
  githubLink?: boolean;
}

const PricingPlan = ({
  name,
  icon,
  price,
  billingPeriod,
  description,
  features,
  popular = false,
  customColor,
  showDetails = false,
  githubLink = false
}: PricingPlanProps) => {
  // Use monochrome design
  const borderColor = popular 
    ? "border-gray-700" 
    : "border-gray-800";
  
  const bgColor = popular 
    ? "bg-gray-900/30" 
    : "bg-[var(--black)]/50";

  // Button color - prominent option gets white bg, others get outline
  const buttonClass = popular 
    ? "bg-[var(--white)] text-black border border-gray-300 hover:bg-transparent hover:text-[var(--white)] hover:border-[var(--white)] transition-all duration-300" 
    : "bg-transparent border border-white/20 text-white hover:bg-[var(--white)] hover:text-black transition-all duration-300";

  const renderButton = () => {
    if (githubLink || name === "Dev") {
      return (
        <Button
          width="100%" marginBottom={32}
          onClick={() => {
            window.open('https://github.com/hanzoai/', '_blank');
          }}
        >
          Get on GitHub
        </Button>
      );
    } else if (name === "Team" && showDetails) {
      return (
        <Button
          width="100%" marginBottom={32}
          onClick={() => {
            const teamConfigSection = document.getElementById('team-config-section');
            if (teamConfigSection) {
              teamConfigSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Configure Plan
        </Button>
      );
    } else if (name === "Pro" && showDetails) {
      return (
        <Button
          width="100%" marginBottom={32}
          onClick={() => {
            const teamConfigSection = document.getElementById('team-config-section');
            if (teamConfigSection) {
              window.history.pushState({}, '', window.location.pathname + '?from=pro');
              teamConfigSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Get Started
        </Button>
      );
    } else {
      return (
        <Button width="100%" marginBottom={32}>
          Get Started
        </Button>
      );
    }
  };

  return (
    <Box 
      position="relative" borderRadius="var(--radius-2xl)" borderWidth={1} padding={32} backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" transition="all 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ borderColor: "var(--neutral-700)", backgroundColor: "rgb(255 255 255 / 0.2)" }}
    >
      {popular && (
        <Box position="absolute" top={-16} left="50%" x="-50%">
          <Box backgroundColor="var(--white)" color="var(--pure-black)" paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">
            Most Popular
          </Box>
        </Box>
      )}

      <XStack display="flex" alignItems="center" gap={12} marginBottom={16}>
        {icon}
        <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600">{name}</H3>
      </XStack>
      
      <Box marginBottom={24}>
        <XStack display="flex" alignItems="baseline" gap={4} marginBottom={8}>
          <Text fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700">{price}</Text>
          {billingPeriod && (
            <Text color="var(--neutral-400)">{billingPeriod}</Text>
          )}
        </XStack>
        <Paragraph color="var(--neutral-400)">{description}</Paragraph>
      </Box>

      {renderButton()}

      <Box render="ul" rowGap={16}>
        {features.map((feature) => (
          <XStack key={feature} render="li" display="flex" alignItems="flex-start" gap={12}>
            <Box render="span" display="inline-flex" alignItems="center" marginTop={2}><Check size={20} color="var(--neutral-400)" /></Box>
            <Text color="var(--neutral-300)">{feature}</Text>
          </XStack>
        ))}
      </Box>
    </Box>
  );
};

export default PricingPlan;
