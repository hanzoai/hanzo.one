import { Box, Button, Grid, H2, H3, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Terminal, PenTool, Layers } from "lucide-react";

const tabs = [
  { id: "js", label: "JavaScript", icon: <Code size={16} /> },
  { id: "py", label: "Python", icon: <Terminal size={16} /> },
  { id: "api", label: "API", icon: <PenTool size={16} /> }
];

const codeExamples = {
  js: `// Initialize Hanzo Analytics in your app
import { HanzoAnalytics } from 'hanzo-analytics';

// Configure your instance
const analytics = new HanzoAnalytics({
  projectId: 'YOUR_PROJECT_ID',
  options: {
    autoPageviews: true,
    trackClicks: true,
    debugMode: false
  }
});

// Track custom events
analytics.track('purchase_completed', {
  productId: 'prod_123',
  price: 89.99,
  currency: 'USD'
});

// Identify users
analytics.identify('user_123', {
  name: 'Jane Smith',
  email: 'jane@example.com',
  plan: 'premium'
});`,
  
  py: `# Install with pip install hanzo-analytics
import hanzo_analytics

# Initialize client
analytics = hanzo_analytics.Client(
    project_id="YOUR_PROJECT_ID",
    api_key="YOUR_API_KEY"
)

# Track events
analytics.track(
    event_name="order_completed",
    properties={
        "order_id": "ord_123",
        "total": 99.99,
        "products": [
            {"id": "prod_1", "name": "Keyboard", "price": 59.99},
            {"id": "prod_2", "name": "Mouse", "price": 39.99}
        ]
    },
    user_id="user_123"
)

# Batch tracking for performance
with analytics.batch():
    for event in events:
        analytics.track(event.name, event.properties, event.user_id)`,
  
  api: `# Using curl to send events to Hanzo Analytics API

curl -X POST https://api.hanzo.analytics/v1/track \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "projectId": "YOUR_PROJECT_ID",
    "event": "page_view",
    "properties": {
      "url": "https://yourapp.com/pricing",
      "referrer": "https://google.com",
      "title": "Pricing | Your App"
    },
    "userId": "user_123",
    "anonymousId": "anon_456",
    "timestamp": "2023-07-22T15:42:12.123Z"
  }'`
};

const DeveloperFirst = () => {
  const [activeTab, setActiveTab] = useState("js");
  
  return (
    <Box render="section" paddingVertical={128} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), transparent, transparent)"></Box>
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>Developer-First API & SDKs</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Easy-to-integrate SDKs and APIs designed for minimal friction and maximum flexibility.
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={40} $lg={{ gridTemplateColumns: "repeat(7, minmax(0, 1fr))" }}>
          <YStack display="flex" flexDirection="column" justifyContent="center" $lg={{ gridColumn: "span 3 / span 3" }}>
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <XStack display="flex" alignItems="center" marginBottom={20}>
                <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Layers size={24} color="var(--foreground)" /></Box>
                <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700">Designed for Developers</H3>
              </XStack>
              
              <Box render="ul" rowGap={16} marginBottom={32}>
                <XStack render="li" display="flex">
                  <Box marginRight={12} color="var(--foreground)">•</Box>
                  <div>
                    <Text fontWeight="500" color="var(--white)">OpenTelemetry Integration</Text>
                    <Paragraph color="var(--neutral-400)" marginTop={4}>Seamlessly integrate with your existing observability stack.</Paragraph>
                  </div>
                </XStack>
                <XStack render="li" display="flex">
                  <Box marginRight={12} color="var(--foreground)">•</Box>
                  <div>
                    <Text fontWeight="500" color="var(--white)">API-first, highly customizable</Text>
                    <Paragraph color="var(--neutral-400)" marginTop={4}>Build exactly what you need with our flexible API.</Paragraph>
                  </div>
                </XStack>
                <XStack render="li" display="flex">
                  <Box marginRight={12} color="var(--foreground)">•</Box>
                  <div>
                    <Text fontWeight="500" color="var(--white)">Robust documentation and code examples</Text>
                    <Paragraph color="var(--neutral-400)" marginTop={4}>Comprehensive guides and examples to get you started quickly.</Paragraph>
                  </div>
                </XStack>
              </Box>
              
              <XStack display="flex" flexWrap="wrap" gap={12}>
                <Button variant="outline" size="sm">View Documentation</Button>
                <Button variant="outline" size="sm">API Reference</Button>
                <Button variant="outline" size="sm">Example Projects</Button>
              </XStack>
            </MotionBox>
          </YStack>
          
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            $lg={{ gridColumn: "span 4 / span 4" }}
          >
            <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden" boxShadow="0 20px 25px -5px rgb(0 0 0 / .4)">
              <XStack display="flex" borderBottomWidth={1} borderColor="var(--neutral-800)">
                {tabs.map((tab) => (
                  <XStack minHeight={44}
                    key={tab.id}
                    render="button" display="flex" alignItems="center" paddingHorizontal={16} paddingVertical={12} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" backgroundColor={activeTab === tab.id ? "var(--neutral-800)" : undefined} color={activeTab === tab.id ? "var(--white)" : "var(--neutral-400)"} hoverStyle={activeTab === tab.id ? undefined : { color: "var(--white)", backgroundColor: "var(--surface-card)" }}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <Text marginRight={8}>{tab.icon}</Text>
                    {tab.label}
                  </XStack>
                ))}
              </XStack>
              
              <Box padding={20} overflowX="auto">
                <Box render="pre" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" fontFamily="var(--font-mono)" whiteSpace="pre">
                  {codeExamples[activeTab as keyof typeof codeExamples]}
                </Box>
              </Box>
              
              <Box backgroundColor="var(--neutral-900)" padding={12} borderTopWidth={1} borderColor="var(--neutral-800)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
                {activeTab === "js" && "npm install hanzo-analytics"}
                {activeTab === "py" && "pip install hanzo-analytics"}
                {activeTab === "api" && "API Key: Get yours from the Hanzo Analytics dashboard"}
              </Box>
            </Box>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default DeveloperFirst;
