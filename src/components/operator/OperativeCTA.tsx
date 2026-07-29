import { Anchor, Box, Button, Grid, H2, MotionBox, Paragraph, Text, YStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, ExternalLink } from "lucide-react";

const OperativeCTA = () => {
  return (
    <Box render="section" paddingVertical={64} position="relative" overflow="hidden">
      {/* Background gradient */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))"></Box>
      <Box position="absolute" top={0} left={0} width="100%" height="33.333333%" backgroundImage="linear-gradient(to bottom, var(--neutral-950), transparent)"></Box>
      <Box position="absolute" top="33.333333%" left="50%" x="-50%" y="-50%" width="50%" height="50%" backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box marginHorizontal="auto" paddingHorizontal={16} paddingVertical={24} position="relative" zIndex={10} maxWidth="1618px">
        <Box textAlign="center" maxWidth="var(--container-prose)" marginHorizontal="auto">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)" $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>
              Ready to Experience Self-Operating Computing?
            </H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)">
              Join the community of developers, researchers, and enthusiasts 
              pioneering the future of human-AI collaboration.
            </Paragraph>
            
            <YStack display="flex" flexDirection="column" justifyContent="center" $sm={{ flexDirection: "row" }}>
              <Button size="sm" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={16} paddingVertical={8}>
                <Anchor tap href="https://github.com/hanzoai/operative" display="flex" alignItems="center" gap={8}>
                  <Github size={20} />
                  Star on GitHub
                </Anchor>
              </Button>
              <Button size="sm" variant="outline" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={16} paddingVertical={8} color="var(--white)" borderColor="rgb(255 255 255 / 0.2)" backgroundColor="rgb(255 255 255 / 0.05)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}>
                <Anchor tap href="https://discord.gg/XthHQQj" display="flex" alignItems="center" gap={8}>
                  Join Discord Community
                </Anchor>
              </Button>
            </YStack>
            
            <Grid marginTop={32} display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" maxWidth="42rem" marginHorizontal="auto" $sm={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              <Anchor tap 
                href="https://blog.hanzo.ai/operative"
                display="flex" flexDirection="column" alignItems="center" padding={16} borderRadius="var(--radius-xl)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}
              >
                <ExternalLink size={24} color="var(--foreground)" />
                <Text color="var(--white)" fontWeight="500">Read the Blog</Text>
              </Anchor>
              <Anchor tap 
                href="https://twitter.com/hanzoai"
                display="flex" flexDirection="column" alignItems="center" padding={16} borderRadius="var(--radius-xl)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}
              >
                <Twitter size={24} color="var(--foreground)" />
                <Text color="var(--white)" fontWeight="500">Follow Updates</Text>
              </Anchor>
              <Anchor tap 
                href="https://github.com/hanzoai/operative/contribute"
                display="flex" flexDirection="column" alignItems="center" padding={16} borderRadius="var(--radius-xl)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}
              >
                <Github size={24} color="var(--foreground)" />
                <Text color="var(--white)" fontWeight="500">Contribute</Text>
              </Anchor>
            </Grid>
          </MotionBox>
        </Box>
      </Box>
    </Box>
  );
};

export default OperativeCTA;