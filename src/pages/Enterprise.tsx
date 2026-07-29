import { Anchor, Box, Button, Grid, H1, H2, H3, Helmet, Paragraph, XStack, YStack } from '@/gui'
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Shield, Users, Zap, Globe, Phone } from "lucide-react";

const Enterprise = () => {
  const features = [
    {
      icon: <Shield size={32} color="var(--foreground)" />,
      title: "Enterprise Security",
      description: "SOC 2, GDPR, CCPA compliance with advanced encryption and audit logging"
    },
    {
      icon: <Users size={32} color="var(--foreground)" />,
      title: "User Management",
      description: "SCIM provisioning, SSO integration, and role-based access control"
    },
    {
      icon: <Globe size={32} color="var(--foreground)" />,
      title: "Global Infrastructure",
      description: "Multi-region deployment with 99.99% uptime SLA and dedicated support"
    },
    {
      icon: <Zap size={32} color="var(--foreground)" />,
      title: "Custom AI Resources",
      description: "Tailored AI credits, custom models, and dedicated compute infrastructure"
    }
  ];

  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Helmet>
        <title>Enterprise Solutions - Hanzo AI Platform</title>
        <meta name="description" content="Scale your business with enterprise-grade AI solutions. Dedicated support, custom integrations, and advanced security features for large organizations." />
      </Helmet>
      
      <Navbar />
      
      <Box render="main" paddingTop={128} paddingBottom={64}>
        {/* Hero Section */}
        <Box render="section" paddingHorizontal={16} marginBottom={80} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center">
            <XStack display="flex" justifyContent="center" marginBottom={32}>
              <Building2 size={64} color="var(--foreground)" />
            </XStack>
            
            <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to bottom, var(--foreground), rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
              Enterprise AI Solutions
            </H1>
            
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={32}>
              Scale your business with enterprise-grade AI solutions. Get dedicated support, 
              custom integrations, and advanced security features designed for large organizations.
            </Paragraph>
            
            <YStack display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}>
              <Button size="lg" backgroundColor="var(--foreground)" color="var(--pure-black)" paddingHorizontal={32} paddingVertical={12} hoverStyle={{ backgroundColor: "var(--neutral-100)" }}>
                <Anchor href="/contact" display="flex" alignItems="center">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Phone size={20} /></Box>
                  Contact Sales
                </Anchor>
              </Button>
              <Button size="lg" variant="outline" borderColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" paddingHorizontal={32} paddingVertical={12} hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}>
                <a href="/pricing">View Pricing</a>
              </Button>
            </YStack>
          </Box>
        </Box>

        {/* Features Section */}
        <Box render="section" paddingHorizontal={16} marginBottom={80} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box maxWidth="var(--container-max)" marginHorizontal="auto">
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" textAlign="center" marginBottom={48}>Enterprise Features</H2>
            
            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
              {features.map((feature, index) => (
                <Box key={index} backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-xl)" padding={24} borderWidth={1} borderColor="rgb(255 255 255 / 0.1)">
                  <Box marginBottom={16}>{feature.icon}</Box>
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={12}>{feature.title}</H3>
                  <Paragraph color="var(--neutral-400)">{feature.description}</Paragraph>
                </Box>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Why Enterprise Section */}
        <Box render="section" paddingHorizontal={16} marginBottom={80} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box maxWidth="56rem" marginHorizontal="auto">
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" textAlign="center" marginBottom={48}>Why Choose Hanzo Enterprise?</H2>
            
            <Box rowGap={32}>
              <Box borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
                <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={16}>Dedicated Support</H3>
                <Paragraph color="var(--neutral-300)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">
                  Get priority support with dedicated account managers, guaranteed response times, 
                  and direct access to our engineering team for critical issues.
                </Paragraph>
              </Box>
              
              <Box borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
                <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={16}>Custom Integrations</H3>
                <Paragraph color="var(--neutral-300)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">
                  Seamlessly integrate with your existing infrastructure, identity providers, 
                  and business systems with our custom integration services.
                </Paragraph>
              </Box>
              
              <Box borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
                <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={16}>Flexible Deployment</H3>
                <Paragraph color="var(--neutral-300)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">
                  Deploy on our cloud, your cloud, or on-premises. We support hybrid deployments 
                  to meet your security and compliance requirements.
                </Paragraph>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* CTA Section */}
        <Box render="section" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center">
            <Box backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="rgb(255 255 255 / 0.1)">
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Ready to Get Started?</H2>
              <Paragraph color="var(--neutral-400)" marginBottom={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">
                Contact our enterprise sales team for a personalized demo and custom pricing 
                that meets your organization's unique needs.
              </Paragraph>
              <YStack display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}>
                <Button size="lg" backgroundColor="var(--foreground)" color="var(--pure-black)" paddingHorizontal={32} paddingVertical={12} hoverStyle={{ backgroundColor: "var(--neutral-100)" }}>
                  <Anchor tap href="mailto:enterprise@hanzo.ai" display="flex" alignItems="center">
                    Schedule Demo
                  </Anchor>
                </Button>
                <Button size="lg" variant="outline" borderColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" paddingHorizontal={32} paddingVertical={12} hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}>
                  <a href="/contact">Contact Us</a>
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

export default Enterprise;