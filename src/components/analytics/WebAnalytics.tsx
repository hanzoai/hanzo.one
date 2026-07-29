import { Box, Grid, H2, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { LineChart, Users, Filter, Layers, Activity } from "lucide-react";

const features = [
  { 
    icon: <Activity />,
    title: "Real-Time Data", 
    description: "Instantly track live user actions and site performance."
  },
  { 
    icon: <Users />,
    title: "User Journeys", 
    description: "Visualize complete paths users take within your site or app."
  },
  {
    icon: <Layers />,
    title: "Funnels & Retention", 
    description: "Analyze user conversion and retention metrics with clarity."
  },
  { 
    icon: <LineChart />,
    title: "Event Tracking", 
    description: "Capture user interactions, from clicks to complex events."
  },
  { 
    icon: <Filter />,
    title: "Powerful Segmentation", 
    description: "Deeply filter and segment your data by geography, platform, and more."
  }
];

const WebAnalytics = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationTriggered) {
          controls.start("animate");
          setAnimationTriggered(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (chartRef.current) {
      observer.observe(chartRef.current);
    }
    
    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, [controls, animationTriggered]);

  const lineVariants = {
    initial: {
      pathLength: 0
    },
    animate: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const dataPointVariants = {
    initial: {
      opacity: 0,
      scale: 0
    },
    animate: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.5 + i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <Box render="section" paddingVertical={128} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.2} backgroundImage="linear-gradient(to right, var(--neutral-800), transparent, transparent)"></Box>
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>Comprehensive Web Analytics</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Hanzo Analytics delivers real-time insights into every interaction, from clicks to conversions.
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={64} marginBottom={80} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <Box rowGap={32}>
            {features.map((feature, index) => (
              <MotionBox
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                flexDirection="row" display="flex"
              >
                <Box marginRight={16} marginTop={4} backgroundColor="var(--surface-card-emphasis)" padding={8} borderRadius="var(--radius-lg)" color="var(--foreground)">
                  {feature.icon}
                </Box>
                <div>
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" color="var(--white)" marginBottom={8}>{feature.title}</H3>
                  <Paragraph color="var(--neutral-400)">{feature.description}</Paragraph>
                </div>
              </MotionBox>
            ))}
          </Box>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            position="relative"
            ref={chartRef}
          >
            <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" padding={24} borderWidth={1} borderColor="var(--neutral-800)">
              <XStack display="flex" justifyContent="space-between" alignItems="center" marginBottom={16}>
                <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500">Live User Activity</H3>
                <MotionBox animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} backgroundColor="var(--neutral-500)" height={8} width={8} borderRadius="var(--radius-full)"></MotionBox>
              </XStack>
              
              <Box height={320} width="100%" position="relative">
                {/* Chart grid */}
                <Grid position="absolute" top={0} right={0} bottom={0} left={0} display="grid" gridTemplateColumns="repeat(6, minmax(0, 1fr))" gridTemplateRows="repeat(5, minmax(0, 1fr))">
                  {Array(30).fill(0).map((_, i) => (
                    <Box key={i} borderBottomWidth={1} borderRightWidth={1} borderColor="var(--neutral-800)" opacity={0.3}></Box>
                  ))}
                </Grid>
                
                {/* Chart area */}
                <Box position="absolute" top={0} right={0} bottom={0} left={0} padding={16}>
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Chart lines */}
                    <motion.path
                      d="M0,80 C10,70 20,85 30,60 C40,40 50,55 60,30 C70,40 80,20 90,10 L100,20"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      fill="none"
                      variants={lineVariants}
                      initial="initial"
                      animate={controls}
                    />
                    <motion.path
                      d="M0,90 C15,80 25,75 35,70 C45,65 55,60 65,50 C75,70 85,60 95,40 L100,50"
                      stroke="#33C3F0"
                      strokeWidth="2"
                      fill="none"
                      variants={lineVariants}
                      initial="initial"
                      animate={controls}
                    />
                    
                    {/* Data points */}
                    {[
                      { x: 30, y: 60, color: "#8B5CF6" },
                      { x: 60, y: 30, color: "#8B5CF6" },
                      { x: 90, y: 10, color: "#8B5CF6" },
                      { x: 35, y: 70, color: "#33C3F0" },
                      { x: 65, y: 50, color: "#33C3F0" },
                      { x: 95, y: 40, color: "#33C3F0" }
                    ].map((point, i) => (
                      <motion.circle
                        key={i}
                        cx={point.x}
                        cy={point.y}
                        r="2"
                        fill={point.color}
                        custom={i}
                        variants={dataPointVariants}
                        initial="initial"
                        animate={controls}
                      />
                    ))}
                  </svg>
                </Box>
                
                {/* Tooltip */}
                <MotionBox
                  position="absolute" backgroundColor="var(--neutral-800)" borderRadius="var(--radius)" padding={8} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" width={128} boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)" borderWidth={1} borderColor="var(--neutral-700)"
                  style={{ top: "30%", left: "60%" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={controls}
                  variants={{
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: 2, duration: 0.3 }
                    }
                  }}
                >
                  <XStack display="flex" justifyContent="space-between">
                    <span>Pageviews</span>
                    <Text fontWeight="700">1,240</Text>
                  </XStack>
                  <XStack display="flex" justifyContent="space-between" marginTop={4}>
                    <span>Users</span>
                    <Text fontWeight="700">876</Text>
                  </XStack>
                  <Box color="var(--foreground)" textAlign="right" marginTop={4}>+24.5%</Box>
                </MotionBox>
              </Box>
              
              <XStack display="flex" justifyContent="space-between" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginTop={8}>
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>24:00</span>
              </XStack>
            </Box>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default WebAnalytics;
