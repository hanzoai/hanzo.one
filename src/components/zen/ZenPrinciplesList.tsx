import { Box, Grid, H3, XStack } from '@/gui'

import React from "react";
import ZenPrincipleCard, { ZenPrinciple } from "./ZenPrincipleCard";

interface ZenPrinciplesListProps {
  principles: ZenPrinciple[];
  groupByDiscipline?: boolean;
}

const ZenPrinciplesList: React.FC<ZenPrinciplesListProps> = ({ 
  principles, 
  groupByDiscipline = false 
}) => {
  // Group principles by discipline
  const disciplineGroups = React.useMemo(() => {
    if (!groupByDiscipline) return null;

    const groups: Record<string, ZenPrinciple[]> = {};
    principles.forEach(principle => {
      const discipline = principle.discipline || "Uncategorized";
      if (!groups[discipline]) {
        groups[discipline] = [];
      }
      groups[discipline].push(principle);
    });
    return groups;
  }, [principles, groupByDiscipline]);

  if (groupByDiscipline && disciplineGroups) {
    return (
      <Box rowGap={48}>
        {Object.entries(disciplineGroups).map(([discipline, disciplinePrinciples]) => (
          <Box key={discipline} rowGap={24}>
            <XStack display="flex" alignItems="center" columnGap={8}>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--foreground)">{discipline}</H3>
              <Box height={1} flexGrow={1} backgroundColor="rgb(255 255 255 / 0.2)"></Box>
            </XStack>
            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              {disciplinePrinciples.map((principle, index) => (
                <ZenPrincipleCard 
                  key={principle.title} 
                  principle={principle} 
                  index={index} 
                />
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
      {principles.map((principle, index) => (
        <ZenPrincipleCard key={principle.title} principle={principle} index={index} />
      ))}
    </Grid>
  );
};

export default ZenPrinciplesList;
