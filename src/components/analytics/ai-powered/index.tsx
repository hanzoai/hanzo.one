import { Box } from '@/gui'

import React from "react";
import AIPoweredHeader from "./AIPoweredHeader";
import AIFeatureList from "./AIFeatureList";
import AIAnalysisDemo from "./AIAnalysisDemo";

const AIPowered = () => {
  return (
    <Box render="section" paddingVertical={128} paddingHorizontal={16} position="relative" overflow="hidden" backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.1), transparent, transparent)"></Box>
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <AIPoweredHeader />
        <AIFeatureList />
        <AIAnalysisDemo />
      </Box>
    </Box>
  );
};

export default AIPowered;
