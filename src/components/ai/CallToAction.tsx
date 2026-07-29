import { Anchor, Box, Button, H2, H3, MotionBox, Paragraph, XStack, YStack } from '@/gui'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, BookOpen, MessageCircle } from 'lucide-react';

const CallToAction = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} position="relative" overflow="hidden" backgroundImage="linear-gradient(to bottom, var(--pure-black), var(--neutral-950))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      {/* Background elements */}
      <Box position="absolute" top={0} left={0} width="100%" height="100%" overflow="hidden" pointerEvents="none">
        <Box position="absolute" top={0} left={0} width="66.666667%" height="50%" backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(64px)" x="-25%" y="-25%"></Box>
        <Box position="absolute" bottom={0} right={0} width="100%" height="50%" backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(64px)" x="25%" y="25%"></Box>
      </Box>

      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <YStack display="flex" flexDirection="column" alignItems="center" textAlign="center" maxWidth="56rem" marginHorizontal="auto" marginBottom={64}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
              Start Building the Future of AI
            </H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32}>
              Join thousands of developers and companies who are building intelligent, 
              scalable applications with Hanzo's AI Engineering Platform
            </Paragraph>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            display="flex" flexDirection="column" gap={16} $sm={{ flexDirection: "row" }}
          >
            <Button size="lg" backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
              Get Started Free
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
            </Button>
            <Button size="lg" variant="outline" color="var(--white)">
              Schedule a Demo
            </Button>
          </MotionBox>
        </YStack>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
        >
          <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
            <XStack height={48} width={48} borderRadius="var(--radius-lg)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={24}>
              <BookOpen size={24} color="var(--foreground)" />
            </XStack>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={12}>Documentation</H3>
            <Paragraph color="var(--neutral-400)" marginBottom={24}>
              Comprehensive guides, tutorials, and API references to help you build with Hanzo AI.
            </Paragraph>
            <Anchor href="#" group display="flex" alignItems="center" color="var(--foreground)" hoverStyle={{ color: "var(--foreground)" }}>
              Explore Docs
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8} $group-hover={{ x: 4 }}><ArrowRight size={16} /></Box>
            </Anchor>
          </Box>

          <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
            <XStack height={48} width={48} borderRadius="var(--radius-lg)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={24}>
              <Code size={24} color="var(--foreground)" />
            </XStack>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={12}>Quickstart</H3>
            <Paragraph color="var(--neutral-400)" marginBottom={24}>
              Get up and running quickly with our step-by-step quickstart guides and example projects.
            </Paragraph>
            <Anchor href="#" group display="flex" alignItems="center" color="var(--foreground)" hoverStyle={{ color: "var(--foreground)" }}>
              Try Quickstart
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8} $group-hover={{ x: 4 }}><ArrowRight size={16} /></Box>
            </Anchor>
          </Box>

          <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
            <XStack height={48} width={48} borderRadius="var(--radius-lg)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={24}>
              <MessageCircle size={24} color="var(--foreground)" />
            </XStack>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={12}>Community</H3>
            <Paragraph color="var(--neutral-400)" marginBottom={24}>
              Join our growing community of AI engineers, get support, and share your experiences.
            </Paragraph>
            <Anchor href="#" group display="flex" alignItems="center" color="var(--foreground)" hoverStyle={{ color: "var(--foreground)" }}>
              Join Community
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8} $group-hover={{ x: 4 }}><ArrowRight size={16} /></Box>
            </Anchor>
          </Box>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          marginTop={80} borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.1))"
        >
          <YStack display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" $md={{ flexDirection: "row" }}>
            <Box marginBottom={24} $md={{ marginBottom: 0 }}>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)" marginBottom={8}>Ready to get started?</H3>
              <Paragraph color="var(--neutral-300)">Sign up for free and start building with Hanzo AI today.</Paragraph>
            </Box>
            <YStack display="flex" flexDirection="column" gap={16} $sm={{ flexDirection: "row" }}>
              <Button size="lg" backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
                Create Free Account
              </Button>
              <Button size="lg" variant="outline" color="var(--white)">
                Contact Sales
              </Button>
            </YStack>
          </YStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default CallToAction;
