import { Anchor, Box, Button, Grid, H1, H2, H3, Helmet, Link, MotionBox, Paragraph, XStack } from '@/gui'
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

import {
  Download,
  Mail,
  ExternalLink,
  FileText,
  Image,
  Palette,
  Building2,
  Calendar,
  MapPin,
  Users,
  Globe,
  Phone,
} from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

// Company facts
const companyFacts = [
  { label: "Founded", value: "2016" },
  { label: "Headquarters", value: "Los Angeles, CA" },
  { label: "Employees", value: "50+" },
  { label: "Customers", value: "10,000+" },
];

// Press releases / news
const pressReleases = [
  {
    date: "January 2025",
    title: "Hanzo Launches Next-Generation AI Platform",
    description: "Hanzo Industries Inc announces the launch of its comprehensive AI platform for enterprises.",
    link: "/blog",
  },
  {
    date: "December 2024",
    title: "Hanzo Reaches 10,000 Customer Milestone",
    description: "The company celebrates serving over 10,000 customers worldwide with its AI solutions.",
    link: "/blog",
  },
  {
    date: "November 2024",
    title: "Hanzo Dev 2.0 Released",
    description: "Major update to Hanzo Dev brings advanced AI coding capabilities and improved developer experience.",
    link: "/blog",
  },
];

// Logo assets
const logoAssets = [
  {
    name: "Logo - Dark Background",
    description: "White logo for use on dark backgrounds",
    format: "SVG, PNG",
    preview: "bg-black",
    logoColor: "white",
  },
  {
    name: "Logo - Light Background",
    description: "Black logo for use on light backgrounds",
    format: "SVG, PNG",
    preview: "bg-white",
    logoColor: "black",
  },
  {
    name: "Icon Only",
    description: "Standalone icon without wordmark",
    format: "SVG, PNG, ICO",
    preview: "bg-neutral-900",
    logoColor: "white",
  },
];

// Social links
const socialLinks = [
  { name: "X (Twitter)", handle: "@hanzoai", href: "https://x.com/hanzoai" },
  { name: "LinkedIn", handle: "hanzoai", href: "https://linkedin.com/company/hanzoai" },
  { name: "GitHub", handle: "hanzoai", href: "https://github.com/hanzoai" },
  { name: "YouTube", handle: "@hanzoai", href: "https://youtube.com/@hanzoai" },
  { name: "Instagram", handle: "@hanzoai", href: "https://instagram.com/hanzoai" },
];

const LogoPreview = ({ isDark }: { isDark: boolean }) => (
  <Box display="inline-block" viewBox="0 0 67 67" render="svg" width={32} height={32}>
    <path d="M22.21 67V44.6369H0V67H22.21Z" fill={isDark ? "#ffffff" : "#000000"} />
    <path d="M0 44.6369L22.21 46.8285V44.6369H0Z" fill="#DDDDDD" />
    <path d="M66.7038 22.3184H22.2534L0.0878906 44.6367H44.4634L66.7038 22.3184Z" fill={isDark ? "#ffffff" : "#000000"} />
    <path d="M22.21 0H0V22.3184H22.21V0Z" fill={isDark ? "#ffffff" : "#000000"} />
    <path d="M66.7198 0H44.5098V22.3184H66.7198V0Z" fill={isDark ? "#ffffff" : "#000000"} />
    <path d="M66.6753 22.3185L44.5098 20.0822V22.3185H66.6753Z" fill="#DDDDDD" />
    <path d="M66.7198 67V44.6369H44.5098V67H66.7198Z" fill={isDark ? "#ffffff" : "#000000"} />
  </Box>
);

