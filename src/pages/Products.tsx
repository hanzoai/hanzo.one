import { Box, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Grid, H1, H2, H3, Link, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Database,
  Cpu,
  Clock,
  Brain,
  Activity,
  Layers,
  LayoutGrid,
  Terminal,
  Copy,
  Check,
  ExternalLink,
  Zap,
  Key,
  Search,
  HardDrive,
  FileJson,
  BarChart3,
  Boxes,
  Sparkles,
  Shield,
  ListTodo,
  ListOrdered,
  Radio,
  BookOpen,
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
  UserCheck,
  KeyRound,
  Network,
  Globe,
  BarChart,
  ShoppingCart,
  MessageSquare,
  Workflow,
  LayoutDashboard,
  Cloud,
  Bot,
  Monitor,
  Image,
  Music,
  Video,
  TrendingUp,
  Headphones
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories, allProducts, getProductsByCategory, ProductCategory } from "@/data/product-taxonomy";

const iconMap: Record<string, React.ComponentType<{  }>> = {
  Database,
  Cpu,
  Clock,
  Brain,
  Activity,
  Layers,
  LayoutGrid,
  Zap,
  Key,
  Search,
  HardDrive,
  FileJson,
  BarChart3,
  Boxes,
  Sparkles,
  Shield,
  ListTodo,
  ListOrdered,
  Radio,
  BookOpen,
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
  UserCheck,
  KeyRound,
  Network,
  Globe,
  BarChart,
  ShoppingCart,
  MessageSquare,
  Workflow,
  LayoutDashboard,
  Cloud,
  Bot,
  Monitor,
  Image,
  Music,
  Video,
  TrendingUp,
  Headphones,
  HeadphonesIcon: Headphones
};

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

