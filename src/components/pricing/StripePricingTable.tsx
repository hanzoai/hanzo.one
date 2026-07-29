import { Anchor, Box, Paragraph } from '@/gui'
import React from "react";

const StripePricingTable = () => {
  return (
    <Box maxWidth="var(--container-wide)" marginHorizontal="auto" marginBottom={64} textAlign="center" paddingVertical={32}>
      <Paragraph color="var(--muted-foreground)" marginBottom={16}>Manage your subscription and billing</Paragraph>
      <Anchor tap
        href="https://billing.hanzo.ai"
        display="inline-flex" alignItems="center" gap={8} borderRadius="var(--radius-md)" backgroundColor="var(--primary)" paddingHorizontal={24} paddingVertical={12} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--primary-foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }}
      >
        Go to Billing Portal
      </Anchor>
    </Box>
  );
};

export default StripePricingTable;
