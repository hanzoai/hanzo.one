import { Box, Button, Link } from '@/gui'

import React from "react";
import { ExternalLink } from "lucide-react";


const ExploreAllButton: React.FC = () => {
  return (
    <Box textAlign="center" marginTop={32}>
      <Button variant="outline" group asChild>
        <Link minHeight={44} to="/cloud">
          View all Cloud 
          <Box render="span" display="inline-flex" alignItems="center" marginLeft={8} $group-hover={{ x: 4 }}><ExternalLink size={16} /></Box>
        </Link>
      </Button>
    </Box>
  );
};

export default ExploreAllButton;
