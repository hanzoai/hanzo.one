import { Box, MotionBox, Paragraph, YStack } from '@/gui'

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  icon: LucideIcon;
  gradient: string;
}

const LastSupper = ({ members }: { members: TeamMember[] }) => {
  return (
    <Box paddingVertical={48}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16}>
        <YStack position="relative" display="flex" flexDirection="column" alignItems="center">
          {/* Fireworks GIF animation positioned directly over members */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            position="relative" marginBottom="-5%" zIndex={0} // Changed z-index to 0 to be behind text
          >
            <MotionBox 
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnBuZzFlZWxzNnN3dzVzZzBqbTB2eHMxd2IzMjIwMG03eWN3MWZreiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/odsNxyQQDb29O/giphy.gif" 
              alt="Fireworks animation"
              width={384} height={384} objectFit="cover"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </MotionBox>
          
          {/* Team members row */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            flexDirection="row" display="flex" alignItems="center" justifyContent="center" gap={16} overflowX="auto" zIndex={20} // Added z-index to ensure it's above the GIF
          >
            {members.map((member, index) => {
              const Icon = member.icon;
              return (
                <MotionBox
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  flexShrink={0} textAlign="center" position="relative" zIndex={20} // Added relative and z-index to ensure text is on top
                >
                  <Box width={64} height={64} borderRadius="var(--radius-full)" padding={16} marginHorizontal="auto" marginBottom={8}>
                    <Icon width="100%" height="100%" color="var(--white)" />
                  </Box>
                  <Paragraph color="var(--white)" fontWeight="500">{member.name}</Paragraph>
                  <Paragraph color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{member.role}</Paragraph>
                </MotionBox>
              );
            })}
          </MotionBox>
        </YStack>
      </Box>
    </Box>
  );
};

export default LastSupper;
