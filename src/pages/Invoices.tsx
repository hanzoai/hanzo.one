import { AnimatedHeading, AnimatedSection, Box } from '@/gui'

import React from 'react';
import InvoicesList from '@/components/invoices/InvoicesList';
import InvoicesSummary from '@/components/invoices/InvoicesSummary';

const Invoices = () => {
  return (
    <AnimatedSection>
      <AnimatedHeading>Invoices</AnimatedHeading>
      
      <Box rowGap={32}>
        <InvoicesSummary />
        <InvoicesList />
      </Box>
    </AnimatedSection>
  );
};

export default Invoices;
