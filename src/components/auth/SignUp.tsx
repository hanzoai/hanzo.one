import { Anchor, Box, Button, Checkbox, H1, Input, Label, Paragraph, XStack, toast } from '@/gui'

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    organization: '',
    role: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreeToTerms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      if (!formData.email || !formData.password || !formData.confirmPassword) {
        toast.error('Please fill in all required fields');
        return;
      }
      
      if (formData.password !== formData.confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }
      
      if (!formData.agreeToTerms) {
        toast.error('You must agree to the terms of service');
        return;
      }
      
      setStep(2);
    } else if (step === 2) {
      if (!formData.name || !formData.organization) {
        toast.error('Please fill in all required fields');
        return;
      }
      
      // Store user data in localStorage to simulate account creation
      localStorage.setItem('user', JSON.stringify({
        id: 'user-' + Date.now(),
        name: formData.name,
        email: formData.email,
        avatar: null
      }));
      
      localStorage.setItem('organizations', JSON.stringify([
        { 
          id: 'org-' + Date.now(), 
          name: formData.organization, 
          role: 'owner' 
        }
      ]));
      
      toast.success('Account created successfully!');
      
      // Redirect to payment method page
      navigate('/billing#payment-methods');
    }
  };
  
  return (
    <XStack minHeight="100vh" backgroundColor="var(--black)" color="var(--white)" display="flex" alignItems="center" justifyContent="center" padding={16}>
      <Box width="100%" maxWidth="28rem" rowGap={24}>
        <Box textAlign="center">
          <H1 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700">Create Account</H1>
          <Paragraph color="var(--neutral-400)" marginTop={8}>
            {step === 1 ? 'Enter your details to get started' : 'Set up your profile'}
          </Paragraph>
        </Box>
        
        <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
          <Box onSubmit={handleSubmit} render="form" rowGap={16}>
            {step === 1 ? (
              <>
                <Box rowGap={8}>
                  <Label htmlFor="email">Email</Label>
                  <Box position="relative">
                    <Box render="span" display="inline-flex" alignItems="center" position="absolute" left={12} top={12}><Mail size={16} color="var(--neutral-400)" /></Box>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      paddingLeft={40}
                    />
                  </Box>
                </Box>
                
                <Box rowGap={8}>
                  <Label htmlFor="password">Password</Label>
                  <Box position="relative">
                    <Box render="span" display="inline-flex" alignItems="center" position="absolute" left={12} top={12}><Lock size={16} color="var(--neutral-400)" /></Box>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      paddingLeft={40}
                    />
                  </Box>
                </Box>
                
                <Box rowGap={8}>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Box position="relative">
                    <Box render="span" display="inline-flex" alignItems="center" position="absolute" left={12} top={12}><Lock size={16} color="var(--neutral-400)" /></Box>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      paddingLeft={40}
                    />
                  </Box>
                </Box>
                
                <XStack display="flex" alignItems="center" columnGap={8} paddingTop={8}>
                  <Checkbox 
                    id="terms" 
                    checked={formData.agreeToTerms}
                    onCheckedChange={handleCheckboxChange}
                  />
                  <Label htmlFor="terms" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                    I agree to the <Anchor tap href="/terms" color="var(--foreground)" hoverStyle={{ textDecorationLine: "underline" }}>Terms of Service</Anchor> and <Anchor tap href="/privacy" color="var(--foreground)" hoverStyle={{ textDecorationLine: "underline" }}>Privacy Policy</Anchor>
                  </Label>
                </XStack>
              </>
            ) : (
              <>
                <Box rowGap={8}>
                  <Label htmlFor="name">Full Name</Label>
                  <Box position="relative">
                    <Box render="span" display="inline-flex" alignItems="center" position="absolute" left={12} top={12}><User size={16} color="var(--neutral-400)" /></Box>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      paddingLeft={40}
                    />
                  </Box>
                </Box>
                
                <Box rowGap={8}>
                  <Label htmlFor="organization">Organization Name</Label>
                  <Box position="relative">
                    <Input
                      id="organization"
                      name="organization"
                      placeholder="Your Company"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                  </Box>
                </Box>
                
                <Box rowGap={8}>
                  <Label htmlFor="role">Your Role (Optional)</Label>
                  <Box position="relative">
                    <Input
                      id="role"
                      name="role"
                      placeholder="e.g. Developer, Manager"
                      value={formData.role}
                      onChange={handleChange}
                    />
                  </Box>
                </Box>
              </>
            )}
            
            <Button 
              type="submit" 
              width="100%" marginTop={24} backgroundColor="var(--neutral-600)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
            >
              {step === 1 ? 'Continue' : 'Create Account'}
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
            </Button>
          </Box>
        </Box>
        
        <Box textAlign="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
          Already have an account?{" "}
          <Anchor tap href="/login" color="var(--foreground)" hoverStyle={{ textDecorationLine: "underline" }}>
            Sign in
          </Anchor>
        </Box>
      </Box>
    </XStack>
  );
};

export default SignUp;
