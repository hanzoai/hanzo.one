import { Anchor, Box, Grid, H1, H3, Link, MotionBox, MotionText, Paragraph, Text, XStack, YStack } from '@/gui'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
  FolderKanban,
  Rocket,
  Bot,
  Database,
  Key,
  Shield,
  Link2,
  Settings,
  Bell,
  Layers,
  Activity,
  Brain
} from "lucide-react";

// Brand color
const BRAND_COLOR = "var(--foreground)";

// Proof chips data - communicates the vertical stack
const PROOF_CHIPS = [
  { label: "Agents", icon: Bot },
  { label: "Models", icon: Brain },
  { label: "Vector/SQL/KV", icon: Database },
  { label: "Deploy anywhere", icon: Rocket },
  { label: "IAM/KMS", icon: Shield },
  { label: "Audit", icon: Activity },
  { label: "OSS", icon: Layers },
];

// Dashboard nav items
const DASHBOARD_NAV = [
  { label: "Projects", icon: FolderKanban, active: true },
  { label: "Deployments", icon: Rocket },
  { label: "Models", icon: Bot },
  { label: "Vector", icon: Database },
  { label: "Agents", icon: Bot },
  { label: "IAM", icon: Shield },
  { label: "KMS", icon: Key },
  { label: "Audit", icon: Activity },
  { label: "Chains", icon: Link2 },
  { label: "Settings", icon: Settings },
];

// Terminal lines - demonstrates the vertical stack in one story
const TERMINAL_LINES = [
  { text: "$ curl -fsSL hanzo.sh/install.sh | sh", type: "command" },
  { text: "$ hanzo team create acme", type: "command" },
  { text: "$ hanzo login", type: "command" },
  { text: "$ hanzo iam role bind --role engineer --to dev@acme.com", type: "command" },
  { text: "$ hanzo kms key create dev-secrets", type: "command" },
  { text: '$ hanzo dev "Ship a RAG API for ./docs. Expose /chat. Write tests."', type: "command" },
  { text: "✓ Plan created • policy=engineer • kms=dev-secrets", type: "success" },
  { text: "✓ Implemented: api/ tests/", type: "success" },
  { text: "✓ Ready to deploy as docs-api → target=k8s", type: "success" },
  { text: "? Approve deploy? (y/N) y", type: "prompt" },
  { text: "✓ Live: https://docs-api.acme.dev", type: "success", highlight: true },
];

