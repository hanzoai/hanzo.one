import { Anchor, Box, Grid, Link, MotionBox, MotionText, Text, XStack } from '@/gui'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  Server,
  Globe,
  Database,
  Cpu,
  Shield,
  Zap,
  Cloud,
  Check,
  Copy,
} from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const SERVICES = [
  { id: "compute", label: "Compute", icon: Server },
  { id: "ai", label: "AI/ML", icon: Cpu },
  { id: "database", label: "Database", icon: Database },
  { id: "edge", label: "Edge", icon: Globe },
  { id: "security", label: "Security", icon: Shield },
];

const ServiceDemo = ({ activeService }: { activeService: string }) => {
  const demos: Record<string, { title: string; code: string }> = {
    compute: {
      title: "Auto-scaling Compute",
      code: `# Deploy with auto-scaling
hanzo deploy --min 1 --max 100

# Scale based on metrics
hanzo scale web \\
  --cpu-target 70% \\
  --memory-target 80%

# GPU instances for AI workloads
hanzo compute create \\
  --type a100-80gb \\
  --spot-instances`,
    },
    ai: {
      title: "AI Infrastructure",
      code: `# Deploy ML models
hanzo ai deploy ./model \\
  --gpu a100 \\
  --replicas 3

# Inference endpoints
curl https://api.hanzo.cloud/v1/predict \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{"input": "Hello world"}'

# Fine-tuning jobs
hanzo ai train --base llama-3 --data ./dataset`,
    },
    database: {
      title: "Managed Databases",
      code: `# PostgreSQL with pgvector
hanzo db create postgres \\
  --version 16 \\
  --extensions pgvector,postgis

# Redis cluster
hanzo db create redis \\
  --cluster \\
  --replicas 3

# Automatic backups
hanzo db backup --schedule "0 2 * * *"`,
    },
    edge: {
      title: "Global Edge Network",
      code: `# Deploy to edge
hanzo edge deploy ./functions \\
  --regions all

# Edge KV storage
hanzo edge kv put user:123 '{"name":"Alice"}'

# 35+ regions, <50ms latency
hanzo edge status
# ✓ 35 regions active
# ✓ Avg latency: 23ms`,
    },
    security: {
      title: "Enterprise Security",
      code: `# SOC 2 & HIPAA compliant
hanzo security audit

# Private networking
hanzo vpc create production \\
  --cidr 10.0.0.0/16

# Secrets management
hanzo secrets set API_KEY --env production

# Zero-trust access
hanzo access grant user@company.com \\
  --role developer`,
    },
  };

  const demo = demos[activeService];

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
            key={activeService}
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
            key={activeService}
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

const CloudHero = () => {
  const [activeService, setActiveService] = useState("compute");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx hanzo deploy");
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
              90+ Managed Services • Global Edge • 99.99% SLA
            </MotionBox>

            <MotionText
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              fontSize="var(--text-3xl)" lineHeight="1.1" fontWeight="500" letterSpacing="var(--tracking-tight)" marginBottom={24} $sm={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }} $lg={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $xl={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
            >
              <Text color="var(--foreground)">Cloud that</Text>
              <br />
              <Text color="var(--neutral-400)">scales with you.</Text>
            </MotionText>

            <MotionText
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              fontSize="var(--text-base)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" marginBottom={32} maxWidth="36rem" $lg={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}
            >
              AI infrastructure, managed databases, serverless compute, and global edge deployment.
              Build, deploy, and scale modern applications on a unified platform.
            </MotionText>

            {/* CTAs */}
            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              flexDirection="row" display="flex" flexWrap="wrap" alignItems="center" gap={16} marginBottom={24}
            >
              <Link minHeight={44} 
                to="/signup"
                paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
              >
                Start free
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
              </Link>
              <Anchor tap
                href="https://docs.hanzo.ai/cloud"
                target="_blank"
                rel="noreferrer noopener"
                display="inline-flex" alignItems="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
              >
                Documentation
              </Anchor>
            </MotionBox>

            {/* Deploy command */}
            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              marginBottom={32}
            >
              <XStack display="inline-flex" alignItems="center" gap={12} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)">
                <Text render="code" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontFamily="var(--font-mono)" color="var(--neutral-300)">npx hanzo deploy</Text>
                <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                  onClick={handleCopy}
                  render="button" color="var(--neutral-500)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
                >
                  {copied ? <Check size={14} color="var(--neutral-500)" /> : <Copy size={14} />}
                </Box>
              </XStack>
            </MotionBox>

            {/* Service tabs */}
            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              flexDirection="row" display="flex" flexWrap="wrap" gap={8}
            >
              {SERVICES.map((service) => {
                const Icon = service.icon;
                const isActive = activeService === service.id;
                return (
                  <XStack minHeight={44}
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    render="button" display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={isActive ? "var(--foreground)" : "var(--neutral-900)"} color={isActive ? "var(--foreground)" : "var(--neutral-400)"} borderWidth={isActive ? undefined : 1} borderColor={isActive ? undefined : "var(--neutral-800)"} hoverStyle={isActive ? undefined : { color: "var(--foreground)", borderColor: "var(--neutral-700)" }}
                  >
                    <Icon width={16} height={16} />
                    {service.label}
                  </XStack>
                );
              })}
            </MotionBox>
          </div>

          {/* Right Column: Service Demo */}
          <MotionBox
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <ServiceDemo activeService={activeService} />
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default CloudHero;
