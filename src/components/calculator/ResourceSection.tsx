import { Box, H3, Paragraph, Slider, Text, XStack } from '@/gui'

import React from "react";

interface ResourceSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: number;
  onChange: (value: number[]) => void;
  min: number;
  max: number;
  cost: number;
  unit: string;
}

const ResourceSection = ({
  icon,
  title,
  description,
  value,
  onChange,
  min,
  max,
  cost,
  unit
}: ResourceSectionProps) => {
  return (
    <Box padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="#333" backgroundColor="var(--surface-card-emphasis)" hoverStyle={{ borderColor: "var(--neutral-700)" }}>
      <XStack display="flex" alignItems="center" gap={12} marginBottom={16}>
        <Box color="var(--neutral-400)">
          {icon}
        </Box>
        <div>
          <H3 fontWeight="500">{title}</H3>
          <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{description}</Paragraph>
        </div>
      </XStack>

      <Box rowGap={16}>
        <XStack display="flex" justifyContent="space-between" alignItems="center">
          <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{value} {unit}</Text>
          <Text fontWeight="600">${cost.toFixed(2)}/mo</Text>
        </XStack>

        <Slider
          value={[value]}
          onValueChange={onChange}
          min={min}
          max={max}
          step={1}
          marginVertical={16}
        />

        <XStack display="flex" justifyContent="space-between" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">
          <span>{min}</span>
          <span>{max}</span>
        </XStack>
      </Box>
    </Box>
  );
};

export default ResourceSection;
