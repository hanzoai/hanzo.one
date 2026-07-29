import { Anchor, Box, Grid, H2, H3, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'

import { motion } from "framer-motion";
import { 
  MessageSquare, Workflow, Code, Cpu, Database, Search, 
  Server, Terminal, FileCode, Github, Zap, Lock, Globe 
} from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const products = [
  {
    icon: <MessageSquare size={32} />,
    title: "Hanzo Chat",
    description: "Interactive AI chat experiences with advanced context handling and embedding capabilities.",
    code: "import { useChat } from '@hanzo/chat';",
    features: [
      { icon: <Zap size={16} />, text: "Multi-model support including OpenAI, Anthropic, and more" },
      { icon: <Lock size={16} />, text: "Secure, private conversations with enterprise-grade encryption" },
      { icon: <Globe size={16} />, text: "Customizable chat interfaces with rich media support" },
      { icon: <Github size={16} />, text: "Open source client, self-hostable infrastructure" }
    ],
    productUrl: "https://docs.hanzo.ai/products/chat",
    github: "https://github.com/hanzoai/chat"
  },
  {
    icon: <Workflow size={32} />,
    title: "Hanzo Flow",
    description: "Build complex AI agents and automation workflows with our visual flow builder.",
    code: "import { createFlow } from '@hanzo/flow';",
    features: [
      { icon: <Zap size={16} />, text: "Visual workflow editor for building complex AI pipelines" },
      { icon: <Lock size={16} />, text: "Drag-and-drop interface for connecting AI components" },
      { icon: <Globe size={16} />, text: "Multi-agent orchestration and communication" },
      { icon: <Github size={16} />, text: "Extensive library of pre-built flows and components" }
    ],
    productUrl: "https://docs.hanzo.ai/products/flow",
    github: "https://github.com/hanzoai/flow"
  },
  {
    icon: <Code size={32} />,
    title: "Hanzo LLMs",
    description: "Unified gateway to access all major language models with a single API.",
    code: "import { useLLM } from '@hanzo/llms';",
    features: [
      { icon: <Zap size={16} />, text: "Single API for 50+ language models including OpenAI, Claude, Llama" },
      { icon: <Lock size={16} />, text: "Intelligent routing and fallback between providers" },
      { icon: <Globe size={16} />, text: "Cost optimization and performance monitoring" },
      { icon: <Github size={16} />, text: "Open source client with enterprise security features" }
    ],
    productUrl: "https://docs.hanzo.ai/products/llms",
    github: "https://github.com/hanzoai/llms"
  },
  {
    icon: <Cpu size={32} />,
    title: "Hanzo MCPs",
    description: "Server and gateway for multimodal conversational processors with robust tooling.",
    code: "import { useMCP } from '@hanzo/mcps';",
    features: [
      { icon: <Zap size={16} />, text: "Unified interface for GPT-4o, Claude 3, Gemini and more" },
      { icon: <Lock size={16} />, text: "Tool-use capabilities with custom tool integration" },
      { icon: <Globe size={16} />, text: "Distributed MCP deployment across edge and cloud" },
      { icon: <Github size={16} />, text: "Comprehensive observability and monitoring" }
    ],
    productUrl: "https://docs.hanzo.ai/products/mcps",
    github: "https://github.com/hanzoai/mcps"
  },
  {
    icon: <Database size={32} />,
    title: "Hanzo RealtimeDB",
    description: "High-performance real-time database for massive analytics workloads.",
    code: "import { useRealtimeDB } from '@hanzo/realtimedb';",
    features: [
      { icon: <Zap size={16} />, text: "Real-time data synchronization across clients" },
      { icon: <Lock size={16} />, text: "Petabyte-scale analytics with millisecond queries" },
      { icon: <Globe size={16} />, text: "Event-driven architecture with webhooks and triggers" },
      { icon: <Github size={16} />, text: "Self-hostable with cloud-native deployment options" }
    ],
    productUrl: "https://docs.hanzo.ai/products/realtimedb",
    github: "https://github.com/hanzoai/realtimedb"
  },
  {
    icon: <Search size={32} />,
    title: "Hanzo Vector",
    description: "Real-time vector search engine for semantic retrieval and AI applications.",
    code: "import { useVector } from '@hanzo/vector';",
    features: [
      { icon: <Zap size={16} />, text: "High-performance vector database for AI embeddings" },
      { icon: <Lock size={16} />, text: "Hybrid search combining vector and keyword techniques" },
      { icon: <Globe size={16} />, text: "Real-time indexing and search capabilities" },
      { icon: <Github size={16} />, text: "Optimized for RAG and semantic search applications" }
    ],
    productUrl: "https://docs.hanzo.ai/products/vector",
    github: "https://github.com/hanzoai/vector"
  },
  {
    icon: <Server size={32} />,
    title: "Hanzo Base",
    description: "One-file backend with embedded DB that scales to planetary distributed SQL.",
    code: "import { createClient } from '@hanzo/base';",
    features: [
      { icon: <Zap size={16} />, text: "Local-first development with instant cloud scaling" },
      { icon: <Lock size={16} />, text: "Built-in authentication, storage, and functions" },
      { icon: <Globe size={16} />, text: "Edge-optimized with global distribution" },
      { icon: <Github size={16} />, text: "100% open source and MIT licensed" }
    ],
    productUrl: "https://docs.hanzo.ai/products/base",
    github: "https://github.com/hanzoai/base"
  },
  {
    icon: <Terminal size={32} />,
    title: "Hanzo Dev",
    description: "AI-powered development environment with CLI, web, and VSCode extensions.",
    code: "import { useDev } from '@hanzo/dev';",
    features: [
      { icon: <Zap size={16} />, text: "AI assistant integrated into your workflow" },
      { icon: <Lock size={16} />, text: "Code generation, refactoring, and documentation" },
      { icon: <Globe size={16} />, text: "Available as CLI, web app, and IDE plugins" },
      { icon: <Github size={16} />, text: "Fully customizable and extendable" }
    ],
    productUrl: "https://docs.hanzo.ai/products/dev",
    github: "https://github.com/hanzoai/dev"
  },
  {
    icon: <FileCode size={32} />,
    title: "Hanzo Code",
    description: "AI-powered code editor based on VSCode with advanced coding capabilities.",
    code: "import { useCode } from '@hanzo/code';",
    features: [
      { icon: <Zap size={16} />, text: "Built on VSCode with full extension compatibility" },
      { icon: <Lock size={16} />, text: "AI pair programming and code generation" },
      { icon: <Globe size={16} />, text: "Integrated with Hanzo's AI engineering platform" },
      { icon: <Github size={16} />, text: "Open source with enterprise features" }
    ],
    productUrl: "https://docs.hanzo.ai/products/code",
    github: "https://github.com/hanzoai/code"
  }
];

// Simple OpenAI-compatible chat example component
const ChatExample = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: "system", content: "Welcome to Hanzo Chat. How can I help you today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    const userMessage = { role: "user", content: message };
    setChatHistory([...chatHistory, userMessage]);
    setMessage("");
    setIsLoading(true);

    // Simulate API call (in a real app, you'd call your actual API endpoint)
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev, 
        { 
          role: "assistant", 
          content: `Thanks for trying Hanzo Chat! Your message was: "${userMessage.content}"\n\nIn a real implementation, this would connect to our OpenAI-compatible API endpoint.` 
        }
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Box backgroundColor="var(--neutral-900)" borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-800)" padding={16} width="100%" maxWidth="36rem" marginHorizontal="auto">
      <Box marginBottom={16} height={256} overflowY="auto" backgroundColor="var(--neutral-950)" borderRadius="var(--radius)" padding={12} borderWidth={1} borderColor="var(--neutral-800)">
        {chatHistory.map((msg, index) => (
          <Box 
            key={index} 
            marginBottom={12} padding={8} borderRadius="var(--radius)" backgroundColor={msg.role === "user" ? "rgb(255 255 255 / 0.3)" : "rgb(255 255 255 / 0.5)"} marginLeft={msg.role === "user" ? 48 : undefined}
          >
            <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginBottom={4}>
              {msg.role === "user" ? "You" : "Hanzo AI"}
            </Box>
            <Box whiteSpace="pre-wrap">{msg.content}</Box>
          </Box>
        ))}
        {isLoading && (
          <XStack display="flex" alignItems="center" columnGap={8} padding={8}>
            <MotionBox animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} width={8} height={8} backgroundColor="var(--neutral-500)" borderRadius="var(--radius-full)"></MotionBox>
            <MotionBox animate={{ opacity: [1, 0.5, 1] }} width={8} height={8} backgroundColor="var(--neutral-500)" borderRadius="var(--radius-full)" transition="all 200ms cubic-bezier(.4,0,.2,1) 100ms"></MotionBox>
            <MotionBox animate={{ opacity: [1, 0.5, 1] }} width={8} height={8} backgroundColor="var(--neutral-500)" borderRadius="var(--radius-full)" transition="all 200ms cubic-bezier(.4,0,.2,1) 200ms"></MotionBox>
          </XStack>
        )}
      </Box>
      <XStack onSubmit={handleSubmit} render="form" display="flex" gap={8}>
        <Box display="inline-block" minHeight={44}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask Hanzo AI something..."
          render="input" flex={1} backgroundColor="var(--neutral-800)" color="var(--white)" borderWidth={1} borderColor="var(--neutral-700)" borderRadius="var(--radius)" paddingHorizontal={12} paddingVertical={8} focusStyle={{ outlineStyle: "solid", outlineWidth: 1, outlineColor: "var(--neutral-500)" }}
        />
        <Button type="submit" disabled={isLoading} backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-500)" }}>
          Send
        </Button>
      </XStack>
      <Box marginTop={12} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" textAlign="center">
        <code>import {'{'} createChat {'}'} from '@hanzoai/chat';</code>
      </Box>
    </Box>
  );
};

