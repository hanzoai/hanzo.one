import { Box, Helmet } from '@/gui'

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/base/HeroSection";
import CoreFeatures from "@/components/base/CoreFeatures";
import Templates from "@/components/base/Templates";
import DeveloperExperience from "@/components/base/DeveloperExperience";
import Infrastructure from "@/components/base/Infrastructure";
import AIEngineering from "@/components/base/AIEngineering";
import CallToAction from "@/components/base/CallToAction";
import Community from "@/components/base/Community";
import Compliance from "@/components/base/Compliance";

const Base = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Helmet>
        <title>Hanzo Base - Open Source Backend for Modern Apps | Hanzo AI</title>
        <meta
          name="description"
          content="PostgreSQL database, authentication, edge functions, realtime subscriptions, and storage. Everything you need to build modern applications."
        />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <CoreFeatures />
        <Templates />
        <DeveloperExperience />
        <Infrastructure />
        <AIEngineering />
        <Compliance />
        <CallToAction />
        <Community />
      </main>
      <Footer />
    </Box>
  );
};

export default Base;
