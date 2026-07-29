import { Badge, Box, Grid, H3, MotionBox, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Video, Bot } from "lucide-react";

const VideoMeetingsCard = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" overflow="hidden" boxShadow="0 20px 25px -5px rgb(0 0 0 / .4)"
    >
      <XStack borderBottomWidth={1} borderColor="var(--neutral-800)" padding={12} display="flex" alignItems="center">
        <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Video size={20} color="var(--foreground)" /></Box>
        <Text fontWeight="500">Video Meetings</Text>
        <Badge variant="outline" marginLeft="auto" backgroundColor="var(--surface-card-emphasis)" borderColor="var(--border-strong)" color="var(--foreground)">
          Zoom-style
        </Badge>
      </XStack>
      <Box padding={16}>
        <Box backgroundColor="rgb(0 0 0 / 0.6)" borderRadius="var(--radius-lg)" padding={16}>
          <XStack marginBottom={16} display="flex" alignItems="center" justifyContent="space-between">
            <H3 fontWeight="500" color="var(--white)">Weekly Sprint Planning</H3>
            <Badge backgroundColor="var(--surface-card-emphasis)" color="var(--foreground)" borderColor="var(--border-strong)">Live</Badge>
          </XStack>
          
          <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={8} marginBottom={12}>
            <Box aspectRatio={1.7777777777777777} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-md)" position="relative">
              <Box position="absolute" bottom={8} left={8} backgroundColor="rgb(0 0 0 / 0.6)" paddingHorizontal={8} paddingVertical={4} borderRadius="var(--radius)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">Sarah Johnson</Box>
            </Box>
            <Box aspectRatio={1.7777777777777777} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-md)" position="relative">
              <Box position="absolute" bottom={8} left={8} backgroundColor="rgb(0 0 0 / 0.6)" paddingHorizontal={8} paddingVertical={4} borderRadius="var(--radius)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">John Doe</Box>
            </Box>
            <Box aspectRatio={1.7777777777777777} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-md)" position="relative" borderWidth={1} borderColor="var(--border-strong)">
              <XStack position="absolute" top={0} right={0} bottom={0} left={0} display="flex" alignItems="center" justifyContent="center">
                <Bot size={40} color="var(--foreground)" />
              </XStack>
              <Box position="absolute" bottom={8} left={8} backgroundColor="var(--surface-overlay)" paddingHorizontal={8} paddingVertical={4} borderRadius="var(--radius)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">DevBot</Box>
            </Box>
            <Box aspectRatio={1.7777777777777777} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-md)" position="relative" borderWidth={1} borderColor="var(--border-strong)">
              <XStack position="absolute" top={0} right={0} bottom={0} left={0} display="flex" alignItems="center" justifyContent="center">
                <Bot size={40} color="var(--foreground)" />
              </XStack>
              <Box position="absolute" bottom={8} left={8} backgroundColor="var(--surface-overlay)" paddingHorizontal={8} paddingVertical={4} borderRadius="var(--radius)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">AnalyticsBot</Box>
            </Box>
          </Grid>

          <Box textAlign="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" paddingVertical={4}>
            AI agents are learning from this meeting and will automatically implement the discussed tasks
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default VideoMeetingsCard;
