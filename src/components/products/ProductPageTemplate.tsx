import { Anchor, ArchitecturalBox, Badge, BlueprintLine, Box, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Grid, GridLines, H1, H2, Link, MotionBox, Paragraph, Tabs, TabsContent, TabsList, TabsTrigger, Text, XStack, YStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";

import {
  Github,
  BookOpen,
  Terminal,
  Copy,
  Check,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Zap,
  Database,
  Cpu,
  Clock,
  Brain,
  Activity,
  Layers,
  LayoutGrid,
  Key,
  Search,
  HardDrive,
  FileJson,
  BarChart3,
  Boxes,
  Shield,
  ListTodo,
  ListOrdered,
  Radio,
  BookOpen as Notebook,
  GitBranch,
  Dumbbell,
  SlidersHorizontal,
  Rocket,
  Archive,
  CheckCircle,
  LineChart,
  ScrollText,
  Route,
  PieChart,
  Network,
  UserCheck,
  KeyRound,
  ShoppingCart,
  MessageSquare,
  Workflow,
  LayoutDashboard,
  Cloud,
  Globe,
  Bot,
  Monitor,
  Image,
  Music,
  Video
} from "lucide-react";
import type { Product, ProductCategory } from "@/data/product-taxonomy";
import { getProductsByCategory } from "@/data/product-taxonomy";
import { ProductMockup } from "./ProductMockup";
import { UpstreamAttribution } from "./UpstreamAttribution";
import { CodeExamplesSection } from "./CodeExamplesSection";
import { CommunitySection } from "./CommunitySection";
import { SDKSection } from "./SDKSection";
import {
  getUpstreamForProduct,
  getCodeExamplesForProduct,
  getCommunityForProduct,
  hanzoSDKs,
} from "@/data/upstream-projects";

// Icon mapping
const iconMap: Record<string, React.ComponentType<{  }>> = {
  Database,
  Cpu,
  Clock,
  Brain,
  Activity,
  Layers,
  LayoutGrid,
  Key,
  Search,
  HardDrive,
  FileJson,
  BarChart3,
  Boxes,
  Shield,
  ListTodo,
  ListOrdered,
  Radio,
  BookOpen: Notebook,
  GitBranch,
  Dumbbell,
  SlidersHorizontal,
  Rocket,
  Archive,
  CheckCircle,
  LineChart,
  ScrollText,
  Route,
  PieChart,
  Network,
  UserCheck,
  KeyRound,
  ShoppingCart,
  MessageSquare,
  Workflow,
  LayoutDashboard,
  Cloud,
  Zap,
  Sparkles,
  Globe,
  Bot,
  Monitor,
  Image,
  Music,
  Video
};

interface ProductPageTemplateProps {
  product: Product;
  children?: React.ReactNode;
}

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
      onClick={copy}
      render="button" padding={8} borderRadius="var(--radius)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
      title="Copy to clipboard"
    >
      {copied ? <Check size={16} color="var(--foreground)" /> : <Copy size={16} color="var(--neutral-400)" />}
    </Box>
  );
};

const StatusBadge = ({ status }: { status: Product['status'] }) => {
  const variants = {
    // Monochrome: readiness reads as weight on the neutral ladder, not as hue.
    ga: { label: 'GA', color: 'var(--foreground)', borderColor: 'var(--border-strong)' },
    beta: { label: 'Beta', color: 'var(--neutral-300)', borderColor: 'var(--border)' },
    alpha: { label: 'Alpha', color: 'var(--neutral-400)', borderColor: 'var(--border)' },
    coming: { label: 'Coming Soon', color: 'var(--neutral-500)', borderColor: 'var(--border-hairline)' }
  };

  const { label, ...tone } = variants[status];

  return (
    <Badge variant="outline" {...tone}>
      {label}
    </Badge>
  );
};

const PricingBadge = ({ pricing }: { pricing?: Product['pricing'] }) => {
  if (!pricing) return null;

  const variants = {
    free: { label: 'Free', color: 'var(--foreground)', borderColor: 'var(--border-strong)' },
    freemium: { label: 'Free Tier', color: 'var(--neutral-300)', borderColor: 'var(--border)' },
    paid: { label: 'Paid', color: 'var(--neutral-400)', borderColor: 'var(--border)' }
  };

  const { label, ...tone } = variants[pricing];

  return (
    <Badge variant="outline" {...tone}>
      {label}
    </Badge>
  );
};

