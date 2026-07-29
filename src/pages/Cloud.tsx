import { Box, Helmet, Toaster } from '@/gui'

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DesktopAppBanner from "@/components/DesktopAppBanner";
import ZenBackground from "@/components/zen/ZenBackground";
import ZenQuoteSection from "@/components/zen/ZenQuoteSection";
import CloudHero from "@/components/cloud/CloudHero";
import Features from "@/components/cloud/Features";
import ProductCatalog from "@/components/cloud/ProductCatalog";
import Regions from "@/components/cloud/Regions";
import Security from "@/components/cloud/Security";
import TechStack from "@/components/cloud/TechStack";
import CallToAction from "@/components/cloud/CallToAction";

const Cloud = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)" overflowX="hidden">
      <Helmet>
        <title>Hanzo Cloud - Complete Cloud Platform</title>
        <meta name="description" content="90+ managed services for AI, databases, compute, and more. Build, deploy, and scale modern applications on a unified platform." />
      </Helmet>

      <ZenBackground />
      <Navbar />

      <main>
        <CloudHero />
        <ProductCatalog />
        <ZenQuoteSection
          quote="The engineer who masters the cloud sees no distinction between the physical and the virtual."
          attribution="Principle 27"
        />
        <Features />
        <Regions />
        <Security />
        <TechStack />
        <CallToAction />
      </main>

      <Footer />
      <Toaster />
      <DesktopAppBanner />
    </Box>
  );
};

export default Cloud;
