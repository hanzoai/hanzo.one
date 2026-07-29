import { Anchor, Box, Grid, Link, MotionBox, MotionText, Text, XStack, FILL} from '@/gui'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  Github,
  Terminal,
  Server,
  Database,
  Lock,
  Zap,
  Check,
  Copy,
} from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const FEATURES = [
  { id: "self-host", label: "Self-Host", icon: Server },
  { id: "auth", label: "Auth", icon: Lock },
  { id: "database", label: "Database", icon: Database },
  { id: "functions", label: "Functions", icon: Zap },
  { id: "cli", label: "CLI", icon: Terminal },
];

const FeatureDemo = ({ activeFeature }: { activeFeature: string }) => {
  const demos: Record<string, { title: string; code: string }> = {
    "self-host": {
      title: "Self-Hosting",
      code: `# One-line install
curl -fsSL install.hanzo.ai | sh

# Docker Compose setup
git clone https://github.com/hanzoai/platform
cd platform && docker compose up -d

# Kubernetes deployment
helm repo add hanzo https://charts.hanzo.ai
helm install hanzo hanzo/platform \\
  --set domain=platform.yourcompany.com`,
    },
    auth: {
      title: "Authentication",
      code: `// OAuth, Email, Phone, SSO
const { user } = await hanzo.auth.signUp({
  email: 'user@example.com',
  password: 'secure-password'
})

// Enterprise SSO
await hanzo.auth.signInWithSSO({
  provider: 'okta',
  domain: 'yourcompany.okta.com'
})

// JWT + RBAC built-in`,
    },
    database: {
      title: "PostgreSQL Database",
      code: `// Type-safe queries
const products = await hanzo
  .from('products')
  .select('id, name, price')
  .eq('category', 'electronics')
  .order('price', { ascending: true })

// Real-time subscriptions
hanzo.channel('products')
  .on('postgres_changes', { event: '*' },
    (payload) => updateUI(payload))
  .subscribe()`,
    },
    functions: {
      title: "Edge Functions",
      code: `// TypeScript/Deno powered
Deno.serve(async (req) => {
  const { email } = await req.json()

  // Send welcome email
  await hanzo.from('emails').insert({
    to: email,
    template: 'welcome'
  })

  return Response.json({ sent: true })
})`,
    },
    cli: {
      title: "Developer CLI",
      code: `# Initialize project
hanzo init my-app

# Local development
hanzo dev

# Database migrations
hanzo db migrate create add_users
hanzo db migrate up

# Deploy to production
hanzo deploy --prod`,
    },
  };

  const demo = demos[activeFeature];

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
            key={activeFeature}
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
            key={activeFeature}
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

const PlatformHero = () => {
  const [activeFeature, setActiveFeature] = useState("self-host");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx @hanzo/cli create my-app");
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
              Open Source • MIT Licensed • Self-Hostable
            </MotionBox>

            <MotionText
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              fontSize="var(--text-3xl)" lineHeight="1.1" fontWeight="500" letterSpacing="var(--tracking-tight)" marginBottom={24} $sm={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }} $lg={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $xl={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
            >
              <Text color="var(--foreground)">Own your</Text>
              <br />
              <Text color="var(--neutral-400)">entire stack.</Text>
            </MotionText>

            <MotionText
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              fontSize="var(--text-base)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" marginBottom={32} maxWidth="36rem" $lg={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}
            >
              Open source Backend-as-a-Service with Auth, Database, Storage, and Functions.
              Self-host on your infrastructure or deploy to Hanzo Cloud. No vendor lock-in.
            </MotionText>

            {/* CTAs */}
            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              flexDirection="row" display="flex" flexWrap="wrap" alignItems="center" gap={16} marginBottom={24}
            >
              <Anchor minHeight={44} 
                href="https://github.com/hanzoai/platform"
                target="_blank"
                rel="noreferrer noopener"
                paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                style={FILL}
              >
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={16} /></Box>
                Star on GitHub
              </Anchor>
              <Anchor tap
                href="https://docs.hanzo.ai/platform"
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
                <Text render="code" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontFamily="var(--font-mono)" color="var(--neutral-300)">npx @hanzo/cli create my-app</Text>
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
                const isActive = activeFeature === feature.id;
                return (
                  <XStack minHeight={44}
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    render="button" display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={isActive ? "var(--foreground)" : "var(--neutral-900)"} color={isActive ? "var(--foreground)" : "var(--neutral-400)"} borderWidth={isActive ? undefined : 1} borderColor={isActive ? undefined : "var(--neutral-800)"} hoverStyle={isActive ? undefined : { color: "var(--foreground)", borderColor: "var(--neutral-700)" }}
                  >
                    <Icon width={16} height={16} />
                    {feature.label}
                  </XStack>
                );
              })}
            </MotionBox>
          </div>

          {/* Right Column: Feature Demo */}
          <MotionBox
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <FeatureDemo activeFeature={activeFeature} />
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default PlatformHero;
