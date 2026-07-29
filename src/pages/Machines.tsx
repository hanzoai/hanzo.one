import { Box } from '@/gui'

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MachinesHero from "@/components/machines/MachinesHero";
import MachinesFeatures from "@/components/machines/MachinesFeatures";
import MachinesUseCases from "@/components/machines/MachinesUseCases";
import MachinesEnterprise from "@/components/machines/MachinesEnterprise";
import MachinesCTA from "@/components/machines/MachinesCTA";

const Machines = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Navbar />
      <MachinesHero />
      <MachinesFeatures />
      <MachinesUseCases />
      <MachinesEnterprise />
      <MachinesCTA />
      <Footer />
    </Box>
  );
};

export default Machines;