export default function Products() {
  return (
    <Box minHeight="100vh" backgroundColor="var(--pure-black)" color="var(--foreground)">
      <Navbar />

      {/* Hero Section */}
      <Box render="section" position="relative" paddingTop={128} paddingBottom={80} paddingHorizontal={16} overflow="hidden">
        <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))" />
        <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="radial-gradient(circle at center,rgba(255,255,255,0.03) 0%,transparent 70%)" />

        <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            textAlign="center"
          >
            <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
              The Complete AI Infrastructure
            </H1>

            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-400)" marginBottom={24} $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>
              The complete stack for AI-native applications.
            </Paragraph>

            <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-500)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={40}>
              From databases to ML pipelines, serverless compute to observability.
              Everything you need to build, deploy, and scale AI applications.
            </Paragraph>

            {/* Quick Install */}
            <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-2xl)" padding={24} maxWidth="42rem" marginHorizontal="auto" marginBottom={40} borderWidth={1} borderColor="var(--neutral-800)">
              <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginBottom={12}>Get started in seconds</Paragraph>
              <XStack display="flex" alignItems="center" justifyContent="space-between" backgroundColor="var(--pure-black)" borderRadius="var(--radius-xl)" padding={16} fontFamily="var(--font-mono)">
                <Text render="code" color="var(--foreground)">curl -fsSL hanzo.sh/install.sh | sh</Text>
                <CopyButton text="curl -fsSL hanzo.sh/install.sh | sh" />
              </XStack>
            </Box>

            <YStack display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}>
              <Button
                size="lg"
                backgroundColor="var(--neutral-800)" color="var(--foreground)" hoverStyle={{ backgroundColor: "#e03333" }}
                asChild
              >
                <Link to="/pricing">
                  Start Free
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="var(--neutral-700)" hoverStyle={{ backgroundColor: "var(--neutral-900)", borderColor: "var(--neutral-600)" }}
                asChild
              >
                <a href="https://docs.hanzo.ai" target="_blank" rel="noopener noreferrer">
                  Documentation
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ExternalLink size={16} /></Box>
                </a>
              </Button>
            </YStack>
          </MotionBox>
        </Box>
      </Box>

      {/* Partners */}
      <Box render="section" paddingVertical={48} paddingHorizontal={16} borderTopWidth={1} borderColor="rgb(255 255 255 / 0.05)">
        <Box maxWidth="var(--container-wide)" marginHorizontal="auto" textAlign="center">
          <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" textTransform="uppercase" letterSpacing="var(--tracking-widest)" color="var(--neutral-500)" marginBottom={24}>
            Trusted by teams at
          </Paragraph>
          <XStack display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" columnGap={40} rowGap={16} opacity={0.5}>
            <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)">Techstars '17</Text>
            <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)">NVIDIA</Text>
            <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)">Google Cloud</Text>
            <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)">Nebius</Text>
            <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)">DigitalOcean</Text>
          </XStack>
        </Box>
      </Box>

      {/* Categories Grid */}
      <Box render="section" paddingVertical={80} paddingHorizontal={16}>
        <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {categories.map((category, index) => {
              const IconComponent = iconMap[category.icon] || Database;
              const productCount = allProducts.filter(p => p.category === category.id).length;

              return (
                <MotionBox
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link to={category.href}>
                    <Card group backgroundColor="var(--surface-card-emphasis)" borderColor="var(--neutral-800)" transition="all 300ms cubic-bezier(.4,0,.2,1)" height="100%" cursor="pointer" hoverStyle={{ borderColor: "var(--neutral-600)", backgroundColor: "var(--surface-card-emphasis)" }}>
                      <CardHeader>
                        <XStack display="flex" alignItems="flex-start" justifyContent="space-between">
                          <Box padding={12} borderRadius="var(--radius-xl)" backgroundColor="rgb(255 255 255 / 0.05)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ borderColor: "rgb(255 255 255 / 0.2)" }}>
                            <IconComponent height={24} width={24} color="var(--foreground)" />
                          </Box>
                          <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">
                            {productCount} products
                          </Text>
                        </XStack>
                        <CardTitle fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" marginTop={16} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" display="flex" alignItems="center" gap={8} $group-hover={{ color: "var(--foreground)" }}>
                          {category.name}
                          <Box render="span" display="inline-flex" alignItems="center" opacity={0} $group-hover={{ opacity: 1 }}><ArrowRight size={20} /></Box>
                        </CardTitle>
                        <CardDescription color="var(--neutral-400)">
                          {category.tagline}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">
                          {category.description}
                        </Paragraph>
                      </CardContent>
                    </Card>
                  </Link>
                </MotionBox>
              );
            })}
          </Grid>
        </Box>
      </Box>

      {/* All Products by Category */}
      {categories.map((category) => {
        const products = getProductsByCategory(category.id as ProductCategory);
        const CategoryIcon = iconMap[category.icon] || Database;

        return (
          <Box key={category.id} render="section" paddingVertical={64} paddingHorizontal={16} borderTopWidth={1} borderColor="rgb(255 255 255 / 0.05)">
            <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
              <XStack display="flex" alignItems="center" gap={12} marginBottom={32}>
                <Box padding={8} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.05)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)">
                  <CategoryIcon height={20} width={20} color="var(--foreground)" />
                </Box>
                <div>
                  <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700">{category.name}</H2>
                  <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">{category.tagline}</Paragraph>
                </div>
              </XStack>

              <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }} $xl={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
                {products.map((product, idx) => {
                  const ProductIcon = iconMap[product.icon] || Database;
                  return (
                    <MotionBox
                      key={product.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: idx * 0.03 }}
                    >
                      <Link to={product.href}>
                        <Box group padding={16} borderRadius="var(--radius-xl)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" height="100%" hoverStyle={{ borderColor: "var(--neutral-600)", backgroundColor: "var(--surface-card-emphasis)" }}>
                          <XStack display="flex" alignItems="flex-start" gap={12}>
                            <Box padding={8} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.05)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ borderColor: "rgb(255 255 255 / 0.2)" }}>
                              <ProductIcon height={16} width={16} color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }} />
                            </Box>
                            <Box flex={1} minWidth={0}>
                              <XStack display="flex" alignItems="center" gap={8}>
                                <H3 fontWeight="500" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" $group-hover={{ color: "var(--foreground)" }}>
                                  {product.shortName}
                                </H3>
                                {product.status === 'beta' && (
                                  <Text fontSize="10px" paddingHorizontal={6} paddingVertical={2} borderRadius="var(--radius)" backgroundColor="rgb(255 255 255 / 0.2)" color="var(--foreground)">beta</Text>
                                )}
                                {product.status === 'coming' && (
                                  <Text fontSize="10px" paddingHorizontal={6} paddingVertical={2} borderRadius="var(--radius)" backgroundColor="rgb(255 255 255 / 0.2)" color="var(--neutral-400)">soon</Text>
                                )}
                              </XStack>
                              <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginTop={4} WebkitLineClamp={2} display="-webkit-box" WebkitBoxOrient="vertical" overflow="hidden">
                                {product.tagline}
                              </Paragraph>
                            </Box>
                          </XStack>
                        </Box>
                      </Link>
                    </MotionBox>
                  );
                })}
              </Grid>
            </Box>
          </Box>
        );
      })}

      {/* Zen Section */}
      <Box render="section" paddingVertical={80} paddingHorizontal={16} borderTopWidth={1} borderColor="rgb(255 255 255 / 0.1)" backgroundColor="var(--surface-card-emphasis)">
        <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center">
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Built on Zen
          </H2>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" marginBottom={32}>
            Our flagship MoDE architecture LLM powers intelligent features across all Hanzo products.
            Context-aware, efficient, and designed for developers.
          </Paragraph>
          <Button
            variant="outline"
            borderColor="rgb(255 255 255 / 0.2)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.05)" }}
            asChild
          >
            <Link to="/zen">
              Learn about Zen
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
            </Link>
          </Button>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box render="section" paddingVertical={96} paddingHorizontal={16} borderTopWidth={1} borderColor="rgb(255 255 255 / 0.1)">
        <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center">
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Ready to build?
          </H2>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" marginBottom={40}>
            Free tier for all products. No credit card required. Scale as you grow.
          </Paragraph>
          <YStack display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}>
            <Button
              size="lg"
              backgroundColor="var(--neutral-800)" color="var(--foreground)" hoverStyle={{ backgroundColor: "#e03333" }}
              asChild
            >
              <Link to="/pricing">
                Start Building
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              borderColor="var(--neutral-700)" hoverStyle={{ backgroundColor: "var(--neutral-900)", borderColor: "var(--neutral-600)" }}
              asChild
            >
              <Link tap to="/contact">
                Talk to Sales
              </Link>
            </Button>
          </YStack>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
