import { Box, Button, H3, Text, XStack } from '@/gui'

import React from 'react';
import { Clock, Download, ArrowRight } from 'lucide-react';
import BillingTabsLink from '../BillingTabsLink';

const RecentInvoices = () => {
  return (
    <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
      <XStack display="flex" justifyContent="space-between" alignItems="center" marginBottom={16}>
        <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500">Recent Invoices</H3>
        <BillingTabsLink tabId="history">
          <Text display="flex" alignItems="center">
            View All <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
          </Text>
        </BillingTabsLink>
      </XStack>
      
      <Box rowGap={16}>
        <XStack display="flex" alignItems="center" justifyContent="space-between" padding={16} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)">
          <XStack display="flex" alignItems="center">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Clock size={20} color="var(--neutral-400)" /></Box>
            <div>
              <Box fontWeight="500">June 15, 2024</Box>
              <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Pro Plan - $49.00</Box>
            </div>
          </XStack>
          <Button variant="ghost" size="sm">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Download size={16} /></Box>
            PDF
          </Button>
        </XStack>
        
        <XStack display="flex" alignItems="center" justifyContent="space-between" padding={16} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)">
          <XStack display="flex" alignItems="center">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Clock size={20} color="var(--neutral-400)" /></Box>
            <div>
              <Box fontWeight="500">May 15, 2024</Box>
              <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Pro Plan - $49.00</Box>
            </div>
          </XStack>
          <Button variant="ghost" size="sm">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Download size={16} /></Box>
            PDF
          </Button>
        </XStack>
      </Box>
    </Box>
  );
};

export default RecentInvoices;
