import { Box, Button, Grid, H1, H2, H3, Link, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'
import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Blocks,
  Wallet,
  CreditCard,
  FileCode,
  HardDrive,
  Radio,
  Search,
  ArrowLeftRight,
  Shield,
  Clock,
  Bell,
  Mail,
  ArrowRight,
  Check,
  Network,
  Key,
  Database,
  Globe,
  Zap,
  Lock,
  Server,
  Code,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BRAND_COLOR = "var(--foreground)";

// Web3 capability categories
const CAPABILITIES = [
  {
    id: "nodes",
    icon: Server,
    title: "Blockchain Nodes & Data",
    description: "Access any chain with managed node infrastructure",
    features: [
      "Multi-chain RPC endpoints (EVM, Solana, Cosmos, etc.)",
      "Archive nodes for historical data access",
      "WebSocket subscriptions for real-time events",
      "Rate limiting and load balancing built-in",
      "99.9% uptime SLA with global distribution",
    ],
  },
  {
    id: "wallet",
    icon: Wallet,
    title: "Wallet & Key Management",
    description: "Enterprise-grade key infrastructure",
    features: [
      "MPC (Multi-Party Computation) wallets",
      "Hardware Security Module (HSM) integration",
      "Policy-based transaction signing",
      "Multi-sig support across chains",
      "Custodial and non-custodial options",
    ],
  },
  {
    id: "payments",
    icon: CreditCard,
    title: "On-Chain Payments",
    description: "Accept crypto payments seamlessly",
    features: [
      "Stablecoin payment processing (USDC, USDT, DAI)",
      "Native token support across chains",
      "Payment links and checkout widgets",
      "Automatic conversion and settlement",
      "Invoice generation and tracking",
    ],
  },
  {
    id: "contracts",
    icon: FileCode,
    title: "Smart Contract Management",
    description: "Deploy and interact with contracts at scale",
    features: [
      "Contract deployment across multiple chains",
      "ABI management and verification",
      "Gas estimation and optimization",
      "Event indexing and webhooks",
      "Upgradeable proxy pattern support",
    ],
  },
  {
    id: "storage",
    icon: HardDrive,
    title: "Decentralized Storage",
    description: "Persistent, censorship-resistant data storage",
    features: [
      "IPFS pinning with global CDN",
      "Arweave permanent storage integration",
      "Filecoin deal management",
      "NFT metadata hosting",
      "Content-addressed file retrieval",
    ],
  },
  {
    id: "oracles",
    icon: Radio,
    title: "Oracle Services",
    description: "Bring off-chain data on-chain",
    features: [
      "Price feeds for DeFi applications",
      "Custom data feeds and attestations",
      "VRF (Verifiable Random Function)",
      "Cross-chain message passing",
      "Chainlink and custom oracle integration",
    ],
  },
  {
    id: "indexing",
    icon: Search,
    title: "Blockchain Indexing",
    description: "Query blockchain data with GraphQL",
    features: [
      "Custom subgraph deployment",
      "Real-time indexing and caching",
      "Historical data aggregation",
      "Cross-chain data unification",
      "SQL and GraphQL query interfaces",
    ],
  },
  {
    id: "crosschain",
    icon: ArrowLeftRight,
    title: "Cross-Chain Infrastructure",
    description: "Bridge assets and data between chains",
    features: [
      "Token bridging with Wormhole, LayerZero",
      "Cross-chain messaging protocols",
      "Unified liquidity across chains",
      "Chain abstraction for users",
      "Multi-chain transaction batching",
    ],
  },
  {
    id: "compliance",
    icon: Shield,
    title: "Compliance & Fiat",
    description: "Enterprise compliance and fiat rails",
    features: [
      "KYC/AML integration",
      "Transaction monitoring and screening",
      "Fiat on/off ramp connections",
      "Tax reporting and documentation",
      "Regulatory-compliant custody",
    ],
  },
];

// Roadmap items
const ROADMAP = [
  { phase: "Q2 2025", title: "Nodes & Indexing", status: "in-progress" },
  { phase: "Q3 2025", title: "Wallet Infrastructure", status: "planned" },
  { phase: "Q3 2025", title: "Payment Processing", status: "planned" },
  { phase: "Q4 2025", title: "Cross-Chain & Oracles", status: "planned" },
  { phase: "Q1 2026", title: "Full Platform Launch", status: "planned" },
];

// Product pages
const PRODUCTS = [
  { id: "nodes", name: "Hanzo Nodes", description: "Managed RPC endpoints for every chain", icon: Server, color: "#3b82f6", href: "/blockchain/nodes" },
  { id: "indexer", name: "Hanzo Indexer", description: "Query blockchain data with GraphQL", icon: Search, color: "#10b981", href: "/blockchain/indexer" },
  { id: "wallet", name: "Hanzo Wallet", description: "Unified wallet infrastructure", icon: Wallet, color: "#f59e0b", href: "/blockchain/wallet" },
  { id: "safe", name: "Hanzo Safe", description: "Multi-sig & threshold custody", icon: Shield, color: "#8b5cf6", href: "/blockchain/safe" },
  { id: "id", name: "Hanzo ID", description: "Decentralized identity & credentials", icon: Key, color: "#ec4899", href: "/blockchain/id" },
  { id: "pay", name: "Hanzo Pay", description: "Crypto payments gateway", icon: CreditCard, color: "#22c55e", href: "/blockchain/pay" },
  { id: "bridge", name: "Hanzo Bridge", description: "Cross-chain asset transfers", icon: ArrowLeftRight, color: "#06b6d4", href: "/blockchain/bridge" },
  { id: "defi", name: "Hanzo DeFi", description: "Staking, lending & yield modules", icon: Code, color: "#f97316", href: "/blockchain/defi" },
  { id: "oracle", name: "Hanzo Oracle", description: "Price feeds & VRF", icon: Radio, color: "#a855f7", href: "/blockchain/oracle" },
  { id: "storage", name: "Hanzo Storage", description: "IPFS, Arweave & Filecoin", icon: HardDrive, color: "#14b8a6", href: "/blockchain/storage" },
  { id: "explorer", name: "Hanzo Explorer", description: "Multi-chain block explorer", icon: Search, color: "#6366f1", href: "/blockchain/explorer" },
  { id: "quest", name: "Hanzo Quest", description: "Gamified engagement & loyalty", icon: Blocks, color: "#eab308", href: "/blockchain/quest" },
];

const Blockchain = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [expandedCapability, setExpandedCapability] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist signup
    console.log("Waitlist signup:", email);
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Navbar />

      {/* Hero Section */}
      <Box render="section" paddingTop={96} paddingBottom={64} paddingHorizontal={16} position="relative" overflow="hidden" $md={{ paddingHorizontal: 32 }}>
        {/* Background gradient */}
        <Box position="absolute" top={0} right={0} bottom={0} left={0} overflow="hidden" zIndex={0} pointerEvents="none">
          <Box
            position="absolute" top="50%" left="50%" x="-50%" y="-50%" width="800px" height="800px" borderRadius="var(--radius-full)" opacity={0.15}
            style={{
              background: `radial-gradient(circle, #8b5cf6 0%, transparent 70%)`,
              filter: "blur(100px)",
            }}
          />
        </Box>

        <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            textAlign="center" marginBottom={64}
          >
            {/* Coming Soon Badge */}
            <XStack display="inline-flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" borderWidth={1} borderColor="var(--border-strong)" backgroundColor="rgb(255 255 255 / 0.1)" marginBottom={24}>
              <Clock size={16} color="var(--foreground)" />
              <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)">Coming Soon</Text>
            </XStack>

            <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="500" letterSpacing="var(--tracking-tight)" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $lg={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
              <Text color="var(--foreground)">Web3 Infrastructure.</Text>
              <br />
              <Text color="var(--neutral-400)">For the AI Era.</Text>
            </H1>

            <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto" marginBottom={32} $md={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-xl)" }}>
              Blockchain nodes, wallets, payments, smart contracts, and more—all integrated into the Hanzo platform. Build decentralized applications with the same simplicity as traditional apps.
            </Paragraph>

            {/* Waitlist Form */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              maxWidth="28rem" marginHorizontal="auto"
            >
              <YStack onSubmit={handleSubmit} render="form" display="flex" flexDirection="column" gap={12} $sm={{ flexDirection: "row" }}>
                <XStack flex={1} display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={12} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)">
                  <Mail size={16} color="var(--neutral-500)" />
                  <Box display="inline-block" minHeight={44}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    render="input" flex={1} backgroundColor="transparent" color="var(--foreground)" placeholderTextColor="var(--neutral-600)" outlineStyle="none" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)"
                    required
                  />
                </XStack>
                <Button
                  type="submit"
                  paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-lg)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))"
                  style={{ backgroundColor: "#8b5cf6" }}
                >
                  {submitted ? (
                    <Text display="flex" alignItems="center" gap={8}>
                      <Check size={16} />
                      Joined!
                    </Text>
                  ) : (
                    <Text display="flex" alignItems="center" gap={8}>
                      Join Waitlist
                      <Bell size={16} />
                    </Text>
                  )}
                </Button>
              </YStack>
              <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginTop={12}>
                Be the first to know when Hanzo Blockchain launches. No spam, ever.
              </Paragraph>
            </MotionBox>
          </MotionBox>

          {/* Visual Hero Element */}
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" padding={32} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), transparent)" $md={{ padding: 48 }}
          >
            <Grid display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(6, minmax(0, 1fr))" }}>
              {[
                { icon: Server, label: "Nodes" },
                { icon: Wallet, label: "Wallets" },
                { icon: CreditCard, label: "Payments" },
                { icon: FileCode, label: "Contracts" },
                { icon: Database, label: "Storage" },
                { icon: ArrowLeftRight, label: "Bridges" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <MotionBox
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
                    display="flex" flexDirection="column" alignItems="center" gap={8}
                  >
                    <XStack width={48} height={48} borderRadius="var(--radius-xl)" backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="var(--border-strong)" display="flex" alignItems="center" justifyContent="center" $md={{ width: 64, height: 64 }}>
                      <Icon width={24} height={24} color="var(--foreground)" $md={{ width: 32, height: 32 }} />
                    </XStack>
                    <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" $md={{ fontSize: "var(--text-sm)", lineHeight: "var(--leading-sm)" }}>{item.label}</Text>
                  </MotionBox>
                );
              })}
            </Grid>
          </MotionBox>
        </Box>
      </Box>

      {/* Products Section */}
      <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--neutral-950)" $md={{ paddingHorizontal: 32 }}>
        <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            textAlign="center" marginBottom={48}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Web3 Products
            </H2>
            <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
              Explore our suite of blockchain services. Each product is in private beta—apply for early access.
            </Paragraph>
          </MotionBox>

          <Grid display="grid" gap={16} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }} $xl={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
            {PRODUCTS.map((product, index) => {
              const Icon = product.icon;
              return (
                <MotionBox
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                >
                  <Link
                    to={product.href}
                    group display="block" padding={20} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)", borderColor: "var(--neutral-700)" }}
                  >
                    <XStack
                      width={40} height={40} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={12}
                      style={{ backgroundColor: `${product.color}1a` }}
                    >
                      <Icon width={20} height={20} style={{ color: product.color }} />
                    </XStack>
                    <H3 fontWeight="600" color="var(--foreground)" marginBottom={4} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }}>
                      {product.name}
                    </H3>
                    <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">{product.description}</Paragraph>
                    <XStack marginTop={12} display="flex" alignItems="center" gap={4} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)" opacity={0} transition="opacity var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ opacity: 1 }}>
                      Apply for beta
                      <ArrowRight size={12} />
                    </XStack>
                  </Link>
                </MotionBox>
              );
            })}
          </Grid>
        </Box>
      </Box>

      {/* Capabilities Section */}
      <Box render="section" paddingVertical={96} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }}>
        <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            textAlign="center" marginBottom={64}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Complete Web3 Infrastructure
            </H2>
            <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
              Everything you need to build decentralized applications, from blockchain data access to compliance tools.
            </Paragraph>
          </MotionBox>

          <Grid display="grid" gap={16} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {CAPABILITIES.map((capability, index) => {
              const Icon = capability.icon;
              const isExpanded = expandedCapability === capability.id;
              return (
                <MotionBox
                  key={capability.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)" overflow="hidden"
                >
                  <XStack minHeight={44}
                    onClick={() => setExpandedCapability(isExpanded ? null : capability.id)}
                    render="button" width="100%" padding={20} textAlign="left" display="flex" alignItems="flex-start" gap={16} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}
                  >
                    <XStack width={40} height={40} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.1)" display="flex" alignItems="center" justifyContent="center" flexShrink={0}>
                      <Icon width={20} height={20} color="var(--foreground)" />
                    </XStack>
                    <Box flex={1} minWidth={0}>
                      <XStack display="flex" alignItems="center" justifyContent="space-between" gap={8}>
                        <H3 fontWeight="600" color="var(--foreground)">{capability.title}</H3>
                        {isExpanded ? (
                          <ChevronUp size={16} color="var(--neutral-500)" />
                        ) : (
                          <ChevronDown size={16} color="var(--neutral-500)" />
                        )}
                      </XStack>
                      <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginTop={4}>{capability.description}</Paragraph>
                    </Box>
                  </XStack>

                  {isExpanded && (
                    <MotionBox
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      paddingHorizontal={20} paddingBottom={20} borderTopWidth={1} borderColor="var(--neutral-800)"
                    >
                      <Box render="ul" marginTop={16} rowGap={8}>
                        {capability.features.map((feature, idx) => (
                          <XStack key={idx} render="li" display="flex" alignItems="flex-start" gap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">
                            <Box render="span" display="inline-flex" alignItems="center" marginTop={2}><Check size={16} color="var(--foreground)" /></Box>
                            {feature}
                          </XStack>
                        ))}
                      </Box>
                    </MotionBox>
                  )}
                </MotionBox>
              );
            })}
          </Grid>
        </Box>
      </Box>

      {/* Integration Section */}
      <Box render="section" paddingVertical={96} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }}>
        <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
          <Grid display="grid" gap={48} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <XStack display="inline-flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" borderWidth={1} borderColor="var(--border-strong)" backgroundColor="rgb(255 255 255 / 0.1)" marginBottom={24}>
                <Zap size={16} color="var(--foreground)" />
                <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)">Unified Platform</Text>
              </XStack>
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
                AI + Web3.<br />
                <Text color="var(--neutral-400)">Better Together.</Text>
              </H2>
              <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" marginBottom={24}>
                Combine Hanzo's AI capabilities with blockchain infrastructure. Let AI agents manage wallets, execute transactions, and interact with smart contracts autonomously.
              </Paragraph>
              <Box render="ul" rowGap={12} marginBottom={32}>
                {[
                  "AI agents that can send on-chain transactions",
                  "Natural language smart contract interaction",
                  "Automated DeFi strategies with AI optimization",
                  "Cross-chain portfolio management",
                ].map((item, idx) => (
                  <XStack key={idx} render="li" display="flex" alignItems="center" gap={12} color="var(--neutral-300)">
                    <XStack width={24} height={24} borderRadius="var(--radius)" backgroundColor="rgb(255 255 255 / 0.1)" display="flex" alignItems="center" justifyContent="center">
                      <Check size={14} color="var(--foreground)" />
                    </XStack>
                    {item}
                  </XStack>
                ))}
              </Box>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-overlay)" overflow="hidden"
            >
              <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--neutral-950)">
                <XStack display="flex" gap={6}>
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
                </XStack>
                <Text marginLeft={8} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" fontFamily="var(--font-mono)">hanzo-agent.ts</Text>
              </XStack>
              <Box padding={16} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" backgroundColor="var(--neutral-950)">
                <Box render="pre" color="var(--neutral-300)" overflowX="auto">
{`import { Hanzo } from "@hanzo/ai";
import { Wallet } from "@hanzo/blockchain";

const agent = new Hanzo.Agent({
  model: "claude-sonnet-4-20250514",
  tools: [Wallet.tools],
});

// Agent can now execute on-chain
await agent.run(\`
  Check my ETH balance on Ethereum mainnet,
  then swap 0.1 ETH for USDC on Uniswap
  if the price is favorable.
\`);`}
                </Box>
              </Box>
            </MotionBox>
          </Grid>
        </Box>
      </Box>

      {/* Roadmap Section */}
      <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--neutral-950)" $md={{ paddingHorizontal: 32 }}>
        <Box maxWidth="56rem" marginHorizontal="auto">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            textAlign="center" marginBottom={48}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Development Roadmap
            </H2>
            <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)">
              Our planned timeline for launching Web3 infrastructure.
            </Paragraph>
          </MotionBox>

          <Box position="relative">
            {/* Timeline line */}
            <Box position="absolute" left={16} top={0} bottom={0} width={1} backgroundColor="var(--neutral-800)" $md={{ left: "50%" }} />

            <Box rowGap={32}>
              {ROADMAP.map((item, index) => (
                <MotionBox
                  key={item.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  flexDirection="row" position="relative" display="flex" alignItems="center" gap={24} $md={index % 2 === 0 ? { flexDirection: "row" } : { flexDirection: "row-reverse" }}
                >
                  {/* Timeline dot */}
                  <Box position="absolute" left={16} width={12} height={12} borderRadius="var(--radius-full)" x="-50%" backgroundColor="var(--neutral-500)" $md={{ left: "50%" }} />

                  {/* Content */}
                  <Box marginLeft={48} $md={{ ...({ marginLeft: 0, width: "50%" }), ...(index % 2 === 0 ? { paddingRight: 48, textAlign: "right" } : { paddingLeft: 48 }) }}>
                    <Box display="inline-block" paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" backgroundColor="rgb(255 255 255 / 0.1)" color="var(--foreground)" borderWidth={1} borderColor="var(--border-strong)" marginBottom={8}>
                      {item.phase}
                    </Box>
                    <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)">{item.title}</H3>
                    <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color={item.status === "in-progress" ? "var(--foreground)" : "var(--neutral-500)"}>
                      {item.status === "in-progress" ? "In Progress" : "Planned"}
                    </Text>
                  </Box>
                </MotionBox>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Supported Chains */}
      <Box render="section" paddingVertical={96} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }}>
        <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            textAlign="center" marginBottom={48}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Multi-Chain from Day One
            </H2>
            <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
              Support for all major blockchain networks, with more being added continuously.
            </Paragraph>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            flexDirection="row" display="flex" flexWrap="wrap" justifyContent="center" gap={16}
          >
            {[
              "Ethereum",
              "Polygon",
              "Arbitrum",
              "Optimism",
              "Base",
              "Solana",
              "Cosmos",
              "Avalanche",
              "BNB Chain",
              "Lux",
              "zkSync",
              "Starknet",
            ].map((chain, index) => (
              <Box
                key={chain}
                paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)"
              >
                {chain}
              </Box>
            ))}
          </MotionBox>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box render="section" paddingVertical={96} paddingHorizontal={16} borderTopWidth={1} borderColor="var(--neutral-900)" $md={{ paddingHorizontal: 32 }}>
        <Box maxWidth="56rem" marginHorizontal="auto">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="var(--border-strong)" padding={32} textAlign="center" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), transparent)" $md={{ padding: 48 }}
          >
            <XStack width={64} height={64} borderRadius="var(--radius-2xl)" backgroundColor="rgb(255 255 255 / 0.1)" display="flex" alignItems="center" justifyContent="center" marginHorizontal="auto" marginBottom={24}>
              <Blocks size={32} color="var(--foreground)" />
            </XStack>
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Ready to Build on Web3?
            </H2>
            <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" marginBottom={32} maxWidth="36rem" marginHorizontal="auto">
              Join the waitlist to be among the first to access Hanzo's Web3 infrastructure when it launches.
            </Paragraph>

            <YStack onSubmit={handleSubmit} render="form" maxWidth="28rem" marginHorizontal="auto" display="flex" flexDirection="column" gap={12} $sm={{ flexDirection: "row" }}>
              <XStack flex={1} display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={12} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)">
                <Mail size={16} color="var(--neutral-500)" />
                <Box display="inline-block" minHeight={44}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  render="input" flex={1} backgroundColor="transparent" color="var(--foreground)" placeholderTextColor="var(--neutral-600)" outlineStyle="none" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)"
                  required
                />
              </XStack>
              <Button
                type="submit"
                paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-lg)" fontWeight="500"
                style={{ backgroundColor: "#8b5cf6" }}
              >
                {submitted ? "Joined!" : "Join Waitlist"}
              </Button>
            </YStack>

            <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={24} marginTop={32} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">
              <Text display="flex" alignItems="center" gap={8}>
                <Lock size={16} />
                Enterprise-grade security
              </Text>
              <Text display="flex" alignItems="center" gap={8}>
                <Globe size={16} />
                Multi-chain support
              </Text>
              <Text display="flex" alignItems="center" gap={8}>
                <Zap size={16} />
                AI-native integration
              </Text>
            </XStack>
          </MotionBox>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Blockchain;
