import { Box, H3, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  onClick?: () => void;
}

const TeamMemberCard = ({ name, role, description, icon: Icon, gradient, onClick }: TeamMemberCardProps) => {
  return (
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      group position="relative" height="100%" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden" borderRadius="var(--radius-2xl)" backgroundColor="var(--surface-card-emphasis)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" cursor="pointer"
      onClick={onClick}
    >
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0} transition="opacity 500ms ease-in-out" zIndex={-10} $group-hover={{ opacity: 0.1 }} />
      <YStack display="flex" flexDirection="column" height="100%">
        <Box display="block" padding={32} position="relative" zIndex={10} flexGrow={1}>
          <XStack display="inline-flex" padding={12} borderRadius="var(--radius-xl)" marginBottom={16}>
            <Icon height={24} width={24} color="var(--foreground)" />
          </XStack>
          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={8} color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--neutral-300)" }}>{name}</H3>
          <Paragraph color="var(--neutral-400)" fontWeight="500" marginBottom={12}>{role}</Paragraph>
          <Paragraph color="var(--neutral-400)" marginBottom={16}>{description}</Paragraph>
        </Box>

        <Box paddingHorizontal={32} paddingBottom={32} position="relative" zIndex={10}>
          <MotionBox
            whileHover={{ scale: 1.05 }}
            flexDirection="row" display="flex" alignItems="center" justifyContent="center" paddingHorizontal={16} paddingVertical={8} backgroundColor="rgb(255 255 255 / 0.05)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-xl)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }} $group-hover={{ borderColor: "var(--border-strong)" }}
          >
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Info size={20} color="var(--foreground)" /></Box>
            <Text color="var(--foreground)">View Details</Text>
          </MotionBox>
        </Box>
      </YStack>

      {/* Hover effect */}
      <MotionBox 
        position="absolute" top={0} right={0} bottom={0} left={0} opacity={0} transition="opacity var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderRadius="var(--radius-2xl)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.05), rgb(255 255 255 / 0.05))" $group-hover={{ opacity: 1 }}
        initial={false}
        whileHover={{ opacity: 0.3 }}
      />
    </MotionBox>
  );
};

export default TeamMemberCard;