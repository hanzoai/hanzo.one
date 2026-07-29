import { Grid } from '@/gui'

import React from "react";
import PricingPlan from "./PricingPlan";
import { Shield, Code } from "lucide-react";

const EnterpriseFreePlans = () => {
  const enterprisePlan = {
    name: "Enterprise",
    icon: <Shield size={24} color="var(--neutral-400)" />,
    price: "Custom",
    description: "For large businesses requiring enterprise-grade security",
    features: [
      "Everything in the Team plan",
      "Expanded context window",
      "Highest limits on messaging & features",
      "Enhanced security (CSA, SOC 2, GDPR, CCPA)",
      "User management via SCIM and SSO",
      "Domain verification, user analytics",
      "Custom data retention policies",
      "Dedicated support & account management",
      "Customizable AI Credits"
    ]
  };

  const freePlan = {
    name: "Open Source",
    icon: <Code size={24} color="var(--neutral-400)" />,
    price: "Free",
    billingPeriod: "Forever",
    description: "For individuals wanting full control",
    features: [
      "Completely open source (self-host via GitHub)",
      "Full access to platform capabilities",
      "Unlimited deployments on your hardware",
      "Self-hosted AI models and compute",
      "Real-time web search",
      "Custom GPT usage"
    ]
  };

  return (
    <Grid maxWidth="var(--container-max)" marginHorizontal="auto" display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={64} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
      <PricingPlan
        name={enterprisePlan.name}
        icon={enterprisePlan.icon}
        price={enterprisePlan.price}
        description={enterprisePlan.description}
        features={enterprisePlan.features}
      />
      <PricingPlan
        name={freePlan.name}
        icon={freePlan.icon}
        price={freePlan.price}
        billingPeriod={freePlan.billingPeriod}
        description={freePlan.description}
        features={freePlan.features}
        customColor="gray"
      />
    </Grid>
  );
};

export default EnterpriseFreePlans;
