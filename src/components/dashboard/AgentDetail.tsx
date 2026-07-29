import { Box, Button, Dialog, DialogContent, DialogHeader, DialogTitle, Grid, H3, H4, Input, Paragraph, Progress, Text, Textarea, XStack, YStack } from '@/gui'

import React, { useState } from "react";
import { 
  Bot, Activity, Database, 
  FileText, Globe, Trash2, 
  PlusCircle, ChevronRight,
  ArrowUpDown, Settings, 
  PlayCircle, StopCircle,
  Save, X
} from "lucide-react";
import { Agent } from "./data";

interface AgentDetailProps {
  agent: Agent | null;
  onClose: () => void;
  onUpdate: (agent: Agent) => void;
}

interface RagSource {
  id: string;
  name: string;
  type: "database" | "vector" | "file" | "api";
  connection: string;
}

const AgentDetail: React.FC<AgentDetailProps> = ({ agent, onClose, onUpdate }) => {
  const [editedAgent, setEditedAgent] = useState<Agent | null>(agent);
  const [activeTab, setActiveTab] = useState<"overview" | "rag" | "settings">("overview");
  const [selectedRagSource, setSelectedRagSource] = useState<RagSource | null>(null);

  if (!editedAgent) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedAgent(prev => {
      if (!prev) return null;
      return { ...prev, [name]: value };
    });
  };

  const handleSave = () => {
    if (editedAgent) {
      onUpdate(editedAgent);
    }
  };

  const handleAddRagSource = () => {
    const newSource: RagSource = {
      id: `rs-${Date.now()}`,
      name: "New Source",
      type: "database",
      connection: ""
    };
    
    setEditedAgent(prev => {
      if (!prev) return null;
      return {
        ...prev,
        ragSources: [...(prev.ragSources || []), newSource]
      };
    });
    
    setSelectedRagSource(newSource);
  };

  const handleRagSourceChange = (source: RagSource) => {
    setEditedAgent(prev => {
      if (!prev || !prev.ragSources) return prev;
      return {
        ...prev,
        ragSources: prev.ragSources.map(s => 
          s.id === source.id ? source : s
        )
      };
    });
  };

  const handleRemoveRagSource = (sourceId: string) => {
    setEditedAgent(prev => {
      if (!prev || !prev.ragSources) return prev;
      return {
        ...prev,
        ragSources: prev.ragSources.filter(s => s.id !== sourceId)
      };
    });
    
    if (selectedRagSource?.id === sourceId) {
      setSelectedRagSource(null);
    }
  };

  return (
    <Dialog open={!!agent} onOpenChange={() => onClose()}>
      <DialogContent maxWidth="56rem" maxHeight="90vh" overflow="hidden" display="flex" flexDirection="column">
        <DialogHeader>
          <DialogTitle display="flex" alignItems="center">
            <XStack width={32} height={32} borderRadius="var(--radius-md)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" display="flex" alignItems="center" justifyContent="center" marginRight={12}>
              <Bot size={16} color="var(--foreground)" />
            </XStack>
            <Input 
              name="name"
              value={editedAgent.name}
              onChange={handleInputChange}
              fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" backgroundColor="transparent" borderStyle="none" paddingHorizontal={0} height="auto" focusStyle={{ outlineWidth: 0 }}
            />
          </DialogTitle>
        </DialogHeader>

        <XStack display="flex" borderBottomWidth={1} borderColor="var(--neutral-800)" marginTop={8}>
          <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} 
            render="button" paddingHorizontal={16} paddingVertical={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color={activeTab === 'overview' ? "var(--white)" : "var(--neutral-400)"} borderBottomWidth={activeTab === 'overview' ? 2 : undefined} borderColor={activeTab === 'overview' ? "var(--neutral-500)" : undefined} hoverStyle={activeTab === 'overview' ? undefined : { color: "var(--white)" }}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </Box>
          <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} 
            render="button" paddingHorizontal={16} paddingVertical={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color={activeTab === 'rag' ? "var(--white)" : "var(--neutral-400)"} borderBottomWidth={activeTab === 'rag' ? 2 : undefined} borderColor={activeTab === 'rag' ? "var(--neutral-500)" : undefined} hoverStyle={activeTab === 'rag' ? undefined : { color: "var(--white)" }}
            onClick={() => setActiveTab('rag')}
          >
            RAG Sources
          </Box>
          <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} 
            render="button" paddingHorizontal={16} paddingVertical={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color={activeTab === 'settings' ? "var(--white)" : "var(--neutral-400)"} borderBottomWidth={activeTab === 'settings' ? 2 : undefined} borderColor={activeTab === 'settings' ? "var(--neutral-500)" : undefined} hoverStyle={activeTab === 'settings' ? undefined : { color: "var(--white)" }}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </Box>
        </XStack>

        <Box flex={1} overflow="auto" paddingVertical={16}>
          {activeTab === 'overview' && (
            <Box rowGap={24}>
              <div>
                <Text render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" marginBottom={4}>Description</Text>
                <Textarea 
                  name="description"
                  value={editedAgent.description || ""}
                  onChange={handleInputChange}
                  placeholder="Agent description..."
                  minHeight={96} backgroundColor="var(--neutral-900)" borderColor="var(--neutral-800)"
                />
              </div>

              <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                <div>
                  <Text render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" marginBottom={4}>Status</Text>
                  <XStack display="flex" alignItems="center" justifyContent="space-between" padding={12} backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-md)">
                    <XStack display="flex" alignItems="center">
                      <Box
                        height={8}
                        width={8}
                        borderRadius="var(--radius-full)"
                        marginRight={8}
                        opacity={editedAgent.status === 'running' ? 1 : editedAgent.status === 'paused' ? 0.6 : editedAgent.status === 'error' ? 0.35 : 0.2}
                        backgroundColor="var(--foreground)"
                      />
                      <span>{
                        editedAgent.status.charAt(0).toUpperCase() + editedAgent.status.slice(1)
                      }</span>
                    </XStack>
                    {editedAgent.status === 'running' ? (
                      <Button size="sm" variant="ghost" height={32} width={32} color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }}>
                        <StopCircle size={16} />
                      </Button>
                    ) : (
                      <Button size="sm" variant="ghost" height={32} width={32} color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }}>
                        <PlayCircle size={16} />
                      </Button>
                    )}
                  </XStack>
                </div>

                <div>
                  <Text render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" marginBottom={4}>Model</Text>
                  <XStack display="flex" alignItems="center" padding={12} backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-md)">
                    <Input 
                      name="model"
                      value={editedAgent.model}
                      onChange={handleInputChange}
                      backgroundColor="transparent" borderStyle="none" padding={0} focusStyle={{ outlineWidth: 0 }}
                    />
                  </XStack>
                </div>
              </Grid>

              <div>
                <H3 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" marginBottom={8}>Resource Usage</H3>
                <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                  <div>
                    <XStack display="flex" justifyContent="space-between" marginBottom={4}>
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">CPU</Text>
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{editedAgent.cpu || 0}%</Text>
                    </XStack>
                    <Progress value={editedAgent.cpu || 0} height={8} />
                  </div>
                  <div>
                    <XStack display="flex" justifyContent="space-between" marginBottom={4}>
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">GPU</Text>
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{editedAgent.gpu || 0}%</Text>
                    </XStack>
                    <Progress value={editedAgent.gpu || 0} height={8} />
                  </div>
                  <div>
                    <XStack display="flex" justifyContent="space-between" marginBottom={4}>
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Memory</Text>
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{editedAgent.memory}%</Text>
                    </XStack>
                    <Progress value={editedAgent.memory} height={8} />
                  </div>
                  <div>
                    <XStack display="flex" justifyContent="space-between" marginBottom={4}>
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Storage</Text>
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{editedAgent.storage || 0}%</Text>
                    </XStack>
                    <Progress value={editedAgent.storage || 0} height={8} />
                  </div>
                </Grid>
              </div>

              <div>
                <H3 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" marginBottom={8}>Usage Statistics</H3>
                <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={16} $sm={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
                  <Box backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={12}>
                    <H4 fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={4}>Tokens Used</H4>
                    <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500">{editedAgent.tokens.toLocaleString()}</Paragraph>
                  </Box>
                  <Box backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={12}>
                    <H4 fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={4}>Cost</H4>
                    <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500">${editedAgent.cost.toFixed(2)}</Paragraph>
                  </Box>
                  <Box backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={12}>
                    <H4 fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={4}>Tasks Assigned</H4>
                    <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500">{editedAgent.tasks}</Paragraph>
                  </Box>
                  <Box backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={12}>
                    <H4 fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={4}>Last Active</H4>
                    <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500">{editedAgent.lastActive}</Paragraph>
                  </Box>
                </Grid>
              </div>
            </Box>
          )}

          {activeTab === 'rag' && (
            <Grid display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap={24} height="400px">
              <Box gridColumn="span 1 / span 1" borderRightWidth={1} borderColor="var(--neutral-800)" paddingRight={16}>
                <XStack display="flex" justifyContent="space-between" alignItems="center" marginBottom={16}>
                  <H3 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">Knowledge Sources</H3>
                  <Button size="sm" variant="ghost" onClick={handleAddRagSource}>
                    <PlusCircle size={16} />
                  </Button>
                </XStack>
                <Box rowGap={4}>
                  {editedAgent.ragSources?.map(source => (
                    <XStack 
                      key={source.id}
                      padding={8} borderRadius="var(--radius)" display="flex" alignItems="center" justifyContent="space-between" cursor="pointer" backgroundColor={selectedRagSource?.id === source.id ? "var(--neutral-800)" : undefined} hoverStyle={selectedRagSource?.id === source.id ? undefined : { backgroundColor: "var(--neutral-900)" }}
                      onClick={() => setSelectedRagSource(source)}
                    >
                      <XStack display="flex" alignItems="center">
                        {source.type === 'database' && <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Database size={16} color="var(--foreground)" /></Box>}
                        {source.type === 'vector' && <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Activity size={16} color="var(--foreground)" /></Box>}
                        {source.type === 'file' && <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><FileText size={16} color="var(--foreground)" /></Box>}
                        {source.type === 'api' && <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Globe size={16} color="var(--foreground)" /></Box>}
                        <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">{source.name}</Text>
                      </XStack>
                      <ChevronRight size={16} color="var(--neutral-500)" />
                    </XStack>
                  ))}
                  {!editedAgent.ragSources?.length && (
                    <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)" padding={8}>
                      No knowledge sources added
                    </Box>
                  )}
                </Box>
              </Box>

              <Box gridColumn="span 2 / span 2">
                {selectedRagSource ? (
                  <Box rowGap={16}>
                    <XStack display="flex" justifyContent="space-between">
                      <H3 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">Source Details</H3>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        color="var(--foreground)" hoverStyle={{ color: "var(--foreground)" }}
                        onClick={() => handleRemoveRagSource(selectedRagSource.id)}
                      >
                        <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Trash2 size={16} /></Box>
                        Remove
                      </Button>
                    </XStack>

                    <div>
                      <Text render="label" display="block" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginBottom={4}>Name</Text>
                      <Input 
                        value={selectedRagSource.name}
                        onChange={(e) => {
                          const updated = { ...selectedRagSource, name: e.target.value };
                          handleRagSourceChange(updated);
                          setSelectedRagSource(updated);
                        }}
                        backgroundColor="var(--neutral-900)" borderColor="var(--neutral-800)"
                      />
                    </div>

                    <div>
                      <Text render="label" display="block" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginBottom={4}>Type</Text>
                      <Grid display="grid" gridTemplateColumns="repeat(4, minmax(0, 1fr))" gap={8}>
                        {(['database', 'vector', 'file', 'api'] as const).map(type => (
                          <YStack 
                            key={type}
                            padding={8} borderWidth={1} borderRadius="var(--radius)" display="flex" flexDirection="column" alignItems="center" justifyContent="center" cursor="pointer" borderColor={selectedRagSource.type === type ? "var(--neutral-500)" : "var(--neutral-800)"} backgroundColor={selectedRagSource.type === type ? "rgb(255 255 255 / 0.2)" : undefined} hoverStyle={selectedRagSource.type === type ? undefined : { borderColor: "var(--neutral-700)" }}
                            onClick={() => {
                              const updated = { ...selectedRagSource, type };
                              handleRagSourceChange(updated);
                              setSelectedRagSource(updated);
                            }}
                          >
                            {type === 'database' && <Box render="span" display="inline-flex" alignItems="center" marginBottom={4}><Database size={20} color="var(--foreground)" /></Box>}
                            {type === 'vector' && <Box render="span" display="inline-flex" alignItems="center" marginBottom={4}><Activity size={20} color="var(--foreground)" /></Box>}
                            {type === 'file' && <Box render="span" display="inline-flex" alignItems="center" marginBottom={4}><FileText size={20} color="var(--foreground)" /></Box>}
                            {type === 'api' && <Box render="span" display="inline-flex" alignItems="center" marginBottom={4}><Globe size={20} color="var(--foreground)" /></Box>}
                            <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" textTransform="capitalize">{type}</Text>
                          </YStack>
                        ))}
                      </Grid>
                    </div>

                    <div>
                      <Text render="label" display="block" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginBottom={4}>Connection String</Text>
                      <Input 
                        value={selectedRagSource.connection}
                        onChange={(e) => {
                          const updated = { ...selectedRagSource, connection: e.target.value };
                          handleRagSourceChange(updated);
                          setSelectedRagSource(updated);
                        }}
                        backgroundColor="var(--neutral-900)" borderColor="var(--neutral-800)" fontFamily="var(--font-mono)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)"
                        placeholder={
                          selectedRagSource.type === 'database' ? 'postgres://user:pass@host/db' :
                          selectedRagSource.type === 'vector' ? 'pinecone://index' :
                          selectedRagSource.type === 'file' ? '/path/to/document.pdf' :
                          'https://api.example.com/endpoint'
                        }
                      />
                    </div>
                  </Box>
                ) : (
                  <XStack height="100%" display="flex" alignItems="center" justifyContent="center" color="var(--neutral-500)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                    Select a knowledge source or add a new one
                  </XStack>
                )}
              </Box>
            </Grid>
          )}

          {activeTab === 'settings' && (
            <Box rowGap={24}>
              <div>
                <Text render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" marginBottom={4}>Agent Type</Text>
                <Input 
                  name="type"
                  value={editedAgent.type}
                  onChange={handleInputChange}
                  backgroundColor="var(--neutral-900)" borderColor="var(--neutral-800)"
                />
              </div>

              <div>
                <H3 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" marginBottom={8}>Advanced Settings</H3>
                <Box rowGap={16} backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={16}>
                  <div>
                    <Text render="label" display="block" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginBottom={4}>Memory Limit (%)</Text>
                    <Input 
                      type="number"
                      name="memory"
                      value={editedAgent.memory}
                      onChange={handleInputChange}
                      min="0"
                      max="100"
                      backgroundColor="var(--neutral-900)" borderColor="var(--neutral-800)"
                    />
                  </div>
                  
                  <div>
                    <Text render="label" display="block" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginBottom={4}>Execution Priority</Text>
                    <Box display="inline-block" minHeight={44} render="select" width="100%" backgroundColor="var(--neutral-900)" borderColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                      <option>Normal</option>
                      <option>High</option>
                      <option>Low</option>
                    </Box>
                  </div>

                  <div>
                    <Text render="label" display="block" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginBottom={4}>Execution Mode</Text>
                    <Box display="inline-block" minHeight={44} render="select" width="100%" backgroundColor="var(--neutral-900)" borderColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                      <option>Automatic</option>
                      <option>Manual</option>
                      <option>Scheduled</option>
                    </Box>
                  </div>
                </Box>
              </div>
            </Box>
          )}
        </Box>

        <XStack display="flex" justifyContent="flex-end" gap={8} paddingTop={16} borderTopWidth={1} borderColor="var(--neutral-800)" marginTop={16}>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Save size={16} /></Box>
            Save Agent
          </Button>
        </XStack>
      </DialogContent>
    </Dialog>
  );
};

export default AgentDetail;
