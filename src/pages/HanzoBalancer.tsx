import { Box } from '@/gui'

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/balancer/HeroSection";
import FeaturesOverview from "@/components/balancer/FeaturesOverview";
import ArchitectureOverview from "@/components/balancer/ArchitectureOverview";
import UseCases from "@/components/balancer/UseCases";
import Ecosystem from "@/components/balancer/Ecosystem";
import CallToAction from "@/components/balancer/CallToAction";
import PlatformVision from "@/components/balancer/PlatformVision";
import CoreCapabilities from "@/components/balancer/CoreCapabilities";
import EnterpriseSolutions from "@/components/balancer/EnterpriseSolutions";

const HanzoBalancer = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Navbar />
      <HeroSection />
      <FeaturesOverview />
      <PlatformVision />
      <CoreCapabilities />
      <ArchitectureOverview />
      <EnterpriseSolutions />
      <UseCases />
      <Ecosystem />
      <CallToAction />
      <Footer />
    </Box>
  );
};

export default HanzoBalancer;
