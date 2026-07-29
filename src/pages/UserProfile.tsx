import { Anchor, Avatar, AvatarFallback, AvatarImage, Box, Button, Grid, H1, H2, H3, Paragraph, XStack, YStack } from '@/gui'

import React, { useState, useEffect } from 'react';
import { useAccount } from '@/contexts/AccountContext';
import { Mail, MapPin, Calendar, Link as LinkIcon, Edit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AccountLayout from '@/components/account/AccountLayout';

const UserProfile = () => {
  const { user, currentOrganization } = useAccount();
  const navigate = useNavigate();

  if (!user) {
    return <div>Loading user profile...</div>;
  }

  // This would come from a real profile model
  const userProfile = {
    bio: "Senior Developer at Hanzo Industries with a passion for AI and web technologies.",
    location: "San Francisco, CA",
    joinedDate: "January 2022",
    website: "https://alexjohnson.dev",
    projects: [
      { id: 1, name: "Hanzo AI Platform", description: "Leading AI development platform" },
      { id: 2, name: "Vector DB Integration", description: "High-performance vector database" },
      { id: 3, name: "Cloud Deployment System", description: "Automated cloud infrastructure" }
    ]
  };

  return (
    <AccountLayout>
      <Box rowGap={32}>
        {/* Profile Header */}
        <YStack display="flex" flexDirection="column" gap={32} alignItems="flex-start" $md={{ flexDirection: "row" }}>
          <Avatar height={128} width={128} borderWidth={4} borderColor="rgb(255 255 255 / 0.2)">
            <AvatarImage src={user.avatar} />
            <AvatarFallback fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" backgroundColor="var(--neutral-900)">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <Box flex={1}>
            <YStack display="flex" flexDirection="column" gap={16} $md={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <H1 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700">{user.name}</H1>
                <Paragraph color="var(--neutral-400)" marginTop={4}>{userProfile.bio}</Paragraph>
                
                <XStack display="flex" flexWrap="wrap" gap={16} marginTop={16}>
                  <XStack display="flex" alignItems="center" color="var(--neutral-400)">
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><MapPin size={16} /></Box>
                    {userProfile.location}
                  </XStack>
                  <XStack display="flex" alignItems="center" color="var(--neutral-400)">
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Calendar size={16} /></Box>
                    Joined {userProfile.joinedDate}
                  </XStack>
                  <XStack display="flex" alignItems="center" color="var(--neutral-400)">
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Mail size={16} /></Box>
                    {user.email}
                  </XStack>
                  <XStack display="flex" alignItems="center" color="var(--neutral-400)">
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><LinkIcon size={16} /></Box>
                    <Anchor tap href={userProfile.website} target="_blank" rel="noopener noreferrer" color="var(--foreground)" hoverStyle={{ textDecorationLine: "underline" }}>
                      {userProfile.website.replace('https://', '')}
                    </Anchor>
                  </XStack>
                </XStack>
              </div>
              
              <Button 
                onClick={() => navigate('/account')} 
                variant="outline" 
                display="flex" alignItems="center"
              >
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Edit size={16} /></Box>
                Edit Profile
              </Button>
            </YStack>
          </Box>
        </YStack>
        
        {/* Organization Info */}
        <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
          <H2 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" marginBottom={16}>Current Organization</H2>
          <XStack display="flex" alignItems="center" columnGap={16}>
            <XStack height={48} width={48} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="700">
              {currentOrganization?.name.charAt(0)}
            </XStack>
            <div>
              <Box fontWeight="500" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">{currentOrganization?.name}</Box>
              <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Role: {currentOrganization?.role}</Box>
            </div>
          </XStack>
        </Box>
        
        {/* Projects */}
        <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
          <H2 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" marginBottom={16}>Recent Projects</H2>
          <Grid display="grid" gap={16} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {userProfile.projects.map(project => (
              <Box key={project.id} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" padding={16} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}>
                <H3 fontWeight="500">{project.name}</H3>
                <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginTop={4}>{project.description}</Paragraph>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </AccountLayout>
  );
};

export default UserProfile;
