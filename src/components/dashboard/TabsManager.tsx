import { Box, Text, XStack, YStack } from '@/gui'

import React, { useState, useEffect } from "react";
import { X, Plus, LayoutGrid, List, MenuSquare } from "lucide-react";

export type TabType = {
  id: string;
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
};

interface TabsManagerProps {
  initialTabs: TabType[];
  onAddTab?: () => void;
}

const TabsManager: React.FC<TabsManagerProps> = ({ initialTabs, onAddTab }) => {
  const [tabs, setTabs] = useState<TabType[]>(initialTabs);
  const [activeTabId, setActiveTabId] = useState<string>(initialTabs[0]?.id || "");
  const [viewMode, setViewMode] = useState<"kanban" | "list">("kanban");

  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
  };

  const handleCloseTab = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation();
    if (tabs.length > 1) {
      const newTabs = tabs.filter(tab => tab.id !== tabId);
      setTabs(newTabs);
      
      // If the active tab is being closed, set another tab as active
      if (activeTabId === tabId) {
        setActiveTabId(newTabs[0].id);
      }
    }
  };

  const activeTab = tabs.find(tab => tab.id === activeTabId);

  const toggleViewMode = () => {
    setViewMode(prev => prev === "kanban" ? "list" : "kanban");
  };

  return (
    <YStack display="flex" flexDirection="column" height="100%">
      <XStack display="flex" borderBottomWidth={1} borderColor="var(--neutral-800)">
        <XStack flex={1} display="flex" overflowX="auto" scrollbarWidth="none">
          {tabs.map(tab => (
            <XStack
              key={tab.id}
              group display="flex" alignItems="center" paddingHorizontal={16} paddingVertical={8} borderRightWidth={1} borderColor="var(--neutral-800)" cursor="pointer" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={activeTabId === tab.id ? "var(--neutral-900)" : undefined} hoverStyle={activeTabId === tab.id ? undefined : { backgroundColor: "var(--surface-card)" }}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.icon && <Text marginRight={8}>{tab.icon}</Text>}
              <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" maxWidth="150px">{tab.title}</Text>
              {tabs.length > 1 && (
                <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                  render="button" marginLeft={8} opacity={0} transition="opacity var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" color="var(--neutral-500)" $group-hover={{ opacity: 1 }} hoverStyle={{ color: "var(--white)" }}
                  onClick={(e) => handleCloseTab(e, tab.id)}
                >
                  <X size={14} />
                </Box>
              )}
            </XStack>
          ))}
        </XStack>
        <XStack display="flex" alignItems="center">
          <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
            onClick={onAddTab}
            render="button" padding={8} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
            title="New Tab"
          >
            <Plus size={16} />
          </Box>
          <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
            onClick={toggleViewMode}
            render="button" padding={8} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
            title={viewMode === "kanban" ? "Switch to List View" : "Switch to Kanban View"}
          >
            {viewMode === "kanban" ? <List size={16} /> : <LayoutGrid size={16} />}
          </Box>
        </XStack>
      </XStack>
      
      <Box flex={1} overflow="hidden">
        {activeTab && activeTab.content}
      </Box>
    </YStack>
  );
};

export default TabsManager;
