import { Box, Helmet } from '@/gui'
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hanzoapp/HeroSection";
import WhyHanzoApp from "@/components/hanzoapp/WhyHanzoApp";
import HowItWorks from "@/components/hanzoapp/HowItWorks";
import FAQSection from "@/components/hanzoapp/FAQSection";
import FooterCTA from "@/components/hanzoapp/FooterCTA";

const HanzoApp = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Helmet>
        <title>Hanzo App - Build Anywhere, Ship Everywhere | Hanzo AI</title>
        <meta
          name="description"
          content="Web app, desktop app, local AI, and blockchain node. Choose how you want to build with Hanzo - from browser to fully private offline development."
        />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <WhyHanzoApp />
        <HowItWorks />
        <FAQSection />
        <FooterCTA />
      </main>
      <Footer />
    </Box>
  );
};

export default HanzoApp;
