import { Box, Grid, YStack } from '@/gui'

import { solutions } from "@/constants/navigation";
import { SolutionCategory } from "./SolutionCategory";
import { AgencyCard } from "./AgencyCard";
import { SenseiCard } from "./SenseiCard";
import { useIsMobile } from "@/hooks/use-mobile";

interface SolutionsContentProps {
  onCloseMenu: () => void;
}

export const SolutionsContent = ({ onCloseMenu }: SolutionsContentProps) => {
  const isMobile = useIsMobile();
  
  return (
    <YStack display="flex" gap={24} flexDirection={isMobile ? "column" : "row"}>
      <Grid display="grid" gap={32} width={isMobile ? "100%" : undefined} flex={isMobile ? undefined : 1} gridTemplateColumns={isMobile ? "repeat(1, minmax(0, 1fr))" : "repeat(2, minmax(0, 1fr))"}>
        {solutions.map((category, idx) => (
          <SolutionCategory
            key={idx}
            title={category.title}
            items={category.items}
            onItemClick={onCloseMenu}
          />
        ))}
      </Grid>

      <Box rowGap={16} flexShrink={0} width={isMobile ? "100%" : 320}>
        <AgencyCard onCardClick={onCloseMenu} />
        <SenseiCard onCardClick={onCloseMenu} />
      </Box>
    </YStack>
  );
};
