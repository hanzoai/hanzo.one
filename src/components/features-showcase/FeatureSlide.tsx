import { Anchor, Box, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureSlideProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  link: string;
  category?: 'ai-cloud' | 'dx-platform';
}

const FeatureSlide: React.FC<FeatureSlideProps> = ({
  title,
  description,
  icon: Icon,
  color,
  link,
  category
}) => {
  // Define category badge styles
  const getCategoryBadge = () => {
    if (!category) return null;
    
    const badgeStyles = {
      'ai-cloud': 'var(--white-10)',
      'dx-platform': 'var(--white-10)'
    };
    
    const badgeText = {
      'ai-cloud': 'AI Cloud',
      'dx-platform': 'DX Platform'
    };
    
    return (
      <Box position="absolute" top={12} right={12} paddingHorizontal={8} paddingVertical={2} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" borderWidth={1}>
        {badgeText[category]}
      </Box>
    );
  };

  return (
    <MotionBox 
      group borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" backgroundColor="rgb(0 0 0 / 0.3)" hoverStyle={{ borderColor: "var(--border-strong)" }} backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" padding={24} position="relative"
      whileHover={{ 
        y: -5,
        borderColor: "rgba(139, 92, 246, 0.5)",
        boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.15)"
      }}
      transition={{ duration: 0.2 }}
    >
      {getCategoryBadge()}
      
      <XStack width={56} height={56} borderRadius="var(--radius-xl)" display="flex" alignItems="center" justifyContent="center" marginBottom={24} transition="transform 300ms cubic-bezier(.4,0,.2,1)" $group-hover={{ scale: 1.1 }}>
        <Icon height={28} width={28} color="var(--white)" />
      </XStack>
      
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={12} color="var(--white)">{title}</H3>
      
      <Paragraph color="var(--neutral-300)" marginBottom={24}>
        {description}
      </Paragraph>
      
      <Anchor minHeight={44} 
        href={link} 
        fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
      >
        Learn More
        <Box display="inline-block" 
          render="svg" marginLeft={4} width={16} height={16} transition="transform 300ms cubic-bezier(.4,0,.2,1)" $group-hover={{ x: 4 }} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </Box>
      </Anchor>
    </MotionBox>
  );
};

export default FeatureSlide;
