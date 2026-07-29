import { Anchor, Box, H3, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'
import { motion } from "framer-motion";
import { ExternalLink, GitFork, Heart, Star } from "lucide-react";

interface UpstreamProject {
  name: string;
  description: string;
  url: string;
  github: string;
  logo?: string;
  license?: string;
  stars?: string;
}

interface UpstreamAttributionProps {
  upstream: UpstreamProject;
  productName: string;
}

export function UpstreamAttribution({ upstream, productName }: UpstreamAttributionProps) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      paddingVertical={64} paddingHorizontal={16} borderTopWidth={1} borderColor="var(--neutral-800)" $md={{ paddingHorizontal: 32 }}
    >
      <Box maxWidth="56rem" marginHorizontal="auto">
        <XStack display="flex" alignItems="center" gap={8} marginBottom={24}>
          <GitFork size={20} color="var(--foreground)" />
          <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" textTransform="uppercase" letterSpacing="0.05em">
            Built on Open Source
          </Text>
        </XStack>

        <Box borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), var(--neutral-950))" $md={{ padding: 32 }}>
          <YStack display="flex" flexDirection="column" gap={24} $md={{ flexDirection: "row", alignItems: "flex-start" }}>
            {/* Logo/Icon */}
            <Box flexShrink={0}>
              {upstream.logo ? (
                <Box display="inline-block"
                  src={upstream.logo}
                  alt={upstream.name}
                  render="img" width={64} height={64} borderRadius="var(--radius-lg)"
                />
              ) : (
                <XStack width={64} height={64} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-800)" display="flex" alignItems="center" justifyContent="center">
                  <GitFork size={32} color="var(--neutral-400)" />
                </XStack>
              )}
            </Box>

            {/* Content */}
            <Box flex={1}>
              <XStack display="flex" alignItems="center" gap={12} marginBottom={8}>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--foreground)">
                  Powered by {upstream.name}
                </H3>
                {upstream.stars && (
                  <Text display="inline-flex" alignItems="center" gap={4} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">
                    <Star size={16} />
                    {upstream.stars}
                  </Text>
                )}
              </XStack>

              <Paragraph color="var(--neutral-400)" marginBottom={16}>
                {productName} is built on top of {upstream.name}, an open-source project.
                {upstream.description}
              </Paragraph>

              <XStack display="flex" flexWrap="wrap" gap={12}>
                <Anchor minHeight={44} 
                  href={upstream.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  gap={8} paddingHorizontal={16} paddingVertical={8} backgroundColor="var(--neutral-800)" borderWidth={1} borderColor="var(--neutral-700)" borderRadius="var(--radius-lg)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
                >
                  <Box display="inline-block" render="svg" width={16} height={16} fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </Box>
                  View on GitHub
                  <ExternalLink size={12} />
                </Anchor>

                <Anchor tap
                  href={upstream.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  display="inline-flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} backgroundColor="transparent" borderWidth={1} borderColor="var(--neutral-700)" borderRadius="var(--radius-lg)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
                >
                  Visit {upstream.name}
                  <ExternalLink size={12} />
                </Anchor>
              </XStack>

              {upstream.license && (
                <Paragraph marginTop={16} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">
                  Licensed under {upstream.license}
                </Paragraph>
              )}
            </Box>
          </YStack>

          {/* Thank you message */}
          <Box marginTop={24} paddingTop={24} borderTopWidth={1} borderColor="var(--neutral-800)">
            <Paragraph display="flex" alignItems="center" gap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
              <Heart size={16} color="var(--foreground)" />
              We're grateful to the {upstream.name} maintainers and community for their incredible work.
            </Paragraph>
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
}

export default UpstreamAttribution;
