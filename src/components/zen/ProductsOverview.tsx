import { Box as GuiBox, Grid, H2, H3, H4, Link, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { 
  ArrowRight, Database, Cloud, Code, Cpu, 
  Box, Server, Globe, Network, Sparkles,
  Infinity, LayoutGrid, Brain, Bot, Terminal,
  GitBranch, Lock, Zap
} from "lucide-react";

const AICloudSVG = () => (
  <GuiBox display="inline-block" 
    render="svg" position="absolute" bottom={-40} right={-40} opacity={0.1} width={160} height={160} color="var(--neutral-500)" 
    viewBox="0 0 200 200" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
    <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 3" />
    <g transform="translate(70, 70)">
      <path d="M30 10C30 15.5228 25.5228 20 20 20C14.4772 20 10 15.5228 10 10C10 4.47715 14.4772 0 20 0C25.5228 0 30 4.47715 30 10Z" fill="currentColor" fillOpacity="0.3" />
      <circle cx="20" cy="10" r="5" fill="currentColor" />
    </g>
    <g transform="translate(120, 90)">
      <path d="M30 10C30 15.5228 25.5228 20 20 20C14.4772 20 10 15.5228 10 10C10 4.47715 14.4772 0 20 0C25.5228 0 30 4.47715 30 10Z" fill="currentColor" fillOpacity="0.3" />
      <circle cx="20" cy="10" r="5" fill="currentColor" />
    </g>
    <g transform="translate(80, 130)">
      <path d="M30 10C30 15.5228 25.5228 20 20 20C14.4772 20 10 15.5228 10 10C10 4.47715 14.4772 0 20 0C25.5228 0 30 4.47715 30 10Z" fill="currentColor" fillOpacity="0.3" />
      <circle cx="20" cy="10" r="5" fill="currentColor" />
    </g>
  </GuiBox>
);

const DxPlatformSVG = () => (
  <GuiBox display="inline-block" 
    render="svg" position="absolute" bottom={-40} right={-40} opacity={0.1} width={160} height={160} color="var(--neutral-500)" 
    viewBox="0 0 200 200" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="40" y="40" width="120" height="120" rx="8" stroke="currentColor" strokeWidth="2" />
    <line x1="40" y1="70" x2="160" y2="70" stroke="currentColor" strokeWidth="2" />
    <circle cx="55" cy="55" r="5" fill="currentColor" />
    <circle cx="75" cy="55" r="5" fill="currentColor" />
    <circle cx="95" cy="55" r="5" fill="currentColor" />
    <rect x="60" y="90" width="80" height="50" rx="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" fill="currentColor" fillOpacity="0.1" />
    <path d="M70 105L80 115L90 95M110 95L120 115L130 105" stroke="currentColor" strokeWidth="1.5" />
  </GuiBox>
);

interface EcosystemDetailProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'cloud' | 'dx';
}

