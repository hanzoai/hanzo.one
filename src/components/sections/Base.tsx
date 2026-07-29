import { Box, Button, Grid, H2, H3, H4, MotionBox, Paragraph, Text, XStack } from '@/gui'

import { motion } from "framer-motion";
import { Database, Lock, Zap, Cloud, Settings, Globe } from "lucide-react";

const Base = () => {
  return (
    <Box render="section" paddingVertical={80} backgroundImage="linear-gradient(to bottom, var(--pure-black), var(--neutral-900))">
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} backgroundColor="rgb(255 255 255 / 0)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <MotionBox 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          textAlign="center" marginBottom={64}
        >
          <XStack display="inline-flex" alignItems="center" columnGap={8} backgroundColor="rgb(255 255 255 / 0.1)" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" marginBottom={24}>
            <Database size={16} color="var(--neutral-400)" />
            <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">The Modern Backend Platform</Text>
          </XStack>
          <H2 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontFamily="var(--font-display)" color="var(--white)" marginBottom={16}>Everything You Need to Build at Scale</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            A complete backend platform with authentication, database, file storage, and serverless functions—all in one place.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={64} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            padding={32} borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), transparent)"
          >
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--white)" marginBottom={24}>One-Line Backend</H3>
            <Box backgroundColor="rgb(0 0 0 / 0.5)" padding={24} borderRadius="var(--radius-lg)" marginBottom={24}>
              <Box render="pre" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">
                <code>{`import { createClient } from '@hanzo/base';

// Complete backend in one line
const client = createClient();`}</code>
              </Box>
            </Box>
            <Paragraph color="var(--neutral-300)">Get a complete backend with just one line of code. Includes database, auth, storage, and more.</Paragraph>
          </MotionBox>

          <MotionBox 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={16}
          >
            <Box padding={24} borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), transparent)">
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Lock size={32} color="var(--neutral-400)" /></Box>
              <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--white)" marginBottom={8}>Authentication</H4>
              <Paragraph color="var(--neutral-300)">Multi-provider auth with social logins and enterprise SSO</Paragraph>
            </Box>
            <Box padding={24} borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), transparent)">
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Database size={32} color="var(--neutral-400)" /></Box>
              <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--white)" marginBottom={8}>Database</H4>
              <Paragraph color="var(--neutral-300)">Real-time database with powerful querying and indexing</Paragraph>
            </Box>
            <Box padding={24} borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), transparent)">
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Cloud size={32} color="var(--neutral-400)" /></Box>
              <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--white)" marginBottom={8}>Storage</H4>
              <Paragraph color="var(--neutral-300)">Secure file storage with CDN and image transformations</Paragraph>
            </Box>
            <Box padding={24} borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), transparent)">
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><Settings size={32} color="var(--neutral-400)" /></Box>
              <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--white)" marginBottom={8}>Functions</H4>
              <Paragraph color="var(--neutral-300)">Serverless functions with automatic scaling</Paragraph>
            </Box>
          </MotionBox>
        </Grid>

        <MotionBox 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          borderRadius="var(--radius-xl)" padding={32} marginBottom={64} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), var(--pure-black), rgb(255 255 255 / 0.08))"
        >
          <Grid display="grid" gap={32} alignItems="center" $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <div>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--white)" marginBottom={16}>Built for Scale</H3>
              <Box render="ul" rowGap={16}>
                <XStack render="li" display="flex" alignItems="flex-start" columnGap={12}>
                  <Box render="span" display="inline-flex" alignItems="center" marginTop={4}><Globe size={24} color="var(--neutral-400)" /></Box>
                  <div>
                    <H4 color="var(--white)" fontWeight="600">Global by Default</H4>
                    <Paragraph color="var(--neutral-300)">Multi-region deployments with automatic failover</Paragraph>
                  </div>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start" columnGap={12}>
                  <Box render="span" display="inline-flex" alignItems="center" marginTop={4}><Zap size={24} color="var(--neutral-400)" /></Box>
                  <div>
                    <H4 color="var(--white)" fontWeight="600">Enterprise Ready</H4>
                    <Paragraph color="var(--neutral-300)">SOC2, GDPR, and HIPAA compliant infrastructure</Paragraph>
                  </div>
                </XStack>
                <XStack render="li" display="flex" alignItems="flex-start" columnGap={12}>
                  <Box render="span" display="inline-flex" alignItems="center" marginTop={4}><Settings size={24} color="var(--neutral-400)" /></Box>
                  <div>
                    <H4 color="var(--white)" fontWeight="600">Full Control</H4>
                    <Paragraph color="var(--neutral-300)">Custom domains, edge functions, and more</Paragraph>
                  </div>
                </XStack>
              </Box>
            </div>
            <Box rowGap={16}>
              <Box textAlign="center">
                <Paragraph color="var(--neutral-300)" marginBottom={8}>Starting at</Paragraph>
                <Box fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" color="var(--white)" marginBottom={8}>$49</Box>
                <Paragraph color="var(--neutral-400)" marginBottom={16}>per month</Paragraph>
                <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Unlimited users & storage</Paragraph>
              </Box>
            </Box>
          </Grid>
        </MotionBox>

        <Box textAlign="center">
          <Button backgroundColor="var(--neutral-600)" color="var(--white)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" borderRadius="var(--radius-xl)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
            Start Building with Base
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Base;
