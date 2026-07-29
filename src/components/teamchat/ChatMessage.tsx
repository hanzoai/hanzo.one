import { Box, Text, XStack } from '@/gui'

import React from "react";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: {
    id: number;
    sender: string;
    message: string;
    timestamp: string;
  };
  formatTimestamp: (timestamp: string) => string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, formatTimestamp }) => {
  return (
    <XStack
      display="flex" marginBottom={16} justifyContent={message.sender === "user" ? "flex-end" : "flex-start"}
    >
      {message.sender === "ai" && (
        <XStack backgroundColor="var(--surface-card-emphasis)" height={32} width={32} borderRadius="var(--radius-full)" display="flex" alignItems="center" justifyContent="center" marginRight={8} marginTop={4}>
          <Bot size={16} color="var(--white)" />
        </XStack>
      )}
      
      <Box
        maxWidth="var(--container-prose)" padding={12} borderRadius="var(--radius-lg)" backgroundColor={message.sender === "user" ? "rgb(255 255 255 / 0.3)" : "rgb(255 255 255 / 0.6)"} borderWidth={message.sender === "user" ? 1 : 1} borderColor={message.sender === "user" ? "rgb(255 255 255 / 0.3)" : "rgb(255 255 255 / 0.5)"}
      >
        <Box 
          fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" 
          dangerouslySetInnerHTML={{ 
            __html: message.message.replace(/```(.+?)```/gs, '<pre><code>$1</code></pre>').replace(/\n/g, '<br>') 
          }} 
        />
        <Box textAlign="right" marginTop={4}>
          <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)">
            {formatTimestamp(message.timestamp)}
          </Text>
        </Box>
      </Box>
      
      {message.sender === "user" && (
        <XStack backgroundColor="var(--surface-card-emphasis)" height={32} width={32} borderRadius="var(--radius-full)" display="flex" alignItems="center" justifyContent="center" marginLeft={8} marginTop={4}>
          <User size={16} color="var(--white)" />
        </XStack>
      )}
    </XStack>
  );
};

export default ChatMessage;
