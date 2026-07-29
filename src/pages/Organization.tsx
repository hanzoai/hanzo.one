import { AnimatedHeading, AnimatedSection, Avatar, AvatarFallback, AvatarImage, Box, Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, H2, H3, Input, Label, Link, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Text, Textarea, XStack, YStack, toast } from '@/gui'
import React, { useState, useEffect } from 'react';
import { useAccount } from '@/contexts/AccountContext';

import { Building, User, UserPlus, MoreVertical, Upload, MapPin, Globe, Link as LinkIcon } from 'lucide-react';



const Organization = () => {
  const { currentOrganization, updateOrganization } = useAccount();
  const [orgName, setOrgName] = useState('');
  const [orgDescription, setOrgDescription] = useState('');
  const [orgWebsite, setOrgWebsite] = useState('');
  const [orgLocation, setOrgLocation] = useState('');
  
  useEffect(() => {
    if (currentOrganization) {
      setOrgName(currentOrganization.name || '');
      setOrgDescription(currentOrganization.description || '');
      setOrgWebsite(currentOrganization.website || '');
      setOrgLocation(currentOrganization.location || '');
    }
  }, [currentOrganization]);
  
  // Mock team members for demonstration
  const teamMembers = [
    { id: '1', name: 'Alex Johnson', email: 'alex@hanzo.ai', role: 'Owner', avatar: '/placeholder.svg' },
    { id: '2', name: 'Sarah Chen', email: 'sarah@hanzo.ai', role: 'Admin', avatar: '/placeholder.svg' },
    { id: '3', name: 'Miguel Rodriguez', email: 'miguel@hanzo.ai', role: 'Member', avatar: '/placeholder.svg' },
    { id: '4', name: 'Leila Patel', email: 'leila@hanzo.ai', role: 'Member', avatar: '/placeholder.svg' },
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    updateOrganization({
      name: orgName,
      description: orgDescription,
      website: orgWebsite,
      location: orgLocation
    });
    
    toast.success('Organization settings updated');
  };
  
  const handleInviteMember = () => {
    // In a real app, this would open a modal for invitation
    toast.success('Invitation link created and copied to clipboard');
  };

  if (!currentOrganization) {
    return <div>No organization selected.</div>;
  }

  return (
    <AnimatedSection>
      <Box rowGap={32}>
        <AnimatedHeading>
          <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={24}>Organization Settings</H2>
        </AnimatedHeading>

        <YStack display="flex" flexDirection="column" gap={24} $md={{ flexDirection: "row", alignItems: "center" }}>
          <XStack height={96} width={96} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" display="flex" alignItems="center" justifyContent="center">
            <Building size={48} color="var(--neutral-400)" />
          </XStack>
          
          <div>
            <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={8}>{currentOrganization.name}</H2>
            <Box color="var(--neutral-400)">
              {currentOrganization.role === 'owner' ? 'You are the owner of this organization' : 
                `You are a ${currentOrganization.role} in this organization`}
            </Box>
            
            <Box marginTop={16} columnGap={16}>
              <Button variant="outline" size="sm" backgroundColor="var(--black)" borderColor="var(--border-strong)" columnGap={8} hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
                <Upload size={16} />
                <span>Upload Logo</span>
              </Button>
              <Link tap to="/organization-profile">
                <Button variant="outline" size="sm" backgroundColor="var(--black)" borderColor="var(--border-strong)" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
                  View Public Profile
                </Button>
              </Link>
            </Box>
          </div>
        </YStack>
        
        <Box borderTopWidth={1} borderColor="rgb(255 255 255 / 0.1)" paddingTop={24}>
          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" marginBottom={16}>Organization Details</H3>
          
          <Box onSubmit={handleSubmit} render="form" rowGap={24} maxWidth="36rem">
            <Box rowGap={8}>
              <Label htmlFor="orgName">Organization Name</Label>
              <Input
                id="orgName"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                backgroundColor="rgb(255 255 255 / 0.2)" borderColor="var(--border-strong)"
              />
            </Box>
            
            <Box rowGap={8}>
              <Label htmlFor="orgDescription">Description</Label>
              <Textarea
                id="orgDescription"
                value={orgDescription}
                onChange={(e) => setOrgDescription(e.target.value)}
                backgroundColor="rgb(255 255 255 / 0.2)" borderColor="var(--border-strong)" minHeight={96}
                placeholder="Tell us about your organization"
              />
            </Box>
            
            <Box rowGap={8}>
              <Label htmlFor="orgWebsite">Website</Label>
              <Input
                id="orgWebsite"
                value={orgWebsite}
                onChange={(e) => setOrgWebsite(e.target.value)}
                backgroundColor="rgb(255 255 255 / 0.2)" borderColor="var(--border-strong)"
                placeholder="https://example.com"
              />
            </Box>
            
            <Box rowGap={8}>
              <Label htmlFor="orgLocation">Location</Label>
              <Input
                id="orgLocation"
                value={orgLocation}
                onChange={(e) => setOrgLocation(e.target.value)}
                backgroundColor="rgb(255 255 255 / 0.2)" borderColor="var(--border-strong)"
                placeholder="City, Country"
              />
            </Box>
            
            <Button type="submit" backgroundColor="var(--neutral-900)" borderStyle="none" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}>
              Update Organization
            </Button>
          </Box>
        </Box>

        <Box paddingTop={24}>
          <XStack display="flex" justifyContent="space-between" alignItems="center" marginBottom={16}>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500">Team Members</H3>
            
            <Button onClick={handleInviteMember} columnGap={8} backgroundColor="var(--neutral-900)" borderStyle="none" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}>
              <UserPlus size={16} />
              <span>Invite Member</span>
            </Button>
          </XStack>
          
          <Box borderRadius="var(--radius-lg)" overflow="hidden">
            <Table>
              <TableHeader backgroundColor="var(--surface-card-emphasis)">
                <TableRow borderWidth={0}>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead textAlign="right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamMembers.map((member) => (
                  <TableRow key={member.id} borderColor="rgb(255 255 255 / 0.1)">
                    <TableCell>
                      <XStack display="flex" alignItems="center" columnGap={12}>
                        <Avatar height={32} width={32}>
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback backgroundColor="var(--surface-card-emphasis)">{member.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <Box fontWeight="500">{member.name}</Box>
                          <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{member.email}</Box>
                        </div>
                      </XStack>
                    </TableCell>
                    <TableCell>
                      <Text
                        paddingHorizontal={8}
                        paddingVertical={4}
                        borderRadius="var(--radius-full)"
                        fontSize="var(--text-xs)"
                        lineHeight="var(--leading-xs)"
                        backgroundColor="rgb(255 255 255 / 0.06)"
                        color={member.role === 'Owner' ? 'var(--foreground)' : 'var(--neutral-300)'}
                      >
                        {member.role}
                      </Text>
                    </TableCell>
                    <TableCell textAlign="right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" height={32} width={32} padding={0}>
                            <MoreVertical size={16} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" backgroundColor="var(--black)" borderColor="var(--border-strong)">
                          <DropdownMenuItem color="var(--white)" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem color="var(--white)" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
                            Change Role
                          </DropdownMenuItem>
                          <DropdownMenuItem color="var(--foreground)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)", color: "var(--foreground)" }}>
                            Remove
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Box>
    </AnimatedSection>
  );
};

export default Organization;
