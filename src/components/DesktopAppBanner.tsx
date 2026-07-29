import { Anchor, Box, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Monitor, Download, ExternalLink } from "lucide-react";

const STORAGE_KEY = "hanzo-desktop-banner-dismissed";

interface DesktopAppBannerProps {
  variant?: "floating" | "inline";
}

const DesktopAppBanner = ({ variant = "floating" }: DesktopAppBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    // Check if already dismissed
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) return;

    // Check if on macOS
    const platform = navigator.platform.toLowerCase();
    const isMacOS = platform.includes("mac");
    setIsMac(isMacOS);

    // Show after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  const downloadUrl = isMac
    ? "https://github.com/hanzoai/hanzo-dev/releases/latest/download/Hanzo-Dev-darwin-arm64.dmg"
    : "https://github.com/hanzoai/hanzo-dev/releases";

  if (variant === "inline") {
    return (
      <AnimatePresence>
        {isVisible && (
          <MotionBox
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundImage="linear-gradient(to right, var(--neutral-900), var(--neutral-800))"
          >
            <XStack maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} paddingVertical={12} display="flex" alignItems="center" justifyContent="space-between" gap={16}>
              <XStack display="flex" alignItems="center" gap={12}>
                <XStack width={32} height={32} borderRadius="var(--radius-lg)" backgroundColor="color-mix(in srgb, var(--brand) 20%, transparent)" display="flex" alignItems="center" justifyContent="center">
                  <Monitor size={16} color="var(--brand)" />
                </XStack>
                <div>
                  <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" fontWeight="500">
                    Hanzo Dev Desktop App
                  </Paragraph>
                  <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)">
                    Native performance. All your tools in one place.
                  </Paragraph>
                </div>
              </XStack>
              <XStack display="flex" alignItems="center" gap={8}>
                <Anchor tap
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  display="inline-flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" backgroundColor="var(--brand)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--brand-muted)" }}
                >
                  <Download size={16} />
                  {isMac ? "Download for Mac" : "Download"}
                </Anchor>
                <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                  onClick={handleDismiss}
                  render="button" padding={8} borderRadius="var(--radius-full)" color="var(--neutral-500)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)", backgroundColor: "var(--neutral-800)" }}
                >
                  <X size={16} />
                </Box>
              </XStack>
            </XStack>
          </MotionBox>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionBox
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          position="fixed" bottom={96} left={24} zIndex={40} maxWidth="24rem"
        >
          <Box backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-2xl)" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)" overflow="hidden">
            {/* Header with close button */}
            <XStack display="flex" alignItems="center" justifyContent="space-between" paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)">
              <XStack display="flex" alignItems="center" gap={8}>
                <XStack width={24} height={24} borderRadius="var(--radius-md)" backgroundColor="color-mix(in srgb, var(--brand) 20%, transparent)" display="flex" alignItems="center" justifyContent="center">
                  <Monitor size={14} color="var(--brand)" />
                </XStack>
                <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" color="var(--foreground)">NEW</Text>
              </XStack>
              <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                onClick={handleDismiss}
                render="button" padding={4} borderRadius="var(--radius-md)" color="var(--neutral-500)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)", backgroundColor: "var(--neutral-800)" }}
              >
                <X size={16} />
              </Box>
            </XStack>

            {/* Content */}
            <Box padding={16}>
              <H3 fontSize="var(--text-base)" lineHeight="var(--leading-base)" fontWeight="600" color="var(--foreground)" marginBottom={4}>
                Get Hanzo Dev for Desktop
              </H3>
              <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginBottom={16}>
                Native app with faster performance, offline access, and system integrations.
              </Paragraph>

              <XStack display="flex" alignItems="center" gap={8}>
                <Anchor tap
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  flex={1} display="inline-flex" alignItems="center" justifyContent="center" gap={8} paddingHorizontal={16} paddingVertical={10} borderRadius="var(--radius-lg)" backgroundColor="var(--brand)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--brand-muted)" }}
                >
                  <Download size={16} />
                  {isMac ? "Download for Mac" : "Download"}
                </Anchor>
                <Anchor tap
                  href="/dev"
                  paddingHorizontal={16} paddingVertical={10} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-700)" color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-800)", color: "var(--foreground)" }}
                >
                  Learn more
                </Anchor>
              </XStack>

              {/* Platform note */}
              <Paragraph marginTop={12} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" display="flex" alignItems="center" gap={4}>
                {isMac ? (
                  <>Apple Silicon & Intel supported</>
                ) : (
                  <>
                    <ExternalLink size={12} />
                    Also available for Windows & Linux
                  </>
                )}
              </Paragraph>
            </Box>
          </Box>
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default DesktopAppBanner;
