import { Badge, Box, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Grid, H1, H2, Link, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'
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
  ExternalLink,
  Globe,
  Bot,
  Monitor,
  Image,
  Music,
  Video
} from "lucide-react";
import type { Product, CategoryInfo } from "@/data/product-taxonomy";

// Icon mapping
const iconMap: Record<string, React.ComponentType<{  }>> = {
  Database, Cpu, Clock, Brain, Activity, Layers, LayoutGrid, Key, Search,
  HardDrive, FileJson, BarChart3, Boxes, Shield, ListTodo, ListOrdered,
  Radio, BookOpen, GitBranch, Dumbbell, SlidersHorizontal, Rocket, Archive,
  CheckCircle, LineChart, ScrollText, Route, PieChart, Network, UserCheck,
  KeyRound, ShoppingCart, MessageSquare, Workflow, LayoutDashboard, Cloud,
  Zap, Sparkles, Globe, Bot, Monitor, Image, Music, Video
};

interface CategoryPageTemplateProps {
  category: CategoryInfo;
  products: Product[];
  subcategories?: string[];
}

const StatusBadge = ({ status }: { status: Product['status'] }) => {
  const variants = {
    ga: { label: 'GA', color: 'var(--foreground)', borderColor: 'var(--border-strong)' },
    beta: { label: 'Beta', color: 'var(--neutral-300)', borderColor: 'var(--border)' },
    alpha: { label: 'Alpha', color: 'var(--neutral-400)', borderColor: 'var(--border)' },
    coming: { label: 'Coming Soon', color: 'var(--neutral-500)', borderColor: 'var(--border-hairline)' }
  };
  const { label, ...tone } = variants[status];
  return (
    <Badge variant="outline" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" {...tone}>
      {label}
    </Badge>
  );
};

export const CategoryPageTemplate: React.FC<CategoryPageTemplateProps> = ({
  category,
  products,
  subcategories
}) => {
  const CategoryIcon = iconMap[category.icon] || Database;

  // Group products by subcategory if applicable
  const groupedProducts = subcategories
    ? subcategories.reduce((acc, sub) => {
        acc[sub] = products.filter(p => p.subcategory === sub);
        return acc;
      }, {} as Record<string, Product[]>)
    : { all: products };

  return (
    <Box minHeight="100vh" backgroundColor="var(--pure-black)" color="var(--foreground)">
      {/* Hero Section */}
      <Box render="section" position="relative" paddingVertical={96} paddingHorizontal={16} overflow="hidden">
        <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))" />
        <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="radial-gradient(circle at center,rgba(255,255,255,0.03) 0%,transparent 70%)" />

        <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            textAlign="center"
          >
            <XStack display="flex" alignItems="center" justifyContent="center" gap={12} marginBottom={24}>
              <Box padding={16} borderRadius="var(--radius-2xl)" backgroundColor="rgb(255 255 255 / 0.05)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)">
                <CategoryIcon height={40} width={40} color="var(--foreground)" />
              </Box>
            </XStack>

            <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={16} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
              Hanzo {category.name}
            </H1>

            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-400)" marginBottom={24} $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>
              {category.tagline}
            </Paragraph>

            <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-500)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={40}>
              {category.description}
            </Paragraph>

            <YStack display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}>
              <Button
                size="lg"
                backgroundColor="var(--foreground)" color="var(--pure-black)" hoverStyle={{ backgroundColor: "var(--neutral-200)" }}
                asChild
              >
                <Link to="/pricing">
                  Get Started Free
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="rgb(255 255 255 / 0.2)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.05)" }}
                asChild
              >
                <a href="https://docs.hanzo.ai" target="_blank" rel="noopener noreferrer">
                  View Documentation
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ExternalLink size={16} /></Box>
                </a>
              </Button>
            </YStack>
          </MotionBox>
        </Box>
      </Box>

      {/* Products Grid */}
      <Box render="section" paddingVertical={64} paddingHorizontal={16} borderTopWidth={1} borderColor="rgb(255 255 255 / 0.1)">
        <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
          {subcategories ? (
            // Render grouped by subcategory (for ML products)
            subcategories.map((subcategory, subIndex) => {
              const subProducts = groupedProducts[subcategory] || [];
              if (subProducts.length === 0) return null;

              return (
                <Box key={subcategory} marginBottom={64}>
                  <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={8}>{subcategory}</H2>
                  <Paragraph color="var(--neutral-500)" marginBottom={32}>
                    {getSubcategoryDescription(subcategory)}
                  </Paragraph>

                  <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
                    {subProducts.map((product, index) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        index={subIndex * 10 + index}
                      />
                    ))}
                  </Grid>
                </Box>
              );
            })
          ) : (
            // Render flat grid
            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </Grid>
          )}
        </Box>
      </Box>

      {/* Quick Start Section */}
      <Box render="section" paddingVertical={64} paddingHorizontal={16} borderTopWidth={1} borderColor="rgb(255 255 255 / 0.1)" backgroundColor="var(--surface-card-emphasis)">
        <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center">
          <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={24}>Quick Start</H2>
          <Paragraph color="var(--neutral-400)" marginBottom={32}>
            Install the Hanzo CLI to get started with any {category.name} product
          </Paragraph>

          <Box backgroundColor="var(--pure-black)" borderRadius="var(--radius-xl)" padding={24} maxWidth="42rem" marginHorizontal="auto">
            <XStack display="flex" alignItems="center" justifyContent="space-between" fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
              <Text render="code" color="var(--foreground)">curl -fsSL hanzo.sh/install.sh | sh</Text>
              <Button variant="ghost" size="sm" color="var(--neutral-400)" hoverStyle={{ color: "var(--foreground)" }}>
                Copy
              </Button>
            </XStack>
          </Box>

          <Paragraph color="var(--neutral-500)" marginTop={24} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
            Then run <Text render="code" backgroundColor="var(--neutral-800)" paddingHorizontal={8} paddingVertical={4} borderRadius="var(--radius)">hanzo --help</Text> to see available commands
          </Paragraph>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box render="section" paddingVertical={96} paddingHorizontal={16} borderTopWidth={1} borderColor="rgb(255 255 255 / 0.1)">
        <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center">
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Build with Hanzo {category.name}
          </H2>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" marginBottom={40}>
            Open source, self-hostable, and available on Hanzo Cloud.
          </Paragraph>
          <YStack display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}>
            <Button
              size="lg"
              backgroundColor="var(--foreground)" color="var(--pure-black)" hoverStyle={{ backgroundColor: "var(--neutral-200)" }}
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
              borderColor="rgb(255 255 255 / 0.2)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.05)" }}
              asChild
            >
              <Link tap to="/contact">
                Talk to Sales
              </Link>
            </Button>
          </YStack>
        </Box>
      </Box>
    </Box>
  );
};

