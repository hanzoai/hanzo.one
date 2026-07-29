import { Box, Button, Grid, H3, Link, Text, XStack } from '@/gui'
import { productsNav, featuredProducts } from "@/constants/navigation-data";

import NavMenu from "../NavMenu";
import { Sparkles, ArrowRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ITEMS_PER_CATEGORY = 3;

export const ProductsMenu = () => {
  const { isDarkMode } = useTheme();

  return (
    <NavMenu label="Products">
      {(closeMenu) => (
        <Box width="100%">
          {/* Featured Products Row */}
          <Box marginBottom={16} paddingBottom={16} borderBottomWidth={1} borderColor={isDarkMode ? "var(--neutral-800)" : "var(--neutral-200)"}>
            <XStack display="flex" alignItems="center" gap={8} marginBottom={8}>
              <Sparkles size={14} color="var(--foreground)" />
              <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" textTransform="uppercase" letterSpacing="0.05em" color={isDarkMode ? "var(--neutral-400)" : "var(--neutral-500)"}>Featured</Text>
            </XStack>
            <XStack display="flex" flexWrap="wrap" gap={8}>
              {featuredProducts.map((product) => {
                const Icon = product.icon;
                return (
                  <Link tap
                    key={product.title}
                    to={product.href}
                    onClick={closeMenu}
                    group display="flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={6} borderRadius="var(--radius-lg)" borderWidth={1} transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={isDarkMode ? "rgb(255 255 255 / 0.5)" : "var(--neutral-100)"} borderColor={isDarkMode ? "var(--neutral-800)" : "var(--neutral-200)"} hoverStyle={isDarkMode ? { borderColor: "var(--border-strong)", backgroundColor: "var(--surface-card)" } : { borderColor: "var(--border-strong)", backgroundColor: "var(--neutral-50)" }}
                  >
                    {Icon && <Icon height={14} width={14} $group-hover={{ color: "var(--foreground)" }} color={isDarkMode ? "var(--neutral-400)" : "var(--neutral-500)"} />}
                    <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" $group-hover={{ color: "var(--foreground)" }} color={isDarkMode ? "var(--neutral-300)" : "var(--neutral-700)"}>{product.title}</Text>
                  </Link>
                );
              })}
            </XStack>
          </Box>

          {/* 9-Category Grid - Condensed to 3 items per category */}
          <Grid display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" columnGap={24} rowGap={16} $lg={{ gridTemplateColumns: "repeat(6, minmax(0, 1fr))" }}>
            {productsNav.map((section) => (
              <Box key={section.title} rowGap={6}>
                <H3 fontSize="10px" fontWeight="600" textTransform="uppercase" letterSpacing="0.05em" marginBottom={8} color={isDarkMode ? "var(--neutral-500)" : "var(--neutral-400)"}>
                  {section.title}
                </H3>
                <Box rowGap={2}>
                  {section.items.slice(0, ITEMS_PER_CATEGORY).map((item) => {
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
                  {section.items.length > ITEMS_PER_CATEGORY && (
                    <Link tap
                      to="/products"
                      onClick={closeMenu}
                      display="flex" alignItems="center" gap={4} paddingVertical={2} fontSize="10px" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }} color={isDarkMode ? "var(--neutral-600)" : "var(--neutral-500)"}
                    >
                      +{section.items.length - ITEMS_PER_CATEGORY} more
                      <ArrowRight size={10} />
                    </Link>
                  )}
                </Box>
              </Box>
            ))}
          </Grid>

          {/* Footer - More compact */}
          <XStack marginTop={16} paddingTop={16} borderTopWidth={1} display="flex" alignItems="center" justifyContent="space-between" borderColor={isDarkMode ? "var(--neutral-800)" : "var(--neutral-200)"}>
            <XStack display="flex" alignItems="center" gap={12}>
              <Box borderRadius="var(--radius-md)" paddingHorizontal={10} paddingVertical={4} fontFamily="var(--font-mono)" fontSize="10px" backgroundColor={isDarkMode ? "var(--neutral-900)" : "var(--neutral-100)"} color={isDarkMode ? "var(--foreground)" : "var(--neutral-600)"}>
                curl -fsSL hanzo.sh | sh
              </Box>
              <Text fontSize="10px" color={isDarkMode ? "var(--neutral-500)" : "var(--neutral-400)"}>Install Hanzo CLI</Text>
            </XStack>
            <XStack display="flex" gap={8}>
              <Button
                size="sm"
                variant="outline"
                height={28} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" paddingHorizontal={12} backgroundColor={isDarkMode ? "transparent" : "transparent"} borderColor={isDarkMode ? "var(--neutral-700)" : "var(--neutral-300)"} color={isDarkMode ? "var(--neutral-300)" : "var(--neutral-700)"} hoverStyle={isDarkMode ? { backgroundColor: "var(--neutral-800)", color: "var(--foreground)" } : { backgroundColor: "var(--neutral-100)", color: "var(--pure-black)" }}
                asChild
              >
                <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                  GitHub
                </a>
              </Button>
              <Button
                size="sm"
                backgroundColor="var(--neutral-800)" color="var(--foreground)" height={28} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" paddingHorizontal={12} hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }}
                asChild
              >
                <Link to="/products" onClick={closeMenu}>
                  All Products
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

export default ProductsMenu;
