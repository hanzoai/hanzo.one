import { Box, Link, MotionBox, Text, XStack } from '@/gui'
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom'
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

// Logo SVG for clipboard copy
const LOGO_SVG = `<svg viewBox="0 0 67 67" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.21 67V44.6369H0V67H22.21Z" fill="currentColor"/>
  <path d="M0 44.6369L22.21 46.8285V44.6369H0Z" fill="#DDDDDD"/>
  <path d="M66.7038 22.3184H22.2534L0.0878906 44.6367H44.4634L66.7038 22.3184Z" fill="currentColor"/>
  <path d="M22.21 0H0V22.3184H22.21V0Z" fill="currentColor"/>
  <path d="M66.7198 0H44.5098V22.3184H66.7198V0Z" fill="currentColor"/>
  <path d="M66.6753 22.3185L44.5098 20.0822V22.3185H66.6753Z" fill="#DDDDDD"/>
  <path d="M66.7198 67V44.6369H44.5098V67H66.7198Z" fill="currentColor"/>
</svg>`;

// Context menu items for right-click
const contextMenuItems = [
  { label: "Copy Logo SVG", action: "copy-svg" },
  { label: "Brand Guidelines", href: "/brand" },
  { divider: true },
  { label: "All Products", href: "/products" },
  { label: "Hanzo Dev", href: "/dev" },
  { label: "AI & Models", href: "/ai" },
  { label: "Hanzo Cloud", href: "/cloud" },
  { divider: true },
  { label: "Documentation", href: "https://docs.hanzo.ai", external: true },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Sales", href: "/contact" },
  { label: "Status", href: "/status" },
];

