import { Box, H4, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Check } from "lucide-react";

interface ModelData {
  name: string;
  provider: string;
  features: string[];
  description?: string;
}

interface ModelCategoryCardProps {
  model: ModelData;
  modelIndex: number;
  categoryIndex: number;
}

const ModelCategoryCard = ({ model, modelIndex, categoryIndex }: ModelCategoryCardProps) => {
  // Use monochrome styling for frontier AI models, subtle color for others
  const isFrontierAI = categoryIndex === 0;
  const cardClasses = isFrontierAI 
    ? "bg-[var(--black)]/50 border border-gray-800/50 rounded-xl p-6 hover:border-gray-700/50 transition-colors"
    : "bg-[var(--black)]/30 border border-gray-800/30 rounded-xl p-6 hover:border-gray-700/30 transition-colors";
    
  const iconColor = isFrontierAI ? "text-neutral-400" : "text-neutral-500";
  const checkColor = isFrontierAI ? "text-neutral-400" : "text-neutral-500";

  return (
    <MotionBox
      key={modelIndex}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: modelIndex * 0.1 }}
      
    >
      <XStack display="flex" alignItems="center" marginBottom={12}>
        <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Cpu size={20} /></Box>
        <H4 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)">{model.name}</H4>
      </XStack>
      
      {model.description && (
        <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginBottom={16} fontStyle="italic">{model.description}</Paragraph>
      )}
      
      <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)" marginBottom={16}>via {model.provider}</Paragraph>
      
      <Box render="ul" rowGap={8} marginBottom={24}>
        {model.features.map((feature, i) => (
          <XStack key={i} render="li" display="flex" alignItems="flex-start">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8} marginTop={2}><Check size={20} /></Box>
            <Text color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{feature}</Text>
          </XStack>
        ))}
      </Box>
    </MotionBox>
  );
};

export default ModelCategoryCard;