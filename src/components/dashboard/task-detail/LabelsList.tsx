import { Box, Button, Text, XStack } from '@/gui'

import React from "react";
import { PlusCircle, X } from "lucide-react";

interface Label {
  id: string;
  name: string;
  color: string;
}

interface LabelsListProps {
  labels?: Label[];
  onRemove?: (id: string) => void;
}

const LabelsList: React.FC<LabelsListProps> = ({ labels = [], onRemove }) => {
  return (
    <Box marginBottom={24}>
      <XStack display="flex" justifyContent="space-between" marginBottom={8}>
        <Text render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)">Labels</Text>
        <Button size="sm" variant="ghost" color="var(--foreground)" height={24} paddingHorizontal={8} hoverStyle={{ color: "var(--foreground)" }}>
          <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><PlusCircle size={14} /></Box>
          Add
        </Button>
      </XStack>
      <XStack display="flex" flexWrap="wrap" gap={8}>
        {labels.map(label => (
          <XStack 
            key={label.id}
            display="flex" alignItems="center" gap={8} paddingHorizontal={8} paddingVertical={4} borderRadius="var(--radius)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)"
            style={{ backgroundColor: `${label.color}20`, color: label.color }}
          >
            <span>{label.name}</span>
            <button onClick={() => onRemove && onRemove(label.id)}>
              <X size={12} />
            </button>
          </XStack>
        ))}
        {!labels.length && (
          <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">No labels</Box>
        )}
      </XStack>
    </Box>
  );
};

export default LabelsList;
