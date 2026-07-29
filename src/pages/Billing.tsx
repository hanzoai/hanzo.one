import { AnimatedHeading, AnimatedSection, Box, Button, H2, XStack } from '@/gui'

import React, { useState, useEffect } from "react";
import BillingOverview from "@/components/billing/BillingOverview";
import { useLocation, useNavigate } from "react-router-dom";
import { CreditCard, FileText } from "lucide-react";

const BillingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AnimatedSection>
      <AnimatedHeading>
        <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="500" marginBottom={32}>Billing</H2>
      </AnimatedHeading>

      <XStack marginBottom={32} display="flex" flexWrap="wrap" gap={16}>
        <Button 
          variant="outline" 
          onClick={() => navigate('/account/invoices')}
          backgroundColor="var(--black)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" color="var(--white)" display="flex" alignItems="center" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
        >
          <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><FileText size={16} /></Box>
          View Billing History
        </Button>
        <Button 
          variant="outline" 
          onClick={() => navigate('/account/billing#payment-methods')}
          backgroundColor="var(--black)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" color="var(--white)" display="flex" alignItems="center" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
        >
          <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><CreditCard size={16} /></Box>
          Manage Payment Methods
        </Button>
      </XStack>
      
      <div>
        <BillingOverview />
      </div>
    </AnimatedSection>
  );
};

export default BillingPage;
