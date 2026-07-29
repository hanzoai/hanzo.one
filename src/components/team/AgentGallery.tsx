import { Box, Grid, H2, H3, H4, Link, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  Briefcase, 
  Code, 
  MessagesSquare, 
  LineChart, 
  Pencil, 
  ShieldCheck, 
  Database,
  Terminal,
  BrainCircuit,
  Music,
  Palette,
  Settings,
  DollarSign,
  Scale,
  Binary,
  Calculator,
  MessageCircle,
  Lightbulb,
  HelpCircle,
  X,
  ArrowRight
} from "lucide-react";
import TeamGroup from "./TeamGroup";
import { teamMembers } from "@/constants/team-members";


interface AgentDetailModalProps {
  agent: {
    name: string;
    role: string;
    description: string;
    icon: any;
    gradient: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const AgentDetailModal: React.FC<AgentDetailModalProps> = ({ agent, isOpen, onClose }) => {
  if (!agent) return null;
  
  const Icon = agent.icon;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          flexDirection="row" position="fixed" top={0} right={0} bottom={0} left={0} backgroundColor="rgb(0 0 0 / 0.8)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" zIndex={50} display="flex" alignItems="center" justifyContent="center" padding={16}
          onClick={onClose}
        >
          <MotionBox
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-2xl)" maxWidth="32rem" width="100%" padding={24} boxShadow="0 20px 25px -5px rgb(0 0 0 / .4)" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), var(--pure-black))"
            onClick={(e) => e.stopPropagation()}
          >
            <XStack display="flex" alignItems="flex-start" justifyContent="space-between" marginBottom={24}>
              <XStack display="flex" alignItems="center">
                <Box padding={12} borderRadius="var(--radius-xl)" marginRight={16}>
                  <Icon height={24} width={24} color="var(--foreground)" />
                </Box>
                <div>
                  <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--foreground)">{agent.name}</H3>
                  <Paragraph color="var(--neutral-400)">{agent.role}</Paragraph>
                </div>
              </XStack>
              <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                onClick={onClose}
                render="button" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
              >
                <X size={24} />
              </Box>
            </XStack>
            
            <Box marginBottom={24}>
              <Paragraph color="var(--neutral-300)">{agent.description}</Paragraph>
            </Box>
            
            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} marginBottom={24}>
              <Box backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-xl)" padding={16} borderWidth={1} borderColor="rgb(255 255 255 / 0.1)">
                <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" color="var(--foreground)" marginBottom={8}>Expertise</H4>
                <Box render="ul" rowGap={8}>
                  <XStack render="li" display="flex" alignItems="center" color="var(--neutral-300)">
                    <Text marginRight={8} color="var(--foreground)">•</Text>
                    Machine learning & data processing
                  </XStack>
                  <XStack render="li" display="flex" alignItems="center" color="var(--neutral-300)">
                    <Text marginRight={8} color="var(--foreground)">•</Text>
                    Neural network optimization
                  </XStack>
                  <XStack render="li" display="flex" alignItems="center" color="var(--neutral-300)">
                    <Text marginRight={8} color="var(--foreground)">•</Text>
                    Natural language processing
                  </XStack>
                </Box>
              </Box>
              
              <Box backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-xl)" padding={16} borderWidth={1} borderColor="rgb(255 255 255 / 0.1)">
                <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" color="var(--foreground)" marginBottom={8}>Integration</H4>
                <Paragraph color="var(--neutral-300)">
                  Works seamlessly with human teams via natural language interfaces,
                  and integrates with all major productivity tools and platforms.
                </Paragraph>
              </Box>
            </Grid>
            
            <XStack display="flex" justifyContent="center">
              <Link 
                to={`/team/${agent.name.toLowerCase()}`}
                display="inline-flex" alignItems="center" paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-xl)" color="var(--foreground)" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))"
              >
                View Full Profile
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
              </Link>
            </XStack>
          </MotionBox>
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

