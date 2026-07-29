import { Box, Grid, H2, H3, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Target, 
  Lightbulb, 
  BarChart4 
} from "lucide-react";

const benefits = [
  {
    icon: <Zap size={24} color="var(--foreground)" />,
    title: "Precision Monitoring",
    description: "Identify exactly where and why issues occur in real-time."
  },
  {
    icon: <Target size={24} color="var(--foreground)" />,
    title: "Faster Debugging",
    description: "Detailed traces and logs provide the clarity needed for rapid resolution."
  },
  {
    icon: <Lightbulb size={24} color="var(--foreground)" />,
    title: "Optimized User Experiences",
    description: "Understand user behavior deeply, driving improvements that matter."
  },
  {
    icon: <BarChart4 size={24} color="var(--foreground)" />,
    title: "Informed Decisions",
    description: "Reliable analytics and predictive insights empower smarter product and operational decisions."
  }
];

const Benefits = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} position="relative" backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          maxWidth="var(--container-prose)" marginHorizontal="auto" textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Why Leading Teams Choose Hanzo Observability</H2>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          {benefits.map((benefit, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" padding={24} borderWidth={1} borderColor="var(--neutral-800)"
            >
              <Box backgroundColor="var(--surface-overlay)" padding={12} borderRadius="var(--radius-lg)" width="fit-content" marginBottom={20}>
                {benefit.icon}
              </Box>
              <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="700" marginBottom={12}>{benefit.title}</H3>
              <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{benefit.description}</Paragraph>
            </MotionBox>
          ))}
        </Grid>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          marginTop={80} textAlign="center"
        >
          <Box display="inline-block" padding={16} borderRadius="var(--radius-xl)" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
            <Box render="blockquote" fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontStyle="italic" color="var(--neutral-300)" maxWidth="42rem" marginHorizontal="auto">
              "Hanzo Observability has been critical to our AI operations, giving us unprecedented visibility into our models' performance and significantly improving our debugging time."
            </Box>
            <Box marginTop={16} color="var(--neutral-400)">
              <Box fontWeight="500">Alex Chen</Box>
              <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">AI Engineering Lead, Triller</Box>
            </Box>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Benefits;
