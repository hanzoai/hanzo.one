import { Anchor, Box, Button, Grid, H2, H3, Paragraph, Text, XStack } from '@/gui'
import React from "react";

const APIPricing = () => {
  const hanzoModels = [
    {
      name: "Zen",
      fullName: "Zen - Flagship 1T+ Parameter MoDE LLM",
      description: "Our flagship model with 1T+ parameters using Mixture of Diverse Experts (MoDE) architecture. Optimal for complex reasoning, code generation, and multi-domain tasks.",
      features: ["200k context window", "MoDE architecture", "50% discount with batch processing*"],
      pricing: {
        input: "$3 / MTok",
        promptCachingWrite: "$3.75 / MTok",
        promptCachingRead: "$0.30 / MTok",
        output: "$15 / MTok"
      }
    },
    {
      name: "Sho",
      fullName: "Sho - Next-Gen Diffusion LLM",
      description: "Revolutionary diffusion model that delivers faster, cheaper inference with breakthrough efficiency. Perfect for high-throughput applications.",
      features: ["200k context window", "Diffusion architecture", "Ultra-fast inference", "50% discount with batch processing*"],
      pricing: {
        input: "$0.80 / MTok",
        promptCachingWrite: "$1 / MTok",
        promptCachingRead: "$0.08 / MTok",
        output: "$4 / MTok"
      }
    }
  ];

  const tools = [
    {
      name: "Web search",
      description: "Give Zen access to the latest information from the web",
      cost: "$10 / 1K searches*"
    },
    {
      name: "Code execution",
      description: "Run Python code in a sandboxed environment for advanced data analysis",
      details: "50 free hours of usage daily per organization",
      cost: "$0.05 per hour per container for additional usage"
    }
  ];

  const thirdPartyModels = [
    {
      name: "Claude Opus 3",
      features: ["200k context window", "50% discount with batch processing*"],
      pricing: {
        input: "$15 / MTok",
        promptCachingWrite: "$18.75 / MTok",
        promptCachingRead: "$1.50 / MTok",
        output: "$75 / MTok"
      }
    },
    {
      name: "Claude Sonnet 3.7",
      features: ["200k context window", "50% discount with batch processing*"],
      pricing: {
        input: "$3 / MTok",
        promptCachingWrite: "$3.75 / MTok",
        promptCachingRead: "$0.30 / MTok",
        output: "$15 / MTok"
      }
    }
  ];

  const ModelCard = ({ model, isThirdParty = false }) => (
    <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" padding={24} borderWidth={1} borderColor="var(--border-strong)" marginBottom={24}>
      <XStack display="flex" justifyContent="space-between" alignItems="flex-start" marginBottom={16}>
        <Box flex={1}>
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={8}>{model.fullName || model.name}</H3>
          {model.description && (
            <Paragraph color="var(--neutral-400)" marginBottom={16} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">{model.description}</Paragraph>
          )}
          
          {model.features && (
            <Box marginBottom={24}>
              {model.features.map((feature, index) => (
                <XStack key={index} display="flex" alignItems="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginBottom={8}>
                  <Text width={8} height={8} backgroundColor="var(--neutral-400)" borderRadius="var(--radius-full)" marginRight={12}></Text>
                  {feature}
                </XStack>
              ))}
            </Box>
          )}
        </Box>
        
        <Box marginLeft={24}>
          <Button 
            backgroundColor="var(--white)" color="var(--pure-black)" borderWidth={1} borderColor="var(--neutral-300)" transition="all 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ backgroundColor: "transparent", color: "var(--white)", borderColor: "var(--white)" }}
            onClick={() => {
              // Link to cloud signup or checkout
              window.open('https://cloud.hanzo.ai/signup', '_blank');
            }}
          >
            Start Using {model.name}
          </Button>
        </Box>
      </XStack>

      <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={16} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" backgroundColor="rgb(0 0 0 / 0.2)" borderRadius="var(--radius-lg)" padding={16} $md={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
        <div>
          <Text color="var(--neutral-500)" display="block" marginBottom={4}>Input</Text>
          <Box fontWeight="500" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">{model.pricing.input}</Box>
        </div>
        <div>
          <Text color="var(--neutral-500)" display="block" marginBottom={4}>Output</Text>
          <Box fontWeight="500" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">{model.pricing.output}</Box>
        </div>
        <div>
          <Text color="var(--neutral-500)" display="block" marginBottom={4}>Cache Write</Text>
          <Box fontWeight="500" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">{model.pricing.promptCachingWrite}</Box>
        </div>
        <div>
          <Text color="var(--neutral-500)" display="block" marginBottom={4}>Cache Read</Text>
          <Box fontWeight="500" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">{model.pricing.promptCachingRead}</Box>
        </div>
      </Grid>
    </Box>
  );

  const ToolCard = ({ tool }) => (
    <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" padding={24} borderWidth={1} borderColor="var(--border-strong)">
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={8}>{tool.name}</H3>
      <Paragraph color="var(--neutral-400)" marginBottom={16}>{tool.description}</Paragraph>
      
      {tool.details && (
        <XStack display="flex" alignItems="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginBottom={12}>
          <Text width={8} height={8} backgroundColor="var(--neutral-400)" borderRadius="var(--radius-full)" marginRight={8}></Text>
          {tool.details}
        </XStack>
      )}

      <Box textAlign="right">
        <Text color="var(--neutral-500)">Cost</Text>
        <Box fontWeight="500">{tool.cost}</Box>
      </Box>
    </Box>
  );

  return (
    <Box maxWidth="var(--container-max)" marginHorizontal="auto" marginBottom={64}>
      {/* Hanzo Models Section */}
      <Box marginBottom={64}>
        <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Hanzo Foundational Models</H2>
        <Paragraph color="var(--neutral-400)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" marginBottom={32}>Our flagship AI models built from the ground up for next-generation applications</Paragraph>
        <Box rowGap={24} marginBottom={32}>
          {hanzoModels.map((model) => (
            <ModelCard key={model.name} model={model} />
          ))}
        </Box>
        
        <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)" marginBottom={24}>
          *Learn more about <Anchor tap href="#" color="var(--foreground)" hoverStyle={{ textDecorationLine: "underline" }}>batch processing</Anchor>
        </Box>
        
        <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)" marginBottom={24}>
          Customers can purchase prioritized API capacity with Priority Tier
        </Box>
        
        <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)" marginBottom={32}>
          Prompt caching pricing is for our standard 5-minute TTL; <Anchor tap href="#" color="var(--foreground)" hoverStyle={{ textDecorationLine: "underline" }}>extended prompt caching</Anchor> is available at an additional cost
        </Box>

        <XStack display="flex" justifyContent="center">
          <Button size="lg" backgroundColor="var(--foreground)" color="var(--pure-black)" paddingHorizontal={32} paddingVertical={12} hoverStyle={{ backgroundColor: "var(--neutral-100)" }}>
            Start building
          </Button>
        </XStack>
      </Box>

      {/* Tools Section */}
      <Box marginBottom={64}>
        <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={32}>Explore pricing for tools</H2>
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} marginBottom={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          {tools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </Grid>
        
        <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)" marginBottom={32}>
          *Does not include input and output tokens required to process requests
        </Box>

        <XStack display="flex" justifyContent="center">
          <Button size="lg" backgroundColor="var(--foreground)" color="var(--pure-black)" paddingHorizontal={32} paddingVertical={12} hoverStyle={{ backgroundColor: "var(--neutral-100)" }}>
            Start building
          </Button>
        </XStack>
      </Box>

      {/* Third-party Models Section */}
      <Box marginBottom={64}>
        <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={32}>Explore third-party models</H2>
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          {thirdPartyModels.map((model) => (
            <ModelCard key={model.name} model={model} isThirdParty={true} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default APIPricing;