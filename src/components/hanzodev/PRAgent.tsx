import { Box, Grid, H2, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { GitPullRequest, MessageSquare, Shield, Clock } from "lucide-react";

const PRAgent = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), var(--neutral-900))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <Grid display="grid" gap={64} alignItems="center" $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <XStack backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={4} display="inline-flex" alignItems="center" marginBottom={24}>
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><GitPullRequest size={16} color="var(--foreground)" /></Box>
              <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)">PR Agent</Text>
            </XStack>
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Resolve Pull Requests 10x Faster.
            </H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32}>
              Bring-in @hanzo-dev into any conversation on GitHub to automatically resolve feedback in the speed.
            </Paragraph>

            <Box rowGap={24}>
              <XStack display="flex" gap={16}>
                <Box backgroundColor="rgb(255 255 255 / 0.2)" padding={12} borderRadius="var(--radius-lg)">
                  <MessageSquare size={24} color="var(--foreground)" />
                </Box>
                <div>
                  <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={4}>Fast revisions.</H3>
                  <Paragraph color="var(--neutral-300)">
                    Skip the back-and-forth. Mention @hanzo-dev in a review comment to automatically resolve feedback in the speed.
                  </Paragraph>
                </div>
              </XStack>

              <XStack display="flex" gap={16}>
                <Box backgroundColor="rgb(255 255 255 / 0.2)" padding={12} borderRadius="var(--radius-lg)">
                  <Clock size={24} color="var(--foreground)" />
                </Box>
                <div>
                  <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={4}>Acclerate not just your product development, but your code quality.</H3>
                  <Paragraph color="var(--neutral-300)">
                    Automatically solve conflicts, add tests, docs, and more. Everything you need to ship better code, faster.
                  </Paragraph>
                </div>
              </XStack>

              <XStack display="flex" gap={16}>
                <Box backgroundColor="rgb(255 255 255 / 0.2)" padding={12} borderRadius="var(--radius-lg)">
                  <Shield size={24} color="var(--foreground)" />
                </Box>
                <div>
                  <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={4}>AI Agents You Can Trust.</H3>
                  <Paragraph color="var(--neutral-300)">
                    With complete oversight of every thought and step you are always in full control. Provide feedback and and roll-back in one click if you need to.
                  </Paragraph>
                </div>
              </XStack>
            </Box>
          </MotionBox>

          <MotionBox
            position="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-lg)" overflow="hidden">
              <Box padding={16} backgroundColor="var(--surface-overlay)" borderBottomWidth={1} borderColor="var(--border-strong)">
                <XStack display="flex" columnGap={8}>
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                </XStack>
              </Box>
              <Box padding={24}>
                <Box backgroundColor="var(--surface-overlay)" borderRadius="var(--radius-lg)" padding={16} marginBottom={16}>
                  <XStack display="flex" alignItems="flex-start" gap={12} marginBottom={16}>
                    <Box width={32} height={32} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-700)"></Box>
                    <div>
                      <Box fontWeight="500">Senior Developer</Box>
                      <Box color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">2 hours ago</Box>
                      <Box marginTop={8} padding={12} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-lg)">
                        <p>Could you add error handling to this component and improve the accessibility?</p>
                      </Box>
                    </div>
                  </XStack>

                  <XStack display="flex" alignItems="flex-start" gap={12}>
                    <XStack width={32} height={32} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-700)" display="flex" alignItems="center" justifyContent="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="700">H</XStack>
                    <div>
                      <Box fontWeight="500">Hanzo Dev</Box>
                      <Box color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">1 hour ago</Box>
                      <Box marginTop={8} padding={12} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-lg)">
                        <p>I've added comprehensive error handling with try/catch blocks and implemented proper ARIA attributes to improve accessibility. The changes have been committed to the PR.</p>
                      </Box>
                      <Box backgroundColor="var(--surface-overlay)" borderRadius="var(--radius)" marginTop={12} padding={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" borderWidth={1} borderColor="var(--neutral-700)">
                        <Box color="var(--foreground)">+ 15 lines added</Box>
                        <Box color="var(--foreground)">- 3 lines removed</Box>
                      </Box>
                    </div>
                  </XStack>
                </Box>

                <XStack display="flex" justifyContent="space-between" alignItems="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                  <XStack display="flex" alignItems="center" gap={8}>
                    <XStack width={24} height={24} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" display="flex" alignItems="center" justifyContent="center" color="var(--pure-black)">✓</XStack>
                    <Text color="var(--foreground)">Changes approved</Text>
                  </XStack>
                  <Box color="var(--neutral-400)">Ready to merge</Box>
                </XStack>
              </Box>
            </Box>

            <Box position="absolute" bottom={-24} right={-24} width={96} height={96} backgroundColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
            <Box position="absolute" top={-24} left={-24} width={96} height={96} backgroundColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default PRAgent;
