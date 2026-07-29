import { Box, MotionBox, Paragraph, XStack, YStack } from '@/gui'

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Cloud } from "lucide-react";
import { NotificationType } from "./types";

interface NotificationsProps {
  notifications: NotificationType[];
  onDismiss: (id: string) => void;
}

const Notifications: React.FC<NotificationsProps> = ({ notifications, onDismiss }) => {
  return (
    <YStack position="absolute" top={8} right={8} zIndex={30} display="flex" flexDirection="column" rowGap={8} maxWidth="20rem">
      <AnimatePresence>
        {notifications.map(notification => (
          <MotionBox
            key={notification.id}
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            borderRadius="var(--radius-md)"
            padding={12}
            boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)"
            borderWidth={1}
            backgroundColor="rgb(255 255 255 / 0.06)"
            borderColor={notification.type === 'error' ? 'var(--border-strong)' : 'var(--border)'}
          >
            <XStack display="flex" alignItems="flex-start">
              <Box flexShrink={0} marginTop={2}>
                {notification.type === 'success' && <Check size={16} color="var(--foreground)" />}
                {notification.type === 'error' && <X size={16} color="var(--foreground)" />}
                {notification.type === 'info' && <Cloud size={16} color="var(--foreground)" />}
              </Box>
              <Box marginLeft={8}>
                <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-100)">{notification.title}</Paragraph>
                <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)">{notification.message}</Paragraph>
              </Box>
              <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} 
                render="button" marginLeft={16} flexShrink={0} color="var(--neutral-400)" hoverStyle={{ color: "var(--neutral-300)" }}
                onClick={() => onDismiss(notification.id)}
              >
                <X size={16} />
              </Box>
            </XStack>
          </MotionBox>
        ))}
      </AnimatePresence>
    </YStack>
  );
};

export default Notifications;