// Related Product Card
const RelatedProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => {
  const IconComponent = iconMap[product.icon] || Database;

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link minHeight={44} to={product.href}>
        <Card group backgroundColor="var(--surface-card-emphasis)" borderColor="var(--neutral-800)" transition="all 300ms cubic-bezier(.4,0,.2,1)" height="100%" cursor="pointer" hoverStyle={{ borderColor: "var(--border-strong)", backgroundColor: "var(--surface-card-emphasis)" }}>
          <CardHeader paddingBottom={12}>
            <XStack display="flex" alignItems="flex-start" justifyContent="space-between">
              <Box padding={8} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.05)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ borderColor: "var(--border-strong)" }}>
                <IconComponent height={20} width={20} color="var(--foreground)" />
              </Box>
              <StatusBadge status={product.status} />
            </XStack>
            <CardTitle fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" marginTop={12} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" display="flex" alignItems="center" gap={8} $group-hover={{ color: "var(--foreground)" }}>
              {product.shortName}
              <Box render="span" display="inline-flex" alignItems="center" opacity={0} $group-hover={{ opacity: 1 }}><ArrowRight size={16} color="var(--foreground)" /></Box>
            </CardTitle>
            <CardDescription color="var(--neutral-400)">
              {product.tagline}
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </MotionBox>
  );
};

