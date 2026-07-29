import { Box, MotionBox, Paragraph, Text, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { NodeType } from "./types";
import { renderIcon } from "./utils/iconUtils";

interface DeploymentNodeProps {
  node: NodeType;
  onClick: (node: NodeType) => void;
}

const DeploymentNode: React.FC<DeploymentNodeProps> = ({ node, onClick }) => {
  const getNodeBackgroundClass = () => {
    switch(node.type) {
      case 'app': return 'var(--white-10)';
      case 'redis': return 'var(--white-10)';
      case 'postgres': return 'var(--white-10)';
      case 'github': return 'var(--white-10)';
      case 'volume': return 'var(--white-10)';
      case 'network': 
        return node.id === 'network-public' 
          ? 'var(--white-10)' // Highlighted yellow for public network
          : 'var(--white-10)'; // Yellow outline for private network
      default: return 'var(--white-10)';
    }
  };

  return (
    <MotionBox
      position="absolute" display="flex" flexDirection="column" alignItems="center" justifyContent="center" cursor="pointer"
      style={{ 
        left: `${node.position.x}%`, 
        top: `${node.position.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: node.active ? 1 : 0,
        opacity: node.active ? 1 : 0
      }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        duration: 0.5
      }}
      onClick={() => onClick(node)}
    >
      <XStack display="flex" height={56} width={56} alignItems="center" justifyContent="center" borderRadius="var(--radius-lg)">
        {renderIcon(node.iconType, node.iconProps)}
        {node.status && (
          <Box position="absolute" right={-4} bottom={-4} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-800)" borderWidth={1} borderColor="var(--neutral-700)" padding={2}>
            {node.status === 'deployed' && <Check size={12} color="var(--foreground)" />}
            {node.status === 'pending' && (
              <MotionBox 
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Box display="inline-block" render="svg" height={12} width={12} color="var(--foreground)" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </Box>
              </MotionBox>
            )}
            {node.status === 'error' && <X size={12} color="var(--foreground)" />}
          </Box>
        )}
      </XStack>
      <Text marginTop={8} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)" whiteSpace="nowrap">{node.label}</Text>
    </MotionBox>
  );
};

// Wrapped version with tooltip
const DeploymentNodeWithTooltip: React.FC<DeploymentNodeProps> = (props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span>
            <DeploymentNode {...props} />
          </span>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>{props.node.label}</p>
          {props.node.statusMessage && <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" opacity={0.8}>{props.node.statusMessage}</Paragraph>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DeploymentNodeWithTooltip;
