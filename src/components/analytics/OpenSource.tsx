import { Box, Button, Grid, H2, MotionBox, MotionText, Paragraph, Text, XStack, YStack } from '@/gui'

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
    <Box render="section" paddingVertical={128} paddingHorizontal={16} position="relative" backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(rgb(255 255 255 / 0.02) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.02) 1px, transparent 1px)" backgroundSize="32px 32px" backgroundColor="size:30px 30px"></Box>
      
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={64} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>Open Source at Our Core</H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32}>
              Hanzo Analytics is fully open-source, fostering innovation and collaboration among thousands of global developers.
            </Paragraph>
            
            <Grid display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap={24} marginBottom={32}>
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
                  textAlign="center" padding={16}
                  onViewportEnter={() => {
                    if (!isInView) {
                      setIsInView(true);
                    }
                  }}
                >
                  <XStack display="flex" justifyContent="center" marginBottom={8}>{item.icon}</XStack>
                  <XStack display="flex" justifyContent="center" alignItems="baseline">
                    <MotionText
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: item.countUpDuration }}
                      fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700"
                    >
                      {isInView ? (
                        <CountUp end={item.value} duration={item.countUpDuration} />
                      ) : (
                        0
                      )}
                    </MotionText>
                    <Text fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700">{item.suffix}</Text>
                  </XStack>
                  <Box color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginTop={4}>{item.label}</Box>
                </MotionBox>
              ))}
            </Grid>
            
            <YStack display="flex" flexDirection="column" gap={16} $sm={{ flexDirection: "row" }}>
              <Button variant="outline" display="flex" alignItems="center" gap={8} size="sm">
                <Github size={16} />
                <a href="https://docs.hanzo.ai" target="_blank" rel="noopener noreferrer">
                  View Docs
                </a>
              </Button>
              <Button variant="outline" display="flex" alignItems="center" gap={8} size="sm">
                <Github size={16} />
                <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer">
                  View Repository
                </a>
              </Button>
            </YStack>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            borderRadius="var(--radius-xl)" overflow="hidden" borderWidth={1} borderColor="var(--neutral-800)" boxShadow="0 20px 25px -5px rgb(0 0 0 / .4)" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), var(--pure-black))"
          >
            <XStack display="flex" alignItems="center" padding={16} backgroundColor="var(--neutral-900)" borderBottomWidth={1} borderColor="var(--neutral-800)">
              <XStack display="flex" columnGap={8} marginRight={16}>
                <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
              </XStack>
              <Box flex={1} textAlign="center" color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">analytics.js</Box>
            </XStack>
            
            <Box padding={24} textAlign="left" fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" overflowX="auto">
              <XStack display="flex">
                <Box marginRight={16} color="var(--neutral-600)">1</Box>
                <div>
                  <Text color="var(--foreground)">import</Text> <Text color="var(--foreground)">{'{'}</Text> <Text color="var(--foreground)">HanzoAnalytics</Text> <Text color="var(--foreground)">{'}'}</Text> <Text color="var(--foreground)">from</Text> <Text color="var(--foreground)">'hanzo-analytics'</Text>;
                </div>
              </XStack>
              <XStack display="flex">
                <Box marginRight={16} color="var(--neutral-600)">2</Box>
                <div></div>
              </XStack>
              <XStack display="flex">
                <Box marginRight={16} color="var(--neutral-600)">3</Box>
                <div><Text color="var(--foreground)">// Initialize analytics with your project ID</Text></div>
              </XStack>
              <XStack display="flex">
                <Box marginRight={16} color="var(--neutral-600)">4</Box>
                <div>
                  <Text color="var(--foreground)">const</Text> analytics <Text color="var(--white)">=</Text> <Text color="var(--foreground)">new</Text> <Text color="var(--foreground)">HanzoAnalytics</Text><Text color="var(--white)">(</Text><Text color="var(--foreground)">'YOUR_PROJECT_ID'</Text><Text color="var(--white)">);</Text>
                </div>
              </XStack>
              <XStack display="flex">
                <Box marginRight={16} color="var(--neutral-600)">5</Box>
                <div></div>
              </XStack>
              <XStack display="flex">
                <Box marginRight={16} color="var(--neutral-600)">6</Box>
                <div><Text color="var(--foreground)">// Track page views automatically</Text></div>
              </XStack>
              <XStack display="flex">
                <Box marginRight={16} color="var(--neutral-600)">7</Box>
                <div>
                  <Text color="var(--white)">analytics.trackPageViews();</Text>
                </div>
              </XStack>
              <XStack display="flex">
                <Box marginRight={16} color="var(--neutral-600)">8</Box>
                <div></div>
              </XStack>
              <XStack display="flex">
                <Box marginRight={16} color="var(--neutral-600)">9</Box>
                <div><Text color="var(--foreground)">// Track custom events</Text></div>
              </XStack>
              <XStack display="flex">
                <Box marginRight={16} color="var(--neutral-600)">10</Box>
                <div>
                  <Text color="var(--white)">analytics.track(</Text><Text color="var(--foreground)">'button_click'</Text><Text color="var(--white)">, {'{'}</Text>
                </div>
              </XStack>
              <XStack display="flex">
                <Box marginRight={16} color="var(--neutral-600)">11</Box>
                <div>
                  <Text color="var(--white)">  buttonId: </Text><Text color="var(--foreground)">'signup_button'</Text><Text color="var(--white)">,</Text>
                </div>
              </XStack>
              <XStack display="flex">
                <Box marginRight={16} color="var(--neutral-600)">12</Box>
                <div>
                  <Text color="var(--white)">  page: </Text><Text color="var(--foreground)">'/home'</Text>
                </div>
              </XStack>
              <XStack display="flex">
                <Box marginRight={16} color="var(--neutral-600)">13</Box>
                <div>
                  <Text color="var(--white)">{'}'});</Text>
                </div>
              </XStack>
            </Box>
          </MotionBox>
        </Grid>
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
