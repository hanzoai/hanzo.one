import { Box, Button, Grid, H3, Link, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Users, BookOpen, Shield } from "lucide-react";

import SectionHeader from "@/components/zen/SectionHeader";

const UnifiedAICloud: React.FC = () => {
  return (
    <Box marginBottom={96}>
      <SectionHeader 
        title="Unified AI Cloud" 
        description="One platform to build, deploy, and scale your AI applications" 
      />
      
      <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={48} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          
          padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" transition="all 300ms cubic-bezier(.4,0,.2,1)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.05))" hoverStyle={{ borderColor: "var(--border-strong)" }}
        >
          <XStack backgroundColor="rgb(255 255 255 / 0.1)" width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
            <Users size={24} color="var(--foreground)" />
          </XStack>
          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8} color="var(--white)">Enterprise Infrastructure</H3>
          <Paragraph color="var(--neutral-300)">
            Scalable, secure infrastructure designed for enterprise AI workloads, with global availability, 
            compliance-ready security, and managed services.
          </Paragraph>
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          
          padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" transition="all 300ms cubic-bezier(.4,0,.2,1)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.05))" hoverStyle={{ borderColor: "var(--border-strong)" }}
        >
          <XStack backgroundColor="rgb(255 255 255 / 0.1)" width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
            <BookOpen size={24} color="var(--foreground)" />
          </XStack>
          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8} color="var(--white)">Developer Experience</H3>
          <Paragraph color="var(--neutral-300)">
            Comprehensive tooling and frameworks that accelerate development, simplify deployments, and reduce 
            time-to-market for AI-powered applications.
          </Paragraph>
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          
          padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" transition="all 300ms cubic-bezier(.4,0,.2,1)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.05))" hoverStyle={{ borderColor: "var(--border-strong)" }}
        >
          <XStack backgroundColor="rgb(255 255 255 / 0.1)" width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
            <Shield size={24} color="var(--foreground)" />
          </XStack>
          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8} color="var(--white)">Expert Services</H3>
          <Paragraph color="var(--neutral-300)">
            Access to industry and technical experts who help you strategize, implement, and optimize your AI 
            initiatives for maximum business impact.
          </Paragraph>
        </MotionBox>
      </Grid>
      
      <Box textAlign="center">
        <Button asChild size="lg" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-700), var(--neutral-700))" }}>
          <Link to="/cloud">
            Explore Our AI Cloud Platform <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ChevronRight size={20} /></Box>
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default UnifiedAICloud;
