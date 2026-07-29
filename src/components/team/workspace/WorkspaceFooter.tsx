import { Badge, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const WorkspaceFooter = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      textAlign="center"
    >
      <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto" marginBottom={32}>
        All workspace tools are fully integrated, allowing AI agents to work across platforms
        seamlessly while maintaining a complete audit trail of all actions.
      </Paragraph>
      
      <XStack display="inline-flex" flexWrap="wrap" justifyContent="center" gap={16}>
        <Badge backgroundColor="var(--surface-card-emphasis)" color="var(--foreground)" borderColor="var(--border-strong)" paddingHorizontal={12} paddingVertical={8}>
          Real-time collaboration
        </Badge>
        <Badge backgroundColor="var(--surface-card-emphasis)" color="var(--foreground)" borderColor="var(--border-strong)" paddingHorizontal={12} paddingVertical={8}>
          Full audit history
        </Badge>
        <Badge backgroundColor="var(--surface-card-emphasis)" color="var(--foreground)" borderColor="var(--border-strong)" paddingHorizontal={12} paddingVertical={8}>
          Seamless integrations
        </Badge>
        <Badge backgroundColor="var(--surface-card-emphasis)" color="var(--foreground)" borderColor="var(--border-strong)" paddingHorizontal={12} paddingVertical={8}>
          Human oversight
        </Badge>
        <Badge backgroundColor="var(--surface-card-emphasis)" color="var(--foreground)" borderColor="var(--border-strong)" paddingHorizontal={12} paddingVertical={8}>
          Enterprise security
        </Badge>
      </XStack>
    </MotionBox>
  );
};

export default WorkspaceFooter;
