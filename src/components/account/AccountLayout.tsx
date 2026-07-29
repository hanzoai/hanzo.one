import { AnimatedHeading, AnimatedSection, Avatar, AvatarFallback, AvatarImage, Box, Button, Grid, H1, Link, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Text, XStack } from '@/gui'
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom'
import { 
  User, CreditCard, BarChart3, FileText, 
  Building, Settings, ChevronRight, LogOut, 
  Gift, Link as LinkIcon
} from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useAccount } from '@/contexts/AccountContext';


const AccountLayout = ({ children }: { children?: React.ReactNode }) => {
  const { user, organizations, currentOrganization, switchOrganization, isLoading } = useAccount();
  const location = useLocation();

  const accountNavItems = [
    { name: 'Profile', path: '/account', icon: User },
    { name: 'Organization', path: '/account/organization', icon: Building },
    { name: 'Billing', path: '/account/billing', icon: CreditCard },
    { name: 'Usage', path: '/account/usage', icon: BarChart3 },
    { name: 'Invoices', path: '/invoices', icon: FileText },
    { name: 'Referrals', path: '/account/referrals', icon: Gift },
    { name: 'Settings', path: '/account/settings', icon: Settings },
  ];

  const isActive = (path: string) => {
    if (path === '/account/billing' && location.pathname.startsWith('/account/billing')) {
      return true;
    }
    if (path === '/account/referrals' && location.pathname.startsWith('/account/referrals')) {
      return true;
    }
    return location.pathname === path;
  };

  if (isLoading) {
    return <XStack display="flex" alignItems="center" justifyContent="center" minHeight="100vh">Loading...</XStack>;
  }

  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Navbar />
      
      <Box render="main" paddingTop={128} paddingBottom={64} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
          <AnimatedSection>
            <XStack display="flex" justifyContent="space-between" alignItems="center" marginBottom={40}>
              <AnimatedHeading>
                <H1 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" $sm={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Account</H1>
              </AnimatedHeading>
              
              {currentOrganization && (
                <Select 
                  value={currentOrganization.id} 
                  onValueChange={switchOrganization}
                >
                  <SelectTrigger width="250px" backgroundColor="var(--black)" borderColor="var(--border-strong)">
                    <SelectValue>
                      <XStack display="flex" alignItems="center">
                        <XStack height={24} width={24} backgroundColor="var(--neutral-900)" borderRadius="var(--radius-full)" marginRight={8} display="flex" alignItems="center" justifyContent="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                          {currentOrganization.name.charAt(0)}
                        </XStack>
                        {currentOrganization.name}
                      </XStack>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent backgroundColor="var(--black)" borderColor="var(--border-strong)">
                    {organizations.map((org) => (
                      <SelectItem key={org.id} value={org.id} color="var(--white)" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
                        <XStack display="flex" alignItems="center">
                          <XStack height={24} width={24} backgroundColor="var(--neutral-900)" borderRadius="var(--radius-full)" marginRight={8} display="flex" alignItems="center" justifyContent="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                            {org.name.charAt(0)}
                          </XStack>
                          {org.name}
                          <Text marginLeft={8} color="var(--neutral-400)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">({org.role})</Text>
                        </XStack>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </XStack>

            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
              {/* Sidebar Navigation */}
              <Box gridColumn="span 1 / span 1">
                <Box backdropFilter="blur(24px)" WebkitBackdropFilter="blur(24px)" backgroundColor="rgb(0 0 0 / 0.4)" borderWidth={1} borderColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-xl)" padding={16} rowGap={4}>
                  {accountNavItems.map((item) => (
                    <Link minHeight={44} 
                      key={item.path} 
                      to={item.path}
                      display="flex" alignItems="center" columnGap={12} padding={12} borderRadius="var(--radius-lg)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={isActive(item.path) ? "rgb(255 255 255 / 0.05)" : undefined} color={isActive(item.path) ? "var(--white)" : "var(--neutral-400)"} hoverStyle={isActive(item.path) ? undefined : { backgroundColor: "rgb(255 255 255 / 0.05)", color: "var(--white)" }}
                    >
                      <item.icon width={20} height={20} />
                      <Text fontWeight="500">{item.name}</Text>
                      {isActive(item.path) && <Box render="span" display="inline-flex" alignItems="center" marginLeft="auto"><ChevronRight size={16} /></Box>}
                    </Link>
                  ))}
                  
                  <Button 
                    variant="ghost" 
                    width="100%" justifyContent="flex-start" color="var(--foreground)" marginTop={24} padding={12} hoverStyle={{ color: "var(--foreground)", backgroundColor: "rgb(255 255 255 / 0.1)" }}
                  >
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><LogOut size={20} /></Box>
                    Sign Out
                  </Button>
                </Box>
              </Box>
              
              {/* Main Content */}
              <Box gridColumn="span 1 / span 1" $md={{ gridColumn: "span 3 / span 3" }}>
                <Box backdropFilter="blur(24px)" WebkitBackdropFilter="blur(24px)" backgroundColor="rgb(0 0 0 / 0.4)" borderWidth={1} borderColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-xl)" padding={32}>
                  {children || <Outlet />}
                </Box>
              </Box>
            </Grid>
          </AnimatedSection>
        </Box>
      </Box>

      <Box width="100%">
        <Footer />
      </Box>
    </Box>
  );
};

export default AccountLayout;
