import { Box, Button, XStack, toast } from '@/gui'

import React, { useState } from "react";
import { DummyTaskData } from "./data";
import { TaskDetailModal } from "./task-detail";
import { Task } from "./data/tasks/task-data";
import KanbanColumn from "./kanban/KanbanColumn";
import KanbanAddTaskButton from "./kanban/KanbanAddTaskButton";
import { Clock, CheckCircle, Zap } from "lucide-react";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState<Task[]>(DummyTaskData);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const columns = [
    {
      id: "backlog",
      title: "Backlog",
      icon: <Clock size={16} color="var(--neutral-400)" />,
      tasks: tasks.filter(task => task.status === "backlog")
    },
    {
      id: "todo",
      title: "Todo",
      icon: <CheckCircle size={16} color="var(--neutral-400)" />,
      tasks: tasks.filter(task => task.status === "todo")
    },
    {
      id: "in-progress",
      title: "In Progress",
      icon: <Zap size={16} color="var(--neutral-500)" />,
      tasks: tasks.filter(task => task.status === "in-progress")
    },
    {
      id: "done",
      title: "Done",
      icon: <CheckCircle size={16} color="var(--neutral-500)" />,
      tasks: tasks.filter(task => task.status === "done")
    }
  ];

  const handleDragStart = (task: Task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (columnId: string) => {
    if (draggedTask) {
      const updatedTasks = tasks.map(task => {
        if (task.id === draggedTask.id) {
          const updatedTask = { ...task, status: columnId };
          return updatedTask;
        }
        return task;
      });

      setTasks(updatedTasks);
      setDraggedTask(null);
      toast.success(`Task moved to ${columnId.replace("-", " ")}`);
    }
  };

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
  };

  const handleTaskUpdate = (updatedTask: Task) => {
    const updatedTasks = tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    setSelectedTask(null);
    toast.success("Task updated successfully");
  };

  const handleAddTask = (columnId: string) => {
    const newTask: Task = {
      id: `${Date.now()}`,
      title: "New Task",
      status: columnId,
    };
    
    setTasks([...tasks, newTask]);
    setSelectedTask(newTask);
  };

  return (
    <Box height="100%" overflowX="auto">
      <XStack display="flex" columnGap={16} height="100%" paddingBottom={24} minWidth="max-content">
        {columns.map((column) => (
          <KanbanColumn
            key={column.id}
            column={column}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(column.id)}
            onDragStart={handleDragStart}
            onTaskClick={handleTaskClick}
            onAddTask={handleAddTask}
          />
        ))}
      </XStack>

      {selectedTask && (
        <TaskDetailModal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onUpdate={handleTaskUpdate}
        />
      )}
    </Box>
  );
};

export default KanbanBoard;
