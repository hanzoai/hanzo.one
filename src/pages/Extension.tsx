import { Box } from '@/gui'

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import HanzoExtensionHero from "@/components/extension/HanzoExtensionHero";
import HanzoExtensionFeatures from "@/components/extension/HanzoExtensionFeatures";
import HanzoExtensionBrowsers from "@/components/extension/HanzoExtensionBrowsers";
import HanzoExtensionUseCases from "@/components/extension/HanzoExtensionUseCases";
import HanzoExtensionCTA from "@/components/extension/HanzoExtensionCTA";

const Extension = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Navbar />
      <main>
        <HanzoExtensionHero />
        <HanzoExtensionFeatures />
        <HanzoExtensionBrowsers />
        <HanzoExtensionUseCases />
        <HanzoExtensionCTA />
      </main>
      <Footer />
    </Box>
  );
};

export default Extension;
