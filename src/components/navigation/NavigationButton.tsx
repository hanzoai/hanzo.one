import { Box, XStack } from '@/gui'

import { ChevronDown } from "lucide-react";
import { type ReactNode, forwardRef } from "react";

interface NavigationButtonProps {
  children: ReactNode;
  onHoverStart?: () => void;
  onClick?: () => void;
  noChevron?: boolean;
  isActive?: boolean;
}

export const NavigationButton = forwardRef<HTMLButtonElement, NavigationButtonProps>(
  ({ children, onHoverStart, onClick, noChevron = false, isActive = false, ...props }, ref) => {
    return (
      <XStack minHeight={44} 
        ref={ref}
        render="button" display="inline-flex" alignItems="center" outlineStyle="none" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" focusStyle={{ outlineStyle: "none" }} color={isActive ? "var(--foreground)" : "var(--neutral-300)"} hoverStyle={isActive ? undefined : { color: "var(--foreground)" }}
        onMouseEnter={onHoverStart}
        onClick={onClick}
        {...props}
      >
        {children}
        {!noChevron && (
          <Box render="span" display="inline-flex" alignItems="center" marginLeft={4}><ChevronDown 
            size={16} 
          /></Box>
        )}
      </XStack>
    );
  }
);

NavigationButton.displayName = "NavigationButton";
