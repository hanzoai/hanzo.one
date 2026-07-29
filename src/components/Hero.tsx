import { ArchitecturalBox, BlueprintLine, Box, GridLines, XStack, useToast } from '@/gui'

import { useState, useEffect, useRef } from "react";
import HeroTitle from "@/components/hero/HeroTitle";
import HeroDescription from "@/components/hero/HeroDescription";
import HeroButtons from "@/components/hero/HeroButtons";
import HeroFeatures from "@/components/hero/HeroFeatures";

const Hero = () => {
  const { toast } = useToast();
  const [animationComplete, setAnimationComplete] = useState(false);
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <XStack ref={containerRef} position="relative" minHeight="100vh" display="flex" alignItems="center" justifyContent="center" overflow="hidden">
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundColor="var(--black)" />

      {/* Architectural grid background with minimal opacity */}
      <GridLines spacing={50} opacity={0.03} />
      
      {/* Blueprint lines with minimal opacity */}
      <BlueprintLine orientation="horizontal" position="15%" color="rgba(200, 200, 200, 0.03)" />
      <BlueprintLine orientation="horizontal" position="85%" color="rgba(200, 200, 200, 0.03)" />
      <BlueprintLine orientation="vertical" position="15%" color="rgba(200, 200, 200, 0.03)" />
      <BlueprintLine orientation="vertical" position="85%" color="rgba(200, 200, 200, 0.03)" />
      
      {/* Background subtle gradient effects */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0}>
        <Box position="absolute" top="25%" left={-256} width={384} height={384} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
        <Box position="absolute" bottom={0} right={0} width={384} height={384} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" filter="blur(64px)" x="50%" y="50%"></Box>
      </Box>

      <Box position="relative" zIndex={10} maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} paddingVertical={48} width="100%" $sm={{ paddingHorizontal: 24, paddingVertical: 64 }} $lg={{ paddingHorizontal: 32 }} $md={{ paddingVertical: 80 }}>
        <ArchitecturalBox 
          textAlign="center" backgroundColor="transparent" padding={16} marginHorizontal="auto" $sm={{ padding: 24 }} $md={{ padding: 32 }}
          showCorners={true}
          showGrid={false}
          cornerSize={40}
          cornerColor="rgba(200, 200, 200, 0.05)"
        >
          <HeroTitle 
            mousePosition={mousePosition}
            containerRef={containerRef}
            onAnimationComplete={() => setAnimationComplete(true)}
            animationComplete={animationComplete}
            onTitleAnimationComplete={() => setTitleAnimationComplete(true)}
          />

          <HeroDescription titleAnimationComplete={titleAnimationComplete} />

          <XStack display="flex" justifyContent="center">
            <HeroButtons titleAnimationComplete={titleAnimationComplete} />
          </XStack>
          
          <Box marginTop={48}>
            <HeroFeatures titleAnimationComplete={titleAnimationComplete} />
          </Box>
        </ArchitecturalBox>
      </Box>
    </XStack>
  );
};

export default Hero;
