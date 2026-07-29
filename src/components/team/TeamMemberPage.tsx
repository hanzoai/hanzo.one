import { Anchor, Box, Button, Grid, H1, H2, H3, MotionBox, Paragraph, XStack, toast } from '@/gui'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { LucideIcon, ExternalLink, Mail, Phone, Shield, Users } from "lucide-react";
import TeamSlack from "@/components/TeamSlack";
import { teamMembers, TeamMemberId } from "@/constants/team-members";
import { useTheme } from "@/contexts/ThemeContext";

interface TeamMemberPageProps {
  memberId: TeamMemberId;
}

const TeamMemberPage = ({ memberId }: TeamMemberPageProps) => {
  const member = teamMembers[memberId];
  const MainIcon = member.mainIcon;
  const { isDarkMode, getRoundingClass, getGlassClass } = useTheme();

  const handleContactSensei = () => {
    window.location.href = "https://sensei.group";
    toast({
      title: "Redirecting to Sensei Group",
      description: "Connecting you with human assistance..."
    });
  };

  const handleContactAgency = () => {
    window.location.href = "https://hanzo.agency";
    toast({
      title: "Redirecting to Hanzo Agency",
      description: "Connecting you with our creative team..."
    });
  };

  // Extract the first part of the description to use as specialty
  const specialty = member.description.split(',')[0].trim();

  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Navbar />
      
      <Box render="main" paddingTop={128} paddingBottom={64} paddingHorizontal={16}>
        <MotionBox 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          maxWidth="var(--container-max)" marginHorizontal="auto"
        >
          <Box textAlign="center" marginBottom={64}>
            <XStack display="inline-flex" padding={12} borderRadius="var(--radius-xl)" marginBottom={16}>
              <MainIcon height={32} width={32} color="var(--white)" />
            </XStack>
            <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} $sm={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
              {member.title}
            </H1>
            <Paragraph color="var(--neutral-400)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" maxWidth="42rem" marginHorizontal="auto">
              {member.description}
            </Paragraph>
          </Box>

          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={64} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {member.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <MotionBox 
                  key={index}
                  whileHover={{ y: -5 }}
                  padding={24} borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="var(--neutral-800)"
                >
                  <FeatureIcon height={32} width={32} marginBottom={16} />
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={8}>{feature.title}</H3>
                  <Paragraph color="var(--neutral-400)">{feature.description}</Paragraph>
                </MotionBox>
              );
            })}
          </Grid>

          <TeamSlack />

          {/* Expertise Section */}
          <Box marginTop={64} marginBottom={64}>
            <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={32} textAlign="center">How {member.name} Works With Our Expert Partners</H2>
            
            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={40} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              {/* Hanzo Agency Card */}
              <Box padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" hoverStyle={{ borderColor: "var(--border-strong)" }}>
                <Box padding={12} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)" alignSelf="flex-start" display="inline-block" marginBottom={16}>
                  <Users size={24} color="var(--foreground)" strokeWidth={1.5} />
                </Box>
                <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)" marginBottom={12}>Hanzo Agency</H3>
                <Paragraph color="var(--neutral-300)" marginBottom={20}>
                  {member.name} collaborates with our creative agency to help brands transform their digital 
                  presence using cutting-edge AI-powered design and marketing strategies.
                </Paragraph>
                <XStack display="flex" flexWrap="wrap" gap={16}>
                  <Button 
                    onClick={handleContactAgency}
                    backgroundColor="var(--neutral-600)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-500)" }}
                  >
                    Work with Hanzo Agency
                    <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ExternalLink size={16} /></Box>
                  </Button>
                  <Anchor minHeight={44} display="inline-flex" alignItems="center" href="/contact" display="flex" alignItems="center" gap={8} paddingHorizontal={20} paddingVertical={10} borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-md)" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-500)", color: "var(--foreground)" }}>
                    <span>Learn more</span>
                    <Mail size={14} />
                  </Anchor>
                </XStack>
              </Box>
              
              {/* Sensei Group Card */}
              <Box padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" hoverStyle={{ borderColor: "var(--border-strong)" }}>
                <Box padding={12} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)" alignSelf="flex-start" display="inline-block" marginBottom={16}>
                  <Shield size={24} color="var(--foreground)" strokeWidth={1.5} />
                </Box>
                <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)" marginBottom={12}>Sensei Group</H3>
                <Paragraph color="var(--neutral-300)" marginBottom={20}>
                  When your project requires human expertise, {member.name} works alongside our collective of 
                  CXOs and industry specialists to implement enterprise-grade solutions.
                </Paragraph>
                <XStack display="flex" flexWrap="wrap" gap={16}>
                  <Button 
                    onClick={handleContactSensei}
                    backgroundColor="var(--neutral-600)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-500)" }}
                  >
                    Contact Sensei Group
                    <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ExternalLink size={16} /></Box>
                  </Button>
                  <Anchor minHeight={44} display="inline-flex" alignItems="center" href="tel:+1234567890" display="flex" alignItems="center" gap={8} paddingHorizontal={20} paddingVertical={10} borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-md)" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-500)", color: "var(--foreground)" }}>
                    <span>Schedule a call</span>
                    <Phone size={14} />
                  </Anchor>
                </XStack>
              </Box>
            </Grid>
          </Box>

          {/* Use Cases Section */}
          <Box textAlign="center" maxWidth="var(--container-prose)" marginHorizontal="auto" marginTop={64}>
            <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={24}>What {member.name} Can Do For You</H2>
            <Paragraph color="var(--neutral-400)" marginBottom={32}>
              {member.name} specializes in {specialty} to help you achieve your goals.
              For the best results, consider working with our expert human teams at Hanzo Agency or Sensei Group.
            </Paragraph>
            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              <Button 
                onClick={handleContactAgency}
                backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ opacity: 0.9 }}
              >
                Creative Services
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ExternalLink size={16} /></Box>
              </Button>
              <Button 
                onClick={handleContactSensei}
                backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ opacity: 0.9 }}
              >
                Enterprise Solutions
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ExternalLink size={16} /></Box>
              </Button>
            </Grid>
          </Box>
        </MotionBox>
      </Box>

      <Footer />
    </Box>
  );
};

export default TeamMemberPage;
