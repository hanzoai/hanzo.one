import { Box, Button, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
  hoverColor?: string;
  link?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  icon, 
  title, 
  description, 
  color = "bg-blue-900/30", 
  hoverColor = "bg-blue-600/40",
  link = "#"
}) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
      group backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} height="100%" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" position="relative" overflow="hidden" hoverStyle={{ borderColor: "var(--neutral-700)" }}
    >
      {/* Background gradient effect */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.5} zIndex={0} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"></Box>
      
      {/* Hover background effect */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0} transition="opacity 300ms cubic-bezier(.4,0,.2,1)" zIndex={0} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.05))" $group-hover={{ opacity: 1 }}></Box>
      
      <Box position="relative" zIndex={10}>
        {/* Icon container with dynamic color and hover effect - now with bigger icons */}
        <XStack
          width={96}
          height={96}
          borderRadius="var(--radius-2xl)"
          alignItems="center"
          justifyContent="center"
          marginBottom={24}
          backgroundColor="var(--white-05)"
          borderWidth={1}
          borderColor="var(--border)"
          transition="all 300ms cubic-bezier(.4,0,.2,1)"
          $group-hover={{ backgroundColor: 'var(--white-10)', scale: 1.1, boxShadow: '0 10px 15px -3px rgb(0 0 0 / .35)' }}
        >
          {React.cloneElement(icon as React.ReactElement, { size: 48 })}
        </XStack>
        
        <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={12} color="var(--white)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }}>{title}</H3>
        <Paragraph color="var(--neutral-400)" marginBottom={20} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--neutral-300)" }}>{description}</Paragraph>
        
        {/* Learn more button - now more visible with improved styling */}
        <Button 
          variant="ghost" 
          size="sm" 
          color="var(--foreground)" padding={8} display="flex" alignItems="center" gap={4} transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" opacity={0.8} hoverStyle={{ color: "var(--foreground)", backgroundColor: "rgb(255 255 255 / 0.2)" }} $group-hover={{ opacity: 1 }}
          asChild
        >
          <a href={link}>
            <span>Learn more</span>
            <Box render="span" display="inline-flex" alignItems="center" marginLeft={4} $group-hover={{ x: 2, y: -2 }}><ArrowUpRight size={14} /></Box>
          </a>
        </Button>
      </Box>
    </MotionBox>
  );
};

export default ProductCard;
