import { Box, Grid, MotionBox, MotionText } from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import { features } from "./data/featuresData";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  bgColor: string;
  iconColor: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, bgColor, iconColor, index }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 30px -15px rgba(136, 58, 234, 0.5)",
        borderColor: "rgba(139, 92, 246, 0.5)" 
      }}
      padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" transition="all 300ms cubic-bezier(.4,0,.2,1)" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), var(--pure-black))"
    >
      <MotionBox 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
        flexDirection="row" width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}
      >
        <MotionBox
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Icon height={24} width={24} />
        </MotionBox>
      </MotionBox>
      <MotionText 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        viewport={{ once: true }}
        fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8} color="var(--white)"
      >
        {title}
      </MotionText>
      <MotionText 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
        viewport={{ once: true }}
        color="var(--neutral-400)"
      >
        {description}
      </MotionText>
    </MotionBox>
  );
};

const FeaturesGrid: React.FC = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="rgb(0 0 0 / 0.5)" position="relative" $md={{ paddingHorizontal: 32 }}>
      {/* Animated background dots */}
      <MotionBox 
        position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.2} zIndex={0} pointerEvents="none"
        initial={{ backgroundPositionY: "0%" }}
        animate={{ backgroundPositionY: "100%" }}
        transition={{ duration: 40, repeat: Infinity, repeatType: "reverse" }}
        style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />
      
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionText 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" textAlign="center" marginBottom={16} color="var(--white)" $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}
        >
          The Complete AI Engineering Platform
        </MotionText>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          width={96} height={4} borderRadius="var(--radius-full)" marginHorizontal="auto" marginBottom={48} backgroundImage="linear-gradient(to right, var(--neutral-500), var(--foreground))"
        />
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              bgColor={feature.bgColor}
              iconColor={feature.iconColor}
              index={index}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FeaturesGrid;
