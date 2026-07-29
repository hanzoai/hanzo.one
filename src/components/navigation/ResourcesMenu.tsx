import { Anchor, Box, Grid, H3 } from '@/gui'
import { resourcesNav } from "@/constants/navigation-data";
import NavMenu from "./NavMenu";

export const ResourcesMenu = () => {
  return (
    <NavMenu label="Resources">
      {(closeMenu) => (
        <Box width="100%">
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 32 }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {resourcesNav.map(category => (
              <div key={category.title}>
                <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={16}>{category.title}</H3>
                <Box rowGap={16}>
                  {category.items.map(item => {
                    const Icon = item.icon;

                    return (
                      <Anchor tap
                        key={item.title}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        group display="flex" alignItems="flex-start" columnGap={12}
                        onClick={closeMenu}
                      >
                        {Icon && <Icon height={20} width={20} minWidth={20} color="var(--neutral-400)" marginTop={4} $group-hover={{ color: "var(--foreground)" }} />}
                        <Box minWidth={0}>
                          <Box color="var(--neutral-300)" fontWeight="500" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" $group-hover={{ color: "var(--foreground)" }}>{item.title}</Box>
                          {item.description && (
                            <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">{item.description}</Box>
                          )}
                        </Box>
                      </Anchor>
                    );
                  })}
                </Box>
              </div>
            ))}
          </Grid>
        </Box>
      )}
    </NavMenu>
  );
};