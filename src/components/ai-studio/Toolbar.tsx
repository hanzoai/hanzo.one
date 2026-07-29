import { Box, Button, XStack } from '@/gui'

import React from "react";
import { PanelLeft, MessageSquare, Layers, Terminal, Save, Play, Share2, Download, Settings } from "lucide-react";

interface ToolbarProps {
  showSidebar: boolean;
  setShowSidebar: (show: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Toolbar = ({ 
  showSidebar, 
  setShowSidebar, 
  activeTab, 
  setActiveTab 
}: ToolbarProps) => {
  return (
    <XStack backgroundColor="var(--surface-overlay)" padding={8} borderBottomWidth={1} borderColor="var(--neutral-800)" display="flex" alignItems="center">
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => setShowSidebar(!showSidebar)}
        color="var(--neutral-400)" marginRight={8} hoverStyle={{ color: "var(--white)" }}
      >
        <PanelLeft size={20} />
      </Button>
      
      <XStack display="flex" columnGap={4} marginHorizontal={8}>
        <Button 
          variant={activeTab === "chat" ? "secondary" : "ghost"} 
          size="sm"
          onClick={() => setActiveTab("chat")}
          fontSize="var(--text-sm)" lineHeight="var(--leading-sm)"
        >
          <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><MessageSquare size={16} /></Box> Chat
        </Button>
        <Button 
          variant={activeTab === "playground" ? "secondary" : "ghost"}
          size="sm" 
          onClick={() => setActiveTab("playground")}
          fontSize="var(--text-sm)" lineHeight="var(--leading-sm)"
        >
          <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Layers size={16} /></Box> Playground
        </Button>
        <Button 
          variant={activeTab === "terminal" ? "secondary" : "ghost"} 
          size="sm"
          onClick={() => setActiveTab("terminal")}
          fontSize="var(--text-sm)" lineHeight="var(--leading-sm)"
        >
          <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Terminal size={16} /></Box> Terminal
        </Button>
      </XStack>
      
      <XStack marginLeft="auto" display="flex" alignItems="center" columnGap={4}>
        <Button variant="ghost" size="icon" color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }}>
          <Save size={16} />
        </Button>
        <Button variant="ghost" size="icon" color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }}>
          <Play size={16} />
        </Button>
        <Button variant="ghost" size="icon" color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }}>
          <Share2 size={16} />
        </Button>
        <Button variant="ghost" size="icon" color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }}>
          <Download size={16} />
        </Button>
        <Button variant="ghost" size="icon" color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }}>
          <Settings size={16} />
        </Button>
      </XStack>
    </XStack>
  );
};

export default Toolbar;
