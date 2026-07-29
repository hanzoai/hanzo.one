import { Box, H2, MotionBox, Paragraph, Tabs, TabsContent, TabsList, TabsTrigger, Text, XStack } from '@/gui'
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Terminal } from "lucide-react";

interface CodeExample {
  language: string;
  label: string;
  code: string;
  description?: string;
}

interface CodeExamplesSectionProps {
  title?: string;
  subtitle?: string;
  examples: CodeExample[];
}

export function CodeExamplesSection({
  title = "Quick Start",
  subtitle = "Get started in minutes with your language of choice",
  examples
}: CodeExamplesSectionProps) {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const copyToClipboard = async (code: string, index: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const languageIcons: Record<string, string> = {
    python: "🐍",
    javascript: "📜",
    typescript: "📘",
    go: "🐹",
    rust: "🦀",
    curl: "🔗",
    cli: "💻",
    bash: "💻",
    docker: "🐳",
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      paddingVertical={64} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }}
    >
      <Box maxWidth="56rem" marginHorizontal="auto">
        <XStack display="flex" alignItems="center" gap={8} marginBottom={8}>
          <Terminal size={20} color="var(--foreground)" />
          <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)" textTransform="uppercase" letterSpacing="0.05em">
            Code Examples
          </Text>
        </XStack>

        <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)" marginBottom={8} $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>
          {title}
        </H2>
        <Paragraph color="var(--neutral-400)" marginBottom={32}>
          {subtitle}
        </Paragraph>

        <Tabs defaultValue={examples[0]?.language} width="100%">
          <TabsList display="flex" flexWrap="wrap" gap={8} backgroundColor="transparent" borderBottomWidth={1} borderColor="var(--neutral-800)" paddingBottom={16} marginBottom={24}>
            {examples.map((example) => (
              <TabsTrigger
                key={example.language}
                value={example.language}
                display="inline-flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-lg)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
              >
                <span>{languageIcons[example.language.toLowerCase()] || "📄"}</span>
                {example.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {examples.map((example) => (
            <TabsContent key={example.language} value={example.language}>
              {example.description && (
                <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={16}>
                  {example.description}
                </Paragraph>
              )}

              <Box group position="relative">
                <Box position="absolute" top={12} right={12} zIndex={10}>
                  <XStack minHeight={44}
                    onClick={() => copyToClipboard(example.code, example.language)}
                    render="button" display="inline-flex" alignItems="center" gap={6} paddingHorizontal={12} paddingVertical={6} backgroundColor="var(--neutral-800)" borderWidth={1} borderColor="var(--neutral-700)" borderRadius="var(--radius-md)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
                  >
                    {copiedIndex === example.language ? (
                      <>
                        <Check size={12} color="var(--neutral-500)" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        Copy
                      </>
                    )}
                  </XStack>
                </Box>

                <Box render="pre" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={16} paddingRight={96} overflowX="auto">
                  <Text render="code" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" fontFamily="var(--font-mono)" whiteSpace="pre">
                    {example.code}
                  </Text>
                </Box>
              </Box>
            </TabsContent>
          ))}
        </Tabs>
      </Box>
    </MotionBox>
  );
}

export default CodeExamplesSection;
