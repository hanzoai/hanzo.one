import { Box, Grid } from '@/gui'

import React from "react";
import AIEngineeringHeader from "./AIEngineeringHeader";
import ExpandableFeatureCard from "../../ai/engineering-platform/ExpandableFeatureCard";
import { featureData } from "./featureData";

const AIEngineering = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <AIEngineeringHeader />
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={48} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          {featureData.map((feature, index) => (
            <ExpandableFeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              featurePoints={feature.featurePoints}
              delay={feature.delay}
              iconBgClass={feature.iconBgClass}
              iconTextClass={feature.iconTextClass}
              bulletColor={feature.bulletColor}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AIEngineering;
