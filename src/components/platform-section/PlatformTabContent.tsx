import { Grid } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import PlatformFeatureCard from "./PlatformFeatureCard";
import { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface PlatformTabContentProps {
  features: Feature[];
}

const PlatformTabContent: React.FC<PlatformTabContentProps> = ({ features }) => {
  return (
    <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
      {features.map((feature, index) => (
        <PlatformFeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          index={index}
        />
      ))}
    </Grid>
  );
};

export default PlatformTabContent;
