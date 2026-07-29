import { YStack } from '@/gui'

import React, { useState, useRef, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";

const ChatInterface: React.FC = () => {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      sender: "bot",
      message: "Hello! How can I assist your team today?",
      timestamp: new Date().toISOString(),
    },
  ]);
  
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message to chat
    const userMessage = {
      id: chatHistory.length + 1,
      sender: "user",
      message: message,
      timestamp: new Date().toISOString(),
    };
    
    setChatHistory([...chatHistory, userMessage]);
    setMessage("");
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: chatHistory.length + 2,
        sender: "bot",
        message: `I received your message: "${message}". This is a simulated response.`,
        timestamp: new Date().toISOString(),
      };
      
      setChatHistory(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <YStack maxWidth="56rem" marginHorizontal="auto" backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)" backdropFilter="blur(16px)" WebkitBackdropFilter="blur(16px)" overflow="hidden" display="flex" flexDirection="column" height="600px" marginVertical={40}>
      <ChatHeader />
      
      <ChatMessages 
        chatHistory={chatHistory} 
        isTyping={isTyping} 
        formatTimestamp={formatTimestamp}
        endOfMessagesRef={endOfMessagesRef}
      />
      
      <MessageInput 
        message={message} 
        setMessage={setMessage} 
        handleSendMessage={handleSendMessage} 
        isTyping={isTyping}
      />
    </YStack>
  );
};

export default ChatInterface;
