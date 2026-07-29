import { Box, Button, MotionBox } from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroButtonsProps {
  titleAnimationComplete: boolean;
}

const HeroButtons: React.FC<HeroButtonsProps> = ({ titleAnimationComplete }) => {
  const navigate = useNavigate();

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: titleAnimationComplete ? 1 : 0, y: titleAnimationComplete ? 0 : 20 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      display="flex" flexDirection="column" justifyContent="center" marginTop={24} $sm={{ flexDirection: "row" }}
    >
      <Button 
        size="sm" 
        color="var(--white)" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8} height={40} minWidth="120px" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-700), var(--neutral-700))" }}
        onClick={() => navigate('/signup')}
      >
        Get Started
        <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
      </Button>
      
      <Button 
        size="sm" 
        variant="outline" 
        color="var(--white)" borderColor="var(--neutral-700)" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8} height={40} minWidth="120px" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
        onClick={() => navigate('/philosophy')}
      >
        Zen of Hanzo
        <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
      </Button>
      
      <Button 
        size="sm" 
        variant="outline" 
        color="var(--white)" borderColor="var(--neutral-700)" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8} height={40} minWidth="120px" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
        onClick={() => window.open('https://github.com/hanzoai', '_blank')}
      >
        Star on GitHub
        <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><Github size={16} /></Box>
      </Button>
    </MotionBox>
  );
};

export default HeroButtons;