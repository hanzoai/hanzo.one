import { Anchor, Box, Grid, H2, H4, Link, MotionBox, MotionText, Paragraph, Text, XStack, FILL} from '@/gui'
import React from "react";
import { motion } from "framer-motion";

import {
  Shield,
  Zap,
  Database,
  Key,
  HardDrive,
  Activity,
  Webhook,
  Terminal,
  Server,
  Lock,
  Users,
  FileJson,
  Clock,
  ChevronRight,
} from "lucide-react";

const BRAND_COLOR = "#10b981"; // Green for platform

interface Service {
  name: string;
  description: string;
  icon: React.ElementType;
  href?: string;
}

const CORE_SERVICES: Service[] = [
  {
    name: "Auth",
    description: "Authentication, SSO, OAuth, JWT, and user management out of the box",
    icon: Shield,
    href: "/identity",
  },
  {
    name: "Functions",
    description: "Serverless functions with automatic scaling and edge deployment",
    icon: Zap,
    href: "/functions",
  },
  {
    name: "Database",
    description: "PostgreSQL, vector search, and real-time subscriptions",
    icon: Database,
    href: "/datastore",
  },
  {
    name: "Storage",
    description: "S3-compatible object storage with CDN integration",
    icon: HardDrive,
  },
  {
    name: "Realtime",
    description: "WebSockets, presence, and live sync for collaborative apps",
    icon: Activity,
    href: "/realtime",
  },
  {
    name: "Secrets",
    description: "Encrypted secret management with versioning and rotation",
    icon: Key,
  },
];

const ADDITIONAL_SERVICES: Service[] = [
  {
    name: "API Gateway",
    description: "Rate limiting, caching, and request transformation",
    icon: Server,
  },
  {
    name: "Cron Jobs",
    description: "Scheduled tasks with monitoring and retry logic",
    icon: Clock,
  },
  {
    name: "Webhooks",
    description: "Event-driven integrations with external services",
    icon: Webhook,
  },
  {
    name: "IAM",
    description: "Fine-grained access control and policies",
    icon: Users,
  },
  {
    name: "Edge Config",
    description: "Global configuration with instant propagation",
    icon: FileJson,
  },
  {
    name: "Vault",
    description: "Hardware-backed encryption and key management",
    icon: Lock,
  },
];

const PaaSCapabilities = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $md={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        {/* Section header */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          textAlign="center" marginBottom={64}
        >
          <XStack
            display="inline-flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={16}
            style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
          >
            <Terminal size={14} />
            Platform-as-a-Service
          </XStack>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Backend Services, Ready to Deploy
          </H2>
          <Paragraph color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
            Everything you need to build production applications. Self-host on your infrastructure,
            or deploy to Hanzo Cloud with zero changes.
          </Paragraph>
        </MotionBox>

        {/* Core services */}
        <Box marginBottom={48}>
          <MotionText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={24}
          >
            Core Services
          </MotionText>
          <Grid display="grid" gap={16} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {CORE_SERVICES.map((service, index) => {
              const Icon = service.icon;
              const content = (
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  
                  padding={24} borderRadius="var(--radius-xl)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" cursor={service.href ? "pointer" : undefined} hoverStyle={service.href ? { borderColor: "var(--border-strong)" } : undefined}
                >
                  <XStack display="flex" alignItems="flex-start" gap={16}>
                    <XStack
                      width={40} height={40} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" flexShrink={0}
                      style={{ backgroundColor: `${BRAND_COLOR}20` }}
                    >
                      <Icon width={20} height={20} style={{ color: BRAND_COLOR }} />
                    </XStack>
                    <div>
                      <H4 color="var(--foreground)" fontWeight="500" marginBottom={4}>{service.name}</H4>
                      <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{service.description}</Paragraph>
                    </div>
                  </XStack>
                </MotionBox>
              );

              return service.href ? (
                <Link tap key={service.name} to={service.href}>
                  {content}
                </Link>
              ) : (
                <div key={service.name}>{content}</div>
              );
            })}
          </Grid>
        </Box>

        {/* Additional services */}
        <Box marginBottom={48}>
          <MotionText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={24}
          >
            Additional Services
          </MotionText>
          <Grid display="grid" gap={16} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {ADDITIONAL_SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <MotionBox
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  padding={16} borderRadius="var(--radius-lg)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)"
                >
                  <XStack display="flex" alignItems="center" gap={12}>
                    <Icon width={16} height={16} color="var(--neutral-500)" />
                    <div>
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)">{service.name}</Text>
                      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginLeft={8}>{service.description}</Text>
                    </div>
                  </XStack>
                </MotionBox>
              );
            })}
          </Grid>
        </Box>

        {/* CLI showcase */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" overflow="hidden"
        >
          <XStack display="flex" alignItems="center" gap={12} paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)">
            <XStack display="flex" gap={6}>
              <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
              <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
              <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
            </XStack>
            <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" fontFamily="var(--font-mono)">hanzo platform</Text>
          </XStack>
          <Box padding={24} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
            <Box rowGap={12}>
              <Box color="var(--neutral-500)">
                <Text color="var(--foreground)">$</Text> hanzo init my-app
              </Box>
              <Box color="var(--neutral-400)">
                ✓ Created project configuration
              </Box>
              <Box color="var(--neutral-400)">
                ✓ Initialized Auth, Database, Storage
              </Box>
              <Box color="var(--neutral-400)">
                ✓ Generated TypeScript types
              </Box>
              <Box marginTop={16} color="var(--neutral-500)">
                <Text color="var(--foreground)">$</Text> hanzo dev
              </Box>
              <Box color="var(--neutral-400)">
                Starting local development server...
              </Box>
              <XStack display="flex" alignItems="center" gap={8}>
                <Box width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" />
                <Text color="var(--foreground)">
                  Platform running at http://localhost:8000
                </Text>
              </XStack>
              <Box marginTop={16} color="var(--neutral-500)">
                <Text color="var(--foreground)">$</Text> hanzo deploy
              </Box>
              <Box color="var(--neutral-400)">
                Deploying to production...
              </Box>
              <XStack display="flex" alignItems="center" gap={8}>
                <Box width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" />
                <Text color="var(--foreground)">
                  Live at https://my-app.hanzo.app
                </Text>
              </XStack>
            </Box>
          </Box>
        </MotionBox>

        {/* Bottom CTA */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          marginTop={48} textAlign="center"
        >
          <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={16}>
            <Anchor minHeight={44} 
              href="https://docs.hanzo.ai/platform/quickstart"
              target="_blank"
              rel="noreferrer noopener"
              paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
              style={FILL}
            >
              Get Started
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ChevronRight size={16} /></Box>
            </Anchor>
            <Link minHeight={44} 
              to="/cloud"
              paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
            >
              Compare to Cloud
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ChevronRight size={16} /></Box>
            </Link>
          </XStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default PaaSCapabilities;
