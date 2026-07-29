import { AnimatedHeading, AnimatedSection, Box, Button, Checkbox, Grid, H2, H3, Input, Label, Paragraph, Text, XStack, toast } from '@/gui'

import React, { useState } from 'react';
import { useBilling } from '@/contexts/BillingContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard } from 'lucide-react';

const PurchaseCredits = () => {
  const { addCredits } = useBilling();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [creditAmount, setCreditAmount] = useState('50');

  const handleCreditAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreditAmount(e.target.value);
  };

  const handlePurchaseCredits = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    const amount = parseFloat(creditAmount);
    
    if (isNaN(amount) || amount <= 0) {
      toast.error('Please enter a valid amount greater than 0');
      setIsProcessing(false);
      return;
    }
    
    // Simulate credit purchase
    const success = await addCredits(amount);
    
    if (success) {
      toast.success(`Successfully purchased $${amount} in credits!`);
      navigate('/account/billing');
    } else {
      toast.error('Failed to process payment');
    }
    
    setIsProcessing(false);
  };

  return (
    <AnimatedSection>
      <Box rowGap={24}>
        <XStack display="flex" alignItems="center" marginBottom={16}>
          <Button 
            variant="ghost" 
            onClick={() => navigate('/account/billing')} 
            marginRight={16} hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.2)" }}
          >
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><ArrowLeft size={16} /></Box>
            Back to Billing
          </Button>
        </XStack>
        
        <AnimatedHeading>
          <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={24}>Purchase Credits</H2>
        </AnimatedHeading>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))" }}>
          <Box gridColumn="span 1 / span 1" $md={{ gridColumn: "span 3 / span 3" }}>
            <Box backgroundColor="var(--black)" borderWidth={0} borderRadius="var(--radius-lg)" padding={24} rowGap={24}>
              <Box onSubmit={handlePurchaseCredits} render="form" rowGap={24}>
                <Box rowGap={8}>
                  <Label htmlFor="creditAmount">Amount (USD)</Label>
                  <Box position="relative">
                    <Box position="absolute" left={12} top={12} color="var(--neutral-400)">$</Box>
                    <Input
                      id="creditAmount"
                      name="creditAmount"
                      placeholder="50"
                      value={creditAmount}
                      onChange={handleCreditAmountChange}
                      backgroundColor="rgb(255 255 255 / 0.2)" borderColor="var(--border-strong)" paddingLeft={32}
                    />
                  </Box>
                  <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Minimum amount: $10</Paragraph>
                </Box>
                
                {/* Preset amounts */}
                <XStack display="flex" flexWrap="wrap" gap={8} marginTop={16}>
                  {['10', '25', '50', '100', '500'].map(amount => (
                    <Button
                      key={amount}
                      type="button"
                      variant="outline"
                      hoverStyle={{ backgroundColor: "var(--surface-card)" }} borderColor={creditAmount === amount ? "rgb(255 255 255 / 0.3)" : undefined} backgroundColor={creditAmount === amount ? "rgb(255 255 255 / 0.1)" : undefined}
                      onClick={() => setCreditAmount(amount)}
                    >
                      ${amount}
                    </Button>
                  ))}
                </XStack>

                <Box rowGap={16}>
                  <Label htmlFor="card">Payment Method</Label>
                  <XStack padding={16} borderWidth={0} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)" display="flex" alignItems="center">
                    <XStack height={40} width={56} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius)" display="flex" alignItems="center" justifyContent="center" marginRight={16}>
                      <Box color="var(--neutral-500)" fontWeight="700" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">VISA</Box>
                    </XStack>
                    <div>
                      <Box fontWeight="500">
                        Visa ending in 4242
                        <Text marginLeft={8} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" backgroundColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" paddingHorizontal={8} paddingVertical={2} borderRadius="var(--radius-full)">
                          Default
                        </Text>
                      </Box>
                      <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Expires 12/25</Box>
                    </div>
                  </XStack>
                </Box>
                
                <XStack display="flex" alignItems="center" columnGap={8} paddingTop={8}>
                  <Checkbox id="terms" checked={true} />
                  <Label htmlFor="terms" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
                    I agree to the terms and conditions
                  </Label>
                </XStack>
                
                <Button 
                  type="submit" 
                  width="100%" backgroundColor="var(--neutral-900)" borderWidth={0} hoverStyle={{ backgroundColor: "var(--neutral-800)" }} 
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : 'Purchase Credits'}
                </Button>
              </Box>
            </Box>
          </Box>
          
          <Box gridColumn="span 1 / span 1" $md={{ gridColumn: "span 2 / span 2" }}>
            <Box backgroundColor="var(--black)" borderWidth={0} borderRadius="var(--radius-lg)" padding={24} rowGap={16}>
              <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500">Order Summary</H3>
              
              <Box rowGap={8}>
                <XStack display="flex" justifyContent="space-between" paddingVertical={8}>
                  <span>Credits</span>
                  <Text fontWeight="500">${creditAmount}</Text>
                </XStack>
                <XStack display="flex" justifyContent="space-between" paddingVertical={8} borderTopWidth={1} borderColor="rgb(255 255 255 / 0.1)">
                  <span>Subtotal</span>
                  <Text fontWeight="500">${creditAmount}</Text>
                </XStack>
                <XStack display="flex" justifyContent="space-between" paddingVertical={8}>
                  <span>Tax</span>
                  <Text fontWeight="500">$0.00</Text>
                </XStack>
                <XStack display="flex" justifyContent="space-between" paddingVertical={8} borderTopWidth={1} borderColor="rgb(255 255 255 / 0.1)">
                  <Text fontWeight="700">Total</Text>
                  <Text fontWeight="700">${creditAmount}</Text>
                </XStack>
              </Box>
              
              <Box paddingTop={16} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
                <p>Credits never expire and can be used for any Hanzo AI service.</p>
                <Paragraph marginTop={8}>Need help? Contact our support team.</Paragraph>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Box>
    </AnimatedSection>
  );
};

export default PurchaseCredits;
