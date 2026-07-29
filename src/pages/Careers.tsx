import { Box, Button, ChromeText, Grid, H2, H3, Helmet, MotionBox, Paragraph, Text, Toaster, XStack } from '@/gui'

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, Globe, Clock, MapPin, Users, Sparkles } from "lucide-react";

const jobOpenings = [
  {
    title: "AI/ML Research Engineer",
    location: "Remote / SF",
    type: "Full-time",
    department: "AI Research",
    description: "Work on foundational models, fine-tuning, and novel architectures. Experience with transformers, RLHF, and distributed training required."
  },
  {
    title: "Compiler Engineer",
    location: "Remote",
    type: "Full-time",
    department: "Engineering",
    description: "Build high-performance inference engines and model compilers. Experience with LLVM, MLIR, or similar frameworks preferred."
  },
  {
    title: "MCP Protocol Engineer",
    location: "Remote",
    type: "Full-time",
    department: "Infrastructure",
    description: "Design and implement Model Context Protocol servers and tooling. Shape the future of AI agent infrastructure."
  },
  {
    title: "Cryptography Engineer (ZKP)",
    location: "Remote",
    type: "Full-time",
    department: "Blockchain",
    description: "Implement zero-knowledge proofs for AI verification and on-chain compute. Experience with SNARKs/STARKs required."
  },
  {
    title: "Quantum Computing Researcher",
    location: "Remote / Research",
    type: "Full-time",
    department: "Research",
    description: "Explore quantum ML algorithms and post-quantum cryptography. PhD or equivalent research experience preferred."
  },
  {
    title: "Robotics Systems Engineer",
    location: "SF Bay Area",
    type: "Full-time",
    department: "Robotics",
    description: "Build AI systems for real-time robotic control. Experience with ROS, computer vision, and embedded systems required."
  },
  {
    title: "Senior Backend Engineer (Go/Rust)",
    location: "Remote",
    type: "Full-time",
    department: "Platform",
    description: "Build scalable, high-performance backend services for our AI platform. Experience with distributed systems required."
  },
  {
    title: "Product Designer",
    location: "Remote / SF",
    type: "Full-time",
    department: "Design",
    description: "Design beautiful, intuitive interfaces for AI products. Experience with developer tools and data visualization a plus."
  }
];

const benefits = [
  {
    icon: <Globe size={24} color="var(--foreground)" />,
    title: "Remote-First Culture",
    description: "Work from anywhere in the world with our distributed team."
  },
  {
    icon: <Clock size={24} color="var(--foreground)" />,
    title: "Flexible Hours",
    description: "Set your own schedule and work when you're most productive."
  },
  {
    icon: <Users size={24} color="var(--foreground)" />,
    title: "Collaborative Environment",
    description: "Work with talented individuals from diverse backgrounds."
  },
  {
    icon: <Sparkles size={24} color="var(--foreground)" />,
    title: "Cutting-Edge Tech",
    description: "Access to the latest AI technologies and resources."
  }
];

