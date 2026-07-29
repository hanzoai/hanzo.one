import { Box, Button, Grid, H2, H3, Paragraph, Slider, Text, XStack, YStack } from '@/gui'
import React, { useState, useEffect } from "react";
import { Cpu, Zap, Users } from "lucide-react";

interface TeamPlanDetailsProps {
  fromMaxPlan?: boolean;
  fromProPlan?: boolean;
}

const TeamPlanDetails = ({ fromMaxPlan = false, fromProPlan = false }: TeamPlanDetailsProps) => {
  const [aiUnits, setAiUnits] = useState<number>(5);
  const [teamSize, setTeamSize] = useState<number>(1);
  
  // Set AI units to 10 if coming from Max plan
  useEffect(() => {
    if (fromMaxPlan) {
      setAiUnits(10);
    }
  }, [fromMaxPlan]);
  
  const totalMonthlyPrice = teamSize * 30;
  const additionalAICost = aiUnits > 5 ? (aiUnits - 5) * 10 : 0;
  const totalCost = totalMonthlyPrice + additionalAICost;

  // Determine title based on where user is coming from
  const getTitle = () => {
    if (fromProPlan) {
      return "Pro Plan Configuration";
    } else if (teamSize > 1 || fromMaxPlan) {
      return "Team Plan Configuration";
    }
    return "Configure Plan";
  };

  return (
    <Box id="team-config-section" render="section" maxWidth="var(--container-max)" marginHorizontal="auto" marginBottom={64} marginTop={96}>
      <Box backgroundColor="var(--black)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-2xl)" padding={24} backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)">
        <Box borderBottomWidth={1} borderColor="var(--border-strong)" paddingHorizontal={8} paddingVertical={16} marginBottom={24}>
          <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700">{getTitle()}</H2>
          <Paragraph color="var(--neutral-400)" marginTop={8}>Scale resources to match your exact needs</Paragraph>
        </Box>
        
        <Box padding={8} maxWidth="64rem" marginHorizontal="auto" width="100%">
          <YStack display="flex" flexDirection="column" alignItems="flex-start" justifyContent="space-between" marginBottom={32} gap={16} $md={{ flexDirection: "row", alignItems: "center" }}>
            <XStack display="flex" alignItems="center" gap={12}>
              <Users size={32} color="var(--neutral-400)" />
              <div>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700">{fromProPlan ? "Pro Plan" : "Team Plan"}</H3>
                <Paragraph color="var(--neutral-400)">Custom resources for {fromProPlan ? "your projects" : "your entire team"}</Paragraph>
              </div>
            </XStack>
            <Box textAlign="right">
              <Box fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700">${totalCost}/mo</Box>
              <Box color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                {teamSize > 1 
                  ? `Total for ${teamSize} team member${teamSize !== 1 ? 's' : ''}` 
                  : "Base price"}
              </Box>
            </Box>
          </YStack>

          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={32} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <Box rowGap={24}>
              <Box marginBottom={16}>
                <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={8}>
                  <Text render="label" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" display="flex" alignItems="center" gap={8}>
                    <Users size={20} color="var(--neutral-400)" />
                    {fromProPlan ? "Developer Accounts" : "Team Size"}
                  </Text>
                  <Text fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600">{teamSize} {teamSize === 1 ? (fromProPlan ? "account" : "member") : (fromProPlan ? "accounts" : "members")}</Text>
                </XStack>
                <Slider 
                  marginTop={16} 
                  value={[teamSize]} 
                  onValueChange={(value) => setTeamSize(value[0])} 
                  min={1} 
                  max={50} 
                  step={1}
                />
                <XStack display="flex" justifyContent="space-between" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginTop={4}>
                  <span>1</span>
                  <span>25</span>
                  <span>50</span>
                </XStack>
                <Box color="var(--neutral-400)" marginTop={8}>
                  ${teamSize * 30}/mo (${30}/{fromProPlan ? "account" : "user"})
                </Box>
              </Box>
            </Box>

            <Box rowGap={24}>
              <Box marginBottom={16}>
                <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={8}>
                  <Text render="label" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" display="flex" alignItems="center" gap={8}>
                    <Zap size={20} color="var(--neutral-400)" />
                    AI Credits
                  </Text>
                  <Text fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600">{aiUnits} per {fromProPlan ? "account" : "member"}</Text>
                </XStack>
                <Slider 
                  marginTop={16} 
                  value={[aiUnits]} 
                  onValueChange={(value) => setAiUnits(value[0])} 
                  min={1} 
                  max={20} 
                  step={1}
                />
                <XStack display="flex" justifyContent="space-between" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginTop={4}>
                  <span>1</span>
                  <span>10</span>
                  <span>20</span>
                </XStack>
                <Box color="var(--neutral-400)" marginTop={8}>
                  {aiUnits <= 5 ? 
                    "Included in base price" : 
                    `+$${additionalAICost}/mo for additional AI processing`}
                </Box>
              </Box>
            </Box>
          </Grid>

          <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" padding={24} borderWidth={1} borderColor="var(--border-strong)" marginBottom={32}>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={16}>{fromProPlan ? "Pro Plan Benefits" : "Team Plan Benefits"}</H3>
            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              <XStack display="flex" alignItems="flex-start" gap={12}>
                <Box render="span" display="inline-flex" alignItems="center" marginTop={4}><Zap size={20} color="var(--neutral-400)" /></Box>
                <div>
                  <Paragraph fontWeight="500">AI-Powered Development</Paragraph>
                  <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Scale AI processing resources to match your exact workflow needs</Paragraph>
                </div>
              </XStack>
              <XStack display="flex" alignItems="flex-start" gap={12}>
                <Box render="span" display="inline-flex" alignItems="center" marginTop={4}><Users size={20} color="var(--neutral-400)" /></Box>
                <div>
                  <Paragraph fontWeight="500">{fromProPlan ? "Developer Flexibility" : "Centralized Management"}</Paragraph>
                  <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{fromProPlan ? "Configure your development environment to your exact specifications" : "Single dashboard for user administration, permissions, and unified billing"}</Paragraph>
                </div>
              </XStack>
              <XStack display="flex" alignItems="flex-start" gap={12}>
                <Box render="span" display="inline-flex" alignItems="center" marginTop={4}><Cpu size={20} color="var(--neutral-400)" /></Box>
                <div>
                  <Paragraph fontWeight="500">Premium Performance</Paragraph>
                  <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Priority access to all platform services with enhanced response times</Paragraph>
                </div>
              </XStack>
              <XStack display="flex" alignItems="flex-start" gap={12}>
                <Box render="span" display="inline-flex" alignItems="center" marginTop={4}><Zap size={20} color="var(--neutral-400)" /></Box>
                <div>
                  <Paragraph fontWeight="500">Flexible Scaling</Paragraph>
                  <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Adjust AI credits month-to-month as your {fromProPlan ? "project" : "team and project"} needs evolve</Paragraph>
                </div>
              </XStack>
            </Grid>
          </Box>

          <XStack display="flex" justifyContent="center">
            <Button size="lg" backgroundColor="var(--foreground)" color="var(--pure-black)" borderWidth={1} borderColor="var(--neutral-300)" transition="all 300ms cubic-bezier(.4,0,.2,1)" paddingHorizontal={40} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" hoverStyle={{ backgroundColor: "var(--neutral-100)", color: "var(--pure-black)", borderColor: "var(--neutral-400)" }}>
              Get Started with {fromProPlan ? "Pro" : "Team"} Plan
            </Button>
          </XStack>
        </Box>
      </Box>
    </Box>
  );
};

export default TeamPlanDetails;