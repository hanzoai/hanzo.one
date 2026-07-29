import { Box, Grid, H3, MotionBox, MotionText, Paragraph, Text, XStack } from '@/gui'

import { motion } from "framer-motion";
import { MessageSquare, Hash, Users, Search, ChevronDown } from "lucide-react";

const TeamSlack = () => {
  const channels = [
    "general", "design-ideas", "dev-chat", "marketing", "project-updates"
  ];

  const messages = [
    { user: "Dev", message: "Just pushed the new feature to staging ✨", time: "10:30 AM" },
    { user: "Des", message: "The UI looks amazing! Great work team!", time: "10:31 AM" },
    { user: "Mark", message: "Engagement metrics are through the roof 📈", time: "10:32 AM" },
    { user: "Vi", message: "Outstanding progress everyone!", time: "10:33 AM" }
  ];

  return (
    <MotionBox 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      maxWidth="var(--container-wide)" marginHorizontal="auto" marginBottom={96} paddingHorizontal={16}
    >
      <MotionText 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" textAlign="center" marginBottom={48}
      >
        Watch Our Team in Action
      </MotionText>
      <MotionBox 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="rgb(0 0 0 / 0.5)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" overflow="hidden"
      >
        <Grid display="grid" gridTemplateColumns="repeat(4, minmax(0, 1fr))">
          {/* Sidebar */}
          <MotionBox 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            gridColumn="span 1 / span 1" borderRightWidth={1} borderColor="var(--neutral-800)" padding={16}
          >
            <XStack display="flex" alignItems="center" justifyContent="space-between" padding={8} marginBottom={16}>
              <H3 color="var(--foreground)" fontWeight="600">Hanzo Team</H3>
              <ChevronDown size={16} color="var(--neutral-400)" />
            </XStack>
            <Box rowGap={8}>
              {channels.map((channel, idx) => (
                <MotionBox
                  key={channel}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + (idx * 0.1) }}
                  whileHover={{ x: 4 }}
                  flexDirection="row" display="flex" alignItems="center" gap={8} padding={8} borderRadius="var(--radius)" cursor="pointer" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.05)" }}
                >
                  <Hash size={16} color="var(--neutral-400)" />
                  <Text color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{channel}</Text>
                </MotionBox>
              ))}
            </Box>
          </MotionBox>

          {/* Chat Area */}
          <MotionBox 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            gridColumn="span 3 / span 3" padding={16}
          >
            <MotionBox 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
              flexDirection="row" display="flex" alignItems="center" gap={16} padding={16} borderBottomWidth={1} borderColor="var(--neutral-800)" marginBottom={16}
            >
              <Hash size={20} color="var(--neutral-400)" />
              <Text color="var(--white)" fontWeight="500">general</Text>
            </MotionBox>
            <Box rowGap={16}>
              {messages.map((msg, idx) => (
                <MotionBox
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + (idx * 0.2) }}
                  flexDirection="row" display="flex" alignItems="flex-start" gap={12}
                >
                  <XStack width={32} height={32} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" color="var(--white)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" backgroundImage="linear-gradient(to bottom right, var(--neutral-500), var(--neutral-500))">
                    {msg.user[0]}
                  </XStack>
                  <div>
                    <XStack display="flex" alignItems="center" gap={8}>
                      <Text fontWeight="500" color="var(--white)">{msg.user}</Text>
                      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)">{msg.time}</Text>
                    </XStack>
                    <Paragraph color="var(--neutral-300)">{msg.message}</Paragraph>
                  </div>
                </MotionBox>
              ))}
            </Box>
          </MotionBox>
        </Grid>
      </MotionBox>
    </MotionBox>
  );
};

export default TeamSlack;
