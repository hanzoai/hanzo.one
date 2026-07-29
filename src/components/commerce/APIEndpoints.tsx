import { Box, Grid, H2, H3, Paragraph, Tabs, TabsContent, TabsList, TabsTrigger } from '@/gui'

import React, { useState } from "react";

interface EndpointProps {
  path: string;
  description: string;
}

const EndpointCard = ({ path, description }: EndpointProps) => {
  return (
    <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={16} transition="all 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ borderColor: "var(--border-strong)" }}>
      <Box fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" marginBottom={8}>{path}</Box>
      <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{description}</Paragraph>
    </Box>
  );
};

const APIEndpoints = () => {
  const [activeCategory, setActiveCategory] = useState("commerce");

  const endpointCategories = {
    commerce: [
      { path: "/cart", description: "List all carts for the current session/user" },
      { path: "/cart/{id}", description: "Get details for a specific cart" },
      { path: "/cart/{id}/set", description: "Update cart items and quantities" },
      { path: "/cart/{id}/discard", description: "Remove a cart" },
      { path: "/checkout/capture/{id}", description: "Capture payment for a previously authorized checkout" },
      { path: "/checkout/charge", description: "Process a direct checkout charge" },
      { path: "/checkout/authorize", description: "Authorize payment for later capture" },
      { path: "/collection/{id}", description: "Get a specific product collection" },
      { path: "/collection", description: "List all product collections" },
      { path: "/coupon", description: "List all available coupons" },
      { path: "/coupon/{id}", description: "Get details for a specific coupon" },
      { path: "/discount", description: "List all available discounts" },
      { path: "/discount/{id}", description: "Get details for a specific discount" },
      { path: "/order/{id}", description: "Get a specific order" },
      { path: "/order", description: "List all orders" },
      { path: "/order/{id}/refund", description: "Process a refund for an order" },
      { path: "/order/{id}/payments", description: "View payment details for an order" },
      { path: "/order/{id}/capture", description: "Capture payment for a previously authorized order" },
      { path: "/product", description: "List all products" },
      { path: "/product/{id}", description: "Get a specific product" },
      { path: "/return/{id}", description: "Get details for a specific return" },
      { path: "/return", description: "List all returns" },
      { path: "/review", description: "List all product reviews" },
      { path: "/review/{id}", description: "Get a specific product review" },
      { path: "/store/{id}", description: "Get a specific store" },
      { path: "/store", description: "List all stores" },
      { path: "/site/{siteid}/deploy", description: "Deploy a site/storefront" },
      { path: "/store/{id}/product/{key}", description: "Get a specific product in a store" },
      { path: "/store/{id}/variant/{key}", description: "Get a specific variant in a store" },
      { path: "/variant/{id}", description: "Get a specific product variant" },
      { path: "/variant", description: "List all product variants" }
    ],
    identity: [
      { path: "/account/login", description: "User authentication endpoint" },
      { path: "/account", description: "Manage user account details" },
      { path: "/account/create", description: "Create a new user account" },
      { path: "/user/{id}", description: "Get or update a specific user" },
      { path: "/user", description: "List all users (admin)" }
    ],
    marketing: [
      { path: "/affiliate/{id}", description: "Get a specific affiliate" },
      { path: "/affiliate/{id}/connect", description: "Connect an affiliate to an account" },
      { path: "/affiliate", description: "List all affiliates" },
      { path: "/affiliate/{id}/transactions", description: "View affiliate transactions" },
      { path: "/referral", description: "List all referrals" },
      { path: "/referral/{id}", description: "Get a specific referral" },
      { path: "/campaign/{id}", description: "Get a specific marketing campaign" },
      { path: "/campaign", description: "List all marketing campaigns" },
      { path: "/form/{id}", description: "Get a specific marketing form" },
      { path: "/form", description: "List all marketing forms" },
      { path: "/form/{id}/submit", description: "Submit data to a marketing form" },
      { path: "/referrer/{id}", description: "Get a specific referrer" },
      { path: "/referrer/{id}/referrals", description: "List referrals for a specific referrer" },
      { path: "/referrer", description: "List all referrers" },
      { path: "/referrer/{id}/transactions", description: "View referrer transactions" },
      { path: "/submission/{id}", description: "Get a specific form submission" },
      { path: "/submission", description: "List all form submissions" },
      { path: "/subscriber/{id}", description: "Get a specific subscriber" },
      { path: "/subscriber", description: "List all subscribers" },
      { path: "/transaction/{id}", description: "Get a specific marketing transaction" }
    ],
    payments: [
      { path: "/invoice/{id}", description: "Get a specific invoice" },
      { path: "/invoice", description: "List all invoices" },
      { path: "/payment/{id}", description: "Get a specific payment" },
      { path: "/payment", description: "List all payments" },
      { path: "/payment/{id}/refund", description: "Process a refund for a payment" },
      { path: "/plan/{id}", description: "Get a specific subscription plan" },
      { path: "/plan", description: "List all subscription plans" },
      { path: "/plan/{id}/refund", description: "Process a refund for a subscription plan" },
      { path: "/subscription/{id}", description: "Get a specific subscription" },
      { path: "/subscription", description: "List all subscriptions" }
    ],
    platform: [
      { path: "/media", description: "List all media assets" },
      { path: "/media/{id}", description: "Get a specific media asset" },
      { path: "/organization/{id}", description: "Get a specific organization" },
      { path: "/organization", description: "List all organizations" },
      { path: "/organization/{id}/integrations", description: "List all integrations for an organization" },
      { path: "/organization/{id}/integrations/{integrationId}", description: "Get a specific integration" },
      { path: "/webhook", description: "List all webhooks" },
      { path: "/webhook/{id}", description: "Get a specific webhook" }
    ]
  };

  const tabClasses = "data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-400 border-b-0";

  return (
    <Box render="section" paddingVertical={64} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))">
      <Box marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box textAlign="center" marginBottom={40}>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Comprehensive API</H2>
          <Paragraph color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
            A complete API-first platform that powers your e-commerce business with flexible endpoints for every need.
          </Paragraph>
        </Box>
        
        <Box maxWidth="64rem" marginHorizontal="auto">
          <Tabs defaultValue="commerce" width="100%" onValueChange={setActiveCategory}>
            <TabsList width="100%" marginBottom={24} backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" padding={4} height="auto" display="flex" flexWrap="wrap">
              <TabsTrigger value="commerce" flex={1}>
                Commerce
              </TabsTrigger>
              <TabsTrigger value="identity" flex={1}>
                Identity
              </TabsTrigger>
              <TabsTrigger value="marketing" flex={1}>
                Marketing
              </TabsTrigger>
              <TabsTrigger value="payments" flex={1}>
                Payments
              </TabsTrigger>
              <TabsTrigger value="platform" flex={1}>
                Platform
              </TabsTrigger>
            </TabsList>
            
            {Object.keys(endpointCategories).map((category) => (
              <TabsContent key={category} value={category} marginTop={0}>
                <Box backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}>
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={16} color="var(--foreground)">
                    Hanzo {category.charAt(0).toUpperCase() + category.slice(1)} API Endpoints
                  </H3>
                  
                  <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={12} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                    {endpointCategories[category as keyof typeof endpointCategories].map((endpoint, index) => (
                      <EndpointCard
                        key={index}
                        path={endpoint.path}
                        description={endpoint.description}
                      />
                    ))}
                  </Grid>
                </Box>
              </TabsContent>
            ))}
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
};

export default APIEndpoints;
