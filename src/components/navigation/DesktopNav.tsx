import { Anchor, Box, Grid, H3, Link, Paragraph, Text } from '@/gui'
import React from "react";

import ProductsMenu from "./products-menu";
import { SolutionsMenu } from "./solutions-menu";
import { useTheme } from "@/contexts/ThemeContext";
import { NavMenu } from "./NavMenu";

// Meet Hanzo dropdown content
const MeetHanzoContent = ({ closeMenu }: { closeMenu: () => void }) => (
  <Grid display="grid" gridTemplateColumns="repeat(4, minmax(0, 1fr))" gap={32}>
    {/* Featured - About Hanzo */}
    <Box gridColumn="span 1 / span 1">
      <Box padding={16} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--border-strong)" marginBottom={16} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
        <H3 color="var(--foreground)" fontWeight="600" marginBottom={8}>Hanzo AI</H3>
        <Paragraph color="var(--neutral-400)" fontSize="var(--text-xs)" lineHeight="var(--leading-relaxed)" marginBottom={12}>
          Building frontier AI infrastructure since 2017. Techstars-backed.
        </Paragraph>
        <Link tap
          to="/team"
          onClick={closeMenu}
          display="inline-flex" alignItems="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
        >
          Meet the team →
        </Link>
      </Box>
      <Box render="ul" rowGap={8}>
        <li><Link tap to="/philosophy" onClick={closeMenu} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>Philosophy</Link></li>
        <li><Link tap to="/leadership" onClick={closeMenu} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>Leadership</Link></li>
        <li><Link tap to="/brand" onClick={closeMenu} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>Brand</Link></li>
        <li><Link tap to="/press" onClick={closeMenu} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>Press</Link></li>
      </Box>
    </Box>

    {/* Research & Models */}
    <div>
      <H3 color="var(--neutral-500)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={12} textTransform="uppercase" letterSpacing="0.05em">Research</H3>
      <Box render="ul" rowGap={8}>
        <li>
          <Link tap to="/zen" onClick={closeMenu} group display="flex" alignItems="flex-start" gap={8}>
            <Text color="var(--foreground)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">🧠</Text>
            <div>
              <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }}>Zen LM</Text>
              <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">30+ open foundation models</Paragraph>
            </div>
          </Link>
        </li>
        <li>
          <Link tap to="/zen/models" onClick={closeMenu} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>All Models</Link>
        </li>
        <li>
          <Anchor tap href="https://zenlm.org/research" target="_blank" rel="noopener noreferrer" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>Papers</Anchor>
        </li>
        <li>
          <Anchor tap href="https://huggingface.co/zenlm" target="_blank" rel="noopener noreferrer" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>HuggingFace</Anchor>
        </li>
        <li>
          <Link tap to="/open-source" onClick={closeMenu} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>Open Source</Link>
        </li>
      </Box>
    </div>

    {/* Products */}
    <div>
      <H3 color="var(--neutral-500)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={12} textTransform="uppercase" letterSpacing="0.05em">Products</H3>
      <Box render="ul" rowGap={8}>
        <li>
          <Link tap to="/dev" onClick={closeMenu} group display="flex" alignItems="flex-start" gap={8}>
            <Text color="var(--foreground)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">⚡</Text>
            <div>
              <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }}>Hanzo Dev</Text>
              <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">AI coding assistant</Paragraph>
            </div>
          </Link>
        </li>
        <li><Link tap to="/ai" onClick={closeMenu} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>AI Platform</Link></li>
        <li><Link tap to="/cloud" onClick={closeMenu} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>Cloud</Link></li>
        <li><Link tap to="/platform" onClick={closeMenu} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>Infrastructure</Link></li>
        <li><Link tap to="/products" onClick={closeMenu} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>All Products →</Link></li>
      </Box>
    </div>

    {/* Connect & Trust */}
    <div>
      <H3 color="var(--neutral-500)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={12} textTransform="uppercase" letterSpacing="0.05em">Connect</H3>
      <Box render="ul" rowGap={8} marginBottom={24}>
        <li><Link tap to="/contact" onClick={closeMenu} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>Contact Us</Link></li>
        <li><Link tap to="/enterprise" onClick={closeMenu} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>Enterprise</Link></li>
        <li><Link tap to="/referrals" onClick={closeMenu} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>Referral Program</Link></li>
      </Box>
      <H3 color="var(--neutral-500)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={12} textTransform="uppercase" letterSpacing="0.05em">Trust</H3>
      <Box render="ul" rowGap={8}>
        <li><Link tap to="/security" onClick={closeMenu} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>Security</Link></li>
        <li><Link tap to="/status" onClick={closeMenu} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>System Status</Link></li>
      </Box>
    </div>
  </Grid>
);

// Learn dropdown content
const LearnContent = ({ closeMenu }: { closeMenu: () => void }) => (
  <Grid display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap={24}>
    <div>
      <H3 color="var(--neutral-500)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={12} textTransform="uppercase" letterSpacing="0.05em">Documentation</H3>
      <Box render="ul" rowGap={8}>
        <li><Anchor tap href="https://docs.hanzo.ai" target="_blank" rel="noopener noreferrer" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>Docs</Anchor></li>
        <li><Anchor tap href="https://docs.hanzo.ai/tutorials" target="_blank" rel="noopener noreferrer" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>Tutorials</Anchor></li>
        <li><Anchor tap href="https://docs.hanzo.ai/api" target="_blank" rel="noopener noreferrer" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>API Reference</Anchor></li>
      </Box>
    </div>
    <div>
      <H3 color="var(--neutral-500)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={12} textTransform="uppercase" letterSpacing="0.05em">Community</H3>
      <Box render="ul" rowGap={8}>
        <li><Anchor tap href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>GitHub</Anchor></li>
        <li><Anchor tap href="https://discord.gg/hanzo" target="_blank" rel="noopener noreferrer" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>Discord</Anchor></li>
        <li><Link tap to="/blog" onClick={closeMenu} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>Blog</Link></li>
      </Box>
    </div>
    <div>
      <H3 color="var(--neutral-500)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={12} textTransform="uppercase" letterSpacing="0.05em">Support</H3>
      <Box render="ul" rowGap={8}>
        <li><Link tap to="/contact" onClick={closeMenu} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>Support Center</Link></li>
        <li><Link tap to="/status" onClick={closeMenu} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>Status</Link></li>
      </Box>
    </div>
  </Grid>
);

const DesktopNav = () => {
  const { isDarkMode } = useTheme();

  return (
    <Box display="none" alignItems="center" columnGap={24} $md={{ display: "flex" }}>
      {/* Meet Hanzo dropdown */}
      <NavMenu label="Meet Hanzo">
        {(closeMenu) => <MeetHanzoContent closeMenu={closeMenu} />}
      </NavMenu>

      {/* Platform (Products) dropdown */}
      <ProductsMenu />

      {/* Solutions dropdown */}
      <SolutionsMenu />

      {/* Pricing direct link */}
      <Link tap
        to="/pricing"
        color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" hoverStyle={{ color: "var(--foreground)" }}
      >
        Pricing
      </Link>

      {/* Learn dropdown */}
      <NavMenu label="Learn">
        {(closeMenu) => <LearnContent closeMenu={closeMenu} />}
      </NavMenu>
    </Box>
  );
};

export default DesktopNav;
