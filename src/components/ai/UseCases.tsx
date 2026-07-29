import { Box, Grid, H2, H3, H4, H5, MotionBox, Paragraph, XStack, YStack } from '@/gui'

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, BookOpen, Search, FileCode, Database, Brain, Headphones } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Build intelligent chatbots, virtual assistants, and customer support agents with natural language understanding.',
      color: 'var(--white-10)',
      textColor: 'var(--foreground)'
    },
    {
      icon: Brain,
      title: 'Generative Content',
      description: 'Create text, images, code, and other content with AI-powered generation and customization.',
      color: 'var(--white-10)',
      textColor: 'var(--foreground)'
    },
    {
      icon: Search,
      title: 'Knowledge Retrieval',
      description: 'Implement semantic search, question answering, and information extraction from your data.',
      color: 'var(--white-10)',
      textColor: 'var(--foreground)'
    },
    {
      icon: Bot,
      title: 'Autonomous Agents',
      description: 'Deploy AI agents that can perform complex tasks, make decisions, and execute workflows autonomously.',
      color: 'var(--white-10)',
      textColor: 'var(--foreground)'
    },
    {
      icon: FileCode,
      title: 'Developer Tooling',
      description: 'Enhance your development workflow with AI-powered code generation, debugging, and documentation.',
      color: 'var(--white-10)',
      textColor: 'var(--foreground)'
    },
    {
      icon: Headphones,
      title: 'Voice & Speech',
      description: 'Convert speech to text, text to speech, and analyze voice interactions with advanced AI models.',
      color: 'var(--white-10)',
      textColor: 'var(--foreground)'
    }
  ];

  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      {/* Background elements */}
      <Box position="absolute" top={0} left={0} width="100%" height="100%" overflow="hidden" pointerEvents="none">
        <Box position="absolute" top="25%" right={0} width={288} height={288} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
        <Box position="absolute" bottom={0} left={0} width={384} height={384} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)" x="-50%" y="50%"></Box>
      </Box>

      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <Box textAlign="center" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={64}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Versatile AI Use Cases
            </H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)">
              Hanzo's AI platform supports a wide range of intelligent applications across industries
            </Paragraph>
          </MotionBox>
        </Box>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {useCases.map((useCase, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
              group backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}
            >
              <XStack height={56} width={56} borderRadius="var(--radius-xl)" display="flex" alignItems="center" justifyContent="center" marginBottom={24} transition="color, background-color, border-color, fill, stroke 300ms cubic-bezier(.4,0,.2,1)">
                <useCase.icon height={28} width={28} />
              </XStack>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={12}>{useCase.title}</H3>
              <Paragraph color="var(--neutral-400)">{useCase.description}</Paragraph>
            </MotionBox>
          ))}
        </Grid>

        {/* Implementation example */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          marginTop={64} backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" overflow="hidden"
        >
          <YStack display="flex" flexDirection="column" $lg={{ flexDirection: "row" }}>
            <YStack padding={32} display="flex" flexDirection="column" justifyContent="center" $lg={{ width: "50%" }}>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)" marginBottom={16}>Simple Implementation</H3>
              <Paragraph color="var(--neutral-400)" marginBottom={24}>
                Build powerful AI applications with just a few lines of code using our intuitive SDK
              </Paragraph>
              <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-lg)" padding={16} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" overflowX="auto">
                <pre>
{`import { Hanzo } from '@hanzo/ai';

// Initialize the Hanzo AI client
const hanzo = new Hanzo({
  apiKey: process.env.HANZO_API_KEY
});

// Create a conversation with memory
const conversation = hanzo.conversation({
  model: 'gpt-4o',
  memory: true,
  system: 'You are a helpful assistant'
});

// Send a message and get a response
const response = await conversation.send('Tell me about AI engineering');

console.log(response);`}
                </pre>
              </Box>
            </YStack>
            <YStack backgroundColor="var(--neutral-950)" padding={32} display="flex" flexDirection="column" $lg={{ width: "50%" }}>
              <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--white)" marginBottom={16} display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><BookOpen size={16} color="var(--foreground)" /></Box>
                Documentation Example
              </H4>
              <YStack display="flex" flexDirection="column" height="100%" rowGap={16} overflowY="auto">
                <Box backgroundColor="var(--neutral-900)" borderRadius="var(--radius-lg)" padding={16}>
                  <XStack display="flex" alignItems="center" marginBottom={8}>
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Database size={16} color="var(--foreground)" /></Box>
                    <H5 color="var(--foreground)" fontWeight="500">Vector Search</H5>
                  </XStack>
                  <Box render="pre" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)" overflowX="auto">
{`// Create a vector store
const vectorStore = hanzo.vectorStore('my-store');

// Add documents to the store
await vectorStore.addDocuments([
  { text: 'AI engineering best practices...' },
  { text: 'Deploying models to production...' }
]);

// Search for similar documents
const results = await vectorStore.search(
  'How to deploy AI models?', 
  { limit: 3 }
);`}
                  </Box>
                </Box>

                <Box backgroundColor="var(--neutral-900)" borderRadius="var(--radius-lg)" padding={16}>
                  <XStack display="flex" alignItems="center" marginBottom={8}>
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Bot size={16} color="var(--foreground)" /></Box>
                    <H5 color="var(--foreground)" fontWeight="500">AI Agents</H5>
                  </XStack>
                  <Box render="pre" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)" overflowX="auto">
{`// Create an agent with tools
const agent = hanzo.agent({
  model: 'claude-3-opus',
  tools: [
    hanzo.tools.webSearch(),
    hanzo.tools.codeInterpreter(),
    vectorStore.asTool('knowledge')
  ]
});

// Run the agent with a task
const result = await agent.run(
  'Analyze our production metrics and suggest optimizations'
);`}
                  </Box>
                </Box>
              </YStack>
            </YStack>
          </YStack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default UseCases;
