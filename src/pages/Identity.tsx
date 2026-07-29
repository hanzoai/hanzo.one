import { Box, Button, ChromeText, Grid, H1, H2, H3, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { User, UserCheck, Shield, Lock, UserCog, Key, Fingerprint, History } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Identity = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Navbar />
      
      {/* Hero Section */}
      <Box render="section" paddingVertical={80} position="relative" $lg={{ paddingVertical: 128 }}>
        <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), transparent)"></Box>
        <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} position="relative" zIndex={10} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box textAlign="center" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={64}>
            <Box backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={4} display="inline-block" marginBottom={16}>
              <Text color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">Identity Management</Text>
            </Box>
            <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to right, var(--foreground), var(--foreground))" $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $lg={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
              Hanzo Identity
            </H1>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32}>
              Secure, scalable identity and access management for your applications.
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
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            <YStack backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={24} display="flex" flexDirection="column" alignItems="center" $md={{ gridColumn: "span 1 / span 1" }}>
              <XStack width={80} height={80} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
                <User size={40} color="var(--foreground)" />
              </XStack>
              <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="700" marginBottom={8}>User Authentication</H3>
              <Paragraph color="var(--neutral-300)" textAlign="center">
                Multi-factor authentication, social logins, and passwordless options
              </Paragraph>
            </YStack>
            
            <YStack backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={24} display="flex" flexDirection="column" alignItems="center" $md={{ gridColumn: "span 1 / span 1" }}>
              <XStack width={80} height={80} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
                <Shield size={40} color="var(--foreground)" />
              </XStack>
              <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="700" marginBottom={8}>Access Control</H3>
              <Paragraph color="var(--neutral-300)" textAlign="center">
                Role-based access control, custom claims, and fine-grained permissions
              </Paragraph>
            </YStack>
            
            <YStack backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={24} display="flex" flexDirection="column" alignItems="center" $md={{ gridColumn: "span 1 / span 1" }}>
              <XStack width={80} height={80} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
                <Lock size={40} color="var(--foreground)" />
              </XStack>
              <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="700" marginBottom={8}>Enterprise SSO</H3>
              <Paragraph color="var(--neutral-300)" textAlign="center">
                SAML, OIDC, and enterprise identity provider integrations
              </Paragraph>
            </YStack>
          </Grid>
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
              Complete identity management solutions for every authentication and authorization need
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
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><UserCheck size={40} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>Multi-factor Authentication</H3>
              <Paragraph color="var(--neutral-300)">
                Secure access with SMS, email, authenticator apps, and biometric verification.
              </Paragraph>
            </MotionBox>
            
            <MotionBox 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-xl)" padding={24}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><UserCog size={40} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>User Management</H3>
              <Paragraph color="var(--neutral-300)">
                Comprehensive tools for user creation, profile management, and account recovery.
              </Paragraph>
            </MotionBox>
            
            <MotionBox 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-xl)" padding={24}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Key size={40} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>Single Sign-On (SSO)</H3>
              <Paragraph color="var(--neutral-300)">
                Seamless authentication across multiple applications with SAML and OIDC support.
              </Paragraph>
            </MotionBox>
            
            <MotionBox 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-xl)" padding={24}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Shield size={40} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>Role-Based Access Control</H3>
              <Paragraph color="var(--neutral-300)">
                Define and manage permissions with customizable roles and user groups.
              </Paragraph>
            </MotionBox>
            
            <MotionBox 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-xl)" padding={24}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Fingerprint size={40} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>Passwordless Authentication</H3>
              <Paragraph color="var(--neutral-300)">
                Secure login options without passwords using magic links, WebAuthn, and biometrics.
              </Paragraph>
            </MotionBox>
            
            <MotionBox 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-xl)" padding={24}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><History size={40} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>Audit & Compliance</H3>
              <Paragraph color="var(--neutral-300)">
                Comprehensive logging and reporting for user activities and access attempts.
              </Paragraph>
            </MotionBox>
          </Grid>
        </Box>
      </Box>
      
      {/* Enterprise Section */}
      <Box render="section" paddingVertical={80} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))">
        <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box textAlign="center" marginBottom={64}>
            <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>
              Enterprise-Ready Solutions
            </ChromeText>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
              Secure identity management that meets the highest compliance standards
            </Paragraph>
          </Box>
          
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <Box backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={32}>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Compliance & Security</H3>
              <Paragraph color="var(--neutral-300)" marginBottom={16}>
                Meet regulatory requirements with built-in compliance features.
              </Paragraph>
              <Box render="ul" rowGap={8} color="var(--neutral-300)">
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>SOC 2, GDPR, HIPAA, and PCI DSS compliance</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Data residency controls and regional isolation</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Automated security assessments</span>
                </XStack>
              </Box>
            </Box>
            
            <Box backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={32}>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Enterprise Identity</H3>
              <Paragraph color="var(--neutral-300)" marginBottom={16}>
                Seamlessly integrate with your existing identity infrastructure.
              </Paragraph>
              <Box render="ul" rowGap={8} color="var(--neutral-300)">
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Active Directory and LDAP integration</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Enterprise SSO with major identity providers</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Custom branding and white-labeling</span>
                </XStack>
              </Box>
            </Box>
            
            <Box backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={32}>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Customer Identity</H3>
              <Paragraph color="var(--neutral-300)" marginBottom={16}>
                Create seamless authentication experiences for your customers.
              </Paragraph>
              <Box render="ul" rowGap={8} color="var(--neutral-300)">
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Social login integrations (Google, Facebook, Apple, etc.)</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Progressive profiling and user segmentation</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Consent management for privacy compliance</span>
                </XStack>
              </Box>
            </Box>
            
            <Box backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={32}>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Developer Experience</H3>
              <Paragraph color="var(--neutral-300)" marginBottom={16}>
                Extensive SDKs and tools for seamless integration.
              </Paragraph>
              <Box render="ul" rowGap={8} color="var(--neutral-300)">
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>SDKs for all major languages and frameworks</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Comprehensive API documentation</span>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start">
                  <Text color="var(--foreground)" marginRight={8}>•</Text>
                  <span>Pre-built UI components for auth flows</span>
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
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Secure Your Applications</H2>
              <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32} maxWidth="var(--container-prose)" marginHorizontal="auto">
                Get started with Hanzo Identity today and implement secure authentication in minutes.
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

export default Identity;
