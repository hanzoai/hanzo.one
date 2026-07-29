import { Box } from '@/gui'

import React from "react";
import SectionHeader from "./SectionHeader";
import ZenPrinciplesList from "./ZenPrinciplesList";
import { principles } from "./data/zenPrinciples";
import { manifestoDescription } from "./data/manifestoText";

const ManifestoSection = () => {
  return (
    <Box render="section" paddingVertical={64} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, rgb(0 0 0 / 0.5), rgb(255 255 255 / 0.1))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <SectionHeader 
          title="Our Manifesto" 
          description={manifestoDescription}
        />
        
        <ZenPrinciplesList principles={principles} groupByDiscipline={true} />
      </Box>
    </Box>
  );
};

export default ManifestoSection;
