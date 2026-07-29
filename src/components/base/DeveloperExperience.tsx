import { Box, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Code, Command, BookOpen, Users } from "lucide-react";

const DeveloperExperience = () => {
  const features = [
    {
      icon: Command,
      title: "Comprehensive CLI Tools",
      description: "Powerful CLI for scaffolding, deploying, and managing applications with simple commands."
    },
    {
      icon: Code,
      title: "Rich SDKs & Libraries",
      description: "SDKs supporting JavaScript, React, Ruby, Node, Flutter, and more for seamless integration."
    },
    {
      icon: Users,
      title: "Project Management Dashboard",
      description: "Full project lifecycle management directly from the Hanzo Base dashboard."
    },
    {
      icon: BookOpen,
      title: "Extensive Documentation",
      description: "Detailed documentation, community-driven examples, and best practices to accelerate development."
    }
  ];

  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={48} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            rowGap={32}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)">Developer Experience</H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)">
              Designed for developers who value simplicity, flexibility, and power.
              Our tools make database and backend development a breeze.
            </Paragraph>
            
            <Box rowGap={24}>
              {features.map((feature, index) => (
                <XStack key={index} display="flex">
                  <Box flexShrink={0} marginTop={4}>
                    <XStack display="flex" alignItems="center" justifyContent="center" height={40} width={40} borderRadius="var(--radius-md)" backgroundColor="var(--surface-card-emphasis)" color="var(--foreground)">
                      <feature.icon height={24} width={24} />
                    </XStack>
                  </Box>
                  <Box marginLeft={16}>
                    <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" color="var(--white)">{feature.title}</H3>
                    <Paragraph marginTop={4} color="var(--neutral-300)">{feature.description}</Paragraph>
                  </Box>
                </XStack>
              ))}
            </Box>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            $lg={{ paddingLeft: 32 }}
          >
            <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={4} boxShadow="0 20px 25px -5px rgb(0 0 0 / .4)" overflow="hidden">
              <XStack display="flex" alignItems="center" backgroundColor="var(--neutral-900)" borderTopLeftRadius="var(--radius-lg)" borderTopRightRadius="var(--radius-lg)" paddingHorizontal={16} paddingVertical={8}>
                <XStack display="flex" columnGap={8}>
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                </XStack>
                <Box marginHorizontal="auto" color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Terminal</Box>
              </XStack>
              <Box backgroundColor="var(--neutral-950)" padding={16} borderBottomLeftRadius="var(--radius-lg)" borderBottomRightRadius="var(--radius-lg)" overflow="hidden">
                <Box fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                  <Paragraph color="var(--neutral-400)" marginBottom={8}>$ npx create-hanzo-app my-project</Paragraph>
                  <Paragraph color="var(--foreground)" marginBottom={8}>Initializing Hanzo Base project...</Paragraph>
                  <Paragraph color="var(--neutral-400)" marginBottom={8}>$ cd my-project && npm run dev</Paragraph>
                  <Paragraph color="var(--foreground)" marginBottom={8}>✓ Hanzo Base server started on http://localhost:3000</Paragraph>
                  <Paragraph color="var(--foreground)" marginBottom={8}>✓ Admin UI available at http://localhost:3000/admin</Paragraph>
                  <Paragraph color="var(--neutral-400)" marginBottom={8}>$ hanzo deploy</Paragraph>
                  <Paragraph color="var(--foreground)">✓ Project deployed to https://my-project.hanzo.app</Paragraph>
                </Box>
              </Box>
            </Box>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default DeveloperExperience;
