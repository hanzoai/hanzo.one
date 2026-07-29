import { Box, TooltipProvider } from '@/gui'

import React, { useState } from "react";
import { useDeploymentSequence } from "./hooks/useDeploymentSequence";
import BackgroundGrid from "./BackgroundGrid";
import ZoomControls from "./ZoomControls";
import ConnectionLines from "./ConnectionLines";
import DeploymentNodeWithTooltip from "./DeploymentNode";
import Notifications from "./Notifications";
import NodeDetailsDialog from "./NodeDetailsDialog";
import { NodeType } from "./types";

const CloudDeployment: React.FC = () => {
  const { nodes, connections, scanPoints, notifications, removeNotification } = useDeploymentSequence();
  const [selectedNode, setSelectedNode] = useState<NodeType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Handle node click
  const handleNodeClick = (node: NodeType) => {
    setSelectedNode(node);
    setIsDialogOpen(true);
  };

  return (
    <Box position="relative" height="460px" width="100%" overflow="hidden" borderRadius="var(--radius-xl)" backgroundColor="rgb(0 0 0 / 0.9)" borderWidth={1} borderColor="var(--neutral-800)" boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)">
      {/* Semi-transparent blue gradient overlay */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} pointerEvents="none" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"></Box>
      
      {/* Zoom controls */}
      <ZoomControls />
      
      {/* Background grid points */}
      <BackgroundGrid scanPoints={scanPoints} />
      
      {/* Connection lines */}
      <ConnectionLines connections={connections} nodes={nodes} />
      
      {/* Nodes */}
      <TooltipProvider>
        {nodes.map(node => (
          <DeploymentNodeWithTooltip 
            key={node.id} 
            node={node}
            onClick={handleNodeClick}
          />
        ))}
      </TooltipProvider>
      
      {/* Notifications */}
      <Notifications 
        notifications={notifications}
        onDismiss={removeNotification}
      />
      
      {/* Node details dialog */}
      <NodeDetailsDialog 
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        selectedNode={selectedNode}
      />
    </Box>
  );
};

export default CloudDeployment;
