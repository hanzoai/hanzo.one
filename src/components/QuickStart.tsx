import { Box, Button, H2, MotionBox, MotionText, Paragraph } from '@/gui'

import { motion, useScroll, useTransform } from "framer-motion";
import { AppWindow, Rocket, Bot, ShoppingCart } from "lucide-react";
import { useRef } from "react";

const quickApps = [{
  icon: <Bot size={24} color="var(--white)" />,
  title: "AI Chat Assistant",
  description: "Launch your own ChatGPT-style AI assistant",
  glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)]",
  borderColor: "group-hover:border-blue-400/30"
}, {
  icon: <ShoppingCart size={24} color="var(--white)" />,
  title: "E-commerce Store",
  description: "Start selling products online in minutes",
  glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(74,222,128,0.3)]",
  borderColor: "group-hover:border-green-400/30"
}, {
  icon: <AppWindow size={24} color="var(--white)" />,
  title: "Web3 dApp",
  description: "Build a decentralized application",
  glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(167,139,250,0.3)]",
  borderColor: "group-hover:border-purple-400/30"
}, {
  icon: <Rocket size={24} color="var(--white)" />,
  title: "Custom App",
  description: "Start from scratch with our App Builder",
  glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(251,146,60,0.3)]",
  borderColor: "group-hover:border-orange-400/30"
}];

const QuickStart = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Create parallax transforms with different speeds
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const descriptionY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [50, -20]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return (
    <Box 
      ref={sectionRef} 
      render="section" paddingVertical={48} position="relative" overflow="hidden" backgroundColor="var(--black)"
    >
      {/* Parallax background */}
      <MotionBox 
        position="absolute" top={0} right={0} bottom={0} left={0} backgroundColor="#000a00]/[0.12" zIndex={0} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08), var(--pure-black))"
        style={{ y: backgroundY }}
      />
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} paddingVertical="128px" position="relative" zIndex={10} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <MotionBox 
          initial={{
            opacity: 0,
            y: 20
          }} 
          whileInView={{
            opacity: 1,
            y: 0
          }} 
          viewport={{
            once: true
          }} 
          textAlign="center" marginBottom={48}
          style={{ y: titleY }}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontFamily="var(--font-display)" color="var(--white)" marginBottom={16}>
            Quick Launch Apps
          </H2>
          <MotionText 
            fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)"
            style={{ y: descriptionY }}
          >
            Get started quickly with our pre-built templates
          </MotionText>
        </MotionBox>

        <MotionBox 
          display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}
          style={{ y: cardsY }}
        >
          {quickApps.map((app, index) => <MotionBox 
            key={app.title} 
            initial={{
              opacity: 0,
              y: 20
            }} 
            whileInView={{
              opacity: 1,
              y: 0
            }} 
            viewport={{
              once: true
            }} 
            
            whileHover={{
              scale: 1.08,
              rotate: 2,
              transition: {
                type: "spring",
                stiffness: 2500,
                damping: 8,
                duration: 0.02
              }
            }} 
            whileTap={{
              scale: 0.95,
              rotate: -2,
              transition: {
                type: "spring",
                stiffness: 2500,
                damping: 8,
                duration: 0.02
              }
            }} 
            group position="relative" padding={24} backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.05)" transition="all 50ms cubic-bezier(.4,0,.2,1)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), var(--pure-black), rgb(255 255 255 / 0.08))" hoverStyle={{ borderColor: "rgb(255 255 255 / 0.1)" }}>
              <Box padding={12} borderRadius="var(--radius-lg)" width="fit-content" backgroundColor="rgb(255 255 255 / 0.05)" color="var(--white)" marginHorizontal="auto">
                {app.icon}
              </Box>
              
              <Paragraph marginTop={8} color="var(--neutral-400)" textAlign="center">{app.description}</Paragraph>
              <Button marginTop={16} width="100%" backgroundColor="rgb(255 255 255 / 0.05)" color="var(--white)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" transition="all 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)", borderColor: "rgb(255 255 255 / 0.2)" }} variant="outline">
                Launch App
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><Rocket size={16} /></Box>
              </Button>
            </MotionBox>)}
        </MotionBox>
      </Box>
    </Box>
  );
};

export default QuickStart;
