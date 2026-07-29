import { Box, Grid, H3, Link, XStack } from '@/gui'

import { getIcon } from "@/constants/iconMappings";


interface SolutionCategoryProps {
  title: string;
  items: string[];
  onItemClick: () => void;
}

export const SolutionCategory = ({ title, items, onItemClick }: SolutionCategoryProps) => {
  // Display 8 items per category
  const displayItems = items.slice(0, 8);

  return (
    <Box rowGap={16}>
      <XStack display="flex" alignItems="center" justifyContent="space-between">
        <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--white)">{title}</H3>
        <Link tap 
          to="/solutions" 
          color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" hoverStyle={{ color: "var(--foreground)" }}
          onClick={onItemClick}
        >
          View all
        </Link>
      </XStack>
      
      <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={12}>
        {displayItems.map((item: string) => {
          const Icon = getIcon(item);
          const itemSlug = item.toLowerCase().replace(/\s+/g, '-');
          return (
            <Link minHeight={44} 
              to={`/solutions/${itemSlug}`} 
              key={item} 
              group display="flex" columnGap={12}
              onClick={onItemClick}
            >
              <XStack width={40} height={40} display="flex" alignItems="center" justifyContent="center" flexShrink={0}>
                <Icon height={20} width={20} color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--white)" }} strokeWidth={1.5} />
              </XStack>
              <Box flex={1}>
                <Box color="var(--neutral-300)" fontWeight="500" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" $group-hover={{ color: "var(--white)" }}>{item}</Box>
              </Box>
            </Link>
          );
        })}
      </Grid>
    </Box>
  );
};
