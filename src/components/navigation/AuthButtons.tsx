import { Anchor, Box as GuiBox, Button, Grid, Link, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React, { useState, useRef, useEffect } from "react";

import { Search, ChevronDown, ExternalLink, Brain, Video, Music, Box, Cpu, Sparkles, Zap } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

interface AuthButtonsProps {
  user: any | null;
  onOpenCommandPalette?: () => void;
}

// Zen model family for dropdown
const zenModels = [
  {
    name: "zen-eco",
    params: "4B",
    description: "Fast general-purpose LLM",
    icon: Brain,
    href: "https://huggingface.co/zenlm/zen-eco-4b-instruct",
    external: true,
  },
  {
    name: "zen-omni",
    params: "8B",
    description: "Multimodal vision + audio",
    icon: Sparkles,
    href: "https://huggingface.co/zenlm/zen-omni-8b",
    external: true,
  },
  {
    name: "zen-director",
    params: "5B",
    description: "Text-to-video generation",
    icon: Video,
    href: "https://huggingface.co/zenlm/zen-director-5b",
    external: true,
  },
  {
    name: "zen-3d",
    params: "3.3B",
    description: "3D asset generation",
    icon: Box,
    href: "https://huggingface.co/zenlm/zen-3d",
    external: true,
  },
];

// Quick access items
const quickAccess = [
  { label: "Hanzo Dev", href: "/dev", external: false },
  { label: "Hanzo Cloud", href: "https://cloud.hanzo.ai", external: true },
  { label: "All Zen Models", href: "/zen", external: false },
  { label: "Pricing", href: "/pricing", external: false },
];

// Login items
const loginItems = [
  { label: "hanzo.chat", href: "https://hanzo.chat", external: true },
  { label: "Console login", href: "https://cloud.hanzo.ai", external: true },
];

const AuthButtons = ({ user, onOpenCommandPalette }: AuthButtonsProps) => {
  const { isDarkMode } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDropdownOpen(false);
    };

    if (isDropdownOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isDropdownOpen]);

  return (
    <GuiBox display="none" alignItems="center" columnGap={12} $md={{ display: "flex" }}>
      {/* Search / Command palette trigger - unified widget */}
      <XStack minHeight={44}
        onClick={onOpenCommandPalette}
        render="button" display="flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={6} borderRadius="var(--radius-lg)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--neutral-400)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ color: "var(--foreground)", backgroundColor: "var(--neutral-800)", borderColor: "var(--neutral-600)" }}
        aria-label="Search (⌘K)"
      >
        <Search size={16} />
        <Text display="none" color="var(--neutral-500)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" $lg={{ display: "inline" }}>Search...</Text>
        {/* The search box around this IS a control, so it keeps --border-strong.
            The ⌘K chip inside it is a legend for that control, not another one —
            a second strong edge 1px inside the first only reads as noise. */}
        <Text display="inline-flex" alignItems="center" gap={2} paddingHorizontal={6} paddingVertical={2} fontSize="10px" fontFamily="var(--font-mono)" backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--border-hairline)" borderRadius="var(--radius)" color="var(--neutral-500)">
          <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">⌘</Text>K
        </Text>
      </XStack>

      {/* Contact sales button */}
      <Link tap to="/contact">
        <Button
          variant="ghost"
          size="sm"
          color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" height={36} hoverStyle={{ color: "var(--foreground)", backgroundColor: "transparent" }}
        >
          Contact sales
        </Button>
      </Link>

      {/* Try Hanzo dropdown - hover activated */}
      <GuiBox
        position="relative"
        ref={dropdownRef}
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <XStack
          render="button" display="inline-flex" alignItems="center" justifyContent="center" gap={8} backgroundColor="var(--foreground)" color="var(--pure-black)" borderRadius="var(--radius-full)" height={36} paddingHorizontal={16} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="all 200ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ backgroundColor: "var(--neutral-200)" }} pressStyle={{ backgroundColor: "var(--neutral-300)" }}
        >
          Try Hanzo
          <ChevronDown size={16} />
        </XStack>

        <AnimatePresence>
          {isDropdownOpen && (
            <MotionBox
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              position="absolute" right={0} marginTop={8} width="420px" backgroundColor="var(--surface-overlay)" backdropFilter="blur(24px)" WebkitBackdropFilter="blur(24px)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-2xl)" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)" overflow="hidden" zIndex={100}
            >
              {/* Zen AI Models - Featured Section */}
              <GuiBox padding={16}>
                <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={12}>
                  <XStack display="flex" alignItems="center" gap={8}>
                    <Zap size={16} color="var(--foreground)" />
                    <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="600" color="var(--foreground)" textTransform="uppercase" letterSpacing="0.05em">
                      Zen AI Models
                    </Text>
                  </XStack>
                  <Link tap
                    to="/zen"
                    onClick={() => setIsDropdownOpen(false)}
                    fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
                  >
                    View all →
                  </Link>
                </XStack>

                <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={8}>
                  {zenModels.map((model) => {
                    const ModelIcon = model.icon;
                    return (
                      <Anchor tap
                        key={model.name}
                        href={model.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsDropdownOpen(false)}
                        group display="flex" alignItems="flex-start" gap={12} padding={12} borderRadius="var(--radius-xl)" backgroundColor="var(--surface-card-emphasis)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
                      >
                        <XStack width={32} height={32} borderRadius="var(--radius-lg)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" flexShrink={0}>
                          <ModelIcon width={16} height={16} color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }} />
                        </XStack>
                        <GuiBox minWidth={0}>
                          <XStack display="flex" alignItems="center" gap={8}>
                            <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)">{model.name}</Text>
                            <Text fontSize="10px" fontFamily="var(--font-mono)" color="var(--neutral-500)">{model.params}</Text>
                          </XStack>
                          <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">{model.description}</Paragraph>
                        </GuiBox>
                      </Anchor>
                    );
                  })}
                </Grid>
              </GuiBox>

              <GuiBox borderTopWidth={1} borderColor="var(--neutral-800)" />

              {/* Quick Access */}
              <GuiBox paddingVertical={8}>
                <GuiBox paddingHorizontal={16} paddingVertical={6}>
                  <Text fontSize="10px" fontWeight="500" color="var(--neutral-500)" textTransform="uppercase" letterSpacing="0.05em">
                    Quick Access
                  </Text>
                </GuiBox>
                {quickAccess.map((item) => {
                  const content = (
                    <XStack display="flex" alignItems="center" justifyContent="space-between" width="100%" paddingVertical={8} paddingHorizontal={16} color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{item.label}</Text>
                      {item.external && <ExternalLink size={14} color="var(--neutral-500)" />}
                    </XStack>
                  );

                  if (item.external) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <Link tap key={item.label} to={item.href} onClick={() => setIsDropdownOpen(false)}>
                      {content}
                    </Link>
                  );
                })}
              </GuiBox>

              <GuiBox borderTopWidth={1} borderColor="var(--neutral-800)" />

              {/* Login Section */}
              <GuiBox paddingVertical={8}>
                <GuiBox paddingHorizontal={16} paddingVertical={6}>
                  <Text fontSize="10px" fontWeight="500" color="var(--neutral-500)" textTransform="uppercase" letterSpacing="0.05em">
                    Log in
                  </Text>
                </GuiBox>
                {loginItems.map((item) => (
                  <Anchor tap
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsDropdownOpen(false)}
                    display="flex" alignItems="center" justifyContent="space-between" width="100%" paddingVertical={8} paddingHorizontal={16} color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}
                  >
                    <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{item.label}</Text>
                    <ExternalLink size={14} color="var(--neutral-500)" />
                  </Anchor>
                ))}
              </GuiBox>
            </MotionBox>
          )}
        </AnimatePresence>
      </GuiBox>
    </GuiBox>
  );
};

export default AuthButtons;
