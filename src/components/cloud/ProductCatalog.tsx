import { Anchor, Box as GuiBox, Grid, H2, H3, Link, MotionBox, Paragraph, XStack } from '@/gui'
import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Brain,
  Sparkles,
  Route,
  Bot,
  Puzzle,
  FileCode,
  GitBranch,
  GraduationCap,
  Server,
  Terminal,
  Layout,
  Code,
  Boxes,
  FileJson,
  Workflow,
  Search,
  MonitorCheck,
  Shield,
  Lock,
  Database,
  Key,
  HardDrive,
  Gauge,
  Globe,
  Network,
  Router,
  CloudCog,
  Container,
  Layers,
  Table,
  FileSearch,
  Zap,
  Webhook,
  ArrowLeftRight,
  Filter,
  Store,
  Users,
  FileCheck,
  KeyRound,
  ClipboardCheck,
  AlertTriangle,
  Building,
  CreditCard,
  Settings,
  Activity,
  LineChart,
  ScrollText,
  BarChart3,
  Bell,
  Eye,
  AlertCircle,
  Rocket,
  Box,
  FolderOpen,
  Map,
  ShieldCheck,
  Scale,
  GitMerge,
  Tag,
  ChevronRight,
} from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

interface Product {
  name: string;
  description: string;
  icon: React.ElementType;
  href?: string;
  badge?: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  products: Product[];
}

