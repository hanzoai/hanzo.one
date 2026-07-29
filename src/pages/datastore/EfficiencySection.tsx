import { Box, ChromeText, Grid, MotionBox, Paragraph } from '@/gui'
import React from "react";
import { motion } from "framer-motion";

interface EfficiencyCardProps {
  title: string;
  mainText: string;
  subText: string;
  initialY: number;
  delay: number;
}

const EfficiencyCard = ({ title, mainText, subText, initialY, delay }: EfficiencyCardProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--neutral-800)" display="flex" flexDirection="column" alignItems="center" textAlign="center"
    >
      <ChromeText as="h3" fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>
        {title}
      </ChromeText>
      <Paragraph color="var(--neutral-300)" marginBottom={16}>
        {mainText}
      </Paragraph>
      <Paragraph color="var(--neutral-400)">
        {subText}
      </Paragraph>
    </MotionBox>
  );
};

const EfficiencySection = () => {
  const efficiencyItems = [
    {
      title: "Hardware Efficient",
      mainText: "Datastore processes analytical queries 100-1000x faster than traditional row-oriented systems with the same available I/O throughput and CPU capacity.",
      subText: "Columnar storage format allows fitting more hot data in RAM, which leads to shorter response times.",
      initialY: 30,
      delay: 0
    },
    {
      title: "Maximizes CPU Efficiency",
      mainText: "Vectorized query execution leverages SIMD processor instructions and runtime code generation.",
      subText: "Processing data in columns increases CPU cache line hit rate.",
      initialY: 30,
      delay: 0.2
    },
    {
      title: "Optimizes Disk Access",
      mainText: "Datastore minimizes the number of seeks for range queries to increase efficiency of using disk drives.",
      subText: "Maintains locality of reference for continually stored data.",
      initialY: 30,
      delay: 0.3
    },
    {
      title: "Minimizes Data Transfers",
      mainText: "Datastore enables companies to manage their data and create reports without using specialized networks.",
      subText: "Perfect for high-performance computing at any scale.",
      initialY: 30,
      delay: 0.4
    }
  ];

  return (
    <Box render="section" paddingVertical={128} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <Box textAlign="center" marginBottom={64}>
          <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            Datastore Efficiency
          </ChromeText>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={32}>
            Optimized for peak performance at every level
          </Paragraph>
        </Box>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          {efficiencyItems.map((item, index) => (
            <EfficiencyCard
              key={index}
              title={item.title}
              mainText={item.mainText}
              subText={item.subText}
              initialY={item.initialY}
              delay={item.delay}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default EfficiencySection;
