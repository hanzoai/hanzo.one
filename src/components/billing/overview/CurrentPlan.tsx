import { Box, Button, H3, XStack } from '@/gui'

import React from 'react';
import { useNavigate } from 'react-router-dom';

const CurrentPlan = () => {
  const navigate = useNavigate();
  
  const handleUpgradePlan = () => {
    navigate('/account/billing-plans');
  };

  return (
    <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" marginBottom={16}>Current Plan</H3>
      <XStack display="flex" alignItems="center" justifyContent="space-between">
        <div>
          <Box fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700">Pro Plan</Box>
          <Box color="var(--neutral-400)" marginTop={4}>$49/month, billed annually</Box>
        </div>
        <Button onClick={handleUpgradePlan}>Upgrade Plan</Button>
      </XStack>
      <XStack marginTop={24} paddingTop={24} borderTopWidth={1} borderColor="var(--neutral-800)" display="flex" alignItems="center" justifyContent="space-between">
        <Box color="var(--neutral-400)">Next billing date: July 15, 2024</Box>
        <Button variant="outline" size="sm">Cancel Subscription</Button>
      </XStack>
    </Box>
  );
};

export default CurrentPlan;