const Logo = () => {
  const { isDarkMode } = useTheme();
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showIntroWordmark, setShowIntroWordmark] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Animation variants for the container
  const logoVariants = {
    initial: {
      opacity: 0,
      rotateY: 180,
      scale: 0.6
    },
    animate: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        staggerChildren: 0.12,
        when: "beforeChildren"
      }
    }
  };

  // Path animation variants
  const pathVariants = {
    initial: (custom: number) => ({
      opacity: 0,
      scale: 0.8,
      x: custom % 2 === 0 ? -15 : 15,
      y: custom % 3 === 0 ? -15 : 15,
      rotate: custom * 5
    }),
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  // After logo animation, show wordmark briefly then hide
  useEffect(() => {
    const animTimer = setTimeout(() => {
      setAnimationComplete(true);
      setShowIntroWordmark(true);
    }, 1200);

    // Hide the intro wordmark after showing it
    const hideTimer = setTimeout(() => {
      setShowIntroWordmark(false);
    }, 2500);

    return () => {
      clearTimeout(animTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Close context menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setContextMenu(null);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setContextMenu(null);
    };

    if (contextMenu) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [contextMenu]);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const handleMenuItemClick = async (item: typeof contextMenuItems[0]) => {
    setContextMenu(null);
    if ('action' in item && item.action === 'copy-svg') {
      try {
        await navigator.clipboard.writeText(LOGO_SVG);
        // Could add a toast notification here
      } catch (err) {
        console.error('Failed to copy SVG:', err);
      }
    } else if ('external' in item && item.external) {
      window.open(item.href, "_blank");
    } else if (item.href) {
      navigate(item.href);
    }
  };

  const fillColor = isDarkMode ? "#ffffff" : "#000000";
  const accentColor = isDarkMode ? "#DDDDDD" : "#DDDDDD";

  // Show wordmark when hovering OR during intro animation
  const shouldShowWordmark = isHovered || showIntroWordmark;

  return (
    <>
      <Link tap
        to="/"
        group position="relative" display="flex" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onContextMenu={handleContextMenu}
      >
        <MotionBox
          initial="initial"
          animate="animate"
          variants={logoVariants}
          width={24} height={24} position="relative" flexShrink={0}
          onAnimationComplete={() => setAnimationComplete(true)}
          style={{ transformOrigin: "center center" }}
        >
          <Box display="inline-block"
            viewBox="0 0 67 67"
            xmlns="http://www.w3.org/2000/svg"
            render="svg" width="100%" height="100%"
          >
            <motion.path
              custom={1}
              variants={pathVariants}
              d="M22.21 67V44.6369H0V67H22.21Z"
              fill={fillColor}
            />
            <motion.path
              custom={1.5}
              variants={pathVariants}
              d="M0 44.6369L22.21 46.8285V44.6369H0Z"
              fill={accentColor}
            />
            <motion.path
              custom={2}
              variants={pathVariants}
              d="M66.7038 22.3184H22.2534L0.0878906 44.6367H44.4634L66.7038 22.3184Z"
              fill={fillColor}
            />
            <motion.path
              custom={3}
              variants={pathVariants}
              d="M22.21 0H0V22.3184H22.21V0Z"
              fill={fillColor}
            />
            <motion.path
              custom={4}
              variants={pathVariants}
              d="M66.7198 0H44.5098V22.3184H66.7198V0Z"
              fill={fillColor}
            />
            <motion.path
              custom={4.5}
              variants={pathVariants}
              d="M66.6753 22.3185L44.5098 20.0822V22.3185H66.6753Z"
              fill={accentColor}
            />
            <motion.path
              custom={5}
              variants={pathVariants}
              d="M66.7198 67V44.6369H44.5098V67H66.7198Z"
              fill={fillColor}
            />
          </Box>
        </MotionBox>

        {/* Wordmark - absolute positioned so it doesn't shift other content */}
        <Box position="absolute" left={32} overflow="hidden">
          <Text
            fontWeight="700" fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" whiteSpace="nowrap" display="block" transition="transform 300ms ease-out" color={isDarkMode ? "var(--foreground)" : "var(--neutral-900)"} x={shouldShowWordmark ? 0 : "-100%"}
          >
            Hanzo
          </Text>
        </Box>
      </Link>

      {/* Right-click context menu */}
      <AnimatePresence>
        {contextMenu && (
          <MotionBox
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            position="fixed" zIndex={200} borderRadius="var(--radius-lg)" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)" paddingVertical={4} minWidth="180px" borderWidth={1} backgroundColor={isDarkMode ? "var(--pure-black)" : "var(--foreground)"} borderColor={isDarkMode ? "var(--neutral-800)" : "var(--neutral-200)"}
            style={{ left: contextMenu.x, top: contextMenu.y }}
          >
            {contextMenuItems.map((item, index) =>
              'divider' in item ? (
                <Box key={index} borderTopWidth={1} marginVertical={4} borderColor={isDarkMode ? "var(--neutral-800)" : "var(--neutral-200)"} />
              ) : (
                <XStack minHeight={44}
                  key={item.label}
                  onClick={() => handleMenuItemClick(item)}
                  render="button" width="100%" textAlign="left" paddingHorizontal={12} paddingVertical={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" display="flex" alignItems="center" justifyContent="space-between" color={isDarkMode ? "var(--neutral-300)" : "var(--neutral-700)"} hoverStyle={isDarkMode ? { backgroundColor: "var(--neutral-800)", color: "var(--foreground)" } : { backgroundColor: "var(--neutral-100)", color: "var(--pure-black)" }}
                >
                  {item.label}
                  {'action' in item && item.action === 'copy-svg' && (
                    <Box display="inline-block" render="svg" width={12} height={12} color={isDarkMode ? "var(--neutral-500)" : "var(--neutral-400)"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </Box>
                  )}
                  {'external' in item && item.external && (
                    <Box display="inline-block" render="svg" width={12} height={12} color={isDarkMode ? "var(--neutral-500)" : "var(--neutral-400)"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </Box>
                  )}
                </XStack>
              )
            )}
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
};

export default Logo;
