import { Box, H3, Link, XStack } from '@/gui'


import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  link: string;
  linkText: string;
}

const SectionHeader = ({ title, link, linkText }: SectionHeaderProps) => {
  return (
    <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={16}>
      <Link minHeight={44} display="inline-flex" alignItems="center" to={link}>
        <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--neutral-300)" }}>
          {title}
        </H3>
      </Link>
      <Link minHeight={44} 
        to={link} 
        group fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" display="flex" hoverStyle={{ color: "var(--foreground)" }}
      >
        {linkText}
        <Box render="span" display="inline-flex" alignItems="center" marginLeft={4} $group-hover={{ x: 2 }}><ChevronRight size={16} /></Box>
      </Link>
    </XStack>
  );
};

export default SectionHeader;
