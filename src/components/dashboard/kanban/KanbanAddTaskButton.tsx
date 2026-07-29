import { Box, Button } from '@/gui'

import React from "react";
import { Plus } from "lucide-react";

interface KanbanAddTaskButtonProps {
  onAddTask: () => void;
}

const KanbanAddTaskButton: React.FC<KanbanAddTaskButtonProps> = ({ onAddTask }) => {
  return (
    <Button 
      width="100%" justifyContent="flex-start" color="var(--neutral-400)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--black)" hoverStyle={{ color: "var(--white)", backgroundColor: "var(--neutral-900)" }} 
      variant="outline"
      onClick={onAddTask}
    >
      <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Plus size={16} /></Box>
      Add Task
    </Button>
  );
};

export default KanbanAddTaskButton;
