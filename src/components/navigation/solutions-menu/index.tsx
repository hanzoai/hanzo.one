import { Box, Button, Grid, H3, Link, Text, XStack } from '@/gui'
import { capabilitiesNav, industriesNav } from "@/constants/navigation-data";

import NavMenu from "../NavMenu";
import { Users, Shield, Building2, ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ITEMS_PER_CATEGORY = 4;

export const SolutionsMenu = () => {
  const { isDarkMode } = useTheme();

  return (
    <NavMenu label="Solutions">
      {(closeMenu) => (
        <Box width="100%">
          {/* Featured Row */}
          <Box marginBottom={16} paddingBottom={16} borderBottomWidth={1} borderColor={isDarkMode ? "var(--neutral-800)" : "var(--neutral-200)"}>
            <XStack display="flex" alignItems="center" gap={8} marginBottom={8}>
              <Sparkles size={14} color="var(--foreground)" />
              <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" textTransform="uppercase" letterSpacing="0.05em" color={isDarkMode ? "var(--neutral-400)" : "var(--neutral-500)"}>Featured Solutions</Text>
            </XStack>
            <XStack display="flex" flexWrap="wrap" gap={8}>
              <Link
                to="/agency"
                onClick={closeMenu}
                group display="flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={6} borderRadius="var(--radius-lg)" borderWidth={1} transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={isDarkMode ? "rgb(255 255 255 / 0.5)" : "var(--neutral-100)"} borderColor={isDarkMode ? "var(--neutral-800)" : "var(--neutral-200)"} hoverStyle={isDarkMode ? { borderColor: "var(--border-strong)", backgroundColor: "var(--surface-card)" } : { borderColor: "var(--border-strong)", backgroundColor: "var(--neutral-50)" }}
              >
                <Box render="span" display="inline-flex" alignItems="center" $group-hover={{ color: "var(--foreground)" }}><Shield size={14} /></Box>
                <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" $group-hover={{ color: "var(--foreground)" }} color={isDarkMode ? "var(--neutral-300)" : "var(--neutral-700)"}>Hanzo Agency</Text>
              </Link>
              <Link
                to="/enterprise"
                onClick={closeMenu}
                group display="flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={6} borderRadius="var(--radius-lg)" borderWidth={1} transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={isDarkMode ? "rgb(255 255 255 / 0.5)" : "var(--neutral-100)"} borderColor={isDarkMode ? "var(--neutral-800)" : "var(--neutral-200)"} hoverStyle={isDarkMode ? { borderColor: "var(--border-strong)", backgroundColor: "var(--surface-card)" } : { borderColor: "var(--border-strong)", backgroundColor: "var(--neutral-50)" }}
              >
                <Box render="span" display="inline-flex" alignItems="center" $group-hover={{ color: "var(--foreground)" }}><Building2 size={14} /></Box>
                <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" $group-hover={{ color: "var(--foreground)" }} color={isDarkMode ? "var(--neutral-300)" : "var(--neutral-700)"}>Enterprise</Text>
              </Link>
            </XStack>
          </Box>

          {/* Two Column Grid - Capabilities & Industries */}
          <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" columnGap={24} rowGap={16} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
            {/* Capabilities */}
            <Box rowGap={6}>
              <H3 fontSize="10px" fontWeight="600" textTransform="uppercase" letterSpacing="0.05em" marginBottom={8} color={isDarkMode ? "var(--neutral-500)" : "var(--neutral-400)"}>
                Capabilities
              </H3>
              <Box rowGap={2}>
                {capabilitiesNav[0].items.slice(0, ITEMS_PER_CATEGORY).map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link tap
                      key={item.title}
                      to={item.href}
                      onClick={closeMenu}
                      group display="flex" alignItems="center" gap={6} paddingVertical={2}
                    >
                      {Icon && <Icon height={12} width={12} $group-hover={{ color: "var(--foreground)" }} color={isDarkMode ? "var(--neutral-500)" : "var(--neutral-400)"} />}
                      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }} color={isDarkMode ? "var(--neutral-400)" : "var(--neutral-600)"}>
                        {item.title}
                      </Text>
                    </Link>
                  );
                })}
                {capabilitiesNav[0].items.length > ITEMS_PER_CATEGORY && (
                  <Link tap
                    to="/solutions"
                    onClick={closeMenu}
                    display="flex" alignItems="center" gap={4} paddingVertical={2} fontSize="10px" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }} color={isDarkMode ? "var(--neutral-600)" : "var(--neutral-500)"}
                  >
                    +{capabilitiesNav[0].items.length - ITEMS_PER_CATEGORY} more
                    <ArrowRight size={10} />
                  </Link>
                )}
              </Box>
            </Box>

            {/* Industries - split into two columns */}
            <Box rowGap={6}>
              <H3 fontSize="10px" fontWeight="600" textTransform="uppercase" letterSpacing="0.05em" marginBottom={8} color={isDarkMode ? "var(--neutral-500)" : "var(--neutral-400)"}>
                Industries
              </H3>
              <Box rowGap={2}>
                {industriesNav[0].items.slice(0, ITEMS_PER_CATEGORY).map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link tap
                      key={item.title}
                      to={item.href}
                      onClick={closeMenu}
                      group display="flex" alignItems="center" gap={6} paddingVertical={2}
                    >
                      {Icon && <Icon height={12} width={12} $group-hover={{ color: "var(--foreground)" }} color={isDarkMode ? "var(--neutral-500)" : "var(--neutral-400)"} />}
                      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }} color={isDarkMode ? "var(--neutral-400)" : "var(--neutral-600)"}>
                        {item.title}
                      </Text>
                    </Link>
                  );
                })}
                {industriesNav[0].items.length > ITEMS_PER_CATEGORY && (
                  <Link tap
                    to="/industries"
                    onClick={closeMenu}
                    display="flex" alignItems="center" gap={4} paddingVertical={2} fontSize="10px" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }} color={isDarkMode ? "var(--neutral-600)" : "var(--neutral-500)"}
                  >
                    +{industriesNav[0].items.length - ITEMS_PER_CATEGORY} more
                    <ArrowRight size={10} />
                  </Link>
                )}
              </Box>
            </Box>

            {/* More Industries */}
            <Box rowGap={6}>
              <H3 fontSize="10px" fontWeight="600" textTransform="uppercase" letterSpacing="0.05em" marginBottom={8} color={isDarkMode ? "var(--neutral-500)" : "var(--neutral-400)"}>
                More Industries
              </H3>
              <Box rowGap={2}>
                {industriesNav[0].items.slice(ITEMS_PER_CATEGORY, ITEMS_PER_CATEGORY * 2).map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link tap
                      key={item.title}
                      to={item.href}
                      onClick={closeMenu}
                      group display="flex" alignItems="center" gap={6} paddingVertical={2}
                    >
                      {Icon && <Icon height={12} width={12} $group-hover={{ color: "var(--foreground)" }} color={isDarkMode ? "var(--neutral-500)" : "var(--neutral-400)"} />}
                      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }} color={isDarkMode ? "var(--neutral-400)" : "var(--neutral-600)"}>
                        {item.title}
                      </Text>
                    </Link>
                  );
                })}
              </Box>
            </Box>

            {/* Use Cases */}
            <Box rowGap={6}>
              <H3 fontSize="10px" fontWeight="600" textTransform="uppercase" letterSpacing="0.05em" marginBottom={8} color={isDarkMode ? "var(--neutral-500)" : "var(--neutral-400)"}>
                Use Cases
              </H3>
              <Box rowGap={2}>
                <Link tap
                  to="/solutions/automation"
                  onClick={closeMenu}
                  group display="flex" alignItems="center" gap={6} paddingVertical={2}
                >
                  <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }} color={isDarkMode ? "var(--neutral-400)" : "var(--neutral-600)"}>
                    Automation
                  </Text>
                </Link>
                <Link tap
                  to="/solutions/analytics"
                  onClick={closeMenu}
                  group display="flex" alignItems="center" gap={6} paddingVertical={2}
                >
                  <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }} color={isDarkMode ? "var(--neutral-400)" : "var(--neutral-600)"}>
                    Analytics
                  </Text>
                </Link>
                <Link tap
                  to="/solutions/content"
                  onClick={closeMenu}
                  group display="flex" alignItems="center" gap={6} paddingVertical={2}
                >
                  <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }} color={isDarkMode ? "var(--neutral-400)" : "var(--neutral-600)"}>
                    Content Generation
                  </Text>
                </Link>
                <Link tap
                  to="/solutions/customer-support"
                  onClick={closeMenu}
                  group display="flex" alignItems="center" gap={6} paddingVertical={2}
                >
                  <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }} color={isDarkMode ? "var(--neutral-400)" : "var(--neutral-600)"}>
                    Customer Support
                  </Text>
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Footer */}
          <XStack marginTop={16} paddingTop={16} borderTopWidth={1} display="flex" alignItems="center" justifyContent="space-between" borderColor={isDarkMode ? "var(--neutral-800)" : "var(--neutral-200)"}>
            <XStack display="flex" alignItems="center" gap={12}>
              <Text fontSize="10px" color={isDarkMode ? "var(--neutral-500)" : "var(--neutral-400)"}>Need custom solutions?</Text>
            </XStack>
            <XStack display="flex" gap={8}>
              <Button
                size="sm"
                variant="outline"
                height={28} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" paddingHorizontal={12} backgroundColor={isDarkMode ? "transparent" : "transparent"} borderColor={isDarkMode ? "var(--neutral-700)" : "var(--neutral-300)"} color={isDarkMode ? "var(--neutral-300)" : "var(--neutral-700)"} hoverStyle={isDarkMode ? { backgroundColor: "var(--neutral-800)", color: "var(--foreground)" } : { backgroundColor: "var(--neutral-100)", color: "var(--pure-black)" }}
                asChild
              >
                <Link tap to="/contact" onClick={closeMenu}>
                  Contact Sales
                </Link>
              </Button>
              <Button
                size="sm"
                backgroundColor="var(--neutral-800)" color="var(--foreground)" height={28} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" paddingHorizontal={12} hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }}
                asChild
              >
                <Link to="/solutions" onClick={closeMenu}>
                  All Solutions
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={4}><ArrowRight size={12} /></Box>
                </Link>
              </Button>
            </XStack>
          </XStack>
        </Box>
      )}
    </NavMenu>
  );
};

export default SolutionsMenu;