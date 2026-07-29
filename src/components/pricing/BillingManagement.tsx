import { Box, Button, H2, Paragraph, XStack } from '@/gui'

import React from "react";
import { CreditCard } from "lucide-react";

const BillingManagement = () => {
  return (
    <Box maxWidth="56rem" marginHorizontal="auto" marginBottom={64} padding={32} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.05)" backdropFilter="blur(24px)" WebkitBackdropFilter="blur(24px)" backgroundColor="var(--black)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "rgb(255 255 255 / 0.1)" }}>
      <XStack display="flex" alignItems="center" gap={16} marginBottom={20}>
        <CreditCard size={32} color="var(--white)" />
        <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="500">Billing Management</H2>
      </XStack>
      <Paragraph color="var(--neutral-300)" marginBottom={24} lineHeight="var(--leading-relaxed)">
        Manage your subscription easily. Need assistance? Join our Discord server for immediate support.
      </Paragraph>
      <XStack display="flex" flexWrap="wrap" gap={16}>
        <Button backgroundColor="var(--black)" color="var(--white)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" paddingHorizontal={24} paddingVertical={24} hoverStyle={{ backgroundColor: "var(--neutral-900)" }}>
          Manage Subscription
        </Button>
        <Button 
          variant="outline" 
          borderColor="rgb(255 255 255 / 0.1)" paddingHorizontal={24} paddingVertical={24} hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.05)" }}
          onClick={() => window.open('https://discord.com/invite/XthHQQj', '_blank')}
        >
          Join Discord
        </Button>
      </XStack>
    </Box>
  );
};

export default BillingManagement;
