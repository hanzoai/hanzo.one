import { Box, Grid } from '@/gui'

import React from "react";
import WorkspaceHeader from "./workspace/WorkspaceHeader";
import ProjectManagementCard from "./workspace/ProjectManagementCard";
import TeamChatCard from "./workspace/TeamChatCard";
import VideoMeetingsCard from "./workspace/VideoMeetingsCard";
import KnowledgeBaseCard from "./workspace/KnowledgeBaseCard";
import WorkspaceFooter from "./workspace/WorkspaceFooter";

const WorkspaceIntegration = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <WorkspaceHeader />

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={64} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <ProjectManagementCard />
          <TeamChatCard />
          <VideoMeetingsCard />
          <KnowledgeBaseCard />
        </Grid>

        <WorkspaceFooter />
      </Box>
    </Box>
  );
};

export default WorkspaceIntegration;
