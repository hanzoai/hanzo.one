import { Box, XStack, YStack } from '@/gui'

import React from "react";
import { MessageInterface } from "./types";

interface ChatProps {
  conversation: MessageInterface[];
  promptText: string;
  setPromptText: (text: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const Chat = ({ 
  conversation, 
  promptText, 
  setPromptText, 
  handleSubmit 
}: ChatProps) => {
  return (
    <YStack flex={1} display="flex" flexDirection="column" overflow="hidden">
      {/* Messages */}
      <Box flex={1} overflowY="auto" padding={16} rowGap={16}>
        {conversation.map((message, i) => (
          <XStack 
            key={i} 
            display="flex" justifyContent={message.role === "user" ? "flex-end" : "flex-start"}
          >
            <Box 
              maxWidth="var(--container-prose)" padding={12} borderRadius="var(--radius-lg)" backgroundColor={message.role === "user" ? "rgb(255 255 255 / 0.3)" : "rgb(255 255 255 / 0.6)"} borderWidth={message.role === "user" ? 1 : 1} borderColor={message.role === "user" ? "rgb(255 255 255 / 0.3)" : "rgb(255 255 255 / 0.5)"}
            >
              <Box 
                fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" 
                dangerouslySetInnerHTML={{ 
                  __html: message.content.replace(/```(.+?)```/gs, '<pre><code>$1</code></pre>') 
                }} 
              />
            </Box>
          </XStack>
        ))}
      </Box>
      
      {/* Input */}
      <Box padding={16} borderTopWidth={1} borderColor="var(--neutral-800)">
        <form onSubmit={handleSubmit}>
          <XStack display="flex" alignItems="center">
            <Box display="inline-block" minHeight={44}
              type="text"
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="Send a message..."
              render="input" flex={1} backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-700)" borderTopLeftRadius="var(--radius-md)" borderBottomLeftRadius="var(--radius-md)" paddingHorizontal={16} paddingVertical={8} focusStyle={{ outlineStyle: "solid", outlineWidth: 2, outlineColor: "var(--neutral-500)" }}
            />
            <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} 
              type="submit" 
              render="button" borderTopLeftRadius="0" borderBottomLeftRadius="0" backgroundColor="var(--neutral-600)" paddingHorizontal={16} paddingVertical={8} color="var(--white)" fontWeight="500" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
            >
              Send
            </Box>
          </XStack>
        </form>
      </Box>
    </YStack>
  );
};

export default Chat;
