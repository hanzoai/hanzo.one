import { Box, Button, Grid, H1, H2, H3, Link, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'
import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Clock,
  Mail,
  Bell,
  Check,
  ArrowRight,
  Lock,
  Building2,
  User,
  Briefcase,
  MessageSquare,
  LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export interface BlockchainProductProps {
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  features: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
  }>;
  useCases: Array<{
    title: string;
    description: string;
  }>;
  chains?: string[];
  codeExample?: {
    filename: string;
    code: string;
  };
}

const BlockchainProductLayout: React.FC<BlockchainProductProps> = ({
  name,
  tagline,
  description,
  icon: ProductIcon,
  accentColor,
  features,
  useCases,
  chains,
  codeExample,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    useCase: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [formExpanded, setFormExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Beta signup:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", role: "", useCase: "" });
      setFormExpanded(false);
    }, 3000);
  };

  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Navbar />

      {/* Hero Section */}
      <Box render="section" paddingTop={96} paddingBottom={64} paddingHorizontal={16} position="relative" overflow="hidden" $md={{ paddingHorizontal: 32 }}>
        <Box position="absolute" top={0} right={0} bottom={0} left={0} overflow="hidden" zIndex={0} pointerEvents="none">
          <Box
            position="absolute" top="50%" left="50%" x="-50%" y="-50%" width="800px" height="800px" borderRadius="var(--radius-full)" opacity={0.15}
            style={{
              background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
              filter: "blur(100px)",
            }}
          />
        </Box>

        <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
          <Grid display="grid" gap={48} alignItems="flex-start" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            {/* Left: Product Info */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Coming Soon Badge */}
              <XStack
                display="inline-flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" borderWidth={1} marginBottom={24}
                style={{ borderColor: `${accentColor}4d`, backgroundColor: `${accentColor}1a` }}
              >
                <Clock size={16} style={{ color: accentColor }} />
                <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" style={{ color: accentColor }}>
                  Private Beta
                </Text>
              </XStack>

              <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="500" letterSpacing="var(--tracking-tight)" marginBottom={16} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $lg={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
                <Text color="var(--foreground)">{name}</Text>
              </H1>
              <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-400)" marginBottom={24} $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>{tagline}</Paragraph>
              <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" marginBottom={32}>{description}</Paragraph>

              {/* Quick Features */}
              <Grid display="grid" gap={16} marginBottom={32} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                {features.slice(0, 4).map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <XStack key={idx} display="flex" alignItems="flex-start" gap={12}>
                      <XStack
                        width={32} height={32} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" flexShrink={0}
                        style={{ backgroundColor: `${accentColor}1a` }}
                      >
                        <Icon width={16} height={16} style={{ color: accentColor }} />
                      </XStack>
                      <div>
                        <H3 fontWeight="500" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{feature.title}</H3>
                        <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">{feature.description}</Paragraph>
                      </div>
                    </XStack>
                  );
                })}
              </Grid>

              <Link
                to="/blockchain"
                display="inline-flex" alignItems="center" gap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
              >
                <Box render="span" display="inline-flex" alignItems="center" rotate="180deg"><ArrowRight size={16} /></Box>
                Back to Web3 Overview
              </Link>
            </MotionBox>

            {/* Right: Signup Form */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-overlay)" padding={24} $md={{ padding: 32 }}
            >
              <XStack display="flex" alignItems="center" gap={12} marginBottom={24}>
                <XStack
                  width={48} height={48} borderRadius="var(--radius-xl)" display="flex" alignItems="center" justifyContent="center"
                  style={{ backgroundColor: `${accentColor}1a` }}
                >
                  <ProductIcon width={24} height={24} style={{ color: accentColor }} />
                </XStack>
                <div>
                  <H2 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)">Request Beta Access</H2>
                  <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Limited spots available</Paragraph>
                </div>
              </XStack>

              {submitted ? (
                <MotionBox
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  textAlign="center" paddingVertical={32}
                >
                  <XStack
                    width={64} height={64} borderRadius="var(--radius-full)" display="flex" alignItems="center" justifyContent="center" marginHorizontal="auto" marginBottom={16}
                    style={{ backgroundColor: `${accentColor}1a` }}
                  >
                    <Check size={32} style={{ color: accentColor }} />
                  </XStack>
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--foreground)" marginBottom={8}>Application Received!</H3>
                  <Paragraph color="var(--neutral-400)">
                    We'll review your request and reach out soon.
                  </Paragraph>
                </MotionBox>
              ) : (
                <Box onSubmit={handleSubmit} render="form" rowGap={16}>
                  <Grid display="grid" gap={16} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                    <div>
                      <Text render="label" display="block" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={6}>Full Name</Text>
                      <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={10} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-950)" borderWidth={1} borderColor="var(--neutral-800)">
                        <User size={16} color="var(--neutral-600)" />
                        <Box display="inline-block" minHeight={44}
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          render="input" flex={1} backgroundColor="transparent" color="var(--foreground)" placeholderTextColor="var(--neutral-600)" outlineStyle="none" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)"
                          required
                        />
                      </XStack>
                    </div>
                    <div>
                      <Text render="label" display="block" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={6}>Work Email</Text>
                      <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={10} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-950)" borderWidth={1} borderColor="var(--neutral-800)">
                        <Mail size={16} color="var(--neutral-600)" />
                        <Box display="inline-block" minHeight={44}
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          render="input" flex={1} backgroundColor="transparent" color="var(--foreground)" placeholderTextColor="var(--neutral-600)" outlineStyle="none" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)"
                          required
                        />
                      </XStack>
                    </div>
                  </Grid>

                  <Grid display="grid" gap={16} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                    <div>
                      <Text render="label" display="block" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={6}>Company</Text>
                      <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={10} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-950)" borderWidth={1} borderColor="var(--neutral-800)">
                        <Building2 size={16} color="var(--neutral-600)" />
                        <Box display="inline-block" minHeight={44}
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Inc"
                          render="input" flex={1} backgroundColor="transparent" color="var(--foreground)" placeholderTextColor="var(--neutral-600)" outlineStyle="none" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)"
                          required
                        />
                      </XStack>
                    </div>
                    <div>
                      <Text render="label" display="block" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={6}>Role</Text>
                      <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={10} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-950)" borderWidth={1} borderColor="var(--neutral-800)">
                        <Briefcase size={16} color="var(--neutral-600)" />
                        <Box display="inline-block" minHeight={44}
                          type="text"
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          placeholder="Backend Engineer"
                          render="input" flex={1} backgroundColor="transparent" color="var(--foreground)" placeholderTextColor="var(--neutral-600)" outlineStyle="none" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)"
                          required
                        />
                      </XStack>
                    </div>
                  </Grid>

                  <div>
                    <Text render="label" display="block" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={6}>
                      What are you building? (Use case)
                    </Text>
                    <XStack display="flex" alignItems="flex-start" gap={8} paddingHorizontal={12} paddingVertical={10} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-950)" borderWidth={1} borderColor="var(--neutral-800)">
                      <Box render="span" display="inline-flex" alignItems="center" marginTop={2}><MessageSquare size={16} color="var(--neutral-600)" /></Box>
                      <Box display="inline-block"
                        value={formData.useCase}
                        onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                        placeholder="Tell us about your project and how you plan to use this service..."
                        render="textarea" flex={1} backgroundColor="transparent" color="var(--foreground)" placeholderTextColor="var(--neutral-600)" outlineStyle="none" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" minHeight="80px"
                        required
                      />
                    </XStack>
                  </div>

                  <Button
                    type="submit"
                    width="100%" paddingVertical={12} borderRadius="var(--radius-lg)" fontWeight="500"
                    style={{ backgroundColor: accentColor }}
                  >
                    <Text display="flex" alignItems="center" justifyContent="center" gap={8}>
                      Apply for Beta Access
                      <Bell size={16} />
                    </Text>
                  </Button>

                  <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" textAlign="center">
                    We'll review your application and email you within 48 hours.
                  </Paragraph>
                </Box>
              )}
            </MotionBox>
          </Grid>
        </Box>
      </Box>

      {/* Features Section */}
      <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--neutral-950)" $md={{ paddingHorizontal: 32 }}>
        <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            textAlign="center" marginBottom={64}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Key Capabilities
            </H2>
            <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
              Everything you need, nothing you don't.
            </Paragraph>
          </MotionBox>

          <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)"
                >
                  <XStack
                    width={40} height={40} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}
                    style={{ backgroundColor: `${accentColor}1a` }}
                  >
                    <Icon width={20} height={20} style={{ color: accentColor }} />
                  </XStack>
                  <H3 fontWeight="600" color="var(--foreground)" marginBottom={8}>{feature.title}</H3>
                  <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{feature.description}</Paragraph>
                </MotionBox>
              );
            })}
          </Grid>
        </Box>
      </Box>

      {/* Code Example */}
      {codeExample && (
        <Box render="section" paddingVertical={96} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }}>
          <Box maxWidth="56rem" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              textAlign="center" marginBottom={48}
            >
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
                Simple to Integrate
              </H2>
              <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)">
                Get started with just a few lines of code.
              </Paragraph>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-overlay)" overflow="hidden"
            >
              <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--neutral-950)">
                <XStack display="flex" gap={6}>
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
                </XStack>
                <Text marginLeft={8} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" fontFamily="var(--font-mono)">{codeExample.filename}</Text>
              </XStack>
              <Box padding={16} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" backgroundColor="var(--neutral-950)" overflowX="auto">
                <Box render="pre" color="var(--neutral-300)">{codeExample.code}</Box>
              </Box>
            </MotionBox>
          </Box>
        </Box>
      )}

      {/* Use Cases */}
      <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--neutral-950)" $md={{ paddingHorizontal: 32 }}>
        <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            textAlign="center" marginBottom={48}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Built For
            </H2>
          </MotionBox>

          <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            {useCases.map((useCase, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)"
              >
                <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={8}>{useCase.title}</H3>
                <Paragraph color="var(--neutral-400)">{useCase.description}</Paragraph>
              </MotionBox>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Supported Chains */}
      {chains && chains.length > 0 && (
        <Box render="section" paddingVertical={96} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }}>
          <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              textAlign="center" marginBottom={48}
            >
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
                Supported Chains
              </H2>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              flexDirection="row" display="flex" flexWrap="wrap" justifyContent="center" gap={12}
            >
              {chains.map((chain) => (
                <Box
                  key={chain}
                  paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)"
                >
                  {chain}
                </Box>
              ))}
            </MotionBox>
          </Box>
        </Box>
      )}

      {/* Bottom CTA */}
      <Box render="section" paddingVertical={96} paddingHorizontal={16} borderTopWidth={1} borderColor="var(--neutral-900)" $md={{ paddingHorizontal: 32 }}>
        <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Ready to Get Started?
            </H2>
            <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" marginBottom={32}>
              Join the private beta and be among the first to build with {name}.
            </Paragraph>
            <YStack display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={16} $sm={{ flexDirection: "row" }}>
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-lg)" fontWeight="500"
                style={{ backgroundColor: accentColor }}
              >
                Apply for Beta Access
              </Button>
              <Link tap
                to="/blockchain"
                paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-lg)" fontWeight="500" borderWidth={1} borderColor="var(--neutral-700)" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
              >
                Explore All Web3 Products
              </Link>
            </YStack>
          </MotionBox>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default BlockchainProductLayout;
