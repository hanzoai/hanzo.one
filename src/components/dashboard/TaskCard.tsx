import { Box, H3, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { Bot, MessageSquare, Paperclip, AlertCircle } from "lucide-react";

interface TaskCardProps {
  task: {
    id: string;
    title: string;
    description?: string;
    status: string;
    priority?: "low" | "medium" | "high";
    assignees?: { id: string; name: string; avatar?: string }[];
    labels?: { id: string; name: string; color: string }[];
    agentCount?: number;
    messageCount?: number;
    dueDate?: string;
  };
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const priorityColors = {
  };

  return (
    <Box backgroundColor="var(--neutral-900)" borderRadius="var(--radius-md)" padding={12} borderWidth={1} borderColor="var(--neutral-800)" cursor="pointer" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-700)" }}>
      {/* Task ID and Priority */}
      <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={8}>
        <XStack fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" display="flex" alignItems="center">
          <span>HAN-{task.id}</span>
        </XStack>
        {task.priority && (
          <Box height={8} width={8} borderRadius="var(--radius-full)"></Box>
        )}
      </XStack>
      
      {/* Title */}
      <H3 fontWeight="500" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={8}>{task.title}</H3>
      
      {/* Description (optional) */}
      {task.description && (
        <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginBottom={12} WebkitLineClamp={2} display="-webkit-box" WebkitBoxOrient="vertical" overflow="hidden">{task.description}</Paragraph>
      )}
      
      {/* Labels */}
      {task.labels && task.labels.length > 0 && (
        <XStack display="flex" flexWrap="wrap" gap={4} marginBottom={12}>
          {task.labels.map(label => (
            <Text 
              key={label.id} 
              paddingHorizontal={8} paddingVertical={2} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" borderRadius="var(--radius-full)" 
              style={{ backgroundColor: `${label.color}20`, color: label.color }}
            >
              {label.name}
            </Text>
          ))}
        </XStack>
      )}
      
      {/* Footer */}
      <XStack display="flex" alignItems="center" justifyContent="space-between" marginTop={8}>
        {/* Assignees */}
        <XStack display="flex" columnGap={8}>
          {task.assignees && task.assignees.map((assignee, index) => (
            <XStack 
              key={assignee.id} 
              height={24} width={24} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-700)" borderWidth={2} borderColor="var(--neutral-900)" display="flex" alignItems="center" justifyContent="center" fontSize="10px"
              title={assignee.name}
            >
              {assignee.avatar ? (
                <Box display="inline-block" src={assignee.avatar} alt={assignee.name} render="img" height="100%" width="100%" borderRadius="var(--radius-full)" />
              ) : (
                assignee.name.charAt(0)
              )}
            </XStack>
          ))}
          
          {task.agentCount && task.agentCount > 0 && (
            <XStack 
              height={24} width={24} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-900)" borderWidth={2} borderColor="var(--neutral-900)" display="flex" alignItems="center" justifyContent="center"
              title={`${task.agentCount} AI agents`}
            >
              <Bot size={12} color="var(--foreground)" />
            </XStack>
          )}
        </XStack>
        
        {/* Metadata */}
        <XStack display="flex" alignItems="center" columnGap={8} color="var(--neutral-400)">
          {task.messageCount && task.messageCount > 0 && (
            <XStack display="flex" alignItems="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
              <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><MessageSquare size={12} /></Box>
              {task.messageCount}
            </XStack>
          )}
          
          {task.dueDate && (
            <XStack display="flex" alignItems="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
              <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><AlertCircle size={12} /></Box>
              {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </XStack>
          )}
        </XStack>
      </XStack>
    </Box>
  );
};

export default TaskCard;
