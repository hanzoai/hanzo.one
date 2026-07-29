import { Box, ChromeText, Grid, H3, Paragraph, Text, XStack } from '@/gui'

import React from 'react';

const UseCaseCard = ({ title, description, features }) => {
  return (
    <Box backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={32}>
      <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>{title}</H3>
      <Paragraph color="var(--neutral-300)" marginBottom={16}>
        {description}
      </Paragraph>
      <Box render="ul" rowGap={8} color="var(--neutral-300)">
        {features.map((feature, index) => (
          <XStack key={index} render="li" display="flex" alignItems="flex-start">
            <Text color="var(--foreground)" marginRight={8}>•</Text>
            <span>{feature}</span>
          </XStack>
        ))}
      </Box>
    </Box>
  );
};

const MachinesUseCases = () => {
  const useCases = [
    {
      title: "ML Training",
      description: "Train large-scale AI models with high-performance GPU clusters and optimized ML frameworks.",
      features: [
        "Multi-GPU instances with NVLink",
        "Distributed training across multiple machines",
        "Pre-installed PyTorch, TensorFlow, and JAX"
      ]
    },
    {
      title: "Inference Optimization",
      description: "Deploy models for inference with optimized runtime configurations.",
      features: [
        "GPU-accelerated inference endpoints",
        "Automatic model quantization and optimization",
        "Horizontal scaling for high-throughput demands"
      ]
    },
    {
      title: "High-Performance Computing",
      description: "Run scientific simulations, financial modeling, and other compute-intensive workloads.",
      features: [
        "High core-count CPU machines",
        "MPI and other HPC frameworks pre-installed",
        "Bare metal performance with containerized convenience"
      ]
    },
    {
      title: "Large Language Models",
      description: "Run and fine-tune frontier Large Language Models with optimized environments.",
      features: [
        "Optimized for LLaMA, Falcon, and other open LLMs",
        "LoRA and QLoRA fine-tuning support",
        "Seamless integration with Hanzo AI endpoints"
      ]
    }
  ];

  return (
    <Box render="section" paddingVertical={80} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))">
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box textAlign="center" marginBottom={64}>
          <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>
            Designed for AI Workloads
          </ChromeText>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Optimized infrastructure for every stage of machine learning and AI development
          </Paragraph>
        </Box>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              title={useCase.title}
              description={useCase.description}
              features={useCase.features}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MachinesUseCases;
