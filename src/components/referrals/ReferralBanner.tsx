import { Box, Button, H2, Paragraph, Text, XStack, YStack } from '@/gui'

import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReferralBanner = () => {
  const navigate = useNavigate();

  const handleReferralClick = () => {
    navigate('/referrals');
  };

  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.05), rgb(255 255 255 / 0.05))"></Box>
      <Box position="absolute" top={-160} right={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      <Box position="absolute" bottom={-160} left={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <Box backdropFilter="blur(24px)" WebkitBackdropFilter="blur(24px)" backgroundColor="rgb(0 0 0 / 0.4)" borderWidth={1} borderColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-xl)" padding={40}>
          <YStack display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" gap={32} $md={{ flexDirection: "row" }}>
            <Box flex={1}>
              <XStack display="flex" alignItems="center" marginBottom={20}>
                <Box render="span" display="inline-flex" alignItems="center" marginRight={16}><Gift size={32} color="var(--foreground)" /></Box>
                <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="500" $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>Join Our Referral Program</H2>
              </XStack>
              <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-relaxed)" color="var(--neutral-300)" marginBottom={24}>
                Get <Text color="var(--foreground)" fontWeight="500">$5 in credit</Text> every time a friend signs up and pays for any plan. 
                Share the power of Hanzo AI with your network and earn rewards!
              </Paragraph>
            </Box>
            
            <Button 
              onClick={handleReferralClick}
              size="lg" 
              backgroundColor="var(--black)" color="var(--white)" paddingHorizontal={32} paddingVertical={28} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
            >
              Start Referring <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
            </Button>
          </YStack>
        </Box>
      </Box>
    </Box>
  );
};

export default ReferralBanner;
