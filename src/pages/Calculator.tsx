import { Box, H1, H2, Paragraph, XStack } from '@/gui'

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BillingCalculator from "@/components/calculator/BillingCalculator";
import { Server, Database, HardDrive, Globe, Shield, HeadsetIcon, Activity, FileText } from "lucide-react";

const Calculator = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Navbar />
      <Box render="main" paddingTop={128} paddingBottom={64} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box maxWidth="var(--container-max)" marginHorizontal="auto">
          <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={32}>Billing Calculator</H1>
          <Paragraph color="var(--neutral-400)" marginBottom={24} maxWidth="var(--container-prose)">
            Estimate your monthly Hanzo costs based on your infrastructure needs. Adjust the sliders below to see how different resources affect your total cost.
          </Paragraph>
          
          <Box marginBottom={48} padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="#333" backgroundColor="var(--surface-card-emphasis)" rowGap={16}>
            <H2 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600">Pricing Structure</H2>
            <Box render="ul" rowGap={8} color="var(--neutral-300)">
              <XStack render="li" display="flex" alignItems="center" gap={8}>
                <Server size={16} color="var(--neutral-400)" />
                <span><strong>Compute:</strong> $155/month per performance machine (4 vCPU, 8GB RAM)</span>
              </XStack>
              <XStack render="li" display="flex" alignItems="center" gap={8}>
                <Database size={16} color="var(--neutral-400)" />
                <span><strong>Hanzo Base:</strong> $77.50/month per replica (2 vCPU, 4GB RAM)</span>
              </XStack>
              <XStack render="li" display="flex" alignItems="center" gap={8}>
                <HardDrive size={16} color="var(--neutral-400)" />
                <span><strong>Storage:</strong> $0.15/GB per month for persistent storage</span>
              </XStack>
              <XStack render="li" display="flex" alignItems="center" gap={8}>
                <Globe size={16} color="var(--neutral-400)" />
                <span><strong>Bandwidth:</strong> $0.02/GB for North America outgoing traffic</span>
              </XStack>
              <XStack render="li" display="flex" alignItems="center" gap={8}>
                <Activity size={16} color="var(--neutral-400)" />
                <span><strong>Analytics Events:</strong> First 1 million events/month free, then $0.0001 per event</span>
              </XStack>
              <XStack render="li" display="flex" alignItems="center" gap={8}>
                <FileText size={16} color="var(--neutral-400)" />
                <span><strong>Observability Logs:</strong> $0.50/GB for log storage and processing</span>
              </XStack>
              <XStack render="li" display="flex" alignItems="center" gap={8}>
                <Shield size={16} color="var(--neutral-400)" />
                <span><strong>Compliance:</strong> $99/month for SOC2 Type 2 compliance</span>
              </XStack>
              <XStack render="li" display="flex" alignItems="center" gap={8}>
                <HeadsetIcon size={16} color="var(--neutral-400)" />
                <span><strong>Enterprise Support:</strong> $2,500/month for premium support</span>
              </XStack>
            </Box>
          </Box>
          
          <BillingCalculator />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Calculator;
