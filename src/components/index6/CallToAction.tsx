import { Box, Button, MotionBox, MotionText, Text } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CallToAction: React.FC = () => {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate('/signup');
  };
  
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} position="relative" overflow="hidden" backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $md={{ paddingHorizontal: 32 }}>
      {/* Background animation elements */}
      <MotionBox 
        position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.2}
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{ 
          backgroundImage: "radial-gradient(circle at 30% 50%, purple 0%, transparent 20%), radial-gradient(circle at 70% 50%, indigo 0%, transparent 20%)",
          backgroundSize: "100% 100%",
        }}
      />
      
      <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center" position="relative" zIndex={10}>
        <MotionText
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          fontSize="var(--text-3xl)" lineHeight="var(--leading-tight)" fontWeight="700" marginBottom={24} color="var(--white)" $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}
        >
          Ready to Transform Your AI Development?
        </MotionText>
        
        <MotionText
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          fontSize="var(--text-lg)" lineHeight="var(--leading-relaxed)" color="var(--neutral-300)" marginBottom={40}
        >
          Join thousands of developers and companies building the future with Hanzo AI.
        </MotionText>
        
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          flexDirection="row" display="flex" flexWrap="wrap" justifyContent="center" gap={16}
        >
          <MotionBox
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button 
              size="lg" 
              group backgroundColor="var(--neutral-600)" color="var(--white)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" position="relative" overflow="hidden" borderRadius="var(--radius-full)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
              onClick={handleGetStarted}
            >
              <Text position="relative" zIndex={10} display="flex" alignItems="center" paddingVertical={4} lineHeight="var(--leading-relaxed)">
                Get Started for Free 
                <MotionText render="span"
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut", repeatDelay: 1 }}
                >
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
                </MotionText>
              </Text>
              <MotionText 
                position="absolute" top={0} right={0} bottom={0} left={0} opacity={0} transition="opacity 300ms cubic-bezier(.4,0,.2,1)" backgroundImage="linear-gradient(to right, var(--neutral-500), var(--neutral-600))" $group-hover={{ opacity: 1 }} 
              />
            </Button>
          </MotionBox>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default CallToAction;