const Press = () => {
  const { isDarkMode } = useTheme();

  return (
    <Box minHeight="100vh" backgroundColor={isDarkMode ? "var(--pure-black)" : "var(--foreground)"} color={isDarkMode ? "var(--foreground)" : "var(--pure-black)"}>
      <Helmet>
        <title>Press - Hanzo Industries Inc</title>
        <meta name="description" content="Press resources, media kit, and contact information for Hanzo Industries Inc. Download logos, brand assets, and find press contacts." />
      </Helmet>

      <Navbar />

      <Box render="main" paddingTop={128} paddingBottom={96} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
          {/* Header */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            textAlign="center" marginBottom={64}
          >
            <Box display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" marginBottom={16} backgroundColor={isDarkMode ? "var(--neutral-900)" : "var(--neutral-100)"} color={isDarkMode ? "var(--neutral-300)" : "var(--neutral-600)"}>
              Press & Media
            </Box>
            <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }} backgroundClip={isDarkMode ? "text" : undefined} color={isDarkMode ? "transparent" : "var(--pure-black)"} backgroundImage={isDarkMode ? "linear-gradient(to bottom, var(--foreground), rgb(255 255 255 / 0.9), rgb(255 255 255 / 0.7))" : undefined}>
              Press Resources
            </H1>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" maxWidth="var(--container-prose)" marginHorizontal="auto" color={isDarkMode ? "var(--neutral-400)" : "var(--neutral-600)"}>
              Everything you need to write about Hanzo Industries Inc. Download our press kit, access brand assets, and find media contacts.
            </Paragraph>
          </MotionBox>

          {/* Company Overview */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            marginBottom={80}
          >
            <Box padding={32} borderRadius="var(--radius-2xl)" borderWidth={1} borderColor={isDarkMode ? "var(--neutral-800)" : "var(--neutral-200)"} backgroundImage={isDarkMode ? "linear-gradient(to bottom, var(--neutral-900), var(--pure-black))" : "linear-gradient(to bottom, var(--neutral-50), var(--foreground))"}>
              <XStack display="flex" alignItems="center" gap={12} marginBottom={24}>
                <Building2 size={24} />
                <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700">About Hanzo Industries Inc</H2>
              </XStack>
              <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-relaxed)" marginBottom={32} color={isDarkMode ? "var(--neutral-300)" : "var(--neutral-600)"}>
                Hanzo Industries Inc is an AI technology company building the infrastructure for the next generation of intelligent applications. Founded in 2016 and headquartered in Los Angeles, Hanzo provides enterprise-grade AI platforms, developer tools, and cloud services to companies worldwide. Our mission is to make AI accessible, safe, and beneficial for everyone.
              </Paragraph>
              <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
                {companyFacts.map((fact) => (
                  <Box key={fact.label} textAlign="center">
                    <Box fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={4} style={{ color: BRAND_COLOR }}>
                      {fact.value}
                    </Box>
                    <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color={isDarkMode ? "var(--neutral-500)" : "var(--neutral-400)"}>
                      {fact.label}
                    </Box>
                  </Box>
                ))}
              </Grid>
            </Box>
          </MotionBox>

          {/* Press Contact */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            marginBottom={80}
          >
            <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={32} display="flex" alignItems="center" gap={12}>
              <Mail size={24} />
              Press Contact
            </H2>
            <Box padding={32} borderRadius="var(--radius-2xl)" borderWidth={1} backgroundColor={isDarkMode ? "rgb(255 255 255 / 0.5)" : "var(--neutral-50)"} borderColor={isDarkMode ? "var(--neutral-800)" : "var(--neutral-200)"}>
              <Grid display="grid" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                <div>
                  <H3 fontWeight="600" marginBottom={16}>Media Inquiries</H3>
                  <Box rowGap={12}>
                    <Anchor tap
                      href="mailto:press@hanzo.ai"
                      display="flex" alignItems="center" gap={8} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" color={isDarkMode ? "var(--neutral-300)" : "var(--neutral-600)"} hoverStyle={isDarkMode ? { color: "var(--foreground)" } : { color: "var(--pure-black)" }}
                    >
                      <Mail size={16} />
                      press@hanzo.ai
                    </Anchor>
                    <XStack display="flex" alignItems="center" gap={8} color={isDarkMode ? "var(--neutral-400)" : "var(--neutral-500)"}>
                      <Phone size={16} />
                      +1 (424) 335-0550
                    </XStack>
                  </Box>
                </div>
                <div>
                  <H3 fontWeight="600" marginBottom={16}>Headquarters</H3>
                  <Box rowGap={4} color={isDarkMode ? "var(--neutral-400)" : "var(--neutral-500)"}>
                    <Paragraph fontWeight="500">Hanzo Industries Inc</Paragraph>
                    <p>Los Angeles, California</p>
                    <p>United States</p>
                  </Box>
                </div>
              </Grid>
              <Box marginTop={32} paddingTop={24} borderTopWidth={1} borderColor="var(--border-strong)">
                <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color={isDarkMode ? "var(--neutral-500)" : "var(--neutral-400)"}>
                  For urgent press inquiries, please include "URGENT" in your email subject line. We typically respond within 24 hours.
                </Paragraph>
              </Box>
            </Box>
          </MotionBox>

          {/* Brand Assets */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            marginBottom={80}
          >
            <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={32}>
              <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" display="flex" alignItems="center" gap={12}>
                <Palette size={24} />
                Brand Assets
              </H2>
              <Link tap to="/brand">
                <Button variant="outline" size="sm" gap={8}>
                  <FileText size={16} />
                  Brand Guidelines
                </Button>
              </Link>
            </XStack>

            <Grid display="grid" gap={24} marginBottom={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              {logoAssets.map((asset, index) => (
                <Box
                  key={asset.name}
                  borderRadius="var(--radius-xl)" borderWidth={1} overflow="hidden" borderColor={isDarkMode ? "var(--neutral-800)" : "var(--neutral-200)"}
                >
                  <XStack height={128} display="flex" alignItems="center" justifyContent="center">
                    <LogoPreview isDark={asset.logoColor === "white"} />
                  </XStack>
                  <Box padding={16} backgroundColor={isDarkMode ? "var(--neutral-900)" : "var(--neutral-50)"}>
                    <H3 fontWeight="600" marginBottom={4}>{asset.name}</H3>
                    <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={8} color={isDarkMode ? "var(--neutral-400)" : "var(--neutral-500)"}>
                      {asset.description}
                    </Paragraph>
                    <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color={isDarkMode ? "var(--neutral-500)" : "var(--neutral-400)"}>
                      {asset.format}
                    </Paragraph>
                  </Box>
                </Box>
              ))}
            </Grid>

            <XStack display="flex" flexWrap="wrap" gap={16}>
              <Button gap={8} style={{ backgroundColor: BRAND_COLOR }}>
                <Download size={16} />
                Download Press Kit (ZIP)
              </Button>
              <Link tap to="/brand">
                <Button variant="outline" gap={8}>
                  <Palette size={16} />
                  View Brand Guidelines
                </Button>
              </Link>
            </XStack>
          </MotionBox>

          {/* Recent News */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            marginBottom={80}
          >
            <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={32} display="flex" alignItems="center" gap={12}>
              <Calendar size={24} />
              Recent News
            </H2>
            <Box rowGap={16}>
              {pressReleases.map((release) => (
                <Link
                  key={release.title}
                  to={release.link}
                  group display="block" padding={24} borderRadius="var(--radius-xl)" borderWidth={1} transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={isDarkMode ? "rgb(255 255 255 / 0.5)" : "var(--neutral-50)"} borderColor={isDarkMode ? "var(--neutral-800)" : "var(--neutral-200)"} hoverStyle={isDarkMode ? { borderColor: "var(--neutral-700)" } : { borderColor: "var(--neutral-300)" }}
                >
                  <XStack display="flex" alignItems="flex-start" justifyContent="space-between" gap={16}>
                    <div>
                      <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={8} color={isDarkMode ? "var(--neutral-500)" : "var(--neutral-400)"}>
                        {release.date}
                      </Box>
                      <H3 fontWeight="600" marginBottom={8} $group-hover={{ textDecorationLine: "underline" }}>{release.title}</H3>
                      <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color={isDarkMode ? "var(--neutral-400)" : "var(--neutral-500)"}>
                        {release.description}
                      </Paragraph>
                    </div>
                    <Box render="span" display="inline-flex" alignItems="center" opacity={0} $group-hover={{ opacity: 1 }}><ExternalLink size={20} /></Box>
                  </XStack>
                </Link>
              ))}
            </Box>
          </MotionBox>

          {/* Social Media */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            marginBottom={80}
          >
            <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={32} display="flex" alignItems="center" gap={12}>
              <Globe size={24} />
              Connect With Us
            </H2>
            <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={16} $md={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))" }}>
              {socialLinks.map((social) => (
                <Anchor
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  padding={16} borderRadius="var(--radius-xl)" borderWidth={1} textAlign="center" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={isDarkMode ? "rgb(255 255 255 / 0.5)" : "var(--neutral-50)"} borderColor={isDarkMode ? "var(--neutral-800)" : "var(--neutral-200)"} hoverStyle={isDarkMode ? { borderColor: "var(--neutral-700)" } : { borderColor: "var(--neutral-300)" }}
                >
                  <Box fontWeight="600" marginBottom={4}>{social.name}</Box>
                  <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color={isDarkMode ? "var(--neutral-400)" : "var(--neutral-500)"}>
                    {social.handle}
                  </Box>
                </Anchor>
              ))}
            </Grid>
          </MotionBox>

          {/* Executive Team */}
          <MotionBox render="section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={32} display="flex" alignItems="center" gap={12}>
              <Users size={24} />
              Leadership
            </H2>
            <Box padding={32} borderRadius="var(--radius-2xl)" borderWidth={1} textAlign="center" backgroundColor={isDarkMode ? "rgb(255 255 255 / 0.5)" : "var(--neutral-50)"} borderColor={isDarkMode ? "var(--neutral-800)" : "var(--neutral-200)"}>
              <Paragraph marginBottom={24} color={isDarkMode ? "var(--neutral-400)" : "var(--neutral-500)"}>
                For executive bios and headshots, please visit our team page or contact our press team.
              </Paragraph>
              <XStack display="flex" flexWrap="wrap" gap={16} justifyContent="center">
                <Link tap to="/team">
                  <Button variant="outline" gap={8}>
                    <Users size={16} />
                    View Team
                  </Button>
                </Link>
                <a href="mailto:press@hanzo.ai">
                  <Button gap={8} style={{ backgroundColor: BRAND_COLOR }}>
                    <Mail size={16} />
                    Request Executive Bios
                  </Button>
                </a>
              </XStack>
            </Box>
          </MotionBox>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Press;
