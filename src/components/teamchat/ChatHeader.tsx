import { Button, H3, Paragraph, XStack } from '@/gui'

import React from "react";
import { Bot, Settings } from "lucide-react";

const ChatHeader: React.FC = () => {
  return (
    <XStack backgroundColor="var(--surface-overlay)" padding={16} borderBottomWidth={1} borderColor="var(--neutral-800)" display="flex" alignItems="center">
      <XStack backgroundColor="var(--neutral-600)" height={32} width={32} borderRadius="var(--radius-full)" display="flex" alignItems="center" justifyContent="center" marginRight={12}>
        <Bot size={16} color="var(--white)" />
      </XStack>
      <div>
        <H3 fontWeight="500">Hanzo Assistant</H3>
        <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)">Powered by GPT-4o</Paragraph>
      </div>
      <Button variant="ghost" size="icon" marginLeft="auto" color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }}>
        <Settings size={20} />
      </Button>
    </XStack>
  );
};

export default ChatHeader;
