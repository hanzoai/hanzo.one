import { Box, XStack } from '@/gui'
import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { MobileMenu } from "./navigation/MobileMenu";
import Logo from "./navigation/Logo";
import DesktopNav from "./navigation/DesktopNav";
import AuthButtons from "./navigation/AuthButtons";
import NavbarContainer from "./navigation/NavbarContainer";
import CommandPalette from "./CommandPalette";

const isAccountRoute = () => {
  return window.location.pathname.startsWith('/account') ||
    window.location.pathname === '/dashboard' ||
    window.location.pathname === '/user-profile' ||
    window.location.pathname === '/organization-profile';
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!isAccountRoute()) {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global keyboard shortcut for command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleOpenCommandPalette = useCallback(() => {
    setIsCommandPaletteOpen(true);
  }, []);

  const handleCloseCommandPalette = useCallback(() => {
    setIsCommandPaletteOpen(false);
  }, []);

  return (
    <>
      <NavbarContainer isScrolled={isScrolled}>
        <XStack display="flex" alignItems="center" width="100%">
          {/* Left: Logo (right-click for explore menu) */}
          <Box flexShrink={0}>
            <Logo />
          </Box>

          {/* Center: Navigation */}
          <XStack flex={1} display="flex" justifyContent="center">
            <DesktopNav />
          </XStack>

          {/* Right: Auth Buttons */}
          <Box flexShrink={0}>
            <AuthButtons user={user} onOpenCommandPalette={handleOpenCommandPalette} />
          </Box>

          {/* Mobile Menu */}
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onOpenSearch={handleOpenCommandPalette}
          />
        </XStack>
      </NavbarContainer>

      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={handleCloseCommandPalette}
      />
    </>
  );
};

export default Navbar;
