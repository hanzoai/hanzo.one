import { Box, Grid, H2, H3, Paragraph } from '@/gui'

import React from "react";
import { 
  ShoppingCart, CreditCard, Package, BarChart, 
  Tags, Gift, Truck, Globe, Shield, Database
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ borderColor: "var(--border-strong)" }}>
      <Box backgroundColor="rgb(255 255 255 / 0.1)" padding={12} borderRadius="var(--radius-lg)" width="fit-content" marginBottom={16}>
        {icon}
      </Box>
      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={8}>{title}</H3>
      <Paragraph color="var(--neutral-400)">{description}</Paragraph>
    </Box>
  );
};

const Features = () => {
  const features = [
    {
      icon: <ShoppingCart size={24} color="var(--neutral-500)" />,
      title: "Headless Shopping Carts",
      description: "Flexible cart management with customizable checkout flows for any frontend."
    },
    {
      icon: <Package size={24} color="var(--neutral-500)" />,
      title: "Product Management",
      description: "Powerful catalog management with variants, collections, and custom attributes."
    },
    {
      icon: <CreditCard size={24} color="var(--neutral-500)" />,
      title: "Payment Processing",
      description: "Seamless integration with multiple payment gateways and subscription billing."
    },
    {
      icon: <Gift size={24} color="var(--neutral-500)" />,
      title: "Promotions & Discounts",
      description: "Create complex discount rules, coupons, and loyalty programs."
    },
    {
      icon: <Tags size={24} color="var(--neutral-500)" />,
      title: "Dynamic Pricing",
      description: "Implement sophisticated pricing strategies with targeted rules and segmentation."
    },
    {
      icon: <BarChart size={24} color="var(--neutral-500)" />,
      title: "Analytics & Reporting",
      description: "Real-time insights into sales, inventory, customer behavior, and more."
    },
    {
      icon: <Truck size={24} color="var(--neutral-500)" />,
      title: "Order Management",
      description: "Complete visibility and control over the entire order lifecycle."
    },
    {
      icon: <Globe size={24} color="var(--neutral-500)" />,
      title: "Multi-channel Selling",
      description: "Sell across websites, mobile apps, social media, and marketplaces."
    },
    {
      icon: <Shield size={24} color="var(--neutral-500)" />,
      title: "Fraud Protection",
      description: "Advanced security features to protect your business and customers."
    },
    {
      icon: <Database size={24} color="var(--neutral-500)" />,
      title: "Scalable Infrastructure",
      description: "Built for high-volume transactions with enterprise-grade reliability."
    }
  ];

  return (
    <Box render="section" paddingVertical={64} backgroundColor="var(--black)">
      <Box marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box textAlign="center" marginBottom={48}>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700">Powerful E-commerce Features</H2>
          <Paragraph marginTop={16} color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
            Everything you need to build exceptional shopping experiences, all through a simple API-first approach.
          </Paragraph>
        </Box>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Features;
