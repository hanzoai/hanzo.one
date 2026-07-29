import { Box, H2, Text } from '@/gui'

import React from "react";
import { Check, X } from "lucide-react";

const FeatureComparison = () => {
  // Features categories and their specific features
  const featureCategories = [
    {
      name: "Platform Access",
      features: [
        { name: "Core Platform Features", pro: true, max: true, team: true, enterprise: true },
        { name: "Unlimited Private Projects", pro: true, max: true, team: true, enterprise: true },
        { name: "Self-hosted Infrastructure", pro: true, max: true, team: true, enterprise: true },
        { name: "Hanzo App Access", pro: false, max: true, team: true, enterprise: true },
        { name: "Unified Team Billing", pro: false, max: false, team: true, enterprise: true },
      ]
    },
    {
      name: "AI Credits",
      features: [
        { name: "AI Credits Included", pro: "1", max: "Up to 10", team: "Up to 10/user", enterprise: "Custom" },
        { name: "Custom AI Resources", pro: false, max: false, team: false, enterprise: true },
      ]
    },
    {
      name: "Security & Management",
      features: [
        { name: "Admin Console", pro: false, max: false, team: true, enterprise: true },
        { name: "User Management", pro: false, max: false, team: true, enterprise: true },
        { name: "Data Exclusion from Training", pro: false, max: false, team: true, enterprise: true },
        { name: "Enhanced Security (SOC 2, GDPR)", pro: false, max: false, team: false, enterprise: true },
        { name: "Custom Data Retention", pro: false, max: false, team: false, enterprise: true },
      ]
    },
    {
      name: "Support",
      features: [
        { name: "Community Support", pro: true, max: true, team: true, enterprise: true },
        { name: "Standard Support", pro: false, max: true, team: true, enterprise: true },
        { name: "Priority Support", pro: false, max: false, team: true, enterprise: true },
        { name: "Dedicated Account Manager", pro: false, max: false, team: false, enterprise: true },
      ]
    }
  ];

  // Helper function to render feature value
  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Box render="span" display="inline-flex" alignItems="center" marginHorizontal="auto"><Check size={20} color="var(--neutral-300)" /></Box>
      ) : (
        <Box render="span" display="inline-flex" alignItems="center" marginHorizontal="auto"><X size={20} color="var(--neutral-600)" /></Box>
      );
    }
    return <Text color="var(--neutral-300)" textAlign="center" display="block">{value}</Text>;
  };

  return (
    <Box maxWidth="var(--container-max)" marginHorizontal="auto" marginVertical={64} paddingHorizontal={16}>
      <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={32} textAlign="center">Compare Features Across Plans</H2>
      
      <Box overflowX="auto">
        <Box render="table" display="table" width="100%" borderCollapse="collapse">
          <thead>
            <Box render="tr" display="table-row" borderBottomWidth={1} borderColor="var(--neutral-800)">
              <Box render="th" display="table-cell" paddingVertical={16} paddingHorizontal={16} textAlign="left">Feature</Box>
              <Box render="th" display="table-cell" paddingVertical={16} paddingHorizontal={24} textAlign="center">Pro</Box>
              <Box render="th" display="table-cell" paddingVertical={16} paddingHorizontal={24} textAlign="center">Max</Box>
              <Box render="th" display="table-cell" paddingVertical={16} paddingHorizontal={24} textAlign="center">Team</Box>
              <Box render="th" display="table-cell" paddingVertical={16} paddingHorizontal={24} textAlign="center">Enterprise</Box>
            </Box>
          </thead>
          <tbody>
            {featureCategories.map((category) => (
              <React.Fragment key={category.name}>
                <Box render="tr" display="table-row" backgroundColor="var(--surface-card-emphasis)">
                  <Box colSpan={5} render="td" display="table-cell" paddingVertical={12} paddingHorizontal={16} fontWeight="500" color="var(--neutral-300)">
                    {category.name}
                  </Box>
                </Box>
                {category.features.map((feature) => (
                  <Box key={feature.name} render="tr" display="table-row" borderBottomWidth={1} borderColor="var(--border-strong)">
                    <Box render="td" display="table-cell" paddingVertical={12} paddingHorizontal={16} color="var(--neutral-400)">{feature.name}</Box>
                    <Box render="td" display="table-cell" paddingVertical={12} paddingHorizontal={24}>{renderFeatureValue(feature.pro)}</Box>
                    <Box render="td" display="table-cell" paddingVertical={12} paddingHorizontal={24}>{renderFeatureValue(feature.max)}</Box>
                    <Box render="td" display="table-cell" paddingVertical={12} paddingHorizontal={24}>{renderFeatureValue(feature.team)}</Box>
                    <Box render="td" display="table-cell" paddingVertical={12} paddingHorizontal={24}>{renderFeatureValue(feature.enterprise)}</Box>
                  </Box>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureComparison;
