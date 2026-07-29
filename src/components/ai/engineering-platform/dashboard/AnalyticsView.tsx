import { Box, Grid, H3, MotionBox, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { BarChart, Terminal } from "lucide-react";

const AnalyticsView = () => {
  return (
    <Box rowGap={16}>
      <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={16}>
        <H3 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--white)">AI Analytics</H3>
        <XStack display="flex" columnGap={8}>
          <XStack minHeight={44} render="button" paddingHorizontal={8} paddingVertical={4} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-md)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)" display="flex" alignItems="center">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><BarChart size={12} /></Box>
            Reports
          </XStack>
          <XStack minHeight={44} render="button" paddingHorizontal={8} paddingVertical={4} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-md)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" display="flex" alignItems="center">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Terminal size={12} /></Box>
            Export
          </XStack>
        </XStack>
      </XStack>

      <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={12} marginBottom={16}>
        <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" padding={12}>
          <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginBottom={4}>Model Usage</Box>
          <Box position="relative" height={128} marginTop={8}>
            <Box position="absolute" top={0} right={0} bottom={0} left={0}>
              <XStack height="100%" width="100%" display="flex">
                <MotionBox 
                  height="100%" backgroundColor="var(--surface-overlay)" borderTopLeftRadius="var(--radius)" borderBottomLeftRadius="var(--radius)"
                  initial={{ width: 0 }}
                  animate={{ width: "42%" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                />
                <MotionBox 
                  height="100%" backgroundColor="var(--surface-overlay)"
                  initial={{ width: 0 }}
                  animate={{ width: "28%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <MotionBox 
                  height="100%" backgroundColor="var(--surface-overlay)"
                  initial={{ width: 0 }}
                  animate={{ width: "15%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                <MotionBox 
                  height="100%" backgroundColor="var(--surface-overlay)" borderTopRightRadius="var(--radius)" borderBottomRightRadius="var(--radius)"
                  initial={{ width: 0 }}
                  animate={{ width: "15%" }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />
              </XStack>
            </Box>
          </Box>
          <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={8} marginTop={12}>
            <XStack display="flex" alignItems="center">
              <Box width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-600)" marginRight={8}></Box>
              <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)">GPT-4o (42%)</Text>
            </XStack>
            <XStack display="flex" alignItems="center">
              <Box width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" marginRight={8}></Box>
              <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)">Claude 3 (28%)</Text>
            </XStack>
            <XStack display="flex" alignItems="center">
              <Box width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" marginRight={8}></Box>
              <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)">Llama 3 (15%)</Text>
            </XStack>
            <XStack display="flex" alignItems="center">
              <Box width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" marginRight={8}></Box>
              <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)">Others (15%)</Text>
            </XStack>
          </Grid>
        </Box>
        <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" padding={12}>
          <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginBottom={4}>Cost Analysis</Box>
          <Box height={128} position="relative">
            <XStack position="absolute" bottom={0} width="100%" display="flex" alignItems="flex-end" columnGap={4}>
              {[35, 42, 38, 52, 45, 55, 47, 62, 48, 60, 53, 58].map((value, index) => (
                <MotionBox
                  key={index}
                  borderTopLeftRadius="var(--radius)" borderTopRightRadius="var(--radius)" width="100%" backgroundImage="linear-gradient(to top, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"
                  style={{ height: `${value}%` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${value}%` }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                />
              ))}
            </XStack>
          </Box>
          <XStack display="flex" justifyContent="space-between" marginTop={8} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">
            <span>Jan</span>
            <span>Jun</span>
            <span>Dec</span>
          </XStack>
          <Box marginTop={4} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)">
            $1,245 spent this month - <Text color="var(--foreground)">14% under budget</Text>
          </Box>
        </Box>
      </Grid>

      <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" padding={12}>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginBottom={8}>Performance Metrics</Box>
        <Box rowGap={12}>
          <div>
            <XStack display="flex" justifyContent="space-between" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" marginBottom={4}>
              <Text color="var(--neutral-300)">Response Quality</Text>
              <Text color="var(--neutral-300)">89%</Text>
            </XStack>
            <Box width="100%" backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" height={6}>
              <MotionBox 
                backgroundColor="var(--neutral-500)" height={6} borderRadius="var(--radius-full)" 
                initial={{ width: 0 }}
                animate={{ width: "89%" }}
                transition={{ duration: 0.8 }}
              />
            </Box>
          </div>
          <div>
            <XStack display="flex" justifyContent="space-between" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" marginBottom={4}>
              <Text color="var(--neutral-300)">User Satisfaction</Text>
              <Text color="var(--neutral-300)">94%</Text>
            </XStack>
            <Box width="100%" backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" height={6}>
              <MotionBox 
                backgroundColor="var(--neutral-500)" height={6} borderRadius="var(--radius-full)" 
                initial={{ width: 0 }}
                animate={{ width: "94%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </Box>
          </div>
          <div>
            <XStack display="flex" justifyContent="space-between" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" marginBottom={4}>
              <Text color="var(--neutral-300)">System Reliability</Text>
              <Text color="var(--neutral-300)">99.8%</Text>
            </XStack>
            <Box width="100%" backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" height={6}>
              <MotionBox 
                backgroundColor="var(--neutral-500)" height={6} borderRadius="var(--radius-full)" 
                initial={{ width: 0 }}
                animate={{ width: "99.8%" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </Box>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default AnalyticsView;
