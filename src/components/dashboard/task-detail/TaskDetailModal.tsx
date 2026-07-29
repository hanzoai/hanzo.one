import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Input, XStack } from '@/gui'
import React, { useState } from "react";

import TaskDetailContent from "./TaskDetailContent";
import { Task } from "../data/tasks/task-data";

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

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask(prev => ({ ...prev, title: e.target.value }));
  };

  const handleTaskChange = (field: string, value: any) => {
    setEditedTask(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onUpdate(editedTask);
  };

  return (
    <Dialog open={!!task} onOpenChange={() => onClose()}>
      <DialogContent maxWidth="42rem">
        <DialogHeader>
          <DialogTitle>
            <Input 
              value={editedTask.title}
              onChange={handleTitleChange}
              fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginTop={8} backgroundColor="transparent" borderStyle="none" paddingHorizontal={0} height="auto" focusStyle={{ outlineWidth: 0 }}
            />
          </DialogTitle>
        </DialogHeader>

        <TaskDetailContent 
          task={editedTask} 
          onTaskChange={handleTaskChange} 
        />

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
