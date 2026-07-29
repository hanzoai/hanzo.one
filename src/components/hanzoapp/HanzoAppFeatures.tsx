import { Box, Grid, H2, H3, MotionBox, Paragraph, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Bot, Code, ServerIcon, Database, Share2 } from "lucide-react";

const FeatureCard = ({ title, description, icon, list, code = null }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32} height="100%"
    >
      <YStack display="flex" flexDirection="column" height="100%">
        <Box marginBottom={24}>
          {icon}
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginTop={16} marginBottom={8}>{title}</H3>
          <Paragraph color="var(--neutral-300)" marginBottom={16}>{description}</Paragraph>
        </Box>
        
        {list && (
          <Box marginBottom={16}>
            {list.map((item, index) => (
              <Box key={index} color="var(--neutral-400)" marginBottom={8}>{item}</Box>
            ))}
          </Box>
        )}
        
        {code && (
          <Box marginTop="auto">
            <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-lg)" padding={16} fontFamily="var(--font-mono)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)" textAlign="left" overflow="auto">
              <pre>{code}</pre>
            </Box>
          </Box>
        )}
      </YStack>
    </MotionBox>
  );
};

const HanzoAppFeatures = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Features 01</H2>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={80} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <FeatureCard 
            title="Chatflow LLM Orchestration"
            description="Connect LLMs with memory, data loaders, cache, moderation and many more"
            icon={<MessageCircle size={40} color="var(--foreground)" />}
            list={["Langchain", "LlamaIndex", "100+ integrations"]}
          />
          
          <FeatureCard 
            title="Agents & Assistants"
            description="Create autonomous agent that can uses tools to execute different tasks"
            icon={<Bot size={40} color="var(--foreground)" />}
            list={["Custom Tools", "OpenAI Assistant", "Function Agent"]}
            code={`import requests
 
url = "/api/v1/prediction/:id"
 
def query(payload):
  response = requests.post(
    url,
    json = payload
  )
  return response.json()
 
output = query({
  question: "hello!"
)}`}
          />
          
          <FeatureCard 
            title="Developer Friendly API, SDK, Embed"
            description="Extend and integrate to your applications using APIs, SDK and Embedded Chat"
            icon={<Code size={40} color="var(--foreground)" />}
            list={["APIs", "Embedded Widget", "React SDK"]}
          />
        </Grid>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Features 02</H2>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(1, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(1, minmax(0, 1fr))" }}>
          <FeatureCard 
            title="Platform Agnostic Open source LLMs"
            description="Run in air-gapped environment with local LLMs, embeddings and vector databases"
            icon={<ServerIcon size={40} color="var(--foreground)" />}
            list={[
              "HuggingFace, Ollama, LocalAI, Replicate", 
              "Llama2, Mistral, Vicuna, Orca, Llava", 
              "Self host on AWS, Azure, GCP"
            ]}
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default HanzoAppFeatures;
