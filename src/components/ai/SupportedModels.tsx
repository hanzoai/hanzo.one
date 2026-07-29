import { Box } from '@/gui'

import React from "react";
import ModelHeader from "./models/ModelHeader";
import ModelCategory from "./models/ModelCategory";
import AdditionalFeatures from "./models/AdditionalFeatures";
import modelCategories from "./models/data/modelData";

const SupportedModels = () => {
  return (
    <Box render="section" paddingVertical={96} position="relative" overflow="hidden" backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))">
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} position="relative" zIndex={10} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <ModelHeader />

        {/* Model Categories */}
        {modelCategories.map((category, categoryIndex) => (
          <ModelCategory 
            key={categoryIndex} 
            category={category} 
            categoryIndex={categoryIndex} 
          />
        ))}

        {/* Additional Features Section */}
        <AdditionalFeatures />
      </Box>
    </Box>
  );
};

export default SupportedModels;
