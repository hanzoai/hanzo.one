import { Box, Button, H3, Input, Label, Paragraph, XStack, toast } from '@/gui'

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useBilling } from '@/contexts/BillingContext';

interface AddCreditsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddCreditsDialog = ({ isOpen, onClose }: AddCreditsDialogProps) => {
  const { addCredits, refreshBillingInfo } = useBilling();
  const [creditAmount, setCreditAmount] = useState('50');
  
  const handleCreditAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreditAmount(e.target.value);
  };
  
  const handlePurchaseCredits = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const amount = parseFloat(creditAmount);
    
    if (isNaN(amount) || amount <= 0) {
      toast.error('Please enter a valid amount greater than 0');
      return;
    }
    
    // Simulate credit purchase
    const success = await addCredits(amount);
    
    if (success) {
      onClose();
      refreshBillingInfo();
    }
  };

  if (!isOpen) return null;

  return (
    <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
      <XStack display="flex" justifyContent="space-between" alignItems="center" marginBottom={16}>
        <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500">Add Credits to Your Account</H3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X size={16} />
        </Button>
      </XStack>
      
      <Box onSubmit={handlePurchaseCredits} render="form" rowGap={16}>
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
              backgroundColor="var(--neutral-800)" borderColor="var(--neutral-700)" paddingLeft={32}
            />
          </Box>
          <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Minimum amount: $10</Paragraph>
        </Box>
        
        {/* Preset amounts */}
        <XStack display="flex" flexWrap="wrap" gap={8} marginTop={8}>
          {['10', '25', '50', '100', '500'].map(amount => (
            <Button
              key={amount}
              type="button"
              variant="outline"
              borderColor={creditAmount === amount ? "var(--neutral-500)" : undefined} backgroundColor={creditAmount === amount ? "rgb(255 255 255 / 0.2)" : undefined}
              onClick={() => setCreditAmount(amount)}
            >
              ${amount}
            </Button>
          ))}
        </XStack>
        
        <Button type="submit" width="100%" marginTop={16}>
          Purchase Credits
        </Button>
      </Box>
    </Box>
  );
};

export default AddCreditsDialog;
