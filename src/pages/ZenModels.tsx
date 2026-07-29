import { Anchor, Box as GuiBox, Grid, H2, H3, Helmet, Link, MotionBox, MotionText, Paragraph, Text, XStack } from '@/gui'
import React, { useState } from "react";

/** Statuses that read as shipped — the only tonal distinction the badge makes. */
const READY = new Set(["Released", "Latest", "Trained"]);
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  Code2,
  Eye,
  Box,
  Video,
  Music,
  Zap,
  ExternalLink,
  Check,
  Github,
  ChevronDown,
  Brain,
  Layers,
  Database,
  Shield,
  Globe,
  BookOpen,
  Terminal,
  Download,
} from "lucide-react";

// Zen Coder lineup from zenlm.org
const ZEN_CODER_MODELS = [
  {
    name: "Zen Coder 4B",
    size: "4B",
    base: "Qwen3-4B-Instruct",
    vram: "8 GB",
    context: "32K",
    status: "Trained",
  },
  {
    name: "Zen Coder 24B",
    size: "24B",
    base: "Devstral Small 2",
    vram: "24 GB",
    context: "256K",
    status: "Trained",
    flagship: true,
  },
  {
    name: "Zen Coder 123B",
    size: "123B",
    base: "Devstral 2",
    vram: "128 GB",
    context: "256K",
    status: "Training",
  },
  {
    name: "Zen Coder Max",
    size: "358B",
    base: "GLM-4.7 (MoE)",
    vram: "180 GB",
    context: "200K",
    status: "Planned",
    frontier: true,
  },
  {
    name: "Zen Coder Ultra",
    size: "1T",
    base: "Kimi K2 (MoE)",
    vram: "256 GB",
    context: "128K",
    status: "Planned",
  },
];

// Dataset stats from zenlm.org
const DATASET_STATS = [
  { value: "8.47B", label: "Tokens", description: "Total training tokens across all data sources" },
  { value: "3.35M", label: "Samples", description: "Training samples with conversation context" },
  { value: "1,452", label: "Repositories", description: "Open source and private codebases" },
  { value: "15yr", label: "History", description: "Years of development history (2010-2025)" },
];

// AI Ecosystem categories from zenlm.org
const ECOSYSTEM_CATEGORIES = [
  {
    icon: Brain,
    title: "Language Models",
    description: "6 core models from 0.6B to 32B. zen-nano for edge, zen-eco for efficiency, zen-omni for multimodal, zen-next for frontier reasoning.",
  },
  {
    icon: Code2,
    title: "Zen Coder",
    description: "5 coding models from 4B to 1T trained on 8.47B tokens of agentic programming data. State-of-the-art on tool use and multi-step coding.",
  },
  {
    icon: Eye,
    title: "Vision & Multimodal",
    description: "zen-vl for vision-language, zen-designer for visual understanding, zen-artist for image generation, zen-omni for unified multimodal.",
  },
  {
    icon: Video,
    title: "Video & 3D",
    description: "zen-director for video generation, zen-video for high-quality synthesis, zen-3d for 3D assets, zen-world for world simulation.",
  },
  {
    icon: Music,
    title: "Audio",
    description: "zen-musician for music generation, zen-foley for sound effects, zen-scribe for transcription, zen-dub for voice dubbing.",
  },
  {
    icon: Shield,
    title: "Specialized",
    description: "zen-guard for safety, zen-embedding for vectors, zen-reranker for search, zen-translator for translation, zen-agent for tool use.",
  },
];

