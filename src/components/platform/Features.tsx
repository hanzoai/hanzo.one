import { Anchor, Box as GuiBox, Button, Grid, H2, H3, MotionBox, MotionText, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Terminal, Cloud, Database, RefreshCw, Globe, Server, Code2, Lock, Box, Network } from "lucide-react";

const features = [
  {
    title: "Local Development",
    description: "Run the entire Hanzo stack locally with a single command",
    details: "Hanzo Platform brings the cloud to your machine, enabling you to develop with the same tools and services you'll use in production, all running locally.",
    icon: Terminal,
    replaces: ["docker-compose", "minikube", "kind", "vagrant"]
  },
  {
    title: "Open Source Infrastructure",
    description: "All the components you need to build AI applications, completely open source",
    details: "From local vector databases to inference engines, we've packaged everything you need to build and test AI applications without any cloud dependencies.",
    icon: Github,
    replaces: ["proprietary AI services", "closed APIs", "vendor lock-in"]
  },
  {
    title: "Seamless Cloud Transition",
    description: "Develop locally, deploy to Hanzo Cloud when you're ready",
    details: "The same configuration that runs your local Platform can be used to deploy to Hanzo Cloud with zero changes, giving you flexibility and scalability.",
    icon: Cloud,
    replaces: ["configuration drift", "environment differences", "deployment headaches"]
  },
  {
    title: "AI Development Toolkit",
    description: "Complete suite of AI tools for local model inference, fine-tuning, and testing",
    details: "Hanzo Platform includes optimized local LLM runners, vector search capabilities, and prompt engineering tools that work offline.",
    icon: Box,
    replaces: ["cloud-dependent AI development", "slow feedback loops", "costly experimentation"]
  },
  {
    title: "Community-Driven",
    description: "Built and maintained by a thriving open source community",
    details: "Join thousands of developers contributing to making AI development more accessible, open, and ethical through our permissively licensed platform.",
    icon: Globe,
    replaces: ["closed ecosystems", "walled gardens", "proprietary platforms"]
  }
];

const Features = () => {
  return (
    <GuiBox render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <GuiBox maxWidth="var(--container-max)" marginHorizontal="auto">
        <GuiBox textAlign="center" marginBottom={64}>
          <MotionText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}
          >
            Freedom to Build, Power to Deploy
          </MotionText>
          <MotionText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto"
          >
            Everything you love about Hanzo Cloud, available as free and open source software you can run anywhere.
          </MotionText>
        </GuiBox>
        
        {features.map((feature, index) => (
          <MotionBox
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            marginBottom={128} display="flex" flexDirection="column" gap={32} alignItems="center" $lg={{ ...({ gap: 64 }), ...(index % 2 === 0 ? { flexDirection: "row" } : { flexDirection: "row-reverse" }) }}
          >
            <GuiBox width="100%" $lg={{ width: "50%" }}>
              <XStack display="flex" alignItems="center" marginBottom={16}>
                <XStack height={48} width={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" backgroundColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" marginRight={16}>
                  <feature.icon height={24} width={24} />
                </XStack>
                <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700">{feature.title}</H2>
              </XStack>
              <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={16}>{feature.description}</Paragraph>
              <Paragraph color="var(--neutral-400)" marginBottom={24}>{feature.details}</Paragraph>
              
              <Anchor minHeight={44} href="#learn-more" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>
                Learn More <GuiBox render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></GuiBox>
              </Anchor>
              
              <GuiBox marginTop={32}>
                <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)" marginBottom={8}>Replaces</Paragraph>
                <XStack display="flex" flexWrap="wrap" gap={16}>
                  {feature.replaces.map((replace, i) => (
                    <Text key={i} paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)">
                      {replace}
                    </Text>
                  ))}
                </XStack>
              </GuiBox>
            </GuiBox>
            
            <GuiBox width="100%" backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" overflow="hidden" borderWidth={1} borderColor="var(--neutral-800)" $lg={{ width: "50%" }}>
              <XStack aspectRatio={1.7777777777777777} padding={32} display="flex" alignItems="center" justifyContent="center" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.1))">
                <feature.icon height={96} width={96} color="rgb(255 255 255 / 0.7)" />
              </XStack>
            </GuiBox>
          </MotionBox>
        ))}
        
        <MotionBox 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--neutral-700)" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), rgb(255 255 255 / 0.08))"
        >
          <Grid display="grid" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            <GuiBox rowGap={16}>
              <Code2 size={40} color="var(--foreground)" />
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700">MIT Licensed</H3>
              <Paragraph color="var(--neutral-400)">Fork it, modify it, use it commercially. We believe in true open source.</Paragraph>
            </GuiBox>
            
            <GuiBox rowGap={16}>
              <Lock size={40} color="var(--foreground)" />
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700">Data Sovereignty</H3>
              <Paragraph color="var(--neutral-400)">Keep your code, data, and models on your infrastructure. No vendor lock-in.</Paragraph>
            </GuiBox>
            
            <GuiBox rowGap={16}>
              <Network size={40} color="var(--foreground)" />
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700">Enterprise Ready</H3>
              <Paragraph color="var(--neutral-400)">Scale from a laptop to a data center with enterprise support available.</Paragraph>
            </GuiBox>
          </Grid>
        </MotionBox>
      </GuiBox>
    </GuiBox>
  );
};

export default Features;
