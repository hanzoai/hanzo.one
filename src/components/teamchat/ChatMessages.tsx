import { Box, MotionBox, XStack } from '@/gui'

import React from "react";
import ChatMessage from "./ChatMessage";
import { Bot } from "lucide-react";

interface ChatMessagesProps {
  chatHistory: Array<{
    id: number;
    sender: string;
    message: string;
    timestamp: string;
  }>;
  isTyping: boolean;
  formatTimestamp: (timestamp: string) => string;
  endOfMessagesRef: React.RefObject<HTMLDivElement>;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ 
  chatHistory, 
  isTyping, 
  formatTimestamp,
  endOfMessagesRef
}) => {
  return (
    <Box flex={1} overflowY="auto" padding={16} rowGap={16}>
      {chatHistory.map((chat) => (
        <ChatMessage 
          key={chat.id} 
          message={chat} 
          formatTimestamp={formatTimestamp} 
        />
      ))}
      
      {isTyping && (
        <XStack display="flex" justifyContent="flex-start" marginBottom={16}>
          <XStack backgroundColor="var(--surface-card-emphasis)" height={32} width={32} borderRadius="var(--radius-full)" display="flex" alignItems="center" justifyContent="center" marginRight={8}>
            <Bot size={16} color="var(--white)" />
          </XStack>
          <Box backgroundColor="var(--surface-overlay)" paddingVertical={12} paddingHorizontal={16} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--border-strong)">
            <XStack display="flex" columnGap={4}>
              <MotionBox animate={{ y: [0, -25, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} height={8} width={8} backgroundColor="var(--neutral-400)" borderRadius="var(--radius-full)"></MotionBox>
              <MotionBox animate={{ y: [0, -25, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} height={8} width={8} backgroundColor="var(--neutral-400)" borderRadius="var(--radius-full)" style={{ animationDelay: "0.2s" }}></MotionBox>
              <MotionBox animate={{ y: [0, -25, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} height={8} width={8} backgroundColor="var(--neutral-400)" borderRadius="var(--radius-full)" style={{ animationDelay: "0.4s" }}></MotionBox>
            </XStack>
          </Box>
        </XStack>
      )}
      
      <div ref={endOfMessagesRef} />
    </Box>
  );
};

export default ChatMessages;
