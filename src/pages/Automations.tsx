import { Anchor, Box, Grid, H1, H2, H3, Link, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'
import React, { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Search,
  Zap,
  MessageSquare,
  Database,
  Cloud,
  Users,
  ShoppingCart,
  BarChart3,
  Mail,
  Calendar,
  FileText,
  Code,
  Bot,
  Palette,
  Share2,
  CreditCard,
  Phone,
  Video,
  Globe,
  ExternalLink,
} from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

// Integration categories
const categories = [
  { id: "all", name: "All", icon: Zap },
  { id: "ai", name: "AI & LLMs", icon: Bot },
  { id: "communication", name: "Communication", icon: MessageSquare },
  { id: "productivity", name: "Productivity", icon: FileText },
  { id: "data", name: "Data & Storage", icon: Database },
  { id: "crm", name: "CRM & Sales", icon: Users },
  { id: "commerce", name: "Commerce", icon: ShoppingCart },
  { id: "marketing", name: "Marketing", icon: Mail },
  { id: "developer", name: "Developer Tools", icon: Code },
  { id: "social", name: "Social Media", icon: Share2 },
];

// Featured integrations with icons and colors
const integrations = [
  // AI & LLMs
  { name: "OpenAI", category: "ai", icon: "🤖", color: "#10a37f", popular: true },
  { name: "Anthropic Claude", category: "ai", icon: "🧠", color: "#cc785c", popular: true },
  { name: "Google Gemini", category: "ai", icon: "✨", color: "#4285f4", popular: true },
  { name: "Azure OpenAI", category: "ai", icon: "☁️", color: "#0078d4" },
  { name: "Hugging Face", category: "ai", icon: "🤗", color: "#ff9d00" },
  { name: "Replicate", category: "ai", icon: "🔄", color: "#000000" },
  { name: "Stability AI", category: "ai", icon: "🎨", color: "#9333ea" },
  { name: "ElevenLabs", category: "ai", icon: "🔊", color: "#000000" },
  { name: "Deepgram", category: "ai", icon: "🎙️", color: "#13ef93" },

  // Communication
  { name: "Slack", category: "communication", icon: "💬", color: "#4A154B", popular: true },
  { name: "Discord", category: "communication", icon: "🎮", color: "#5865F2", popular: true },
  { name: "Telegram", category: "communication", icon: "✈️", color: "#0088cc" },
  { name: "WhatsApp", category: "communication", icon: "📱", color: "#25D366", popular: true },
  { name: "Microsoft Teams", category: "communication", icon: "👥", color: "#6264A7" },
  { name: "Twilio", category: "communication", icon: "📞", color: "#F22F46" },
  { name: "Zoom", category: "communication", icon: "📹", color: "#2D8CFF" },
  { name: "Google Chat", category: "communication", icon: "💭", color: "#00AC47" },

  // Productivity
  { name: "Notion", category: "productivity", icon: "📝", color: "#000000", popular: true },
  { name: "Airtable", category: "productivity", icon: "📊", color: "#18BFFF", popular: true },
  { name: "Google Sheets", category: "productivity", icon: "📗", color: "#34A853", popular: true },
  { name: "Google Docs", category: "productivity", icon: "📄", color: "#4285F4" },
  { name: "Google Drive", category: "productivity", icon: "📁", color: "#4285F4", popular: true },
  { name: "Dropbox", category: "productivity", icon: "📦", color: "#0061FF" },
  { name: "Calendly", category: "productivity", icon: "📅", color: "#006BFF" },
  { name: "Google Calendar", category: "productivity", icon: "🗓️", color: "#4285F4" },
  { name: "Trello", category: "productivity", icon: "📋", color: "#0079BF" },
  { name: "Asana", category: "productivity", icon: "✅", color: "#F06A6A" },
  { name: "ClickUp", category: "productivity", icon: "🎯", color: "#7B68EE" },
  { name: "Linear", category: "productivity", icon: "📐", color: "#5E6AD2", popular: true },
  { name: "Jira", category: "productivity", icon: "🔷", color: "#0052CC" },

  // Data & Storage
  { name: "PostgreSQL", category: "data", icon: "🐘", color: "#336791" },
  { name: "MySQL", category: "data", icon: "🐬", color: "#4479A1" },
  { name: "MongoDB", category: "data", icon: "🍃", color: "#47A248" },
  { name: "Redis", category: "data", icon: "🔴", color: "#DC382D" },
  { name: "Supabase", category: "data", icon: "⚡", color: "#3ECF8E" },
  { name: "Firebase", category: "data", icon: "🔥", color: "#FFCA28" },
  { name: "AWS S3", category: "data", icon: "☁️", color: "#FF9900" },
  { name: "Google Cloud Storage", category: "data", icon: "☁️", color: "#4285F4" },
  { name: "Snowflake", category: "data", icon: "❄️", color: "#29B5E8" },
  { name: "BigQuery", category: "data", icon: "📊", color: "#4285F4" },

  // CRM & Sales
  { name: "Salesforce", category: "crm", icon: "☁️", color: "#00A1E0", popular: true },
  { name: "HubSpot", category: "crm", icon: "🧡", color: "#FF7A59", popular: true },
  { name: "Pipedrive", category: "crm", icon: "📈", color: "#1A1B1D" },
  { name: "Close", category: "crm", icon: "📞", color: "#252A3D" },
  { name: "Intercom", category: "crm", icon: "💬", color: "#1F8DED" },
  { name: "Zendesk", category: "crm", icon: "🎧", color: "#03363D" },
  { name: "Freshdesk", category: "crm", icon: "🎫", color: "#2C9F5B" },
  { name: "Apollo", category: "crm", icon: "🚀", color: "#5C5CFF" },

  // Commerce
  { name: "Stripe", category: "commerce", icon: "💳", color: "#635BFF", popular: true },
  { name: "Shopify", category: "commerce", icon: "🛒", color: "#96BF48", popular: true },
  { name: "WooCommerce", category: "commerce", icon: "🛍️", color: "#96588A" },
  { name: "Square", category: "commerce", icon: "⬜", color: "#3E4348" },
  { name: "PayPal", category: "commerce", icon: "💰", color: "#003087" },
  { name: "Chargebee", category: "commerce", icon: "💵", color: "#FF6B35" },
  { name: "Paddle", category: "commerce", icon: "🏓", color: "#3F3F46" },
  { name: "LemonSqueezy", category: "commerce", icon: "🍋", color: "#FFC107" },

  // Marketing
  { name: "Mailchimp", category: "marketing", icon: "🐵", color: "#FFE01B", popular: true },
  { name: "SendGrid", category: "marketing", icon: "📧", color: "#1A82E2" },
  { name: "Resend", category: "marketing", icon: "✉️", color: "#000000" },
  { name: "ConvertKit", category: "marketing", icon: "📬", color: "#FB6970" },
  { name: "ActiveCampaign", category: "marketing", icon: "📊", color: "#356AE6" },
  { name: "Brevo", category: "marketing", icon: "📨", color: "#0092FF" },
  { name: "Customer.io", category: "marketing", icon: "👤", color: "#4EC4FA" },
  { name: "Postmark", category: "marketing", icon: "📮", color: "#FFDE00" },

  // Developer Tools
  { name: "GitHub", category: "developer", icon: "🐙", color: "#181717", popular: true },
  { name: "GitLab", category: "developer", icon: "🦊", color: "#FC6D26" },
  { name: "Vercel", category: "developer", icon: "▲", color: "#000000" },
  { name: "Netlify", category: "developer", icon: "🌐", color: "#00C7B7" },
  { name: "Railway", category: "developer", icon: "🚂", color: "#0B0D0E" },
  { name: "Render", category: "developer", icon: "🎨", color: "#46E3B7" },
  { name: "Sentry", category: "developer", icon: "🐛", color: "#362D59" },
  { name: "PagerDuty", category: "developer", icon: "🚨", color: "#06AC38" },
  { name: "Datadog", category: "developer", icon: "🐕", color: "#632CA6" },

  // Social Media
  { name: "Twitter / X", category: "social", icon: "𝕏", color: "#000000" },
  { name: "LinkedIn", category: "social", icon: "🔗", color: "#0A66C2", popular: true },
  { name: "Instagram", category: "social", icon: "📸", color: "#E4405F" },
  { name: "Facebook", category: "social", icon: "📘", color: "#1877F2" },
  { name: "TikTok", category: "social", icon: "🎵", color: "#000000" },
  { name: "YouTube", category: "social", icon: "▶️", color: "#FF0000" },
  { name: "Pinterest", category: "social", icon: "📌", color: "#E60023" },
  { name: "Bluesky", category: "social", icon: "🦋", color: "#0085FF" },
];

const Automations = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesCategory = activeCategory === "all" || integration.category === activeCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularIntegrations = integrations.filter((i) => i.popular);

  return (
    <Box minHeight="100vh" backgroundColor="var(--pure-black)" color="var(--foreground)">
      <Navbar />
      <main>
        {/* Hero Section */}
        <Box render="section" position="relative" paddingTop={128} paddingBottom={80} paddingHorizontal={16} overflow="hidden" $md={{ paddingHorizontal: 32 }}>
          {/* Background glow */}
          <Box position="absolute" top={0} right={0} bottom={0} left={0} overflow="hidden">
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 1.5 }}
              position="absolute" top="50%" left="50%" x="-50%" y="-50%" width="800px" height="800px" borderRadius="var(--radius-full)"
              style={{
                background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
                filter: "blur(100px)",
              }}
            />
          </Box>

          <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              textAlign="center" marginBottom={48}
            >
              <Paragraph
                display="inline-flex" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8} borderWidth={1} marginBottom={24}
                style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}4d` }}
              >
                Integrations & Automation
              </Paragraph>
              <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="500" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $lg={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
                <Text color="var(--foreground)">Connect with</Text>{" "}
                <span style={{ color: BRAND_COLOR }}>500+ apps</span>
              </H1>
              <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto" marginBottom={32}>
                Hanzo Automations connects your AI agents to the tools you use every day. Build powerful workflows without code.
              </Paragraph>

              {/* Search */}
              <Box position="relative" maxWidth="28rem" marginHorizontal="auto">
                <Box render="span" display="inline-flex" alignItems="center" position="absolute" left={16} top="50%" y="-50%"><Search size={20} color="var(--neutral-500)" /></Box>
                <Box display="inline-block" minHeight={44}
                  type="text"
                  placeholder="Search integrations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  render="input" width="100%" paddingLeft={48} paddingRight={16} paddingVertical={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" color="var(--foreground)" placeholderTextColor="var(--neutral-500)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" focusStyle={{ outlineStyle: "none", borderColor: "var(--border-strong)" }}
                />
              </Box>
            </MotionBox>

            {/* Popular Integrations */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              marginBottom={64}
            >
              <H2 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-500)" textTransform="uppercase" letterSpacing="0.05em" marginBottom={16} textAlign="center">
                Popular Integrations
              </H2>
              <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={12}>
                {popularIntegrations.slice(0, 12).map((integration) => (
                  <MotionBox
                    key={integration.name}
                    href={`#${integration.name.toLowerCase().replace(/\s+/g, "-")}`}
                    whileHover={{ scale: 1.05 }}
                    flexDirection="row" display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-700)" }}
                  >
                    <Text fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">{integration.icon}</Text>
                    <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)">{integration.name}</Text>
                  </MotionBox>
                ))}
              </XStack>
            </MotionBox>
          </Box>
        </Box>

        {/* Category Filter */}
        <Box render="section" paddingVertical={32} paddingHorizontal={16} borderVerticalWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--neutral-950)" position="sticky" top={64} zIndex={20} $md={{ paddingHorizontal: 32 }}>
          <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
            <XStack display="flex" gap={8} overflowX="auto" paddingBottom={8} scrollbarWidth="none">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                return (
                  <XStack minHeight={44}
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    render="button" display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" whiteSpace="nowrap" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={isActive ? "var(--foreground)" : "var(--neutral-900)"} color={isActive ? "var(--foreground)" : "var(--neutral-400)"} hoverStyle={isActive ? undefined : { color: "var(--foreground)", backgroundColor: "var(--neutral-800)" }}
                  >
                    <Icon width={16} height={16} />
                    {category.name}
                  </XStack>
                );
              })}
            </XStack>
          </Box>
        </Box>

        {/* Integrations Grid */}
        <Box render="section" paddingVertical={64} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }}>
          <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
            <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={32}>
              <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="500" color="var(--foreground)">
                {activeCategory === "all"
                  ? "All Integrations"
                  : categories.find(c => c.id === activeCategory)?.name}
              </H2>
              <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">
                {filteredIntegrations.length} integrations
              </Text>
            </XStack>

            <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={16} $sm={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }} $md={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))" }}>
              {filteredIntegrations.map((integration, index) => (
                <MotionBox
                  key={integration.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  
                  group padding={16} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" cursor="pointer" hoverStyle={{ backgroundColor: "var(--neutral-900)", borderColor: "var(--neutral-700)" }}
                >
                  <XStack
                    width={48} height={48} borderRadius="var(--radius-xl)" display="flex" alignItems="center" justifyContent="center" fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" marginBottom={12}
                    style={{ backgroundColor: integration.color + "20" }}
                  >
                    {integration.icon}
                  </XStack>
                  <H3 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }}>
                    {integration.name}
                  </H3>
                  {integration.popular && (
                    <Text fontSize="10px" color="var(--foreground)" fontWeight="500">Popular</Text>
                  )}
                </MotionBox>
              ))}
            </Grid>

            {filteredIntegrations.length === 0 && (
              <Box textAlign="center" paddingVertical={64}>
                <Paragraph color="var(--neutral-500)">No integrations found matching your search.</Paragraph>
              </Box>
            )}
          </Box>
        </Box>

        {/* CTA Section */}
        <Box render="section" paddingVertical={80} paddingHorizontal={16} borderTopWidth={1} borderColor="var(--neutral-800)" $md={{ paddingHorizontal: 32 }}>
          <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center">
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Don't see your app?
            </H2>
            <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" marginBottom={32}>
              We add new integrations every week. Request an integration or build your own with our SDK.
            </Paragraph>
            <YStack display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={16} $sm={{ flexDirection: "row" }}>
              <Link minHeight={44} 
                to="/contact"
                paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
              >
                Request Integration
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
              </Link>
              <Anchor minHeight={44} 
                href="https://docs.hanzo.ai/automations/sdk"
                target="_blank"
                rel="noreferrer noopener"
                paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
              >
                Build Custom Integration
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ExternalLink size={16} /></Box>
              </Anchor>
            </YStack>
          </Box>
        </Box>
      </main>
      <Footer />
    </Box>
  );
};

export default Automations;
