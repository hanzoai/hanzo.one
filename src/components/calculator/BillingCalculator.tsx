import { Box, Button, Grid, Slider, XStack } from '@/gui'

import React, { useState, useEffect } from "react";
import { Server, Database, HardDrive, Globe, Shield, HeadsetIcon, Activity, FileText } from "lucide-react";
import ResourceSection from "./ResourceSection";
import CostSummary from "./CostSummary";

const BillingCalculator = () => {
  const [compute, setCompute] = useState(1);
  const [replicas, setReplicas] = useState(1);
  const [storage, setStorage] = useState(20);
  const [bandwidth, setBandwidth] = useState(50);
  const [analyticsEvents, setAnalyticsEvents] = useState(1);
  const [observabilityLogs, setObservabilityLogs] = useState(5);
  const [compliance, setCompliance] = useState(false);
  const [support, setSupport] = useState(false);

  const computeCost = compute * 155;
  const replicasCost = replicas * 77.50;
  const storageCost = storage * 0.15;
  const bandwidthCost = bandwidth * 0.02;
  const analyticsEventsCost = analyticsEvents > 1 ? (analyticsEvents - 1) * 0.0001 : 0; // First 1M events free
  const observabilityLogsCost = observabilityLogs * 0.50; // $0.50 per GB of logs
  const complianceCost = compliance ? 99 : 0;
  const supportCost = support ? 2500 : 0;
  const totalCost = computeCost + replicasCost + storageCost + bandwidthCost + 
                    analyticsEventsCost + observabilityLogsCost + complianceCost + supportCost;

  return (
    <Box rowGap={32}>
      <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
        <Box rowGap={32}>
          <ResourceSection
            icon={<Server size={20} />}
            title="Compute Resources"
            description="Performance machines (4 vCPU, 8GB RAM)"
            value={compute}
            onChange={(value) => setCompute(value[0])}
            min={1}
            max={20}
            cost={computeCost}
            unit="machines"
          />

          <ResourceSection
            icon={<Database size={20} />}
            title="Hanzo Base Replicas"
            description="Database & cache instances (2 vCPU, 4GB RAM)"
            value={replicas}
            onChange={(value) => setReplicas(value[0])}
            min={1}
            max={5}
            cost={replicasCost}
            unit="replicas"
          />

          <ResourceSection
            icon={<HardDrive size={20} />}
            title="Persistent Storage"
            description="Total storage needed for your applications"
            value={storage}
            onChange={(value) => setStorage(value[0])}
            min={20}
            max={1000}
            cost={storageCost}
            unit="GB"
          />

          <ResourceSection
            icon={<Globe size={20} />}
            title="Monthly Bandwidth"
            description="Estimated outgoing traffic (North America)"
            value={bandwidth}
            onChange={(value) => setBandwidth(value[0])}
            min={0}
            max={1000}
            cost={bandwidthCost}
            unit="GB"
          />
          
          <ResourceSection
            icon={<Activity size={20} />}
            title="Analytics Events"
            description="Monthly tracked events (first 1M free)"
            value={analyticsEvents}
            onChange={(value) => setAnalyticsEvents(value[0])}
            min={1}
            max={100}
            cost={analyticsEventsCost}
            unit="million"
          />
          
          <ResourceSection
            icon={<FileText size={20} />}
            title="Observability Logs"
            description="Monthly log storage for monitoring"
            value={observabilityLogs}
            onChange={(value) => setObservabilityLogs(value[0])}
            min={1}
            max={50}
            cost={observabilityLogsCost}
            unit="GB"
          />
        </Box>

        <CostSummary
          costs={{
            compute: computeCost,
            replicas: replicasCost,
            storage: storageCost,
            bandwidth: bandwidthCost,
            analytics: analyticsEventsCost,
            observability: observabilityLogsCost,
            compliance: complianceCost,
            support: supportCost,
            total: totalCost
          }}
          onComplianceChange={() => setCompliance(!compliance)}
          onSupportChange={() => setSupport(!support)}
          compliance={compliance}
          support={support}
        />
      </Grid>

      <XStack display="flex" justifyContent="center" paddingTop={32}>
        <Button backgroundColor="var(--white)" color="var(--pure-black)" paddingHorizontal={32} hoverStyle={{ backgroundColor: "var(--neutral-200)" }}>
          Contact Sales
        </Button>
      </XStack>
    </Box>
  );
};

export default BillingCalculator;