const Careers = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)">
      <Helmet>
        <title>Careers - Hanzo AI</title>
        <meta name="description" content="Join the Hanzo AI team and help build the future of AI. Explore current job openings and benefits." />
      </Helmet>
      <Navbar />
      <main>
        <Box render="section" paddingVertical={128} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box position="absolute" top={80} right={80} width={256} height={256} backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
          <Box position="absolute" bottom={-128} left={-128} width={384} height={384} backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
          
          <Box maxWidth="var(--container-max)" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              textAlign="center" marginBottom={64}
            >
              <Box display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" marginBottom={24}>
                Join Our Team
              </Box>
              <ChromeText 
                as="h1" 
                fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
              >
                Build the Future of AI
              </ChromeText>
              <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
                Join a team passionate about democratizing access to AI and creating technology that empowers developers worldwide.
              </Paragraph>
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              marginBottom={96}
            >
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={32} textAlign="center">Open Positions</H2>
              <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                {jobOpenings.map((job, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    
                    backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
                  >
                    <XStack display="flex" alignItems="flex-start" gap={16}>
                      <Box padding={12} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)">
                        <Briefcase size={24} color="var(--foreground)" />
                      </Box>
                      <div>
                        <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={4}>{job.title}</H3>
                        <XStack display="flex" flexWrap="wrap" gap={12} marginBottom={12}>
                          <Text display="inline-flex" alignItems="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
                            <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><MapPin size={16} /></Box> {job.location}
                          </Text>
                          <Text display="inline-flex" alignItems="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
                            <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Clock size={16} /></Box> {job.type}
                          </Text>
                          <Text display="inline-flex" alignItems="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
                            <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Users size={16} /></Box> {job.department}
                          </Text>
                        </XStack>
                        <Paragraph color="var(--neutral-300)" marginBottom={16}>{job.description}</Paragraph>
                        <Button variant="outline" color="var(--white)" borderColor="rgb(255 255 255 / 0.2)" backgroundColor="rgb(255 255 255 / 0.05)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}>
                          Apply Now
                        </Button>
                      </div>
                    </XStack>
                  </MotionBox>
                ))}
              </Grid>
              
              <Box marginTop={32} textAlign="center">
                <Paragraph color="var(--neutral-400)" marginBottom={16}>Don't see a position that fits your skills?</Paragraph>
                <Button 
                  variant="outline" 
                  color="var(--white)" borderColor="rgb(255 255 255 / 0.2)" backgroundColor="rgb(255 255 255 / 0.05)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
                >
                  Submit Open Application
                </Button>
              </Box>
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              marginBottom={96}
            >
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={32} textAlign="center">Benefits & Perks</H2>
              <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
                {benefits.map((benefit, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} textAlign="center"
                  >
                    <XStack width={48} height={48} marginHorizontal="auto" borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
                      {benefit.icon}
                    </XStack>
                    <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="700" marginBottom={8}>{benefit.title}</H3>
                    <Paragraph color="var(--neutral-400)">{benefit.description}</Paragraph>
                  </MotionBox>
                ))}
              </Grid>
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              textAlign="center" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32}
            >
              <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Our Hiring Process</H2>
              <Paragraph color="var(--neutral-300)" marginBottom={24} maxWidth="var(--container-prose)" marginHorizontal="auto">
                We've designed our hiring process to be straightforward, respectful of your time, and focused on finding the right match for both you and Hanzo.
              </Paragraph>
              <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} marginBottom={32} $md={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
                <Box padding={16}>
                  <XStack width={40} height={40} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={12} marginHorizontal="auto">
                    <Text color="var(--white)" fontWeight="500">1</Text>
                  </XStack>
                  <H3 fontWeight="500" marginBottom={4}>Application Review</H3>
                  <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">We review your resume and application materials</Paragraph>
                </Box>
                <Box padding={16}>
                  <XStack width={40} height={40} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={12} marginHorizontal="auto">
                    <Text color="var(--white)" fontWeight="500">2</Text>
                  </XStack>
                  <H3 fontWeight="500" marginBottom={4}>Initial Interview</H3>
                  <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Get to know you and your experience</Paragraph>
                </Box>
                <Box padding={16}>
                  <XStack width={40} height={40} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={12} marginHorizontal="auto">
                    <Text color="var(--white)" fontWeight="500">3</Text>
                  </XStack>
                  <H3 fontWeight="500" marginBottom={4}>Technical Assessment</H3>
                  <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Showcase your skills (no whiteboarding)</Paragraph>
                </Box>
                <Box padding={16}>
                  <XStack width={40} height={40} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={12} marginHorizontal="auto">
                    <Text color="var(--white)" fontWeight="500">4</Text>
                  </XStack>
                  <H3 fontWeight="500" marginBottom={4}>Final Interview</H3>
                  <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Meet the team and discuss next steps</Paragraph>
                </Box>
              </Grid>
              <Button 
                backgroundImage="linear-gradient(to right, var(--neutral-700), var(--neutral-500))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-600), var(--foreground))" }}
              >
                <a href="#open-positions">Browse Open Positions</a>
              </Button>
            </MotionBox>
          </Box>
        </Box>
      </main>
      <Footer />
      <Toaster />
    </Box>
  );
};

export default Careers;
