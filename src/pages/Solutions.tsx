import { Box } from '@/gui'

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionsHero from "@/components/solutions/Hero";
import MainCards from "@/components/solutions/MainCards";
import UnifiedAICloud from "@/components/solutions/UnifiedAICloud";
import ExpertServices from "@/components/solutions/ExpertServices";
import CallToAction from "@/components/index3/CallToAction";

const Solutions: React.FC = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Navbar />
      
      <Box render="main" paddingTop={128} paddingBottom={64} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box maxWidth="var(--container-max)" marginHorizontal="auto">
          <SolutionsHero />
          <MainCards />
          <UnifiedAICloud />
          <ExpertServices />
          <CallToAction />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Solutions;
