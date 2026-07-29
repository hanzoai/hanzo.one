import { Box, Button, ChromeText, Grid, H1, H2, H3, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'

import React from 'react';
import { motion } from "framer-motion";
import { Zap, Globe, Network, Server, Cloud, Code, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Edge = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Navbar />
      
      {/* Hero Section */}
      <Box render="section" paddingVertical={80} position="relative" $lg={{ paddingVertical: 128 }}>
        <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), transparent)"></Box>
        <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} position="relative" zIndex={10} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box textAlign="center" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={64}>
            <Box backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={4} display="inline-block" marginBottom={16}>
              <Text color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">Ultra-Low Latency</Text>
            </Box>
            <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to right, var(--foreground), var(--foreground))" $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $lg={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
              Hanzo Edge
            </H1>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32}>
              Deploy globally in milliseconds with ultra-low latency edge computing infrastructure.
            </Paragraph>
            <YStack display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}>
              <Button backgroundColor="var(--neutral-600)" color="var(--white)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
                Get Started
              </Button>
              <Button variant="outline" borderColor="var(--border-strong)" color="var(--white)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.2)" }}>
                View Documentation
              </Button>
            </YStack>
          </Box>
          
          {/* Hero Visual */}
          <Box position="relative" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={32} overflow="hidden">
            <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.05) 1px, transparent 1px)" backgroundSize="32px 32px" maskImage="linear-gradient(to bottom,white,transparent)"></Box>
            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              <YStack display="flex" flexDirection="column" alignItems="center" padding={16} backgroundColor="rgb(0 0 0 / 0.3)" borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--border-strong)">
                <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Globe size={40} color="var(--foreground)" /></Box>
                <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={8}>Global Network</H3>
                <Paragraph textAlign="center" color="var(--neutral-300)">Deploy to 200+ locations worldwide in seconds</Paragraph>
              </YStack>
              
              <YStack display="flex" flexDirection="column" alignItems="center" padding={16} backgroundColor="rgb(0 0 0 / 0.3)" borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--border-strong)">
                <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Zap size={40} color="var(--foreground)" /></Box>
                <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={8}>Ultra-Low Latency</H3>
                <Paragraph textAlign="center" color="var(--neutral-300)">Sub-50ms response times for 99% of global users</Paragraph>
              </YStack>
              
              <YStack display="flex" flexDirection="column" alignItems="center" padding={16} backgroundColor="rgb(0 0 0 / 0.3)" borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--border-strong)">
                <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Network size={40} color="var(--foreground)" /></Box>
                <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={8}>Built-in CDN</H3>
                <Paragraph textAlign="center" color="var(--neutral-300)">Integrated caching and content delivery</Paragraph>
              </YStack>
            </Grid>
          </Box>
        </Box>
      </Box>
      
      {/* Features */}
      <Box render="section" paddingVertical={80} position="relative">
        <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box textAlign="center" marginBottom={64}>
            <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>
              Key Features & Capabilities
            </ChromeText>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
              Powerful edge computing infrastructure for modern applications
            </Paragraph>
          </Box>
          
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            <MotionBox 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-xl)" padding={24}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Code size={40} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>Edge Functions</H3>
              <Paragraph color="var(--neutral-300)">
                Run serverless functions at the edge with zero cold starts and automatic scaling.
              </Paragraph>
            </MotionBox>
            
            <MotionBox 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-xl)" padding={24}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Cloud size={40} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>Edge Caching</H3>
              <Paragraph color="var(--neutral-300)">
                Intelligent caching strategies with automatic invalidation and stale-while-revalidate.
              </Paragraph>
            </MotionBox>
            
            <MotionBox 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-xl)" padding={24}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Server size={40} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>AI at the Edge</H3>
              <Paragraph color="var(--neutral-300)">
                Run AI inference at the edge with optimized runtimes for major ML frameworks.
              </Paragraph>
            </MotionBox>
            
            <MotionBox 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-xl)" padding={24}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Globe size={40} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>Global Network</H3>
              <Paragraph color="var(--neutral-300)">
                Deploy to 200+ locations worldwide with automatic regional failover and load balancing.
              </Paragraph>
            </MotionBox>
            
            <MotionBox 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-xl)" padding={24}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Network size={40} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>Real-time WebSockets</H3>
              <Paragraph color="var(--neutral-300)">
                Build real-time applications with globally distributed WebSocket infrastructure.
              </Paragraph>
            </MotionBox>
            
            <MotionBox 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-xl)" padding={24}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Shield size={40} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>Security & DDoS Protection</H3>
              <Paragraph color="var(--neutral-300)">
                Built-in security with firewall rules, DDoS protection, and bot mitigation.
              </Paragraph>
            </MotionBox>
          </Grid>
        </Box>
      </Box>
      
      {/* Use Cases */}
      <Box render="section" paddingVertical={80} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))">
        <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box textAlign="center" marginBottom={64}>
            <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>
              Common Use Cases
            </ChromeText>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
              Hanzo Edge powers a wide range of modern applications
            </Paragraph>
          </Box>
          
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <Box backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={32}>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Dynamic Web Applications</H3>
              <Paragraph color="var(--neutral-300)" marginBottom={16}>
                Build and deploy web applications that respond dynamically to user input and data changes.
              </Paragraph>
              <Box render="ul" rowGap={8} color="var(--neutral-300)">
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>E-commerce platforms with personalized recommendations</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Content sites with dynamic rendering based on user location</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>SaaS applications with global user bases</span>
                </XStack>
              </Box>
            </Box>
            
            <Box backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={32}>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>API Gateways & Backends</H3>
              <Paragraph color="var(--neutral-300)" marginBottom={16}>
                Create scalable API gateways and backends that handle authentication, routing, and transformation.
              </Paragraph>
              <Box render="ul" rowGap={8} color="var(--neutral-300)">
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>API proxies with rate limiting and caching</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Microservices orchestration and routing</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Webhook receivers and event processors</span>
                </XStack>
              </Box>
            </Box>
            
            <Box backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={32}>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Real-time Applications</H3>
              <Paragraph color="var(--neutral-300)" marginBottom={16}>
                Build collaborative and real-time applications with WebSockets and server-sent events.
              </Paragraph>
              <Box render="ul" rowGap={8} color="var(--neutral-300)">
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Collaborative document editing</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Live chat and messaging applications</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Real-time dashboards and analytics</span>
                </XStack>
              </Box>
            </Box>
            
            <Box backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={32}>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>AI-powered Applications</H3>
              <Paragraph color="var(--neutral-300)" marginBottom={16}>
                Deploy AI models at the edge for fast inference and personalized experiences.
              </Paragraph>
              <Box render="ul" rowGap={8} color="var(--neutral-300)">
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Content moderation and filtering</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Recommendation engines with low latency</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Image and video processing at the edge</span>
                </XStack>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* CTA Section */}
      <Box render="section" paddingVertical={80}>
        <Box maxWidth="64rem" marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box borderRadius="var(--radius-2xl)" padding={32} borderWidth={1} borderColor="var(--border-strong)" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" $md={{ padding: 48 }}>
            <Box textAlign="center">
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Deploy Globally in Seconds</H2>
              <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32} maxWidth="var(--container-prose)" marginHorizontal="auto">
                Get started with Hanzo Edge today and experience ultra-low latency computing at the edge.
              </Paragraph>
              <YStack display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}>
                <Button backgroundColor="var(--neutral-600)" color="var(--white)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
                  Sign Up Free
                </Button>
                <Button variant="outline" borderColor="var(--border-strong)" color="var(--white)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.2)" }}>
                  Contact Sales
                </Button>
              </YStack>
            </Box>
          </Box>
        </Box>
      </Box>
      
      <Footer />
    </Box>
  );
};

export default Edge;
