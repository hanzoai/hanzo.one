import { Anchor, Box, Button, ChromeText, Grid, H2, H3, H4, Link, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { solutions } from "@/constants/navigation";
import { 
  ChevronRight, 
  FileText, 
  ExternalLink, 
  Mail, 
  Phone, 
  Users, 
  BookOpen, 
  Link as LinkIcon,
  Shield,
  CheckCircle,
  ArrowRight,
  Award
} from "lucide-react";
import { getIcon } from "@/constants/iconMappings";
import { motion, AnimatePresence } from "framer-motion";

import SectionHeader from "@/components/zen/SectionHeader";
import { cloudServiceData } from "@/components/index3/cloud-services/cloudServiceData";

const SolutionCapabilities: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, number>>({});
  
  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: (prev[title] || 8) + 8 // Show 8 more items each time
    }));
  };
  
  // Get capabilities and industries from the solutions array
  const capabilities = solutions.find(s => s.title === "Capabilities")?.items || [];

  const renderCapabilityGrid = () => {
    const displayCount = expandedSections["Capabilities"] || 8;
    const displayItems = capabilities.slice(0, displayCount);
    const hasMore = capabilities.length > displayCount;

    return (
      <Box marginBottom={64}>
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <AnimatePresence initial={false}>
            {displayItems.map((item, index) => {
              const Icon = getIcon(item);
              return (
                <MotionBox
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  group position="relative" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="rgb(0 0 0 / 0.5)" padding={24} backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" overflow="hidden"
                >
                  <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0} transition="opacity 500ms cubic-bezier(.4,0,.2,1)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.1))" $group-hover={{ opacity: 1 }} />
                  <Box position="relative">
                    <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={16}>
                      <Icon height={24} width={24} color="var(--foreground)" strokeWidth={1.5} />
                      <Box render="span" display="inline-flex" alignItems="center" $group-hover={{ color: "var(--foreground)" }}><ChevronRight size={20} color="var(--neutral-500)" /></Box>
                    </XStack>
                    <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={8} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }}>
                      {item}
                    </H3>
                    <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={16}>
                      Our specialists deliver comprehensive {item.toLowerCase()} solutions tailored to your 
                      organization's unique challenges and goals.
                    </Paragraph>
                    
                    <XStack display="flex" flexWrap="wrap" gap={8} marginTop={16}>
                      <Link minHeight={44} to={`/solutions/${item.toLowerCase().replace(/\s+/g, '-')}`} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" display="flex" color="var(--foreground)" hoverStyle={{ color: "var(--foreground)" }}>
                        <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><LinkIcon size={12} /></Box> Learn more
                      </Link>
                      <Anchor minHeight={44} href="#" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" display="flex" color="var(--foreground)" hoverStyle={{ color: "var(--foreground)" }}>
                        <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><FileText size={12} /></Box> Case study
                      </Anchor>
                      <Anchor minHeight={44} href="#" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" display="flex" color="var(--foreground)" hoverStyle={{ color: "var(--foreground)" }}>
                        <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><BookOpen size={12} /></Box> White paper
                      </Anchor>
                    </XStack>
                  </Box>
                </MotionBox>
              );
            })}
          </AnimatePresence>
        </Grid>
        {hasMore && (
          <MotionBox 
            textAlign="center" marginTop={32}
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <XStack minHeight={44}
              onClick={() => toggleSection("Capabilities")}
              render="button" display="inline-flex" alignItems="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-500)" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
            >
              View More Capabilities
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ChevronRight size={20} /></Box>
            </XStack>
          </MotionBox>
        )}
      </Box>
    );
  };

  const renderCaseStudy = (title: string, industry: string, description: string, image: string = "") => (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(0 0 0 / 0.8))"
    >
      <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" $lg={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))" }}>
        <Box gridColumn="span 3 / span 3" padding={32}>
          <XStack display="flex" alignItems="center" gap={8} marginBottom={16}>
            <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)">Case Study</Text>
            <Text width={4} height={4} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Text>
            <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" paddingHorizontal={8} paddingVertical={4} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" color="var(--foreground)" borderWidth={1} borderColor="var(--border-strong)">
              {industry}
            </Text>
          </XStack>
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16} color="var(--white)">{title}</H3>
          <Paragraph color="var(--neutral-300)" marginBottom={24}>{description}</Paragraph>
          
          <Box rowGap={16} marginBottom={24}>
            <XStack display="flex" alignItems="flex-start" gap={8}>
              <Box render="span" display="inline-flex" alignItems="center" marginTop={2}><CheckCircle size={20} color="var(--foreground)" /></Box>
              <Paragraph color="var(--neutral-400)">Reduced development time by 40% through AI-powered automation</Paragraph>
            </XStack>
            <XStack display="flex" alignItems="flex-start" gap={8}>
              <Box render="span" display="inline-flex" alignItems="center" marginTop={2}><CheckCircle size={20} color="var(--foreground)" /></Box>
              <Paragraph color="var(--neutral-400)">Improved customer satisfaction scores by 35% with new digital experiences</Paragraph>
            </XStack>
            <XStack display="flex" alignItems="flex-start" gap={8}>
              <Box render="span" display="inline-flex" alignItems="center" marginTop={2}><CheckCircle size={20} color="var(--foreground)" /></Box>
              <Paragraph color="var(--neutral-400)">Achieved 99.99% uptime with Hanzo's enterprise-grade infrastructure</Paragraph>
            </XStack>
          </Box>
          
          <Button display="flex" alignItems="center" gap={8} backgroundColor="var(--white)" color="var(--pure-black)" hoverStyle={{ backgroundColor: "var(--neutral-200)" }}>
            Read Full Case Study <ArrowRight size={16} />
          </Button>
        </Box>
        <XStack gridColumn="span 2 / span 2" display="flex" alignItems="center" justifyContent="center" padding={32} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
          <YStack display="flex" flexDirection="column" alignItems="center" textAlign="center">
            <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Award size={64} color="var(--foreground)" /></Box>
            <Box fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" color="var(--white)" marginBottom={8}>200%</Box>
            <Box color="var(--foreground)">Return on Investment</Box>
          </YStack>
        </XStack>
      </Grid>
    </MotionBox>
  );

  // Generate a featured capability section using cloudServiceData
  const renderFeaturedCapability = () => {
    // Use AI as a featured capability
    const featuredService = cloudServiceData.find(s => s.id === "ai") || cloudServiceData[0];
    const Icon = featuredService.icon;
    
    return (
      <Box marginBottom={80}>
        <SectionHeader 
          title="AI & Machine Learning" 
          description="Transform your business with our enterprise-grade AI solutions"
        />
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={40} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <Box borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" padding={32} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
            <Box marginBottom={24}>
              <XStack height={64} width={64} borderRadius="var(--radius-lg)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
                <Icon height={40} width={40} color="var(--foreground)" />
              </XStack>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Enterprise AI Solutions</H3>
              <Paragraph color="var(--neutral-300)">
                Deploy, manage, and scale AI models with unmatched performance and security. Our AI platform
                provides seamless access to frontier models, private model customization, and robust security for
                enterprise deployments.
              </Paragraph>
            </Box>
            
            <Box rowGap={16} marginBottom={32}>
              {featuredService.features.map((feature, idx) => (
                <XStack key={idx} display="flex" alignItems="flex-start" gap={12}>
                  <Box render="span" display="inline-flex" alignItems="center" marginTop={2}><CheckCircle size={20} color="var(--foreground)" /></Box>
                  <Paragraph color="var(--neutral-300)">{feature}</Paragraph>
                </XStack>
              ))}
            </Box>
            
            <XStack display="flex" flexWrap="wrap" gap={16}>
              <Button asChild backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
                <Link tap to="/ai">Explore AI Solutions</Link>
              </Button>
              <Button asChild variant="outline" borderColor="var(--border-strong)" color="var(--foreground)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}>
                <a href="#">Request Demo</a>
              </Button>
            </XStack>
          </Box>
          
          <Box rowGap={24}>
            <Box borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(0 0 0 / 0.9))">
              <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={12}>Case Study: Financial Services</H4>
              <Paragraph color="var(--neutral-400)" marginBottom={16}>
                How a leading investment firm used Hanzo's AI platform to analyze market trends and automate 
                investment decisions, resulting in a 32% increase in portfolio performance.
              </Paragraph>
              <Anchor tap href="#" color="var(--foreground)" display="flex" alignItems="center" gap={6} hoverStyle={{ color: "var(--foreground)" }}>
                Read case study <ArrowRight size={16} />
              </Anchor>
            </Box>
            
            <Box borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(0 0 0 / 0.9))">
              <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={12}>White Paper: Enterprise AI Adoption</H4>
              <Paragraph color="var(--neutral-400)" marginBottom={16}>
                Download our comprehensive guide to implementing AI across large organizations, addressing 
                challenges around security, compliance, and organizational change.
              </Paragraph>
              <Anchor tap href="#" color="var(--foreground)" display="flex" alignItems="center" gap={6} hoverStyle={{ color: "var(--foreground)" }}>
                Download white paper <ArrowRight size={16} />
              </Anchor>
            </Box>
            
            <Box borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={24} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(0 0 0 / 0.9))">
              <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={12}>Webinar: The Future of GenAI in Enterprise</H4>
              <Paragraph color="var(--neutral-400)" marginBottom={16}>
                Join our expert panel discussing how generative AI is transforming enterprise operations and 
                creating new business opportunities across industries.
              </Paragraph>
              <Anchor tap href="#" color="var(--foreground)" display="flex" alignItems="center" gap={6} hoverStyle={{ color: "var(--foreground)" }}>
                Register now <ArrowRight size={16} />
              </Anchor>
            </Box>
          </Box>
        </Grid>
      </Box>
    );
  };

  const renderExpertiseSection = () => (
    <Box marginBottom={80}>
      <SectionHeader 
        title="Technical Expertise"
        description="Our team brings deep expertise across multiple technical domains, helping you implement solutions that drive real business results."
      />
      
      <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={40} marginBottom={40} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
        <Box padding={32} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16} color="var(--white)">Case Studies</H3>
          <Paragraph color="var(--neutral-300)" marginBottom={24}>
            See how we've helped organizations like yours achieve their goals through innovative solutions.
          </Paragraph>
          <Box rowGap={16}>
            <Anchor minHeight={44} href="#" display="flex" justifyContent="space-between" padding={12} borderRadius="var(--radius-lg)" backgroundColor="rgb(0 0 0 / 0.4)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "rgb(0 0 0 / 0.6)" }}>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><FileText size={20} color="var(--foreground)" /></Box>
                <Text color="var(--white)">Financial Services Digital Transformation</Text>
              </XStack>
              <ExternalLink size={16} color="var(--neutral-400)" />
            </Anchor>
            <Anchor minHeight={44} href="#" display="flex" justifyContent="space-between" padding={12} borderRadius="var(--radius-lg)" backgroundColor="rgb(0 0 0 / 0.4)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "rgb(0 0 0 / 0.6)" }}>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><FileText size={20} color="var(--foreground)" /></Box>
                <Text color="var(--white)">Healthcare AI Implementation</Text>
              </XStack>
              <ExternalLink size={16} color="var(--neutral-400)" />
            </Anchor>
            <Anchor minHeight={44} href="#" display="flex" justifyContent="space-between" padding={12} borderRadius="var(--radius-lg)" backgroundColor="rgb(0 0 0 / 0.4)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "rgb(0 0 0 / 0.6)" }}>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><FileText size={20} color="var(--foreground)" /></Box>
                <Text color="var(--white)">Retail Analytics Platform</Text>
              </XStack>
              <ExternalLink size={16} color="var(--neutral-400)" />
            </Anchor>
          </Box>
          <Box marginTop={24} textAlign="center">
            <Button variant="outline" borderColor="var(--border-strong)" color="var(--foreground)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}>
              View all case studies <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ChevronRight size={16} /></Box>
            </Button>
          </Box>
        </Box>
        
        <Box padding={32} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16} color="var(--white)">White Papers</H3>
          <Paragraph color="var(--neutral-300)" marginBottom={24}>
            Access our thought leadership and research on the latest industry trends and technologies.
          </Paragraph>
          <Box rowGap={16}>
            <Anchor minHeight={44} href="#" display="flex" justifyContent="space-between" padding={12} borderRadius="var(--radius-lg)" backgroundColor="rgb(0 0 0 / 0.4)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "rgb(0 0 0 / 0.6)" }}>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><BookOpen size={20} color="var(--foreground)" /></Box>
                <Text color="var(--white)">The Future of AI in Enterprise</Text>
              </XStack>
              <ExternalLink size={16} color="var(--neutral-400)" />
            </Anchor>
            <Anchor minHeight={44} href="#" display="flex" justifyContent="space-between" padding={12} borderRadius="var(--radius-lg)" backgroundColor="rgb(0 0 0 / 0.4)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "rgb(0 0 0 / 0.6)" }}>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><BookOpen size={20} color="var(--foreground)" /></Box>
                <Text color="var(--white)">Cloud Security Best Practices</Text>
              </XStack>
              <ExternalLink size={16} color="var(--neutral-400)" />
            </Anchor>
            <Anchor minHeight={44} href="#" display="flex" justifyContent="space-between" padding={12} borderRadius="var(--radius-lg)" backgroundColor="rgb(0 0 0 / 0.4)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "rgb(0 0 0 / 0.6)" }}>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><BookOpen size={20} color="var(--foreground)" /></Box>
                <Text color="var(--white)">Digital Transformation Playbook</Text>
              </XStack>
              <ExternalLink size={16} color="var(--neutral-400)" />
            </Anchor>
          </Box>
          <Box marginTop={24} textAlign="center">
            <Button variant="outline" borderColor="var(--border-strong)" color="var(--foreground)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}>
              View all white papers <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ChevronRight size={16} /></Box>
            </Button>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
  
  const renderPartnerSection = () => (
    <Box marginBottom={80} padding={40} borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(0 0 0 / 0.9))">
      <SectionHeader 
        title="Expert Partners" 
        description="Access our specialized agencies and expert talent to accelerate your success"
      />
      
      <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={40} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
        <Box padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" hoverStyle={{ borderColor: "var(--border-strong)" }}>
          <Box padding={12} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)" alignSelf="flex-start" display="inline-block" marginBottom={16}>
            <Users size={24} color="var(--foreground)" strokeWidth={1.5} />
          </Box>
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)" marginBottom={12}>Hanzo Agency</H3>
          <Paragraph color="var(--neutral-300)" marginBottom={20}>
            Our AI-powered creative agency helps brands transform their digital presence with cutting-edge design, 
            content, and marketing strategies powered by artificial intelligence.
          </Paragraph>
          <XStack display="flex" flexWrap="wrap" gap={16}>
            <Anchor minHeight={44} display="inline-flex" alignItems="center" 
              href="https://hanzo.agency" 
              target="_blank" 
              rel="noopener noreferrer"
              display="flex" alignItems="center" gap={8} paddingHorizontal={20} paddingVertical={10} backgroundColor="var(--neutral-600)" borderRadius="var(--radius-md)" color="var(--white)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-500)" }}
            >
              <span>Visit Hanzo Agency</span>
              <ExternalLink size={14} />
            </Anchor>
            <Anchor minHeight={44} display="inline-flex" alignItems="center" 
              href="/contact" 
              display="flex" alignItems="center" gap={8} paddingHorizontal={20} paddingVertical={10} borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-md)" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-500)", color: "var(--foreground)" }}
            >
              <span>Contact us</span>
              <Mail size={14} />
            </Anchor>
          </XStack>
        </Box>
        <Box padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" hoverStyle={{ borderColor: "var(--border-strong)" }}>
          <Box padding={12} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)" alignSelf="flex-start" display="inline-block" marginBottom={16}>
            <Shield size={24} color="var(--foreground)" strokeWidth={1.5} />
          </Box>
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)" marginBottom={12}>Sensei Group</H3>
          <Paragraph color="var(--neutral-300)" marginBottom={20}>
            Our collective of fractional CXOs and industry experts help enterprises implement transformative 
            technology solutions and drive strategic growth initiatives.
          </Paragraph>
          <XStack display="flex" flexWrap="wrap" gap={16}>
            <Anchor minHeight={44} display="inline-flex" alignItems="center" 
              href="https://sensei.group" 
              target="_blank" 
              rel="noopener noreferrer"
              display="flex" alignItems="center" gap={8} paddingHorizontal={20} paddingVertical={10} backgroundColor="var(--neutral-600)" borderRadius="var(--radius-md)" color="var(--white)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-500)" }}
            >
              <span>Visit Sensei Group</span>
              <ExternalLink size={14} />
            </Anchor>
            <Anchor minHeight={44} display="inline-flex" alignItems="center" 
              href="tel:+1234567890" 
              display="flex" alignItems="center" gap={8} paddingHorizontal={20} paddingVertical={10} borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-md)" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-500)", color: "var(--foreground)" }}
            >
              <span>Schedule a call</span>
              <Phone size={14} />
            </Anchor>
          </XStack>
        </Box>
      </Grid>
    </Box>
  );

  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Navbar />
      
      <Box render="main" paddingTop={128} paddingBottom={64} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box maxWidth="var(--container-max)" marginHorizontal="auto">
          <Box textAlign="center" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={64}>
            <Box display="inline-block" marginBottom={16}>
              <Link minHeight={44} to="/solutions" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" display="flex" gap={4} hoverStyle={{ color: "var(--white)" }}>
                <Box render="span" display="inline-flex" alignItems="center" rotate="180deg"><ChevronRight size={16} /></Box> Back to Solutions
              </Link>
            </Box>
            <ChromeText as="h1" fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} $sm={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
              Technical Capabilities
            </ChromeText>
            <Paragraph color="var(--neutral-400)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">
              Our comprehensive technical capabilities span across a wide range of disciplines, empowering your 
              organization to stay at the forefront of innovation.
            </Paragraph>
          </Box>

          {/* Featured Capability Section (AI) */}
          {renderFeaturedCapability()}
          
          {/* Case Study */}
          <Box marginBottom={80}>
            <SectionHeader 
              title="Success Stories" 
              description="Real-world results from our enterprise clients"
            />
            
            <Box rowGap={32}>
              {renderCaseStudy(
                "Digital Transformation for Global Financial Institution", 
                "Financial Services",
                "We helped a Fortune 500 financial services company modernize their legacy systems and implement AI-powered customer experiences, resulting in 45% faster transaction processing and 68% improved customer satisfaction."
              )}
              
              {renderCaseStudy(
                "Cloud Migration & Modernization for Healthcare Provider", 
                "Healthcare",
                "Our team migrated a healthcare provider's critical patient systems to a secure, compliant cloud infrastructure while implementing real-time analytics for improved patient outcomes and operational efficiency."
              )}
            </Box>
          </Box>
          
          {/* All Capabilities Grid */}
          <Box marginBottom={80}>
            <SectionHeader 
              title="Explore Our Capabilities" 
              description="Comprehensive technical expertise to transform your business"
            />
            {renderCapabilityGrid()}
          </Box>
          
          {/* Resources Section */}
          {renderExpertiseSection()}
          
          {/* Partner Section */}
          {renderPartnerSection()}
          
          {/* CTA Section */}
          <Box marginTop={80} textAlign="center">
            <Box maxWidth="var(--container-prose)" marginHorizontal="auto">
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24}>Ready to Transform Your Business?</H2>
              <Paragraph color="var(--neutral-400)" marginBottom={32}>
                Connect with our team to learn how our capabilities can help you achieve your goals.
              </Paragraph>
              <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={16}>
                <Anchor minHeight={44} 
                  href="/contact"
                  paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-600)" color="var(--white)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
                >
                  Get Started
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ChevronRight size={20} /></Box>
                </Anchor>
                <Anchor minHeight={44} 
                  href="tel:+1234567890"
                  paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-500)" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
                >
                  Schedule a Call
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><Phone size={20} /></Box>
                </Anchor>
              </XStack>
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default SolutionCapabilities;
