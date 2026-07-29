import { Anchor, Box, Button, H1, Input, Label, Paragraph, XStack, toast } from '@/gui'

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast.error('Please enter both email and password');
      return;
    }
    
    // Simulate login success - in a real app this would verify credentials
    toast.success('Login successful!');
    
    // For demo purposes, create a mock user if none exists
    if (!localStorage.getItem('user')) {
      localStorage.setItem('user', JSON.stringify({
        id: 'user-demo',
        name: 'Demo User',
        email: formData.email,
        avatar: null
      }));
      
      localStorage.setItem('organizations', JSON.stringify([
        { 
          id: 'org-demo', 
          name: 'Demo Company', 
          role: 'owner' 
        }
      ]));
    }
    
    // Redirect to the account page
    navigate('/account');
  };
  
  return (
    <XStack minHeight="100vh" backgroundColor="var(--black)" color="var(--white)" display="flex" alignItems="center" justifyContent="center" padding={16}>
      <Box width="100%" maxWidth="28rem" rowGap={24}>
        <Box textAlign="center">
          <H1 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700">Welcome Back</H1>
          <Paragraph color="var(--neutral-400)" marginTop={8}>
            Sign in to your account
          </Paragraph>
        </Box>
        
        <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
          <Box onSubmit={handleSubmit} render="form" rowGap={16}>
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
              <XStack display="flex" justifyContent="space-between" alignItems="center">
                <Label htmlFor="password">Password</Label>
                <Anchor tap href="/forgot-password" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ textDecorationLine: "underline" }}>
                  Forgot password?
                </Anchor>
              </XStack>
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
            
            <Button 
              type="submit" 
              width="100%" marginTop={24} backgroundColor="var(--neutral-600)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
            >
              Sign In
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
            </Button>
          </Box>
        </Box>
        
        <Box textAlign="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
          Don't have an account?{" "}
          <Anchor tap href="/signup" color="var(--foreground)" hoverStyle={{ textDecorationLine: "underline" }}>
            Sign up
          </Anchor>
        </Box>
      </Box>
    </XStack>
  );
};

export default Login;
