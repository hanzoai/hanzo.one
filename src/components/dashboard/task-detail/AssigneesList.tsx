import { Box, Button, Text, XStack } from '@/gui'

import React from "react";
import { PlusCircle, X } from "lucide-react";

interface Assignee {
  id: string;
  name: string;
  avatar?: string;
}

interface AssigneesListProps {
  assignees?: Assignee[];
  onRemove?: (id: string) => void;
}

const AssigneesList: React.FC<AssigneesListProps> = ({ assignees = [], onRemove }) => {
  return (
    <Box marginBottom={24}>
      <XStack display="flex" justifyContent="space-between" marginBottom={8}>
        <Text render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)">Assignees</Text>
        <Button size="sm" variant="ghost" color="var(--foreground)" height={24} paddingHorizontal={8} hoverStyle={{ color: "var(--foreground)" }}>
          <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><PlusCircle size={14} /></Box>
          Add
        </Button>
      </XStack>
      <XStack display="flex" flexWrap="wrap" gap={8}>
        {assignees.map(assignee => (
          <XStack 
            key={assignee.id}
            display="flex" alignItems="center" gap={8} backgroundColor="var(--neutral-800)" paddingHorizontal={8} paddingVertical={4} borderRadius="var(--radius)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)"
          >
            <XStack width={20} height={20} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-900)" display="flex" alignItems="center" justifyContent="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
              {assignee.name.charAt(0)}
            </XStack>
            <span>{assignee.name}</span>
            <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} 
              render="button" color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }}
              onClick={() => onRemove && onRemove(assignee.id)}
            >
              <X size={12} />
            </Box>
          </XStack>
        ))}
        {!assignees.length && (
          <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">No assignees</Box>
        )}
      </XStack>
    </Box>
  );
};

export default AssigneesList;
