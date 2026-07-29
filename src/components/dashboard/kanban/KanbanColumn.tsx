import { Box, Button, H3, Text, XStack, YStack } from '@/gui'

import React from "react";
import { Plus, MoreHorizontal } from "lucide-react";
import TaskCard from "../TaskCard";
import KanbanAddTaskButton from "./KanbanAddTaskButton";
import { Task } from "../data/tasks/task-data";

interface KanbanColumnProps {
  column: {
    id: string;
    title: string;
    icon: React.ReactNode;
    tasks: Task[];
  };
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: () => void;
  onDragStart: (task: Task) => void;
  onTaskClick: (task: Task) => void;
  onAddTask: (columnId: string) => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({
  column,
  onDragOver,
  onDrop,
  onDragStart,
  onTaskClick,
  onAddTask
}) => {
  return (
    <YStack 
      key={column.id} 
      width={288} display="flex" flexDirection="column" backgroundColor="var(--black)" borderRadius="var(--radius-lg)"
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <XStack display="flex" alignItems="center" justifyContent="space-between" padding={12} borderBottomWidth={1} borderColor="var(--neutral-800)">
        <XStack display="flex" alignItems="center">
          {column.icon}
          <H3 fontWeight="500" marginLeft={8}>{column.title}</H3>
          <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)" marginLeft={4}>{column.tasks.length}</Text>
        </XStack>
        <XStack display="flex" alignItems="center">
          <Button size="icon" variant="ghost" height={24} width={24} color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }} onClick={() => onAddTask(column.id)}>
            <Plus size={16} />
          </Button>
          <Button size="icon" variant="ghost" height={24} width={24} color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }}>
            <MoreHorizontal size={16} />
          </Button>
        </XStack>
      </XStack>
      <Box flex={1} overflowY="auto" padding={8} rowGap={8}>
        {column.tasks.map((task) => (
          <Box
            key={task.id}
            draggable
            onDragStart={() => onDragStart(task)}
            onClick={() => onTaskClick(task)}
            cursor="pointer"
          >
            <TaskCard task={task} />
          </Box>
        ))}
        <KanbanAddTaskButton onAddTask={() => onAddTask(column.id)} />
      </Box>
    </YStack>
  );
};

export default KanbanColumn;
