import { Anchor, Box, Button, Link, Text, XStack } from '@/gui'
import { useState } from "react";
import { Menu, X, ChevronRight, Search } from "lucide-react";


interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onOpenSearch?: () => void;
}

// Mobile navigation structure matching desktop
const mobileNav = [
  {
    title: "Explore",
    sections: [
      {
        title: "Quick Links",
        items: [
          { title: "All Products", href: "/products" },
          { title: "Hanzo Dev", href: "/dev" },
          { title: "AI & Models", href: "/ai" },
          { title: "Hanzo Cloud", href: "/cloud" },
        ]
      },
      {
        title: "Resources",
        items: [
          { title: "Documentation", href: "https://docs.hanzo.ai", external: true },
          { title: "Pricing", href: "/pricing" },
          { title: "Contact Sales", href: "/contact" },
          { title: "Status", href: "/status" },
        ]
      }
    ]
  },
  {
    title: "Meet Hanzo",
    sections: [
      {
        title: "Company",
        items: [
          { title: "Team", href: "/team" },
          { title: "Leadership", href: "/leadership" },
          { title: "Philosophy", href: "/philosophy" },
          { title: "Zen Models", href: "/zen" },
          { title: "Open Source", href: "/open-source" },
        ]
      },
      {
        title: "Connect",
        items: [
          { title: "Contact", href: "/contact" },
          { title: "Enterprise", href: "/enterprise" },
          { title: "Referrals", href: "/referrals" },
        ]
      },
      {
        title: "Trust",
        items: [
          { title: "Security", href: "/security" },
          { title: "Status", href: "/status" },
        ]
      }
    ]
  },
  {
    title: "Platform",
    sections: [
      {
        title: "Products",
        items: [
          { title: "Hanzo Dev", href: "/dev" },
          { title: "Hanzo Base", href: "/base" },
          { title: "AI & Models", href: "/ai" },
          { title: "Vector DB", href: "/vector" },
          { title: "Functions", href: "/functions" },
          { title: "Identity", href: "/identity" },
        ]
      },
      {
        title: "Infrastructure",
        items: [
          { title: "Hanzo Cloud", href: "/cloud" },
          { title: "Edge", href: "/edge" },
          { title: "Platform", href: "/platform" },
          { title: "Blockchain", href: "/blockchain" },
        ]
      }
    ]
  },
  {
    title: "Solutions",
    sections: [
      {
        title: "Use Cases",
        items: [
          { title: "AI Agents", href: "/solutions/capabilities" },
          { title: "Code Modernization", href: "/solutions/capabilities" },
          { title: "Customer Support", href: "/solutions/capabilities" },
        ]
      },
      {
        title: "Industries",
        items: [
          { title: "Financial Services", href: "/solutions/industries" },
          { title: "Healthcare", href: "/solutions/industries" },
          { title: "Enterprise", href: "/enterprise" },
        ]
      }
    ]
  },
  {
    title: "Pricing",
    href: "/pricing"
  },
  {
    title: "Learn",
    sections: [
      {
        title: "Documentation",
        items: [
          { title: "Docs", href: "https://docs.hanzo.ai", external: true },
          { title: "Tutorials", href: "https://docs.hanzo.ai/tutorials", external: true },
          { title: "API Reference", href: "https://docs.hanzo.ai/api", external: true },
        ]
      },
      {
        title: "Community",
        items: [
          { title: "GitHub", href: "https://github.com/hanzoai", external: true },
          { title: "Discord", href: "https://discord.gg/hanzo", external: true },
          { title: "Blog", href: "/blog" },
        ]
      }
    ]
  }
];

