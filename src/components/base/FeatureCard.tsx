import { Box, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  delay?: number;
  color?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  features,
  delay = 0,
  color = "blue"
}) => {
  const colorClasses: Record<string, { bg: string, text: string, border: string }> = {
    blue: { 
      bg: "bg-blue-900/20", 
      text: "text-blue-400", 
      border: "border-blue-800/50" 
    },
    purple: { 
      bg: "bg-purple-900/20", 
      text: "text-purple-400", 
      border: "border-purple-800/50" 
    },
    green: { 
      bg: "bg-green-900/20", 
      text: "text-green-400", 
      border: "border-green-800/50" 
    },
    amber: { 
      bg: "bg-amber-900/20", 
      text: "text-amber-400", 
      border: "border-amber-800/50" 
    },
    indigo: { 
      bg: "bg-indigo-900/20", 
      text: "text-indigo-400", 
      border: "border-indigo-800/50" 
    },
    cyan: { 
      bg: "bg-cyan-900/20", 
      text: "text-cyan-400", 
      border: "border-cyan-800/50" 
    },
    rose: { 
      bg: "bg-rose-900/20", 
      text: "text-rose-400", 
      border: "border-rose-800/50" 
    },
  };

  const classes = colorClasses[color] || colorClasses.blue;

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      borderWidth={1} borderRadius="var(--radius-lg)" padding={24} height="100%"
    >
      <XStack display="flex" alignItems="center" marginBottom={16}>
        <Box marginRight={12}>
          <Icon height={24} width={24} />
        </Box>
        <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)">{title}</H3>
      </XStack>
      <Paragraph color="var(--neutral-300)" marginBottom={16}>{description}</Paragraph>
      <Box render="ul" rowGap={8}>
        {features.map((feature, index) => (
          <XStack key={index} render="li" display="flex" alignItems="flex-start">
            <Text marginRight={8}>•</Text>
            <Text color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{feature}</Text>
          </XStack>
        ))}
      </Box>
    </MotionBox>
  );
};

export default FeatureCard;
