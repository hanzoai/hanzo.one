import { Box, H2, MotionBox, Paragraph, Text } from '@/gui'
import React from "react";
import { motion } from "framer-motion";

interface CompatibilityItem {
  name: string;
  compatible: string;
}

const ecosystemItems: CompatibilityItem[] = [
  { name: "Analytics", compatible: "Insights" },
  { name: "Web Analytics", compatible: "Umami" },
  { name: "Experiments", compatible: "GrowthBook" },
  { name: "Engage", compatible: "Dittofeed" },
  { name: "Automations", compatible: "Activepieces" },
  { name: "PubSub", compatible: "NATS" },
  { name: "Tasks", compatible: "Temporal" },
  { name: "CX", compatible: "Chatwoot" },
];

const EcosystemBadge: React.FC<{ item: CompatibilityItem; index: number }> = ({
  item,
  index,
}) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      
      whileHover={{ scale: 1.02, backgroundColor: "rgba(253, 68, 68, 0.08)" }}
      flexDirection="row" display="inline-flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)" cursor="default" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))"
    >
      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)">{item.name}</Text>
      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">
        ({item.compatible}-compatible)
      </Text>
    </MotionBox>
  );
};

const EcosystemSection: React.FC = () => {
  return (
    <Box render="section" paddingVertical={64} paddingHorizontal={16} backgroundColor="var(--pure-black)" $md={{ paddingHorizontal: 32 }}>
      <Box maxWidth="64rem" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={40}
        >
          <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="500" color="var(--foreground)" marginBottom={8} $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>
            Ecosystem
          </H2>
          <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
            Drop-in compatible, unified experience.
          </Paragraph>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          flexDirection="row" display="flex" flexWrap="wrap" justifyContent="center" gap={12}
        >
          {ecosystemItems.map((item, index) => (
            <EcosystemBadge key={item.name} item={item} index={index} />
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
};

export default EcosystemSection;
