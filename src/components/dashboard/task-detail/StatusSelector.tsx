import { Box, Text } from '@/gui'

import React from "react";

interface StatusSelectorProps {
  status: string;
  onChange: (status: string) => void;
}

const StatusSelector: React.FC<StatusSelectorProps> = ({ status, onChange }) => {
  const statusOptions = [
    { value: "backlog", label: "Backlog" },
    { value: "todo", label: "Todo" },
    { value: "in-progress", label: "In Progress" },
    { value: "done", label: "Done" }
  ];

  return (
    <div>
      <Text render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" marginBottom={4}>Status</Text>
      <Box rowGap={4}>
        {statusOptions.map(option => (
          <Box 
            key={option.value}
            paddingHorizontal={12} paddingVertical={8} borderRadius="var(--radius)" cursor="pointer" backgroundColor={status === option.value ? "rgb(255 255 255 / 0.3)" : undefined} borderWidth={status === option.value ? 1 : undefined} borderColor={status === option.value ? "var(--neutral-800)" : undefined} hoverStyle={status === option.value ? undefined : { backgroundColor: "var(--neutral-800)" }}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default StatusSelector;
