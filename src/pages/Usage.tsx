import { AnimatedHeading, AnimatedSection, Box, H2, XStack } from '@/gui'
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UsageOverview from "@/components/usage/UsageOverview";
import ProjectUsage from "@/components/usage/ProjectUsage";
import ResourceBreakdown from "@/components/usage/ResourceBreakdown";
import DateRangePicker from "@/components/usage/DateRangePicker";

const Usage = () => {
  const [dateRange, setDateRange] = useState({ start: "Mar 7", end: "Mar 8" });

  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Navbar />
      
      <Box render="main" paddingTop={128} paddingBottom={64} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
          <AnimatedSection>
            <XStack display="flex" justifyContent="space-between" alignItems="center" marginBottom={32}>
              <AnimatedHeading>Usage</AnimatedHeading>
              <DateRangePicker 
                dateRange={dateRange} 
                onDateRangeChange={setDateRange} 
              />
            </XStack>

            <UsageOverview 
              dateRange={dateRange}
              currentUsage="$0.04"
              discounts="$0.00"
              creditsUsed="$0.00"
              estimatedCost="$0.07"
              creditsAvailable="5.00"
              creditsRequired="0.00"
            />
            
            <Box marginTop={48}>
              <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={24}>Usage by Project</H2>
              <ProjectUsage />
            </Box>

            <Box marginTop={48}>
              <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={24}>Resource Breakdown</H2>
              <ResourceBreakdown />
            </Box>
          </AnimatedSection>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Usage;

