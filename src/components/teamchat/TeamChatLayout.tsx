import { YStack } from '@/gui'

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamChatHero from "./TeamChatHero";
import ChatInterface from "./ChatInterface";
import ChatFeatures from "./ChatFeatures";

const TeamChatLayout: React.FC = () => {
  return (
    <YStack minHeight="100vh" backgroundColor="var(--black)" color="var(--white)" display="flex" flexDirection="column">
      <Navbar />
      
      <YStack render="main" flex={1} display="flex" flexDirection="column" paddingTop={64}>
        <TeamChatHero />
        <ChatInterface />
        <ChatFeatures />
      </YStack>
      
      <Footer />
    </YStack>
  );
};

export default TeamChatLayout;
