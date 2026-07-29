import { Anchor, Box, Grid, H2, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Code, Braces, CheckCircle } from "lucide-react";

const integrationGroups = [
  {
    title: "SDK Integrations", 
    items: [
      "Python", "JS/TS", "OpenTelemetry", "OpenAI SDK", "LangChain", "Llama-Index", 
      "LiteLLM", "LangGraph", "CrewAI", "Semantic Kernel", "DSPy"
    ]
  },
  {
    title: "Platforms", 
    items: [
      "Smolagents", "Pydantic AI", "AutoGen", "Amazon Bedrock", "Google Gemini", 
      "Ollama", "Flowise", "Langflow", "Dify", "OpenWeb UI"
    ]
  }
];

const Integrations = () => {
  return (
    <Box render="section" paddingVertical={128} paddingHorizontal={16} position="relative" backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          maxWidth="var(--container-prose)" marginHorizontal="auto" textAlign="center" marginBottom={80}
        >
          <XStack display="inline-flex" alignItems="center" justifyContent="center" marginBottom={24} backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)">
            <Braces size={28} color="var(--foreground)" />
          </XStack>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>Integrated Across Your Development Workflow</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)">
            Hanzo Observability seamlessly integrates with your existing stack, supporting your AI operations from prototype to production.
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={64} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            borderRadius="var(--radius-xl)" overflow="hidden" borderWidth={1} borderColor="var(--neutral-800)" padding={32} backgroundImage="linear-gradient(to bottom right, var(--neutral-900), var(--pure-black))"
          >
            <XStack display="flex" alignItems="center" marginBottom={24}>
              <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Code size={24} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700">Import & Initialize</H3>
            </XStack>
            
            <Box backgroundColor="rgb(0 0 0 / 0.5)" borderRadius="var(--radius-lg)" padding={24} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
              <Box marginBottom={16}>
                <Text color="var(--foreground)">import</Text> <Text color="var(--foreground)">{'{'}</Text> <Text color="var(--foreground)">HanzoObservability</Text> <Text color="var(--foreground)">{'}'}</Text> <Text color="var(--foreground)">from</Text> <Text color="var(--foreground)">'hanzo-observability'</Text>
              </Box>
              <Box marginBottom={16}>
                <Text color="var(--foreground)">// Initialize with your project token</Text>
              </Box>
              <Box marginBottom={16}>
                <Text color="var(--foreground)">const</Text> observability <Text color="var(--white)">=</Text> <Text color="var(--foreground)">new</Text> <Text color="var(--foreground)">HanzoObservability</Text><Text color="var(--white)">(</Text><Text color="var(--foreground)">'YOUR_PROJECT_TOKEN'</Text><Text color="var(--white)">);</Text>
              </Box>
              <Box marginBottom={16}>
                <Text color="var(--foreground)">// Trace AI model calls</Text>
              </Box>
              <div>
                <Text color="var(--foreground)">await</Text> observability.<Text color="var(--foreground)">trace</Text><Text color="var(--white)">(</Text><Text color="var(--foreground)">'chatCompletion'</Text><Text color="var(--white)">, {'async () => {'}</Text>
                <Box paddingLeft={20} color="var(--white)">
                  <Text color="var(--foreground)">const</Text> response <Text color="var(--white)">=</Text> <Text color="var(--foreground)">await</Text> openai.<Text color="var(--foreground)">createChatCompletion</Text><Text color="var(--white)">({'{...}'})</Text>
                  <div><Text color="var(--foreground)">return</Text> response</div>
                </Box>
                <Text color="var(--white)">{'}'})</Text>
              </div>
            </Box>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {integrationGroups.map((group, groupIndex) => (
              <Box key={groupIndex} marginBottom={40}>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={24} color="var(--neutral-300)">{group.title}</H3>
                <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={12} $sm={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
                  {group.items.map((item, index) => (
                    <MotionBox
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                      flexDirection="row" display="flex" alignItems="center" padding={12} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--border-strong)"
                    >
                      <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><CheckCircle size={16} color="var(--foreground)" /></Box>
                      <Text color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{item}</Text>
                    </MotionBox>
                  ))}
                </Grid>
              </Box>
            ))}
            
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              textAlign="center" marginTop={32}
            >
              <Anchor href="#integrations" display="inline-flex" alignItems="center" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ color: "var(--foreground)" }}>
                View all integrations <Box render="span" display="inline-flex" alignItems="center" marginLeft={4}><Code size={16} /></Box>
              </Anchor>
            </MotionBox>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default Integrations;
