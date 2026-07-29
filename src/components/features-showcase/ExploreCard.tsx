import { Anchor, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ExploreCardProps {
  title: string;
  description: string;
  link: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({
  title,
  description,
  link
}) => {
  return (
    <MotionBox 
      borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" backgroundColor="var(--surface-card)" hoverStyle={{ borderColor: "var(--border-strong)" }} height="100%" width="100%" display="flex" flexDirection="column" alignItems="center" padding={24} backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <XStack width={64} height={64} borderRadius="var(--radius-full)" display="flex" alignItems="center" justifyContent="center" marginBottom={16} backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))">
        <ArrowRight size={32} color="var(--white)" />
      </XStack>
      
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={12} color="var(--white)" textAlign="center">{title}</H3>
      
      <Paragraph color="var(--neutral-300)" textAlign="center" marginBottom={24} flexGrow={1}>
        {description}
      </Paragraph>
      
      <Anchor tap 
        href={link} 
        display="inline-flex" alignItems="center" justifyContent="center" gap={8} borderRadius="var(--radius-full)" paddingHorizontal={24} paddingVertical={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--white)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--neutral-500))" }}
      >
        Explore Platform
        <ArrowRight size={16} />
      </Anchor>
    </MotionBox>
  );
};

export default ExploreCard;
