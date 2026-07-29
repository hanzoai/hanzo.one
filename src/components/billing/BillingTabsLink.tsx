import { Button } from '@/gui'

import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BillingTabsLinkProps {
  tabId: 'overview' | 'payment-methods' | 'history';
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
}

const BillingTabsLink: React.FC<BillingTabsLinkProps> = ({ 
  tabId, 
  children, 
  variant = 'outline' 
}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/account/billing#${tabId}`);
  };
  
  return (
    <Button 
      variant={variant} 
      onClick={handleClick}
      backgroundColor="var(--black)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
    >
      {children}
    </Button>
  );
};

export default BillingTabsLink;
