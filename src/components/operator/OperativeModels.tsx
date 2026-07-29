import { Box, Grid } from '@/gui'

import React from "react";
import ModelHeader from "./models/ModelHeader";
import ModelCard from "./models/ModelCard";
import ModelFooter from "./models/ModelFooter";
import { operatorModels } from "./models/operatorModelData";

const OperativeModels = () => {
  return (
    <Box render="section" paddingVertical={96} position="relative" overflow="hidden">
      {/* Background gradient */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom, var(--neutral-950), var(--pure-black))"></Box>
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} position="relative" zIndex={10} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <ModelHeader />
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {operatorModels.map((model, index) => (
            <ModelCard 
              key={index}
              model={model} 
              index={index} 
            />
          ))}
        </Grid>
        
        <ModelFooter />
      </Box>
    </Box>
  );
};

export default OperativeModels;