const CATEGORIES: Category[] = [
  {
    id: "ai-agents",
    name: "AI & Agents",
    description: "Build intelligent applications with foundation models and agent frameworks",
    icon: Brain,
    color: "#8b5cf6",
    products: [
      { name: "Hanzo Models", description: "Foundation models API", icon: Brain, href: "/ai" },
      { name: "Zen", description: "Multimodal AI engine", icon: Sparkles, href: "/ai" },
      { name: "Router", description: "Intelligent model routing", icon: Route },
      { name: "Agent", description: "Agent orchestration", icon: Bot, href: "/operative" },
      { name: "MCP", description: "Model Context Protocol", icon: Puzzle },
      { name: "Notebooks", description: "Interactive AI notebooks", icon: FileCode, href: "/ai-studio" },
      { name: "Pipelines", description: "ML workflow automation", icon: GitBranch },
      { name: "Training", description: "Fine-tuning infrastructure", icon: GraduationCap },
      { name: "Serving", description: "Model deployment", icon: Server },
    ],
  },
  {
    id: "developer-tools",
    name: "Developer Tools",
    description: "Everything you need to build, test, and deploy applications",
    icon: Terminal,
    color: "#f97316",
    products: [
      { name: "Hanzo Dev", description: "AI coding assistant", icon: Terminal, href: "/dev" },
      { name: "CLI", description: "Command line tools", icon: Terminal, href: "/download" },
      { name: "Console", description: "Web dashboard", icon: Layout },
      { name: "SDKs", description: "Client libraries", icon: Code },
      { name: "Templates", description: "Starter projects", icon: Boxes },
      { name: "Flow", description: "Visual workflow builder", icon: Workflow },
      { name: "Local", description: "Local dev environment", icon: HardDrive },
      { name: "Inspector", description: "Debug & inspect tools", icon: Search },
      { name: "Status", description: "Service health", icon: MonitorCheck, href: "/status" },
    ],
  },
  {
    id: "app-platform",
    name: "App Platform",
    description: "Build and scale applications with managed backend services",
    icon: Layers,
    color: "#10b981",
    products: [
      { name: "Hanzo Base", description: "Backend-as-a-Service", icon: Database, href: "/base" },
      { name: "Auth", description: "Authentication & SSO", icon: Shield, href: "/identity" },
      { name: "Functions", description: "Serverless compute", icon: Zap, href: "/functions" },
      { name: "Runtime", description: "Application runtime", icon: Server },
      { name: "Machines", description: "Managed VMs", icon: Server, href: "/machines" },
      { name: "API", description: "API management", icon: FileJson },
      { name: "Realtime", description: "WebSocket & sync", icon: Activity, href: "/realtime" },
      { name: "Secrets", description: "Secret management", icon: Key },
      { name: "Commerce", description: "E-commerce APIs", icon: CreditCard, href: "/commerce" },
    ],
  },
  {
    id: "cloud-infrastructure",
    name: "Cloud Infrastructure",
    description: "Global infrastructure for compute, networking, and storage",
    icon: CloudCog,
    color: "#3b82f6",
    products: [
      { name: "Edge", description: "Edge computing", icon: Globe, href: "/edge" },
      { name: "Gateway", description: "API gateway", icon: Router },
      { name: "HKE", description: "Kubernetes engine", icon: Container },
      { name: "Networking", description: "Virtual networks", icon: Network },
      { name: "DNS", description: "DNS management", icon: Globe },
      { name: "Tunnel", description: "Secure tunnels", icon: Lock },
      { name: "Proxy", description: "Reverse proxy", icon: ArrowLeftRight },
      { name: "Registry", description: "Container registry", icon: Box },
      { name: "Cloud", description: "IaaS foundation", icon: CloudCog },
    ],
  },
  {
    id: "databases-search",
    name: "Databases & Search",
    description: "Managed databases, vector stores, and search engines",
    icon: Database,
    color: "#06b6d4",
    products: [
      { name: "SQL", description: "PostgreSQL managed", icon: Table },
      { name: "SQL Vector", description: "pgvector enabled", icon: Table, href: "/vector" },
      { name: "DocumentDB", description: "Document database", icon: FileJson },
      { name: "KV", description: "Key-value store", icon: Key },
      { name: "Vector", description: "Vector database", icon: Gauge, href: "/vector" },
      { name: "Storage", description: "Object storage", icon: HardDrive },
      { name: "Search", description: "Full-text search", icon: Search },
      { name: "Datastore", description: "Multi-model DB", icon: Database, href: "/datastore" },
      { name: "Datastore Vector", description: "Vector-enabled", icon: Database },
    ],
  },
  {
    id: "integrations-automation",
    name: "Integrations & Automation",
    description: "Connect systems and automate workflows across your stack",
    icon: Workflow,
    color: "#ec4899",
    products: [
      { name: "Automations", description: "Workflow automation", icon: Workflow, href: "/automations" },
      { name: "Connectors", description: "Pre-built integrations", icon: Puzzle },
      { name: "Webhooks", description: "Event webhooks", icon: Webhook },
      { name: "Event Routing", description: "Event bus", icon: Route },
      { name: "API Gateway", description: "Gateway management", icon: Router },
      { name: "ETL", description: "Data pipelines", icon: GitBranch },
      { name: "CDC", description: "Change data capture", icon: Filter },
      { name: "Marketplace", description: "Integration hub", icon: Store },
      { name: "iPaaS SDK", description: "Build connectors", icon: Code },
    ],
  },
  {
    id: "security-governance",
    name: "Security & Governance",
    description: "Enterprise security, compliance, and access management",
    icon: Shield,
    color: "#ef4444",
    products: [
      { name: "IAM", description: "Identity & access", icon: Users },
      { name: "Policy", description: "Policy engine", icon: FileCheck },
      { name: "KMS", description: "Key management", icon: KeyRound },
      { name: "Audit", description: "Audit logging", icon: ClipboardCheck },
      { name: "Approvals", description: "Approval workflows", icon: ShieldCheck },
      { name: "Quotas & Limits", description: "Resource limits", icon: AlertTriangle },
      { name: "Orgs & Teams", description: "Organization mgmt", icon: Building },
      { name: "Billing", description: "Usage & billing", icon: CreditCard },
      { name: "Admin", description: "Admin console", icon: Settings },
    ],
  },
  {
    id: "observability-operations",
    name: "Observability & Operations",
    description: "Monitor, debug, and operate your applications at scale",
    icon: Activity,
    color: "#f59e0b",
    products: [
      { name: "Telemetry", description: "OpenTelemetry", icon: Activity, href: "/analytics" },
      { name: "Metrics", description: "Time-series metrics", icon: LineChart },
      { name: "Logs", description: "Log aggregation", icon: ScrollText },
      { name: "Traces", description: "Distributed tracing", icon: GitBranch },
      { name: "Dashboards", description: "Custom dashboards", icon: BarChart3 },
      { name: "Alerts", description: "Alerting rules", icon: Bell },
      { name: "LLM Observability", description: "AI monitoring", icon: Eye },
      { name: "Incidents", description: "Incident mgmt", icon: AlertCircle },
      { name: "Status", description: "Status pages", icon: MonitorCheck },
    ],
  },
  {
    id: "hosting-delivery",
    name: "Hosting & Delivery",
    description: "Deploy and deliver applications globally with zero config",
    icon: Rocket,
    color: "#14b8a6",
    products: [
      { name: "Deploy", description: "Git deployments", icon: Rocket },
      { name: "Containers", description: "Container hosting", icon: Container },
      { name: "Static Hosting", description: "Static sites", icon: FolderOpen },
      { name: "CDN", description: "Content delivery", icon: Globe },
      { name: "Domains", description: "Domain management", icon: Map },
      { name: "TLS", description: "SSL certificates", icon: ShieldCheck },
      { name: "Load Balancing", description: "Traffic distribution", icon: Scale },
      { name: "Environments", description: "Deploy environments", icon: Layers },
      { name: "Releases", description: "Release management", icon: Tag },
    ],
  },
];

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <GuiBox render="section" paddingVertical={96} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }}>
      <GuiBox maxWidth="var(--container-max)" marginHorizontal="auto">
        {/* Section header */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Complete Cloud Platform
          </H2>
          <Paragraph color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
            Everything you need to build, deploy, and scale modern applications.
            90+ managed services, one unified platform.
          </Paragraph>
        </MotionBox>

        {/* Category grid */}
        <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {CATEGORIES.map((category, index) => {
            const CategoryIcon = category.icon;
            const isExpanded = activeCategory === category.id;

            return (
              <MotionBox
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderRadius="var(--radius-xl)" overflow="hidden" transition="all 300ms cubic-bezier(.4,0,.2,1)" borderColor={isExpanded ? "var(--neutral-700)" : "var(--neutral-800)"} outlineWidth={isExpanded ? 1 : undefined} outlineColor={isExpanded ? "var(--neutral-700)" : undefined} outlineStyle={isExpanded ? "solid" : undefined} hoverStyle={isExpanded ? undefined : { borderColor: "var(--neutral-700)" }}
              >
                {/* Category header */}
                <XStack minHeight={44}
                  onClick={() =>
                    setActiveCategory(isExpanded ? null : category.id)
                  }
                  render="button" width="100%" padding={24} textAlign="left" display="flex" alignItems="flex-start" gap={16}
                >
                  <XStack
                    width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" flexShrink={0}
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <CategoryIcon
                      width={24} height={24}
                      style={{ color: category.color }}
                    />
                  </XStack>
                  <GuiBox flex={1} minWidth={0}>
                    <XStack display="flex" alignItems="center" justifyContent="space-between">
                      <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)">
                        {category.name}
                      </H3>
                      <ChevronRight
                        size={20} color="var(--neutral-500)"
                      />
                    </XStack>
                    <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginTop={4}>
                      {category.description}
                    </Paragraph>
                    <GuiBox fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginTop={8}>
                      {category.products.length} services
                    </GuiBox>
                  </GuiBox>
                </XStack>

                {/* Expanded products list */}
                {isExpanded && (
                  <MotionBox
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    borderTopWidth={1} borderColor="var(--neutral-800)"
                  >
                    <Grid padding={16} display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap={8}>
                      {category.products.map((product) => {
                        const ProductIcon = product.icon;
                        const content = (
                          <GuiBox group padding={12} borderRadius="var(--radius-lg)" backgroundColor="var(--surface-card-emphasis)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" textAlign="center" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
                            <ProductIcon
                              width={20} height={20} marginHorizontal="auto" marginBottom={8} color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }}
                              style={{
                                color: product.href ? category.color : undefined,
                              }}
                            />
                            <GuiBox fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" color="var(--foreground)" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                              {product.name}
                            </GuiBox>
                            <GuiBox fontSize="10px" color="var(--neutral-500)" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                              {product.description}
                            </GuiBox>
                          </GuiBox>
                        );

                        return product.href ? (
                          <Link tap key={product.name} to={product.href}>
                            {content}
                          </Link>
                        ) : (
                          <div key={product.name}>{content}</div>
                        );
                      })}
                    </Grid>
                  </MotionBox>
                )}
              </MotionBox>
            );
          })}
        </Grid>

        {/* Bottom CTA */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          marginTop={64} textAlign="center"
        >
          <Paragraph color="var(--neutral-400)" marginBottom={24}>
            All services available via API, CLI, Console, and SDKs
          </Paragraph>
          <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={16}>
            <Link minHeight={44} 
              to="/pricing"
              paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
              style={{ backgroundColor: BRAND_COLOR, color: "#fff" }}
            >
              View Pricing
              <GuiBox render="span" display="inline-flex" alignItems="center" marginLeft={8}><ChevronRight size={16} /></GuiBox>
            </Link>
            <Anchor minHeight={44} 
              href="https://docs.hanzo.ai/cloud"
              target="_blank"
              rel="noreferrer noopener"
              paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
            >
              Read Documentation
              <GuiBox render="span" display="inline-flex" alignItems="center" marginLeft={8}><ChevronRight size={16} /></GuiBox>
            </Anchor>
          </XStack>
        </MotionBox>
      </GuiBox>
    </GuiBox>
  );
};

export default ProductCatalog;
