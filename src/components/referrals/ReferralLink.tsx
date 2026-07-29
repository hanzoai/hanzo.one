import { Box, Button, H2, H3, Input, Label, YStack, toast } from '@/gui'

import React, { useState } from 'react';
import { Copy, Check, Share2, Mail } from 'lucide-react';

interface ReferralLinkProps {
  referralLink: string;
  referralCode: string;
}

const ReferralLink = ({ referralLink, referralCode }: ReferralLinkProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setIsCopied(true);
    toast.success("Referral link copied to clipboard!");
    setTimeout(() => setIsCopied(false), 3000);
  };

  const handleSendInvites = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      toast.success(`Invitations sent to ${emailInput.split(',').length} contacts!`);
      setEmailInput('');
    } else {
      toast.error("Please enter at least one email address");
    }
  };

  return (
    <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
      <H2 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" marginBottom={16}>Your Referral Link</H2>
      <YStack display="flex" flexDirection="column" gap={16} $md={{ flexDirection: "row" }}>
        <Box position="relative" flex={1}>
          <Input 
            value={referralLink} 
            readOnly 
            paddingRight={48} backgroundColor="var(--neutral-900)" borderColor="var(--neutral-700)"
          />
          <Button 
            variant="ghost" 
            size="sm" 
            position="absolute" right={0} top={0} height="100%"
            onClick={handleCopyLink}
          >
            {isCopied ? <Check size={16} /> : <Copy size={16} />}
          </Button>
        </Box>
        <Button display="flex" alignItems="center" gap={8}>
          <Share2 size={16} />
          Share Link
        </Button>
      </YStack>
      
      <Box marginTop={24} paddingTop={24} borderTopWidth={1} borderColor="var(--neutral-800)">
        <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" marginBottom={16}>Send Invites via Email</H3>
        <YStack onSubmit={handleSendInvites} render="form" display="flex" flexDirection="column" gap={16} $md={{ flexDirection: "row" }}>
          <Box flex={1}>
            <Label htmlFor="emails" position="absolute" width={1} height={1} overflow="hidden" opacity={0}>Email Addresses</Label>
            <Input 
              id="emails"
              placeholder="Enter email addresses, separated by commas" 
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              backgroundColor="var(--neutral-900)" borderColor="var(--neutral-700)"
            />
          </Box>
          <Button type="submit" display="flex" alignItems="center" gap={8}>
            <Mail size={16} />
            Send Invites
          </Button>
        </YStack>
      </Box>
    </Box>
  );
};

export default ReferralLink;