const EcosystemDetail: React.FC<EcosystemDetailProps> = ({ isOpen, onClose, type }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <MotionBox 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          flexDirection="row" position="fixed" top={0} right={0} bottom={0} left={0} backgroundColor="rgb(0 0 0 / 0.8)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" zIndex={50} display="flex" alignItems="center" justifyContent="center" padding={16}
          onClick={onClose}
        >
          <MotionBox
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-2xl)" maxWidth="var(--container-prose)" width="100%" padding={24} boxShadow="0 20px 25px -5px rgb(0 0 0 / .4)" overflowY="auto" maxHeight="80vh" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), var(--pure-black))"
            onClick={(e) => e.stopPropagation()}
          >
            {type === 'cloud' ? (
              <>
                <GuiBox marginBottom={24}>
                  <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="500" color="var(--foreground)" marginBottom={8} display="flex" alignItems="center">
                    <GuiBox render="span" display="inline-flex" alignItems="center" marginRight={8}><Cloud size={24} color="var(--foreground)" /></GuiBox>
                    Hanzo AI Cloud
                  </H3>
                  <Paragraph color="var(--neutral-400)">
                    Our comprehensive AI platform providing seamless access to cutting-edge AI capabilities with enterprise-grade reliability and security.
                  </Paragraph>
                </GuiBox>

                <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} marginBottom={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                  <MotionBox 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-xl)" padding={16} borderWidth={1} borderColor="rgb(255 255 255 / 0.1)"
                  >
                    <XStack display="flex" alignItems="center" marginBottom={8}>
                      <GuiBox render="span" display="inline-flex" alignItems="center" marginRight={8}><Brain size={20} color="var(--foreground)" /></GuiBox>
                      <H4 color="var(--foreground)" fontWeight="500">AI Model Hub</H4>
                    </XStack>
                    <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                      Access to leading open and proprietary AI models with unified API, optimized inference, and cost management.
                    </Paragraph>
                  </MotionBox>

                  <MotionBox 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-xl)" padding={16} borderWidth={1} borderColor="rgb(255 255 255 / 0.1)"
                  >
                    <XStack display="flex" alignItems="center" marginBottom={8}>
                      <GuiBox render="span" display="inline-flex" alignItems="center" marginRight={8}><Database size={20} color="var(--foreground)" /></GuiBox>
                      <H4 color="var(--foreground)" fontWeight="500">Vector Database</H4>
                    </XStack>
                    <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                      High-performance vector storage and retrieval for AI applications with advanced filtering and hybrid search.
                    </Paragraph>
                  </MotionBox>

                  <MotionBox 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-xl)" padding={16} borderWidth={1} borderColor="rgb(255 255 255 / 0.1)"
                  >
                    <XStack display="flex" alignItems="center" marginBottom={8}>
                      <GuiBox render="span" display="inline-flex" alignItems="center" marginRight={8}><Bot size={20} color="var(--foreground)" /></GuiBox>
                      <H4 color="var(--foreground)" fontWeight="500">Agent Framework</H4>
                    </XStack>
                    <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                      Build, deploy and manage intelligent agents that can reason, plan, and execute complex tasks autonomously.
                    </Paragraph>
                  </MotionBox>

                  <MotionBox 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-xl)" padding={16} borderWidth={1} borderColor="rgb(255 255 255 / 0.1)"
                  >
                    <XStack display="flex" alignItems="center" marginBottom={8}>
                      <GuiBox render="span" display="inline-flex" alignItems="center" marginRight={8}><Lock size={20} color="var(--foreground)" /></GuiBox>
                      <H4 color="var(--foreground)" fontWeight="500">Enterprise Security</H4>
                    </XStack>
                    <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                      SOC 2 compliance, end-to-end encryption, and comprehensive audit logging for mission-critical AI systems.
                    </Paragraph>
                  </MotionBox>
                </Grid>

                <XStack marginTop={24} paddingTop={16} borderTopWidth={1} borderColor="rgb(255 255 255 / 0.1)" display="flex" justifyContent="space-between" alignItems="center">
                  <GuiBox color="var(--neutral-500)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                    Unified AI infrastructure for the enlightened engineer
                  </GuiBox>
                  <Link minHeight={44} 
                    to="/ai" 
                    color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" display="flex" hoverStyle={{ color: "var(--foreground)" }}
                  >
                    <span>Learn more about AI Cloud</span>
                    <GuiBox render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={12} /></GuiBox>
                  </Link>
                </XStack>
              </>
            ) : (
              <>
                <GuiBox marginBottom={24}>
                  <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="500" color="var(--foreground)" marginBottom={8} display="flex" alignItems="center">
                    <GuiBox render="span" display="inline-flex" alignItems="center" marginRight={8}><Code size={24} color="var(--foreground)" /></GuiBox>
                    Developer Experience Platform
                  </H3>
                  <Paragraph color="var(--neutral-400)">
                    Our integrated toolkit designed to streamline the software development lifecycle, from code to production.
                  </Paragraph>
                </GuiBox>

                <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} marginBottom={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                  <MotionBox 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-xl)" padding={16} borderWidth={1} borderColor="rgb(255 255 255 / 0.1)"
                  >
                    <XStack display="flex" alignItems="center" marginBottom={8}>
                      <GuiBox render="span" display="inline-flex" alignItems="center" marginRight={8}><GitBranch size={20} color="var(--foreground)" /></GuiBox>
                      <H4 color="var(--foreground)" fontWeight="500">CI/CD Pipeline</H4>
                    </XStack>
                    <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                      Automated testing, integration, and deployment with intelligent optimization and failure prediction.
                    </Paragraph>
                  </MotionBox>

                  <MotionBox 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-xl)" padding={16} borderWidth={1} borderColor="rgb(255 255 255 / 0.1)"
                  >
                    <XStack display="flex" alignItems="center" marginBottom={8}>
                      <GuiBox render="span" display="inline-flex" alignItems="center" marginRight={8}><Terminal size={20} color="var(--foreground)" /></GuiBox>
                      <H4 color="var(--foreground)" fontWeight="500">Dev Tools</H4>
                    </XStack>
                    <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                      Enhanced CLI, IDE integrations, and AI-assisted coding tools that anticipate developer needs.
                    </Paragraph>
                  </MotionBox>

                  <MotionBox 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-xl)" padding={16} borderWidth={1} borderColor="rgb(255 255 255 / 0.1)"
                  >
                    <XStack display="flex" alignItems="center" marginBottom={8}>
                      <GuiBox render="span" display="inline-flex" alignItems="center" marginRight={8}><Zap size={20} color="var(--foreground)" /></GuiBox>
                      <H4 color="var(--foreground)" fontWeight="500">Edge Computing</H4>
                    </XStack>
                    <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                      Global edge network for low-latency deployment with intelligent traffic routing and caching.
                    </Paragraph>
                  </MotionBox>

                  <MotionBox 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-xl)" padding={16} borderWidth={1} borderColor="rgb(255 255 255 / 0.1)"
                  >
                    <XStack display="flex" alignItems="center" marginBottom={8}>
                      <GuiBox render="span" display="inline-flex" alignItems="center" marginRight={8}><Network size={20} color="var(--foreground)" /></GuiBox>
                      <H4 color="var(--foreground)" fontWeight="500">Observability</H4>
                    </XStack>
                    <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                      Comprehensive monitoring, logging, and analytics with AI-powered anomaly detection and recommendation.
                    </Paragraph>
                  </MotionBox>
                </Grid>

                <XStack marginTop={24} paddingTop={16} borderTopWidth={1} borderColor="rgb(255 255 255 / 0.1)" display="flex" justifyContent="space-between" alignItems="center">
                  <GuiBox color="var(--neutral-500)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                    Build with tranquility, deploy with confidence
                  </GuiBox>
                  <Link minHeight={44} 
                    to="/platform" 
                    color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" display="flex" hoverStyle={{ color: "var(--foreground)" }}
                  >
                    <span>Learn more about DX Platform</span>
                    <GuiBox render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={12} /></GuiBox>
                  </Link>
                </XStack>
              </>
            )}
          </MotionBox>
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

