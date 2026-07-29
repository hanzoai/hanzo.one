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
  Building,
  Briefcase,
  Heart,
  ShoppingBag,
  ServerCrash,
  CheckCircle,
  ArrowRight,
  ArrowUpRight
} from "lucide-react";
import { getIcon } from "@/constants/iconMappings";
import { motion, AnimatePresence } from "framer-motion";

import SectionHeader from "@/components/zen/SectionHeader";

const SolutionIndustries: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, number>>({});
  const [activeIndustry, setActiveIndustry] = useState<string>("Financial Services");
  
  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: (prev[title] || 8) + 8 // Show 8 more items each time
    }));
  };
  
  // Get industries from the solutions array
  const industries = solutions.find(s => s.title === "Industries")?.items || [];

  const renderIndustryGrid = () => {
    const displayCount = expandedSections["Industries"] || 8;
    const displayItems = industries.slice(0, displayCount);
    const hasMore = industries.length > displayCount;

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
                      Explore our specialized solutions for the {item.toLowerCase()} industry, designed to address 
                      your sector's unique challenges.
                    </Paragraph>
                    
                    <XStack display="flex" flexWrap="wrap" gap={8} marginTop={16}>
                      <XStack minHeight={44} 
                        onClick={() => setActiveIndustry(item)}
                        render="button" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" display="flex" alignItems="center" color="var(--foreground)" hoverStyle={{ color: "var(--foreground)" }}
                      >
                        <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><LinkIcon size={12} /></Box> Learn more
                      </XStack>
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
              onClick={() => toggleSection("Industries")}
              render="button" display="inline-flex" alignItems="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-500)" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
            >
              View More Industries
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ChevronRight size={20} /></Box>
            </XStack>
          </MotionBox>
        )}
      </Box>
    );
  };

  const renderIndustryContent = () => {
    const industryData: Record<string, {
      icon: React.ReactNode,
      color: string,
      description: string,
      challenges: string[],
      solutions: string[],
      caseStudy: {
        title: string,
        description: string,
        results: string[]
      }
    }> = {
      "Financial Services": {
        icon: <Building size={40} color="var(--foreground)" />,
        color: "blue",
        description: "We help banks, insurance companies, and investment firms transform their digital infrastructure, improve security, and deliver innovative customer experiences.",
        challenges: [
          "Legacy system modernization",
          "Regulatory compliance",
          "Digital customer experience",
          "Fraud detection and prevention",
          "Data security and privacy"
        ],
        solutions: [
          "Core banking system modernization",
          "AI-powered fraud detection",
          "Open banking API platforms",
          "Customer data platforms",
          "Regulatory reporting automation"
        ],
        caseStudy: {
          title: "Digital Transformation for Global Bank",
          description: "We helped a Fortune 500 bank modernize their legacy systems and implement AI-powered customer experiences, resulting in 45% faster transaction processing and improved satisfaction.",
          results: [
            "45% faster transaction processing",
            "68% improvement in customer satisfaction",
            "30% reduction in operational costs",
            "99.99% system uptime"
          ]
        }
      },
      "Healthcare": {
        icon: <Heart size={40} color="var(--foreground)" />,
        color: "pink",
        description: "Our healthcare solutions help providers, payers, and life sciences companies improve patient outcomes, optimize operations, and ensure security and compliance.",
        challenges: [
          "Interoperability of health data",
          "Patient data security and HIPAA compliance",
          "Clinical workflow optimization",
          "Remote patient monitoring",
          "Population health management"
        ],
        solutions: [
          "Healthcare data platforms",
          "Telemedicine solutions",
          "Clinical decision support systems",
          "Medical device integration",
          "Healthcare analytics and reporting"
        ],
        caseStudy: {
          title: "AI-Powered Patient Care Platform",
          description: "We developed a secure, HIPAA-compliant platform that uses AI to analyze patient data and provide real-time clinical decision support, improving outcomes and reducing costs.",
          results: [
            "22% improvement in clinical outcomes",
            "35% reduction in readmission rates",
            "40% time savings for clinical staff",
            "100% HIPAA compliance maintained"
          ]
        }
      },
      "Retail": {
        icon: <ShoppingBag size={40} color="var(--foreground)" />,
        color: "green",
        description: "We help retailers create seamless omnichannel experiences, optimize supply chains, and leverage data for personalized customer engagement.",
        challenges: [
          "Omnichannel customer experience",
          "Supply chain optimization",
          "Inventory management",
          "Customer analytics and personalization",
          "E-commerce platform performance"
        ],
        solutions: [
          "Unified commerce platforms",
          "AI-driven demand forecasting",
          "Customer data and analytics solutions",
          "In-store digital experiences",
          "Intelligent inventory management"
        ],
        caseStudy: {
          title: "Omnichannel Transformation for Global Retailer",
          description: "We helped a global retailer unify their online and offline shopping experiences while implementing AI-powered customer analytics, resulting in significant sales growth.",
          results: [
            "28% increase in online sales",
            "15% increase in in-store conversions",
            "42% improvement in inventory accuracy",
            "3x faster website performance"
          ]
        }
      },
      "Technology": {
        icon: <ServerCrash size={40} color="var(--foreground)" />,
        color: "indigo",
        description: "We help technology companies innovate faster, scale efficiently, and deliver secure, high-performance products and services.",
        challenges: [
          "Accelerating innovation cycles",
          "Scaling infrastructure efficiently",
          "Security and compliance",
          "Developer productivity",
          "Product analytics and telemetry"
        ],
        solutions: [
          "DevOps automation platforms",
          "Scalable cloud architectures",
          "AI-powered development tools",
          "Product analytics frameworks",
          "Security and compliance automation"
        ],
        caseStudy: {
          title: "AI-Powered Development Platform for SaaS Provider",
          description: "We created a development acceleration platform that helped a leading SaaS provider reduce development cycles and improve product quality while maintaining security.",
          results: [
            "60% faster development cycles",
            "40% reduction in bugs and issues",
            "85% improvement in developer productivity",
            "30% reduction in infrastructure costs"
          ]
        }
      }
    };

    const industry = industryData[activeIndustry] || industryData["Financial Services"];
    const colorClasses = {
    };
    
    return (
      <MotionBox
        key={activeIndustry}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        marginBottom={80}
      >
        <Box borderRadius="var(--radius-xl)" padding={32} marginBottom={40}>
          <YStack display="flex" flexDirection="column" gap={32} $md={{ flexDirection: "row", alignItems: "center" }}>
            <XStack backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" padding={24} display="inline-flex">
              {industry.icon}
            </XStack>
            <div>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16} $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>{activeIndustry} Solutions</H3>
              <Paragraph color="var(--neutral-300)">{industry.description}</Paragraph>
            </div>
          </YStack>
        </Box>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={40} marginBottom={40} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <div>
            <H4 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={24} display="flex" alignItems="center">
              <Text backgroundColor="var(--neutral-800)" borderRadius="var(--radius-full)" height={32} width={32} display="inline-flex" alignItems="center" justifyContent="center" marginRight={12} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">1</Text>
              Industry Challenges
            </H4>
            <Box render="ul" rowGap={16}>
              {industry.challenges.map((challenge, idx) => (
                <XStack key={idx} render="li" display="flex" alignItems="flex-start" gap={12} backgroundColor="rgb(0 0 0 / 0.4)" padding={16} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-800)">
                  <Box render="span" display="inline-flex" alignItems="center" marginTop={2}><CheckCircle size={20} color="var(--foreground)" /></Box>
                  <Text color="var(--neutral-300)">{challenge}</Text>
                </XStack>
              ))}
            </Box>
          </div>
          
          <div>
            <H4 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={24} display="flex" alignItems="center">
              <Text backgroundColor="var(--neutral-800)" borderRadius="var(--radius-full)" height={32} width={32} display="inline-flex" alignItems="center" justifyContent="center" marginRight={12} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">2</Text>
              Our Solutions
            </H4>
            <Box render="ul" rowGap={16}>
              {industry.solutions.map((solution, idx) => (
                <XStack key={idx} render="li" display="flex" alignItems="flex-start" gap={12} backgroundColor="rgb(0 0 0 / 0.4)" padding={16} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-800)">
                  <Box render="span" display="inline-flex" alignItems="center" marginTop={2}><ArrowRight size={20} color="var(--foreground)" /></Box>
                  <Text color="var(--neutral-300)">{solution}</Text>
                </XStack>
              ))}
            </Box>
          </div>
        </Grid>
        
        <Box borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={32} marginBottom={40} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(0 0 0 / 0.9))">
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $lg={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))" }}>
            <Box $lg={{ gridColumn: "span 3 / span 3" }}>
              <H4 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={16}>Case Study: {industry.caseStudy.title}</H4>
              <Paragraph color="var(--neutral-300)" marginBottom={24}>{industry.caseStudy.description}</Paragraph>
              <Button marginBottom={32}>Read Full Case Study <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowUpRight size={16} /></Box></Button>
              
              <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                {industry.caseStudy.results.map((result, idx) => (
                  <Box key={idx} backgroundColor="rgb(0 0 0 / 0.4)" padding={16} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-800)">
                    <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><CheckCircle size={20} color="var(--foreground)" /></Box>
                    <Paragraph color="var(--neutral-300)">{result}</Paragraph>
                  </Box>
                ))}
              </Grid>
            </Box>
            <XStack display="flex" alignItems="center" justifyContent="center" $lg={{ gridColumn: "span 2 / span 2" }}>
              <YStack padding={32} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-700)" display="flex" flexDirection="column" alignItems="center" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
                <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Briefcase size={64} color="var(--foreground)" /></Box>
                <Text fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={8}>25+</Text>
                <Text color="var(--foreground)">{activeIndustry} Clients</Text>
              </YStack>
            </XStack>
          </Grid>
        </Box>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <Anchor minHeight={44} 
            href="#" 
            display="block" padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(0 0 0 / 0.9))" hoverStyle={{ borderColor: "var(--border-strong)" }}
          >
            <XStack display="flex" alignItems="center" gap={12} marginBottom={12}>
              <FileText size={20} color="var(--foreground)" />
              <H4 fontWeight="500">White Paper</H4>
            </XStack>
            <Paragraph color="var(--neutral-400)">
              Download our industry trends report: The Future of {activeIndustry} Technology
            </Paragraph>
            <XStack marginTop={16} color="var(--foreground)" display="flex" alignItems="center" gap={6}>
              Download Now <ArrowRight size={16} />
            </XStack>
          </Anchor>
          
          <Anchor minHeight={44} 
            href="#" 
            display="block" padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(0 0 0 / 0.9))" hoverStyle={{ borderColor: "var(--border-strong)" }}
          >
            <XStack display="flex" alignItems="center" gap={12} marginBottom={12}>
              <BookOpen size={20} color="var(--foreground)" />
              <H4 fontWeight="500">Webinar</H4>
            </XStack>
            <Paragraph color="var(--neutral-400)">
              Register for our upcoming webinar: Digital Transformation in {activeIndustry}
            </Paragraph>
            <XStack marginTop={16} color="var(--foreground)" display="flex" alignItems="center" gap={6}>
              Register Now <ArrowRight size={16} />
            </XStack>
          </Anchor>
        </Grid>
      </MotionBox>
    );
  };

  const renderExpertiseSection = () => (
    <Box marginBottom={80}>
      <SectionHeader 
        title="Industry Insights"
        description="Gain a competitive edge with our industry-specific expertise and proven methodologies tailored to your sector's unique challenges."
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
                <Text color="var(--white)">The Future of AI in Financial Services</Text>
              </XStack>
              <ExternalLink size={16} color="var(--neutral-400)" />
            </Anchor>
            <Anchor minHeight={44} href="#" display="flex" justifyContent="space-between" padding={12} borderRadius="var(--radius-lg)" backgroundColor="rgb(0 0 0 / 0.4)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "rgb(0 0 0 / 0.6)" }}>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><BookOpen size={20} color="var(--foreground)" /></Box>
                <Text color="var(--white)">Healthcare Interoperability Challenges</Text>
              </XStack>
              <ExternalLink size={16} color="var(--neutral-400)" />
            </Anchor>
            <Anchor minHeight={44} href="#" display="flex" justifyContent="space-between" padding={12} borderRadius="var(--radius-lg)" backgroundColor="rgb(0 0 0 / 0.4)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "rgb(0 0 0 / 0.6)" }}>
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><BookOpen size={20} color="var(--foreground)" /></Box>
                <Text color="var(--white)">Digital Transformation in Retail</Text>
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
            <Anchor minHeight={44} 
              href="https://hanzo.agency" 
              target="_blank" 
              rel="noopener noreferrer"
              display="flex" alignItems="center" gap={8} paddingHorizontal={20} paddingVertical={10} backgroundColor="var(--neutral-600)" borderRadius="var(--radius-md)" color="var(--white)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-500)" }}
            >
              <span>Visit Hanzo Agency</span>
              <ExternalLink size={14} />
            </Anchor>
            <Anchor minHeight={44} 
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
            <Anchor minHeight={44} 
              href="https://sensei.group" 
              target="_blank" 
              rel="noopener noreferrer"
              display="flex" alignItems="center" gap={8} paddingHorizontal={20} paddingVertical={10} backgroundColor="var(--neutral-600)" borderRadius="var(--radius-md)" color="var(--white)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-500)" }}
            >
              <span>Visit Sensei Group</span>
              <ExternalLink size={14} />
            </Anchor>
            <Anchor minHeight={44} 
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
              Industry Solutions
            </ChromeText>
            <Paragraph color="var(--neutral-400)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">
              We deliver specialized solutions across a wide range of industries, tailored to address your unique 
              challenges and opportunities.
            </Paragraph>
          </Box>

          <Box marginBottom={48}>
            <XStack display="flex" overflowX="auto" paddingBottom={16} scrollbarWidth="none" gap={8} justifyContent="center">
              {["Financial Services", "Healthcare", "Retail", "Technology"].map((industry) => (
                <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                  key={industry}
                  onClick={() => setActiveIndustry(industry)}
                  render="button" paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" whiteSpace="nowrap" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={activeIndustry === industry ? "var(--neutral-600)" : "var(--neutral-900)"} color={activeIndustry === industry ? "var(--white)" : "var(--neutral-300)"} hoverStyle={activeIndustry === industry ? undefined : { backgroundColor: "var(--neutral-800)" }}
                >
                  {industry}
                </Box>
              ))}
            </XStack>
          </Box>

          {/* Active Industry Section */}
          {renderIndustryContent()}
          
          {/* All Industries Grid */}
          <Box marginBottom={80}>
            <SectionHeader 
              title="Explore All Industries" 
              description="Comprehensive solutions for every sector"
            />
            {renderIndustryGrid()}
          </Box>
          
          {/* Resources Section */}
          {renderExpertiseSection()}
          
          {/* Partner Section */}
          {renderPartnerSection()}
          
          {/* CTA Section */}
          <Box marginTop={80} textAlign="center">
            <Box maxWidth="var(--container-prose)" marginHorizontal="auto">
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24}>Industry-Specific Solutions</H2>
              <Paragraph color="var(--neutral-400)" marginBottom={32}>
                Discover how our tailored industry solutions can address your specific challenges and opportunities.
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
                  href="mailto:solutions@hanzo.ai"
                  paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-500)" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
                >
                  Email Us
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><Mail size={20} /></Box>
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

export default SolutionIndustries;
