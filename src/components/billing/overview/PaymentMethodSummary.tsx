import { Box, H3, Text, XStack } from '@/gui'

import React from 'react';
import { CreditCard, ArrowRight } from 'lucide-react';
import BillingTabsLink from '../BillingTabsLink';

const PaymentMethodSummary = () => {
  return (
    <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
      <XStack display="flex" justifyContent="space-between" alignItems="center" marginBottom={16}>
        <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500">Payment Method</H3>
        <BillingTabsLink tabId="payment-methods">
          <Text display="flex" alignItems="center">
            Manage <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
          </Text>
        </BillingTabsLink>
      </XStack>
      <XStack display="flex" alignItems="center">
        <XStack height={40} width={56} backgroundColor="var(--neutral-800)" borderRadius="var(--radius)" display="flex" alignItems="center" justifyContent="center" marginRight={16}>
          <CreditCard size={24} color="var(--neutral-400)" />
        </XStack>
        <div>
          <Box fontWeight="500">Visa ending in 4242</Box>
          <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Expires 12/25</Box>
        </div>
      </XStack>
    </Box>
  );
};

export default PaymentMethodSummary;