// Product Card Component
const ProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => {
  const IconComponent = iconMap[product.icon] || Database;

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link to={product.href}>
        <Card group backgroundColor="var(--surface-card-emphasis)" borderColor="var(--neutral-800)" transition="all 300ms cubic-bezier(.4,0,.2,1)" height="100%" cursor="pointer" hoverStyle={{ borderColor: "var(--neutral-600)", backgroundColor: "var(--surface-card-emphasis)" }}>
          <CardHeader>
            <XStack display="flex" alignItems="flex-start" justifyContent="space-between">
              <Box padding={8} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.05)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ borderColor: "rgb(255 255 255 / 0.2)" }}>
                <IconComponent height={20} width={20} color="var(--foreground)" />
              </Box>
              <StatusBadge status={product.status} />
            </XStack>
            <CardTitle fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" marginTop={16} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" display="flex" alignItems="center" gap={8} $group-hover={{ color: "var(--foreground)" }}>
              {product.shortName}
              <Box render="span" display="inline-flex" alignItems="center" opacity={0} $group-hover={{ opacity: 1 }}><ArrowRight size={16} /></Box>
            </CardTitle>
            <CardDescription color="var(--neutral-400)">
              {product.tagline}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)" WebkitLineClamp={2} display="-webkit-box" WebkitBoxOrient="vertical" overflow="hidden">
              {product.description}
            </Paragraph>

            <XStack display="flex" flexWrap="wrap" gap={8} marginTop={16}>
              {product.features.slice(0, 3).map((feature) => (
                <Badge
                  key={feature}
                  variant="outline"
                  backgroundColor="var(--surface-card-emphasis)" borderColor="var(--neutral-700)" color="var(--neutral-400)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)"
                >
                  {feature}
                </Badge>
              ))}
            </XStack>
          </CardContent>
        </Card>
      </Link>
    </MotionBox>
  );
};

// Helper function for ML subcategory descriptions
function getSubcategoryDescription(subcategory: string): string {
  const descriptions: Record<string, string> = {
    'Models': 'Foundation models for language, vision, audio, video, and 3D generation',
    'Develop': 'Interactive environments for experimentation and iteration',
    'Orchestrate': 'Reproducible pipelines and artifact management',
    'Train': 'Distributed training and job management',
    'Tune': 'Hyperparameter search and AutoML',
    'Serve': 'Production inference and rollout',
    'Manage': 'Model governance and lifecycle metadata',
    'Features': 'Online and offline feature serving',
    'Evaluate': 'Quality assessment and drift detection'
  };
  return descriptions[subcategory] || '';
}

export default CategoryPageTemplate;
