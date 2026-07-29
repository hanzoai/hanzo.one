import { XStack, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import Content from "./Content";
import { MessageInterface, ModelInterface } from "./types";

interface StudioLayoutProps {
  showSidebar: boolean;
  setShowSidebar: (show: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  models: ModelInterface[];
  modelSelection: string;
  setModelSelection: (id: string) => void;
  conversation: MessageInterface[];
  promptText: string;
  setPromptText: (text: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const StudioLayout = ({
  showSidebar,
  setShowSidebar,
  activeTab,
  setActiveTab,
  models,
  modelSelection,
  setModelSelection,
  conversation,
  promptText,
  setPromptText,
  handleSubmit
}: StudioLayoutProps) => {
  return (
    <XStack flex={1} display="flex" overflow="hidden" maxWidth="var(--container-max)" marginHorizontal="auto" width="100%" padding={16}>
      <Sidebar 
        showSidebar={showSidebar}
        models={models}
        modelSelection={modelSelection}
        setModelSelection={setModelSelection}
      />
      
      <YStack flex={1} display="flex" flexDirection="column" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" overflow="hidden">
        <Toolbar 
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        
        <Content 
          activeTab={activeTab}
          conversation={conversation}
          promptText={promptText}
          setPromptText={setPromptText}
          handleSubmit={handleSubmit}
        />
      </YStack>
    </XStack>
  );
};

export default StudioLayout;
