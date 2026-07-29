import { YStack } from '@/gui'

import React from "react";
import Chat from "./Chat";
import Playground from "./Playground";
import Terminal from "./Terminal";
import { MessageInterface } from "./types";

interface ContentProps {
  activeTab: string;
  conversation: MessageInterface[];
  promptText: string;
  setPromptText: (text: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const Content = ({ 
  activeTab, 
  conversation, 
  promptText, 
  setPromptText, 
  handleSubmit 
}: ContentProps) => {
  return (
    <YStack flex={1} display="flex" flexDirection="column" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" overflow="hidden">
      {activeTab === "chat" && (
        <Chat 
          conversation={conversation}
          promptText={promptText}
          setPromptText={setPromptText}
          handleSubmit={handleSubmit}
        />
      )}
      
      {activeTab === "playground" && <Playground />}
      
      {activeTab === "terminal" && <Terminal />}
    </YStack>
  );
};

export default Content;
