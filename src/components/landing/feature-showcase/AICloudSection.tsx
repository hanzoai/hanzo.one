import { Box, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, ScrollArea, XStack } from '@/gui'

import React from "react";
import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";
import ViewAllButton from "./ViewAllButton";
import { ProductItem } from "@/components/navigation/products-menu/types";

interface AICloudSectionProps {
  products: ProductItem[];
}

const AICloudSection: React.FC<AICloudSectionProps> = ({ products }) => {
  return (
    <Box marginBottom={80}>
      <SectionHeader
        badge="AI Cloud"
        badgeColor="bg-blue-900/30 border border-blue-500/30 text-blue-300"
        title="Scalable Infrastructure for AI Applications"
        description="Build high-performance AI applications with our suite of cloud services designed for AI workloads."
      />

      {/* Desktop layout - Carousel for larger screens */}
      <Box display="none" position="relative" marginBottom={32} $md={{ display: "block" }}>
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          width="100%"
        >
          <CarouselContent marginLeft={-16}>
            {products.map((product, index) => (
              <CarouselItem key={index} paddingLeft={16} $md={{ flexBasis: "50%" }} $lg={{ flexBasis: "33.333333%" }} $xl={{ flexBasis: "25%" }}>
                <Box height="100%">
                  <ProductCard
                    icon={<product.icon color="var(--foreground)" />}
                    title={product.name}
                    description={product.description}
                    color="bg-blue-900/30"
                    hoverColor="bg-blue-600/40"
                    link={product.link || "#"}
                  />
                </Box>
              </CarouselItem>
            ))}
          </CarouselContent>
          <Box display="none" alignItems="center" justifyContent="flex-end" gap={8} marginTop={24} $md={{ display: "flex" }}>
            <CarouselPrevious position="relative" top={0} left={0} backgroundColor="var(--surface-card-emphasis)" borderColor="var(--neutral-700)" hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }} />
            <CarouselNext position="relative" top={0} right={0} backgroundColor="var(--surface-card-emphasis)" borderColor="var(--neutral-700)" hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }} />
          </Box>
        </Carousel>
      </Box>

      {/* Mobile layout - Scrollable horizontal list for smaller screens */}
      <Box marginBottom={32} $md={{ display: "none" }}>
        <ScrollArea width="100%" whiteSpace="nowrap">
          <XStack display="flex" columnGap={16} paddingBottom={16} paddingHorizontal={4}>
            {products.map((product, index) => (
              <Box key={index} width="300px" flexShrink={0}>
                <ProductCard
                  icon={<product.icon color="var(--foreground)" />}
                  title={product.name}
                  description={product.description}
                  color="bg-blue-900/30"
                  hoverColor="bg-blue-600/40"
                  link={product.link || "#"}
                />
              </Box>
            ))}
          </XStack>
        </ScrollArea>
      </Box>
      
      <ViewAllButton 
        href="/ai"
        text="View all AI Cloud services"
        hoverColor="blue"
      />
    </Box>
  );
};

export default AICloudSection;
