import { Box, Button, Grid, H3, MotionBox, MotionText, Paragraph } from '@/gui'

import { motion } from "framer-motion";
import { Users, MessageSquare, BarChart, Calendar } from "lucide-react";

const CRM = () => {
  return (
    <Box render="section" paddingVertical={96} backgroundColor="var(--black)" position="relative" overflow="hidden">
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), rgb(0 0 0 / 0.5))" />
      
      <Box position="relative" zIndex={10} maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box textAlign="center" marginBottom={64}>
          <MotionText 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={16} $sm={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}
          >
            Hanzo CRM
          </MotionText>
          <MotionText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto"
          >
            Streamline your customer relationships with AI-powered insights and automation
          </MotionText>
        </Box>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-card-emphasis)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" padding={24} borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" transition="all 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ outlineColor: "rgb(255 255 255 / 0.2)", outlineStyle: "solid" }}
          >
            <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Users size={48} color="var(--neutral-400)" /></Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={8}>Contact Management</H3>
            <Paragraph color="var(--neutral-400)">Organize and track customer interactions with AI-enhanced contact profiles</Paragraph>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-card-emphasis)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" padding={24} borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" transition="all 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ outlineColor: "rgb(255 255 255 / 0.2)", outlineStyle: "solid" }}
          >
            <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><MessageSquare size={48} color="var(--neutral-400)" /></Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={8}>Smart Communication</H3>
            <Paragraph color="var(--neutral-400)">Automated messaging and follow-ups powered by contextual AI understanding</Paragraph>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-card-emphasis)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" padding={24} borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" transition="all 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ outlineColor: "rgb(255 255 255 / 0.2)", outlineStyle: "solid" }}
          >
            <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><BarChart size={48} color="var(--neutral-400)" /></Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={8}>Analytics Dashboard</H3>
            <Paragraph color="var(--neutral-400)">Real-time insights and predictive analytics to optimize customer relationships</Paragraph>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            backgroundColor="var(--surface-card-emphasis)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" padding={24} borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" transition="all 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ outlineColor: "rgb(255 255 255 / 0.2)", outlineStyle: "solid" }}
          >
            <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Calendar size={48} color="var(--neutral-400)" /></Box>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={8}>Smart Scheduling</H3>
            <Paragraph color="var(--neutral-400)">AI-powered meeting scheduling and follow-up management</Paragraph>
          </MotionBox>
        </Grid>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          marginTop={64} textAlign="center"
        >
          <Button
            size="lg"
            backgroundColor="var(--white)" color="var(--pure-black)" hoverStyle={{ backgroundColor: "var(--neutral-100)" }}
          >
            <a href="https://console.hanzo.ai/crm">Try Hanzo CRM</a>
          </Button>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default CRM;
