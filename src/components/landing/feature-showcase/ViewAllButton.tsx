import { Anchor, Box, Button, MotionBox, XStack } from '@/gui'

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ViewAllButtonProps {
  href: string;
  text: string;
  hoverColor: string;
}

const ViewAllButton: React.FC<ViewAllButtonProps> = ({ href, text, hoverColor }) => {
  // Map hover colors to Tailwind classes
  const hoverColorMap: Record<string, { bg: string, border: string, text: string }> = {
    blue: {
      bg: "hover:bg-blue-900/20",
      border: "hover:border-blue-500",
      text: "text-blue-400 hover:text-blue-300"
    },
    purple: {
      bg: "hover:bg-purple-900/20",
      border: "hover:border-purple-500",
      text: "text-purple-400 hover:text-purple-300"
    },
    green: {
      bg: "hover:bg-green-900/20",
      border: "hover:border-green-500",
      text: "text-green-400 hover:text-green-300"
    }
  };
  
  const colorClasses = hoverColorMap[hoverColor] || hoverColorMap.blue;
  
  return (
    <XStack display="flex" justifyContent="center" marginBottom={48}>
      <MotionBox
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Button 
          variant="outline" 
          size="sm"
          group borderColor="var(--neutral-700)" transition="all 300ms cubic-bezier(.4,0,.2,1)"
          asChild
        >
          <Anchor href={href} display="flex" alignItems="center" gap={8}>
            <span>{text}</span>
            <Box render="span" display="inline-flex" alignItems="center" $group-hover={{ x: 4 }}><ArrowRight size={16} /></Box>
          </Anchor>
        </Button>
      </MotionBox>
    </XStack>
  );
};

export default ViewAllButton;
