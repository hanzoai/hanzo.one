import { Box, XStack } from '@/gui'
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHeader from "@/components/pricing/PricingHeader";
import PersonalPlans from "@/components/pricing/PersonalPlans";
import TeamEnterprisePlans from "@/components/pricing/TeamEnterprisePlans";
import APIPricing from "@/components/pricing/APIPricing";
import FeatureComparison from "@/components/pricing/FeatureComparison";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import BillingManagement from "@/components/pricing/BillingManagement";

const PricingPlans = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const tabs = [
    { id: "personal", label: "Personal" },
    { id: "team", label: "Team & Enterprise" },
    { id: "api", label: "API" }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "personal":
        return (
          <>
            <PersonalPlans />
            <FeatureComparison />
            <PricingFAQ />
            <BillingManagement />
          </>
        );
      case "team":
        return (
          <>
            <TeamEnterprisePlans />
            <FeatureComparison />
            <PricingFAQ />
            <BillingManagement />
          </>
        );
      case "api":
        return <APIPricing />;
      default:
        return <PersonalPlans />;
    }
  };

  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Navbar />
      
      <Box render="main" paddingTop={128} paddingBottom={64} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <PricingHeader />
        
        {/* Tab Navigation */}
        <Box maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={48}>
          <XStack display="flex" justifyContent="center">
            <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" padding={4} borderWidth={1} borderColor="var(--neutral-800)">
              {tabs.map((tab) => (
                <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  render="button" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="all 200ms cubic-bezier(.4,0,.2,1)" backgroundColor={activeTab === tab.id ? "var(--foreground)" : undefined} color={activeTab === tab.id ? "var(--pure-black)" : "var(--neutral-400)"} hoverStyle={activeTab === tab.id ? undefined : { color: "var(--foreground)" }}
                >
                  {tab.label}
                </Box>
              ))}
            </Box>
          </XStack>
        </Box>

        {/* Tab Content */}
        {renderTabContent()}
      </Box>

      <Footer />
    </Box>
  );
};

export default PricingPlans;