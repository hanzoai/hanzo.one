import { Box, Grid, H3, MotionBox, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Activity, Terminal, ChartLine } from "lucide-react";

const ObservabilityView = () => {
  return (
    <Box rowGap={16}>
      <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={16}>
        <H3 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--white)">AI Observability Dashboard</H3>
        <XStack display="flex" columnGap={8}>
          <XStack minHeight={44} render="button" paddingHorizontal={8} paddingVertical={4} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-md)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)" display="flex" alignItems="center">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Activity size={12} /></Box>
            Real-time
          </XStack>
          <XStack minHeight={44} render="button" paddingHorizontal={8} paddingVertical={4} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-md)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" display="flex" alignItems="center">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Terminal size={12} /></Box>
            Logs
          </XStack>
        </XStack>
      </XStack>

      <Grid display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap={12} marginBottom={16}>
        <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" padding={12}>
          <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginBottom={4}>Requests</Box>
          <Box fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" color="var(--white)">3,452</Box>
          <XStack marginTop={4} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)" display="flex" alignItems="center">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><ChartLine size={12} /></Box>
            +18% from yesterday
          </XStack>
        </Box>
        <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" padding={12}>
          <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginBottom={4}>Avg. Latency</Box>
          <Box fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" color="var(--white)">94ms</Box>
          <XStack marginTop={4} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)" display="flex" alignItems="center">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><ChartLine size={12} /></Box>
            -12ms from yesterday
          </XStack>
        </Box>
        <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" padding={12}>
          <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginBottom={4}>Error Rate</Box>
          <Box fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" color="var(--white)">0.4%</Box>
          <XStack marginTop={4} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)" display="flex" alignItems="center">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><ChartLine size={12} /></Box>
            -0.2% from yesterday
          </XStack>
        </Box>
      </Grid>

      <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" padding={12} marginBottom={16}>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginBottom={8}>Response Time Trend</Box>
        <XStack height={96} display="flex" alignItems="flex-end" columnGap={4}>
          {[35, 42, 38, 30, 45, 55, 47, 40, 48, 60, 53, 41, 48, 50, 58, 45, 43, 49, 55, 62].map((value, index) => (
            <MotionBox
              key={index}
              backgroundColor="var(--surface-overlay)" borderTopLeftRadius="var(--radius)" borderTopRightRadius="var(--radius)" width="100%"
              style={{ height: `${value}%` }}
              initial={{ height: 0 }}
              animate={{ height: `${value}%` }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
            />
          ))}
        </XStack>
        <XStack display="flex" justifyContent="space-between" marginTop={4} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">
          <span>00:00</span>
          <span>12:00</span>
          <span>23:59</span>
        </XStack>
      </Box>

      <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" padding={12}>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginBottom={8}>Recent Traces</Box>
        <Box rowGap={8}>
          {[
            { id: "t1", model: "GPT-4o", time: "2m ago", status: "success", duration: "92ms" },
            { id: "t2", model: "Llama 3", time: "5m ago", status: "success", duration: "84ms" },
            { id: "t3", model: "Claude 3", time: "12m ago", status: "error", duration: "176ms" },
            { id: "t4", model: "Mixtral", time: "18m ago", status: "success", duration: "78ms" },
          ].map((trace) => (
            <XStack key={trace.id} display="flex" alignItems="center" justifyContent="space-between" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" padding={6} borderRadius="var(--radius)" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
              <XStack display="flex" alignItems="center">
                <Box width={6} height={6} borderRadius="var(--radius-full)" marginRight={8} backgroundColor={trace.status === "success" ? "var(--neutral-500)" : "var(--neutral-500)"}></Box>
                <Text color="var(--neutral-300)">{trace.model}</Text>
              </XStack>
              <XStack display="flex" alignItems="center" columnGap={12}>
                <Text color="var(--neutral-400)">{trace.time}</Text>
                <Text color={trace.status === "success" ? "var(--foreground)" : "var(--foreground)"}>{trace.duration}</Text>
              </XStack>
            </XStack>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ObservabilityView;
