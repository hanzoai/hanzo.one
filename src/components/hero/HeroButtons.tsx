import { Anchor, Box, Button, YStack } from '@/gui'
import React, { useState } from "react";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

interface HeroButtonsProps {
  titleAnimationComplete: boolean;
}

const HeroButtons: React.FC<HeroButtonsProps> = ({ titleAnimationComplete }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <YStack 
      marginTop={48} display="flex" flexDirection="column" gap={20} justifyContent="center" $sm={{ flexDirection: "row" }}
      style={{
        opacity: titleAnimationComplete ? 1 : 0,
        transform: titleAnimationComplete ? "translateY(0)" : "translateY(20px)",
        filter: titleAnimationComplete ? "blur(0px)" : "blur(8px)",
        transition: "opacity 0.4s ease, transform 0.4s ease, filter 0.4s ease",
        transitionDelay: "0.35s"
      }}
    >
      <Button 
        size="sm" 
        variant="outline" 
        radius="full"
        color="var(--foreground)" borderColor="rgb(255 255 255 / 0.1)" backgroundColor="transparent" height={40} minWidth="140px" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.05)" }}
      >
        <Anchor href="/ai" backgroundImage="linear-gradient(90deg, var(--neutral-400), var(--foreground), var(--neutral-400))" backgroundClip="text" color="transparent" display="flex" alignItems="center">
          <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Sparkles size={16} /></Box>
          Our models
        </Anchor>
      </Button>
      <Button 
        size="sm" 
        radius="full"
        backgroundColor="var(--foreground)" color="var(--pure-black)" borderWidth={1} borderColor="var(--neutral-300)" transition="all 300ms cubic-bezier(.4,0,.2,1)" height={40} minWidth="140px" hoverStyle={{ backgroundColor: "var(--neutral-100)", color: "var(--pure-black)", borderColor: "var(--neutral-400)" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Anchor href="/zen" display="flex" alignItems="center">
          <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Zap size={16} /></Box>
          Our principles
        </Anchor>
      </Button>
    </YStack>
  );
};

export default HeroButtons;