import { Box, Button, Grid, H2, H3, Link, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, Database, Share2, RefreshCcw, Heart, BookOpen
} from "lucide-react";


const principles = [
  {
    title: "Empower the Underdog",
    description: "Enable others to win. Democratize technology so small businesses and startups can compete with industry giants.",
    icon: <Users size={40} color="var(--foreground)" />,
  },
  {
    title: "Data-Driven Everything",
    description: "Let data be your guide. Embrace analytics and AI as the foundation of decision-making.",
    icon: <Database size={40} color="var(--foreground)" />,
  },
  {
    title: "Open Innovation",
    description: "Be open, share often. Openness accelerates growth—both for the company and its community.",
    icon: <Share2 size={40} color="var(--foreground)" />,
  },
  {
    title: "Adaptability",
    description: "Pivot with purpose. There is no failure, only feedback. Move quickly and strike in new directions when opportunity calls.",
    icon: <RefreshCcw size={40} color="var(--foreground)" />,
  },
  {
    title: "Customer-Centric Growth",
    description: "Coach clients like a sensei. Treat each client as a long-term partner and guide them to success.",
    icon: <Heart size={40} color="var(--foreground)" />,
  },
  {
    title: "First Principles Thinking",
    description: "See the invisible, do the impossible. Boil problems down to their essence and solve them in fundamentally better ways.",
    icon: <BookOpen size={40} color="var(--foreground)" />,
  }
];

const ZenPrinciples = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>The Zen of Hanzo</H2>
          <Box height={4} width={80} backgroundColor="var(--neutral-500)" marginHorizontal="auto" marginBottom={24}></Box>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Our guiding philosophy - a set of first principles and laws that act as our north star.
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={48} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {principles.map((principle, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              backgroundColor="rgb(0 0 0 / 0.3)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={32} height="100%"
            >
              <Box marginBottom={24}>{principle.icon}</Box>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>{principle.title}</H3>
              <Paragraph color="var(--neutral-300)">{principle.description}</Paragraph>
            </MotionBox>
          ))}
        </Grid>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center"
        >
          <Button 
            size="lg"
            color="var(--white)" paddingHorizontal={32} paddingVertical={24} borderRadius="var(--radius-lg)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-500))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--foreground))" }}
          >
            <Link tap to="/philosophy" display="flex" alignItems="center">
              Explore The Full Zen Manifesto
            </Link>
          </Button>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default ZenPrinciples;
