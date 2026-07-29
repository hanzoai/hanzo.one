import { Anchor, Box, Grid, Link, MotionBox, MotionText, Text, XStack } from '@/gui'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  Database,
  Lock,
  Zap,
  Globe,
  HardDrive,
  Radio,
  Check,
  Copy,
  ExternalLink,
} from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const FEATURES = [
  { id: "database", label: "Database", icon: Database },
  { id: "auth", label: "Auth", icon: Lock },
  { id: "functions", label: "Functions", icon: Zap },
  { id: "storage", label: "Storage", icon: HardDrive },
  { id: "realtime", label: "Realtime", icon: Radio },
];

const FeatureDemo = ({ activeTab }: { activeTab: string }) => {
  const demos: Record<string, { title: string; code: string }> = {
    database: {
      title: "PostgreSQL + pgvector",
      code: `const { data, error } = await hanzo
  .from('products')
  .select('*')
  .textSearch('name', 'coffee')
  .limit(10)

// Vector similarity search
const similar = await hanzo.rpc('match_documents', {
  query_embedding: embedding,
  match_threshold: 0.8
})`,
    },
    auth: {
      title: "Authentication",
      code: `// Sign up with email
const { user } = await hanzo.auth.signUp({
  email: 'user@example.com',
  password: 'secure-password'
})

// OAuth providers
await hanzo.auth.signInWithOAuth({
  provider: 'github'
})`,
    },
    functions: {
      title: "Edge Functions",
      code: `// Deno-powered edge functions
Deno.serve(async (req) => {
  const { name } = await req.json()

  return new Response(
    JSON.stringify({ message: \`Hello \${name}!\` }),
    { headers: { 'Content-Type': 'application/json' } }
  )
})`,
    },
    storage: {
      title: "Object Storage",
      code: `// Upload file
const { data } = await hanzo.storage
  .from('avatars')
  .upload('user-123/avatar.png', file)

// Get public URL
const { publicUrl } = hanzo.storage
  .from('avatars')
  .getPublicUrl('user-123/avatar.png')`,
    },
    realtime: {
      title: "Realtime Subscriptions",
      code: `// Subscribe to changes
const channel = hanzo
  .channel('room-1')
  .on('postgres_changes',
    { event: '*', schema: 'public', table: 'messages' },
    (payload) => console.log(payload)
  )
  .subscribe()

// Broadcast presence
channel.track({ user: 'user-123', online: true })`,
    },
  };

  const demo = demos[activeTab];

  return (
    <Box borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="var(--surface-overlay)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" overflow="hidden" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)">
      <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--neutral-950)">
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
      <Box padding={16} backgroundColor="var(--neutral-950)">
        <AnimatePresence mode="wait">
          <MotionBox
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontFamily="var(--font-mono)" color="var(--neutral-300)" overflowX="auto"
          >
            <code>{demo.code}</code>
          </MotionBox>
        </AnimatePresence>
      </Box>
    </Box>
  );
};

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("database");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx hanzo init");
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
            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              flexDirection="row" display="inline-flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={24}
              style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
            >
              Open Source • Self-Hostable • Scalable
            </MotionBox>

            <MotionText
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              fontSize="var(--text-3xl)" lineHeight="1.1" fontWeight="500" letterSpacing="var(--tracking-tight)" marginBottom={24} $sm={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }} $lg={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $xl={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
            >
              <Text color="var(--foreground)">Backend for</Text>
              <br />
              <Text color="var(--neutral-400)">modern apps.</Text>
            </MotionText>

            <MotionText
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              fontSize="var(--text-base)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" marginBottom={32} maxWidth="36rem" $lg={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}
            >
              PostgreSQL database, authentication, edge functions, realtime subscriptions, and storage. Everything you need, nothing you don't.
            </MotionText>

            {/* CTAs */}
            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              flexDirection="row" display="flex" flexWrap="wrap" alignItems="center" gap={16} marginBottom={24}
            >
              <Link
                to="/signup"
                display="inline-flex" alignItems="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
              >
                Start building
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
              </Link>
              <Anchor tap
                href="https://docs.hanzo.ai/base"
                target="_blank"
                rel="noreferrer noopener"
                display="inline-flex" alignItems="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
              >
                Documentation
              </Anchor>
            </MotionBox>

            {/* Install command */}
            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              marginBottom={32}
            >
              <XStack display="inline-flex" alignItems="center" gap={12} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)">
                <Text render="code" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontFamily="var(--font-mono)" color="var(--neutral-300)">npx hanzo init</Text>
                <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                  onClick={handleCopy}
                  render="button" color="var(--neutral-500)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
                >
                  {copied ? <Check size={14} color="var(--neutral-500)" /> : <Copy size={14} />}
                </Box>
              </XStack>
            </MotionBox>

            {/* Feature tabs */}
            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              flexDirection="row" display="flex" flexWrap="wrap" gap={8}
            >
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                const isActive = activeTab === feature.id;
                return (
                  <XStack minHeight={44}
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    render="button" display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={isActive ? "var(--foreground)" : "var(--neutral-900)"} color={isActive ? "var(--foreground)" : "var(--neutral-400)"} borderWidth={isActive ? undefined : 1} borderColor={isActive ? undefined : "var(--neutral-800)"} hoverStyle={isActive ? undefined : { color: "var(--foreground)", borderColor: "var(--neutral-700)" }}
                  >
                    <Icon width={16} height={16} />
                    {feature.label}
                  </XStack>
                );
              })}
            </MotionBox>
          </div>

          {/* Right Column: Code Demo */}
          <MotionBox
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <FeatureDemo activeTab={activeTab} />
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
