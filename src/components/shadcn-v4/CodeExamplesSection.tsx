import { Box, Button, H2, MotionBox, Paragraph, Tabs, TabsContent, TabsList, TabsTrigger, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const CodeExamplesSection = () => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} color="var(--foreground)" $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Code Examples</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            See how to implement shadcn/ui components with Tailwind v4 and React 19.
          </Paragraph>
        </MotionBox>

        <Tabs defaultValue="css-variables" width="100%">
          <TabsList display="grid" width="100%" gridTemplateColumns="repeat(3, minmax(0, 1fr))" marginBottom={32}>
            <TabsTrigger value="css-variables">CSS Variables</TabsTrigger>
            <TabsTrigger value="components">Component Structure</TabsTrigger>
            <TabsTrigger value="tailwind-config">Tailwind Config</TabsTrigger>
          </TabsList>
          
          <TabsContent value="css-variables" borderRadius="var(--radius-lg)" overflow="hidden">
            <Box backgroundColor="rgb(0 0 0 / 0.5)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={16}>
              <XStack display="flex" justifyContent="space-between" alignItems="center" marginBottom={8}>
                <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">globals.css</Box>
                <Button
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleCopy(cssVariablesCode, "css")}
                  height={32} paddingHorizontal={8} color="var(--neutral-400)"
                >
                  {copied === "css" ? (
                    <Check size={16} color="var(--neutral-500)" />
                  ) : (
                    <Copy size={16} />
                  )}
                </Button>
              </XStack>
              <Box render="pre" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-200)" overflowX="auto" padding={16}>
                <code>
{`:root {
  --background: hsl(0 0% 100%); /* Wrap in hsl */
  --foreground: hsl(0 0% 3.9%);
  /* ... other variables */
}

.dark {
  --background: hsl(0 0% 3.9%); /* Wrap in hsl */
  --foreground: hsl(0 0% 98%);
  /* ... other variables */
}

@theme inline {
  --color-background: var(--background); /* Remove hsl */
  --color-foreground: var(--foreground);
  /* ... other theme mappings */
}`}
                </code>
              </Box>
            </Box>
          </TabsContent>
          
          <TabsContent value="components" borderRadius="var(--radius-lg)" overflow="hidden">
            <Box backgroundColor="rgb(0 0 0 / 0.5)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={16}>
              <XStack display="flex" justifyContent="space-between" alignItems="center" marginBottom={8}>
                <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Button.tsx</Box>
                <Button
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleCopy(componentCode, "component")}
                  height={32} paddingHorizontal={8} color="var(--neutral-400)"
                >
                  {copied === "component" ? (
                    <Check size={16} color="var(--neutral-500)" />
                  ) : (
                    <Copy size={16} />
                  )}
                </Button>
              </XStack>
              <Box render="pre" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-200)" overflowX="auto" padding={16}>
                <code>
{`function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof ButtonPrimitive>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        className
      )}
      {...props}
    />
  )
}`}
                </code>
              </Box>
            </Box>
          </TabsContent>
          
          <TabsContent value="tailwind-config" borderRadius="var(--radius-lg)" overflow="hidden">
            <Box backgroundColor="rgb(0 0 0 / 0.5)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={16}>
              <XStack display="flex" justifyContent="space-between" alignItems="center" marginBottom={8}>
                <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">tailwind.config.ts</Box>
                <Button
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleCopy(tailwindConfigCode, "tailwind")}
                  height={32} paddingHorizontal={8} color="var(--neutral-400)"
                >
                  {copied === "tailwind" ? (
                    <Check size={16} color="var(--neutral-500)" />
                  ) : (
                    <Copy size={16} />
                  )}
                </Button>
              </XStack>
              <Box render="pre" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-200)" overflowX="auto" padding={16}>
                <code>
{`import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Your theme extensions
    },
  },
  plugins: [import("tw-animate-css")],
} satisfies Config;`}
                </code>
              </Box>
            </Box>
          </TabsContent>
        </Tabs>
      </Box>
    </Box>
  );
};

// Sample code snippets
const cssVariablesCode = `:root {
  --background: hsl(0 0% 100%); /* Wrap in hsl */
  --foreground: hsl(0 0% 3.9%);
  /* ... other variables */
}

.dark {
  --background: hsl(0 0% 3.9%); /* Wrap in hsl */
  --foreground: hsl(0 0% 98%);
  /* ... other variables */
}

@theme inline {
  --color-background: var(--background); /* Remove hsl */
  --color-foreground: var(--foreground);
  /* ... other theme mappings */
}`;

const componentCode = `function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof ButtonPrimitive>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        className
      )}
      {...props}
    />
  )
}`;

const tailwindConfigCode = `import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Your theme extensions
    },
  },
  plugins: [import("tw-animate-css")],
} satisfies Config;`;

export default CodeExamplesSection;
