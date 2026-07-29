import { Box, Grid, H2, H3, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { CheckCircle } from "lucide-react";

const IntegrationCategory = ({ title, items }: { title: string, items: string[] }) => {
  return (
    <Box marginBottom={32}>
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={16}>{title}</H3>
      <Grid render="ul" display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" columnGap={24} rowGap={8} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
        {items.map((item, index) => (
          <XStack key={index} render="li" display="flex" alignItems="center">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><CheckCircle size={20} color="var(--foreground)" /></Box>
            <Text color="var(--neutral-300)">{item}</Text>
          </XStack>
        ))}
      </Grid>
    </Box>
  );
};

const Integrations = () => {
  const integrationCategories = [
    {
      title: "Payment Gateways",
      items: ["Stripe", "PayPal", "Adyen", "Square", "Braintree", "Klarna", "Affirm", "Apple Pay"]
    },
    {
      title: "Marketing & CRM",
      items: ["Mailchimp", "Klaviyo", "HubSpot", "Salesforce", "Segment", "Meta Pixel", "Google Analytics", "Customer.io"]
    },
    {
      title: "Shipping & Fulfillment",
      items: ["ShipStation", "ShipBob", "EasyPost", "FedEx", "UPS", "USPS", "DHL", "AfterShip"]
    },
    {
      title: "Accounting & ERP",
      items: ["QuickBooks", "Xero", "NetSuite", "SAP", "Avalara", "TaxJar", "Sage", "Microsoft Dynamics"]
    }
  ];

  return (
    <Box render="section" paddingVertical={64} backgroundColor="var(--black)">
      <Box marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box textAlign="center" marginBottom={48}>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700">Integrations</H2>
          <Paragraph marginTop={16} color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
            Connect seamlessly with your existing technology stack and third-party services.
          </Paragraph>
        </Box>
        
        <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32}>
          {integrationCategories.map((category, index) => (
            <IntegrationCategory 
              key={index}
              title={category.title}
              items={category.items}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Integrations;
