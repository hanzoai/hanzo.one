import { AnimatedHeading, AnimatedSection, AnimatedStaggerContainer, Box, ChromeText, H3, MotionBox, Paragraph, createAnimationVariant, curves } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Bot, Search, BrainCircuit, Image, FileText, Tag } from "lucide-react";

const useCaseVariant = createAnimationVariant("fadeInBlur", {
  duration: 0.35,
  curve: curves.smooth,
  distance: 15,
  blur: 5
});

const iconVariant = createAnimationVariant("popIn", {
  duration: 0.35,
  curve: curves.bouncy,
  blur: 3
});

interface UseCaseProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const UseCase = ({ icon, title, description }: UseCaseProps) => (
  <MotionBox
    variants={useCaseVariant}
    padding={24}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <MotionBox 
      variants={iconVariant}
      flexDirection="row" height={56} width={56} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" display="flex" alignItems="center" justifyContent="center" marginBottom={16} marginHorizontal="auto"
    >
      {icon}
    </MotionBox>
    <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" color="var(--white)" textAlign="center" marginBottom={8}>{title}</H3>
    <Paragraph color="var(--neutral-400)" textAlign="center">{description}</Paragraph>
  </MotionBox>
);

const UseCases = () => {
  const useCases = [
    {
      icon: <Bot size={24} color="var(--foreground)" />,
      title: "Chatbots & RAG",
      description: "Build powerful retrieval-augmented generation systems that search across your knowledge base."
    },
    {
      icon: <Search size={24} color="var(--foreground)" />,
      title: "Semantic Search",
      description: "Implement intuitive search that understands user intent beyond simple keyword matching."
    },
    {
      icon: <BrainCircuit size={24} color="var(--foreground)" />,
      title: "Recommendation Systems",
      description: "Create personalized recommendations based on user preferences and behavior."
    },
    {
      icon: <Image size={24} color="var(--foreground)" />,
      title: "Visual Search",
      description: "Enable users to search for visually similar images or products in your catalog."
    },
    {
      icon: <FileText size={24} color="var(--foreground)" />,
      title: "Document Intelligence",
      description: "Extract insights from documents and connect related information across sources."
    },
    {
      icon: <Tag size={24} color="var(--foreground)" />,
      title: "Automated Tagging",
      description: "Automatically categorize and tag content based on semantic understanding."
    }
  ];

  return (
    <AnimatedSection 
      paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--neutral-950), var(--pure-black))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}
      viewportAmount={0.1}
    >
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <AnimatedHeading textAlign="center" marginBottom={64}>
          <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            Use Cases
          </ChromeText>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-400)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Powering AI applications across industries
          </Paragraph>
        </AnimatedHeading>
        
        <AnimatedStaggerContainer 
          display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }} 
          delayFactor={0.07}
        >
          {useCases.map((useCase, index) => (
            <UseCase
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
            />
          ))}
        </AnimatedStaggerContainer>
      </Box>
    </AnimatedSection>
  );
};

export default UseCases;
