import { Box, Button, Grid, Input, Text, Textarea } from '@/gui'

import React from "react";
import { Bot } from "lucide-react";
import AssigneesList from "./AssigneesList";
import LabelsList from "./LabelsList";
import StatusSelector from "./StatusSelector";
import PrioritySelector from "./PrioritySelector";
import { Task } from "../data/tasks/task-data";

interface TaskDetailContentProps {
  task: Task;
  onTaskChange: (field: string, value: any) => void;
}

const TaskDetailContent: React.FC<TaskDetailContentProps> = ({ task, onTaskChange }) => {
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onTaskChange("description", e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onTaskChange("dueDate", e.target.value);
  };

  return (
    <Grid display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap={24}>
      <Box gridColumn="span 2 / span 2">
        <Box marginBottom={24}>
          <Text render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" marginBottom={4}>Description</Text>
          <Textarea 
            value={task.description || ""}
            onChange={handleDescriptionChange}
            placeholder="Add a description..."
            minHeight={128} backgroundColor="var(--neutral-900)" borderColor="var(--neutral-800)"
          />
        </Box>

        <AssigneesList 
          assignees={task.assignees} 
          onRemove={(id) => {
            const newAssignees = task.assignees?.filter(a => a.id !== id);
            onTaskChange("assignees", newAssignees);
          }} 
        />

        <LabelsList 
          labels={task.labels} 
          onRemove={(id) => {
            const newLabels = task.labels?.filter(l => l.id !== id);
            onTaskChange("labels", newLabels);
          }} 
        />
      </Box>

      <Box rowGap={24}>
        <StatusSelector 
          status={task.status} 
          onChange={(value) => onTaskChange("status", value)} 
        />

        <PrioritySelector 
          priority={task.priority} 
          onChange={(value) => onTaskChange("priority", value)} 
        />

        <div>
          <Text render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" marginBottom={4}>Due Date</Text>
          <Input 
            type="date"
            value={task.dueDate || ""}
            onChange={handleDateChange}
            backgroundColor="var(--neutral-900)" borderColor="var(--neutral-800)"
          />
        </div>

        <div>
          <Text render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" marginBottom={4}>AI Agents</Text>
          <Button 
            variant="outline" 
            width="100%" justifyContent="flex-start" backgroundColor="var(--neutral-900)" borderColor="var(--neutral-800)"
          >
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Bot size={16} /></Box>
            Assign Agent
          </Button>
        </div>
      </Box>
    </Grid>
  );
};

export default TaskDetailContent;
