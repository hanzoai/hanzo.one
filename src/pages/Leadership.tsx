import { Anchor, Box, Button, ChromeText, Grid, H2, Helmet, MotionBox, Paragraph, Toaster, XStack, YStack } from '@/gui'

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, Database, BookOpen, Linkedin, Github, Twitter } from "lucide-react";

const Leadership = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)">
      <Helmet>
        <title>Leadership - Hanzo AI</title>
        <meta name="description" content="Meet the leadership team at Hanzo AI, a Techstars company founded in 2013 to democratize access to AI." />
      </Helmet>
      <Navbar />
      <main>
        <Box render="section" paddingVertical={128} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box position="absolute" top={80} right={80} width={256} height={256} backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
          <Box position="absolute" bottom={-128} left={-128} width={384} height={384} backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
          
          <Box maxWidth="var(--container-max)" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              textAlign="center" marginBottom={64}
            >
              <Box display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" marginBottom={24}>
                Founded in 2013 • Techstars Company
              </Box>
              <ChromeText 
                as="h1" 
                fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
              >
                Our Leadership
              </ChromeText>
              <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
                Meet the team behind Hanzo AI, founded in 2013 to democratize access to Amazon-level AI infrastructure for everyone.
              </Paragraph>
            </MotionBox>
            
            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={48} marginBottom={96} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              <MotionBox 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32}
              >
                <YStack display="flex" flexDirection="column" marginBottom={24} $md={{ flexDirection: "row", alignItems: "flex-start" }}>
                  <Box width={128} height={128} borderRadius="var(--radius-xl)" backgroundColor="var(--neutral-800)" marginBottom={16} $md={{ marginBottom: 0, marginRight: 24 }}></Box>
                  <div>
                    <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={4}>Michael Kelling</H2>
                    <Paragraph color="var(--neutral-400)" fontWeight="500" marginBottom={16}>Chief Executive Officer</Paragraph>
                    <Paragraph color="var(--neutral-300)" marginBottom={24}>
                      As CEO, Michael leads Hanzo's mission to democratize access to AI with a focus on sustainable, responsible technology that empowers developers worldwide.
                    </Paragraph>
                    <XStack display="flex" columnGap={12}>
                      <Anchor tap href="https://linkedin.com/company/hanzo-ai" target="_blank" rel="noopener noreferrer" padding={8} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
                        <Linkedin size={20} color="var(--neutral-300)" />
                      </Anchor>
                      <Anchor tap href="https://twitter.com/hanzoai" target="_blank" rel="noopener noreferrer" padding={8} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
                        <Twitter size={20} color="var(--neutral-300)" />
                      </Anchor>
                      <Anchor tap href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer" padding={8} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
                        <Github size={20} color="var(--neutral-300)" />
                      </Anchor>
                    </XStack>
                  </div>
                </YStack>
                
                <XStack display="flex" flexWrap="wrap" gap={12} marginTop={16}>
                  <XStack display="flex" alignItems="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)">
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Briefcase size={16} color="var(--foreground)" /></Box>
                    <span>20+ years experience</span>
                  </XStack>
                  <XStack display="flex" alignItems="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)">
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Database size={16} color="var(--foreground)" /></Box>
                    <span>AI Infrastructure</span>
                  </XStack>
                  <XStack display="flex" alignItems="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)">
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><BookOpen size={16} color="var(--foreground)" /></Box>
                    <span>3x Startup Founder</span>
                  </XStack>
                </XStack>
              </MotionBox>
              
              <MotionBox 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32}
              >
                <YStack display="flex" flexDirection="column" marginBottom={24} $md={{ flexDirection: "row", alignItems: "flex-start" }}>
                  <Box width={128} height={128} borderRadius="var(--radius-xl)" backgroundColor="var(--neutral-800)" marginBottom={16} $md={{ marginBottom: 0, marginRight: 24 }}></Box>
                  <div>
                    <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={4}>Sarah Chen</H2>
                    <Paragraph color="var(--neutral-400)" fontWeight="500" marginBottom={16}>Chief Technology Officer</Paragraph>
                    <Paragraph color="var(--neutral-300)" marginBottom={24}>
                      Sarah drives Hanzo's technical vision and engineering culture, bringing expertise from her background at leading AI research labs and tech companies.
                    </Paragraph>
                    <XStack display="flex" columnGap={12}>
                      <Anchor tap href="https://linkedin.com/company/hanzo-ai" target="_blank" rel="noopener noreferrer" padding={8} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
                        <Linkedin size={20} color="var(--neutral-300)" />
                      </Anchor>
                      <Anchor tap href="https://twitter.com/hanzoai" target="_blank" rel="noopener noreferrer" padding={8} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
                        <Twitter size={20} color="var(--neutral-300)" />
                      </Anchor>
                      <Anchor tap href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer" padding={8} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
                        <Github size={20} color="var(--neutral-300)" />
                      </Anchor>
                    </XStack>
                  </div>
                </YStack>
                
                <XStack display="flex" flexWrap="wrap" gap={12} marginTop={16}>
                  <XStack display="flex" alignItems="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)">
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Briefcase size={16} color="var(--foreground)" /></Box>
                    <span>15+ years experience</span>
                  </XStack>
                  <XStack display="flex" alignItems="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)">
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Database size={16} color="var(--foreground)" /></Box>
                    <span>ML Systems</span>
                  </XStack>
                  <XStack display="flex" alignItems="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)">
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><BookOpen size={16} color="var(--foreground)" /></Box>
                    <span>Ph.D. in Computer Science</span>
                  </XStack>
                </XStack>
              </MotionBox>
            </Grid>
            
            <Box textAlign="center">
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24}>Join Our Team</H2>
              <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={32}>
                We're always looking for talented individuals who are passionate about AI and building the future of technology.
              </Paragraph>
              <Button size="lg" backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
                View Open Positions
              </Button>
            </Box>
          </Box>
        </Box>
      </main>
      <Footer />
      <Toaster />
    </Box>
  );
};

export default Leadership;
