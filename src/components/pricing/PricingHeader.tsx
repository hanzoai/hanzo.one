import { Box, ChromeText } from '@/gui'

import React from "react";

const PricingHeader = () => {
  return (
    <Box textAlign="center" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={48}>
      <ChromeText 
        as="h1" 
        fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} $sm={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}
        preHeading="Simple & Transparent"
      >
        Pricing
      </ChromeText>
    </Box>
  );
};

export default PricingHeader;
