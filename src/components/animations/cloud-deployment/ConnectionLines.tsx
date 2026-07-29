import { Box } from '@/gui'

import React from "react";
import { NodeType, ConnectionType } from "./types";

interface ConnectionLinesProps {
  connections: ConnectionType[];
  nodes: NodeType[];
}

const ConnectionLines: React.FC<ConnectionLinesProps> = ({ connections, nodes }) => {
  // Helper to find node by id
  const findNodeById = (id: string) => {
    return nodes.find(node => node.id === id);
  };

  // We're returning an empty SVG container without rendering any lines
  // This effectively removes all network lines from the canvas demo
  return (
    <Box display="inline-block" render="svg" position="absolute" top={0} right={0} bottom={0} left={0} height="100%" width="100%" pointerEvents="none">
      {/* Connection lines have been removed */}
    </Box>
  );
};

export default ConnectionLines;