export const MobileMenu = ({ isOpen, onToggle, onOpenSearch }: MobileMenuProps) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const handleLinkClick = () => {
    onToggle();
  };

  return (
    <>
      <XStack display="flex" alignItems="center" gap={8} $md={{ display: "none" }}>
        {/* Search button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onOpenSearch}
          color="var(--neutral-400)" hoverStyle={{ color: "var(--foreground)" }}
        >
          <Search size={20} />
        </Button>

        {/* Menu toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          color="var(--foreground)"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </XStack>

      {isOpen && (
        <Box position="fixed" top={0} right={0} bottom={0} left={0} zIndex={50} $md={{ display: "none" }}>
          <Box position="fixed" top={0} right={0} bottom={0} left={0} backgroundColor="rgb(0 0 0 / 0.95)" backdropFilter="blur(12px)" WebkitBackdropFilter="blur(12px)" onClick={onToggle} />

          <Box position="fixed" top={0} right={0} bottom={0} left={0} width="100%" backgroundColor="var(--pure-black)" paddingTop="var(--header-height)" height="100vh" overflowY="auto">
            {/* Search / Command palette widget at top */}
            <Box paddingHorizontal={16} paddingTop={16} paddingBottom={8}>
              <XStack minHeight={44}
                onClick={() => {
                  onToggle();
                  onOpenSearch?.();
                }}
                render="button" width="100%" display="flex" alignItems="center" gap={12} paddingHorizontal={16} paddingVertical={12} borderRadius="var(--radius-xl)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" color="var(--neutral-400)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)", backgroundColor: "var(--neutral-800)", borderColor: "var(--neutral-700)" }}
              >
                <Search size={20} />
                <Text flex={1} textAlign="left" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Search docs, products, pages...</Text>
                <Text display="inline-flex" alignItems="center" gap={2} paddingHorizontal={8} paddingVertical={4} fontSize="11px" fontFamily="var(--font-mono)" backgroundColor="var(--neutral-800)" borderWidth={1} borderColor="var(--neutral-700)" borderRadius="var(--radius)" color="var(--neutral-500)">
                  <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">⌘</Text>K
                </Text>
              </XStack>
            </Box>

            <Box paddingHorizontal={16} paddingVertical={16} rowGap={4}>
              {mobileNav.map((item) => (
                <Box key={item.title} borderBottomWidth={1} borderColor="var(--border-strong)" paddingBottom={8} marginBottom={8}>
                  {item.href ? (
                    <Link tap
                      to={item.href}
                      display="block" paddingHorizontal={12} paddingVertical={10} fontSize="var(--text-base)" lineHeight="var(--leading-base)" fontWeight="500" color="var(--neutral-300)" borderRadius="var(--radius-lg)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)", backgroundColor: "var(--surface-card)" }}
                      onClick={handleLinkClick}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <XStack minHeight={44}
                        render="button" width="100%" display="flex" justifyContent="space-between" alignItems="center" paddingHorizontal={12} paddingVertical={10} fontSize="var(--text-base)" lineHeight="var(--leading-base)" fontWeight="500" color="var(--neutral-300)" borderRadius="var(--radius-lg)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)", backgroundColor: "var(--surface-card)" }}
                        onClick={() => toggleSection(item.title)}
                      >
                        {item.title}
                        <ChevronRight size={16} />
                      </XStack>

                      {expandedSections[item.title] && item.sections && (
                        <Box marginTop={8} marginLeft={8} rowGap={16} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" padding={12}>
                          {item.sections.map((section) => (
                            <div key={section.title}>
                              <Box paddingHorizontal={8} paddingVertical={4} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" color="var(--neutral-500)" textTransform="uppercase" letterSpacing="0.05em">
                                {section.title}
                              </Box>
                              <Box rowGap={2} marginTop={4}>
                                {section.items.map((subItem) => (
                                  subItem.external ? (
                                    <Anchor tap
                                      key={subItem.title}
                                      href={subItem.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      display="block" paddingHorizontal={8} paddingVertical={6} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" borderRadius="var(--radius)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)", backgroundColor: "var(--surface-card)" }}
                                      onClick={handleLinkClick}
                                    >
                                      {subItem.title}
                                    </Anchor>
                                  ) : (
                                    <Link tap
                                      key={subItem.title}
                                      to={subItem.href}
                                      display="block" paddingHorizontal={8} paddingVertical={6} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" borderRadius="var(--radius)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)", backgroundColor: "var(--surface-card)" }}
                                      onClick={handleLinkClick}
                                    >
                                      {subItem.title}
                                    </Link>
                                  )
                                ))}
                              </Box>
                            </div>
                          ))}
                        </Box>
                      )}
                    </>
                  )}
                </Box>
              ))}
            </Box>

            {/* Bottom buttons */}
            <Box paddingHorizontal={16} paddingVertical={16} rowGap={12} borderTopWidth={1} borderColor="var(--neutral-800)">
              <Link tap to="/contact" onClick={handleLinkClick}>
                <Button variant="ghost" width="100%" color="var(--neutral-300)" justifyContent="center" hoverStyle={{ color: "var(--foreground)", backgroundColor: "var(--surface-card)" }}>
                  Contact sales
                </Button>
              </Link>
              <Anchor tap
                href="https://cloud.hanzo.ai"
                display="flex" width="100%" backgroundColor="var(--foreground)" color="var(--pure-black)" borderRadius="var(--radius-full)" height={40} alignItems="center" justifyContent="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="all 200ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ backgroundColor: "var(--neutral-200)" }} pressStyle={{ backgroundColor: "var(--neutral-300)" }}
              >
                Try Hanzo
              </Anchor>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
