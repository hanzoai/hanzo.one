import { Box, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { 
  Code, Terminal, Paintbrush, Layout, 
  RefreshCcw, SquareCode, ThumbsUp, Layers 
} from "lucide-react";

const features = [
  {
    icon: <Terminal size={24} color="var(--foreground)" />,
    title: "CLI Support for Tailwind v4",
    description: "Initialize new projects with Tailwind v4 using the updated CLI."
  },
  {
    icon: <SquareCode size={24} color="var(--foreground)" />,
    title: "@theme Directive Support",
    description: "Full support for the new @theme directive and @theme inline option."
  },
  {
    icon: <RefreshCcw size={24} color="var(--foreground)" />,
    title: "Forwards Compatibility",
    description: "Existing apps with Tailwind v3 and React 18 will still work with new components."
  },
  {
    icon: <Code size={24} color="var(--foreground)" />,
    title: "No More forwardRefs",
    description: "We've removed the forwardRefs and adjusted the types for better DX."
  },
  {
    icon: <Layers size={24} color="var(--foreground)" />,
    title: "Data Slot Attributes",
    description: "Every primitive now has a data-slot attribute for styling."
  },
  {
    icon: <Paintbrush size={24} color="var(--foreground)" />,
    title: "Clean Component Styles",
    description: "We've fixed and cleaned up the styling of all components."
  },
  {
    icon: <Layout size={24} color="var(--foreground)" />,
    title: "New Default Style",
    description: "New projects will use new-york style by default."
  },
  {
    icon: <ThumbsUp size={24} color="var(--foreground)" />,
    title: "OKLCH Color Conversion",
    description: "HSL colors are now automatically converted to OKLCH."
  }
];

const FeaturesSection = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="rgb(0 0 0 / 0.3)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} color="var(--foreground)" $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>What's New in v4?</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Explore the latest features and improvements in shadcn/ui with Tailwind v4 and React 19.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          {features.map((feature, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
              backgroundColor="var(--surface-card-emphasis)" padding={24} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
            >
              <XStack backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" width={48} height={48} display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
                {feature.icon}
              </XStack>
              <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={8} color="var(--foreground)">{feature.title}</H3>
              <Paragraph color="var(--neutral-400)">{feature.description}</Paragraph>
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FeaturesSection;
