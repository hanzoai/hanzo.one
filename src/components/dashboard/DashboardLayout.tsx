import { Box, Button, Text, XStack, YStack } from '@/gui'

import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Home, 
  LayoutDashboard, 
  Users, 
  Settings, 
  FileCog, 
  Bot, 
  Search, 
  ChevronDown, 
  PlusCircle, 
  BellDot,
  Database,
  Server,
  Cpu,
  Layers,
  Command,
  Keyboard
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <XStack display="flex" height="100vh" backgroundColor="var(--black)" color="var(--white)" overflow="hidden">
      {/* Sidebar */}
      <YStack width={224} borderRightWidth={1} borderColor="var(--neutral-900)" display="flex" flexDirection="column">
        {/* User/Team Selector */}
        <XStack padding={12} borderBottomWidth={1} borderColor="var(--neutral-900)" display="flex" alignItems="center">
          <XStack width={24} height={24} backgroundColor="var(--neutral-600)" borderRadius="var(--radius-md)" display="flex" alignItems="center" justifyContent="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="700" marginRight={8}>H</XStack>
          <Text fontWeight="500">Hanzo AI</Text>
          <Box render="span" display="inline-flex" alignItems="center" marginLeft="auto"><ChevronDown size={16} /></Box>
        </XStack>
        
        {/* Search */}
        <Box paddingHorizontal={12} paddingVertical={8} borderBottomWidth={1} borderColor="var(--neutral-900)">
          <Button variant="outline" width="100%" justifyContent="flex-start" color="var(--neutral-400)" backgroundColor="var(--black)" borderColor="var(--neutral-800)">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Search size={16} /></Box>
            <span>Search...</span>
            <XStack marginLeft="auto" display="flex" alignItems="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">
              <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Command size={12} /></Box>
              <span>K</span>
            </XStack>
          </Button>
        </Box>
        
        {/* Navigation */}
        <Box render="nav" flex={1} overflowY="auto" paddingVertical={12} paddingHorizontal={12}>
          <Box marginBottom={24}>
            <Box color="var(--neutral-400)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={8} paddingHorizontal={8}>WORKSPACE</Box>
            <Box render="ul" rowGap={4}>
              <li>
                <Button variant="ghost" width="100%" justifyContent="flex-start" color="var(--neutral-300)" hoverStyle={{ backgroundColor: "var(--neutral-900)", color: "var(--white)" }} onClick={() => navigate("/dashboard")}>
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><LayoutDashboard size={16} /></Box> 
                  Dashboard
                </Button>
              </li>
              <li>
                <Button variant="ghost" width="100%" justifyContent="flex-start" color="var(--neutral-300)" hoverStyle={{ backgroundColor: "var(--neutral-900)", color: "var(--white)" }}>
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><FileCog size={16} /></Box> 
                  Projects
                </Button>
              </li>
              <li>
                <Button variant="ghost" width="100%" justifyContent="flex-start" color="var(--neutral-300)" hoverStyle={{ backgroundColor: "var(--neutral-900)", color: "var(--white)" }}>
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Bot size={16} /></Box> 
                  AI Agents
                </Button>
              </li>
              <li>
                <Button variant="ghost" width="100%" justifyContent="flex-start" color="var(--neutral-300)" hoverStyle={{ backgroundColor: "var(--neutral-900)", color: "var(--white)" }}>
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Database size={16} /></Box> 
                  Data Sources
                </Button>
              </li>
              <li>
                <Button variant="ghost" width="100%" justifyContent="flex-start" color="var(--neutral-300)" hoverStyle={{ backgroundColor: "var(--neutral-900)", color: "var(--white)" }}>
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Server size={16} /></Box> 
                  Infrastructure
                </Button>
              </li>
            </Box>
          </Box>
          
          <Box marginBottom={24}>
            <XStack display="flex" alignItems="center" justifyContent="space-between" color="var(--neutral-400)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={8} paddingHorizontal={8}>
              <span>MODELS</span>
              <Button size="icon" variant="ghost" height={16} width={16} color="var(--neutral-400)" hoverStyle={{ color: "var(--white)", backgroundColor: "var(--neutral-900)" }}>
                <PlusCircle size={12} />
              </Button>
            </XStack>
            <Box render="ul" rowGap={4}>
              <li>
                <Button variant="ghost" width="100%" justifyContent="flex-start" color="var(--neutral-300)" hoverStyle={{ backgroundColor: "var(--neutral-900)", color: "var(--white)" }}>
                  <XStack width={16} height={16} backgroundColor="var(--neutral-600)" borderRadius="var(--radius-sm)" display="flex" alignItems="center" justifyContent="center" fontSize="10px" marginRight={8}>G</XStack>
                  GPT-4o
                </Button>
              </li>
              <li>
                <Button variant="ghost" width="100%" justifyContent="flex-start" color="var(--neutral-300)" hoverStyle={{ backgroundColor: "var(--neutral-900)", color: "var(--white)" }}>
                  <XStack width={16} height={16} backgroundColor="var(--neutral-600)" borderRadius="var(--radius-sm)" display="flex" alignItems="center" justifyContent="center" fontSize="10px" marginRight={8}>C</XStack>
                  Claude 3
                </Button>
              </li>
              <li>
                <Button variant="ghost" width="100%" justifyContent="flex-start" color="var(--neutral-300)" hoverStyle={{ backgroundColor: "var(--neutral-900)", color: "var(--white)" }}>
                  <XStack width={16} height={16} backgroundColor="var(--neutral-600)" borderRadius="var(--radius-sm)" display="flex" alignItems="center" justifyContent="center" fontSize="10px" marginRight={8}>L</XStack>
                  Llama 3
                </Button>
              </li>
            </Box>
          </Box>
          
          <Box marginBottom={24}>
            <XStack display="flex" alignItems="center" justifyContent="space-between" color="var(--neutral-400)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={8} paddingHorizontal={8}>
              <span>TEAMS</span>
              <Button size="icon" variant="ghost" height={16} width={16} color="var(--neutral-400)" hoverStyle={{ color: "var(--white)", backgroundColor: "var(--neutral-900)" }}>
                <PlusCircle size={12} />
              </Button>
            </XStack>
            <Box render="ul" rowGap={4}>
              <li>
                <Button variant="ghost" width="100%" justifyContent="flex-start" color="var(--neutral-300)" hoverStyle={{ backgroundColor: "var(--neutral-900)", color: "var(--white)" }}>
                  <XStack width={16} height={16} backgroundColor="var(--neutral-600)" borderRadius="var(--radius-sm)" display="flex" alignItems="center" justifyContent="center" fontSize="10px" marginRight={8}>E</XStack>
                  Engineering
                </Button>
              </li>
              <li>
                <Button variant="ghost" width="100%" justifyContent="flex-start" color="var(--neutral-300)" hoverStyle={{ backgroundColor: "var(--neutral-900)", color: "var(--white)" }}>
                  <XStack width={16} height={16} backgroundColor="var(--neutral-600)" borderRadius="var(--radius-sm)" display="flex" alignItems="center" justifyContent="center" fontSize="10px" marginRight={8}>D</XStack>
                  Design
                </Button>
              </li>
              <li>
                <Button variant="ghost" width="100%" justifyContent="flex-start" color="var(--neutral-300)" hoverStyle={{ backgroundColor: "var(--neutral-900)", color: "var(--white)" }}>
                  <XStack width={16} height={16} backgroundColor="var(--neutral-600)" borderRadius="var(--radius-sm)" display="flex" alignItems="center" justifyContent="center" fontSize="10px" marginRight={8}>M</XStack>
                  Marketing
                </Button>
              </li>
            </Box>
          </Box>
        </Box>
        
        {/* Footer */}
        <Box marginTop="auto" borderTopWidth={1} borderColor="var(--neutral-900)" padding={12}>
          <Box render="ul" rowGap={4}>
            <li>
              <Button variant="ghost" width="100%" justifyContent="flex-start" color="var(--neutral-300)" hoverStyle={{ backgroundColor: "var(--neutral-900)", color: "var(--white)" }}>
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Settings size={16} /></Box> 
                Settings
              </Button>
            </li>
            <li>
              <Button variant="ghost" width="100%" justifyContent="flex-start" color="var(--neutral-300)" hoverStyle={{ backgroundColor: "var(--neutral-900)", color: "var(--white)" }}>
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Keyboard size={16} /></Box> 
                Keyboard Shortcuts
              </Button>
            </li>
            <li>
              <Button variant="ghost" width="100%" justifyContent="flex-start" color="var(--neutral-300)" hoverStyle={{ backgroundColor: "var(--neutral-900)", color: "var(--white)" }} onClick={() => navigate("/")}>
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Home size={16} /></Box> 
                Home
              </Button>
            </li>
          </Box>
        </Box>
      </YStack>
      
      {/* Main Content */}
      <YStack flex={1} overflow="hidden" display="flex" flexDirection="column">
        {/* Header */}
        <XStack render="header" height={48} borderBottomWidth={1} borderColor="var(--neutral-900)" display="flex" alignItems="center" paddingHorizontal={16}>
          <Box flex={1}></Box>
          <XStack display="flex" alignItems="center" columnGap={12}>
            <Button size="icon" variant="ghost" color="var(--neutral-400)" hoverStyle={{ color: "var(--white)" }}>
              <BellDot size={20} />
            </Button>
            <Box height={32} width={32} borderRadius="var(--radius-full)" borderWidth={1} borderColor="var(--neutral-800)" backgroundImage="linear-gradient(to bottom right, var(--neutral-700), var(--neutral-900))"></Box>
          </XStack>
        </XStack>
        
        {/* Content */}
        <Box render="main" flex={1} overflow="hidden" padding={24}>
          {children}
        </Box>
      </YStack>
    </XStack>
  );
};

export default DashboardLayout;
