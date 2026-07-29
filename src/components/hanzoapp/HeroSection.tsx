import { Anchor, Box, Grid, Link, MotionBox, MotionText, Text, XStack, YStack, FILL} from '@/gui'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  Download,
  Globe,
  Monitor,
  Cpu,
  Shield,
  Check,
  Copy,
  ExternalLink,
  Apple,
  Chrome,
} from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const PLATFORMS = [
  { id: "web", label: "Web App", icon: Globe, description: "Build in browser" },
  { id: "desktop", label: "Desktop", icon: Monitor, description: "macOS, Windows, Linux" },
  { id: "local", label: "Local AI", icon: Cpu, description: "Private & offline" },
  { id: "node", label: "Node", icon: Shield, description: "Blockchain powered" },
];

const AppDemo = ({ activeTab }: { activeTab: string }) => {
  const demos: Record<string, { title: string; content: React.ReactNode }> = {
    web: {
      title: "hanzo.app",
      content: (
        <Box rowGap={12}>
          <XStack display="flex" alignItems="center" gap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
            <Check size={16} color="var(--neutral-500)" />
            <Text color="var(--foreground)">Workspace synced</Text>
          </XStack>
          <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" padding={12}>
            <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={8}>Active Projects</Box>
            <Box rowGap={8}>
              <XStack display="flex" alignItems="center" justifyContent="space-between" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                <Text color="var(--foreground)">signal-server</Text>
                <Text color="var(--neutral-400)">12 files changed</Text>
              </XStack>
              <XStack display="flex" alignItems="center" justifyContent="space-between" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                <Text color="var(--foreground)">payments-api</Text>
                <Text color="var(--neutral-400)">3 PRs pending</Text>
              </XStack>
            </Box>
          </Box>
          <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">Collaborative editing • Real-time sync • Cloud storage</Box>
        </Box>
      ),
    },
    desktop: {
      title: "Hanzo Desktop",
      content: (
        <Box rowGap={12}>
          <XStack display="flex" alignItems="center" gap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
            <Monitor size={16} color="var(--foreground)" />
            <Text color="var(--foreground)">Native performance</Text>
          </XStack>
          <Grid display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap={8}>
            <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" padding={8} textAlign="center">
              <Box render="span" display="inline-flex" alignItems="center" marginHorizontal="auto" marginBottom={4}><Apple size={20} color="var(--neutral-400)" /></Box>
              <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">macOS</Text>
            </Box>
            <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" padding={8} textAlign="center">
              <Box render="span" display="inline-flex" alignItems="center" marginHorizontal="auto" marginBottom={4}><Monitor size={20} color="var(--neutral-400)" /></Box>
              <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">Windows</Text>
            </Box>
            <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" padding={8} textAlign="center">
              <Box render="span" display="inline-flex" alignItems="center" marginHorizontal="auto" marginBottom={4}><Chrome size={20} color="var(--neutral-400)" /></Box>
              <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">Linux</Text>
            </Box>
          </Grid>
          <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">Offline capable • System integrations • Native UI</Box>
        </Box>
      ),
    },
    local: {
      title: "Local AI Mode",
      content: (
        <Box rowGap={12}>
          <XStack display="flex" alignItems="center" gap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
            <Cpu size={16} color="var(--foreground)" />
            <Text color="var(--foreground)">Running locally</Text>
          </XStack>
          <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" padding={12} fontFamily="var(--font-mono)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
            <Box color="var(--neutral-500)">$ hanzo local start</Box>
            <Box color="var(--foreground)" marginTop={4}>✓ Qwen3-32B loaded (16GB VRAM)</Box>
            <Box color="var(--foreground)">✓ MCP tools connected</Box>
            <Box color="var(--foreground)">✓ Ready on localhost:8080</Box>
          </Box>
          <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">Zero data leaves your machine • Full privacy • GPU accelerated</Box>
        </Box>
      ),
    },
    node: {
      title: "Hanzo Node",
      content: (
        <Box rowGap={12}>
          <XStack display="flex" alignItems="center" gap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
            <Shield size={16} style={{ color: BRAND_COLOR }} />
            <span style={{ color: BRAND_COLOR }}>Node active</span>
          </XStack>
          <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" padding={12} fontFamily="var(--font-mono)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
            <XStack display="flex" justifyContent="space-between">
              <Text color="var(--neutral-500)">Staked:</Text>
              <Text color="var(--foreground)">50,000 LUX</Text>
            </XStack>
            <XStack display="flex" justifyContent="space-between">
              <Text color="var(--neutral-500)">Earnings:</Text>
              <Text color="var(--foreground)">+127.4 LUX/day</Text>
            </XStack>
            <XStack display="flex" justifyContent="space-between">
              <Text color="var(--neutral-500)">Uptime:</Text>
              <Text color="var(--foreground)">99.97%</Text>
            </XStack>
          </Box>
          <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">Earn rewards • Decentralized compute • Proof of AI</Box>
        </Box>
      ),
    },
  };

  const demo = demos[activeTab];

  return (
    <YStack borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="var(--surface-overlay)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" overflow="hidden" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)" height="320px" display="flex" flexDirection="column">
      <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--neutral-950)" flexShrink={0}>
        <XStack display="flex" gap={6}>
          <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
          <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
          <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        </XStack>
        <AnimatePresence mode="wait">
          <MotionText
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" fontFamily="var(--font-mono)" marginLeft={8}
          >
            {demo.title}
          </MotionText>
        </AnimatePresence>
      </XStack>
      <Box flex={1} padding={16} backgroundColor="var(--neutral-950)" overflowY="auto">
        <AnimatePresence mode="wait">
          <MotionBox
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {demo.content}
          </MotionBox>
        </AnimatePresence>
      </Box>
    </YStack>
  );
};

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -fsSL hanzo.sh | sh");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box render="section" position="relative" paddingTop={96} paddingBottom={64} paddingHorizontal={16} overflow="hidden" $md={{ paddingHorizontal: 32 }} $lg={{ paddingHorizontal: 48 }}>
      {/* Background gradient */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} overflow="hidden" zIndex={0} pointerEvents="none">
        <Box
          position="absolute" top="50%" left="50%" x="-50%" y="-50%" width="800px" height="800px" borderRadius="var(--radius-full)" opacity={0.15}
          style={{
            background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
            filter: "blur(100px)",
          }}
        />
      </Box>

      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <Grid display="grid" gap={48} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 64 }}>
          {/* Left Column */}
          <div>
            <MotionText
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              fontSize="var(--text-3xl)" lineHeight="1.1" fontWeight="500" letterSpacing="var(--tracking-tight)" marginBottom={24} $sm={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }} $lg={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $xl={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
            >
              <Text color="var(--foreground)">Build anywhere.</Text>
              <br />
              <Text color="var(--neutral-400)">Ship everywhere.</Text>
            </MotionText>

            <MotionText
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              fontSize="var(--text-base)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" marginBottom={32} maxWidth="36rem" $lg={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}
            >
              Hanzo App works in your browser, as a native desktop app, with private local AI, or connected to the decentralized network. Your choice.
            </MotionText>

            {/* CTAs */}
            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              flexDirection="row" display="flex" flexWrap="wrap" alignItems="center" gap={16} marginBottom={24}
            >
              <Anchor minHeight={44} 
                href="https://hanzo.app"
                target="_blank"
                rel="noreferrer noopener"
                paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                style={FILL}
              >
                Open in browser
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
              </Anchor>
              <Link minHeight={44} 
                to="/download"
                paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
              >
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Download size={16} /></Box>
                Download app
              </Link>
            </MotionBox>

            {/* Install command */}
            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              marginBottom={32}
            >
              <XStack display="inline-flex" alignItems="center" gap={12} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)">
                <Text render="code" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontFamily="var(--font-mono)" color="var(--neutral-300)">
                  curl -fsSL hanzo.sh | sh
                </Text>
                <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                  onClick={handleCopy}
                  render="button" color="var(--neutral-500)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
                >
                  {copied ? <Check size={14} color="var(--neutral-500)" /> : <Copy size={14} />}
                </Box>
                <Anchor tap
                  href="https://docs.hanzo.ai"
                  target="_blank"
                  rel="noreferrer noopener"
                  color="var(--neutral-500)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
                >
                  <ExternalLink size={14} />
                </Anchor>
              </XStack>
            </MotionBox>

            {/* Platform tabs */}
            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              flexDirection="row" display="flex" flexWrap="wrap" gap={8}
            >
              {PLATFORMS.map((platform) => {
                const Icon = platform.icon;
                const isActive = activeTab === platform.id;
                return (
                  <XStack minHeight={44}
                    key={platform.id}
                    onClick={() => setActiveTab(platform.id)}
                    render="button" display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={isActive ? "var(--foreground)" : "var(--neutral-900)"} color={isActive ? "var(--foreground)" : "var(--neutral-400)"} borderWidth={isActive ? undefined : 1} borderColor={isActive ? undefined : "var(--neutral-800)"} hoverStyle={isActive ? undefined : { color: "var(--foreground)", borderColor: "var(--neutral-700)" }}
                  >
                    <Icon width={16} height={16} />
                    {platform.label}
                  </XStack>
                );
              })}
            </MotionBox>
          </div>

          {/* Right Column: Demo */}
          <MotionBox
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <AppDemo activeTab={activeTab} />
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