const ProductsOverview = () => {
  const [selectedSystem, setSelectedSystem] = useState<'cloud' | 'dx' | null>(null);
  
  const products = [
    {
      name: "Hanzo Cloud",
      icon: Cloud,
      description: "Deploy with tranquility. Scale without attachment to infrastructure.",
      principle: "The wise engineer creates form from emptiness.",
      path: "/cloud"
    },
    {
      name: "Hanzo Vector",
      icon: Database,
      description: "Store and query vectors with efficiency and grace.",
      principle: "Knowledge structured becomes wisdom accessible.",
      path: "/vector"
    },
    {
      name: "Hanzo AI",
      icon: Cpu,
      description: "Harness artificial intelligence with mindful purpose.",
      principle: "Let AI amplify intention, not replace discernment.",
      path: "/ai"
    },
    {
      name: "Hanzo Code",
      icon: Code,
      description: "Write code that follows the middle path - neither complex nor simplistic.",
      principle: "Perfect code is not when there is nothing more to add, but when there is nothing left to take away.",
      path: "/hanzocode"
    }
  ];

  return (
    <GuiBox render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--black)" position="relative">
      <GuiBox 
        position="absolute" top={0} right={0} bottom={0} left={0} pointerEvents="none" opacity={0.3}
        style={{
          background: "radial-gradient(circle at 50% 30%, rgba(25,25,25,1), rgba(0,0,0,1))"
        }}
      />
      
      <GuiBox maxWidth="1536px" width="100%" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} display="inline-block" backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to bottom, var(--foreground), rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
            The Way of Building
          </H2>
          <Paragraph color="var(--neutral-500)" maxWidth="42rem" marginHorizontal="auto">
            Each tool embodies our principles. Together, they form a complete system for enlightened engineering.
          </Paragraph>
        </MotionBox>

        {/* AI Ecosystem Overview */}
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={64} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            group position="relative" overflow="hidden" borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" padding={24} cursor="pointer" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), var(--pure-black))"
            onClick={() => setSelectedSystem('cloud')}
          >
            <GuiBox position="relative" zIndex={10}>
              <XStack display="flex" alignItems="center" marginBottom={16}>
                <GuiBox padding={8} borderRadius="var(--radius-xl)" backgroundColor="rgb(255 255 255 / 0.1)" marginRight={16}>
                  <Cloud size={32} color="var(--foreground)" />
                </GuiBox>
                <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)">AI Cloud</H3>
              </XStack>
              
              <Paragraph color="var(--neutral-300)" marginBottom={16}>
                Our unified AI infrastructure combines vector databases, model inference, 
                and agent frameworks into a coherent platform built for enlightened engineers.
              </Paragraph>
              
              <XStack display="flex" flexWrap="wrap" gap={8} marginBottom={24}>
                <Text paddingHorizontal={8} paddingVertical={4} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)">Vector DB</Text>
                <Text paddingHorizontal={8} paddingVertical={4} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)">Multi-Model</Text>
                <Text paddingHorizontal={8} paddingVertical={4} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)">Agents</Text>
                <Text paddingHorizontal={8} paddingVertical={4} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)">Enterprise Ready</Text>
              </XStack>
              
              <XStack minHeight={44} render="button" display="flex" alignItems="center" color="var(--foreground)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }}>
                <span>Explore AI Cloud</span>
                <GuiBox render="span" display="inline-flex" alignItems="center" marginLeft={8} $group-hover={{ x: 4 }}><ArrowRight size={16} /></GuiBox>
              </XStack>
            </GuiBox>
            
            <AICloudSVG />
            
            <MotionBox 
              position="absolute" top={0} right={0} bottom={0} left={0} backgroundColor="rgb(255 255 255 / 0.05)" opacity={0} transition="opacity var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ opacity: 1 }}
              initial={false}
              whileHover={{ opacity: 0.1 }}
            />
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            group position="relative" overflow="hidden" borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" padding={24} cursor="pointer" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), var(--pure-black))"
            onClick={() => setSelectedSystem('dx')}
          >
            <GuiBox position="relative" zIndex={10}>
              <XStack display="flex" alignItems="center" marginBottom={16}>
                <GuiBox padding={8} borderRadius="var(--radius-xl)" backgroundColor="rgb(255 255 255 / 0.1)" marginRight={16}>
                  <Code size={32} color="var(--foreground)" />
                </GuiBox>
                <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)">DX Platform</H3>
              </XStack>
              
              <Paragraph color="var(--neutral-300)" marginBottom={16}>
                Our developer experience platform streamlines engineering workflow with 
                automated CI/CD, observability, and edge computing in perfect harmony.
              </Paragraph>
              
              <XStack display="flex" flexWrap="wrap" gap={8} marginBottom={24}>
                <Text paddingHorizontal={8} paddingVertical={4} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)">CI/CD</Text>
                <Text paddingHorizontal={8} paddingVertical={4} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)">Dev Tools</Text>
                <Text paddingHorizontal={8} paddingVertical={4} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)">Edge</Text>
                <Text paddingHorizontal={8} paddingVertical={4} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)">Observability</Text>
              </XStack>
              
              <XStack minHeight={44} render="button" display="flex" alignItems="center" color="var(--foreground)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }}>
                <span>Explore DX Platform</span>
                <GuiBox render="span" display="inline-flex" alignItems="center" marginLeft={8} $group-hover={{ x: 4 }}><ArrowRight size={16} /></GuiBox>
              </XStack>
            </GuiBox>
            
            <DxPlatformSVG />
            
            <MotionBox 
              position="absolute" top={0} right={0} bottom={0} left={0} backgroundColor="rgb(255 255 255 / 0.05)" opacity={0} transition="opacity var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ opacity: 1 }}
              initial={false}
              whileHover={{ opacity: 0.1 }}
            />
          </MotionBox>
        </Grid>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $xl={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          {products.map((product, index) => (
            <MotionBox
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              group borderWidth={1} borderColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-2xl)" padding={24} transition="all 300ms cubic-bezier(.4,0,.2,1)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), var(--pure-black))" hoverStyle={{ borderColor: "rgb(255 255 255 / 0.1)" }}
            >
              <XStack display="flex" alignItems="center" marginBottom={16}>
                <XStack width={40} height={40} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.05)" display="flex" alignItems="center" justifyContent="center" marginRight={16} transition="transform var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ scale: 1.1 }}>
                  <product.icon height={20} width={20} color="var(--white)" />
                </XStack>
                <H3 color="var(--white)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500">{product.name}</H3>
              </XStack>
              <Paragraph color="var(--neutral-400)" marginBottom={16}>{product.description}</Paragraph>
              <GuiBox color="var(--neutral-600)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontStyle="italic" marginBottom={24}>"{product.principle}"</GuiBox>
              <Link minHeight={44} 
                to={product.path} 
                color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" display="flex" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--white)" }}
              >
                <Text $group-hover={{ textDecorationLine: "underline" }}>Learn more</Text>
                <GuiBox render="span" display="inline-flex" alignItems="center" marginLeft={8} $group-hover={{ x: 4 }}><ArrowRight size={12} /></GuiBox>
              </Link>
            </MotionBox>
          ))}
        </Grid>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          marginTop={64} textAlign="center" borderWidth={1} borderColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-2xl)" padding={32} backgroundImage="linear-gradient(to bottom, transparent, rgb(255 255 255 / 0.08))"
        >
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="500" marginBottom={16} color="var(--white)">Seek guidance from a Sensei</H3>
          <Paragraph color="var(--neutral-500)" maxWidth="42rem" marginHorizontal="auto" marginBottom={24}>
            Our masters can guide your team through the 64 principles and practices of enlightened engineering.
          </Paragraph>
          <Link tap 
            to="/contact" 
            display="inline-flex" alignItems="center" paddingHorizontal={24} paddingVertical={12} backgroundColor="rgb(255 255 255 / 0.05)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-xl)" color="var(--white)" transition="all 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)", boxShadow: "0 10px 15px -3px rgb(0 0 0 / .35)", shadowColor: "rgb(255 255 255 / 0.1)" }}
          >
            Request Sensei Consultation
          </Link>
        </MotionBox>
      </GuiBox>

      <EcosystemDetail 
        isOpen={selectedSystem === 'cloud'}
        onClose={() => setSelectedSystem(null)}
        type="cloud"
      />

      <EcosystemDetail 
        isOpen={selectedSystem === 'dx'}
        onClose={() => setSelectedSystem(null)}
        type="dx"
      />
    </GuiBox>
  );
};

export default ProductsOverview;