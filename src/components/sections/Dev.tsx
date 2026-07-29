import { Anchor, Box, Button, Grid, H1, H2, H3, H4, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Terminal, 
  BookOpen, 
  FileText, 
  Settings, 
  Server, 
  Database, 
  Shield, 
  Search, 
  Download,
  ChevronRight,
  ExternalLink,
  Bot
} from "lucide-react";

// Sidebar navigation items
const sidebarItems = [
  { label: "Getting Started", icon: <BookOpen size={16} />, active: true },
  { label: "API Reference", icon: <Code size={16} /> },
  { label: "Models & Pricing", icon: <Database size={16} /> },
  { label: "Security", icon: <Shield size={16} /> },
  { label: "Tool Use", icon: <Settings size={16} /> },
  { label: "Deployment", icon: <Server size={16} /> },
  { label: "Examples", icon: <FileText size={16} /> },
];

// Setup steps for the getting started section
const setupSteps = [
  {
    title: "Install Hanzo Dev",
    code: "npm install -g @hanzo/dev",
    description: "Do NOT use sudo npm install -g as this can lead to permission issues."
  },
  {
    title: "Navigate to your project",
    code: "cd your-project-directory",
    description: "Open the terminal and navigate to your project folder."
  },
  {
    title: "Start Hanzo Dev",
    code: "hanzo",
    description: "Run the command to launch the interactive interface."
  },
  {
    title: "Complete authentication",
    code: "",
    description: "Follow the one-time OAuth process with your Hanzo account."
  }
];

