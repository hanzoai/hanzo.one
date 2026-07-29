import { AnimatedHeading, AnimatedSection, Box, Button, Input, Label, XStack, toast } from '@/gui'

import React from 'react';
import { useAccount } from '@/contexts/AccountContext';

const AccountSettings = () => {
  const { user, updateUserProfile } = useAccount();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Settings updated successfully');
  };

  return (
    <AnimatedSection>
      <AnimatedHeading>Account Settings</AnimatedHeading>
      
      <Box onSubmit={handleSubmit} render="form" rowGap={24} maxWidth="36rem" marginTop={32}>
        <Box rowGap={8}>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={user?.email || ''}
            disabled
            backgroundColor="rgb(255 255 255 / 0.2)" borderColor="var(--border-strong)"
          />
        </Box>

        <Box rowGap={8}>
          <Label htmlFor="notifications">Email Notifications</Label>
          <Box rowGap={16}>
            <XStack display="flex" alignItems="center" columnGap={8}>
              <Box display="inline-block" minHeight={44}
                type="checkbox"
                id="marketing"
                render="input" borderRadius="var(--radius)" borderColor="var(--border-strong)" backgroundColor="rgb(255 255 255 / 0.2)"
                defaultChecked
              />
              <label htmlFor="marketing">Marketing updates</label>
            </XStack>
            <XStack display="flex" alignItems="center" columnGap={8}>
              <Box display="inline-block" minHeight={44}
                type="checkbox"
                id="security"
                render="input" borderRadius="var(--radius)" borderColor="var(--border-strong)" backgroundColor="rgb(255 255 255 / 0.2)"
                defaultChecked
              />
              <label htmlFor="security">Security alerts</label>
            </XStack>
          </Box>
        </Box>

        <Button type="submit" backgroundColor="var(--neutral-900)" borderStyle="none" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}>
          Save Changes
        </Button>
      </Box>
    </AnimatedSection>
  );
};

export default AccountSettings;
