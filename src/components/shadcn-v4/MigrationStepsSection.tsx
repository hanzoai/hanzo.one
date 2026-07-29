import { Box, Card, CardContent, CardDescription, CardHeader, CardTitle, H2, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Follow the Tailwind v4 Upgrade Guide",
    description: "Upgrade to Tailwind v4 by following the official upgrade guide. Use the @tailwindcss/upgrade@next codemod to remove deprecated utility classes and update your Tailwind config."
  },
  {
    number: "02",
    title: "Update CSS Variables",
    description: "Move :root and .dark out of @layer base. Wrap color values in hsl(), add the inline option to @theme, and remove hsl() wrappers from @theme."
  },
  {
    number: "03",
    title: "Update Chart Colors",
    description: "Now that theme colors come with hsl(), remove the wrapper in your chartConfig by changing from 'hsl(var(--chart-1))' to 'var(--chart-1)'."
  },
  {
    number: "04",
    title: "Use the New size-* Utility",
    description: "Replace w-* h-* with the new size-* utility. For example, change 'w-4 h-4' to 'size-4'."
  },
  {
    number: "05",
    title: "Update Dependencies",
    description: "Update your dependencies with 'pnpm up \"@radix-ui/*\" cmdk lucide-react recharts tailwind-merge clsx --latest'."
  },
  {
    number: "06",
    title: "Remove forwardRef",
    description: "Use the remove-forward-ref codemod to migrate your forwardRef to props, or manually update the primitives by replacing React.forwardRef with React.ComponentProps."
  }
];

const MigrationStepsSection = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, rgb(0 0 0 / 0.3), rgb(255 255 255 / 0.1))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} color="var(--foreground)" $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Migration Steps</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Follow these steps to upgrade your existing shadcn/ui projects to Tailwind v4 and React 19.
          </Paragraph>
        </MotionBox>

        <Box rowGap={24}>
          {steps.map((step, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card backgroundColor="var(--surface-card-emphasis)" borderColor="var(--neutral-800)" transition="all 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ borderColor: "var(--border-strong)" }}>
                <CardHeader display="flex" flexDirection="row" alignItems="flex-start" gap={16}>
                  <XStack backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" padding={8} width={48} height={48} display="flex" alignItems="center" justifyContent="center" flexShrink={0}>
                    <Text fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="700" color="var(--foreground)">{step.number}</Text>
                  </XStack>
                  <div>
                    <CardTitle fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--foreground)">{step.title}</CardTitle>
                    <CardDescription color="var(--neutral-400)" marginTop={8}>
                      {step.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                {index < steps.length - 1 && (
                  <CardContent paddingTop={0} paddingBottom={16} display="flex" justifyContent="center">
                    <ArrowRight size={20} color="var(--neutral-600)" />
                  </CardContent>
                )}
              </Card>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MigrationStepsSection;
