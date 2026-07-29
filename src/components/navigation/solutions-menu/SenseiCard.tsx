import { Anchor, Box, H3, Paragraph, XStack } from '@/gui'

import { Shield, ArrowRight } from "lucide-react";

interface SenseiCardProps {
  onCardClick: () => void;
}

export const SenseiCard = ({ onCardClick }: SenseiCardProps) => {
  return (
    <Anchor 
      href="https://sensei.group" 
      target="_blank" 
      rel="noopener noreferrer"
      display="flex" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" cursor="pointer" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" padding={16} height="200px" flexDirection="column" justifyContent="space-between" backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" hoverStyle={{ borderColor: "var(--border-strong)" }}
      onClick={onCardClick}
    >
      <div>
        <XStack display="flex" alignItems="center" gap={8} marginBottom={12}>
          <XStack padding={6} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)" display="flex" alignItems="center" justifyContent="center" width={32} height={32}>
            <Shield size={16} color="var(--foreground)" strokeWidth={1.5} />
          </XStack>
          <H3 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="600" color="var(--white)">Sensei Group</H3>
        </XStack>
        <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)">
          Accelerate enterprise transformation with our elite collective of CXOs and technology experts. We guide organizations through digital evolution with strategic implementation.
        </Paragraph>
      </div>
      <XStack group display="flex" alignItems="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)" fontWeight="500">
        <span>Learn more</span>
        <Box render="span" display="inline-flex" alignItems="center" marginLeft={4} $group-hover={{ x: 4 }}><ArrowRight size={12} /></Box>
      </XStack>
    </Anchor>
  );
};
