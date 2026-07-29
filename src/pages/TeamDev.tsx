import { Box, Button, Grid, H1, H2, H3, MotionBox, Paragraph, XStack, toast } from '@/gui'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Code2, MessagesSquare, Bot, Globe, Server, Lock } from "lucide-react";
import TeamSlack from "@/components/TeamSlack";

const TeamDev = () => {
  const handleContactSensei = () => {
    window.location.href = "https://sensei.group";
    toast({
      title: "Redirecting to Sensei Group",
      description: "Connecting you with human assistance..."
    });
  };

  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Navbar />
      
      <Box render="main" paddingTop={128} paddingBottom={64} paddingHorizontal={16}>
        <MotionBox 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          maxWidth="var(--container-max)" marginHorizontal="auto"
        >
          {/* Hero Section */}
          <Box textAlign="center" marginBottom={64}>
            <XStack display="inline-flex" padding={12} borderRadius="var(--radius-xl)" marginBottom={16} backgroundImage="linear-gradient(to bottom right, var(--neutral-500), var(--neutral-500))">
              <Code2 size={32} color="var(--white)" />
            </XStack>
            <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} $sm={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
              Meet Dev, Your AI Developer
            </H1>
            <Paragraph color="var(--neutral-400)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" maxWidth="42rem" marginHorizontal="auto">
              Your expert AI developer, specializing in full-stack development and system architecture.
              Working alongside you in various platforms to bring your ideas to life.
            </Paragraph>
          </Box>

          {/* Integration Platforms */}
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={64} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            <MotionBox 
              whileHover={{ y: -5 }}
              padding={24} borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="rgb(0 0 0 / 0.5)"
            >
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><MessagesSquare size={32} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={8}>Chat Integration</H3>
              <Paragraph color="var(--neutral-400)">
                Available on Slack, Mattermost, and Hanzo Chat for seamless collaboration
                and real-time assistance.
              </Paragraph>
            </MotionBox>

            <MotionBox 
              whileHover={{ y: -5 }}
              padding={24} borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="rgb(0 0 0 / 0.5)"
            >
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Bot size={32} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={8}>Hanzo Works</H3>
              <Paragraph color="var(--neutral-400)">
                Our private AI-powered alternative to Google Apps, ensuring your data
                stays secure and under your control.
              </Paragraph>
            </MotionBox>

            <MotionBox 
              whileHover={{ y: -5 }}
              padding={24} borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="rgb(0 0 0 / 0.5)"
            >
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Lock size={32} color="var(--foreground)" /></Box>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={8}>On-Premise AI</H3>
              <Paragraph color="var(--neutral-400)">
                Deploy Dev locally in your infrastructure for maximum security and
                compliance with your organization's requirements.
              </Paragraph>
            </MotionBox>
          </Grid>

          {/* Demo Chat Interface */}
          <TeamSlack />

          {/* Contact Section */}
          <Box textAlign="center" maxWidth="42rem" marginHorizontal="auto" marginTop={64}>
            <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={16}>Need Human Assistance?</H2>
            <Paragraph color="var(--neutral-400)" marginBottom={24}>
              While Dev is highly capable, sometimes you might need human expertise.
              Contact Sensei Group for dedicated support and consultation.
            </Paragraph>
            <Button 
              onClick={handleContactSensei}
              backgroundImage="linear-gradient(to right, var(--neutral-500), var(--neutral-500))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-600), var(--neutral-600))" }}
            >
              Contact Sensei Group
            </Button>
          </Box>
        </MotionBox>
      </Box>

      <Footer />
    </Box>
  );
};

export default TeamDev;
