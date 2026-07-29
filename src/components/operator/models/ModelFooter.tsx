import { Anchor, Box, Paragraph } from '@/gui'

import React from "react";

const ModelFooter = () => {
  return (
    <Box marginTop={48} textAlign="center">
      <Paragraph color="var(--neutral-400)">
        New models are continuously being added. Check the 
        <Anchor tap href="https://docs.hanzo.ai/operative/models" color="var(--foreground)" marginLeft={4} hoverStyle={{ color: "var(--foreground)" }}>
          documentation
        </Anchor> for the latest information.
      </Paragraph>
    </Box>
  );
};

export default ModelFooter;
