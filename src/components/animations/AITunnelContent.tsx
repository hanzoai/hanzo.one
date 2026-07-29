import { Button, H1, MotionBox, MotionText, Text, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface AITunnelContentProps {
  title: string;
  subtitle: string;
  showButtons: boolean;
}

const AITunnelContent: React.FC<AITunnelContentProps> = ({
  title,
  subtitle,
  showButtons
}) => {
  return (
    <YStack position="absolute" top={0} right={0} bottom={0} left={0} display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" zIndex={10} paddingHorizontal={16} paddingVertical={48}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        position="relative"
      >
        <H1 fontSize="var(--text-3xl)" lineHeight="var(--leading-tight)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $lg={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
          {title}
        </H1>
        
        {/* Glowing underline */}
        <MotionBox 
          height="2px" marginHorizontal="auto" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0), var(--neutral-500), rgb(255 255 255 / 0))"
          style={{ width: '60%' }}
          animate={{
            opacity: [0.5, 1, 0.5],
            width: ['40%', '60%', '40%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </MotionBox>

      <MotionText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-300)" marginBottom={32} maxWidth="36rem" $md={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-xl)" }}
      >
        {subtitle}
      </MotionText>

      {showButtons && (
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          display="flex" flexDirection="column" gap={16} $sm={{ flexDirection: "row" }}
        >
          <Button 
            size="lg"
            radius="full"
            fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32} borderStyle="none" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-500))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--foreground))" }}
          >
            Start Building
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            radius="full"
            fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" paddingHorizontal={32} color="var(--white)" borderColor="rgb(255 255 255 / 0.2)" backgroundColor="rgb(255 255 255 / 0.05)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
          >
            <Text marginRight={8}>Read Docs</Text>
            <ArrowRight size={20} />
          </Button>
        </MotionBox>
      )}
    </YStack>
  );
};

export default AITunnelContent;
