import { AnimatedHeading, AnimatedSection, Box, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Grid, H2, H3, Paragraph, Text, XStack, toast } from '@/gui'
import React, { useState } from 'react';
import { ArrowLeft, Check, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useBilling } from '@/contexts/BillingContext';


const BillingPlans = () => {
  const navigate = useNavigate();
  const { checkout, billingInfo } = useBilling();
  const [isUpgrading, setIsUpgrading] = useState(false);

  const plans = [
    {
      id: 'dev',
      name: 'Developer',
      price: 20,
      interval: 'month',
      description: 'For hobbyists and personal projects',
      features: [
        'All core Hanzo platform features',
        'Unlimited private projects',
        'Unlimited deployments',
        'Self-hosted on your infrastructure',
        '1 AI Unit',
        '1 Compute Unit (Server)'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      price: 49,
      interval: 'month',
      description: 'For professionals and small teams',
      features: [
        'Everything in Developer plan',
        'Extended messaging and data analysis',
        'Full access to Hanzo App, Chat, Dev',
        'Integration with Hanzo Models',
        'Image generation',
        'Up to 10 AI Units (Adjustable)',
        'Up to 10 Compute Units (Adjustable)'
      ],
      popular: true
    },
    {
      id: 'team',
      name: 'Team',
      price: 99,
      interval: 'month',
      description: 'For growing teams with advanced needs',
      features: [
        'Everything in Professional plan',
        'Higher message limits',
        'Advanced collaborative workspace',
        'Secure workspace with admin console',
        'Unified team billing',
        'Team data excluded from training',
        'Up to 10 AI Units per user (Adjustable)'
      ],
      popular: false
    }
  ];

  const handleUpgrade = async (planId: string) => {
    setIsUpgrading(true);
    
    // Find the plan
    const plan = plans.find(p => p.id === planId);
    if (!plan) {
      toast.error('Invalid plan selected');
      setIsUpgrading(false);
      return;
    }
    
    // Simulate checkout process
    const success = await checkout(planId as any);
    
    if (success) {
      toast.success(`Successfully upgraded to ${plan.name} plan!`);
      navigate('/account/billing');
    }
    
    setIsUpgrading(false);
  };

  return (
    <AnimatedSection>
      <Box rowGap={24}>
        <XStack display="flex" alignItems="center" marginBottom={16}>
          <Button variant="ghost" onClick={() => navigate('/account/billing')} marginRight={16}>
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><ArrowLeft size={16} /></Box>
            Back to Billing
          </Button>
        </XStack>
        
        <AnimatedHeading>
          <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={24}>Choose a Plan</H2>
        </AnimatedHeading>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {plans.map(plan => (
            <Card 
              key={plan.id} 
              backgroundColor="var(--surface-card-emphasis)" borderWidth={1} position="relative" borderColor={plan.popular ? "var(--neutral-500)" : "var(--neutral-800)"}
            >
              {plan.popular && (
                <Box position="absolute" top={-12} left="50%" x="-50%">
                  <Text backgroundColor="var(--neutral-600)" color="var(--white)" paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500">
                    Most Popular
                  </Text>
                </Box>
              )}
              
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription color="var(--neutral-400)">{plan.description}</CardDescription>
                <Box marginTop={16}>
                  <Text fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700">${plan.price}</Text>
                  <Text color="var(--neutral-400)">/{plan.interval}</Text>
                </Box>
              </CardHeader>
              
              <CardContent>
                <Box render="ul" rowGap={8}>
                  {plan.features.map((feature, index) => (
                    <XStack key={index} render="li" display="flex" alignItems="flex-start">
                      <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Check size={20} color="var(--neutral-500)" /></Box>
                      <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{feature}</Text>
                    </XStack>
                  ))}
                </Box>
              </CardContent>
              
              <CardFooter>
                <Button 
                  width="100%" backgroundColor={plan.popular ? "var(--neutral-600)" : undefined} hoverStyle={plan.popular ? { backgroundColor: "var(--neutral-700)" } : undefined}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => handleUpgrade(plan.id)}
                  disabled={isUpgrading}
                >
                  {billingInfo.plan === plan.id ? 'Current Plan' : 'Upgrade'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </Grid>
        
        <Box marginTop={32} backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" marginBottom={16}>Enterprise Plan</H3>
          <Paragraph color="var(--neutral-400)" marginBottom={16}>
            Need a custom solution for your organization? Our Enterprise plan offers custom pricing, 
            dedicated support, and tailored features for your specific needs.
          </Paragraph>
          <Button variant="outline">Contact Sales</Button>
        </Box>
      </Box>
    </AnimatedSection>
  );
};

export default BillingPlans;
