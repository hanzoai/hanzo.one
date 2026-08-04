import { Box, XStack } from '@/gui'
import React, { ReactNode } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface NavbarContainerProps {
  children: ReactNode;
  isScrolled: boolean;
}

const NavbarContainer = ({ children, isScrolled }: NavbarContainerProps) => {
  const { isDarkMode, getGlassClass } = useTheme();
  
  return (
    <Box
      render="nav" position="fixed" width="100%" zIndex={50} transition="all 300ms cubic-bezier(.4,0,.2,1)" backdropFilter={isScrolled ? "blur(12px)" : "blur(4px)"} WebkitBackdropFilter={isScrolled ? "blur(12px)" : "blur(4px)"} boxShadow={isScrolled ? "0 1px 2px 0 rgb(0 0 0 / .3)" : undefined}
      /* The bar is fixed to the top of a `viewport-fit=cover` viewport, so on a
         notched phone the row would sit under the status bar. The blur and the
         background still bleed up into the cutout; only the row steps down. */
      paddingTop="var(--safe-top)"
    >
      <Box width="100%" maxWidth="1440px" marginHorizontal="auto" paddingHorizontal={16} $md={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <XStack display="flex" alignItems="center" height="var(--header-height)">
          {children}
        </XStack>
      </Box>
    </Box>
  );
};

export default NavbarContainer;