export const ProductPageTemplate: React.FC<ProductPageTemplateProps> = ({ product, children }) => {
  const IconComponent = iconMap[product.icon] || Database;

  // Get related products from same category (excluding current product)
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  // Determine which install methods are available
  const installMethods = product.install
    ? Object.keys(product.install).filter(key => product.install?.[key as keyof typeof product.install])
    : [];

  // Get upstream project info (for forked OSS products)
  const upstreamProject = getUpstreamForProduct(product.id);

  // Get code examples for this product
  const codeExamples = getCodeExamplesForProduct(product.id);

  // Get community links
  const community = getCommunityForProduct(product.id);

  // Build community links array for CommunitySection
  const communityLinks = [
    { type: 'github' as const, url: product.github },
    { type: 'docs' as const, url: product.docs || 'https://docs.hanzo.ai' },
    ...(community.discord ? [{ type: 'discord' as const, url: community.discord }] : []),
    ...(community.twitter ? [{ type: 'twitter' as const, url: community.twitter }] : []),
  ];

  return (
    <Box minHeight="100vh" backgroundColor="var(--pure-black)" color="var(--foreground)">
      {/* Hero Section with Architectural Elements */}
      <Box render="section" position="relative" paddingVertical={64} paddingHorizontal={16} overflow="hidden" $md={{ paddingVertical: 96 }}>
        {/* Background effects */}
        <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundColor="var(--black)" />
        <GridLines spacing={50} opacity={0.03} />
        <BlueprintLine orientation="horizontal" position="15%" color="rgba(200, 200, 200, 0.03)" />
        <BlueprintLine orientation="horizontal" position="85%" color="rgba(200, 200, 200, 0.03)" />
        <BlueprintLine orientation="vertical" position="15%" color="rgba(200, 200, 200, 0.03)" />
        <BlueprintLine orientation="vertical" position="85%" color="rgba(200, 200, 200, 0.03)" />

        {/* Gradient accents */}
        <Box position="absolute" top={0} right={0} bottom={0} left={0} pointerEvents="none">
          <Box position="absolute" top="25%" left={-256} width={384} height={384} backgroundColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
          <Box position="absolute" bottom={0} right={0} width={384} height={384} backgroundColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-full)" filter="blur(64px)" x="50%" y="50%"></Box>
        </Box>

        <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
          <ArchitecturalBox
            backgroundColor="transparent" padding={24} $md={{ padding: 40 }}
            showCorners={true}
            showGrid={false}
            cornerSize={50}
            cornerColor="rgba(253, 68, 68, 0.15)"
          >
            <Grid display="grid" gap={48} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              {/* Left: Product Info */}
              <MotionBox
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Badges */}
                <XStack display="flex" flexWrap="wrap" alignItems="center" gap={12} marginBottom={24}>
                  <Box padding={12} borderRadius="var(--radius-xl)" backgroundColor="rgb(255 255 255 / 0.05)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)">
                    <IconComponent height={32} width={32} color="var(--foreground)" />
                  </Box>
                  <StatusBadge status={product.status} />
                  {product.openSource && (
                    <Badge variant="outline" backgroundColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" borderColor="var(--border-strong)">
                      Open Source
                    </Badge>
                  )}
                  <PricingBadge pricing={product.pricing} />
                </XStack>

                {/* Title */}
                <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={16} backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to right, var(--foreground), var(--neutral-400))" $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $lg={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
                  {product.name}
                </H1>

                {/* Tagline */}
                <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--foreground)" marginBottom={16} fontWeight="500" $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>
                  {product.tagline}
                </Paragraph>

                {/* Description */}
                <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" marginBottom={32}>
                  {product.description}
                </Paragraph>

                {/* Action Buttons */}
                <YStack display="flex" flexDirection="column" gap={16} $sm={{ flexDirection: "row" }}>
                  {product.docs && (
                    <Button
                      size="lg"
                      backgroundColor="var(--neutral-800)" color="var(--foreground)" borderWidth={0} hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }}
                      asChild
                    >
                      <a href={product.docs} target="_blank" rel="noopener noreferrer">
                        <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><BookOpen size={20} /></Box>
                        Documentation
                      </a>
                    </Button>
                  )}
                  <Button
                    size="lg"
                    variant="outline"
                    borderColor="rgb(255 255 255 / 0.2)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.05)", borderColor: "var(--border-strong)" }}
                    asChild
                  >
                    <a href={product.github} target="_blank" rel="noopener noreferrer">
                      <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={20} /></Box>
                      View on GitHub
                    </a>
                  </Button>
                </YStack>
              </MotionBox>

              {/* Right: Product Mockup */}
              <Box display="none" $lg={{ display: "block" }}>
                <ProductMockup
                  category={product.category}
                  product={product}
                  boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)" shadowColor="rgb(0 0 0 / 0.5)"
                />
              </Box>
            </Grid>
          </ArchitecturalBox>
        </Box>
      </Box>

      {/* Mobile Mockup (shown below hero on mobile) */}
      <Box render="section" paddingHorizontal={16} paddingBottom={32} $lg={{ display: "none" }}>
        <Box maxWidth="32rem" marginHorizontal="auto">
          <ProductMockup
            category={product.category}
            product={product}
            boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)" shadowColor="rgb(0 0 0 / 0.5)"
          />
        </Box>
      </Box>

      {/* Quick Install Section */}
      {product.install && installMethods.length > 0 && (
        <Box render="section" paddingVertical={64} paddingHorizontal={16} borderTopWidth={1} borderColor="rgb(255 255 255 / 0.1)">
          <Box maxWidth="56rem" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={8} textAlign="center" $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>Get Started</H2>
              <Paragraph color="var(--neutral-500)" textAlign="center" marginBottom={32}>Install {product.shortName} in seconds</Paragraph>

              <Tabs defaultValue={installMethods[0]} width="100%">
                <TabsList
                  display="grid"
                  gridTemplateColumns={`repeat(${Math.min(installMethods.length, 4)}, minmax(0, 1fr))`}
                  width="100%"
                  backgroundColor="var(--surface-card)"
                  borderWidth={1}
                  borderColor="var(--border)"
                  padding={4}
                  borderRadius="var(--radius-xl)"
                >
                  {product.install.cli && (
                    <TabsTrigger value="cli" borderRadius="var(--radius-lg)">
                      <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Terminal size={16} /></Box>
                      CLI
                    </TabsTrigger>
                  )}
                  {product.install.docker && (
                    <TabsTrigger value="docker" borderRadius="var(--radius-lg)">
                      Docker
                    </TabsTrigger>
                  )}
                  {product.install.npm && (
                    <TabsTrigger value="npm" borderRadius="var(--radius-lg)">
                      npm
                    </TabsTrigger>
                  )}
                  {product.install.pip && (
                    <TabsTrigger value="pip" borderRadius="var(--radius-lg)">
                      pip
                    </TabsTrigger>
                  )}
                </TabsList>

                {product.install.cli && (
                  <TabsContent value="cli" marginTop={16}>
                    <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden">
                      <XStack display="flex" alignItems="center" justifyContent="space-between" paddingHorizontal={16} paddingVertical={8} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)">
                        <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" fontFamily="var(--font-mono)">terminal</Text>
                        <CopyButton text={product.install.cli} />
                      </XStack>
                      <Box padding={16} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" overflowX="auto">
                        <Text color="var(--neutral-500)">$</Text>{" "}
                        <Text color="var(--foreground)">{product.install.cli}</Text>
                      </Box>
                    </Box>
                  </TabsContent>
                )}

                {product.install.docker && (
                  <TabsContent value="docker" marginTop={16}>
                    <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden">
                      <XStack display="flex" alignItems="center" justifyContent="space-between" paddingHorizontal={16} paddingVertical={8} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)">
                        <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" fontFamily="var(--font-mono)">docker</Text>
                        <CopyButton text={product.install.docker} />
                      </XStack>
                      <Box padding={16} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" overflowX="auto">
                        <Text color="var(--neutral-500)">$</Text>{" "}
                        <Text color="var(--foreground)">{product.install.docker}</Text>
                      </Box>
                    </Box>
                  </TabsContent>
                )}

                {product.install.npm && (
                  <TabsContent value="npm" marginTop={16}>
                    <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden">
                      <XStack display="flex" alignItems="center" justifyContent="space-between" paddingHorizontal={16} paddingVertical={8} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)">
                        <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" fontFamily="var(--font-mono)">npm</Text>
                        <CopyButton text={product.install.npm} />
                      </XStack>
                      <Box padding={16} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" overflowX="auto">
                        <Text color="var(--neutral-500)">$</Text>{" "}
                        <Text color="var(--foreground)">{product.install.npm}</Text>
                      </Box>
                    </Box>
                  </TabsContent>
                )}

                {product.install.pip && (
                  <TabsContent value="pip" marginTop={16}>
                    <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden">
                      <XStack display="flex" alignItems="center" justifyContent="space-between" paddingHorizontal={16} paddingVertical={8} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)">
                        <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" fontFamily="var(--font-mono)">pip</Text>
                        <CopyButton text={product.install.pip} />
                      </XStack>
                      <Box padding={16} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" overflowX="auto">
                        <Text color="var(--neutral-500)">$</Text>{" "}
                        <Text color="var(--foreground)">{product.install.pip}</Text>
                      </Box>
                    </Box>
                  </TabsContent>
                )}
              </Tabs>

              {/* Universal CLI hint */}
              <Paragraph textAlign="center" color="var(--neutral-500)" marginTop={24} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                New to Hanzo? Install the CLI first:{" "}
                <Text render="code" backgroundColor="var(--neutral-800)" paddingHorizontal={8} paddingVertical={4} borderRadius="var(--radius)" color="var(--foreground)" fontFamily="var(--font-mono)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
                  curl -fsSL hanzo.sh/install.sh | sh
                </Text>
              </Paragraph>
            </MotionBox>
          </Box>
        </Box>
      )}

      {/* Code Examples Section */}
      {codeExamples.length > 0 && (
        <CodeExamplesSection
          title={`${product.shortName} Quick Start`}
          subtitle="Get started in minutes with your language of choice"
          examples={codeExamples}
        />
      )}

      {/* Features Section */}
      <Box render="section" paddingVertical={64} paddingHorizontal={16} borderTopWidth={1} borderColor="rgb(255 255 255 / 0.1)" backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), transparent)">
        <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={8} textAlign="center" $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>Features</H2>
            <Paragraph color="var(--neutral-500)" textAlign="center" marginBottom={40}>Everything you need to get started</Paragraph>

            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              {product.features.map((feature, index) => (
                <MotionBox
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Box group backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={16} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}>
                    <XStack display="flex" alignItems="flex-start" gap={12}>
                      <Box marginTop={2}>
                        <Box render="span" display="inline-flex" alignItems="center" $group-hover={{ color: "var(--foreground)" }}><CheckCircle size={20} color="var(--foreground)" /></Box>
                      </Box>
                      <Text color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }}>{feature}</Text>
                    </XStack>
                  </Box>
                </MotionBox>
              ))}
            </Grid>
          </MotionBox>
        </Box>
      </Box>

      {/* Custom content from children */}
      {children}

      {/* SDK Section */}
      <SDKSection productName={product.shortName} sdks={hanzoSDKs} />

      {/* Community Section */}
      <CommunitySection
        productName={product.shortName}
        links={communityLinks}
      />

      {/* Resources Section */}
      <Box render="section" paddingVertical={64} paddingHorizontal={16} borderTopWidth={1} borderColor="rgb(255 255 255 / 0.1)">
        <Box maxWidth="56rem" marginHorizontal="auto">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={8} textAlign="center" $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>Resources</H2>
            <Paragraph color="var(--neutral-500)" textAlign="center" marginBottom={40}>Learn more about {product.shortName}</Paragraph>

            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              <Anchor minHeight={44} 
                href={product.github}
                target="_blank"
                rel="noopener noreferrer"
                group
              >
                <Card backgroundColor="var(--surface-card-emphasis)" borderColor="var(--neutral-800)" transition="all 300ms cubic-bezier(.4,0,.2,1)" height="100%" hoverStyle={{ borderColor: "var(--border-strong)" }}>
                  <CardHeader>
                    <CardTitle display="flex" alignItems="center" gap={8} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">
                      <Github size={20} />
                      GitHub
                      <Box render="span" display="inline-flex" alignItems="center" marginLeft="auto" opacity={0} $group-hover={{ opacity: 1 }}><ExternalLink size={16} color="var(--foreground)" /></Box>
                    </CardTitle>
                    <CardDescription>
                      Source code, issues, and contributions
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Anchor>

              {product.docs && (
                <Anchor minHeight={44} 
                  href={product.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  group
                >
                  <Card backgroundColor="var(--surface-card-emphasis)" borderColor="var(--neutral-800)" transition="all 300ms cubic-bezier(.4,0,.2,1)" height="100%" hoverStyle={{ borderColor: "var(--border-strong)" }}>
                    <CardHeader>
                      <CardTitle display="flex" alignItems="center" gap={8} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">
                        <BookOpen size={20} />
                        Documentation
                        <Box render="span" display="inline-flex" alignItems="center" marginLeft="auto" opacity={0} $group-hover={{ opacity: 1 }}><ExternalLink size={16} color="var(--foreground)" /></Box>
                      </CardTitle>
                      <CardDescription>
                        Guides, API reference, and examples
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Anchor>
              )}

              <Link minHeight={44} to="/pricing" group>
                <Card backgroundColor="var(--surface-card-emphasis)" borderColor="var(--neutral-800)" transition="all 300ms cubic-bezier(.4,0,.2,1)" height="100%" hoverStyle={{ borderColor: "var(--border-strong)" }}>
                  <CardHeader>
                    <CardTitle display="flex" alignItems="center" gap={8} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">
                      <Sparkles size={20} />
                      Pricing
                      <Box render="span" display="inline-flex" alignItems="center" marginLeft="auto" opacity={0} $group-hover={{ opacity: 1 }}><ArrowRight size={16} color="var(--foreground)" /></Box>
                    </CardTitle>
                    <CardDescription>
                      {product.pricing === 'free' ? 'Completely free to use' : 'Free tier available, scale as you grow'}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </Grid>
          </MotionBox>
        </Box>
      </Box>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <Box render="section" paddingVertical={64} paddingHorizontal={16} borderTopWidth={1} borderColor="rgb(255 255 255 / 0.1)" backgroundImage="linear-gradient(to top, rgb(255 255 255 / 0.08), transparent)">
          <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={40}>
                <div>
                  <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={8} $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>Related Products</H2>
                  <Paragraph color="var(--neutral-500)">More from Hanzo {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</Paragraph>
                </div>
                <Link minHeight={44} 
                  to={`/products/${product.category}`}
                  group color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" display="flex" gap={4} hoverStyle={{ color: "rgb(255 255 255 / 0.8)" }}
                >
                  View all
                  <Box render="span" display="inline-flex" alignItems="center" $group-hover={{ x: 4 }}><ArrowRight size={16} /></Box>
                </Link>
              </XStack>

              <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
                {relatedProducts.map((relatedProduct, index) => (
                  <RelatedProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
                ))}
              </Grid>
            </MotionBox>
          </Box>
        </Box>
      )}

      {/* Upstream Attribution Section (for forked OSS projects) */}
      {upstreamProject && (
        <UpstreamAttribution
          upstream={upstreamProject}
          productName={product.name}
        />
      )}

      {/* CTA Section */}
      <Box render="section" paddingVertical={96} paddingHorizontal={16} borderTopWidth={1} borderColor="rgb(255 255 255 / 0.1)" position="relative" overflow="hidden">
        {/* Background gradient */}
        <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to top, rgb(255 255 255 / 0.05), transparent)" />

        <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center" position="relative" zIndex={10}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Ready to get started with{" "}
              <Text color="var(--foreground)">{product.shortName}</Text>?
            </H2>
            <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" marginBottom={40} maxWidth="42rem" marginHorizontal="auto">
              Deploy in minutes with Hanzo Cloud or self-host with our open-source release.
              {product.pricing === 'free' && " It's completely free."}
            </Paragraph>
            <YStack display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}>
              <Button
                size="lg"
                backgroundColor="var(--neutral-800)" color="var(--foreground)" borderWidth={0} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32} hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }}
                asChild
              >
                <Link minHeight={44} to="/pricing">
                  Start Free
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="rgb(255 255 255 / 0.2)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32} hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.05)", borderColor: "var(--border-strong)" }}
                asChild
              >
                <Link tap to="/contact">
                  Contact Sales
                </Link>
              </Button>
            </YStack>
          </MotionBox>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPageTemplate;
