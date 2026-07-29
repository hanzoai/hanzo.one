import { Box, Button, ChromeText, Grid, H1, H2, H3, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Code, Terminal, Database, Server, Cpu, Network, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Functions = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Navbar />
      
      {/* Hero Section */}
      <Box render="section" paddingVertical={80} position="relative" $lg={{ paddingVertical: 128 }}>
        <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), transparent)"></Box>
        <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} position="relative" zIndex={10} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box textAlign="center" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={64}>
            <Box backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={4} display="inline-block" marginBottom={16}>
              <Text color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">Serverless Computing</Text>
            </Box>
            <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to right, var(--foreground), var(--foreground))" $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $lg={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
              Hanzo Functions
            </H1>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32}>
              Serverless function execution for any workload. Deploy code in seconds without managing infrastructure.
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
            <Box render="pre" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" overflowX="auto" backgroundColor="rgb(0 0 0 / 0.5)" padding={16} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--border-strong)" $sm={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-base)" }}>
              <Text render="code" color="var(--neutral-300)">
                <Text color="var(--foreground)">export</Text> <Text color="var(--foreground)">async function</Text> <Text color="var(--foreground)">handler</Text><Text color="var(--white)">(req, res) {'{'}</Text>
                <br/>
                <Text marginLeft={16}>// Process incoming data</Text>
                <br/>
                <Text marginLeft={16} color="var(--foreground)">const</Text> <Text color="var(--white)">{'{'} data {'}'} = </Text><Text color="var(--foreground)">await</Text> <Text color="var(--white)">req.json();</Text>
                <br/>
                <Text marginLeft={16} color="var(--foreground)">const</Text> <Text color="var(--white)">result = </Text><Text color="var(--foreground)">await</Text> <Text color="var(--foreground)">processData</Text><Text color="var(--white)">(data);</Text>
                <br/>
                <br/>
                <Text marginLeft={16}>// Return JSON response</Text>
                <br/>
                <Text marginLeft={16} color="var(--foreground)">return</Text> <Text color="var(--white)">Response.json({'{'}</Text>
                <br/>
                <Text marginLeft={32}>success: <Text color="var(--foreground)">true</Text>,</Text>
                <br/>
                <Text marginLeft={32}>data: result</Text>
                <br/>
                <Text marginLeft={16} color="var(--white)">{'}'})</Text>
                <br/>
                <Text color="var(--white)">{'}'}</Text>
              </Text>
            </Box>
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
              Deploy serverless functions that scale automatically and only run when needed
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
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>Multi-Language Support</H3>
              <Paragraph color="var(--neutral-300)">
                Write functions in JavaScript, TypeScript, Python, Go, or Rust with native runtime support.
              </Paragraph>
            </MotionBox>
            
            <MotionBox 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-xl)" padding={24}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Terminal size={40} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>Zero Cold Starts</H3>
              <Paragraph color="var(--neutral-300)">
                Our intelligent prediction system keeps functions warm for instant execution.
              </Paragraph>
            </MotionBox>
            
            <MotionBox 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-xl)" padding={24}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Database size={40} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>Native Database Access</H3>
              <Paragraph color="var(--neutral-300)">
                Seamless integration with Hanzo Datastore and Vector for persistent storage.
              </Paragraph>
            </MotionBox>
            
            <MotionBox 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-xl)" padding={24}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Server size={40} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>Edge Deployment</H3>
              <Paragraph color="var(--neutral-300)">
                Deploy to 200+ global edge locations for ultra-low latency responses.
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
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>Event-Driven Architecture</H3>
              <Paragraph color="var(--neutral-300)">
                Trigger functions from HTTP requests, webhooks, schedules, or database changes.
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
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>Security & Isolation</H3>
              <Paragraph color="var(--neutral-300)">
                Each function runs in an isolated environment with configurable permissions.
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
              Hanzo Functions powers a wide range of serverless applications
            </Paragraph>
          </Box>
          
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <Box backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={32}>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>API Backends</H3>
              <Paragraph color="var(--neutral-300)" marginBottom={16}>
                Build complete REST or GraphQL APIs with automatic scaling and no server management.
              </Paragraph>
              <Box render="ul" rowGap={8} color="var(--neutral-300)">
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Custom middleware for authentication and validation</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>API versioning and documentation generation</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Automatic OpenAPI schema generation</span>
                </XStack>
              </Box>
            </Box>
            
            <Box backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={32}>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Real-time Processing</H3>
              <Paragraph color="var(--neutral-300)" marginBottom={16}>
                Process events in real-time with automatic scaling for traffic spikes.
              </Paragraph>
              <Box render="ul" rowGap={8} color="var(--neutral-300)">
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Webhook handlers for third-party services</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Event-driven data transformation and enrichment</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Real-time analytics processing</span>
                </XStack>
              </Box>
            </Box>
            
            <Box backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={32}>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>AI/ML Inference</H3>
              <Paragraph color="var(--neutral-300)" marginBottom={16}>
                Deploy machine learning models for inference with built-in GPU acceleration.
              </Paragraph>
              <Box render="ul" rowGap={8} color="var(--neutral-300)">
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Image and text classification</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>AI chatbots and virtual assistants</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Real-time recommendations</span>
                </XStack>
              </Box>
            </Box>
            
            <Box backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={32}>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Scheduled Tasks</H3>
              <Paragraph color="var(--neutral-300)" marginBottom={16}>
                Run tasks on a schedule without maintaining a dedicated server.
              </Paragraph>
              <Box render="ul" rowGap={8} color="var(--neutral-300)">
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Periodic data cleanup and maintenance</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Scheduled reports and notifications</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Recurring data integration and ETL processes</span>
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
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Ready to Build?</H2>
              <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32} maxWidth="var(--container-prose)" marginHorizontal="auto">
                Get started with Hanzo Functions today and deploy your first serverless function in minutes.
              </Paragraph>
              <YStack display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}>
                <Button backgroundColor="var(--neutral-600)" color="var(--white)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
                  Sign Up Free
                </Button>
                <Button variant="outline" borderColor="var(--border-strong)" color="var(--white)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.2)" }}>
                  Read Documentation
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

export default Functions;
