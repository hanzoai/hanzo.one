import { Box, H2, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Text } from '@/gui'
import React from 'react';


interface ReferralRecord {
  id: number;
  name: string;
  email: string;
  status: string;
  date: string;
  credits: number;
}

interface ReferralHistoryProps {
  referralHistory: ReferralRecord[];
}

const ReferralHistory = ({ referralHistory }: ReferralHistoryProps) => {
  return (
    <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
      <H2 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" marginBottom={16}>Referral History</H2>
      
      <Box borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden">
        <Table>
          <TableHeader backgroundColor="var(--neutral-900)">
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead textAlign="right">Credits</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {referralHistory.map((referral) => (
              <TableRow key={referral.id} borderColor="var(--neutral-800)">
                <TableCell fontWeight="500">{referral.name}</TableCell>
                <TableCell>{referral.email}</TableCell>
                <TableCell>{referral.date}</TableCell>
                <TableCell>
                  <Text paddingHorizontal={8} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" backgroundColor={referral.status === 'Completed' ? "rgb(255 255 255 / 0.3)" : "rgb(255 255 255 / 0.3)"} color={referral.status === 'Completed' ? "var(--foreground)" : "var(--foreground)"}>
                    {referral.status}
                  </Text>
                </TableCell>
                <TableCell textAlign="right">
                  {referral.credits > 0 ? `$${referral.credits}` : '-'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default ReferralHistory;
