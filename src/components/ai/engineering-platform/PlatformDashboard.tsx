import { Box, XStack } from '@/gui'

import React, { useState } from "react";
import { motion } from "framer-motion";
import AIModelsView from "./dashboard/AIModelsView";
import ObservabilityView from "./dashboard/ObservabilityView";
import AnalyticsView from "./dashboard/AnalyticsView";

const PlatformDashboard = () => {
  const [activeSection, setActiveSection] = useState("models");

  return (
    <Box position="relative" width="100%" backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-xl)" overflow="hidden" borderWidth={1} borderColor="var(--neutral-800)" boxShadow="0 20px 25px -5px rgb(0 0 0 / .4)">
      {/* Dashboard header */}
      <XStack backgroundColor="var(--surface-overlay)" padding={12} display="flex" alignItems="center" justifyContent="space-between">
        <XStack display="flex" alignItems="center" columnGap={8}>
          <XStack display="flex" columnGap={6}>
            <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
            <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
            <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
          </XStack>
          <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)">Hanzo AI Engineering Platform</Box>
        </XStack>
        <XStack display="flex" columnGap={12}>
          <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} 
            render="button" paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-md)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" backgroundColor={activeSection === "models" ? "rgb(255 255 255 / 0.6)" : "var(--neutral-800)"} color={activeSection === "models" ? "var(--foreground)" : "var(--neutral-400)"} 
            onClick={() => setActiveSection("models")}
          >
            AI Models
          </Box>
          <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} 
            render="button" paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-md)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" backgroundColor={activeSection === "observability" ? "rgb(255 255 255 / 0.6)" : "var(--neutral-800)"} color={activeSection === "observability" ? "var(--foreground)" : "var(--neutral-400)"} 
            onClick={() => setActiveSection("observability")}
          >
            Observability
          </Box>
          <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} 
            render="button" paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-md)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" backgroundColor={activeSection === "analytics" ? "rgb(255 255 255 / 0.6)" : "var(--neutral-800)"} color={activeSection === "analytics" ? "var(--foreground)" : "var(--neutral-400)"} 
            onClick={() => setActiveSection("analytics")}
          >
            Analytics
          </Box>
        </XStack>
      </XStack>

      {/* Dashboard content */}
      <Box padding={16} height="340px" overflow="auto">
        {activeSection === "models" && <AIModelsView />}
        {activeSection === "observability" && <ObservabilityView />}
        {activeSection === "analytics" && <AnalyticsView />}
      </Box>
    </Box>
  );
};

export default PlatformDashboard;
