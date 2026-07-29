import { AnimatedHeading, AnimatedSection, Avatar, AvatarFallback, AvatarImage, Box, Button, Grid, H2, H3, Input, Label, Link, Textarea, XStack, YStack, toast } from '@/gui'

import React, { useState, useEffect } from 'react';
import { useAccount } from '@/contexts/AccountContext';
import { Mail, Key, Shield, UserCircle, MapPin, Phone, Globe, Calendar } from 'lucide-react';


const Account = () => {
  const { user, updateUserProfile } = useAccount();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [phone, setPhone] = useState('');
  
  useEffect(() => {
    if (user) {
      setFullName(user.name || '');
      setEmail(user.email || '');
      setBio(user.bio || '');
      setLocation(user.location || '');
      setWebsite(user.website || '');
      setPhone(user.phone || '');
    }
  }, [user]);
  
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    updateUserProfile({
      name: fullName,
      email,
      bio,
      location,
      website,
      phone
    });
    
    toast.success('Profile updated successfully');
  };

  if (!user) {
    return <div>Please sign in to access your account.</div>;
  }

  return (
    <AnimatedSection>
      <Box rowGap={40}>
        <AnimatedHeading>
          <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="500" marginBottom={32}>Profile Settings</H2>
        </AnimatedHeading>

        <YStack display="flex" flexDirection="column" gap={32} $md={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar height={96} width={96}>
            <AvatarImage src={user.avatar} />
            <AvatarFallback fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" backgroundColor="var(--neutral-900)">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div>
            <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="500" marginBottom={8}>{user.name}</H2>
            <XStack display="flex" alignItems="center" color="var(--neutral-400)">
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Mail size={16} /></Box>
              {user.email}
            </XStack>
            
            <Box marginTop={20} columnGap={16}>
              <Button variant="outline" size="sm" backgroundColor="var(--black)" borderColor="rgb(255 255 255 / 0.1)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.05)" }}>
                Upload New Picture
              </Button>
              <Button variant="outline" size="sm" backgroundColor="var(--black)" borderColor="rgb(255 255 255 / 0.1)" color="var(--foreground)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)", color: "var(--foreground)" }}>
                Remove
              </Button>
            </Box>
          </div>
        </YStack>
        
        <Box borderTopWidth={1} borderColor="rgb(255 255 255 / 0.2)" paddingTop={32}>
          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" marginBottom={24}>Personal Information</H3>
          
          <Box onSubmit={handleProfileSubmit} render="form" rowGap={32} maxWidth="36rem">
            <Box rowGap={8}>
              <Label htmlFor="fullName" color="var(--white)">Full Name</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                backgroundColor="rgb(0 0 0 / 0.4)" borderColor="rgb(255 255 255 / 0.1)" focusStyle={{ borderColor: "rgb(255 255 255 / 0.2)" }}
              />
            </Box>
            
            <Box rowGap={8}>
              <Label htmlFor="email" color="var(--white)">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                backgroundColor="rgb(0 0 0 / 0.4)" borderColor="rgb(255 255 255 / 0.1)" focusStyle={{ borderColor: "rgb(255 255 255 / 0.2)" }}
              />
            </Box>
            
            <Box rowGap={8}>
              <Label htmlFor="bio" color="var(--white)">Bio</Label>
              <Textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                backgroundColor="rgb(0 0 0 / 0.4)" borderColor="rgb(255 255 255 / 0.1)" minHeight={96} focusStyle={{ borderColor: "rgb(255 255 255 / 0.2)" }}
                placeholder="Tell us about yourself"
              />
            </Box>
            
            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              <Box rowGap={8}>
                <Label htmlFor="location" color="var(--white)">Location</Label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  backgroundColor="rgb(0 0 0 / 0.4)" borderColor="rgb(255 255 255 / 0.1)" focusStyle={{ borderColor: "rgb(255 255 255 / 0.2)" }}
                  placeholder="City, Country"
                />
              </Box>
              
              <Box rowGap={8}>
                <Label htmlFor="phone" color="var(--white)">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  backgroundColor="rgb(0 0 0 / 0.4)" borderColor="rgb(255 255 255 / 0.1)" focusStyle={{ borderColor: "rgb(255 255 255 / 0.2)" }}
                  placeholder="+1 (555) 123-4567"
                />
              </Box>
            </Grid>
            
            <Box rowGap={8}>
              <Label htmlFor="website" color="var(--white)">Website</Label>
              <Input
                id="website"
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                backgroundColor="rgb(0 0 0 / 0.4)" borderColor="rgb(255 255 255 / 0.1)" focusStyle={{ borderColor: "rgb(255 255 255 / 0.2)" }}
                placeholder="https://example.com"
              />
            </Box>
            
            <XStack display="flex" gap={16} paddingTop={8}>
              <Button 
                type="submit" 
                backgroundColor="var(--black)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
              >
                Update Profile
              </Button>
              <Link tap to="/user-profile">
                <Button 
                  type="button" 
                  variant="outline" 
                  backgroundColor="var(--black)" borderColor="rgb(255 255 255 / 0.1)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.05)" }}
                >
                  View Public Profile
                </Button>
              </Link>
            </XStack>
          </Box>
        </Box>
      </Box>
    </AnimatedSection>
  );
};

export default Account;
