import { Anchor, Box, Button, Grid, H2, H3, H4, MotionBox, Paragraph, XStack } from '@/gui'

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Github, ExternalLink, Users, BookOpen } from "lucide-react";

const statsItems = [
  { 
    icon: <Github size={24} />,
    value: 17,
    suffix: "M+",
    label: "Downloads",
    countUpDuration: 2
  },
  { 
    icon: <Github size={24} />,
    value: 25,
    suffix: "K+",
    label: "GitHub Stars",
    countUpDuration: 2.2
  },
  { 
    icon: <Users size={24} />,
    value: 280,
    suffix: "+",
    label: "Contributors",
    countUpDuration: 1.8
  }
];

const Community = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Box render="section" paddingVertical={128} paddingHorizontal={16} position="relative" overflow="hidden" backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(rgb(255 255 255 / 0.02) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.02) 1px, transparent 1px)" backgroundSize="32px 32px" backgroundColor="size:20px 20px"></Box>
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={80}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>Powered by Community, Improved by Collaboration</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Join thousands of developers building the future of analytics together.
          </Paragraph>
        </MotionBox>
        
        <div ref={ref}>
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={64} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
          >
            {statsItems.map((item, index) => (
              <MotionBox
                key={index}
                variants={itemVariants}
                backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--neutral-800)" textAlign="center"
              >
                <XStack display="flex" justifyContent="center" marginBottom={16}>
                  <Box padding={12} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)">
                    {item.icon}
                  </Box>
                </XStack>
                
                <Box fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={8}>
                  {isInView ? (
                    <CountUp end={item.value} duration={item.countUpDuration} />
                  ) : (
                    0
                  )}
                  <span>{item.suffix}</span>
                </Box>
                
                <Box color="var(--neutral-400)">{item.label}</Box>
              </MotionBox>
            ))}
          </MotionBox>
          
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
          >
            <MotionBox
              variants={itemVariants}
              backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={32}
            >
              <XStack display="flex" alignItems="center" marginBottom={24}>
                <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Github size={24} color="var(--foreground)" /></Box>
                <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700">Open Source</H3>
              </XStack>
              
              <Paragraph color="var(--neutral-400)" marginBottom={24}>
                Hanzo Analytics is fully open source, with a vibrant community of developers contributing from around the world. Join us on GitHub to collaborate on the future of analytics.
              </Paragraph>
              
              <Box rowGap={16} marginBottom={32}>
                <XStack display="flex" alignItems="center">
                  <Box width={32} height={32} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-700)" marginRight={12}></Box>
                  <Box flex={1}>
                    <Box height={8} width="75%" backgroundColor="var(--neutral-700)" borderRadius="var(--radius)"></Box>
                    <Box height={8} width="50%" backgroundColor="var(--neutral-700)" borderRadius="var(--radius)" marginTop={8}></Box>
                  </Box>
                </XStack>
                <XStack display="flex" alignItems="center">
                  <Box width={32} height={32} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-700)" marginRight={12}></Box>
                  <Box flex={1}>
                    <Box height={8} width="75%" backgroundColor="var(--neutral-700)" borderRadius="var(--radius)"></Box>
                    <Box height={8} width="50%" backgroundColor="var(--neutral-700)" borderRadius="var(--radius)" marginTop={8}></Box>
                  </Box>
                </XStack>
                <XStack display="flex" alignItems="center">
                  <Box width={32} height={32} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-700)" marginRight={12}></Box>
                  <Box flex={1}>
                    <Box height={8} width="75%" backgroundColor="var(--neutral-700)" borderRadius="var(--radius)"></Box>
                    <Box height={8} width="50%" backgroundColor="var(--neutral-700)" borderRadius="var(--radius)" marginTop={8}></Box>
                  </Box>
                </XStack>
              </Box>
              
              <Button variant="outline" display="flex" alignItems="center" gap={8}>
                <Github size={16} />
                GitHub Repo
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={4}><ExternalLink size={12} /></Box>
              </Button>
            </MotionBox>
            
            <MotionBox
              variants={itemVariants}
              backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={32}
            >
              <XStack display="flex" alignItems="center" marginBottom={24}>
                <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><BookOpen size={24} color="var(--foreground)" /></Box>
                <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700">Resources</H3>
              </XStack>
              
              <Paragraph color="var(--neutral-400)" marginBottom={24}>
                Access comprehensive documentation, tutorials, and examples to help you make the most of Hanzo Analytics.
              </Paragraph>
              
              <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} marginBottom={32} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                {[
                  { 
                    title: "Documentation", 
                    description: "Comprehensive guides and API references",
                    link: "#documentation" 
                  },
                  { 
                    title: "Community Forum", 
                    description: "Join discussions with developers and AI experts",
                    link: "#forum" 
                  },
                  { 
                    title: "Examples", 
                    description: "Sample projects showcasing Hanzo Analytics",
                    link: "#examples" 
                  },
                  { 
                    title: "Support", 
                    description: "Get help from our team and community",
                    link: "#support" 
                  }
                ].map((resource, i) => (
                  <Anchor minHeight={44} alignItems="center" 
                    key={i} 
                    href={resource.link} 
                    display="block" padding={16} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-700)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
                  >
                    <H4 fontWeight="500" color="var(--white)" marginBottom={4}>{resource.title}</H4>
                    <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{resource.description}</Paragraph>
                  </Anchor>
                ))}
              </Grid>
              
              <Button variant="outline" display="flex" alignItems="center" gap={8}>
                Browse All Resources
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={4}><ExternalLink size={12} /></Box>
              </Button>
            </MotionBox>
          </MotionBox>
        </div>
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

export default Community;