// Model families with full details
const MODEL_FAMILIES = {
  coder: {
    title: "Zen Coder",
    description: "Agentic coding models trained on 8.47B tokens of real programming sessions",
    icon: Code2,
    models: [
      {
        name: "Zen Coder 4B",
        params: "4B",
        context: "32K tokens",
        vram: "8 GB",
        license: "Apache 2.0",
        base: "Qwen3-4B-Instruct",
        features: [
          "Edge deployment",
          "Real agentic debug sessions",
          "Multi-file refactoring",
          "Tool use patterns",
        ],
        status: "Trained",
        huggingface: "https://huggingface.co/zenlm/zen-coder",
      },
      {
        name: "Zen Coder 24B",
        badge: "FLAGSHIP",
        params: "24B",
        context: "256K tokens",
        vram: "24 GB",
        license: "Apache 2.0",
        base: "Devstral Small 2",
        features: [
          "Production-ready agentic coding",
          "Long context understanding",
          "Real debugging workflows",
          "Professional development patterns",
        ],
        status: "Trained",
        huggingface: "https://huggingface.co/zenlm/zen-coder-24b",
      },
      {
        name: "Zen Coder 123B",
        params: "123B",
        context: "256K tokens",
        vram: "128 GB",
        license: "Apache 2.0",
        base: "Devstral 2",
        features: [
          "Large-scale agentic tasks",
          "Complex multi-step coding",
          "Advanced tool orchestration",
          "Enterprise-grade performance",
        ],
        status: "Training",
        huggingface: "https://huggingface.co/zenlm/zen-coder-123b",
      },
      {
        name: "Zen Coder Max",
        badge: "FRONTIER",
        params: "358B MoE",
        context: "200K tokens",
        vram: "180 GB",
        license: "Apache 2.0",
        base: "GLM-4.7 (MoE)",
        features: [
          "Frontier agentic capability",
          "MoE efficiency",
          "State-of-the-art SWE-bench",
          "Tool calling with glm47 parser",
        ],
        status: "Planned",
        huggingface: "https://huggingface.co/zenlm/zen-coder-max",
      },
      {
        name: "Zen Coder Ultra",
        badge: "1T",
        params: "1T MoE",
        context: "128K tokens",
        vram: "256 GB",
        license: "Apache 2.0",
        base: "Kimi K2 (MoE)",
        features: [
          "Trillion parameter scale",
          "Ultimate agentic reasoning",
          "200-300 sequential tool calls",
          "Heavy mode (8 trajectories)",
        ],
        status: "Planned",
        huggingface: "https://huggingface.co/zenlm/zen-coder-ultra",
      },
    ],
  },
  language: {
    title: "Language Models",
    description: "Efficient general-purpose language understanding",
    icon: Brain,
    models: [
      {
        name: "zen-nano",
        params: "0.6B",
        context: "40K tokens",
        license: "Apache 2.0",
        base: "Qwen3-0.6B",
        performance: "44K tokens/sec (M3 Max)",
        memory: "0.4-1.2GB",
        features: [
          "Edge deployment",
          "Mobile devices",
          "Embedded systems",
          "On-device AI",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-nano-0.6b",
      },
      {
        name: "zen-eco",
        params: "4B",
        context: "32K tokens",
        license: "Apache 2.0",
        base: "Qwen3-3B",
        performance: "28K tokens/sec (RTX 4090)",
        memory: "2-8GB",
        features: [
          "General-purpose",
          "Instruction following",
          "Thinking variants",
          "Agent variants",
        ],
        status: "In Development",
        huggingface: "https://huggingface.co/zenlm/zen-eco-4b-instruct",
      },
      {
        name: "zen-agent",
        params: "4B",
        context: "32K tokens",
        license: "Apache 2.0",
        base: "Qwen3-3B",
        features: [
          "Tool calling",
          "MCP support",
          "Agentic workflows",
          "Function execution",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-agent-4b",
      },
      {
        name: "zen-omni",
        badge: "MULTIMODAL",
        params: "7B",
        context: "32K tokens",
        license: "Apache 2.0",
        base: "Qwen3-Omni",
        features: [
          "Text + Vision + Audio",
          "Unified multimodal",
          "Cross-modal reasoning",
          "Speech interaction",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-omni",
      },
    ],
  },
  vision: {
    title: "Vision-Language Models",
    description: "Advanced visual understanding and multimodal reasoning",
    icon: Eye,
    models: [
      {
        name: "zen-vl-4b-instruct",
        params: "4B",
        context: "32K (256K expandable)",
        license: "Apache 2.0",
        base: "Qwen3-VL-4B",
        features: [
          "Image analysis",
          "OCR (32 languages)",
          "Multimodal reasoning",
          "Zen persona",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-vl-4b-instruct",
      },
      {
        name: "zen-vl-4b-agent",
        params: "4B",
        context: "32K (256K expandable)",
        license: "Apache 2.0",
        features: [
          "Function calling",
          "GUI interaction",
          "Visual agent",
          "Tool use",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-vl-4b-agent",
      },
      {
        name: "zen-vl-8b-instruct",
        params: "8B",
        context: "256K (1M expandable)",
        license: "Apache 2.0",
        base: "Qwen3-VL-8B",
        features: [
          "Video comprehension",
          "Spatial reasoning",
          "STEM/math/code",
          "Comprehensive analysis",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-vl-8b-instruct",
      },
      {
        name: "zen-vl-30b-instruct",
        params: "30B (31B MoE)",
        context: "256K (1M expandable)",
        license: "Apache 2.0",
        base: "Qwen3-VL-30B",
        features: [
          "Comprehensive vision",
          "OCR (32 languages)",
          "STEM reasoning",
          "Video comprehension",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-vl-30b-instruct",
      },
    ],
  },
  generative3d: {
    title: "3D Generation",
    description: "Create 3D assets and worlds from text and images",
    icon: Box,
    models: [
      {
        name: "zen-3d",
        params: "3.3B",
        license: "Apache 2.0",
        features: [
          "Point cloud control",
          "OBJ/GLB/USD/FBX output",
          "~30s per model",
          "10GB memory",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-3d",
      },
      {
        name: "zen-voyager",
        license: "Apache 2.0",
        features: [
          "Image → 3D video",
          "Camera control",
          "RGB + depth output",
          "Point clouds",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-voyager",
      },
      {
        name: "zen-world",
        license: "Apache 2.0",
        features: [
          "City-scale environments",
          "Complete world synthesis",
          "Large-scale generation",
          "24GB+ memory",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-world",
      },
    ],
  },
  video: {
    title: "Video Generation",
    description: "Create videos from text and images",
    icon: Video,
    models: [
      {
        name: "zen-director",
        params: "5B",
        license: "Apache 2.0",
        features: [
          "Text/Image to video",
          "Up to 10s, 24 FPS",
          "1280x720 output",
          "~60s generation",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-director-5b",
      },
      {
        name: "zen-video",
        license: "Apache 2.0",
        features: [
          "High-quality video",
          "Professional synthesis",
          "High-resolution",
          "Variable length",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-video",
      },
      {
        name: "zen-video-i2v",
        license: "Apache 2.0",
        features: [
          "Image to video",
          "Animate static images",
          "~45s generation",
          "5 second output",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-video-i2v",
      },
    ],
  },
  audio: {
    title: "Audio Generation",
    description: "Create music and sound effects",
    icon: Music,
    models: [
      {
        name: "zen-musician",
        params: "7B",
        license: "Apache 2.0",
        features: [
          "Lyrics → full songs",
          "Vocals + accompaniment",
          "5 languages",
          "~360s for 30s audio",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-musician-7b",
      },
      {
        name: "zen-foley",
        license: "Apache 2.0",
        features: [
          "Video → sound effects",
          "Professional foley",
          "48kHz audio",
          "~15s for 10s audio",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-foley",
      },
    ],
  },
};

const ModelCard = ({ model }: { model: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      backgroundColor="var(--neutral-950)" borderWidth={1} borderRadius="var(--radius-xl)" padding={24} borderColor={model.badge === "FLAGSHIP" ? "rgb(255 255 255 / 0.3)" : "var(--neutral-800)"} outlineWidth={model.badge === "FLAGSHIP" ? 1 : undefined} outlineColor={model.badge === "FLAGSHIP" ? "rgb(255 255 255 / 0.1)" : undefined} outlineStyle={model.badge === "FLAGSHIP" ? "solid" : undefined}
    >
      <XStack display="flex" alignItems="flex-start" justifyContent="space-between" marginBottom={16}>
        <div>
          <XStack display="flex" alignItems="center" gap={8} marginBottom={4}>
            <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="700" color="var(--foreground)">{model.name}</H3>
            {model.badge && (
              <Text paddingHorizontal={8} paddingVertical={2} fontSize="10px" fontWeight="700" borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.1)" color="var(--foreground)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)">
                {model.badge}
              </Text>
            )}
          </XStack>
          {model.base && (
            <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">Based on {model.base}</Paragraph>
          )}
        </div>
        <Text
          fontSize="var(--text-xs)"
          lineHeight="var(--leading-xs)"
          paddingHorizontal={8}
          paddingVertical={4}
          borderRadius="var(--radius-full)"
          borderWidth={1}
          backgroundColor={READY.has(model.status) ? "rgb(255 255 255 / 0.1)" : "var(--neutral-900)"}
          borderColor={READY.has(model.status) ? "rgb(255 255 255 / 0.2)" : "var(--border)"}
          color={READY.has(model.status) ? "var(--foreground)" : "var(--neutral-400)"}
        >
          {model.status}
        </Text>
      </XStack>

      <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={16} marginBottom={16}>
        {model.params && (
          <div>
            <Paragraph fontSize="10px" color="var(--neutral-500)" textTransform="uppercase" letterSpacing="0.05em" marginBottom={4}>
              Parameters
            </Paragraph>
            <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)">{model.params}</Paragraph>
          </div>
        )}
        {model.context && (
          <div>
            <Paragraph fontSize="10px" color="var(--neutral-500)" textTransform="uppercase" letterSpacing="0.05em" marginBottom={4}>
              Context
            </Paragraph>
            <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)">{model.context}</Paragraph>
          </div>
        )}
        {model.license && (
          <div>
            <Paragraph fontSize="10px" color="var(--neutral-500)" textTransform="uppercase" letterSpacing="0.05em" marginBottom={4}>
              License
            </Paragraph>
            <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)">{model.license}</Paragraph>
          </div>
        )}
        {model.performance && (
          <div>
            <Paragraph fontSize="10px" color="var(--neutral-500)" textTransform="uppercase" letterSpacing="0.05em" marginBottom={4}>
              Performance
            </Paragraph>
            <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)">{model.performance}</Paragraph>
          </div>
        )}
      </Grid>

      <GuiBox rowGap={8} marginBottom={16}>
        {model.features.slice(0, isExpanded ? undefined : 3).map((feature: string, idx: number) => (
          <XStack key={idx} display="flex" alignItems="center" gap={8}>
            <Check size={12} color="var(--neutral-400)" />
            <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">{feature}</Text>
          </XStack>
        ))}
        {model.features.length > 3 && !isExpanded && (
          <XStack minHeight={44}
            onClick={() => setIsExpanded(true)}
            render="button" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" display="flex" alignItems="center" gap={4} hoverStyle={{ color: "var(--foreground)" }}
          >
            +{model.features.length - 3} more
            <ChevronDown size={12} />
          </XStack>
        )}
      </GuiBox>

      {model.huggingface && (
        <Anchor minHeight={44} 
          href={model.huggingface}
          target="_blank"
          rel="noopener noreferrer"
          display="inline-flex" alignItems="center" gap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
        >
          <span>View on HuggingFace</span>
          <ExternalLink size={12} />
        </Anchor>
      )}
    </MotionBox>
  );
};

const FamilySection = ({
  familyKey,
  family,
}: {
  familyKey: string;
  family: (typeof MODEL_FAMILIES)[keyof typeof MODEL_FAMILIES];
}) => {
  const Icon = family.icon;

  return (
    <GuiBox id={familyKey} render="section" paddingVertical={64} borderTopWidth={1} borderColor="var(--neutral-800)">
      <XStack display="flex" alignItems="center" gap={16} marginBottom={32}>
        <XStack width={48} height={48} borderRadius="var(--radius-xl)" display="flex" alignItems="center" justifyContent="center" backgroundColor="rgb(255 255 255 / 0.05)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)">
          <Icon width={24} height={24} color="var(--foreground)" />
        </XStack>
        <div>
          <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)">{family.title}</H2>
          <Paragraph color="var(--neutral-400)">{family.description}</Paragraph>
        </div>
      </XStack>

      <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
        {family.models.map((model) => (
          <ModelCard key={model.name} model={model} />
        ))}
      </Grid>
    </GuiBox>
  );
};

const BRAND_COLOR = "#8b5cf6"; // Purple for Zen

const ZenModels = () => {
  return (
    <GuiBox minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Helmet>
        <title>Zen LM - Open Foundation Models for Agentic AI | Hanzo AI</title>
        <meta
          name="description"
          content="30+ models from 0.6B to 1T parameters across language, vision, audio, video, and 3D. Production-ready AI models for agentic coding, multimodal understanding, and creative generation."
        />
      </Helmet>
      <Navbar />

      <main>
        {/* Hero Section */}
        <GuiBox render="section" position="relative" paddingTop={96} paddingBottom={64} paddingHorizontal={16} overflow="hidden" $md={{ paddingHorizontal: 32 }} $lg={{ paddingHorizontal: 48 }}>
          {/* Background gradient */}
          <GuiBox position="absolute" top={0} right={0} bottom={0} left={0} overflow="hidden" zIndex={0} pointerEvents="none">
            <GuiBox
              position="absolute" top="50%" left="50%" x="-50%" y="-50%" width="800px" height="800px" borderRadius="var(--radius-full)" opacity={0.15}
              style={{
                background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
                filter: "blur(100px)",
              }}
            />
          </GuiBox>

          <GuiBox maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              marginBottom={24} textAlign="center"
            >
              <Text display="inline-flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" backgroundColor="rgb(255 255 255 / 0.1)" color="var(--foreground)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)">
                <Code2 size={12} />
                30+ Open Models
              </Text>
            </MotionBox>

            <MotionText
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              fontSize="var(--text-3xl)" lineHeight="1.1" fontWeight="500" letterSpacing="var(--tracking-tight)" marginBottom={24} textAlign="center" $sm={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }} $lg={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $xl={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
            >
              <Text color="var(--foreground)">Open Foundation Models</Text>
              <br />
              <Text color="var(--neutral-400)">for Agentic AI</Text>
            </MotionText>

            <MotionText
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              fontSize="var(--text-base)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" marginBottom={32} maxWidth="var(--container-prose)" marginHorizontal="auto" textAlign="center" $lg={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}
            >
              Zen LM provides production-ready AI models for agentic coding, multimodal understanding,
              and creative generation. Our flagship Zen Coder models are trained on 8.47B tokens
              of real programming sessions.
            </MotionText>

            {/* CTAs */}
            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              flexDirection="row" display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" gap={16} marginBottom={32}
            >
              <Anchor minHeight={44} 
                href="#models"
                paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
              >
                Explore Models
                <GuiBox render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></GuiBox>
              </Anchor>
              <Anchor minHeight={44} 
                href="#dataset"
                paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
              >
                <GuiBox render="span" display="inline-flex" alignItems="center" marginRight={8}><Database size={16} /></GuiBox>
                Training Data
              </Anchor>
              <Anchor minHeight={44} 
                href="https://zenlm.org/research"
                target="_blank"
                rel="noopener noreferrer"
                paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
              >
                <GuiBox render="span" display="inline-flex" alignItems="center" marginRight={8}><BookOpen size={16} /></GuiBox>
                Research Papers
              </Anchor>
            </MotionBox>

            {/* Quick links */}
            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              flexDirection="row" display="flex" flexWrap="wrap" justifyContent="center" gap={12}
            >
              <Anchor tap
                href="https://huggingface.co/zenlm"
                target="_blank"
                rel="noopener noreferrer"
                display="inline-flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" color="var(--neutral-400)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)", borderColor: "var(--neutral-700)" }}
              >
                🤗 HuggingFace
              </Anchor>
              <Anchor tap
                href="https://github.com/zenlm"
                target="_blank"
                rel="noopener noreferrer"
                display="inline-flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" color="var(--neutral-400)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)", borderColor: "var(--neutral-700)" }}
              >
                <Github size={16} />
                GitHub
              </Anchor>
              <Anchor tap
                href="https://zenlm.org"
                target="_blank"
                rel="noopener noreferrer"
                display="inline-flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" color="var(--neutral-400)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)", borderColor: "var(--neutral-700)" }}
              >
                <Globe size={16} />
                zenlm.org
              </Anchor>
            </MotionBox>
          </GuiBox>
        </GuiBox>

        {/* Zen Coder Feature Section */}
        <GuiBox id="zen-coder" render="section" paddingVertical={80} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }}>
          <GuiBox maxWidth="var(--container-max)" marginHorizontal="auto" paddingVertical={48} paddingHorizontal={32} borderRadius="var(--radius-2xl)" backgroundColor="var(--neutral-950)" borderWidth={1} borderColor="var(--neutral-800)">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              textAlign="center" marginBottom={40}
            >
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={12} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
                Zen Coder - Agentic Coding Models
              </H2>
              <Paragraph color="var(--neutral-400)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">
                Fine-tuned on 8.47B tokens of real programming sessions
              </Paragraph>
            </MotionBox>

            {/* Models Table */}
            <GuiBox overflowX="auto" marginBottom={40}>
              <GuiBox render="table" display="table" width="100%" borderCollapse="collapse" backgroundColor="var(--pure-black)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" overflow="hidden">
                <thead>
                  <GuiBox render="tr" display="table-row" backgroundColor="var(--surface-overlay)">
                    <GuiBox render="th" display="table-cell" paddingHorizontal={24} paddingVertical={16} textAlign="left" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="600" color="var(--neutral-400)" textTransform="uppercase" letterSpacing="0.05em">Model</GuiBox>
                    <GuiBox render="th" display="table-cell" paddingHorizontal={24} paddingVertical={16} textAlign="left" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="600" color="var(--neutral-400)" textTransform="uppercase" letterSpacing="0.05em">Size</GuiBox>
                    <GuiBox render="th" display="table-cell" paddingHorizontal={24} paddingVertical={16} textAlign="left" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="600" color="var(--neutral-400)" textTransform="uppercase" letterSpacing="0.05em">Base</GuiBox>
                    <GuiBox render="th" display="table-cell" paddingHorizontal={24} paddingVertical={16} textAlign="left" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="600" color="var(--neutral-400)" textTransform="uppercase" letterSpacing="0.05em">VRAM</GuiBox>
                    <GuiBox render="th" display="table-cell" paddingHorizontal={24} paddingVertical={16} textAlign="left" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="600" color="var(--neutral-400)" textTransform="uppercase" letterSpacing="0.05em">Context</GuiBox>
                    <GuiBox render="th" display="table-cell" paddingHorizontal={24} paddingVertical={16} textAlign="left" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="600" color="var(--neutral-400)" textTransform="uppercase" letterSpacing="0.05em">Status</GuiBox>
                  </GuiBox>
                </thead>
                <tbody>
                  {ZEN_CODER_MODELS.map((model) => (
                    <GuiBox
                      key={model.name}
                      render="tr" display="table-row" borderTopWidth={1} borderColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }} backgroundColor={model.flagship ? "rgb(255 255 255 / 0.05)" : undefined}
                    >
                      <GuiBox render="td" display="table-cell" paddingHorizontal={24} paddingVertical={16}>
                        <XStack display="flex" alignItems="center" gap={8}>
                          <Text fontWeight="600" color="var(--foreground)">{model.name}</Text>
                          {model.flagship && (
                            <Text paddingHorizontal={8} paddingVertical={2} fontSize="10px" fontWeight="700" borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.1)" color="var(--foreground)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)">
                              FLAGSHIP
                            </Text>
                          )}
                          {model.frontier && (
                            <Text paddingHorizontal={8} paddingVertical={2} fontSize="10px" fontWeight="700" borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.1)" color="var(--foreground)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)">
                              FRONTIER
                            </Text>
                          )}
                        </XStack>
                      </GuiBox>
                      <GuiBox render="td" display="table-cell" paddingHorizontal={24} paddingVertical={16} color="var(--neutral-300)">{model.size}</GuiBox>
                      <GuiBox render="td" display="table-cell" paddingHorizontal={24} paddingVertical={16} color="var(--neutral-300)">{model.base}</GuiBox>
                      <GuiBox render="td" display="table-cell" paddingHorizontal={24} paddingVertical={16} color="var(--neutral-300)">{model.vram}</GuiBox>
                      <GuiBox render="td" display="table-cell" paddingHorizontal={24} paddingVertical={16} color="var(--neutral-300)">{model.context}</GuiBox>
                      <GuiBox render="td" display="table-cell" paddingHorizontal={24} paddingVertical={16}>
                        <Text
                          display="inline-block"
                          paddingHorizontal={12}
                          paddingVertical={4}
                          fontSize="var(--text-xs)"
                          lineHeight="var(--leading-xs)"
                          fontWeight="600"
                          textTransform="uppercase"
                          borderRadius="var(--radius-full)"
                          borderWidth={1}
                          backgroundColor={READY.has(model.status) ? "rgb(255 255 255 / 0.1)" : "var(--neutral-900)"}
                          borderColor={READY.has(model.status) ? "rgb(255 255 255 / 0.2)" : "var(--border)"}
                          color={READY.has(model.status) ? "var(--foreground)" : "var(--neutral-400)"}
                          opacity={model.status === "Training" ? 0.75 : 1}
                        >
                          {model.status}
                        </Text>
                      </GuiBox>
                    </GuiBox>
                  ))}
                </tbody>
              </GuiBox>
            </GuiBox>

            {/* Coder Features Grid */}
            <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              <GuiBox padding={24} backgroundColor="var(--pure-black)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-600)" }}>
                <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={8}>Real Agentic Data</H3>
                <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                  Trained on actual agentic debug sessions - not synthetic data. Real debugging workflows,
                  multi-file refactoring, and tool use patterns.
                </Paragraph>
              </GuiBox>
              <GuiBox padding={24} backgroundColor="var(--pure-black)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-600)" }}>
                <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={8}>Production Code</H3>
                <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                  15 years of professional development across AI, Web3, cryptography, and modern software
                  engineering from 1,452 repositories.
                </Paragraph>
              </GuiBox>
              <GuiBox padding={24} backgroundColor="var(--pure-black)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-600)" }}>
                <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={8}>Open Training</H3>
                <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                  Use{" "}
                  <Anchor tap
                    href="https://github.com/zenlm/zen-trainer"
                    target="_blank"
                    rel="noopener noreferrer"
                    textDecorationLine="underline" color="var(--foreground)" hoverStyle={{ color: "var(--neutral-300)" }}
                  >
                    zen-trainer
                  </Anchor>
                  {" "}to fine-tune on your own data. Supports MLX (Apple Silicon), Unsloth, and DeepSpeed.
                </Paragraph>
              </GuiBox>
            </Grid>
          </GuiBox>
        </GuiBox>

        {/* Complete AI Model Ecosystem */}
        <GuiBox id="overview" render="section" paddingVertical={80} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }}>
          <GuiBox maxWidth="var(--container-max)" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              textAlign="center" marginBottom={48}
            >
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={12} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
                Complete AI Model Ecosystem
              </H2>
            </MotionBox>

            <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              {ECOSYSTEM_CATEGORIES.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <MotionBox
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    
                    padding={24} backgroundColor="var(--neutral-950)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" textAlign="center" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)", y: -4 }}
                  >
                    <XStack fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" marginBottom={16} marginHorizontal="auto" width={64} height={64} display="flex" alignItems="center" justifyContent="center" borderRadius="var(--radius-xl)" backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)">
                      <Icon width={32} height={32} color="var(--foreground)" />
                    </XStack>
                    <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={8}>{category.title}</H3>
                    <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{category.description}</Paragraph>
                  </MotionBox>
                );
              })}
            </Grid>
          </GuiBox>
        </GuiBox>

        {/* Dataset Section */}
        <GuiBox id="dataset" render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--surface-card-emphasis)" $md={{ paddingHorizontal: 32 }}>
          <GuiBox maxWidth="var(--container-max)" marginHorizontal="auto" paddingVertical={48} paddingHorizontal={32} borderRadius="var(--radius-2xl)" backgroundColor="var(--neutral-950)" borderWidth={1} borderColor="var(--neutral-800)">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              textAlign="center" marginBottom={40}
            >
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={12} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
                Zen Agentic Dataset
              </H2>
              <Paragraph color="var(--neutral-400)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">
                8.47 Billion Tokens of Real-World Agentic Programming
              </Paragraph>
            </MotionBox>

            <Grid display="grid" gap={24} marginBottom={40} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
              {DATASET_STATS.map((stat, idx) => (
                <MotionBox
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  
                  padding={24} backgroundColor="var(--pure-black)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" textAlign="center" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-600)" }}
                >
                  <GuiBox fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={8}>
                    {stat.value}
                  </GuiBox>
                  <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--neutral-300)" marginBottom={4}>{stat.label}</H3>
                  <Paragraph color="var(--neutral-500)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{stat.description}</Paragraph>
                </MotionBox>
              ))}
            </Grid>

            <GuiBox textAlign="center">
              <Paragraph color="var(--neutral-400)" marginBottom={24}>Available for research and commercial licensing.</Paragraph>
              <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={16}>
                <Anchor tap
                  href="mailto:z@hanzo.ai"
                  display="inline-flex" alignItems="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                  style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                >
                  Request Access
                </Anchor>
                <Anchor tap
                  href="https://huggingface.co/datasets/hanzoai/zen-agentic-dataset"
                  target="_blank"
                  rel="noopener noreferrer"
                  display="inline-flex" alignItems="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
                >
                  View on HuggingFace
                </Anchor>
              </XStack>
            </GuiBox>
          </GuiBox>
        </GuiBox>

        {/* Model Families Section */}
        <GuiBox render="section" paddingVertical={80} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }}>
          <GuiBox maxWidth="var(--container-max)" marginHorizontal="auto">
            {/* Quick Nav */}
            <XStack id="models" marginBottom={48} display="flex" flexWrap="wrap" gap={12} justifyContent="center">
              {Object.entries(MODEL_FAMILIES).map(([key, family]) => {
                const Icon = family.icon;
                return (
                  <Anchor minHeight={44} 
                    key={key}
                    href={`#${key}`}
                    display="inline-flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" borderWidth={1} borderColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" hoverStyle={{ borderColor: "var(--border-strong)", color: "var(--foreground)" }}
                  >
                    <Icon width={16} height={16} />
                    {family.title}
                  </Anchor>
                );
              })}
            </XStack>

            {/* Model Families */}
            {Object.entries(MODEL_FAMILIES).map(([key, family]) => (
              <FamilySection key={key} familyKey={key} family={family} />
            ))}
          </GuiBox>
        </GuiBox>

        {/* Get Started Section */}
        <GuiBox id="downloads" render="section" paddingVertical={80} paddingHorizontal={16} borderTopWidth={1} borderColor="var(--neutral-800)" $md={{ paddingHorizontal: 32 }}>
          <GuiBox maxWidth="var(--container-max)" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              textAlign="center" marginBottom={48}
            >
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={12} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
                Get Started
              </H2>
            </MotionBox>

            <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                padding={24} backgroundColor="var(--neutral-950)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" textAlign="center" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)", y: -4 }}
              >
                <GuiBox render="span" display="inline-flex" alignItems="center" marginHorizontal="auto" marginBottom={16}><Download size={32} color="var(--foreground)" /></GuiBox>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--foreground)" marginBottom={8}>HuggingFace</H3>
                <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={16}>Access all 30+ models via HuggingFace Hub</Paragraph>
                <Anchor tap
                  href="https://huggingface.co/zenlm"
                  target="_blank"
                  rel="noopener noreferrer"
                  display="inline-flex" alignItems="center" paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                  style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                >
                  Visit HuggingFace
                </Anchor>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                padding={24} backgroundColor="var(--neutral-950)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" textAlign="center" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)", y: -4 }}
              >
                <GuiBox render="span" display="inline-flex" alignItems="center" marginHorizontal="auto" marginBottom={16}><Github size={32} color="var(--foreground)" /></GuiBox>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--foreground)" marginBottom={8}>GitHub</H3>
                <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={16}>Training code, documentation, and source</Paragraph>
                <Anchor tap
                  href="https://github.com/zenlm"
                  target="_blank"
                  rel="noopener noreferrer"
                  display="inline-flex" alignItems="center" paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                  style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                >
                  View on GitHub
                </Anchor>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                padding={24} backgroundColor="var(--neutral-950)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" textAlign="center" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)", y: -4 }}
              >
                <GuiBox render="span" display="inline-flex" alignItems="center" marginHorizontal="auto" marginBottom={16}><Terminal size={32} color="var(--foreground)" /></GuiBox>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--foreground)" marginBottom={8}>zen-trainer</H3>
                <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={16}>Fine-tune models on your own data</Paragraph>
                <GuiBox backgroundColor="var(--pure-black)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={12}>
                  <Text render="code" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)">pip install zen-trainer</Text>
                </GuiBox>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                padding={24} backgroundColor="var(--neutral-950)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" textAlign="center" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)", y: -4 }}
              >
                <GuiBox render="span" display="inline-flex" alignItems="center" marginHorizontal="auto" marginBottom={16}><BookOpen size={32} color="var(--foreground)" /></GuiBox>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--foreground)" marginBottom={8}>Research</H3>
                <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={16}>Technical papers and whitepapers</Paragraph>
                <Anchor tap
                  href="https://zenlm.org/research"
                  target="_blank"
                  rel="noopener noreferrer"
                  display="inline-flex" alignItems="center" paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                  style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                >
                  Read Papers
                </Anchor>
              </MotionBox>
            </Grid>
          </GuiBox>
        </GuiBox>

        {/* Infrastructure Section */}
        <GuiBox render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--surface-card-emphasis)" borderTopWidth={1} borderColor="var(--neutral-800)" $md={{ paddingHorizontal: 32 }}>
          <GuiBox maxWidth="var(--container-max)" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              textAlign="center" marginBottom={48}
            >
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={12} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
                Infrastructure
              </H2>
              <Paragraph color="var(--neutral-400)">
                Train and deploy Zen models with our optimized platforms
              </Paragraph>
            </MotionBox>

            <Grid display="grid" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                backgroundColor="var(--pure-black)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
              >
                <XStack display="flex" alignItems="center" gap={12} marginBottom={16}>
                  <Layers size={24} color="var(--foreground)" />
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" color="var(--foreground)">Zen Gym</H3>
                </XStack>
                <Paragraph color="var(--neutral-400)" marginBottom={16}>
                  Unified training platform for all Zen models with 2-5x
                  speedup.
                </Paragraph>
                <GuiBox rowGap={8} marginBottom={24}>
                  {[
                    "LoRA, QLoRA, GRPO, GSPO, DPO, PPO",
                    "Unsloth acceleration",
                    "FlashAttention-2",
                    "Liger Kernel optimization",
                  ].map((feature, idx) => (
                    <XStack key={idx} display="flex" alignItems="center" gap={8}>
                      <Check size={12} color="var(--foreground)" />
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">{feature}</Text>
                    </XStack>
                  ))}
                </GuiBox>
                <Anchor tap
                  href="https://github.com/zenlm/zen-gym"
                  target="_blank"
                  rel="noopener noreferrer"
                  display="inline-flex" alignItems="center" gap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
                >
                  View on GitHub
                  <ExternalLink size={12} />
                </Anchor>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                backgroundColor="var(--pure-black)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
              >
                <XStack display="flex" alignItems="center" gap={12} marginBottom={16}>
                  <Zap size={24} color="var(--foreground)" />
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" color="var(--foreground)">Zen Engine</H3>
                </XStack>
                <Paragraph color="var(--neutral-400)" marginBottom={16}>
                  High-performance inference for all Zen models with
                  OpenAI-compatible API.
                </Paragraph>
                <GuiBox rowGap={8} marginBottom={24}>
                  {[
                    "44K tokens/sec (M3 Max)",
                    "OpenAI-compatible REST API",
                    "PyTorch, MLX, GGUF formats",
                    "MCP integration",
                  ].map((feature, idx) => (
                    <XStack key={idx} display="flex" alignItems="center" gap={8}>
                      <Check size={12} color="var(--foreground)" />
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">{feature}</Text>
                    </XStack>
                  ))}
                </GuiBox>
                <Anchor tap
                  href="https://github.com/zenlm/zen-engine"
                  target="_blank"
                  rel="noopener noreferrer"
                  display="inline-flex" alignItems="center" gap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
                >
                  View on GitHub
                  <ExternalLink size={12} />
                </Anchor>
              </MotionBox>
            </Grid>
          </GuiBox>
        </GuiBox>

        {/* CTA Section */}
        <GuiBox render="section" paddingVertical={80} paddingHorizontal={16} borderTopWidth={1} borderColor="var(--neutral-800)" $md={{ paddingHorizontal: 32 }}>
          <GuiBox maxWidth="var(--container-max)" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              textAlign="center"
            >
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16}>
                Ready to build with Zen?
              </H2>
              <Paragraph color="var(--neutral-400)" marginBottom={32} maxWidth="42rem" marginHorizontal="auto">
                All models are open source under Apache 2.0 or MIT license. Start
                building today.
              </Paragraph>
              <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={16}>
                <Anchor minHeight={44} 
                  href="https://huggingface.co/zenlm"
                  target="_blank"
                  rel="noopener noreferrer"
                  paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                  style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                >
                  Get Started
                  <GuiBox render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></GuiBox>
                </Anchor>
                <Link tap
                  to="/dev"
                  display="inline-flex" alignItems="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
                >
                  Try Hanzo Dev
                </Link>
                <Anchor minHeight={44} 
                  href="https://zenlm.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
                >
                  <GuiBox render="span" display="inline-flex" alignItems="center" marginRight={8}><Globe size={16} /></GuiBox>
                  Visit zenlm.org
                </Anchor>
              </XStack>
            </MotionBox>
          </GuiBox>
        </GuiBox>
      </main>

      <Footer />

      {/* Add pulse animation for training status */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </GuiBox>
  );
};

export default ZenModels;
