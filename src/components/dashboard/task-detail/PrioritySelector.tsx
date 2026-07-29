import { Box, Text, XStack } from '@/gui'

import React from "react";

interface PrioritySelectorProps {
  priority: "low" | "medium" | "high" | undefined;
  onChange: (priority: "low" | "medium" | "high") => void;
}

const PrioritySelector: React.FC<PrioritySelectorProps> = ({ priority, onChange }) => {
  const priorityOptions = [
    { value: "low", label: "Low", },
    { value: "medium", label: "Medium", },
    { value: "high", label: "High", }
  ];

  return (
    <div>
      <Text render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" marginBottom={4}>Priority</Text>
      <Box rowGap={4}>
        {priorityOptions.map(option => (
          <XStack 
            key={option.value}
            paddingHorizontal={12} paddingVertical={8} borderRadius="var(--radius)" cursor="pointer" display="flex" alignItems="center" backgroundColor={priority === option.value ? "var(--neutral-800)" : undefined} hoverStyle={priority === option.value ? undefined : { backgroundColor: "var(--surface-card)" }}
            onClick={() => onChange(option.value as "low" | "medium" | "high")}
          >
            <Box width={8} height={8} borderRadius="var(--radius-full)" marginRight={8}></Box>
            {option.label}
          </XStack>
        ))}
      </Box>
    </div>
  );
};

export default PrioritySelector;
