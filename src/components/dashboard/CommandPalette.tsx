import { Box, Command, Text, XStack } from '@/gui'

import React, { useState, useEffect } from "react";
import { 
  Search, 
  Bot, 
  LayoutGrid, 
  ChartBar, 
  Settings, 
  PlusCircle, 
  PlayCircle,
  PauseCircle,
  Database,
  RefreshCw,
  Server
} from "lucide-react";
import { DummyAgentData } from "./data";

const CommandPalette: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Toggle the command palette with Cmd+K or Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(open => !open);
      }
      
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Handle command selection
  const handleSelect = (id: string) => {
    // Close the palette
    setOpen(false);
    
    // Handle the selected command
    switch (id) {
      case "new-agent":
        console.log("Create new agent");
        break;
      case "new-task":
        console.log("Create new task");
        break;
      case "view-board":
        window.location.href = "/dashboard?view=board";
        break;
      case "view-agents":
        window.location.href = "/dashboard?view=agents";
        break;
      case "view-analytics":
        window.location.href = "/dashboard?view=analytics";
        break;
      case "settings":
        console.log("Open settings");
        break;
      default:
        // Check if it's an agent toggle command
        if (id.startsWith("toggle-agent-")) {
          const agentId = id.replace("toggle-agent-", "");
          console.log(`Toggle agent: ${agentId}`);
        }
    }
  };

  if (!open) return null;

  return (
    <XStack position="fixed" top={0} right={0} bottom={0} left={0} zIndex={50} backgroundColor="rgb(0 0 0 / 0.6)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" display="flex" alignItems="flex-start" justifyContent="center" paddingTop="20vh">
      <Box width="100%" maxWidth="42rem" backgroundColor="var(--black)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" boxShadow="0 20px 25px -5px rgb(0 0 0 / .4)" overflow="hidden">
        <Command
          backgroundColor="var(--black)" color="var(--white)" borderStyle="none"
          filter={(value, search, keywords) => {
            if (value.includes(search.toLowerCase())) return 1;
            if (keywords?.some(keyword => keyword.includes(search.toLowerCase()))) return 1;
            return 0;
          }}
        >
          <XStack borderBottomWidth={1} borderColor="var(--neutral-800)" padding={8} display="flex" alignItems="center">
            <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><Search size={16} color="var(--neutral-500)" /></Box>
            <Command.Input 
              value={search}
              onValueChange={setSearch}
              width="100%" backgroundColor="transparent" borderStyle="none" paddingHorizontal={8} paddingVertical={6} color="var(--neutral-200)" focusStyle={{ outlineStyle: "none" }} 
              placeholder="Search commands..." 
              autoFocus
            />
            <Text marginRight={8} paddingHorizontal={6} paddingVertical={2} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" borderRadius="var(--radius)" backgroundColor="var(--neutral-800)" color="var(--neutral-400)">
              Esc
            </Text>
          </XStack>
          
          <Command.List maxHeight={320} overflow="auto" padding={8}>
            <Command.Empty paddingVertical={24} textAlign="center" color="var(--neutral-500)">
              No results found.
            </Command.Empty>
            
            <Command.Group heading="Navigation" paddingBottom={8}>
              <Command.Item 
                id="view-board" 
                onSelect={handleSelect} 
                display="flex" alignItems="center" columnGap={8} paddingHorizontal={8} paddingVertical={6} borderRadius="var(--radius)" cursor="pointer" color="var(--neutral-200)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
                keywords={["kanban", "board", "tasks"]}
              >
                <LayoutGrid size={16} color="var(--neutral-400)" />
                <span>View Kanban Board</span>
              </Command.Item>
              <Command.Item 
                id="view-agents" 
                onSelect={handleSelect} 
                display="flex" alignItems="center" columnGap={8} paddingHorizontal={8} paddingVertical={6} borderRadius="var(--radius)" cursor="pointer" color="var(--neutral-200)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
                keywords={["agents", "ai", "list"]}
              >
                <Bot size={16} color="var(--neutral-400)" />
                <span>View Agents</span>
              </Command.Item>
              <Command.Item 
                id="view-analytics" 
                onSelect={handleSelect} 
                display="flex" alignItems="center" columnGap={8} paddingHorizontal={8} paddingVertical={6} borderRadius="var(--radius)" cursor="pointer" color="var(--neutral-200)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
                keywords={["analytics", "stats", "metrics"]}
              >
                <ChartBar size={16} color="var(--neutral-400)" />
                <span>View Analytics</span>
              </Command.Item>
            </Command.Group>
            
            <Command.Group heading="Actions" paddingBottom={8}>
              <Command.Item 
                id="new-agent" 
                onSelect={handleSelect} 
                display="flex" alignItems="center" columnGap={8} paddingHorizontal={8} paddingVertical={6} borderRadius="var(--radius)" cursor="pointer" color="var(--neutral-200)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
                keywords={["create", "agent", "new", "add"]}
              >
                <PlusCircle size={16} color="var(--neutral-400)" />
                <span>Create New Agent</span>
              </Command.Item>
              <Command.Item 
                id="new-task" 
                onSelect={handleSelect} 
                display="flex" alignItems="center" columnGap={8} paddingHorizontal={8} paddingVertical={6} borderRadius="var(--radius)" cursor="pointer" color="var(--neutral-200)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
                keywords={["create", "task", "new", "add"]}
              >
                <PlusCircle size={16} color="var(--neutral-400)" />
                <span>Create New Task</span>
              </Command.Item>
              <Command.Item 
                id="refresh" 
                onSelect={handleSelect} 
                display="flex" alignItems="center" columnGap={8} paddingHorizontal={8} paddingVertical={6} borderRadius="var(--radius)" cursor="pointer" color="var(--neutral-200)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
                keywords={["refresh", "reload", "update"]}
              >
                <RefreshCw size={16} color="var(--neutral-400)" />
                <span>Refresh Dashboard</span>
              </Command.Item>
              <Command.Item 
                id="settings" 
                onSelect={handleSelect} 
                display="flex" alignItems="center" columnGap={8} paddingHorizontal={8} paddingVertical={6} borderRadius="var(--radius)" cursor="pointer" color="var(--neutral-200)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
                keywords={["settings", "preferences", "config"]}
              >
                <Settings size={16} color="var(--neutral-400)" />
                <span>Open Settings</span>
              </Command.Item>
            </Command.Group>
            
            <Command.Group heading="Manage Agents" paddingBottom={8}>
              {DummyAgentData.map((agent) => (
                <Command.Item 
                  key={agent.id}
                  id={`toggle-agent-${agent.id}`}
                  onSelect={handleSelect}
                  display="flex" alignItems="center" justifyContent="space-between" paddingHorizontal={8} paddingVertical={6} borderRadius="var(--radius)" cursor="pointer" color="var(--neutral-200)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
                  keywords={[agent.name, agent.type, agent.status, "toggle", "agent"]}
                >
                  <XStack display="flex" alignItems="center" columnGap={8}>
                    <Bot size={16} color="var(--neutral-400)" />
                    <span>{agent.name}</span>
                    <Text color="var(--neutral-500)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">{`(${agent.type})`}</Text>
                  </XStack>
                  {agent.status === "running" ? (
                    <PauseCircle size={16} color="var(--neutral-500)" />
                  ) : (
                    <PlayCircle size={16} color="var(--neutral-400)" />
                  )}
                </Command.Item>
              ))}
            </Command.Group>
            
            <Command.Group heading="Resources" paddingBottom={8}>
              <Command.Item 
                id="data-sources" 
                onSelect={handleSelect} 
                display="flex" alignItems="center" columnGap={8} paddingHorizontal={8} paddingVertical={6} borderRadius="var(--radius)" cursor="pointer" color="var(--neutral-200)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
                keywords={["data", "sources", "database", "vector", "rag"]}
              >
                <Database size={16} color="var(--neutral-400)" />
                <span>Manage Data Sources</span>
              </Command.Item>
              <Command.Item 
                id="infrastructure" 
                onSelect={handleSelect} 
                display="flex" alignItems="center" columnGap={8} paddingHorizontal={8} paddingVertical={6} borderRadius="var(--radius)" cursor="pointer" color="var(--neutral-200)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
                keywords={["infrastructure", "server", "deploy", "resources"]}
              >
                <Server size={16} color="var(--neutral-400)" />
                <span>View Infrastructure</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </Box>
    </XStack>
  );
};

export default CommandPalette;
