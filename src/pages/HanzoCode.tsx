import { Box } from '@/gui'

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HanzoCodeHero from "@/components/hanzocode/HanzoCodeHero";
import HanzoCodeFeatures from "@/components/hanzocode/HanzoCodeFeatures";
import HanzoCodeBenefits from "@/components/hanzocode/HanzoCodeBenefits";
import HanzoCodeFrontier from "@/components/hanzocode/HanzoCodeFrontier";
import HanzoCodeTestimonials from "@/components/hanzocode/HanzoCodeTestimonials";
import HanzoCodeCTA from "@/components/hanzocode/HanzoCodeCTA";
import HanzoCodeCompanies from "@/components/hanzocode/HanzoCodeCompanies";
import HanzoCodeCompatibility from "@/components/hanzocode/HanzoCodeCompatibility";
import HanzoCodeAgents from "@/components/hanzocode/HanzoCodeAgents";

const HanzoCode = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Navbar />
      <main>
        <HanzoCodeHero />
        <HanzoCodeCompanies />
        <HanzoCodeBenefits />
        <HanzoCodeCompatibility />
        <HanzoCodeAgents />
        <HanzoCodeFeatures />
        <HanzoCodeFrontier />
        <HanzoCodeTestimonials />
        <HanzoCodeCTA />
      </main>
      <Footer />
    </Box>
  );
};

export default HanzoCode;