const AgentGallery = () => {
  const [selectedAgent, setSelectedAgent] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAgentDetail = (agent: any) => {
    setSelectedAgent(agent);
    setIsModalOpen(true);
  };

  const closeAgentDetail = () => {
    setIsModalOpen(false);
  };

  const coreTeamMembers = [
    {
      name: "Vi",
      role: "Visionary Leader",
      description: "Your innovative AI visionary leader, guiding the team towards excellence with strategic insights.",
      icon: Lightbulb,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      name: "Dev",
      role: "Software Engineer",
      description: "Your expert AI developer, specializing in full-stack development and system architecture.",
      icon: Code,
      gradient: "from-blue-600 to-blue-400"
    },
    {
      name: "Des",
      role: "Designer",
      description: "Your creative AI designer, crafting beautiful and intuitive user experiences.",
      icon: Palette,
      gradient: "from-purple-600 to-pink-400"
    },
    {
      name: "Opera",
      role: "Operations Engineer",
      description: "Your efficient AI operations engineer, maintaining system reliability and performance.",
      icon: Settings,
      gradient: "from-yellow-600 to-yellow-400"
    }
  ];
  
  const engineeringAgents = [
    {
      name: "DB",
      role: "Database Expert",
      description: "Your expert AI database specialist, managing data infrastructure and optimizing database operations.",
      icon: Database,
      gradient: "from-emerald-500 to-green-500"
    },
    {
      name: "Sec",
      role: "Security Expert",
      description: "Your expert AI security specialist, protecting digital assets and infrastructure.",
      icon: ShieldCheck,
      gradient: "from-red-500 to-orange-500"
    },
    {
      name: "Core",
      role: "Core Engineer",
      description: "Your expert AI core engineer, building robust system foundations and architecture.",
      icon: BrainCircuit,
      gradient: "from-gray-500 to-slate-500"
    },
    {
      name: "Algo",
      role: "Algorithm Expert",
      description: "Your expert AI algorithm specialist, optimizing computational solutions.",
      icon: Binary,
      gradient: "from-cyan-500 to-blue-500"
    }
  ];
  
  const businessAgents = [
    {
      name: "Mark",
      role: "Marketing Director",
      description: "Your AI marketing strategist, crafting compelling campaigns and driving engagement.",
      icon: MessagesSquare,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Su",
      role: "Support Engineer",
      description: "Your dedicated AI support engineer, ensuring smooth operations and user satisfaction.",
      icon: HelpCircle,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      name: "Fin",
      role: "Financial Expert",
      description: "Your expert AI financial analyst, providing financial insights and strategy.",
      icon: DollarSign,
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "Cal",
      role: "Calculator",
      description: "Your expert AI calculator, processing complex computations with precision.",
      icon: Calculator,
      gradient: "from-purple-500 to-violet-500"
    }
  ];

  const creativeAgents = [
    {
      name: "Art",
      role: "Artist",
      description: "Your creative AI artist, bringing imagination to life through digital artistry.",
      icon: Palette,
      gradient: "from-violet-500 to-indigo-500"
    },
    {
      name: "Mu",
      role: "Musician",
      description: "Your creative AI musician, composing and producing original music.",
      icon: Music,
      gradient: "from-pink-500 to-purple-500"
    },
    {
      name: "Data",
      role: "Data Scientist",
      description: "Your expert AI data scientist, unlocking insights from complex datasets.",
      icon: LineChart,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      name: "Chat",
      role: "Conversation Expert",
      description: "Your expert AI conversation specialist, facilitating natural communication.",
      icon: MessageCircle,
      gradient: "from-blue-500 to-purple-500"
    }
  ];

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
          <XStack display="inline-flex" padding={8} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" marginBottom={16}>
            <Bot size={24} />
          </XStack>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Meet Your AI Team
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Our AI team members can handle a wide range of tasks across leadership, engineering, 
            business, and creative functions. Each agent is specialized and 
            trained to excel in their domain.
          </Paragraph>
        </MotionBox>

        <TeamGroup 
          title="Leadership & Core Team" 
          members={coreTeamMembers} 
          onMemberClick={openAgentDetail}
        />
        <TeamGroup 
          title="Engineering Team" 
          members={engineeringAgents} 
          onMemberClick={openAgentDetail}
        />
        <TeamGroup 
          title="Business Team" 
          members={businessAgents} 
          onMemberClick={openAgentDetail}
        />
        <TeamGroup 
          title="Creative Team" 
          members={creativeAgents} 
          onMemberClick={openAgentDetail}
        />
      </Box>

      <AgentDetailModal 
        agent={selectedAgent}
        isOpen={isModalOpen}
        onClose={closeAgentDetail}
      />
    </Box>
  );
};

export default AgentGallery;