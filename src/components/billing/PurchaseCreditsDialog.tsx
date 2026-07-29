import { Box, Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Grid, Input, Label, Text, XStack } from '@/gui'

import React, { useState } from "react";
import { useBilling } from "@/contexts/BillingContext";
import { CreditCard, Loader2 } from "lucide-react";

interface PurchaseCreditsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PREDEFINED_AMOUNTS = [10, 25, 50, 100];

const PurchaseCreditsDialog = ({ open, onOpenChange }: PurchaseCreditsDialogProps) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { addCredits } = useBilling();

  const handlePurchase = async () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (!amount || amount <= 0) return;

    setIsProcessing(true);
    try {
      const success = await addCredits(amount);
      if (success) {
        onOpenChange(false);
        setSelectedAmount(null);
        setCustomAmount("");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSelectAmount = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAmount(null);
    setCustomAmount(e.target.value);
  };

  const getEffectiveAmount = (): number => {
    if (selectedAmount) return selectedAmount;
    const parsed = parseFloat(customAmount);
    return !isNaN(parsed) ? parsed : 0;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent backgroundColor="var(--black)" borderColor="var(--neutral-800)" $sm={{ maxWidth: "425px" }}>
        <DialogHeader>
          <DialogTitle fontSize="var(--text-xl)" lineHeight="var(--leading-xl)">Purchase Credits</DialogTitle>
          <DialogDescription>
            Add more credits to your account. Credits are used for resource usage.
          </DialogDescription>
        </DialogHeader>

        <Box rowGap={24} paddingVertical={16}>
          <div>
            <Label color="var(--neutral-400)" marginBottom={8} display="block">Select an amount</Label>
            <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={12}>
              {PREDEFINED_AMOUNTS.map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant={selectedAmount === amount ? "default" : "outline"}
                  onClick={() => handleSelectAmount(amount)}
                  backgroundColor={selectedAmount === amount ? "var(--neutral-600)" : undefined} color={selectedAmount === amount ? "var(--white)" : "var(--white)"} borderColor={selectedAmount === amount ? undefined : "var(--neutral-700)"} hoverStyle={selectedAmount === amount ? { backgroundColor: "var(--neutral-700)" } : undefined}
                >
                  ${amount}
                </Button>
              ))}
            </Grid>
          </div>

          <div>
            <Label htmlFor="custom-amount" color="var(--neutral-400)" marginBottom={8} display="block">
              Or enter a custom amount
            </Label>
            <Box position="relative">
              <Text position="absolute" left={12} top="50%" y="-50%" color="var(--neutral-400)">$</Text>
              <Input
                id="custom-amount"
                placeholder="Enter amount"
                type="number"
                min="1"
                step="1"
                value={customAmount}
                onChange={handleCustomAmountChange}
                paddingLeft={32} backgroundColor="var(--neutral-900)" borderColor="var(--neutral-700)" color="var(--white)"
              />
            </Box>
          </div>

          <Box backgroundColor="var(--surface-card-emphasis)" padding={16} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-800)">
            <XStack display="flex" justifyContent="space-between" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={4}>
              <Text color="var(--neutral-400)">Amount:</Text>
              <span>${getEffectiveAmount().toFixed(2)}</span>
            </XStack>
            <XStack display="flex" justifyContent="space-between" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">
              <Text color="var(--neutral-400)">Total:</Text>
              <span>${getEffectiveAmount().toFixed(2)}</span>
            </XStack>
          </Box>
        </Box>

        <DialogFooter>
          <Button
            type="button"
            variant="ghost"
            onClick={() => onOpenChange(false)}
            color="var(--neutral-400)" hoverStyle={{ color: "var(--white)", backgroundColor: "var(--neutral-800)" }}
            disabled={isProcessing}
          >
            Cancel
          </Button>
          <Button
            type="button"
            backgroundColor="var(--white)" color="var(--pure-black)" hoverStyle={{ backgroundColor: "var(--neutral-200)" }}
            onClick={handlePurchase}
            disabled={isProcessing || getEffectiveAmount() <= 0}
          >
            {isProcessing ? (
              <>
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Loader2 size={16} /></Box>
                Processing...
              </>
            ) : (
              <>
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><CreditCard size={16} /></Box>
                Purchase Credits
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseCreditsDialog;
