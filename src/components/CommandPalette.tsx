import { Box, MotionBox, Text, XStack } from '@/gui'
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowRight,
  Terminal,
  Brain,
  Bot,
  Database,
  Zap,
  Shield,
  Cloud,
  Code,
  Server,
  Globe,
  CreditCard,
  Users,
  FileText,
  Settings,
  HelpCircle,
  ExternalLink,
  Command,
} from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

interface CommandItem {
  id: string;
  title: string;
  description?: string;
  href: string;
  icon: React.ElementType;
  category: string;
  external?: boolean;
  keywords?: string[];
}

const commands: CommandItem[] = [
  // Products
  { id: "dev", title: "Hanzo Dev", description: "Multi-agent coding workspace", href: "/dev", icon: Terminal, category: "Products", keywords: ["code", "coding", "agent"] },
  { id: "ai", title: "AI & Models", description: "Foundation models API", href: "/ai", icon: Brain, category: "Products", keywords: ["llm", "gpt", "model"] },
  { id: "operative", title: "Operative", description: "AI agents and automation", href: "/operative", icon: Bot, category: "Products", keywords: ["agent", "automation"] },
  { id: "base", title: "Hanzo Base", description: "Backend-as-a-Service", href: "/base", icon: Database, category: "Products", keywords: ["backend", "database"] },
  { id: "functions", title: "Functions", description: "Serverless compute", href: "/functions", icon: Zap, category: "Products", keywords: ["serverless", "lambda"] },
  { id: "vector", title: "Vector DB", description: "Vector database for AI", href: "/vector", icon: Database, category: "Products", keywords: ["embeddings", "rag"] },
  { id: "identity", title: "Identity", description: "Authentication & SSO", href: "/identity", icon: Shield, category: "Products", keywords: ["auth", "login", "sso"] },
  { id: "realtime", title: "Realtime", description: "WebSocket & live sync", href: "/realtime", icon: Globe, category: "Products", keywords: ["websocket", "sync"] },

  // Platform
  { id: "cloud", title: "Hanzo Cloud", description: "Complete cloud platform", href: "/cloud", icon: Cloud, category: "Platform", keywords: ["hosting", "deploy"] },
  { id: "platform", title: "Hanzo Platform", description: "Open source PaaS", href: "/platform", icon: Server, category: "Platform", keywords: ["self-host", "open source"] },
  { id: "blockchain", title: "Blockchain", description: "Web3 infrastructure", href: "/blockchain", icon: Code, category: "Platform", keywords: ["web3", "crypto"] },
  { id: "edge", title: "Edge", description: "Edge computing", href: "/edge", icon: Globe, category: "Platform", keywords: ["cdn", "edge"] },

  // Resources
  { id: "docs", title: "Documentation", description: "API docs and guides", href: "https://docs.hanzo.ai", icon: FileText, category: "Resources", external: true, keywords: ["api", "guide", "tutorial"] },
  { id: "pricing", title: "Pricing", description: "Plans and pricing", href: "/pricing", icon: CreditCard, category: "Resources", keywords: ["cost", "price", "plan"] },
  { id: "status", title: "Status", description: "System status", href: "/status", icon: Settings, category: "Resources", keywords: ["uptime", "health"] },
  { id: "contact", title: "Contact", description: "Get in touch", href: "/contact", icon: Users, category: "Resources", keywords: ["support", "help"] },

  // Company
  { id: "team", title: "Team", description: "Meet the team", href: "/team", icon: Users, category: "Company", keywords: ["about", "people"] },
  { id: "security", title: "Security", description: "Security practices", href: "/security", icon: Shield, category: "Company", keywords: ["compliance", "soc2"] },
  { id: "philosophy", title: "Philosophy", description: "Zen of Hanzo principles", href: "/philosophy", icon: HelpCircle, category: "Company", keywords: ["philosophy", "values", "zen of hanzo"] },
  { id: "zen-models", title: "Zen Models", description: "Open source AI models", href: "/zen", icon: HelpCircle, category: "Company", keywords: ["ai", "models", "llm", "zen"] },
  { id: "enterprise", title: "Enterprise", description: "Enterprise solutions", href: "/enterprise", icon: Server, category: "Company", keywords: ["business", "sales"] },
];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Filter commands based on search
  const filteredCommands = search
    ? commands.filter(
        (cmd) =>
          cmd.title.toLowerCase().includes(search.toLowerCase()) ||
          cmd.description?.toLowerCase().includes(search.toLowerCase()) ||
          cmd.keywords?.some((k) => k.toLowerCase().includes(search.toLowerCase()))
      )
    : commands;

  // Group by category
  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<string, CommandItem[]>);

  // Flatten for keyboard navigation
  const flatCommands = Object.values(groupedCommands).flat();

  // Reset selection when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setSearch("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % flatCommands.length);
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + flatCommands.length) % flatCommands.length);
          break;
        case "Enter":
          e.preventDefault();
          if (flatCommands[selectedIndex]) {
            const cmd = flatCommands[selectedIndex];
            if (cmd.external) {
              window.open(cmd.href, "_blank");
            } else {
              navigate(cmd.href);
            }
            onClose();
          }
          break;
        case "Escape":
          onClose();
          break;
      }
    },
    [flatCommands, selectedIndex, navigate, onClose]
  );

  // Global keyboard shortcut
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
    };

    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isOpen, onClose]);

  const handleSelect = (cmd: CommandItem) => {
    if (cmd.external) {
      window.open(cmd.href, "_blank");
    } else {
      navigate(cmd.href);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            position="fixed" top={0} right={0} bottom={0} left={0} backgroundColor="rgb(0 0 0 / 0.6)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" zIndex={100}
          />

          {/* Command palette */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            position="fixed" top="15%" left="50%" x="-50%" width="100%" maxWidth="36rem" zIndex={101}
          >
            <Box backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-700)" borderRadius="var(--radius-xl)" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)" overflow="hidden">
              {/* Search input */}
              <XStack display="flex" alignItems="center" gap={12} paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)">
                <Search size={20} color="var(--neutral-500)" />
                <Box display="inline-block" minHeight={44}
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search pages, products, docs..."
                  render="input" flex={1} backgroundColor="transparent" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" placeholderTextColor="var(--neutral-500)" outlineStyle="none"
                />
                <Text paddingHorizontal={8} paddingVertical={4} fontSize="10px" fontFamily="var(--font-mono)" backgroundColor="var(--neutral-800)" borderRadius="var(--radius)" color="var(--neutral-500)">
                  ESC
                </Text>
              </XStack>

              {/* Results */}
              <Box maxHeight="400px" overflowY="auto" paddingVertical={8}>
                {Object.keys(groupedCommands).length === 0 ? (
                  <Box paddingHorizontal={16} paddingVertical={32} textAlign="center" color="var(--neutral-500)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                    No results found for "{search}"
                  </Box>
                ) : (
                  Object.entries(groupedCommands).map(([category, items]) => (
                    <div key={category}>
                      <Box paddingHorizontal={16} paddingVertical={8} fontSize="10px" fontWeight="600" color="var(--neutral-500)" textTransform="uppercase" letterSpacing="0.05em">
                        {category}
                      </Box>
                      {items.map((cmd) => {
                        const Icon = cmd.icon;
                        const index = flatCommands.findIndex((c) => c.id === cmd.id);
                        const isSelected = index === selectedIndex;

                        return (
                          <XStack minHeight={44}
                            key={cmd.id}
                            onClick={() => handleSelect(cmd)}
                            onMouseEnter={() => setSelectedIndex(index)}
                            render="button" width="100%" display="flex" alignItems="center" gap={12} paddingHorizontal={16} paddingVertical={10} textAlign="left" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={isSelected ? "var(--neutral-800)" : undefined} color={isSelected ? "var(--foreground)" : "var(--neutral-300)"} hoverStyle={isSelected ? undefined : { backgroundColor: "var(--surface-card)" }}
                          >
                            <XStack
                              width={32} height={32} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" backgroundColor={isSelected ? "rgb(255 255 255 / 0.2)" : "var(--neutral-800)"}
                            >
                              <Icon
                                width={16} height={16} color={isSelected ? "var(--foreground)" : "var(--neutral-500)"}
                              />
                            </XStack>
                            <Box flex={1} minWidth={0}>
                              <XStack display="flex" alignItems="center" gap={8}>
                                <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                                  {cmd.title}
                                </Text>
                                {cmd.external && (
                                  <ExternalLink size={12} color="var(--neutral-500)" />
                                )}
                              </XStack>
                              {cmd.description && (
                                <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                                  {cmd.description}
                                </Box>
                              )}
                            </Box>
                            {isSelected && (
                              <ArrowRight size={16} color="var(--neutral-500)" />
                            )}
                          </XStack>
                        );
                      })}
                    </div>
                  ))
                )}
              </Box>

              {/* Footer */}
              <XStack paddingHorizontal={16} paddingVertical={8} borderTopWidth={1} borderColor="var(--neutral-800)" display="flex" alignItems="center" justifyContent="space-between">
                <XStack display="flex" alignItems="center" gap={16} fontSize="10px" color="var(--neutral-500)">
                  <Text display="flex" alignItems="center" gap={4}>
                    <Text paddingHorizontal={6} paddingVertical={2} backgroundColor="var(--neutral-800)" borderRadius="var(--radius)">↑</Text>
                    <Text paddingHorizontal={6} paddingVertical={2} backgroundColor="var(--neutral-800)" borderRadius="var(--radius)">↓</Text>
                    Navigate
                  </Text>
                  <Text display="flex" alignItems="center" gap={4}>
                    <Text paddingHorizontal={6} paddingVertical={2} backgroundColor="var(--neutral-800)" borderRadius="var(--radius)">↵</Text>
                    Select
                  </Text>
                </XStack>
                <XStack display="flex" alignItems="center" gap={4} fontSize="10px" color="var(--neutral-500)">
                  <Command size={12} />
                  <span>K to toggle</span>
                </XStack>
              </XStack>
            </Box>
          </MotionBox>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
