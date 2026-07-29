import { Badge, Box, Button, Grid, H1, H2, H3, Input, Paragraph, Text, XStack, YStack } from '@/gui'
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, ExternalLink, Github, Plug } from "lucide-react";

// Sample integrations data - in production, this would come from an API
const integrationCategories = [
  "AI", "Analytics", "Communication", "CRM", "Database", "Developer Tools",
  "E-commerce", "Files & Storage", "Finance", "Marketing", "Productivity",
  "Project Management", "Sales", "Social Media", "Support"
];

const sampleIntegrations = [
  { name: "OpenAI", category: "AI", logo: "🤖", description: "GPT models and AI capabilities" },
  { name: "Anthropic", category: "AI", logo: "🧠", description: "Claude AI models" },
  { name: "Google AI", category: "AI", logo: "🔷", description: "Gemini and Google AI services" },
  { name: "Slack", category: "Communication", logo: "💬", description: "Team messaging and notifications" },
  { name: "Discord", category: "Communication", logo: "🎮", description: "Community chat platform" },
  { name: "Gmail", category: "Communication", logo: "📧", description: "Email automation" },
  { name: "Salesforce", category: "CRM", logo: "☁️", description: "CRM and sales automation" },
  { name: "HubSpot", category: "CRM", logo: "🔶", description: "Marketing and sales CRM" },
  { name: "Stripe", category: "Finance", logo: "💳", description: "Payment processing" },
  { name: "GitHub", category: "Developer Tools", logo: "🐙", description: "Code repository automation" },
  { name: "GitLab", category: "Developer Tools", logo: "🦊", description: "DevOps platform" },
  { name: "Jira", category: "Project Management", logo: "📋", description: "Issue tracking" },
  { name: "Notion", category: "Productivity", logo: "📓", description: "All-in-one workspace" },
  { name: "Airtable", category: "Database", logo: "📊", description: "Spreadsheet-database hybrid" },
  { name: "Google Sheets", category: "Productivity", logo: "📗", description: "Spreadsheet automation" },
  { name: "Shopify", category: "E-commerce", logo: "🛒", description: "E-commerce platform" },
  { name: "WooCommerce", category: "E-commerce", logo: "🛍️", description: "WordPress e-commerce" },
  { name: "Mailchimp", category: "Marketing", logo: "🐵", description: "Email marketing" },
  { name: "Twilio", category: "Communication", logo: "📱", description: "SMS and voice" },
  { name: "Zendesk", category: "Support", logo: "🎫", description: "Customer support" },
  { name: "Intercom", category: "Support", logo: "💭", description: "Customer messaging" },
  { name: "Linear", category: "Project Management", logo: "⚡", description: "Modern issue tracking" },
  { name: "Asana", category: "Project Management", logo: "🎯", description: "Work management" },
  { name: "Trello", category: "Project Management", logo: "📌", description: "Kanban boards" },
  { name: "PostgreSQL", category: "Database", logo: "🐘", description: "Relational database" },
  { name: "MongoDB", category: "Database", logo: "🍃", description: "Document database" },
  { name: "Redis", category: "Database", logo: "🔴", description: "In-memory data store" },
  { name: "AWS S3", category: "Files & Storage", logo: "📦", description: "Object storage" },
  { name: "Google Drive", category: "Files & Storage", logo: "📁", description: "Cloud storage" },
  { name: "Dropbox", category: "Files & Storage", logo: "📂", description: "File sync and share" },
  { name: "Twitter/X", category: "Social Media", logo: "🐦", description: "Social media automation" },
  { name: "LinkedIn", category: "Social Media", logo: "💼", description: "Professional networking" },
  { name: "Facebook", category: "Social Media", logo: "👤", description: "Social media platform" },
  { name: "Instagram", category: "Social Media", logo: "📷", description: "Photo sharing" },
  { name: "YouTube", category: "Social Media", logo: "▶️", description: "Video platform" },
  { name: "Google Analytics", category: "Analytics", logo: "📈", description: "Web analytics" },
  { name: "Mixpanel", category: "Analytics", logo: "📊", description: "Product analytics" },
  { name: "Amplitude", category: "Analytics", logo: "📉", description: "Product intelligence" },
  { name: "Segment", category: "Analytics", logo: "🔀", description: "Customer data platform" },
  { name: "Pipedrive", category: "Sales", logo: "💰", description: "Sales CRM" },
  { name: "Calendly", category: "Productivity", logo: "📅", description: "Scheduling automation" },
  { name: "Zoom", category: "Communication", logo: "🎥", description: "Video meetings" },
  { name: "Microsoft Teams", category: "Communication", logo: "👥", description: "Team collaboration" },
  { name: "Webhook", category: "Developer Tools", logo: "🔗", description: "HTTP webhooks" },
  { name: "HTTP Request", category: "Developer Tools", logo: "🌐", description: "Custom API calls" },
  { name: "Code", category: "Developer Tools", logo: "💻", description: "Custom JavaScript/TypeScript" },
];

