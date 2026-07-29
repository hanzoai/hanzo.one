import { Box, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

interface PlatformTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const PlatformTabs: React.FC<PlatformTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <XStack display="flex" columnGap={8} borderBottomWidth={1} borderColor="var(--neutral-800)" paddingBottom={8} overflowX="auto">
      <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
        onClick={() => setActiveTab("platform")}
        render="button" paddingHorizontal={16} paddingVertical={8} borderTopLeftRadius="var(--radius-lg)" borderTopRightRadius="var(--radius-lg)" whiteSpace="nowrap" color={activeTab === "platform" ? "var(--white)" : "var(--neutral-400)"} borderBottomWidth={activeTab === "platform" ? 2 : undefined} borderColor={activeTab === "platform" ? "var(--neutral-500)" : undefined} hoverStyle={activeTab === "platform" ? undefined : { color: "var(--white)" }}
      >
        Platform Vision
      </Box>
      <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
        onClick={() => setActiveTab("capabilities")}
        render="button" paddingHorizontal={16} paddingVertical={8} borderTopLeftRadius="var(--radius-lg)" borderTopRightRadius="var(--radius-lg)" whiteSpace="nowrap" color={activeTab === "capabilities" ? "var(--white)" : "var(--neutral-400)"} borderBottomWidth={activeTab === "capabilities" ? 2 : undefined} borderColor={activeTab === "capabilities" ? "var(--neutral-500)" : undefined} hoverStyle={activeTab === "capabilities" ? undefined : { color: "var(--white)" }}
      >
        Core Capabilities
      </Box>
      <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
        onClick={() => setActiveTab("solutions")}
        render="button" paddingHorizontal={16} paddingVertical={8} borderTopLeftRadius="var(--radius-lg)" borderTopRightRadius="var(--radius-lg)" whiteSpace="nowrap" color={activeTab === "solutions" ? "var(--white)" : "var(--neutral-400)"} borderBottomWidth={activeTab === "solutions" ? 2 : undefined} borderColor={activeTab === "solutions" ? "var(--neutral-500)" : undefined} hoverStyle={activeTab === "solutions" ? undefined : { color: "var(--white)" }}
      >
        Enterprise Solutions
      </Box>
    </XStack>
  );
};

export default PlatformTabs;
