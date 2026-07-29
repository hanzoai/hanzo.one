import { Box, Button, XStack } from '@/gui'

import React from "react";
import { Send, RefreshCw, Camera, Mic, Paperclip } from "lucide-react";

interface MessageInputProps {
  message: string;
  setMessage: (message: string) => void;
  handleSendMessage: (e: React.FormEvent) => void;
  isTyping: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({ 
  message, 
  setMessage, 
  handleSendMessage, 
  isTyping 
}) => {
  return (
    <Box padding={16} borderTopWidth={1} borderColor="var(--neutral-800)">
      <XStack onSubmit={handleSendMessage} render="form" display="flex" alignItems="center">
        <XStack display="flex" alignItems="center" columnGap={8} marginRight={8}>
          <Button type="button" variant="ghost" size="icon" color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }}>
            <Paperclip size={20} />
          </Button>
          <Button type="button" variant="ghost" size="icon" color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }}>
            <Camera size={20} />
          </Button>
          <Button type="button" variant="ghost" size="icon" color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }}>
            <Mic size={20} />
          </Button>
        </XStack>
        
        <Box display="inline-block" minHeight={44}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          render="input" flex={1} backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-700)" borderTopLeftRadius="var(--radius-md)" borderBottomLeftRadius="var(--radius-md)" paddingHorizontal={16} paddingVertical={8} focusStyle={{ outlineStyle: "solid", outlineWidth: 2, outlineColor: "var(--neutral-500)" }}
        />
        <Button 
          type="submit" 
          disabled={isTyping}
          borderTopLeftRadius="0" borderBottomLeftRadius="0" backgroundColor="var(--neutral-600)" height="42px" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
        >
          {isTyping ? (
            <RefreshCw size={20} />
          ) : (
            <Send size={20} />
          )}
        </Button>
      </XStack>
    </Box>
  );
};

export default MessageInput;
