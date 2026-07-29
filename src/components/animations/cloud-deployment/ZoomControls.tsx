import { XStack, YStack } from '@/gui'

import React from "react";

const ZoomControls: React.FC = () => {
  return (
    <YStack position="absolute" left={16} top={16} zIndex={20} display="flex" flexDirection="column" gap={8} borderRadius="var(--radius-md)" backgroundColor="var(--surface-overlay)" padding={4}>
      <XStack render="button" display="flex" height={32} width={32} alignItems="center" justifyContent="center" borderRadius="var(--radius)" color="var(--neutral-300)" hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M9 3v18" />
          <path d="M3 9h18" />
        </svg>
      </XStack>
      <XStack render="button" display="flex" height={32} width={32} alignItems="center" justifyContent="center" borderRadius="var(--radius)" color="var(--neutral-300)" hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </XStack>
      <XStack render="button" display="flex" height={32} width={32} alignItems="center" justifyContent="center" borderRadius="var(--radius)" color="var(--neutral-300)" hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
        </svg>
      </XStack>
      <XStack render="button" display="flex" height={32} width={32} alignItems="center" justifyContent="center" borderRadius="var(--radius)" color="var(--neutral-300)" hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="8" height="8" x="2" y="2" rx="2" />
          <rect width="8" height="8" x="14" y="2" rx="2" />
          <rect width="8" height="8" x="2" y="14" rx="2" />
          <rect width="8" height="8" x="14" y="14" rx="2" />
        </svg>
      </XStack>
    </YStack>
  );
};

export default ZoomControls;
