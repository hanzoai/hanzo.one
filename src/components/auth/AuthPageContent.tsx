import { Anchor, Box, H1, Paragraph, XStack } from '@/gui'

import React, { ReactNode } from 'react';

interface AuthPageContentProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}

const AuthPageContent: React.FC<AuthPageContentProps> = ({ 
  title, 
  subtitle, 
  children,
  footer
}) => {
  return (
    <XStack minHeight="100vh" backgroundColor="var(--black)" color="var(--white)" display="flex" alignItems="center" justifyContent="center" padding={16}>
      <Box width="100%" maxWidth="28rem" rowGap={24}>
        <Box textAlign="center" marginBottom={24}>
          <Anchor minHeight={44} href="/" display="inline-block" marginBottom={32}>
            <Box display="inline-block" 
              src="/placeholder.svg" 
              alt="Hanzo Logo" 
              render="img" height={40} marginHorizontal="auto"
            />
          </Anchor>
          <H1 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700">{title}</H1>
          {subtitle && (
            <Paragraph color="var(--neutral-400)" marginTop={8}>{subtitle}</Paragraph>
          )}
        </Box>
        
        <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
          {children}
        </Box>
        
        {footer && (
          <Box textAlign="center" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
            {footer}
          </Box>
        )}
      </Box>
    </XStack>
  );
};

export default AuthPageContent;
