import { Box, Button, H4, Paragraph, Popover, PopoverContent, PopoverTrigger, XStack } from '@/gui'

import React from "react";
import { User, HelpCircle } from "lucide-react";

const UserExplanation = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          display="flex" alignItems="center" gap={8} color="var(--neutral-400)" borderColor="var(--neutral-800)" backgroundColor="transparent" hoverStyle={{ color: "var(--white)" }}
        >
          <HelpCircle size={16} />
          What are users?
        </Button>
      </PopoverTrigger>
      <PopoverContent width={320} backgroundColor="var(--neutral-900)" borderColor="var(--neutral-800)" color="var(--white)" padding={16}>
        <Box rowGap={12}>
          <XStack display="flex" alignItems="center" gap={8}>
            <User size={20} color="var(--neutral-400)" />
            <H4 fontWeight="500" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">Platform Users</H4>
          </XStack>
          <Paragraph color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
            Users are individuals with login credentials to your platform. 
            Each user can access the platform's features according to your plan. 
            Team plans are billed per user with login access to your workspace.
          </Paragraph>
          <Paragraph color="var(--neutral-400)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
            Note: End-users of your applications don't count toward this limit 
            unless they need direct access to the platform.
          </Paragraph>
        </Box>
      </PopoverContent>
    </Popover>
  );
};

export default UserExplanation;
