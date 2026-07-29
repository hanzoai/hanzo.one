import { Box, Button, H3, Text, XStack } from '@/gui'

import React from 'react';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useBilling } from '@/contexts/BillingContext';

const CreditBalance = () => {
  const { billingInfo } = useBilling();
  const navigate = useNavigate();
  
  const handleAddCredits = () => {
    navigate('/account/purchase-credits');
  };

  return (
    <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
      <XStack display="flex" justifyContent="space-between" alignItems="center" marginBottom={16}>
        <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500">Credit Balance</H3>
        <Button onClick={handleAddCredits}>
          <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Plus size={16} /></Box>
          Add Credits
        </Button>
      </XStack>
      
      <XStack display="flex" alignItems="center">
        <XStack height={64} width={64} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" display="flex" alignItems="center" justifyContent="center" marginRight={16}>
          <Text fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)">$</Text>
        </XStack>
        <div>
          <Box fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700">${billingInfo.credits.toFixed(2)}</Box>
          <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginTop={4}>Available credits</Box>
        </div>
      </XStack>
    </Box>
  );
};

export default CreditBalance;
