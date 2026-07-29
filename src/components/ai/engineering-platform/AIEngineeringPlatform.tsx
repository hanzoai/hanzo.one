import { Box, Grid, H2, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import CloudInfrastructure from "./CloudInfrastructure";
import PlatformDashboard from "./PlatformDashboard";
import { featureData } from "@/components/base/ai-engineering/featureData";

const AIEngineeringPlatform: React.FC = () => {
  return (
    <Box render="section" paddingVertical={64} position="relative" $lg={{ paddingVertical: 96 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box textAlign="center" marginBottom={64}>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to right, var(--foreground), var(--foreground))" $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            AI Engineering Platform
          </H2>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Build, deploy, and scale AI applications with an integrated suite of tools designed for modern engineering teams.
          </Paragraph>
        </Box>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} marginBottom={64} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <div>
            <CloudInfrastructure />
          </div>
          <div>
            <PlatformDashboard />
          </div>
        </Grid>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          {featureData.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              featurePoints={feature.featurePoints}
              delay={feature.delay}
              iconBgClass={feature.iconBgClass}
              iconTextClass={feature.iconTextClass}
              bulletColor={feature.bulletColor}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AIEngineeringPlatform;
