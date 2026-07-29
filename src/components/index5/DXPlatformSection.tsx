import { Box, Button, ChromeText, Grid, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Code, Terminal, Cpu, Rocket, Server, Zap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DXPlatformSection: React.FC = () => {
  const navigate = useNavigate();
  
  const features = [
    { icon: <Code size={24} color="var(--foreground)" />, title: "Hanzo Code", description: "AI-powered code generation and intelligent autocomplete" },
    { icon: <Terminal size={24} color="var(--foreground)" />, title: "Hanzo Dev", description: "AI engineering assistant for accelerated development" },
    { icon: <Cpu size={24} color="var(--foreground)" />, title: "Hanzo App", description: "Low-code platform for building AI applications" },
    { icon: <Rocket size={24} color="var(--foreground)" />, title: "Hanzo Bot", description: "Framework for building advanced AI agents and assistants" },
    { icon: <Server size={24} color="var(--foreground)" />, title: "Operative", description: "AI agents that automate your development workflow" },
    { icon: <Zap size={24} color="var(--foreground)" />, title: "Extension", description: "Browser and IDE plugins for seamless integration" }
  ];
  
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} position="relative" id="dx-platform">
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <Box textAlign="center" marginBottom={64}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            marginBottom={16}
          >
            <Text display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">
              Developer Experience
            </Text>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ChromeText 
              as="h2" 
              fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}
            >
              DX Platform
            </ChromeText>
            
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
              Build better, ship faster with AI-powered developer tools and frameworks
            </Paragraph>
          </MotionBox>
        </Box>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} marginTop={64} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {features.map((feature, index) => (
            <MotionBox
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
              padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" transition="all 300ms cubic-bezier(.4,0,.2,1)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.05))" hoverStyle={{ borderColor: "var(--border-strong)" }}
            >
              <XStack backgroundColor="rgb(255 255 255 / 0.1)" width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
                {feature.icon}
              </XStack>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8} color="var(--white)">{feature.title}</H3>
              <Paragraph color="var(--neutral-300)">{feature.description}</Paragraph>
            </MotionBox>
          ))}
        </Grid>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          flexDirection="row" marginTop={64} display="flex" justifyContent="center"
        >
          <Button 
            fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32} paddingVertical={24} backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
            onClick={() => navigate('/platform')}
          >
            Explore DX Platform <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
          </Button>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default DXPlatformSection;
