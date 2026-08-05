import { Box } from '@/gui'

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/observability/HeroSection";
import Features from "@/components/observability/Features";
import Integrations from "@/components/observability/Integrations";
import OpenSource from "@/components/observability/OpenSource";
import Security from "@/components/observability/Security";
import UnifiedPlatform from "@/components/observability/UnifiedPlatform";
import Benefits from "@/components/observability/Benefits";
import CallToAction from "@/components/observability/CallToAction";

const Observability = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <Integrations />
        <OpenSource />
        <Security />
        <UnifiedPlatform />
        <Benefits />
        <CallToAction />
      </main>
      <Footer />
    </Box>
  );
};

export default Observability;
