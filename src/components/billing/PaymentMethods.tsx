import { Box, Button, Grid, H3, Input, Label, Text, XStack, toast } from '@/gui'

import React, { useState } from 'react';
import { CreditCard, Plus, Trash2, CheckCircle, Edit, ArrowLeft, X } from 'lucide-react';
import BillingTabsLink from './BillingTabsLink';
import { useNavigate } from 'react-router-dom';

const PaymentMethods = () => {
  const [cards, setCards] = useState([
    { id: 1, type: 'visa', last4: '4242', expMonth: 12, expYear: 25, isDefault: true },
    { id: 2, type: 'mastercard', last4: '5555', expMonth: 10, expYear: 24, isDefault: false }
  ]);
  
  const [showAddCard, setShowAddCard] = useState(false);
  const [newCard, setNewCard] = useState({
    cardNumber: '',
    cardName: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  });
  const navigate = useNavigate();

  const getCardIcon = (type: string) => {
    switch (type) {
      case 'visa':
        return <Box color="var(--neutral-500)" fontWeight="700" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">VISA</Box>;
      case 'mastercard':
        return <Box color="var(--neutral-500)" fontWeight="700" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">MC</Box>;
      default:
        return <CreditCard size={16} color="var(--neutral-400)" />;
    }
  };

  const setDefaultCard = (id: number) => {
    setCards(cards.map(card => ({
      ...card,
      isDefault: card.id === id
    })));
    
    toast.success('Default payment method updated');
  };
  
  const handleAddCard = () => {
    setShowAddCard(true);
  };
  
  const handleCloseAddCard = () => {
    setShowAddCard(false);
    setNewCard({
      cardNumber: '',
      cardName: '',
      expMonth: '',
      expYear: '',
      cvc: ''
    });
  };
  
  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCard(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmitCard = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!newCard.cardNumber || !newCard.cardName || !newCard.expMonth || !newCard.expYear || !newCard.cvc) {
      toast.error('Please fill in all fields');
      return;
    }
    
    // Add new card
    const cardType = newCard.cardNumber.startsWith('4') ? 'visa' : 'mastercard';
    const last4 = newCard.cardNumber.slice(-4);
    
    setCards([
      ...cards,
      {
        id: Date.now(),
        type: cardType,
        last4,
        expMonth: parseInt(newCard.expMonth),
        expYear: parseInt(newCard.expYear),
        isDefault: false
      }
    ]);
    
    toast.success('Payment method added successfully');
    handleCloseAddCard();
    
    // Navigate back to overview after adding card to continue user journey
    navigate('/account/billing#overview');
  };
  
  const handleDeleteCard = (id: number) => {
    setCards(cards.filter(card => card.id !== id));
    toast.success('Payment method removed');
  };

  return (
    <Box rowGap={32}>
      <XStack display="flex" alignItems="center" justifyContent="space-between">
        <XStack display="flex" alignItems="center">
          <BillingTabsLink tabId="overview" variant="ghost">
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><ArrowLeft size={16} /></Box> Back to Overview
          </BillingTabsLink>
        </XStack>
        <Button onClick={handleAddCard}>
          <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Plus size={16} /></Box>
          Add Payment Method
        </Button>
      </XStack>
      
      {/* Add new card form */}
      {showAddCard && (
        <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
          <XStack display="flex" justifyContent="space-between" alignItems="center" marginBottom={16}>
            <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500">Add Payment Method</H3>
            <Button variant="ghost" size="sm" onClick={handleCloseAddCard}>
              <X size={16} />
            </Button>
          </XStack>
          
          <Box onSubmit={handleSubmitCard} render="form" rowGap={16}>
            <Box rowGap={8}>
              <Label htmlFor="cardName">Name on Card</Label>
              <Input
                id="cardName"
                name="cardName"
                placeholder="John Doe"
                value={newCard.cardName}
                onChange={handleCardInputChange}
                backgroundColor="var(--neutral-800)" borderColor="var(--neutral-700)"
              />
            </Box>
            
            <Box rowGap={8}>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                name="cardNumber"
                placeholder="4242 4242 4242 4242"
                value={newCard.cardNumber}
                onChange={handleCardInputChange}
                backgroundColor="var(--neutral-800)" borderColor="var(--neutral-700)"
              />
            </Box>
            
            <Grid display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap={16}>
              <Box rowGap={8}>
                <Label htmlFor="expMonth">Month</Label>
                <Input
                  id="expMonth"
                  name="expMonth"
                  placeholder="MM"
                  maxLength={2}
                  value={newCard.expMonth}
                  onChange={handleCardInputChange}
                  backgroundColor="var(--neutral-800)" borderColor="var(--neutral-700)"
                />
              </Box>
              
              <Box rowGap={8}>
                <Label htmlFor="expYear">Year</Label>
                <Input
                  id="expYear"
                  name="expYear"
                  placeholder="YY"
                  maxLength={2}
                  value={newCard.expYear}
                  onChange={handleCardInputChange}
                  backgroundColor="var(--neutral-800)" borderColor="var(--neutral-700)"
                />
              </Box>
              
              <Box rowGap={8}>
                <Label htmlFor="cvc">CVC</Label>
                <Input
                  id="cvc"
                  name="cvc"
                  placeholder="123"
                  maxLength={3}
                  value={newCard.cvc}
                  onChange={handleCardInputChange}
                  backgroundColor="var(--neutral-800)" borderColor="var(--neutral-700)"
                />
              </Box>
            </Grid>
            
            <Button type="submit" width="100%" marginTop={16}>
              Add Payment Method
            </Button>
          </Box>
        </Box>
      )}
      
      {/* Cards list */}
      <Box rowGap={16}>
        {cards.map(card => (
          <XStack 
            key={card.id} 
            display="flex" alignItems="center" justifyContent="space-between" padding={16} borderRadius="var(--radius-lg)" borderWidth={1} borderColor={card.isDefault ? "var(--neutral-500)" : "var(--neutral-800)"} backgroundColor={card.isDefault ? "rgb(255 255 255 / 0.1)" : "rgb(255 255 255 / 0.3)"}
          >
            <XStack display="flex" alignItems="center">
              <XStack height={40} width={56} backgroundColor="var(--neutral-800)" borderRadius="var(--radius)" display="flex" alignItems="center" justifyContent="center" marginRight={16}>
                {getCardIcon(card.type)}
              </XStack>
              <div>
                <Box fontWeight="500">
                  {card.type.charAt(0).toUpperCase() + card.type.slice(1)} ending in {card.last4}
                  {card.isDefault && (
                    <Text marginLeft={8} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" backgroundColor="var(--surface-card-emphasis)" color="var(--foreground)" paddingHorizontal={8} paddingVertical={2} borderRadius="var(--radius-full)">
                      Default
                    </Text>
                  )}
                </Box>
                <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Expires {card.expMonth}/{card.expYear}</Box>
              </div>
            </XStack>
            
            <XStack display="flex" alignItems="center" columnGap={8}>
              {!card.isDefault && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setDefaultCard(card.id)}
                >
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><CheckCircle size={16} /></Box>
                  Set Default
                </Button>
              )}
              <Button variant="ghost" size="sm">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Edit size={16} /></Box>
                Edit
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                color="var(--foreground)" hoverStyle={{ color: "var(--foreground)", backgroundColor: "rgb(255 255 255 / 0.2)" }}
                onClick={() => handleDeleteCard(card.id)}
              >
                <Trash2 size={16} />
              </Button>
            </XStack>
          </XStack>
        ))}
      </Box>
      
      <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={24}>
        <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" marginBottom={16}>Billing Address</H3>
        <Box rowGap={4} marginBottom={16}>
          <div>Jane Doe</div>
          <div>123 Main St</div>
          <div>San Francisco, CA 94105</div>
          <div>United States</div>
        </Box>
        <Button variant="outline" size="sm">
          <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Edit size={16} /></Box>
          Edit Address
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentMethods;
