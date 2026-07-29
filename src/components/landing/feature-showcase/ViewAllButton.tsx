import { Anchor, Box, Button, MotionBox, Text, XStack } from '@/gui'

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ViewAllButtonProps {
  href: string;
  text: string;
}

const ViewAllButton: React.FC<ViewAllButtonProps> = ({ href, text }) => {
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
          <Anchor minHeight={44} href={href} display="flex" gap={8}>
            <Text>{text}</Text>
            <Box render="span" display="inline-flex" alignItems="center" $group-hover={{ x: 4 }}><ArrowRight size={16} /></Box>
          </Anchor>
        </Button>
      </MotionBox>
    </XStack>
  );
};

export default ViewAllButton;
