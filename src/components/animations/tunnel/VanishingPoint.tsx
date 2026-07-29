import { Box } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const VanishingPoint: React.FC = () => {
  return (
    <Box position="absolute" left="50%" top="50%" x="-50%" y="-50%" zIndex={10}>
      {/* Vanishing point without glow */}
    </Box>
  );
};

export default VanishingPoint;
