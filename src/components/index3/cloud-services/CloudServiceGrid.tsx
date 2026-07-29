import { ArchitecturalBox, Box, Button, Grid, GridLines, H3, Link, Paragraph, XStack } from '@/gui'

import React from "react";
import CloudServiceCard from "./CloudServiceCard";
import { cloudServiceData } from "./cloudServiceData";


interface CloudServiceGridProps {
  isHovered: string | null;
  setIsHovered: (id: string | null) => void;
}

const CloudServiceGrid: React.FC<CloudServiceGridProps> = ({ isHovered, setIsHovered }) => {
  // Get all but the last item for regular display
  const mainServices = cloudServiceData.slice(0, 11);
  
  return (
    <Box rowGap={32} position="relative">
      {/* Add architectural grid lines */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} zIndex={-10}>
        <GridLines spacing={60} opacity={0.15} color="rgba(59, 130, 246, 0.2)" />
      </Box>
      
      <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }} $xl={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }} $md={{ gap: 24 }}>
        {/* Regular service cards */}
        {mainServices.map((service) => (
          <CloudServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            features={service.features}
            icon={service.icon}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            color={service.color}
          />
        ))}
        
        {/* Special "Learn More" card as the last item */}
        <Link
          to="/cloud"
          backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="all 300ms cubic-bezier(.4,0,.2,1)" height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" hoverStyle={{ backgroundColor: "var(--surface-card)" }}
          onMouseEnter={() => setIsHovered("learn-more")}
          onMouseLeave={() => setIsHovered(null)}
        >
          <Box textAlign="center" rowGap={16}>
            <XStack width={48} height={48} marginHorizontal="auto" backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" display="flex" alignItems="center" justifyContent="center">
              <Box display="inline-block" xmlns="http://www.w3.org/2000/svg" render="svg" height={24} width={24} color="var(--foreground)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </Box>
            </XStack>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)">Explore More</H3>
            <Paragraph color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Discover our full range of cloud solutions and services</Paragraph>
            <Button 
              marginTop={8} color="var(--white)" borderStyle="none" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-500))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--foreground))" }}
              radius="full"
            >
              View All Services
            </Button>
          </Box>
        </Link>
      </Grid>
    </Box>
  );
};

export default CloudServiceGrid;
