import { Box, Button, Grid, H1, H2, H3, Paragraph, XStack, YStack } from '@/gui'

import React from 'react';
import { useAccount } from '@/contexts/AccountContext';
import { Building, Users, Calendar, Globe, Edit, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AccountLayout from '@/components/account/AccountLayout';

const OrganizationProfile = () => {
  const { currentOrganization } = useAccount();
  const navigate = useNavigate();

  if (!currentOrganization) {
    return <div>No organization selected.</div>;
  }

  // This would come from a real organization profile model
  const orgProfile = {
    description: "Leading AI and development solutions provider.",
    founded: "2018",
    location: "San Francisco, CA",
    website: "https://hanzo.industries",
    teamSize: "43 members",
    plans: "Pro Plan ($49/month)",
    security: "SOC 2 Compliant, GDPR Ready"
  };

  // Mock team members data
  const teamMembers = [
    { id: '1', name: 'Alex Johnson', role: 'Owner', avatar: '/placeholder.svg' },
    { id: '2', name: 'Sarah Chen', role: 'Admin', avatar: '/placeholder.svg' },
    { id: '3', name: 'Miguel Rodriguez', role: 'Member', avatar: '/placeholder.svg' },
    { id: '4', name: 'Leila Patel', role: 'Member', avatar: '/placeholder.svg' },
  ];

  return (
    <AccountLayout>
      <Box rowGap={32}>
        {/* Organization Header */}
        <YStack display="flex" flexDirection="column" gap={32} alignItems="flex-start" $md={{ flexDirection: "row" }}>
          <XStack height={128} width={128} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" display="flex" alignItems="center" justifyContent="center">
            <Building size={64} color="var(--neutral-400)" />
          </XStack>
          
          <Box flex={1}>
            <YStack display="flex" flexDirection="column" gap={16} $md={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <H1 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700">{currentOrganization.name}</H1>
                <Paragraph color="var(--neutral-400)" marginTop={4}>{orgProfile.description}</Paragraph>
                
                <XStack display="flex" flexWrap="wrap" gap={16} marginTop={16}>
                  <XStack display="flex" alignItems="center" color="var(--neutral-400)">
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Calendar size={16} /></Box>
                    Founded {orgProfile.founded}
                  </XStack>
                  <XStack display="flex" alignItems="center" color="var(--neutral-400)">
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Globe size={16} /></Box>
                    {orgProfile.location}
                  </XStack>
                  <XStack display="flex" alignItems="center" color="var(--neutral-400)">
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Users size={16} /></Box>
                    {orgProfile.teamSize}
                  </XStack>
                  <XStack display="flex" alignItems="center" color="var(--neutral-400)">
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Shield size={16} /></Box>
                    {orgProfile.security}
                  </XStack>
                </XStack>
              </div>
              
              <Button 
                onClick={() => navigate('/account/organization')} 
                variant="outline" 
                display="flex" alignItems="center" backgroundColor="var(--black)" borderColor="var(--border-strong)" hoverStyle={{ backgroundColor: "var(--surface-card)" }}
              >
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Edit size={16} /></Box>
                Edit Organization
              </Button>
            </YStack>
          </Box>
        </YStack>
        
        {/* Organization Stats */}
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <Box backgroundColor="var(--black)" borderWidth={0} borderRadius="var(--radius-lg)" padding={24}>
            <H3 fontWeight="500" color="var(--neutral-400)" marginBottom={8}>Current Plan</H3>
            <Box fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700">Pro Plan</Box>
            <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginTop={4}>$49/month, billed annually</Box>
          </Box>
          
          <Box backgroundColor="var(--black)" borderWidth={0} borderRadius="var(--radius-lg)" padding={24}>
            <H3 fontWeight="500" color="var(--neutral-400)" marginBottom={8}>Team Members</H3>
            <Box fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700">{teamMembers.length}</Box>
            <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginTop={4}>
              {teamMembers.filter(m => m.role === 'Owner' || m.role === 'Admin').length} admins, 
              {teamMembers.filter(m => m.role === 'Member').length} members
            </Box>
          </Box>
          
          <Box backgroundColor="var(--black)" borderWidth={0} borderRadius="var(--radius-lg)" padding={24}>
            <H3 fontWeight="500" color="var(--neutral-400)" marginBottom={8}>Your Role</H3>
            <Box fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700">{currentOrganization.role}</Box>
            <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginTop={4}>
              {currentOrganization.role === 'owner' 
                ? 'Full access to all settings' 
                : currentOrganization.role === 'admin' 
                  ? 'Can invite members and modify settings'
                  : 'Standard access to resources'}
            </Box>
          </Box>
        </Grid>
        
        {/* Team Members */}
        <Box backgroundColor="var(--black)" borderWidth={0} borderRadius="var(--radius-lg)" padding={24}>
          <XStack display="flex" justifyContent="space-between" alignItems="center" marginBottom={16}>
            <H2 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500">Team Members</H2>
            <Button 
              onClick={() => navigate('/account/organization')} 
              size="sm"
              backgroundColor="var(--neutral-900)" borderWidth={0} hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
            >
              View All
            </Button>
          </XStack>
          
          <Grid display="grid" gap={16} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {teamMembers.slice(0, 3).map(member => (
              <XStack key={member.id} display="flex" alignItems="center" padding={12} backgroundColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)">
                <XStack height={40} width={40} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" marginRight={12} display="flex" alignItems="center" justifyContent="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">
                  {member.name.charAt(0)}
                </XStack>
                <div>
                  <Box fontWeight="500">{member.name}</Box>
                  <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)">{member.role}</Box>
                </div>
              </XStack>
            ))}
          </Grid>
        </Box>
      </Box>
    </AccountLayout>
  );
};

export default OrganizationProfile;
