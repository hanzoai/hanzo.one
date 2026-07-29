import { Box, Helmet, Toaster } from '@/gui'

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home2/Hero";
import Features from "@/components/home2/Features";
import CTA from "@/components/home2/CTA";
import Testimonials from "@/components/home2/Testimonials";

const Home2 = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Helmet>
        <title>Hanzo AI - Enterprise AI Engineering Platform</title>
        <meta name="description" content="Build, deploy, and scale AI applications with enterprise-grade reliability. The complete platform for AI engineering teams." />
      </Helmet>
      
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <Toaster />
    </Box>
  );
};

export default Home2;
