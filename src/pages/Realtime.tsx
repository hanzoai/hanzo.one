import { Box } from '@/gui'

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/realtime/HeroSection";
import Features from "@/components/realtime/Features";
import UseCases from "@/components/realtime/UseCases";
import Integration from "@/components/realtime/Integration";
import Scaling from "@/components/realtime/Scaling";
import CallToAction from "@/components/realtime/CallToAction";

const Realtime = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <UseCases />
        <Integration />
        <Scaling />
        <CallToAction />
      </main>
      <Footer />
    </Box>
  );
};

export default Realtime;
