import { Box, Helmet } from '@/gui'

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import HistoryTimeline from "@/components/about/HistoryTimeline";
import ZenPrinciples from "@/components/about/ZenPrinciples";
import SenseiMethod from "@/components/about/SenseiMethod";
import OurStory from "@/components/about/OurStory";

const About = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Helmet>
        <title>About Hanzo Industries - Our Story and Evolution</title>
        <meta 
          name="description" 
          content="Learn about Hanzo Industries' journey from a crowd-powered marketing platform to a Techstars-backed AI venture, and our guiding philosophy." 
        />
      </Helmet>
      
      <Navbar />
      
      <Box render="main" paddingTop={80}>
        <AboutHero />
        <OurStory />
        <HistoryTimeline />
        <ZenPrinciples />
        <SenseiMethod />
      </Box>
      
      <Footer />
    </Box>
  );
};

export default About;
