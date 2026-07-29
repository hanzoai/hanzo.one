import { Anchor, Box, Grid, H3, HanzoLogo, Link, Text, XStack, YStack } from '@/gui'
import React, { useState } from "react";

import {
  Code,
  BookOpen,
  PenLine,
  Send,
  Globe,
  ChevronDown,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

// Footer navigation data matching the design
const footerLinks = {
  products: {
    title: "Products",
    items: [
      { title: "Hanzo App", href: "/app" },
      { title: "Hanzo Base", href: "/base" },
      { title: "Hanzo Chat", href: "/bot" },
      { title: "Hanzo Dev", href: "/dev" },
      { title: "Hanzo Extension", href: "/extension" },
      { title: "Hanzo MCP", href: "/products/apps/mcp" },
      { title: "Hanzo Platform", href: "/platform" },
      { title: "See All Products", href: "/products", highlight: true },
    ],
  },
  features: {
    title: "Features",
    items: [
      { title: "CLI", href: "/download" },
      { title: "VS Code extension", href: "https://marketplace.visualstudio.com/items?itemName=hanzo.hanzo-dev", external: true },
      { title: "Slack", href: "https://hanzo.ai/slack", external: true },
      { title: "GitHub App", href: "https://github.com/apps/hanzo-ai", external: true },
      { title: "Agents", href: "/operative" },
      { title: "Observability", href: "/analytics" },
    ],
  },
  solutions: {
    title: "Solutions",
    items: [
      { title: "AI agents", href: "/solutions/capabilities" },
      { title: "Code modernization", href: "/solutions/capabilities" },
      { title: "Compliance", href: "/solutions/industries" },
      { title: "Customer support", href: "/solutions/capabilities" },
      { title: "Financial services", href: "/solutions/industries" },
      { title: "Healthcare", href: "/solutions/industries" },
      { title: "Public sector", href: "/solutions/industries" },
      { title: "Nonprofits", href: "/solutions/industries" },
    ],
  },
  models: {
    title: "Models",
    items: [
      { title: "Zoo", href: "https://zoo.ngo", external: true },
      { title: "Hanzo L1", href: "/ai" },
      { title: "SPC", href: "/ai" },
    ],
  },
  learn: {
    title: "Learn",
    items: [
      { title: "Docs", href: "https://docs.hanzo.ai", external: true },
      { title: "Blog", href: "/blog" },
      { title: "Tutorials", href: "https://docs.hanzo.ai/tutorials", external: true },
    ],
  },
  helpSecurity: {
    title: "Help and security",
    items: [
      { title: "Availability", href: "/status" },
      { title: "Status", href: "/status" },
      { title: "Support center", href: "/contact" },
      { title: "Privacy", href: "/privacy" },
      { title: "Terms", href: "/terms" },
      { title: "Responsible disclosure", href: "/security" },
      { title: "Usage policy", href: "/terms" },
    ],
  },
  company: {
    title: "Company",
    items: [
      { title: "Careers", href: "/careers" },
      { title: "Philosophy", href: "/philosophy" },
      { title: "Zen Models", href: "/zen" },
      { title: "Research", href: "https://zenlm.org", external: true },
      { title: "Contact", href: "/contact" },
      { title: "About", href: "/team" },
    ],
  },
};

// Chat widget action buttons - matching design order
const chatActions = [
  { icon: PenLine, label: "Write" },
  { icon: BookOpen, label: "Learn" },
  { icon: Code, label: "Code" },
];

// Social links with SVG icons
const socialLinks = [
  {
    name: "X",
    href: "https://x.com/hanzoai",
    icon: (
      <Box display="inline-block" render="svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </Box>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/hanzoai",
    icon: (
      <Box display="inline-block" render="svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </Box>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@hanzoai",
    icon: (
      <Box display="inline-block" render="svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </Box>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/hanzoai",
    icon: (
      <Box display="inline-block" render="svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </Box>
    ),
  },
];

const FooterColumn = ({
  title,
  items,
}: {
  title: string;
  items: Array<{ title: string; href: string; external?: boolean; highlight?: boolean }>;
}) => (
  <div>
    <H3 color="var(--neutral-400)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={12} textTransform="uppercase" letterSpacing="0.05em">{title}</H3>
    <Box render="ul" rowGap={8}>
      {items.map((item) => (
        <li key={item.title}>
          {item.external ? (
            <Anchor
              tap
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" color={item.highlight ? "var(--foreground)" : "var(--neutral-300)"} hoverStyle={item.highlight ? { color: "var(--neutral-300)" } : { color: "var(--foreground)" }}
            >
              {item.title}
            </Anchor>
          ) : (
            <Link
              tap
              to={item.href}
              fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" color={item.highlight ? "var(--foreground)" : "var(--neutral-300)"} hoverStyle={item.highlight ? { color: "var(--neutral-300)" } : { color: "var(--foreground)" }}
            >
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </Box>
  </div>
);

const Footer = () => {
  const [chatInput, setChatInput] = useState("");
  const { mode, setMode, isDarkMode } = useTheme();

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatInput.trim()) {
      // Dispatch event to open global chat with this message
      window.dispatchEvent(new CustomEvent('openGlobalChat', { detail: { message: chatInput } }));
      setChatInput("");
    }
  };

  return (
    <Box render="footer" backgroundColor="var(--pure-black)" borderTopWidth={1} borderColor="var(--border-strong)">
      <Box maxWidth="1400px" marginHorizontal="auto" paddingHorizontal={16} paddingVertical={48} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32, paddingVertical: 64 }}>
        {/* Main footer content */}
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={40} $lg={{ gridTemplateColumns: "repeat(12, minmax(0, 1fr))", gap: 32 }}>
          {/* Logo and chat widget - left column */}
          <Box rowGap={24} $lg={{ gridColumn: "span 3 / span 3" }}>
            {/* Logo */}
            <Link tap to="/" display="flex" alignItems="center" columnGap={8}>
              <HanzoLogo size={32} />
              <Text color="var(--foreground)" fontWeight="600" fontSize="var(--text-xl)" lineHeight="var(--leading-xl)">Hanzo</Text>
            </Link>

            {/* Chat widget */}
            <Box onSubmit={handleChatSubmit} render="form" rowGap={12}>
              {/* Chat input */}
              <Box position="relative">
                <Box display="inline-block" minHeight={44}
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="How can I help you today?"
                  render="input" width="100%" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" paddingHorizontal={16} paddingVertical={10} paddingRight={40} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" placeholderTextColor="var(--neutral-500)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" focusStyle={{ outlineStyle: "none", borderColor: "var(--neutral-700)" }}
                />
                <XStack
                  type="submit"
                  aria-label="Send"
                  render="button" position="absolute" right={4} top="50%" y="-50%" width={44} height={44} borderRadius="var(--radius)" display="flex" alignItems="center" justifyContent="center" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ opacity: 0.8 }}
                  backgroundColor="transparent"
                >
                  <Send size={16} color="var(--foreground)" />
                </XStack>
              </Box>

              {/* Action buttons */}
              <XStack display="flex" flexWrap="wrap" gap={8}>
                {chatActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <XStack minHeight={44}
                      key={action.label}
                      type="button"
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('openGlobalChat', { detail: { action: action.label } }));
                      }}
                      render="button" display="inline-flex" alignItems="center" gap={6} paddingHorizontal={12} paddingVertical={6} borderRadius="var(--radius-md)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" color="var(--neutral-400)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-800)", color: "var(--foreground)" }}
                    >
                      <Icon width={12} height={12} />
                      {action.label}
                    </XStack>
                  );
                })}
              </XStack>
            </Box>
          </Box>

          {/* Navigation columns */}
          <Box $lg={{ gridColumn: "span 9 / span 9" }}>
            <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={32} $sm={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: 16 }}>
              <FooterColumn {...footerLinks.products} />
              <FooterColumn {...footerLinks.features} />
              <FooterColumn {...footerLinks.solutions} />

              {/* Models + Learn stacked */}
              <Box rowGap={24}>
                <FooterColumn {...footerLinks.models} />
                <FooterColumn {...footerLinks.learn} />
              </Box>

              <FooterColumn {...footerLinks.helpSecurity} />
              <FooterColumn {...footerLinks.company} />
            </Grid>
          </Box>
        </Grid>

        {/* Bottom bar */}
        <Box marginTop={48} paddingTop={24} borderTopWidth={1} borderColor="var(--border-strong)">
          <YStack display="flex" flexDirection="column" alignItems="flex-start" justifyContent="space-between" gap={16} $sm={{ flexDirection: "row", alignItems: "center" }}>
            {/* Copyright */}
            <Box rowGap={2}>
              <Anchor
                tap
                href="https://hanzo.industries"
                target="_blank"
                rel="noopener noreferrer"
                color="var(--neutral-500)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" letterSpacing="0.05em" textTransform="uppercase" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--neutral-400)" }}
              >
                BY HANZO INDUSTRIES
              </Anchor>
              <Box color="var(--neutral-600)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
                © 2016-{new Date().getFullYear()} HANZO.AI
              </Box>
            </Box>

            {/* Social links */}
            <XStack display="flex" alignItems="center" gap={12}>
              {socialLinks.map((social) => (
                <Anchor
                  tap
                  key={social.name}
                  minWidth={44}
                  justifyContent="center"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="var(--neutral-500)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
                  aria-label={social.name}
                >
                  {social.icon}
                </Anchor>
              ))}
            </XStack>

            {/* Theme switcher - like Vercel */}
            <XStack display="inline-flex" alignItems="center" borderRadius="var(--radius-full)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" padding={2}>
              <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                onClick={() => setMode('system')}
                render="button" padding={6} borderRadius="var(--radius-full)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={mode === 'system' ? "var(--neutral-700)" : undefined} color={mode === 'system' ? "var(--foreground)" : "var(--neutral-500)"} hoverStyle={mode === 'system' ? undefined : { color: "var(--neutral-300)" }}
                title="System theme"
              >
                <Monitor size={14} />
              </Box>
              <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                onClick={() => setMode('light')}
                render="button" padding={6} borderRadius="var(--radius-full)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={mode === 'light' ? "var(--neutral-700)" : undefined} color={mode === 'light' ? "var(--foreground)" : "var(--neutral-500)"} hoverStyle={mode === 'light' ? undefined : { color: "var(--neutral-300)" }}
                title="Light theme"
              >
                <Sun size={14} />
              </Box>
              <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                onClick={() => setMode('dark')}
                render="button" padding={6} borderRadius="var(--radius-full)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={mode === 'dark' ? "var(--neutral-700)" : undefined} color={mode === 'dark' ? "var(--foreground)" : "var(--neutral-500)"} hoverStyle={mode === 'dark' ? undefined : { color: "var(--neutral-300)" }}
                title="Dark theme"
              >
                <Moon size={14} />
              </Box>
            </XStack>

            {/* Language selector */}
            <XStack minHeight={44} render="button" display="inline-flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={6} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" color="var(--neutral-400)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-800)", color: "var(--foreground)" }}>
              <Globe size={14} />
              English (US)
              <ChevronDown size={12} />
            </XStack>
          </YStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