const Products = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            Hanzo AI Platform
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            A comprehensive suite of AI-native tools and infrastructure
            for building modern applications.
          </Paragraph>
        </MotionBox>

        {/* OpenAI-compatible chat example */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          marginBottom={96}
        >
          <Box textAlign="center" marginBottom={32}>
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--white)">Try Hanzo Chat</H3>
            <Paragraph color="var(--neutral-400)">Powered by our OpenAI-compatible API</Paragraph>
          </Box>
          <ChatExample />
        </MotionBox>

        {/* Product grid */}
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {products.map((product, index) => (
            <MotionBox
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
              backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "rgb(255 255 255 / 0.2)" }}
            >
              <XStack display="flex" alignItems="center" marginBottom={16}>
                <XStack height={48} width={48} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginRight={16}>
                  {product.icon}
                </XStack>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)">{product.title}</H3>
              </XStack>
              <Paragraph color="var(--neutral-300)" marginBottom={16}>{product.description}</Paragraph>
              <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-md)" padding={12} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginBottom={16} overflowX="auto">
                {product.code}
              </Box>
              <Box render="ul" rowGap={8} marginBottom={24}>
                {product.features.map((feature, fIndex) => (
                  <XStack key={fIndex} render="li" display="flex" alignItems="flex-start">
                    <Text color="var(--foreground)" marginRight={8} marginTop={4}>{feature.icon}</Text>
                    <Text color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{feature.text}</Text>
                  </XStack>
                ))}
              </Box>
              <XStack display="flex" columnGap={12}>
                <Button 
                  flex={1}
                  variant="outline"
                  size="sm"
                >
                  <Anchor tap href={product.productUrl} display="flex" alignItems="center" justifyContent="center" width="100%">
                    Learn More
                  </Anchor>
                </Button>
                <Button 
                  flex={1} backgroundColor="var(--neutral-800)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
                  size="sm"
                >
                  <Anchor minHeight={44} href={product.github} target="_blank" rel="noopener noreferrer" display="flex" justifyContent="center" width="100%">
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={16} /></Box> GitHub
                  </Anchor>
                </Button>
              </XStack>
            </MotionBox>
          ))}
        </Grid>

        {/* Call to action */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          
          marginTop={80} padding={32} borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" transition="all 300ms cubic-bezier(.4,0,.2,1)" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" hoverStyle={{ outlineColor: "rgb(255 255 255 / 0.3)", outlineStyle: "solid" }}
        >
          <Box maxWidth="var(--container-prose)" marginHorizontal="auto" textAlign="center">
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--white)" marginBottom={16}>Ready to Start Building?</H3>
            <Paragraph color="var(--neutral-300)" marginBottom={32}>
              Join thousands of developers building the future with Hanzo's AI-native platform.
              Get started for free today.
            </Paragraph>
            <YStack display="flex" flexDirection="column" justifyContent="center" gap={16} $sm={{ flexDirection: "row" }}>
              <MotionBox
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <a href="https://docs.hanzo.ai" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    width="100%" backgroundColor="transparent" color="var(--white)" borderWidth={2} borderColor="var(--foreground)" transition="all 300ms cubic-bezier(.4,0,.2,1)" $sm={{ width: "auto" }} hoverStyle={{ backgroundColor: "var(--white)", color: "var(--pure-black)" }}
                  >
                    Read the Docs
                  </Button>
                </a>
              </MotionBox>
              <MotionBox
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <a href="https://app.hanzo.ai/signup" target="_blank" rel="noopener noreferrer">
                  <Button
                    width="100%" backgroundColor="var(--white)" color="var(--pure-black)" borderWidth={1} borderColor="var(--neutral-300)" transition="all 300ms cubic-bezier(.4,0,.2,1)" $sm={{ width: "auto" }} hoverStyle={{ backgroundColor: "transparent", color: "var(--white)", borderColor: "var(--white)" }}
                  >
                    Get Started Free
                  </Button>
                </a>
              </MotionBox>
            </YStack>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Products;
