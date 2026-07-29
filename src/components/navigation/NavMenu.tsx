import { Box, XStack, YStack } from '@/gui'
import { useState, ReactNode, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useTheme } from "@/contexts/ThemeContext";

type NavMenuProps = {
  label: string;
  children: ReactNode | ((closeMenu: () => void) => ReactNode);
};

export const NavMenu = ({ label, children }: NavMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { isDarkMode } = useTheme();
  
  const toggleMenu = () => {
    if (!isDesktop) {
      setIsOpen(!isOpen);
    }
  };
  
  // Add a delay for menu closing to make hover more forgiving
  const closeTimeoutRef = useRef<number | null>(null);
  
  const handleMouseEnter = () => {
    if (isDesktop) {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      closeTimeoutRef.current = window.setTimeout(() => {
        setIsOpen(false);
      }, 150); // 150ms delay before closing
    }
  };
  
  const closeMenu = () => setIsOpen(false);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Handle click outside to close the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isDesktop && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDesktop]);

  // Pass closeMenu function to children if they are a function
  const childrenWithProps = typeof children === "function" 
    ? children(closeMenu) 
    : children;

  return (
    <Box 
      position="relative" 
      ref={menuRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Menu trigger button */}
      <XStack
        render="button"
        onPress={toggleMenu}
        minHeight={44}
        display="inline-flex"
        alignItems="center"
        outlineStyle="none"
        backgroundColor="transparent"
        borderWidth={0}
        cursor="pointer"
        transition="color var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))"
        fontSize="var(--text-sm)"
        fontWeight="500"
        color={isOpen
          ? (isDarkMode ? 'var(--foreground)' : 'var(--pure-black)')
          : (isDarkMode ? 'var(--neutral-400)' : 'var(--neutral-600)')}
        hoverStyle={{ color: isDarkMode ? 'var(--foreground)' : 'var(--pure-black)' }}
      >
        {label}
        <Box render="span" display="inline-flex" alignItems="center" marginLeft={4}><ChevronDown
          size={16}
        /></Box>
      </XStack>

      {/* Dropdown content */}
      {isOpen && (
        <>
          {/* Desktop: Full viewport width dropdown with backdrop */}
          {isDesktop ? (
            <Box position="fixed" left={0} width="100%" backdropFilter="blur(12px)" WebkitBackdropFilter="blur(12px)" zIndex={50} borderBottomWidth={1} boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)" backgroundColor={isDarkMode ? "rgb(0 0 0 / 0.95)" : "rgb(255 255 255 / 0.95)"} borderColor={isDarkMode ? "rgb(255 255 255 / 0.5)" : "var(--neutral-200)"}
                 style={{
                   top: 'var(--header-height)',
                 }}>
              <Box paddingVertical={24}>
                <Box width="100%" maxWidth="1400px" marginHorizontal="auto" paddingHorizontal={16} $md={{ paddingHorizontal: 32 }} $lg={{ paddingHorizontal: 48 }}>
                  {childrenWithProps}
                </Box>
              </Box>
            </Box>
          ) : (
            /* Mobile: Full-viewport menu overlay */
            <Box
              position="fixed" top={0} right={0} bottom={0} left={0} backdropFilter="blur(12px)" WebkitBackdropFilter="blur(12px)" zIndex={50} width="100vw" transition="opacity 300ms ease-in-out" backgroundColor={isDarkMode ? "rgb(0 0 0 / 0.95)" : "rgb(255 255 255 / 0.95)"}
              style={{
                top: 'var(--header-height)',
                height: 'calc(100vh - var(--header-height))',
                width: '100vw'
              }}
              onClick={closeMenu}
            >
              <Box 
                position="relative" width="100%" height="100%" overflowY="auto"
                onClick={(e) => e.stopPropagation()}
              >
                <YStack paddingHorizontal={16} paddingVertical={24} height="100%" display="flex" flexDirection="column" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
                  <Box flexGrow={1} overflowX="hidden">
                    {childrenWithProps}
                  </Box>
                </YStack>
              </Box>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default NavMenu;