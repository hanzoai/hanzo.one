import { Box, Grid, Link, XStack } from '@/gui'


import { ProductItem } from "./types";
import { useState } from "react";

interface ProductGridProps {
  items: ProductItem[];
}

const ProductGrid = ({ items }: ProductGridProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} maxHeight="360px" overflowY="auto" paddingRight={8} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
      {items.map((item) => (
        <XStack
          key={item.name}
          group display="flex" alignItems="flex-start" columnGap={12}
          onMouseEnter={() => setHoveredItem(item.name)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <item.icon 
            height={24} width={24} marginTop={4} transition="color, background-color, border-color, fill, stroke 200ms cubic-bezier(.4,0,.2,1)" color={hoveredItem === item.name ? "var(--foreground)" : "var(--neutral-400)"} $group-hover={hoveredItem === item.name ? undefined : { color: "var(--white)" }} 
          />
          <Box flex={1}>
            <Link tap to={item.link} color="var(--neutral-300)" fontWeight="500" $group-hover={{ color: "var(--white)" }}>
              {item.name}
            </Link>
            <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">{item.description}</Box>
          </Box>
        </XStack>
      ))}
    </Grid>
  );
};

export default ProductGrid;
