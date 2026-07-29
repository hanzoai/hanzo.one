import { Anchor, Box as GuiBox, CodeTabs, Grid, H2, H3, Link, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Terminal,
  Copy,
  Check,
  ArrowRight,
  MonitorUp,
  Zap,
  Lock,
  Users,
  Shield,
  ExternalLink,
  Code,
  Bug,
  Workflow,
  Box,
  Bot,
} from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

// Multi-language code examples for the API section
const API_CODE_EXAMPLES = [
  {
    language: "typescript",
    label: "TypeScript",
    code: `import { Hanzo } from "@hanzo/ai";

const hanzo = new Hanzo({
  apiKey: process.env.HANZO_API_KEY,
});

const response = await hanzo.chat.completions.create({
  model: "claude-sonnet-4-20250514",
  messages: [{ role: "user", content: "Hello!" }],
});

console.log(response.choices[0].message.content);`,
  },
  {
    language: "python",
    label: "Python",
    code: `from hanzo import Hanzo
import os

client = Hanzo(api_key=os.environ["HANZO_API_KEY"])

response = client.chat.completions.create(
    model="claude-sonnet-4-20250514",
    messages=[{"role": "user", "content": "Hello!"}],
)

print(response.choices[0].message.content)`,
  },
  {
    language: "go",
    label: "Go",
    code: `package main

import (
    "context"
    "fmt"
    "os"

    "github.com/hanzoai/hanzo-go"
)

func main() {
    client := hanzo.NewClient(os.Getenv("HANZO_API_KEY"))

    resp, _ := client.Chat.Completions.Create(
        context.Background(),
        hanzo.ChatCompletionRequest{
            Model: "claude-sonnet-4-20250514",
            Messages: []hanzo.Message{
                {Role: "user", Content: "Hello!"},
            },
        },
    )

    fmt.Println(resp.Choices[0].Message.Content)
}`,
  },
  {
    language: "bash",
    label: "cURL",
    code: `curl https://api.hanzo.ai/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $HANZO_API_KEY" \\
  -d '{
    "model": "claude-sonnet-4-20250514",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'`,
  },
];

const DeveloperExperienceSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText("curl -fsSL hanzo.sh/install.sh | sh");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <GuiBox render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--pure-black)" $md={{ paddingHorizontal: 32 }}>
      <GuiBox maxWidth="var(--container-wide)" marginHorizontal="auto" rowGap={96}>

        {/* IDE Agents Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          display="grid" gap={48} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
        >
          <div>
            <Paragraph
              display="inline-flex" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8} borderWidth={1} marginBottom={24}
              style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}4d` }}
            >
              Works where developers live
            </Paragraph>
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              VS Code. JetBrains. Terminal. Remote.
            </H2>
            <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" marginBottom={32}>
              Hanzo reads your repo structure first, edits across files coherently, and executes tasks step-by-step—locally or in isolated remote sandboxes.
            </Paragraph>
            <Link
              to="/extensions"
              display="inline-flex" alignItems="center" paddingHorizontal={20} paddingVertical={10} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor="var(--neutral-800)" color="var(--foreground)" hoverStyle={{ opacity: 0.9 }}
            >
              Install the IDE extension
              <GuiBox render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></GuiBox>
            </Link>
          </div>

          {/* IDE Preview */}
          <GuiBox borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-overlay)" overflow="hidden">
            <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--neutral-950)">
              <XStack display="flex" gap={6}>
                <GuiBox width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
                <GuiBox width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
                <GuiBox width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
              </XStack>
              <Text marginLeft={8} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">VS Code - Hanzo Extension</Text>
            </XStack>
            <GuiBox padding={16} rowGap={12} backgroundColor="var(--neutral-950)">
              <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={8} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)">
                <MonitorUp size={16} color="var(--foreground)" />
                <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">Reading repo structure...</Text>
              </XStack>
              <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={8} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)">
                <Check size={16} color="var(--neutral-500)" />
                <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">Edited 4 files cohesively</Text>
              </XStack>
              <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={8} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="var(--border-strong)">
                <Check size={16} color="var(--neutral-500)" />
                <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)">All tests passing</Text>
              </XStack>
            </GuiBox>
          </GuiBox>
        </MotionBox>

        {/* Hanzo Dev Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          display="grid" gap={48} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
        >
          {/* Terminal Preview */}
          <GuiBox order={2} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-overlay)" overflow="hidden" $lg={{ order: 1 }}>
            <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--neutral-950)">
              <XStack display="flex" gap={6}>
                <GuiBox width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
                <GuiBox width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
                <GuiBox width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
              </XStack>
              <Text marginLeft={8} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" fontFamily="var(--font-mono)">terminal</Text>
              <GuiBox display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                onClick={handleCopyInstall}
                render="button" marginLeft="auto" padding={4} borderRadius="var(--radius)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
              >
                {copied ? (
                  <Check size={12} color="var(--neutral-500)" />
                ) : (
                  <Copy size={12} color="var(--neutral-500)" />
                )}
              </GuiBox>
            </XStack>
            <GuiBox padding={16} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" backgroundColor="var(--neutral-950)">
              <GuiBox marginBottom={8}>
                <Text color="var(--neutral-500)">$ </Text>
                <Text color="var(--foreground)">curl</Text>
                <Text color="var(--neutral-300)"> -fsSL </Text>
                <Text color="var(--foreground)">hanzo.sh/install.sh</Text>
                <Text color="var(--neutral-300)"> | </Text>
                <Text color="var(--foreground)">sh</Text>
              </GuiBox>
              <GuiBox marginBottom={16}>
                <Text color="var(--neutral-500)">$ </Text>
                <Text color="var(--foreground)">hanzo</Text>
                <Text color="var(--foreground)"> dev</Text>
                <Text color="var(--foreground)"> "Fix rate limiting. Add metrics. Add tests. Open a PR."</Text>
              </GuiBox>
              <GuiBox color="var(--foreground)" marginBottom={4}>
                <Text color="var(--neutral-500)">✓ </Text>Plan created
              </GuiBox>
              <GuiBox color="var(--foreground)" marginBottom={4}>
                <Text color="var(--neutral-500)">✓ </Text>Implementation complete
              </GuiBox>
              <GuiBox color="var(--foreground)" marginBottom={4}>
                <Text color="var(--neutral-500)">✓ </Text>Tests passing (12/12)
              </GuiBox>
              <GuiBox color="var(--foreground)">
                <Text color="var(--neutral-500)">✓ </Text>PR opened: #247
              </GuiBox>
            </GuiBox>
          </GuiBox>

          <GuiBox order={1} $lg={{ order: 2 }}>
            <Paragraph
              display="inline-flex" alignItems="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8} borderWidth={1} marginBottom={24}
              style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}4d` }}
            >
              <GuiBox render="span" display="inline-flex" alignItems="center" marginRight={6}><Bot size={14} /></GuiBox>
              Hanzo Dev
            </Paragraph>
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              AI coding agent in your terminal.
            </H2>
            <Paragraph color="var(--neutral-400)" marginBottom={24}>
              Install <Text render="code" paddingHorizontal={6} paddingVertical={2} borderRadius="var(--radius)" backgroundColor="var(--neutral-800)" color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">@hanzo/dev</Text> and <Text render="code" paddingHorizontal={6} paddingVertical={2} borderRadius="var(--radius)" backgroundColor="var(--neutral-800)" color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">@hanzo/cli</Text> via curl.
            </Paragraph>
            <GuiBox render="ul" rowGap={12} color="var(--neutral-400)" marginBottom={32}>
              <XStack render="li" display="flex" alignItems="center" gap={12}>
                <XStack width={24} height={24} borderRadius="var(--radius)" backgroundColor="var(--neutral-800)" display="flex" alignItems="center" justifyContent="center">
                  <Code size={14} color="var(--neutral-500)" />
                </XStack>
                Generate APIs, scripts, components, and tests
              </XStack>
              <XStack render="li" display="flex" alignItems="center" gap={12}>
                <XStack width={24} height={24} borderRadius="var(--radius)" backgroundColor="var(--neutral-800)" display="flex" alignItems="center" justifyContent="center">
                  <Bug size={14} color="var(--neutral-500)" />
                </XStack>
                Debug and fix using your real codebase context
              </XStack>
              <XStack render="li" display="flex" alignItems="center" gap={12}>
                <XStack width={24} height={24} borderRadius="var(--radius)" backgroundColor="var(--neutral-800)" display="flex" alignItems="center" justifyContent="center">
                  <Workflow size={14} color="var(--neutral-500)" />
                </XStack>
                Scaffold CI/CD and release workflows
              </XStack>
              <XStack render="li" display="flex" alignItems="center" gap={12}>
                <XStack width={24} height={24} borderRadius="var(--radius)" backgroundColor="var(--neutral-800)" display="flex" alignItems="center" justifyContent="center">
                  <Box size={14} color="var(--neutral-500)" />
                </XStack>
                No framework lock-in
              </XStack>
            </GuiBox>
          </GuiBox>
        </MotionBox>

        {/* Remote Agents Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GuiBox textAlign="center" marginBottom={48}>
            <Paragraph
              display="inline-flex" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8} borderWidth={1} marginBottom={24}
              style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}4d` }}
            >
              Remote Agents
            </Paragraph>
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Secure remote execution for teams
            </H2>
          </GuiBox>

          <Grid display="grid" gap={24} marginBottom={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
            {[
              { icon: Zap, title: "Parallel runs", desc: "Execute across repos simultaneously" },
              { icon: Users, title: "Shared workspaces", desc: "Collaborate via shared environments" },
              { icon: Shield, title: "Quality gates", desc: "Enforce policy before PR/merge" },
              { icon: Lock, title: "Isolation", desc: "Safe installs and builds" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <MotionBox
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  padding={20} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)" textAlign="center"
                >
                  <XStack width={40} height={40} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-800)" display="flex" alignItems="center" justifyContent="center" marginBottom={16} marginHorizontal="auto">
                    <Icon width={20} height={20} color="var(--neutral-400)" />
                  </XStack>
                  <H3 fontSize="var(--text-base)" lineHeight="var(--leading-base)" fontWeight="600" color="var(--foreground)" marginBottom={4}>{item.title}</H3>
                  <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">{item.desc}</Paragraph>
                </MotionBox>
              );
            })}
          </Grid>

          <GuiBox textAlign="center">
            <Link
              to="/remote"
              display="inline-flex" alignItems="center" paddingHorizontal={20} paddingVertical={10} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
            >
              Enable Remote Agents
              <GuiBox render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></GuiBox>
            </Link>
          </GuiBox>
        </MotionBox>

        {/* Hanzo AI API Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="var(--border-strong)" padding={32} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.1), transparent)" $md={{ padding: 48 }}
        >
          <Grid display="grid" gap={32} alignItems="flex-start" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <div>
              <Paragraph
                display="inline-flex" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8} borderWidth={1} marginBottom={24}
                style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}4d` }}
              >
                Hanzo AI API
              </Paragraph>
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
                One API for models + tools.
              </H2>
              <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" marginBottom={24}>
                Streaming, tool calling, and agent execution behind a single endpoint. Compatible with existing OpenAI SDKs by switching the base URL.
              </Paragraph>
              <Anchor
                href="https://docs.hanzo.ai/api"
                target="_blank"
                rel="noreferrer noopener"
                display="inline-flex" alignItems="center" paddingHorizontal={20} paddingVertical={10} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor="var(--foreground)" color="var(--pure-black)" hoverStyle={{ backgroundColor: "var(--neutral-200)" }}
              >
                View API reference
                <GuiBox render="span" display="inline-flex" alignItems="center" marginLeft={8}><ExternalLink size={16} /></GuiBox>
              </Anchor>
            </div>
            <CodeTabs tabs={API_CODE_EXAMPLES} />
          </Grid>
        </MotionBox>
      </GuiBox>
    </GuiBox>
  );
};

export default DeveloperExperienceSection;
