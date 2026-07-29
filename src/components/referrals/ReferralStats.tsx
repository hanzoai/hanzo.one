import { Box, Grid, XStack } from '@/gui'

import React from 'react';
import { Mail, User, DollarSign, Clock } from 'lucide-react';
import { ReferralStats } from './types';

interface ReferralStatsProps {
  referralStats: ReferralStats;
}

const ReferralStatsComponent = ({ referralStats }: ReferralStatsProps) => {
  return (
    <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
      <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
        <XStack display="flex" alignItems="center" gap={16}>
          <XStack height={48} width={48} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-800)" display="flex" alignItems="center" justifyContent="center">
            <Mail size={24} color="var(--neutral-400)" />
          </XStack>
          <div>
            <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Total Invited</Box>
            <Box fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700">{referralStats.totalInvited}</Box>
          </div>
        </XStack>
      </Box>
      
      <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
        <XStack display="flex" alignItems="center" gap={16}>
          <XStack height={48} width={48} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-800)" display="flex" alignItems="center" justifyContent="center">
            <User size={24} color="var(--neutral-400)" />
          </XStack>
          <div>
            <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Signed Up</Box>
            <Box fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700">{referralStats.signedUp}</Box>
          </div>
        </XStack>
      </Box>
      
      <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
        <XStack display="flex" alignItems="center" gap={16}>
          <XStack height={48} width={48} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-800)" display="flex" alignItems="center" justifyContent="center">
            <DollarSign size={24} color="var(--neutral-400)" />
          </XStack>
          <div>
            <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Credits Earned</Box>
            <Box fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700">${referralStats.creditsEarned}</Box>
          </div>
        </XStack>
      </Box>
      
      <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
        <XStack display="flex" alignItems="center" gap={16}>
          <XStack height={48} width={48} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-800)" display="flex" alignItems="center" justifyContent="center">
            <Clock size={24} color="var(--neutral-400)" />
          </XStack>
          <div>
            <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Pending</Box>
            <Box fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700">{referralStats.pending}</Box>
          </div>
        </XStack>
      </Box>
    </Grid>
  );
};

export default ReferralStatsComponent;
