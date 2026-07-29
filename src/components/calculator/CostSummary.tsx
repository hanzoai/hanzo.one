import { Box, H3, Paragraph, Switch, Text, XStack } from '@/gui'

import React from "react";
import { Shield, HeadsetIcon } from "lucide-react";

interface CostSummaryProps {
  costs: {
    compute: number;
    replicas: number;
    storage: number;
    bandwidth: number;
    analytics: number;
    observability: number;
    compliance: number;
    support: number;
    total: number;
  };
  onComplianceChange: () => void;
  onSupportChange: () => void;
  compliance: boolean;
  support: boolean;
}

const CostSummary = ({
  costs,
  onComplianceChange,
  onSupportChange,
  compliance,
  support
}: CostSummaryProps) => {
  return (
    <Box padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="#333" backgroundColor="var(--surface-card-emphasis)" hoverStyle={{ borderColor: "var(--neutral-700)" }}>
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={24}>Cost Summary</H3>

      <Box rowGap={16} marginBottom={32}>
        {[
          { label: "Compute", cost: costs.compute },
          { label: "Hanzo Base", cost: costs.replicas },
          { label: "Storage", cost: costs.storage },
          { label: "Bandwidth", cost: costs.bandwidth },
          { label: "Analytics Events", cost: costs.analytics },
          { label: "Observability", cost: costs.observability }
        ].map(({ label, cost }) => (
          <XStack key={label} display="flex" justifyContent="space-between" alignItems="center">
            <Text color="var(--neutral-400)">{label}</Text>
            <span>${cost.toFixed(2)}</span>
          </XStack>
        ))}
      </Box>

      <Box rowGap={16} marginBottom={32} borderTopWidth={1} borderColor="#333" paddingTop={16}>
        <XStack display="flex" alignItems="center" justifyContent="space-between">
          <XStack display="flex" alignItems="center" gap={8}>
            <Shield size={16} color="var(--neutral-400)" />
            <Text color="var(--neutral-400)">SOC2 Type 2 Compliance</Text>
          </XStack>
          <XStack display="flex" alignItems="center" gap={12}>
            <span>${costs.compliance.toFixed(2)}</span>
            <Switch checked={compliance} onCheckedChange={onComplianceChange} />
          </XStack>
        </XStack>

        <XStack display="flex" alignItems="center" justifyContent="space-between">
          <XStack display="flex" alignItems="center" gap={8}>
            <HeadsetIcon size={16} color="var(--neutral-400)" />
            <Text color="var(--neutral-400)">Enterprise Support</Text>
          </XStack>
          <XStack display="flex" alignItems="center" gap={12}>
            <span>${costs.support.toFixed(2)}</span>
            <Switch checked={support} onCheckedChange={onSupportChange} />
          </XStack>
        </XStack>
      </Box>

      <Box borderTopWidth={1} borderColor="#333" paddingTop={16}>
        <XStack display="flex" justifyContent="space-between" alignItems="center">
          <Text fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600">Estimated Total</Text>
          <Text fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600">${costs.total.toFixed(2)}/mo</Text>
        </XStack>
        <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginTop={8}>
          Actual costs may vary based on usage and additional services.
        </Paragraph>
      </Box>
    </Box>
  );
};

export default CostSummary;
