import { Box, Button, Grid, H2, H3, Link, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";

import { ArrowRight, Users, Crown, Clock, Monitor, Laptop, Gauge, Shield, Play, TestTube, Globe } from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const AgentCodeDemo = () => {
  return (
    <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden">
      {/* IDE header */}
      <XStack display="flex" alignItems="center" justifyContent="space-between" paddingHorizontal={16} paddingVertical={8} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)">
        <XStack display="flex" alignItems="center" gap={16}>
          <XStack display="flex" gap={6}>
            <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" />
            <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" />
            <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" />
          </XStack>
          <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">Hanzo AI</Text>
        </XStack>
        <XStack display="flex" alignItems="center" gap={8}>
          <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)">signal-server</Text>
        </XStack>
      </XStack>

      <Grid display="grid" gridTemplateColumns="repeat(12, minmax(0, 1fr))">
        {/* File tree */}
        <Box gridColumn="span 3 / span 3" borderRightWidth={1} borderColor="var(--neutral-800)" padding={12} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontFamily="var(--font-mono)">
          <Box color="var(--neutral-500)" marginBottom={8}>service</Box>
          <Box marginLeft={8} rowGap={4}>
            <Box color="var(--neutral-400)">RateLimiter.java</Box>
            <Box color="var(--neutral-400)">RateLimitConfig.java</Box>
            <Box color="var(--foreground)" backgroundColor="var(--neutral-800)" paddingHorizontal={8} paddingVertical={2} borderRadius="var(--radius)">RateLimitMetrics.java</Box>
          </Box>
          <Box color="var(--neutral-500)" marginTop={12} marginBottom={8}>delivery</Box>
          <Box marginLeft={8} rowGap={4}>
            <Box color="var(--neutral-400)">MessageDeliveryLoop.java</Box>
            <Box color="var(--neutral-400)">NoopDeliveryLoop.java</Box>
          </Box>
        </Box>

        {/* Code panel */}
        <Box gridColumn="span 5 / span 5" borderRightWidth={1} borderColor="var(--neutral-800)" padding={16} fontFamily="var(--font-mono)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
          <Box color="var(--neutral-500)" marginBottom={8}>package service.limits;</Box>
          <Box rowGap={4}>
            <div><Text color="var(--foreground)">import</Text> java.time.Instant;</div>
            <div><Text color="var(--foreground)">import</Text> java.util.concurrent.*;</div>
            <Box marginTop={12}><Text color="var(--foreground)">public class</Text> <Text color="var(--foreground)">RateLimitMetrics</Text> {"{"}</Box>
            <Box marginLeft={16} color="var(--foreground)">// allowedCount, blockedCount, resetCount</Box>
            <Box marginLeft={16}><Text color="var(--foreground)">private final</Text> AtomicLong allowed = <Text color="var(--foreground)">new</Text> AtomicLong();</Box>
            <Box marginLeft={16}><Text color="var(--foreground)">private final</Text> AtomicLong blocked = <Text color="var(--foreground)">new</Text> AtomicLong();</Box>
            <Box marginTop={12} marginLeft={16}><Text color="var(--foreground)">public void</Text> <Text color="var(--foreground)">markAllowed</Text>() {"{"}</Box>
            <Box marginLeft={32}>allowed.incrementAndGet();</Box>
            <Box marginLeft={32}>lastAllowed.set(Instant.now());</Box>
            <Box marginLeft={16}>{"}"}</Box>
          </Box>
        </Box>

        {/* Task panel */}
        <Box gridColumn="span 4 / span 4" padding={16}>
          <Box marginBottom={16}>
            <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={4}>Task</Box>
            <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)">Improve the rate limiting implementation.</Box>
          </Box>
          <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" padding={12} marginBottom={16}>
            <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginBottom={8}>Thought for 2 minutes.</Box>
            <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)">I'll proceed with implementing all the improvements starting with Enhanced Metrics and Observability...</Box>
          </Box>
          <XStack display="flex" alignItems="center" gap={8} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
            <MotionBox animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" />
            <Text color="var(--neutral-400)">Hanzo AI thinking...</Text>
          </XStack>
        </Box>
      </Grid>
    </Box>
  );
};