const Dev = () => {
  const [activeTab, setActiveTab] = useState<string>("getting-started");
  
  return (
    <Box render="section" paddingVertical={80} backgroundColor="var(--neutral-950)" borderTopWidth={1} borderColor="var(--neutral-800)">
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <YStack display="flex" flexDirection="column" gap={32} $lg={{ flexDirection: "row" }}>
          {/* Sidebar */}
          <MotionBox 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            flexShrink={0} $lg={{ width: 256 }}
          >
            <Box position="sticky" top={96}>
              <Box marginBottom={32}>
                <H2 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" marginBottom={8} color="var(--white)">Hanzo Dev</H2>
                <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
                  Documentation and resources for developers
                </Paragraph>
              </Box>
              
              <XStack display="flex" marginBottom={24} $lg={{ display: "none" }}>
                <Button variant="outline" width="100%" display="flex" alignItems="center" justifyContent="space-between">
                  <span>Navigate</span>
                  <ChevronRight size={16} />
                </Button>
              </XStack>
              
              <Box render="nav" display="none" rowGap={4} $lg={{ display: "block" }}>
                {sidebarItems.map((item, index) => (
                  <Anchor minHeight={44} 
                    key={index}
                    href={`#${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    group display="flex" alignItems="center" paddingHorizontal={12} paddingVertical={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" borderRadius="var(--radius-md)" backgroundColor={item.active ? "rgb(255 255 255 / 0.2)" : undefined} color={item.active ? "var(--foreground)" : "var(--neutral-300)"} hoverStyle={item.active ? undefined : { backgroundColor: "var(--surface-card)" }}
                  >
                    <Text marginRight={12} color={item.active ? "var(--foreground)" : "var(--neutral-400)"}>
                      {item.icon}
                    </Text>
                    <span>{item.label}</span>
                  </Anchor>
                ))}
              </Box>
            </Box>
          </MotionBox>
          
          {/* Main Content */}
          <MotionBox 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            flex={1} minWidth={0}
          >
            <Box maxWidth="none">
              <H1 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24}>
                Hanzo Dev Documentation
              </H1>
              
              <Box backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-md)" padding={16} marginBottom={32}>
                <XStack display="flex">
                  <Box flexShrink={0}>
                    <Bot size={20} color="var(--foreground)" />
                  </Box>
                  <Box marginLeft={12}>
                    <H3 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)">
                      Beta Release
                    </H3>
                    <Box marginTop={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)">
                      <p>
                        Hanzo Dev is currently in beta. We're gathering developer feedback to improve the experience.
                        Please report any issues directly through our GitHub repository.
                      </p>
                    </Box>
                  </Box>
                </XStack>
              </Box>
              
              <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--white)" marginTop={32} marginBottom={16} id="getting-started">
                Getting Started
              </H2>
              
              <Paragraph color="var(--neutral-400)" marginBottom={24}>
                Hanzo Dev is an AI developer tool that lives in your terminal, understands your codebase, 
                and helps you code faster through natural language commands.
              </Paragraph>
              
              {/* System Requirements */}
              <Box marginBottom={32}>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={16}>
                  System Requirements
                </H3>
                
                <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} marginBottom={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                  <Box borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={16}>
                    <H4 fontWeight="500" color="var(--white)" marginBottom={8}>Operating Systems</H4>
                    <Box render="ul" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" rowGap={4} listStyleType="disc" marginLeft={16}>
                      <li>macOS 10.15+</li>
                      <li>Ubuntu 20.04+/Debian 10+</li>
                      <li>Windows via WSL</li>
                    </Box>
                  </Box>
                  
                  <Box borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={16}>
                    <H4 fontWeight="500" color="var(--white)" marginBottom={8}>Software</H4>
                    <Box render="ul" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" rowGap={4} listStyleType="disc" marginLeft={16}>
                      <li>Node.js 18+</li>
                      <li>git 2.23+ (optional)</li>
                      <li>GitHub or GitLab CLI (optional)</li>
                    </Box>
                  </Box>
                </Grid>
              </Box>
              
              {/* Installation Steps */}
              <Box marginBottom={32}>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={16}>
                  Install and Set Up
                </H3>
                
                <Box rowGap={16}>
                  {setupSteps.map((step, index) => (
                    <Box key={index} borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-md)" overflow="hidden">
                      <Box backgroundColor="var(--neutral-900)" paddingHorizontal={16} paddingVertical={8} borderBottomWidth={1} borderColor="var(--neutral-800)">
                        <XStack display="flex" alignItems="center">
                          <XStack flexShrink={0} height={24} width={24} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" color="var(--white)" display="flex" alignItems="center" justifyContent="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">
                            {index + 1}
                          </XStack>
                          <H4 marginLeft={12} fontWeight="500" color="var(--white)">{step.title}</H4>
                        </XStack>
                      </Box>
                      <Box paddingHorizontal={16} paddingVertical={12}>
                        <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginBottom={12}>{step.description}</Paragraph>
                        {step.code && (
                          <Box backgroundColor="var(--neutral-800)" borderRadius="var(--radius)" padding={12} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" overflowX="auto">
                            {step.code}
                          </Box>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
              
              {/* Core Features */}
              <Box marginBottom={32}>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={16}>
                  Core Features
                </H3>
                
                <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                  <Box borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={16}>
                    <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><Code size={20} color="var(--neutral-500)" /></Box>
                    <H4 fontWeight="500" color="var(--white)" marginBottom={8}>Understand Code</H4>
                    <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
                      Ask questions about your codebase architecture, logic, and functions to get immediate insights.
                    </Paragraph>
                  </Box>
                  
                  <Box borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={16}>
                    <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><Terminal size={20} color="var(--neutral-500)" /></Box>
                    <H4 fontWeight="500" color="var(--white)" marginBottom={8}>Execute Commands</H4>
                    <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
                      Run tests, linting, and other commands with natural language instructions.
                    </Paragraph>
                  </Box>
                  
                  <Box borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={16}>
                    <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><FileText size={20} color="var(--neutral-500)" /></Box>
                    <H4 fontWeight="500" color="var(--white)" marginBottom={8}>Edit Files</H4>
                    <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
                      Make changes to your code across multiple files with simple natural language requests.
                    </Paragraph>
                  </Box>
                  
                  <Box borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={16}>
                    <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><Search size={20} color="var(--neutral-500)" /></Box>
                    <H4 fontWeight="500" color="var(--white)" marginBottom={8}>Search & Navigate</H4>
                    <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
                      Quickly search through git history, find files, and navigate complex codebases.
                    </Paragraph>
                  </Box>
                </Grid>
              </Box>
              
              {/* Example Usage */}
              <Box marginBottom={32}>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={16}>
                  Example Usage
                </H3>
                
                <Box backgroundColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={16} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={24} overflowX="auto">
                  <Box color="var(--neutral-400)"># Ask about your codebase</Box>
                  <Box color="var(--neutral-100)">hanzo</Box>
                  <Box color="var(--foreground)">&gt; how does our authentication system work?</Box>
                  <Box marginTop={8} color="var(--neutral-400)"># Fix issues across files</Box>
                  <Box color="var(--foreground)">&gt; fix the type errors in the auth module</Box>
                  <Box marginTop={8} color="var(--neutral-400)"># Create a commit</Box>
                  <Box color="var(--foreground)">&gt; commit my changes</Box>
                </Box>
              </Box>
              
              <XStack display="flex" justifyContent="center" marginTop={48}>
                <Button backgroundColor="var(--neutral-600)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Download size={16} /></Box>
                  <a href="#download">Install Hanzo Dev</a>
                </Button>
                <Button variant="outline" marginLeft={16}>
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><ExternalLink size={16} /></Box>
                  <a href="https://github.com/hanzoai/dev" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </Button>
              </XStack>
            </Box>
          </MotionBox>
        </YStack>
      </Box>
    </Box>
  );
};

export default Dev;
