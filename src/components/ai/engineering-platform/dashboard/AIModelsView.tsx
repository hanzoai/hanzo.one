import { Box, Grid, H3, MotionBox, Text, XStack } from '@/gui'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, BrainCog, Activity, ServerCog, Zap, Terminal } from "lucide-react";
import { aiModels } from "../data/aiModels";

const AIModelsView = () => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  return (
    <Box rowGap={16}>
      <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={16}>
        <H3 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--white)">AI Model Registry</H3>
        <XStack display="flex" columnGap={8}>
          <XStack minHeight={44} render="button" paddingHorizontal={8} paddingVertical={4} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-md)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)" display="flex" alignItems="center">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><BrainCog size={12} /></Box>
            Deploy Model
          </XStack>
          <XStack minHeight={44} render="button" paddingHorizontal={8} paddingVertical={4} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-md)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" display="flex" alignItems="center">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Terminal size={12} /></Box>
            Import
          </XStack>
        </XStack>
      </XStack>

      <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={12}>
        {aiModels.map((model) => (
          <MotionBox
            key={model.id}
            padding={12} borderRadius="var(--radius-lg)" borderWidth={1} cursor="pointer" hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }} backgroundColor={selectedModel === model.id ? "rgb(255 255 255 / 0.2)" : "rgb(255 255 255 / 0.4)"} borderColor={selectedModel === model.id ? "rgb(255 255 255 / 0.4)" : "rgb(255 255 255 / 0.4)"}
            onClick={() => setSelectedModel(model.id)}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <XStack display="flex" alignItems="flex-start" justifyContent="space-between">
              <div>
                <XStack display="flex" alignItems="center">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><BrainCircuit size={16} color="var(--foreground)" /></Box>
                  <Text fontWeight="500" color="var(--white)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{model.name}</Text>
                  <Text marginLeft={8} paddingHorizontal={6} paddingVertical={2} backgroundColor="var(--surface-overlay)" borderRadius="var(--radius)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)">{model.type}</Text>
                </XStack>
                <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginTop={4}>Provider: {model.provider}</Box>
              </div>
              <XStack display="flex" alignItems="center" columnGap={16}>
                <Box textAlign="right">
                  <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)">Accuracy</Box>
                  <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)">{model.accuracy}%</Box>
                </Box>
                <Box textAlign="right">
                  <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)">Latency</Box>
                  <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)">{model.latency}ms</Box>
                </Box>
              </XStack>
            </XStack>

            {selectedModel === model.id && (
              <MotionBox 
                marginTop={12} paddingTop={12} borderTopWidth={1} borderColor="var(--border-strong)" display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap={12}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <XStack minHeight={44} render="button" paddingHorizontal={8} paddingVertical={6} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)" display="flex" alignItems="center" justifyContent="center">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={6}><Activity size={12} /></Box>
                  Benchmark
                </XStack>
                <XStack minHeight={44} render="button" paddingHorizontal={8} paddingVertical={6} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)" display="flex" alignItems="center" justifyContent="center">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={6}><ServerCog size={12} /></Box>
                  Fine-tune
                </XStack>
                <XStack minHeight={44} render="button" paddingHorizontal={8} paddingVertical={6} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)" display="flex" alignItems="center" justifyContent="center">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={6}><Zap size={12} /></Box>
                  Deploy
                </XStack>
              </MotionBox>
            )}
          </MotionBox>
        ))}
      </Grid>
    </Box>
  );
};

export default AIModelsView;
