import { Box } from '@/gui'

import React from "react";
import GlobeContainer from "./globe/GlobeContainer";

const GlobalNetwork: React.FC = () => {
  return (
    <Box marginVertical={64}>
      <GlobeContainer />
    </Box>
  );
};

export default GlobalNetwork;
