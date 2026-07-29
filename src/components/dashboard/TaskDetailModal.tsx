import { Box, Button, Dialog, DialogContent, DialogHeader, DialogTitle, Grid, Input, Text, Textarea, XStack } from '@/gui'

import React, { useState } from "react";
import { 
  Bot, Calendar, Tag, 
  User, AlertCircle, X,
  PlusCircle
} from "lucide-react";

interface Task {
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
}

interface TaskDetailModalProps {
  task: Task;
  onClose: () => void;
  onUpdate: (task: Task) => void;
}

const TaskDetailModal: React.FC<TaskDetailModalProps> = ({
  task,
  onClose,
  onUpdate
}) => {
  const [editedTask, setEditedTask] = useState<Task>({ ...task });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedTask(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdate(editedTask);
  };

  const priorityOptions = [
    { value: "low", label: "Low", },
    { value: "medium", label: "Medium", },
    { value: "high", label: "High", }
  ];

  const statusOptions = [
    { value: "backlog", label: "Backlog" },
    { value: "todo", label: "Todo" },
    { value: "in-progress", label: "In Progress" },
    { value: "done", label: "Done" }
  ];

  return (
    <Dialog open={!!task} onOpenChange={() => onClose()}>
      <DialogContent maxWidth="42rem">
        <DialogHeader>
          <DialogTitle>
            <Input 
              name="title"
              value={editedTask.title}
              onChange={handleChange}
              fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginTop={8} backgroundColor="transparent" borderStyle="none" paddingHorizontal={0} height="auto" focusStyle={{ outlineWidth: 0 }}
            />
          </DialogTitle>
        </DialogHeader>

        <Grid display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap={24}>
          <Box gridColumn="span 2 / span 2">
            <Box marginBottom={24}>
              <Text render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" marginBottom={4}>Description</Text>
              <Textarea 
                name="description"
                value={editedTask.description || ""}
                onChange={handleChange}
                placeholder="Add a description..."
                minHeight={128} backgroundColor="var(--neutral-900)" borderColor="var(--neutral-800)"
              />
            </Box>

            <Box marginBottom={24}>
              <XStack display="flex" justifyContent="space-between" marginBottom={8}>
                <Text render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)">Assignees</Text>
                <Button size="sm" variant="ghost" color="var(--foreground)" height={24} paddingHorizontal={8} hoverStyle={{ color: "var(--foreground)" }}>
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><PlusCircle size={14} /></Box>
                  Add
                </Button>
              </XStack>
              <XStack display="flex" flexWrap="wrap" gap={8}>
                {editedTask.assignees?.map(assignee => (
                  <XStack 
                    key={assignee.id}
                    display="flex" alignItems="center" gap={8} backgroundColor="var(--neutral-800)" paddingHorizontal={8} paddingVertical={4} borderRadius="var(--radius)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)"
                  >
                    <XStack width={20} height={20} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-900)" display="flex" alignItems="center" justifyContent="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
                      {assignee.name.charAt(0)}
                    </XStack>
                    <span>{assignee.name}</span>
                    <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} render="button" color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }}>
                      <X size={12} />
                    </Box>
                  </XStack>
                ))}
                {!editedTask.assignees?.length && (
                  <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">No assignees</Box>
                )}
              </XStack>
            </Box>

            <Box marginBottom={24}>
              <XStack display="flex" justifyContent="space-between" marginBottom={8}>
                <Text render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)">Labels</Text>
                <Button size="sm" variant="ghost" color="var(--foreground)" height={24} paddingHorizontal={8} hoverStyle={{ color: "var(--foreground)" }}>
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><PlusCircle size={14} /></Box>
                  Add
                </Button>
              </XStack>
              <XStack display="flex" flexWrap="wrap" gap={8}>
                {editedTask.labels?.map(label => (
                  <XStack 
                    key={label.id}
                    display="flex" alignItems="center" gap={8} paddingHorizontal={8} paddingVertical={4} borderRadius="var(--radius)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)"
                    style={{ backgroundColor: `${label.color}20`, color: label.color }}
                  >
                    <span>{label.name}</span>
                    <button>
                      <X size={12} />
                    </button>
                  </XStack>
                ))}
                {!editedTask.labels?.length && (
                  <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">No labels</Box>
                )}
              </XStack>
            </Box>
          </Box>

          <Box rowGap={24}>
            <div>
              <Text render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" marginBottom={4}>Status</Text>
              <Box rowGap={4}>
                {statusOptions.map(option => (
                  <Box 
                    key={option.value}
                    paddingHorizontal={12} paddingVertical={8} borderRadius="var(--radius)" cursor="pointer" backgroundColor={editedTask.status === option.value ? "rgb(255 255 255 / 0.3)" : undefined} borderWidth={editedTask.status === option.value ? 1 : undefined} borderColor={editedTask.status === option.value ? "var(--neutral-800)" : undefined} hoverStyle={editedTask.status === option.value ? undefined : { backgroundColor: "var(--neutral-800)" }}
                    onClick={() => setEditedTask(prev => ({ ...prev, status: option.value }))}
                  >
                    {option.label}
                  </Box>
                ))}
              </Box>
            </div>

            <div>
              <Text render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" marginBottom={4}>Priority</Text>
              <Box rowGap={4}>
                {priorityOptions.map(option => (
                  <XStack 
                    key={option.value}
                    paddingHorizontal={12} paddingVertical={8} borderRadius="var(--radius)" cursor="pointer" display="flex" alignItems="center" backgroundColor={editedTask.priority === option.value ? "var(--neutral-800)" : undefined} hoverStyle={editedTask.priority === option.value ? undefined : { backgroundColor: "var(--surface-card)" }}
                    onClick={() => setEditedTask(prev => ({ ...prev, priority: option.value as "low" | "medium" | "high" }))}
                  >
                    <Box width={8} height={8} borderRadius="var(--radius-full)" marginRight={8}></Box>
                    {option.label}
                  </XStack>
                ))}
              </Box>
            </div>

            <div>
              <Text render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" marginBottom={4}>Due Date</Text>
              <Input 
                type="date"
                name="dueDate"
                value={editedTask.dueDate || ""}
                onChange={handleChange}
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

        <XStack display="flex" justifyContent="flex-end" gap={8} marginTop={24}>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Changes
          </Button>
        </XStack>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDetailModal;