// Mobile view tabs
type MobileTab = "dashboard" | "terminal" | "mobile";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileTab, setMobileTab] = useState<MobileTab>("dashboard");
  const [terminalStep, setTerminalStep] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Terminal typing animation
  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setTerminalStep((prev) => {
        if (prev < TERMINAL_LINES.length) return prev + 1;
        return prev;
      });
    }, 600);
    return () => clearInterval(timer);
  }, [mounted]);

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -fsSL hanzo.sh/install.sh | sh");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Dashboard Mock Component
  const DashboardMock = ({ ...styleProps }: {  }) => (
    <Box {...styleProps} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="var(--surface-overlay)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" overflow="hidden" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)">
      {/* Browser chrome */}
      <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={10} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--neutral-900)">
        <XStack display="flex" gap={6}>
          <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
          <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
          <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        </XStack>
        <Box flex={1} marginHorizontal={16}>
          <Box backgroundColor="var(--neutral-800)" borderRadius="var(--radius-md)" paddingHorizontal={12} paddingVertical={4} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" textAlign="center" maxWidth="200px" marginHorizontal="auto">
            cloud.hanzo.ai
          </Box>
        </Box>
      </XStack>

      {/* Dashboard content */}
      <XStack display="flex" minHeight="320px">
        {/* Left nav */}
        <Box width="140px" borderRightWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--neutral-950)" padding={8} display="none" $lg={{ width: "160px" }} $sm={{ display: "block" }}>
          <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={8} paddingVertical={8} marginBottom={12}>
            <XStack width={24} height={24} borderRadius="var(--radius-md)" display="flex" alignItems="center" justifyContent="center" backgroundImage="linear-gradient(to bottom right, var(--foreground), rgb(255 255 255 / 0.08))">
              <Text color="var(--foreground)" fontSize="10px" fontWeight="700">H</Text>
            </XStack>
            <Text color="var(--foreground)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500">Hanzo</Text>
          </XStack>
          <Box render="nav" rowGap={2}>
            {DASHBOARD_NAV.map((item) => (
              <XStack
                key={item.label}
                display="flex" alignItems="center" gap={8} paddingHorizontal={8} paddingVertical={6} borderRadius="var(--radius-md)" fontSize="11px" cursor="pointer" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={item.active ? "rgb(255 255 255 / 0.2)" : undefined} color={item.active ? "var(--foreground)" : "var(--neutral-400)"} hoverStyle={item.active ? undefined : { backgroundColor: "var(--neutral-800)", color: "var(--neutral-300)" }}
              >
                <item.icon width={12} height={12} />
                {item.label}
              </XStack>
            ))}
          </Box>
        </Box>

        {/* Main content */}
        <Box flex={1} padding={16} backgroundColor="var(--neutral-950)">
          <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={16}>
            <H3 color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">Project Overview</H3>
            <XStack display="flex" alignItems="center" gap={8}>
              <XStack paddingHorizontal={8} paddingVertical={4} borderRadius="var(--radius-md)" backgroundColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" fontSize="10px" display="flex" alignItems="center" gap={4}>
                <Box width={6} height={6} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" />
                All systems operational
              </XStack>
            </XStack>
          </XStack>

          {/* Stats cards */}
          <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={12} marginBottom={16} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
            <Box backgroundColor="var(--neutral-900)" borderRadius="var(--radius-lg)" padding={12} borderWidth={1} borderColor="var(--neutral-800)">
              <XStack display="flex" alignItems="center" gap={8} marginBottom={4}>
                <Rocket size={12} color="var(--neutral-500)" />
                <Text fontSize="10px" color="var(--neutral-500)">Deployments</Text>
              </XStack>
              <Box fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)">24</Box>
              <Box fontSize="10px" color="var(--foreground)">+3 this week</Box>
            </Box>
            <Box backgroundColor="var(--neutral-900)" borderRadius="var(--radius-lg)" padding={12} borderWidth={1} borderColor="var(--neutral-800)">
              <XStack display="flex" alignItems="center" gap={8} marginBottom={4}>
                <Bot size={12} color="var(--neutral-500)" />
                <Text fontSize="10px" color="var(--neutral-500)">Agent Runs</Text>
              </XStack>
              <Box fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)">1.2K</Box>
              <Box fontSize="10px" color="var(--neutral-400)">Today</Box>
            </Box>
            <Box backgroundColor="var(--neutral-900)" borderRadius="var(--radius-lg)" padding={12} borderWidth={1} borderColor="var(--neutral-800)">
              <XStack display="flex" alignItems="center" gap={8} marginBottom={4}>
                <Database size={12} color="var(--neutral-500)" />
                <Text fontSize="10px" color="var(--neutral-500)">Vector Indexes</Text>
              </XStack>
              <Box fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)">8</Box>
              <Box fontSize="10px" color="var(--neutral-400)">2.4M vectors</Box>
            </Box>
            <Box backgroundColor="var(--neutral-900)" borderRadius="var(--radius-lg)" padding={12} borderWidth={1} borderColor="var(--neutral-800)">
              <XStack display="flex" alignItems="center" gap={8} marginBottom={4}>
                <Key size={12} color="var(--neutral-500)" />
                <Text fontSize="10px" color="var(--neutral-500)">Keys/Secrets</Text>
              </XStack>
              <Box fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)">47</Box>
              <Box fontSize="10px" color="var(--neutral-400)">Encrypted</Box>
            </Box>
          </Grid>

          {/* Recent deployments */}
          <Box rowGap={8}>
            <Box fontSize="11px" color="var(--neutral-500)" marginBottom={8}>Recent Deployments</Box>
            {[
              { name: "docs-api", status: "live", region: "us-east-1", time: "2m ago" },
              { name: "chat-service", status: "live", region: "eu-west-1", time: "1h ago" },
              { name: "ml-pipeline", status: "building", region: "us-west-2", time: "now" },
            ].map((deploy) => (
              <XStack key={deploy.name} display="flex" alignItems="center" justifyContent="space-between" padding={10} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)">
                <XStack display="flex" alignItems="center" gap={8}>
                  <Box width={8} height={8} borderRadius="var(--radius-full)" backgroundColor={deploy.status === "live" ? "var(--neutral-500)" : "var(--neutral-500)"} />
                  <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)">{deploy.name}</Text>
                  <Text fontSize="10px" color="var(--neutral-500)" paddingHorizontal={6} paddingVertical={2} backgroundColor="var(--neutral-800)" borderRadius="var(--radius)">{deploy.region}</Text>
                </XStack>
                <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">{deploy.time}</Text>
              </XStack>
            ))}
          </Box>
        </Box>
      </XStack>
    </Box>
  );

  // Terminal Mock Component - fixed height with scrolling content
  const TerminalMock = ({ ...styleProps }: {  }) => (
    <Box {...styleProps} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="var(--surface-overlay)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" overflow="hidden" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)">
      {/* Terminal header */}
      <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={8} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--neutral-900)" flexShrink={0}>
        <XStack display="flex" gap={6}>
          <Box width={10} height={10} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
          <Box width={10} height={10} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
          <Box width={10} height={10} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        </XStack>
        <Text marginLeft={8} fontSize="10px" color="var(--neutral-500)" fontFamily="var(--font-mono)">terminal</Text>
        <XStack marginLeft="auto" display="flex" alignItems="center" gap={8}>
          <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
            onClick={handleCopy}
            render="button" padding={4} borderRadius="var(--radius)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
          >
            {copied ? (
              <Check size={12} color="var(--neutral-500)" />
            ) : (
              <Copy size={12} color="var(--neutral-500)" />
            )}
          </Box>
        </XStack>
      </XStack>
      {/* Terminal content - fixed height with scroll */}
      <Box padding={16} fontFamily="var(--font-mono)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" backgroundColor="var(--neutral-950)" height="220px" overflowY="auto">
        {TERMINAL_LINES.slice(0, terminalStep).map((line, idx) => (
          <MotionBox
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            marginBottom={4}
            color={line.type === "command" ? "var(--neutral-300)" : line.type === "prompt" ? "var(--foreground)" : "var(--neutral-400)"}
          >
            {line.type === "success" && (
              <Text color="var(--neutral-500)">✓ </Text>
            )}
            {line.type === "prompt" && (
              <Text color="var(--neutral-500)">? </Text>
            )}
            <Text color={line.highlight ? "var(--foreground)" : undefined}>
              {line.text.replace(/^[✓?]\s*/, "")}
            </Text>
          </MotionBox>
        ))}
        {terminalStep < TERMINAL_LINES.length && (
          <XStack display="flex" alignItems="center" gap={4}>
            <Text color="var(--neutral-500)">$</Text>
            <MotionText render="span" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} width={8} height={16} backgroundColor="var(--surface-overlay)" />
          </XStack>
        )}
        {terminalStep >= TERMINAL_LINES.length && (
          <XStack display="flex" alignItems="center" gap={4} marginTop={8}>
            <Text color="var(--neutral-500)">$</Text>
            <MotionText render="span" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} width={8} height={16} backgroundColor="var(--surface-overlay)" />
          </XStack>
        )}
      </Box>
    </Box>
  );

  // Mobile Device Mock Component - iPhone 15 Pro dimensions (71.6mm x 146.6mm = ~2.05:1 ratio)
  // Using w-[150px] = h-[308px] for proper iPhone proportions
  const MobileDeviceMock = ({ ...styleProps }: {  }) => (
    <YStack {...styleProps} width="150px" height="308px" borderRadius="32px" borderColor="var(--neutral-600)" backgroundColor="var(--neutral-900)" overflow="hidden" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)" display="flex" flexDirection="column">
      {/* Dynamic Island */}
      <XStack backgroundColor="var(--neutral-950)" paddingTop={8} paddingBottom={4} display="flex" justifyContent="center" flexShrink={0}>
        <Box width="60px" height="18px" backgroundColor="var(--pure-black)" borderRadius="var(--radius-full)" />
      </XStack>
      {/* App content */}
      <YStack backgroundColor="var(--neutral-950)" padding={10} flex={1} overflow="hidden" display="flex" flexDirection="column">
        <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={8} flexShrink={0}>
          <XStack display="flex" alignItems="center" gap={6}>
            <XStack width={20} height={20} borderRadius="var(--radius-md)" backgroundColor="var(--neutral-800)" display="flex" alignItems="center" justifyContent="center">
              <Text color="var(--foreground)" fontSize="7px" fontWeight="700">H</Text>
            </XStack>
            <Text color="var(--foreground)" fontSize="10px" fontWeight="500">Hanzo</Text>
          </XStack>
          <Bell size={14} color="var(--neutral-500)" />
        </XStack>

        {/* Push notification style */}
        <MotionBox
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.3 }}
          backgroundColor="var(--neutral-900)" borderRadius="var(--radius-lg)" padding={8} borderWidth={1} borderColor="var(--neutral-800)" marginBottom={8} flexShrink={0}
        >
          <XStack display="flex" alignItems="center" gap={6} marginBottom={2}>
            <Box width={6} height={6} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" />
            <Text fontSize="9px" color="var(--foreground)" fontWeight="500">Deploy Complete</Text>
          </XStack>
          <Box fontSize="10px" color="var(--foreground)">docs-api is now live</Box>
          <Box fontSize="8px" color="var(--neutral-500)" marginTop={2} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">https://docs-api.acme.dev</Box>
        </MotionBox>

        <Box rowGap={6} flex={1} overflow="hidden">
          <Box backgroundColor="var(--neutral-900)" borderRadius="var(--radius-lg)" padding={6} borderWidth={1} borderColor="var(--neutral-800)">
            <Box fontSize="8px" color="var(--neutral-500)">Status</Box>
            <XStack display="flex" alignItems="center" gap={4}>
              <Box width={6} height={6} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" />
              <Text fontSize="9px" color="var(--foreground)">All systems operational</Text>
            </XStack>
          </Box>
          <Box backgroundColor="var(--neutral-900)" borderRadius="var(--radius-lg)" padding={6} borderWidth={1} borderColor="var(--neutral-800)">
            <Box fontSize="8px" color="var(--neutral-500)">Active Deployments</Box>
            <Box fontSize="10px" color="var(--foreground)">24 services</Box>
          </Box>
        </Box>
      </YStack>
      {/* Home indicator */}
      <XStack backgroundColor="var(--neutral-950)" paddingVertical={6} display="flex" justifyContent="center" flexShrink={0}>
        <Box width="40px" height="4px" backgroundColor="var(--neutral-600)" borderRadius="var(--radius-full)" />
      </XStack>
    </YStack>
  );

  // Mobile Tab Selector
  const MobileTabSelector = () => (
    <XStack display="flex" backgroundColor="var(--neutral-900)" borderRadius="var(--radius-lg)" padding={4} borderWidth={1} borderColor="var(--neutral-800)">
      {(["dashboard", "terminal", "mobile"] as MobileTab[]).map((tab) => (
        <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
          key={tab}
          onClick={() => setMobileTab(tab)}
          render="button" flex={1} paddingHorizontal={12} paddingVertical={8} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" borderRadius="var(--radius-md)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" textTransform="capitalize" backgroundColor={mobileTab === tab ? "var(--foreground)" : undefined} color={mobileTab === tab ? "var(--foreground)" : "var(--neutral-400)"} hoverStyle={mobileTab === tab ? undefined : { color: "var(--foreground)" }}
        >
          {tab}
        </Box>
      ))}
    </XStack>
  );

  return (
    <Box render="section" paddingTop={80} paddingBottom={32} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }} $lg={{ paddingHorizontal: 48 }}>
      {/* Main Hero Container */}
      <Box position="relative" marginHorizontal="auto" width="100%" maxWidth="1400px" minHeight="700px" borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden" backgroundImage="linear-gradient(to bottom right, var(--neutral-950), var(--neutral-900), var(--neutral-950))">

        {/* Background gradients - z-0 */}
        <Box position="absolute" top={0} right={0} bottom={0} left={0} overflow="hidden" zIndex={0}>
          {/* Red accent glow - center */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: mounted ? 0.15 : 0 }}
            transition={{ duration: 1.5 }}
            position="absolute" top="50%" left="50%" x="-50%" y="-50%" width="800px" height="800px" borderRadius="var(--radius-full)"
            style={{
              background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
              filter: "blur(100px)",
            }}
          />
          {/* Secondary red glow - top right */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: mounted ? 0.1 : 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            position="absolute" top={-128} right={-128} width="500px" height="500px" borderRadius="var(--radius-full)"
            style={{
              background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
              filter: "blur(80px)",
            }}
          />
          {/* Subtle white glow - bottom left */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: mounted ? 0.04 : 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            position="absolute" bottom={-192} left={-192} width="600px" height="600px" borderRadius="var(--radius-full)"
            style={{
              background: "radial-gradient(circle, #ffffff 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
          />
        </Box>

        {/* Grid pattern */}
        <Box
          position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.02} zIndex={0}
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Content - z-10 */}
        <Box position="relative" zIndex={10} height="100%" paddingHorizontal={24} paddingVertical={40} $md={{ paddingHorizontal: 40 }} $lg={{ paddingHorizontal: 48, paddingVertical: 48 }}>

          {/* Desktop Layout: Two-column grid */}
          <Box display="none" height="100%" $lg={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 32 }} $xl={{ gap: 48 }}>

            {/* Left Column: Copy */}
            <YStack display="flex" flexDirection="column" justifyContent="center">
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge */}
                <Paragraph
                  display="inline-flex" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8} borderWidth={1} width="fit-content" marginBottom={24}
                  style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}40` }}
                >
                  Open-source AI Cloud for builders.
                </Paragraph>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Main Headline */}
                <H1 fontSize="var(--text-4xl)" lineHeight="1.1" fontWeight="500" letterSpacing="var(--tracking-tight)" marginBottom={24} $xl={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $2xl={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
                  <Text color="var(--foreground)">A vertically integrated</Text>
                  <br />
                  <span style={{ color: BRAND_COLOR }}>AI platform.</span>
                </H1>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {/* Subhead */}
                <Paragraph fontSize="var(--text-base)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" marginBottom={32} maxWidth="500px" $xl={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}>
                  Agents, models, data, and deployment—with Team, IAM, KMS, and Audit built in. One platform from identity to production.
                </Paragraph>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                display="flex" flexDirection="row" alignItems="center" gap={16} flexWrap="wrap" marginBottom={32}
              >
                <Link minHeight={44} 
                  to="/products"
                  justifyContent="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" letterSpacing="var(--tracking-tight)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                  style={{ backgroundColor: BRAND_COLOR, color: '#ffffff' }}
                >
                  Get Started
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
                </Link>
                <Anchor minHeight={44} 
                  href="https://docs.hanzo.ai"
                  target="_blank"
                  rel="noreferrer noopener"
                  justifyContent="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" letterSpacing="var(--tracking-tight)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ backgroundColor: "var(--neutral-900)", borderColor: "var(--neutral-600)" }}
                >
                  Documentation
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ExternalLink size={16} /></Box>
                </Anchor>
              </MotionBox>

              {/* Proof Chips */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                flexDirection="row" display="flex" flexWrap="wrap" gap={8}
              >
                {PROOF_CHIPS.map((chip) => (
                  <XStack
                    key={chip.label}
                    display="inline-flex" alignItems="center" gap={6} paddingHorizontal={12} paddingVertical={6} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--neutral-800)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)"
                  >
                    <chip.icon width={12} height={12} />
                    {chip.label}
                  </XStack>
                ))}
              </MotionBox>
            </YStack>

            {/* Right Column: Demo Stack */}
            <YStack position="relative" display="flex" flexDirection="column" justifyContent="center">
              {/* Dashboard - Primary/Large */}
              <MotionBox
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                position="relative" zIndex={20}
              >
                <DashboardMock />
              </MotionBox>

              {/* Terminal - Below dashboard */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                position="relative" zIndex={20} marginTop={16} width="100%" maxWidth="400px"
              >
                <TerminalMock />
              </MotionBox>

              {/* Mobile Device - Floating/overlapping right */}
              <MotionBox
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : 20, y: mounted ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                position="absolute" right={0} top="50%" y="-50%" x={16} zIndex={30}
              >
                <MobileDeviceMock />
              </MotionBox>
            </YStack>
          </Box>

          {/* Tablet Layout (md): Stack vertically */}
          <Box display="none" flexDirection="column" gap={32} $md={{ display: "flex" }} $lg={{ display: "none" }}>
            {/* Copy section */}
            <Box textAlign="center">
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Paragraph
                  display="inline-flex" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8} borderWidth={1} width="fit-content" marginBottom={24}
                  style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}40` }}
                >
                  Open-source AI Cloud for builders.
                </Paragraph>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <H1 fontSize="var(--text-4xl)" lineHeight="1.1" fontWeight="500" letterSpacing="var(--tracking-tight)" marginBottom={24}>
                  <Text color="var(--foreground)">A vertically integrated</Text>
                  <br />
                  <span style={{ color: BRAND_COLOR }}>AI platform.</span>
                </H1>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <Paragraph fontSize="var(--text-base)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" marginBottom={24} maxWidth="500px" marginHorizontal="auto">
                  Agents, models, data, and deployment—with Team, IAM, KMS, and Audit built in.
                </Paragraph>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                display="flex" flexDirection="row" alignItems="center" justifyContent="center" gap={16} flexWrap="wrap" marginBottom={24}
              >
                <Link minHeight={44} 
                  to="/products"
                  justifyContent="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" letterSpacing="var(--tracking-tight)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                  style={{ backgroundColor: BRAND_COLOR, color: '#ffffff' }}
                >
                  Get Started
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
                </Link>
                <Anchor minHeight={44} 
                  href="https://docs.hanzo.ai"
                  target="_blank"
                  rel="noreferrer noopener"
                  justifyContent="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" letterSpacing="var(--tracking-tight)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ backgroundColor: "var(--neutral-900)", borderColor: "var(--neutral-600)" }}
                >
                  Documentation
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ExternalLink size={16} /></Box>
                </Anchor>
              </MotionBox>

              {/* Proof Chips */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                flexDirection="row" display="flex" flexWrap="wrap" justifyContent="center" gap={8}
              >
                {PROOF_CHIPS.map((chip) => (
                  <XStack
                    key={chip.label}
                    display="inline-flex" alignItems="center" gap={6} paddingHorizontal={12} paddingVertical={6} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--neutral-800)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)"
                  >
                    <chip.icon width={12} height={12} />
                    {chip.label}
                  </XStack>
                ))}
              </MotionBox>
            </Box>

            {/* Demo stack - tablet */}
            <Box rowGap={16}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <DashboardMock />
              </MotionBox>

              <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={16}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <TerminalMock />
                </MotionBox>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  flexDirection="row" display="flex" justifyContent="center"
                >
                  <MobileDeviceMock />
                </MotionBox>
              </Grid>
            </Box>
          </Box>

          {/* Mobile Layout (sm): Segmented control */}
          <YStack display="flex" flexDirection="column" gap={24} $md={{ display: "none" }}>
            {/* Copy section */}
            <Box textAlign="center">
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Paragraph
                  display="inline-flex" fontSize="11px" fontWeight="500" borderRadius="var(--radius-full)" paddingHorizontal={12} paddingVertical={6} borderWidth={1} width="fit-content" marginBottom={16}
                  style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}40` }}
                >
                  Open-source AI Cloud for builders.
                </Paragraph>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <H1 fontSize="var(--text-2xl)" lineHeight="1.1" fontWeight="500" letterSpacing="var(--tracking-tight)" marginBottom={16}>
                  <Text color="var(--foreground)">A vertically integrated</Text>
                  <br />
                  <span style={{ color: BRAND_COLOR }}>AI platform.</span>
                </H1>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" marginBottom={16}>
                  Agents, models, data, and deployment—with Team, IAM, KMS, and Audit built in.
                </Paragraph>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                display="flex" flexDirection="column" alignItems="center" gap={12} marginBottom={16}
              >
                <Link minHeight={44} 
                  to="/products"
                  justifyContent="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" letterSpacing="var(--tracking-tight)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" width="100%" maxWidth="200px" hoverStyle={{ opacity: 0.9 }}
                  style={{ backgroundColor: BRAND_COLOR, color: '#ffffff' }}
                >
                  Get Started
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
                </Link>
                <Anchor minHeight={44} 
                  href="https://docs.hanzo.ai"
                  target="_blank"
                  rel="noreferrer noopener"
                  justifyContent="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" letterSpacing="var(--tracking-tight)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" width="100%" maxWidth="200px" hoverStyle={{ backgroundColor: "var(--neutral-900)", borderColor: "var(--neutral-600)" }}
                >
                  Documentation
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ExternalLink size={16} /></Box>
                </Anchor>
              </MotionBox>

              {/* Proof Chips - scrollable on mobile */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                flexDirection="row" display="flex" flexWrap="wrap" justifyContent="center" gap={8}
              >
                {PROOF_CHIPS.slice(0, 4).map((chip) => (
                  <XStack
                    key={chip.label}
                    display="inline-flex" alignItems="center" gap={4} paddingHorizontal={8} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--neutral-800)" fontSize="10px" color="var(--neutral-400)"
                  >
                    <chip.icon width={10} height={10} />
                    {chip.label}
                  </XStack>
                ))}
              </MotionBox>
            </Box>

            {/* Mobile Tab Selector */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <MobileTabSelector />
            </MotionBox>

            {/* Tab Content */}
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              minHeight="300px"
            >
              <AnimatePresence mode="wait">
                {mobileTab === "dashboard" && (
                  <MotionBox
                    key="dashboard"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <DashboardMock />
                  </MotionBox>
                )}
                {mobileTab === "terminal" && (
                  <MotionBox
                    key="terminal"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TerminalMock />
                  </MotionBox>
                )}
                {mobileTab === "mobile" && (
                  <MotionBox
                    key="mobile"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    flexDirection="row" display="flex" justifyContent="center"
                  >
                    <MobileDeviceMock />
                  </MotionBox>
                )}
              </AnimatePresence>
            </MotionBox>
          </YStack>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
