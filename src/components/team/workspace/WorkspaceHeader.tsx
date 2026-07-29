import { H2, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react";

const WorkspaceHeader = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      textAlign="center" marginBottom={64}
    >
      <XStack display="inline-flex" padding={8} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" marginBottom={16}>
        <FolderKanban size={24} />
      </XStack>
      <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
        One Workspace for Humans & AI
      </H2>
      <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
        Seamlessly integrate your AI team members into your existing workflows with our 
        unified workspace platform, featuring project management, chat, video calls, and 
        knowledge base tools.
      </Paragraph>
    </MotionBox>
  );
};

export default WorkspaceHeader;