const features = [
  {
    icon: Users,
    title: "Multi-Agent Execution",
    description: "Hanzo dispatches the same task to multiple agents at once: Hanzo, Claude Code, Codex, Gemini.",
  },
  {
    icon: Crown,
    title: "LLM Consensus",
    description: "Every task is implemented differently by each agent, and LLM consensus selects the best implementation for users.",
  },
  {
    icon: Clock,
    title: "Long running tasks",
    description: "Support for long-running tasks that require extended hours of execution in isolated sandbox environments where agents can install, implement, and test.",
  },
  {
    icon: Monitor,
    title: "Monitor agents concurrently",
    description: "One view to monitor all agents' implementations for individuals and teams collaborating on different projects.",
  },
];

const ideFeatures = [
  {
    icon: Laptop,
    title: "Hanzo Agents on +35 IDEs",
    description: "Hanzo Agents run tasks on the Hanzo IDE, VSCode, JetBrains & more...",
  },
  {
    icon: Gauge,
    title: "Large code base context",
    description: "Hanzo coding agent is optimized for both small and very large production-grade codebases that require extensive context.",
  },
  {
    icon: Shield,
    title: "Controllable Autonomy",
    description: "Control the level of autonomy you want to grant the Hanzo coding agent while it executes your tasks.",
  },
  {
    icon: Play,
    title: "Plan, Execute, Test",
    description: "Hanzo agents are designed to implement tasks at a production level with detailed planning, high-precision execution, and a thorough testing phase.",
  },
  {
    icon: Globe,
    title: "Browser Agent",
    description: "The Hanzo coding agent includes many built-in tools, including the browser agent, which provides autonomy in testing and iterating on its implementation.",
  },
];

const MultiAgentSection = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--pure-black)" position="relative" overflow="hidden">
      {/* Background gradient */}
      <Box position="absolute" top="50%" left="50%" x="-50%" y="-50%" width="600px" height="600px" borderRadius="var(--radius-full)" opacity={0.2}
        style={{
          background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
          filter: "blur(100px)",
        }}
      />

      <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          textAlign="center" marginBottom={64}
        >
          <Paragraph
            display="inline-flex" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8} borderWidth={1} marginBottom={24}
            style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}4d` }}
          >
            Hanzo Autonomous Agent
          </Paragraph>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            Run multiple autonomous agents in parallel
            <br />
            locally and remotely
          </H2>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
            Multi-agent remote execution with LLM consensus to select the best execution for each task.
          </Paragraph>
          <Button
            size="lg"
            marginTop={32} color="var(--foreground)"
            style={{ backgroundColor: BRAND_COLOR }}
            asChild
          >
            <Link to="/signup">
              Get Started Now
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
            </Link>
          </Button>
        </MotionBox>

        {/* Agent Code Demo */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          marginBottom={64}
        >
          <AgentCodeDemo />
        </MotionBox>

        {/* Multi-agent features */}
        <Grid display="grid" gap={24} marginBottom={96} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <MotionBox
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
              >
                <XStack
                  width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}
                  style={{ backgroundColor: `${BRAND_COLOR}20` }}
                >
                  <Icon width={24} height={24} style={{ color: BRAND_COLOR }} />
                </XStack>
                <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={8}>{feature.title}</H3>
                <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{feature.description}</Paragraph>
              </MotionBox>
            );
          })}
        </Grid>

        {/* IDE Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          textAlign="center" marginBottom={48}
        >
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Hanzo Agents on +35 IDEs
          </H3>
          <Paragraph color="var(--neutral-400)" marginBottom={24}>
            Hanzo Agents run tasks on the Hanzo IDE, VSCode, JetBrains & more...
          </Paragraph>
          <Button
            size="lg"
            color="var(--foreground)"
            style={{ backgroundColor: BRAND_COLOR }}
            asChild
          >
            <Link to="/download">
              Get Started Now
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
            </Link>
          </Button>
        </MotionBox>

        {/* IDE features */}
        <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {ideFeatures.slice(1).map((feature, index) => {
            const Icon = feature.icon;
            return (
              <MotionBox
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
              >
                <XStack
                  width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}
                  style={{ backgroundColor: `${BRAND_COLOR}20` }}
                >
                  <Icon width={24} height={24} style={{ color: BRAND_COLOR }} />
                </XStack>
                <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={8}>{feature.title}</H3>
                <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{feature.description}</Paragraph>
              </MotionBox>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default MultiAgentSection;
