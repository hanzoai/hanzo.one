import { Box, Button, Card, CardContent, CardHeader, Grid, H2, H3, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Building, 
  ShieldCheck, 
  BadgeCheck, 
  Clock, 
  Users,
  ArrowRight
} from "lucide-react";

const EnterpriseReadiness = () => {
  const enterpriseFeatures = [
    {
      icon: <Building size={32} color="var(--foreground)" />,
      title: "Custom Deployment",
      description: "On-premises, private cloud, or hybrid deployment options to meet your specific security and compliance requirements."
    },
    {
      icon: <Users size={32} color="var(--foreground)" />,
      title: "Team Management",
      description: "Comprehensive tools for managing teams, permissions, and access controls across your organization."
    },
    {
      icon: <ShieldCheck size={32} color="var(--foreground)" />,
      title: "Data Sovereignty",
      description: "Control where your data is stored and processed to meet regional compliance requirements."
    },
    {
      icon: <BadgeCheck size={32} color="var(--foreground)" />,
      title: "Custom AI Training",
      description: "Train AI agents on your proprietary data and workflows for specialized domain expertise."
    },
    {
      icon: <Clock size={32} color="var(--foreground)" />,
      title: "24/7 Support",
      description: "Round-the-clock dedicated support team and guaranteed response times for critical issues."
    },
    {
      icon: <Briefcase size={32} color="var(--foreground)" />,
      title: "Implementation Services",
      description: "Professional services for seamless integration, migration, and onboarding with your existing systems."
    }
  ];

  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--neutral-950)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <XStack display="inline-flex" padding={8} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" marginBottom={16}>
            <Briefcase size={24} />
          </XStack>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Enterprise Ready
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Hanzo Team is built from the ground up for enterprise deployments,
            with the security, scalability, and support your organization requires.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={64} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {enterpriseFeatures.map((feature, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card height="100%" backgroundColor="rgb(0 0 0 / 0.4)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)">
                <CardHeader paddingBottom={8}>
                  <XStack backgroundColor="rgb(255 255 255 / 0.2)" padding={12} borderRadius="var(--radius-lg)" display="inline-flex" marginBottom={16}>
                    {feature.icon}
                  </XStack>
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600">{feature.title}</H3>
                </CardHeader>
                <CardContent>
                  <Paragraph color="var(--neutral-400)">{feature.description}</Paragraph>
                </CardContent>
              </Card>
            </MotionBox>
          ))}
        </Grid>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-xl)" padding={32} textAlign="center"
        >
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Ready to equip your enterprise?</H3>
          <Paragraph color="var(--neutral-300)" maxWidth="42rem" marginHorizontal="auto" marginBottom={32}>
            Contact our enterprise sales team for a personalized demo and custom pricing that meets your organization's unique needs.
          </Paragraph>
          <Button 
            size="lg"
            backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-700), var(--neutral-700))" }}
          >
            Contact Enterprise Sales
            <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
          </Button>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default EnterpriseReadiness;
