import { Box, ChromeText, Grid, MotionBox, Paragraph } from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import { Activity, BarChart, Clock, ShoppingCart, Shield, Lightbulb, Signal, LineChart, Gamepad2, Cpu, Network, Users } from "lucide-react";

const UseCasesSection = () => {
  const useCases = [
    { name: "Web and app analytics", icon: BarChart },
    { name: "E-commerce and finance", icon: ShoppingCart },
    { name: "Time series", icon: Clock },
    { name: "Advertising networks and RTB", icon: Network },
    { name: "Information security", icon: Shield },
    { name: "Business intelligence", icon: Lightbulb },
    { name: "Telecommunications", icon: Signal },
    { name: "Monitoring and telemetry", icon: LineChart },
    { name: "Online games", icon: Gamepad2 },
    { name: "Internet of Things (IoT)", icon: Cpu },
    { name: "Observability", icon: Activity },
    { name: "User behavior analytics", icon: Users }
  ];

  return (
    <Box render="section" paddingVertical={128} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.3} pointerEvents="none" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.1))"></Box>

      <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
        <Box textAlign="center" marginBottom={64}>
          <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            Datastore at Scale
          </ChromeText>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={32}>
            Powering a wide range of applications across industries with unmatched performance
          </Paragraph>
        </Box>

        <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={24} $sm={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }} $md={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <MotionBox
                key={useCase.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24} textAlign="center" display="flex" flexDirection="column" alignItems="center" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)", borderColor: "var(--neutral-700)" }}
              >
                <Icon height={32} width={32} color="var(--foreground)" marginBottom={12} />
                <Paragraph color="var(--neutral-300)">{useCase.name}</Paragraph>
              </MotionBox>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default UseCasesSection;
