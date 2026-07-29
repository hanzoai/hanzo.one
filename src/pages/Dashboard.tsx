import { Box, Button, Grid, H1, H3, Paragraph, XStack, YStack } from '@/gui'

import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KanbanBoard from "@/components/dashboard/KanbanBoard";
import AgentsList from "@/components/dashboard/AgentsList";
import { PlusCircle, LayoutGrid, Users, ChartBar, X, Plus, Database, Bot, Activity, Server } from "lucide-react";
import CommandPalette from "@/components/dashboard/CommandPalette";
import { useSearchParams, useNavigate } from "react-router-dom";
import TabsManager, { TabType } from "@/components/dashboard/TabsManager";
import { v4 as uuidv4 } from 'uuid';

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const viewParam = searchParams.get('view');
  const [view, setView] = useState<"board" | "agents" | "analytics">(
    (viewParam as "board" | "agents" | "analytics") || "board"
  );

  // For tabs
  const [tabs, setTabs] = useState<TabType[]>([
    {
      id: "tab-1",
      title: "Board",
      icon: <LayoutGrid size={16} />,
      content: <KanbanBoard />
    },
    {
      id: "tab-2",
      title: "Agents",
      icon: <Bot size={16} />,
      content: <AgentsList />
    },
    {
      id: "tab-3",
      title: "Analytics",
      icon: <ChartBar size={16} />,
      content: (
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <Box backgroundColor="var(--black)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
            <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" marginBottom={16}>Usage Overview</H3>
            <Paragraph fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600">24.5K</Paragraph>
            <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Total tokens used today</Paragraph>
            <XStack height={160} marginTop={16} display="flex" alignItems="flex-end">
              {[45, 35, 65, 50, 75, 55, 70].map((height, index) => (
                <Box 
                  key={index} 
                  width="100%" backgroundColor="var(--neutral-800)" borderTopLeftRadius="var(--radius-sm)" borderTopRightRadius="var(--radius-sm)" marginHorizontal={2}
                  style={{ height: `${height}%` }}
                ></Box>
              ))}
            </XStack>
          </Box>
          
          <Box backgroundColor="var(--black)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
            <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" marginBottom={16}>Agent Activity</H3>
            <Paragraph fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600">8</Paragraph>
            <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Active agents</Paragraph>
            <XStack height={160} marginTop={16} display="flex" alignItems="center" justifyContent="center">
              <XStack width={160} height={160} position="relative" borderRadius="var(--radius-full)" borderWidth={4} borderColor="var(--neutral-800)" display="flex" alignItems="center" justifyContent="center">
                <Box width={112} height={112} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-800)"></Box>
                <Box position="absolute" top={0} right={0} width={16} height={16} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                <Box position="absolute" bottom={16} left={16} width={16} height={16} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                <Box position="absolute" top={40} left={0} width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
              </XStack>
            </XStack>
          </Box>
          
          <Box backgroundColor="var(--black)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
            <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" marginBottom={16}>Cost Tracking</H3>
            <Paragraph fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600">$12.85</Paragraph>
            <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Spent this month</Paragraph>
            <Box height={160} marginTop={16}>
              <YStack height="100%" display="flex" flexDirection="column" justifyContent="space-between">
                <Box width="100%" backgroundColor="var(--neutral-900)" height={16} borderRadius="var(--radius-full)" overflow="hidden">
                  <Box backgroundColor="var(--neutral-600)" height="100%" borderRadius="var(--radius-full)" style={{ width: '65%' }}></Box>
                </Box>
                <Box width="100%" backgroundColor="var(--neutral-900)" height={16} borderRadius="var(--radius-full)" overflow="hidden">
                  <Box backgroundColor="var(--neutral-600)" height="100%" borderRadius="var(--radius-full)" style={{ width: '42%' }}></Box>
                </Box>
                <Box width="100%" backgroundColor="var(--neutral-900)" height={16} borderRadius="var(--radius-full)" overflow="hidden">
                  <Box backgroundColor="var(--neutral-600)" height="100%" borderRadius="var(--radius-full)" style={{ width: '28%' }}></Box>
                </Box>
                <Box width="100%" backgroundColor="var(--neutral-900)" height={16} borderRadius="var(--radius-full)" overflow="hidden">
                  <Box backgroundColor="var(--neutral-600)" height="100%" borderRadius="var(--radius-full)" style={{ width: '13%' }}></Box>
                </Box>
              </YStack>
            </Box>
          </Box>
        </Grid>
      )
    }
  ]);

  const addNewTab = () => {
    const tabOptions = [
      { 
        title: "New Board", 
        icon: <LayoutGrid size={16} />, 
        content: <KanbanBoard /> 
      },
      { 
        title: "Agents", 
        icon: <Bot size={16} />, 
        content: <AgentsList /> 
      },
      { 
        title: "Analytics", 
        icon: <ChartBar size={16} />, 
        content: tabs[2].content 
      },
      { 
        title: "Data Sources", 
        icon: <Database size={16} />, 
        content: <Box padding={16}>Data Sources content</Box> 
      },
      { 
        title: "Infrastructure", 
        icon: <Server size={16} />, 
        content: <Box padding={16}>Infrastructure content</Box> 
      }
    ];

    // For now, just add a random tab type
    const randomOption = tabOptions[Math.floor(Math.random() * tabOptions.length)];
    const newTab = {
      id: `tab-${uuidv4()}`,
      title: randomOption.title,
      icon: randomOption.icon,
      content: randomOption.content
    };

    setTabs([...tabs, newTab]);
  };

  return (
    <DashboardLayout>
      <YStack display="flex" flexDirection="column" height="100%">
        <XStack display="flex" justifyContent="space-between" alignItems="center" marginBottom={16}>
          <div>
            <H1 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600">Workspace</H1>
            <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginTop={4}>Manage your AI tasks and agents</Paragraph>
          </div>
        </XStack>

        <Box flex={1} overflow="hidden" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" backgroundColor="var(--black)">
          <TabsManager initialTabs={tabs} onAddTab={addNewTab} />
        </Box>
      </YStack>
      
      <CommandPalette />
    </DashboardLayout>
  );
};

export default Dashboard;
