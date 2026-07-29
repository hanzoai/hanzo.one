import { Box, Button, H2, Paragraph, XStack } from '@/gui'

import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <Box marginTop={64} textAlign="center">
      <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Ready to Get Started?</H2>
      <Paragraph color="var(--neutral-400)" marginBottom={32} maxWidth="42rem" marginHorizontal="auto">
        Join our community of innovators and start building with your AI team today.
      </Paragraph>
      <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={16}>
        <Button 
          size="lg" 
          backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
          onClick={() => window.open('https://hanzo.chat', '_blank')}
        >
          Try Hanzo Chat
          <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
        </Button>
        <Button 
          size="lg" 
          backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
          onClick={() => window.open('https://hanzo.bot', '_blank')}
        >
          Try Hanzo Bot
          <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
        </Button>
      </XStack>
    </Box>
  );
};

export default CallToAction;