export default function IntegrationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredIntegrations = sampleIntegrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Box minHeight="100vh" backgroundColor="var(--pure-black)" color="var(--foreground)">
      <Navbar />
      <Box paddingTop={96} paddingBottom={64}>
        {/* Hero Section */}
        <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box textAlign="center" marginBottom={48}>
            <Badge variant="outline" marginBottom={16} borderColor="var(--border-strong)" color="var(--foreground)">
              <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Plug size={12} /></Box>
              280+ Integrations
            </Badge>
            <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={16} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
              Connect to <Text color="var(--foreground)">Everything</Text>
            </H1>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-400)" maxWidth="var(--container-prose)" marginHorizontal="auto">
              Hanzo Auto comes with 280+ pre-built integrations to connect your favorite apps and services.
              All integrations are also available as MCP servers for use with Claude, Cursor, and other AI tools.
            </Paragraph>
          </Box>

          {/* Search and Filter */}
          <YStack display="flex" flexDirection="column" gap={16} marginBottom={32} $md={{ flexDirection: "row" }}>
            <Box position="relative" flex={1}>
              <Box render="span" display="inline-flex" alignItems="center" position="absolute" left={12} top="50%" y="-50%"><Search size={16} color="var(--neutral-500)" /></Box>
              <Input
                placeholder="Search integrations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                paddingLeft={40} backgroundColor="var(--neutral-900)" borderColor="var(--neutral-800)"
              />
            </Box>
            <XStack display="flex" gap={8} flexWrap="wrap">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                backgroundColor={selectedCategory === null ? "var(--neutral-600)" : undefined} hoverStyle={selectedCategory === null ? { backgroundColor: "var(--neutral-700)" } : undefined}
              >
                All
              </Button>
              {integrationCategories.slice(0, 8).map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  backgroundColor={selectedCategory === category ? "var(--neutral-600)" : undefined} hoverStyle={selectedCategory === category ? { backgroundColor: "var(--neutral-700)" } : undefined}
                >
                  {category}
                </Button>
              ))}
            </XStack>
          </YStack>

          {/* Integrations Grid */}
          <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={16} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }} $xl={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))" }}>
            {filteredIntegrations.map((integration, index) => (
              <Box
                key={index}
                group padding={16} borderRadius="var(--radius-xl)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" cursor="pointer" hoverStyle={{ borderColor: "var(--border-strong)" }}
              >
                <Box fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" marginBottom={8}>{integration.logo}</Box>
                <H3 fontWeight="600" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }}>
                  {integration.name}
                </H3>
                <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">{integration.description}</Paragraph>
                <Badge variant="outline" marginTop={8} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
                  {integration.category}
                </Badge>
              </Box>
            ))}
          </Grid>

          {/* CTA Section */}
          <Box marginTop={64} textAlign="center" padding={32} borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
            <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Need a custom integration?</H2>
            <Paragraph color="var(--neutral-400)" marginBottom={24}>
              All integrations are built with TypeScript and are open source.
              Create your own pieces or request new integrations.
            </Paragraph>
            <XStack display="flex" gap={16} justifyContent="center">
              <Button asChild>
                <a href="https://github.com/hanzoai/auto" target="_blank" rel="noopener noreferrer">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={16} /></Box>
                  View on GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://activepieces.com/pieces" target="_blank" rel="noopener noreferrer">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><ExternalLink size={16} /></Box>
                  Browse All Pieces
                </a>
              </Button>
            </XStack>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
