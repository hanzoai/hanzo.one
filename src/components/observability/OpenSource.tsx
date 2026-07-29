import { Box, Button, Grid, H2, MotionBox, MotionText, Paragraph, Text, XStack } from '@/gui'

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Star, Download, Users } from "lucide-react";

const statsItems = [
  { 
    icon: <Download size={24} color="var(--foreground)" />,
    value: 17,
    suffix: "M+",
    label: "Downloads",
    countUpDuration: 2
  },
  { 
    icon: <Star size={24} color="var(--foreground)" />,
    value: 25,
    suffix: "K+",
    label: "GitHub Stars",
    countUpDuration: 2.2
  },
  { 
    icon: <Users size={24} color="var(--foreground)" />,
    value: 280,
    suffix: "+",
    label: "Contributors",
    countUpDuration: 1.8
  }
];

const OpenSource = () => {
  const [isInView, setIsInView] = useState(false);
  
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} position="relative" backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <XStack display="inline-flex" alignItems="center" justifyContent="center" marginBottom={24} backgroundColor="var(--surface-card-emphasis)" padding={12} borderRadius="var(--radius-full)">
            <Github size={28} color="var(--foreground)" />
          </XStack>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>Proudly Open Source</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Transparency is at the core of Hanzo Observability. Deploy it locally, self-host on your own infrastructure, or leverage our managed cloud solution.
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap={24} marginBottom={48}>
          {statsItems.map((item, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1
                }
              }}
              viewport={{ once: true }}
              textAlign="center" padding={24} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)"
              onViewportEnter={() => {
                if (!isInView) {
                  setIsInView(true);
                }
              }}
            >
              <XStack display="flex" justifyContent="center" marginBottom={12}>{item.icon}</XStack>
              <XStack display="flex" justifyContent="center" alignItems="baseline">
                <MotionText
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: item.countUpDuration }}
                  fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700"
                >
                  {isInView ? (
                    <CountUp end={item.value} duration={item.countUpDuration} />
                  ) : (
                    0
                  )}
                </MotionText>
                <Text fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700">{item.suffix}</Text>
              </XStack>
              <Box color="var(--neutral-400)" marginTop={8}>{item.label}</Box>
            </MotionBox>
          ))}
        </Grid>
        
        <XStack display="flex" justifyContent="center" gap={16}>
          <Button variant="outline" size="lg" color="var(--white)" borderColor="rgb(255 255 255 / 0.2)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}>
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={20} /></Box> Read Documentation
          </Button>
          <Button variant="outline" size="lg" color="var(--white)" borderColor="rgb(255 255 255 / 0.2)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}>
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Github size={20} /></Box> View GitHub Repository
          </Button>
        </XStack>
      </Box>
    </Box>
  );
};

// Simple CountUp component
const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);
  
  return <>{count}</>;
};

export default OpenSource;
