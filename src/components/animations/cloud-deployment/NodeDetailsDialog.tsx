import { Box, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, Grid, H4, Text, XStack } from '@/gui'

import React from "react";
import { NodeType } from "./types";

interface NodeDetailsDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedNode: NodeType | null;
}

const NodeDetailsDialog: React.FC<NodeDetailsDialogProps> = ({ isOpen, onOpenChange, selectedNode }) => {
  if (!selectedNode) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {selectedNode.label}
          </DialogTitle>
          <DialogDescription>
            {selectedNode.statusMessage}
          </DialogDescription>
        </DialogHeader>
        
        <Box padding={16} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-md)" marginBottom={16}>
          <H4 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-300)" marginBottom={8}>Service Details</H4>
          <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" rowGap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
            <Box color="var(--neutral-400)">Status</Box>
            <Box color="var(--neutral-200)">
              {selectedNode.status === 'deployed' && <Text color="var(--foreground)">Deployed</Text>}
              {selectedNode.status === 'pending' && <Text color="var(--foreground)">Pending</Text>}
              {selectedNode.status === 'error' && <Text color="var(--foreground)">Failed</Text>}
            </Box>
            
            <Box color="var(--neutral-400)">Type</Box>
            <Box color="var(--neutral-200)">{selectedNode.type}</Box>
            
            <Box color="var(--neutral-400)">Created</Box>
            <Box color="var(--neutral-200)">Just now</Box>
          </Grid>
        </Box>
        
        <XStack display="flex" justifyContent="flex-end" columnGap={8}>
          <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} 
            render="button" paddingHorizontal={12} paddingVertical={6} borderRadius="var(--radius)" backgroundColor="var(--neutral-800)" color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
            onClick={() => onOpenChange(false)}
          >
            Close
          </Box>
          <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} 
            render="button" paddingHorizontal={12} paddingVertical={6} borderRadius="var(--radius)" backgroundColor="var(--neutral-600)" color="var(--white)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
            onClick={() => onOpenChange(false)}
          >
            View Details
          </Box>
        </XStack>
      </DialogContent>
    </Dialog>
  );
};

export default NodeDetailsDialog;
