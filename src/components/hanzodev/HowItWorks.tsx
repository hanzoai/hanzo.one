import { Box, Grid, H2, H3, MotionBox, Paragraph, Text, XStack, FILL} from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import {
  GitPullRequest,
  Sliders,
  Users,
  Monitor,
  FileText,
  TestTube,
  Rocket,
  ShieldCheck,
  Terminal,
  Laptop,
} from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const AUTONOMY_LEVELS = [
  {
    level: "Plan-only",
    description: "proposal + file list + diff preview",
  },
  {
    level: "Implement",
    description: "coherent multi-file edits with repo context",
  },
  {
    level: "Implement + test",
    description: "suites run automatically; logs attached",
  },
  {
    level: "Implement + PR",
    description: "ready PR with linked evidence",
  },
  {
    level: "Implement + deploy (gated)",
    description: "approvals + policy checks + audit",
  },
];

const HowItWorks = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $md={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        {/* Section header */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          textAlign="center" marginBottom={80}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            How It Works
          </H2>
          <Paragraph color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
            From task to production-ready pull request, with evidence at every step.
          </Paragraph>
        </MotionBox>

        {/* Step 1: Give it a task */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          marginBottom={80}
        >
          <Grid display="grid" gap={48} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <div>
              <XStack
                display="inline-flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={16}
                style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
              >
                <GitPullRequest size={14} />
                Step 1
              </XStack>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>
                Give it a task. Get back a PR.
              </H3>
              <Paragraph color="var(--neutral-400)" lineHeight="var(--leading-relaxed)">
                Hanzo Dev reads your repository structure, produces a coherent plan, edits multiple files,
                runs suites, benchmarks impact and generates a reviewable pull request—complete with diff
                and test evidence. Long-running work happens in isolated sandboxes.
              </Paragraph>
            </div>
            <Box backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}>
              <XStack display="flex" alignItems="center" gap={12} marginBottom={16}>
                <XStack display="flex" gap={6}>
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
                </XStack>
                <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" fontFamily="var(--font-mono)">hanzo dev</Text>
              </XStack>
              <Box rowGap={12} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                <Box color="var(--neutral-500)">$ hanzo dev "Add rate limiting to API"</Box>
                <Box color="var(--neutral-400)">Reading repository structure...</Box>
                <Box color="var(--neutral-400)">Creating implementation plan...</Box>
                <XStack display="flex" alignItems="center" gap={8}>
                  <Box width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" />
                  <Text color="var(--foreground)">Modified 4 files</Text>
                </XStack>
                <XStack display="flex" alignItems="center" gap={8}>
                  <Box width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" />
                  <Text color="var(--foreground)">Tests: 23/23 passing</Text>
                </XStack>
                <XStack display="flex" alignItems="center" gap={8}>
                  <Box width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" />
                  <Text color="var(--foreground)">PR #127 created with evidence</Text>
                </XStack>
              </Box>
            </Box>
          </Grid>
        </MotionBox>

        {/* Step 2: Autonomy levels */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          marginBottom={80}
        >
          <Grid display="grid" gap={48} alignItems="flex-start" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <Box $lg={{ order: 2 }}>
              <XStack
                display="inline-flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={16}
                style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
              >
                <Sliders size={14} />
                Step 2
              </XStack>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>
                Autonomy you can dial. Evidence you can trust.
              </H3>
              <Paragraph color="var(--neutral-400)" lineHeight="var(--leading-relaxed)" marginBottom={24}>
                Choose exactly how much autonomy to grant. Every level produces
                artifacts you can inspect, approve, or roll back.
              </Paragraph>
              <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)" fontStyle="italic">
                "Agents don't get admin; they get policies."
              </Paragraph>
            </Box>
            <Box backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} $lg={{ order: 1 }}>
              <Box rowGap={16}>
                {AUTONOMY_LEVELS.map((item, index) => (
                  <XStack
                    key={item.level}
                    display="flex" alignItems="flex-start" gap={16} padding={12} borderRadius="var(--radius-lg)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)"
                  >
                    <XStack
                      width={32} height={32} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" flexShrink={0} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontFamily="var(--font-mono)"
                      style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
                    >
                      {index + 1}
                    </XStack>
                    <div>
                      <Box fontWeight="500" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{item.level}</Box>
                      <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">{item.description}</Box>
                    </div>
                  </XStack>
                ))}
              </Box>
            </Box>
          </Grid>
        </MotionBox>

        {/* Step 3: Parallel agents */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          marginBottom={80}
        >
          <Grid display="grid" gap={48} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <div>
              <XStack
                display="inline-flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={16}
                style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
              >
                <Users size={14} />
                Step 3
              </XStack>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>
                Parallel agents. One best result.
              </H3>
              <Paragraph color="var(--neutral-400)" lineHeight="var(--leading-relaxed)">
                Dispatch the same task to several agents at once. Hanzo Dev ranks outputs by diff quality
                and test results, so you ship the strongest patch—not the first attempt.
              </Paragraph>
            </div>
            <Box backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}>
              <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={16}>
                {["Hanzo", "Claude Code", "Codex", "Gemini"].map((agent, i) => (
                  <Box
                    key={agent}
                    padding={16} borderRadius="var(--radius-lg)" borderWidth={1} borderColor={i === 0 ? "rgb(255 255 255 / 0.5)" : "var(--neutral-800)"} backgroundColor={i === 0 ? "rgb(255 255 255 / 0.1)" : "rgb(255 255 255 / 0.5)"}
                  >
                    <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)" marginBottom={8}>{agent}</Box>
                    <Box rowGap={4} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">
                      <div>Diff: {i === 0 ? "+42/-18" : i === 1 ? "+67/-31" : i === 2 ? "+89/-45" : "+55/-22"}</div>
                      <div>Tests: {i === 0 ? "23/23" : i === 1 ? "21/23" : i === 2 ? "19/23" : "22/23"}</div>
                    </Box>
                    {i === 0 && (
                      <Box
                        marginTop={8} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" paddingHorizontal={8} paddingVertical={4} borderRadius="var(--radius-full)" display="inline-block"
                        style={FILL}
                      >
                        Best result
                      </Box>
                    )}
                  </Box>
                ))}
              </Grid>
            </Box>
          </Grid>
        </MotionBox>

        {/* Step 4: Works where you work */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Grid display="grid" gap={48} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <Box $lg={{ order: 2 }}>
              <XStack
                display="inline-flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={16}
                style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
              >
                <Monitor size={14} />
                Step 4
              </XStack>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>
                Works where you work.
              </H3>
              <Paragraph color="var(--neutral-400)" lineHeight="var(--leading-relaxed)">
                IDE extensions for VS Code and JetBrains, a CLI for terminals and CI/CD pipelines,
                and remote sandboxes for heavy builds. Everything stays reviewable and reproducible.
              </Paragraph>
            </Box>
            <XStack display="flex" flexWrap="wrap" gap={16} $lg={{ order: 1 }}>
              {[
                { icon: Laptop, label: "VS Code" },
                { icon: Laptop, label: "JetBrains" },
                { icon: Terminal, label: "CLI" },
                { icon: Monitor, label: "Remote Sandbox" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <XStack
                    key={item.label}
                    display="flex" alignItems="center" gap={12} paddingHorizontal={16} paddingVertical={12} borderRadius="var(--radius-lg)" backgroundColor="var(--surface-overlay)" borderWidth={1} borderColor="var(--neutral-800)"
                  >
                    <Icon width={20} height={20} color="var(--neutral-400)" />
                    <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)">{item.label}</Text>
                  </XStack>
                );
              })}
            </XStack>
          </Grid>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default HowItWorks;
