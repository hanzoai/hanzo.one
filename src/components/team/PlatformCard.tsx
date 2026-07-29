import { Box, H3, Paragraph, XStack } from '@/gui'

import { LucideIcon } from "lucide-react";

interface PlatformCardProps {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

const PlatformCard = ({ name, role, description, icon: Icon, gradient }: PlatformCardProps) => {
  return (
    <Box group position="relative" borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="rgb(0 0 0 / 0.5)" padding={32} backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" overflow="hidden">
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0} transition="opacity 500ms ease-in-out" $group-hover={{ opacity: 0.1 }} />
      <XStack display="inline-flex" padding={12} borderRadius="var(--radius-xl)" marginBottom={16}>
        <Icon height={24} width={24} color="var(--white)" />
      </XStack>
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={8}>{name}</H3>
      <Paragraph color="var(--neutral-400)" fontWeight="500" marginBottom={12}>{role}</Paragraph>
      <Paragraph color="var(--neutral-400)">{description}</Paragraph>
    </Box>
  );
};

export default PlatformCard;
