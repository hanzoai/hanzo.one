import { Box, Grid, H2, H3, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Scale, Zap, Code, Users } from "lucide-react";

const ScalabilitySection = () => {
  const features = [
    {
      icon: Scale,
      title: "Scale as needed",
      description: "Scale elastically to support tens of billions of vectors with a fully distributed architecture."
    },
    {
      icon: Zap,
      title: "Blazing fast",
      description: "Retrieve data quickly and accurately with optimized indexing, regardless of scale."
    },
    {
      icon: Code,
      title: "Reusable Code",
      description: "Write once, and deploy with one line of code into the production environment."
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "Fan-favorite vector database with extensive resources and supportive contributors."
    }
  ];

  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--neutral-950), var(--pure-black))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Why Developers Prefer Hanzo Vector
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            The preferred choice for vector database needs from prototype to production
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          {features.map((feature, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
              borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" hoverStyle={{ borderColor: "var(--border-strong)" }}
            >
              <feature.icon height={40} width={40} color="var(--neutral-500)" marginBottom={24} />
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={12}>{feature.title}</H3>
              <Paragraph color="var(--neutral-400)">{feature.description}</Paragraph>
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ScalabilitySection;
