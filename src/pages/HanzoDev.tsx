import { Box, Helmet } from '@/gui'
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hanzodev/HeroSection";
import WhyHanzo from "@/components/hanzodev/WhyHanzo";
import Features from "@/components/hanzodev/Features";
import OpenModels from "@/components/hanzodev/OpenModels";
import OpenPricing from "@/components/hanzodev/OpenPricing";
import OpenSource from "@/components/hanzodev/OpenSource";
import FAQSection from "@/components/hanzodev/FAQSection";
import FooterCTA from "@/components/hanzodev/FooterCTA";

const HanzoDev = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Helmet>
        <title>Hanzo Dev - Move at Hanzo Speed | Hanzo AI</title>
        <meta
          name="description"
          content="Build, ship, and iterate faster with the most popular open source coding agent. 500+ models, cloud agents, code reviews, and more."
        />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <WhyHanzo />
        <Features />
        <OpenModels />
        <OpenPricing />
        <OpenSource />
        <FAQSection />
        <FooterCTA />
      </main>
      <Footer />
    </Box>
  );
};

export default HanzoDev;
