import { Box, Button, H3, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Text, XStack } from '@/gui'
import React from 'react';
import { Download, ArrowLeft, Filter } from 'lucide-react';

import BillingTabsLink from './BillingTabsLink';

const BillingHistory = () => {
  const invoices = [
    { id: 'INV-001', date: 'Jun 15, 2024', amount: '$49.00', status: 'Paid', description: 'Pro Plan - Monthly' },
    { id: 'INV-002', date: 'May 15, 2024', amount: '$49.00', status: 'Paid', description: 'Pro Plan - Monthly' },
    { id: 'INV-003', date: 'Apr 15, 2024', amount: '$49.00', status: 'Paid', description: 'Pro Plan - Monthly' },
    { id: 'INV-004', date: 'Mar 15, 2024', amount: '$49.00', status: 'Paid', description: 'Pro Plan - Monthly' },
    { id: 'INV-005', date: 'Feb 15, 2024', amount: '$49.00', status: 'Paid', description: 'Pro Plan - Monthly' },
  ];

  return (
    <Box rowGap={32}>
      <XStack display="flex" alignItems="center" justifyContent="space-between">
        <BillingTabsLink tabId="overview" variant="ghost">
          <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><ArrowLeft size={16} /></Box> Back to Overview
        </BillingTabsLink>
        <Button variant="outline">
          <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Filter size={16} /></Box>
          Filter
        </Button>
      </XStack>
      
      <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
        <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" marginBottom={24}>Invoice History</H3>
        
        <Box overflowX="auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead textAlign="right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map(invoice => (
                <TableRow key={invoice.id}>
                  <TableCell fontWeight="500">{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.description}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>
                    <Text paddingHorizontal={8} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
                      {invoice.status}
                    </Text>
                  </TableCell>
                  <TableCell textAlign="right">
                    <Button variant="ghost" size="sm">
                      <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Download size={16} /></Box>
                      PDF
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

export default BillingHistory;
