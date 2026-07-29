import { Box, Button, Grid, Input, Progress, Text, XStack, YStack, toast } from '@/gui'

import React, { useState } from "react";
import { Bot, Activity, Database, Settings, PlayCircle, StopCircle, Brain, Zap, PlusCircle, Search, List, LayoutGrid } from "lucide-react";
import { DummyAgentData, Agent } from "./data";
import AgentDetail from "./AgentDetail";

interface AgentsListProps {
  viewMode?: "list" | "grid";
}

const AgentsList = ({ viewMode = "grid" }: AgentsListProps) => {
  const [agents, setAgents] = useState<Agent[]>(DummyAgentData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [displayMode, setDisplayMode] = useState<"list" | "grid">(viewMode);

  const filteredAgents = agents.filter(agent => 
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const statusColors = {
    idle: "bg-gray-500",
    running: "bg-green-500",
    paused: "bg-yellow-500",
    error: "bg-red-500"
  };

  const getStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const handleAgentClick = (agent: Agent) => {
    setSelectedAgent(agent);
  };

  const handleAgentUpdate = (updatedAgent: Agent) => {
    const updatedAgents = agents.map(agent => 
      agent.id === updatedAgent.id ? updatedAgent : agent
    );
    setAgents(updatedAgents);
    setSelectedAgent(null);
    toast.success(`Agent ${updatedAgent.name} updated successfully`);
  };

  const handleStatusToggle = (agent: Agent, e: React.MouseEvent) => {
    e.stopPropagation();
    const newStatus = agent.status === "running" ? "paused" : "running";
    const updatedAgent = { ...agent, status: newStatus as "running" | "paused" };
    
    const updatedAgents = agents.map(a => 
      a.id === agent.id ? updatedAgent : a
    );
    
    setAgents(updatedAgents);
    toast.success(`Agent ${agent.name} ${newStatus === "running" ? "started" : "paused"}`);
  };

  const toggleDisplayMode = () => {
    setDisplayMode(prev => prev === "grid" ? "list" : "grid");
  };

  return (
    <YStack height="100%" display="flex" flexDirection="column">
      <XStack display="flex" justifyContent="space-between" alignItems="center" marginBottom={16}>
        <Box position="relative" width={320}>
          <Box render="span" display="inline-flex" alignItems="center" position="absolute" left={12} top={10}><Search size={16} color="var(--neutral-500)" /></Box>
          <Input 
            placeholder="Search agents..." 
            backgroundColor="var(--black)" borderColor="var(--neutral-800)" paddingLeft={40}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Box>
        <XStack display="flex" columnGap={8}>
          <Button 
            variant="ghost" 
            borderWidth={1} borderColor="var(--neutral-800)" 
            onClick={toggleDisplayMode}
            title={displayMode === "grid" ? "Switch to List View" : "Switch to Grid View"}
          >
            {displayMode === "grid" ? <List size={16} /> : <LayoutGrid size={16} />}
          </Button>
          <Button backgroundColor="var(--black)" borderWidth={1} borderColor="var(--neutral-800)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}>
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><PlusCircle size={16} /></Box>
            New Agent
          </Button>
        </XStack>
      </XStack>
      
      {displayMode === "grid" ? (
        <Box borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" overflow="hidden">
          <Box render="table" display="table" width="100%" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
            <thead>
              <Box render="tr" display="table-row" backgroundColor="var(--black)" textAlign="left">
                <Box render="th" display="table-cell" paddingHorizontal={16} paddingVertical={12} fontWeight="500" color="var(--neutral-400)">Name</Box>
                <Box render="th" display="table-cell" paddingHorizontal={16} paddingVertical={12} fontWeight="500" color="var(--neutral-400)">Status</Box>
                <Box render="th" display="table-cell" paddingHorizontal={16} paddingVertical={12} fontWeight="500" color="var(--neutral-400)">Type</Box>
                <Box render="th" display="table-cell" paddingHorizontal={16} paddingVertical={12} fontWeight="500" color="var(--neutral-400)">Model</Box>
                <Box render="th" display="table-cell" paddingHorizontal={16} paddingVertical={12} fontWeight="500" color="var(--neutral-400)">Tasks</Box>
                <Box render="th" display="table-cell" paddingHorizontal={16} paddingVertical={12} fontWeight="500" color="var(--neutral-400)">Memory</Box>
                <Box render="th" display="table-cell" paddingHorizontal={16} paddingVertical={12} fontWeight="500" color="var(--neutral-400)">Tokens</Box>
                <Box render="th" display="table-cell" paddingHorizontal={16} paddingVertical={12} fontWeight="500" color="var(--neutral-400)">Cost</Box>
                <Box render="th" display="table-cell" paddingHorizontal={16} paddingVertical={12} fontWeight="500" color="var(--neutral-400)">Actions</Box>
              </Box>
            </thead>
            <Box render="tbody" display="table-row-group">
              {filteredAgents.map((agent) => (
                <Box 
                  key={agent.id} 
                  render="tr" display="table-row" backgroundColor="var(--black)" cursor="pointer" hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }}
                  onClick={() => handleAgentClick(agent)}
                >
                  <Box render="td" display="table-cell" paddingHorizontal={16} paddingVertical={12}>
                    <XStack display="flex" alignItems="center">
                      <XStack width={32} height={32} borderRadius="var(--radius-md)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" display="flex" alignItems="center" justifyContent="center" marginRight={12}>
                        <Bot size={16} color="var(--foreground)" />
                      </XStack>
                      <div>
                        <Box fontWeight="500">{agent.name}</Box>
                        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">Last active: {agent.lastActive}</Box>
                      </div>
                    </XStack>
                  </Box>
                  <Box render="td" display="table-cell" paddingHorizontal={16} paddingVertical={12}>
                    <XStack display="flex" alignItems="center">
                      <Box height={8} width={8} borderRadius="var(--radius-full)" marginRight={8}></Box>
                      {getStatusText(agent.status)}
                    </XStack>
                  </Box>
                  <Box render="td" display="table-cell" paddingHorizontal={16} paddingVertical={12}>
                    <XStack display="flex" alignItems="center">
                      {agent.type === "Research" && <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Database size={16} color="var(--foreground)" /></Box>}
                      {agent.type === "Coding" && <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Brain size={16} color="var(--foreground)" /></Box>}
                      {agent.type === "Assistant" && <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Activity size={16} color="var(--foreground)" /></Box>}
                      {agent.type}
                    </XStack>
                  </Box>
                  <Box render="td" display="table-cell" paddingHorizontal={16} paddingVertical={12} color="var(--neutral-300)">{agent.model}</Box>
                  <Box render="td" display="table-cell" paddingHorizontal={16} paddingVertical={12}>{agent.tasks}</Box>
                  <Box render="td" display="table-cell" paddingHorizontal={16} paddingVertical={12}>
                    <XStack display="flex" alignItems="center">
                      <Progress 
                        value={agent.memory} 
                        height={6} width={64} marginRight={8} backgroundColor="var(--neutral-800)" 
                        style={{
                          '--progress-background': agent.memory > 80 ? 'var(--white-10)' : 
                            agent.memory > 60 ? 'var(--white-10)' : 
                            'var(--white-10)'
                        } as React.CSSProperties}
                      />
                      <span>{agent.memory}%</span>
                    </XStack>
                  </Box>
                  <Box render="td" display="table-cell" paddingHorizontal={16} paddingVertical={12}>{agent.tokens.toLocaleString()}</Box>
                  <Box render="td" display="table-cell" paddingHorizontal={16} paddingVertical={12}>${agent.cost.toFixed(2)}</Box>
                  <Box render="td" display="table-cell" paddingHorizontal={16} paddingVertical={12}>
                    <XStack display="flex" columnGap={4} onClick={(e) => e.stopPropagation()}>
                      {agent.status === "running" ? (
                        <Button size="icon" variant="ghost" height={32} width={32} color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }} onClick={(e) => handleStatusToggle(agent, e)}>
                          <StopCircle size={16} />
                        </Button>
                      ) : (
                        <Button size="icon" variant="ghost" height={32} width={32} color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }} onClick={(e) => handleStatusToggle(agent, e)}>
                          <PlayCircle size={16} />
                        </Button>
                      )}
                      <Button size="icon" variant="ghost" height={32} width={32} color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }}>
                        <Settings size={16} />
                      </Button>
                    </XStack>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      ) : (
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {filteredAgents.map((agent) => (
            <Box 
              key={agent.id}
              backgroundColor="var(--black)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={16} cursor="pointer" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.2)" }}
              onClick={() => handleAgentClick(agent)}
            >
              <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={12}>
                <XStack display="flex" alignItems="center">
                  <XStack width={32} height={32} borderRadius="var(--radius-md)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" display="flex" alignItems="center" justifyContent="center" marginRight={12}>
                    <Bot size={16} color="var(--foreground)" />
                  </XStack>
                  <div>
                    <Box fontWeight="500">{agent.name}</Box>
                    <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">Last active: {agent.lastActive}</Box>
                  </div>
                </XStack>
                <XStack display="flex" alignItems="center">
                  <Box height={8} width={8} borderRadius="var(--radius-full)" marginRight={8}></Box>
                  <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{getStatusText(agent.status)}</Text>
                </XStack>
              </XStack>
              
              <Box marginBottom={12} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                <XStack display="flex" justifyContent="space-between" marginBottom={4}>
                  <Text color="var(--neutral-400)">Type:</Text>
                  <Text display="flex" alignItems="center">
                    {agent.type === "Research" && <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Database size={12} color="var(--foreground)" /></Box>}
                    {agent.type === "Coding" && <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Brain size={12} color="var(--foreground)" /></Box>}
                    {agent.type === "Assistant" && <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Activity size={12} color="var(--foreground)" /></Box>}
                    {agent.type}
                  </Text>
                </XStack>
                <XStack display="flex" justifyContent="space-between" marginBottom={4}>
                  <Text color="var(--neutral-400)">Model:</Text>
                  <span>{agent.model}</span>
                </XStack>
                <XStack display="flex" justifyContent="space-between" marginBottom={4}>
                  <Text color="var(--neutral-400)">Tasks:</Text>
                  <span>{agent.tasks}</span>
                </XStack>
                <XStack display="flex" justifyContent="space-between" marginBottom={4}>
                  <Text color="var(--neutral-400)">Tokens:</Text>
                  <span>{agent.tokens.toLocaleString()}</span>
                </XStack>
                <XStack display="flex" justifyContent="space-between">
                  <Text color="var(--neutral-400)">Cost:</Text>
                  <span>${agent.cost.toFixed(2)}</span>
                </XStack>
              </Box>
              
              <XStack display="flex" alignItems="center" justifyContent="space-between">
                <XStack display="flex" alignItems="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                  <Text color="var(--neutral-400)" marginRight={8}>Memory:</Text>
                  <Progress 
                    value={agent.memory} 
                    height={6} width={64} marginRight={8} backgroundColor="var(--neutral-800)" 
                    style={{
                      '--progress-background': agent.memory > 80 ? 'var(--white-10)' : 
                        agent.memory > 60 ? 'var(--white-10)' : 
                        'var(--white-10)'
                    } as React.CSSProperties}
                  />
                  <span>{agent.memory}%</span>
                </XStack>
                
                <XStack display="flex" columnGap={4} onClick={(e) => e.stopPropagation()}>
                  {agent.status === "running" ? (
                    <Button size="icon" variant="ghost" height={32} width={32} color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }} onClick={(e) => handleStatusToggle(agent, e)}>
                      <StopCircle size={16} />
                    </Button>
                  ) : (
                    <Button size="icon" variant="ghost" height={32} width={32} color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }} onClick={(e) => handleStatusToggle(agent, e)}>
                      <PlayCircle size={16} />
                    </Button>
                  )}
                  <Button size="icon" variant="ghost" height={32} width={32} color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }}>
                    <Settings size={16} />
                  </Button>
                </XStack>
              </XStack>
            </Box>
          ))}
        </Grid>
      )}

      {selectedAgent && (
        <AgentDetail
          agent={selectedAgent}
          onClose={() => setSelectedAgent(null)}
          onUpdate={handleAgentUpdate}
        />
      )}
    </YStack>
  );
};

export default AgentsList;
